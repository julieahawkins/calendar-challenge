import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import { months } from '../../helpers.js';

const Header = ({ month, year }) => {
  console.log("header:", month, year)
  return (
    <div className="Header">
      <h1>{months[month]} <span>{year}</span></h1>
    </div>
  );
}

PropTypes.Header = {
  month: PropTypes.string,
  year: PropTypes.string
}

export default Header;
