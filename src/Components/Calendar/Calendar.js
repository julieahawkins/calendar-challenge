import React from 'react';
import Day from '../Day/Day';
import './Calendar.css';

import { days, months } from '../../helpers.js';

const Calendar = (props) => {
  const renderTableHeadings = () => {
    return days.map((day, index) => {
      return (
        <th key={`th-${index}`} className='Calendar__heading'>{day}</th>
      );
    })
  }

  const renderTableRows = () => {
    const rows = [0, 1, 2, 3, 4, 5];
    return rows.map((row, index) => {
      const dates = props.days.splice(0, days.length);
      
      return (
        <tr key={`tr-${index}`} className='Calendar__week'>
          {renderCalDay(dates)}
        </tr> 
      );
    })
  }

  const renderCalDay = (dates) => {
    return days.map((day, index) => {
      const { month } = props;

      const thisMonth = months[month];
      // const nextMonth = months[month+1];

      const date = dates[index] !== 1 ? dates[index] : `${thisMonth.split('').splice(0, 3).join('')} ${dates[index]}`;

      return (
        <Day key={`day-${index}`} date={date} handleForm={props.handleForm} />
      );
    })
  }

  return (
    <table className='Calendar'>
      <thead>
        <tr className='Calendar__week'>
          {renderTableHeadings()}
        </tr> 
      </thead>
      <tbody>
        {renderTableRows()}
      </tbody>
    </table>
  );
}

export default Calendar;
