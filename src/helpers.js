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
  console.log('get date')
  const currentDate = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const date = new Date(year, (month + 1), 0);
  const daysInMonth = date.getDate();

  // const endDay = date.getDay();
  date.setDate(1);
  const startDay = date.getDay();

  let days = [];
  let prevMonthDays = 0;

  if (startDay !== 0) {
    prevMonthDays = new Date(year, month, 0).getDate() - startDay;
  }
  let count = 0;

  for (let i = 0; i < 42; i++) {
    let day = {};

    if (i < startDay) {
      day.date = (prevMonthDays = prevMonthDays + 1);
    } else if (i > daysInMonth + (startDay - 1)) {
      count = count + 1;
      let setDate = count;

      if (count === 1) {
        setDate = `${months[month+1].split('').splice(0, 3).join('')} ${count}`
      }
      day.date = setDate;
    } else {
      day.date = (i - startDay) + 1;
    }
    days[days.length] = day.date;
  }

  return { month, year, days };
}

