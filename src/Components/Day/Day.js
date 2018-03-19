import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Day.css';


class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  handleDblClick = () => {
    this.props.handleForm();
    
    // const events = [...this.state.events, newEvent];

    // this.setState({ events });
  }

  render() {
    const { date } = this.props;
    const events = this.state.events.map((event, index) => {
      return (
        <p key={`event-${index}`} className='event'>{event.title}</p>
      );
    });

    return (
      <td className='Day'>
        <div className='Day__body' onDoubleClick={this.handleDblClick}>
          <h3 className='Day__date'>{date}</h3>
          <div className='Day__events'>
            {events}
          </div>
        </div>
      </td>
    );
  }
}

Day.propTypes = {
  date: PropTypes.string,
  handleForm: PropTypes.func
};

export default Day;
