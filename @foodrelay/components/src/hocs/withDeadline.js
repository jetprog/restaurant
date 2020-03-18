import React from "react";
import moment from "moment";
import { getDateTimeUTC } from "../utils/time";

// CURRENT DEADLINES

/*
Editing deadline is 2 days before order delivery date, at midnight
Ordering deadline for breakfasts is 8am on the order delivery date
Ordering deadline for lunches is 10am on the order delivery date
Ordering deadline for dinners is 3pm on the order delivery date
*/

// CHECK FUNCTIONS
const is_passed = (deadline, now) => {
  let remaining = deadline.diff(now);
  if (remaining <= 0) {
    return true;
  } else {
    return false;
  }
};

const remaining = (deadline, now) => {
  return now.to(deadline);
};

const withDeadline = WrappedComponent => {
  class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        now: moment()
      };
    }

    componentDidMount() {
      this.intervalID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.intervalID);
    }

    tick() {
      this.setState({
        now: moment()
      });
    }

    render() {
      let now = this.state.now;
      let order = this.props.order ? this.props.order : null;
      let prestation = this.props.prestation ? this.props.prestation : null;
      let date = null;
      if (this.props.current_date) {
        date = moment(this.props.current_date).add(5, "hours");
      }
      let deadlines = {
        editing: {
          passed: false,
          remaining: 0
        },
        ordering: {
          passed: false,
          remaining: 0
        }
      };
      // if component receives a single order, adjust deadlines for that order
      if (order) {
        if (order.prestation) {
          let deadline_time = order.prestation.deadline;
          const ordering_deadline = moment(order.delivery_date)
            .startOf("day")
            .add(moment.duration(deadline_time));
          const editing_deadline = moment(order.delivery_date)
            .subtract(2, "days")
            .endOf("day");
          deadlines = {
            editing: {
              moment: editing_deadline,
              passed: is_passed(editing_deadline, now),
              remaining: remaining(editing_deadline, now)
            },
            ordering: {
              moment: ordering_deadline,
              passed: is_passed(ordering_deadline, now),
              remaining: remaining(ordering_deadline, now)
            }
          };
        }
        // otherwise return ordering deadline depending on type and date
      } else if (prestation && date) {
        let deadline_time = prestation.deadline;
        const ordering_deadline = date
          .clone()
          .startOf("day")
          .add(moment.duration(deadline_time));
        deadlines = {
          ordering: {
            moment: ordering_deadline,
            passed: is_passed(ordering_deadline, now),
            remaining: remaining(ordering_deadline, now)
          }
        };
      }
      return <WrappedComponent {...this.props} deadlines={deadlines} />;
    }
  }

  return HOC;
};

export default withDeadline;
