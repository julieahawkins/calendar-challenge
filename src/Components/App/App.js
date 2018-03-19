import React, { Component } from 'react';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';

import './App.css';

import { currentDate } from '../../helpers.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: { 
        month: '',
        year: '',
        daysInMonth: '',
        endDay: '',
        startDay: '',
      },
      days: []
    }
  }

  componentDidMount() {
    const date = currentDate();
    const days = [...date.days];

    this.setState({ date, days });
  }

  render() {
    const { month, year, daysInMonth } = this.state.date;
    const { days } = this.state;
    return (
      <div className="App">
        <Header month={month} year={year} />
        <Calendar days={days}/>
      </div>
    );
  }
}

export default App;
