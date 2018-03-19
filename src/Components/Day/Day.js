import React, { Component } from 'react';
// import Header from '../Header/Header';
import './Day.css';


class Day extends Component {
  constructor(props) {
    super(props);
  
  }

  componentDidMount() {
    
  }


  render() {
    return (
      <td className='Day'>
        <div className='Day__body'>
          <h3 className='Day__date'>{this.props.date}</h3>
          
        </div>
      </td>
    );
  }
}

export default Day;
