import React, { Component } from 'react';
import './AddEventForm.css';


class AddEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      start: '',
      end: ''
    }
  }

  handleSubmit = () => {
    const event = { ...this.state };

    this.props.createEvent(event);
    this.props.handleForm();
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <div className='AddEventForm'>
        <h2>CREATE EVENT</h2>
        <input 
          type='text'
          name='title' 
          className='AddEventForm__input' 
          placeholder='Event title'
          onChange={this.handleInput}
          value={this.state.title}/>
        <input 
          type='text'
          name='start' 
          className='AddEventForm__input' 
          placeholder='Event Start Time'
          onChange={this.handleInput}
          value={this.state.start}/>
        <input 
          type='text'
          name='end' 
          className='AddEventForm__input' 
          placeholder='Event End Time'
          onChange={this.handleInput}
          value={this.state.end}/>
        <button onClick={this.handleSubmit} className='AddEventForm__submit'>Create Event</button>
      </div>
    );
  }
}

export default AddEventForm;
