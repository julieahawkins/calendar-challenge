import React, { Component } from 'react';
import Header from '../Header/Header';
import './App.css';

import { currentDate } from '../../helpers.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: { 
        month: '',
        year: '',
      }
    }
  }

  componentDidMount() {
    const date = currentDate();

    this.setState({ date });
  }

  render() {
    return (
      <div className="App">
        <Header month={this.state.date.month} year={this.state.date.year} />
      </div>
    );
  }
}

export default App;
