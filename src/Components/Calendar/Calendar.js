import React, { Component } from 'react';
import Day from '../Day/Day';
import './Calendar.css';

import { days } from '../../helpers.js';

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // days: [];
    }
  }

  componentDidMount() {
    
  }

  renderTableHeadings = () => {
    return days.map((day, index) => {
      return (
        <th key={`th-${index}`} className='Calendar__heading'>{day}</th>
      );
    })
  }

  renderTableRows = () => {
    const rows = [0, 1, 2, 3, 4, 5];
    return rows.map((row, index) => {
      const dates = this.props.days.splice(0, days.length);
      // console.log(dates);
      return (
        <tr key={`tr-${index}`} className='Calendar__week'>
          {this.renderCalDay(dates)}
        </tr> 
      );
    })
  }

  renderCalDay = (dates) => {
    console.log('day:', dates)
    return days.map((day, index) => {
      return (
        <Day key={`day-${index}`} date={dates[index]}/>
      );
    })
  }


  render() {
    console.log(this.props.days)
    return (
      <table className='Calendar'>
        <thead>
          <tr className='Calendar__week'>
            {this.renderTableHeadings()}
          </tr> 
        </thead>
        <tbody>
          {this.renderTableRows()}
        </tbody>
      </table>
    );
  }
}

export default Calendar;
