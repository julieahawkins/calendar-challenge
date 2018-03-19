export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export const days = [
  'Sun',
  'Mon',
  'Tue',
  'Wed',
  'Thu',
  'Fri',
  'Sat'
];

export const currentDate = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const date = new Date(year, (month + 1), 0);
  const daysInMonth = date.getDate();

  const endDay = date.getDay();
  date.setDate(1);
  const startDay = date.getDay();

  const days = [];

  let prevMonthDays = 0;

  if (startDay !== 0) {
      prevMonthDays = new Date(year, month - 1, 0).getDate() - startDay;
  }
  /* This is placeholder for next month. If month does not end on Saturday, placeholders for next days to fill other cells */
  let count = 0;
  // 42 = 7 columns * 6 rows. This is the standard number. Verify it with any standard Calendar
  for (let i = 0; i < 42; i++) {
    let day = {};
    /* So start day is not Sunday, so we can display previous month dates. For that below we identify previous month dates */
    if (i < startDay) {
        day.date = (prevMonthDays = prevMonthDays + 1);
        /* belong to next month dates. So, month does not end on Saturday. So here we get next month dates as placeholders */
    } else if (i > daysInMonth + (startDay - 1)) {
        day.date = (count = count + 1);
        /* belong to current month dates. */
    } else {
        day.date = (i - startDay) + 1;
    }
    days[days.length] = day.date;
  }

  return { month, year, daysInMonth, endDay, startDay, days };
}
