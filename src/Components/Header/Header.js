import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

import { months } from '../../helpers.js';

const Header = ({ month, year }) => {
  return (
    <div className="Header">
      <h1 className="Header__date">{months[month]} <span className="Header__date--year">{year}</span></h1>
    </div>
  );
}

PropTypes.Header = {
  month: PropTypes.string,
  year: PropTypes.string
}

export default Header;
