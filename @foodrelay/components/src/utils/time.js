import moment from "moment"

export const getDateTimeUTC = (date, time = "12:00") => {
  let utcDatetime = moment(date).format("YYYY-MM-DD") + "T" + time
  utcDatetime = new Date(utcDatetime)
  utcDatetime = moment.utc(utcDatetime).format("YYYY-MM-DDTHH:mm:ss")
  return utcDatetime
}

// get current week dates from monday to sunday
export const getWeekDates = ({ start_day, week_size }) => {
  let start = moment(start_day)
    .utc()
    .add(1, "days")
  start = moment(start).startOf("isoweek")
  const weekDates = []
  for (let i = 0; i < week_size; i++) {
    weekDates.push(
      moment(start)
        .add(i, "days")
        .locale("fr"),
    )
  }
  return weekDates
}

export const isToday = (current_date, now = moment()) => {
  return moment(now).isSame(current_date.format("YYYY-MM-DD"), "day")
}

export const isPast = (current_date, now = moment()) => {
  return current_date.isBefore(moment(now), "day")
}
