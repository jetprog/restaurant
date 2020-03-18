export const calculatePercentage = (amount, percentage) => {
  let result = 0;
  if (amount && percentage) {
    result = (parseInt(amount) * parseInt(percentage)) / 100;
  }
  return result;
};

export const calculateOrderSummary = (
  mode,
  line_items,
  order,
  purchases,
  delivery_fee,
  gst,
  qst,
  service_fee
) => {
  let estimated_attendees = order.is_recurring
    ? order.attendees.length
    : order.number_of_expected_people;
  let choices = purchases.filter(p => p.status == "paid").length;
  let service_fee_amount = service_fee * 100;
  let gst_amount = gst * 100;
  let qst_amount = qst * 100;
  let summary = {
    line_items: [],
    delivery_fee: delivery_fee,
    service_fee: 0,
    subtotal_without_service_fee: 0,
    subtotal: 0,
    gst: 0,
    qst: 0,
    total: 0
  };

  line_items.map(li => {
    let unit_price = li.unit_price;
    let total_price = 0;
    let line_item = { ...li };
    // adjust unit price based on add ons
    if (li.add_ons.length > 0) {
      li.add_ons.map(ao => {
        unit_price += ao.unit_price;
      });
      if (li.rebate > 0) {
        unit_price -= li.rebate;
      }
    }
    if (mode == "estimate") {
      total_price = unit_price * estimated_attendees;
    } else if (mode == "summary") {
      total_price = unit_price * choices;
    }
    line_item.unit_price = unit_price;
    line_item.total_price = total_price;
    summary.line_items.push(line_item);
    summary.subtotal_without_service_fee += total_price;
  });

  if (delivery_fee) {
    summary.subtotal_without_service_fee += delivery_fee;
  }

  if (service_fee) {
    summary.service_fee = calculatePercentage(
      summary.subtotal_without_service_fee,
      service_fee_amount
    );
  }

  summary.subtotal = summary.subtotal_without_service_fee + summary.service_fee;
  if (gst) {
    summary.gst = calculatePercentage(summary.subtotal, gst_amount);
  }
  if (qst) {
    summary.qst = calculatePercentage(summary.subtotal, qst_amount);
  }
  summary.total = summary.subtotal + summary.gst + summary.qst;

  return summary;
};
