import React, { Component } from 'react';
import Header from '../Header/Header';
import Calendar from '../Calendar/Calendar';
import AddEventForm from '../AddEventForm/AddEventForm';
import './App.css';
import { currentDate } from '../../helpers.js';



class App extends Component {
  constructor() {
    super();
    this.state = {
      addEventForm: false,
      events: [],
      date: { 
        days: [],
        month: '',
        year: ''
      }
    };
  }

  componentDidMount() {
    const date = currentDate();

    this.setState({ date });
  }

  handleForm = () => {
    const addEventForm = !this.state.addEventForm;

    this.setState({ addEventForm });
  }

  createEvent = (event) => {
    const events = [...this.state.events, event];

    this.setState({ events });
  }

  render() {
    const { month, year, days } = this.state.date;
    const { events } = this.state;

    return (
      <div className="App">
        <Header month={month} year={year} />
        <Calendar days={days} month={month} handleForm={this.handleForm} events={events}/>
        {
          this.state.addEventForm &&
          <AddEventForm createEvent={this.createEvent} handleForm={this.handleForm}/>
        }
      </div>
    );
  }
}

export default App;
