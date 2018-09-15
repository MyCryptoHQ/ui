import PropTypes from 'prop-types';
import React from 'react';
import './Button.css';

export default function Button({ className, ...rest }) {
  return <button className={`button ${className}`} type="button" {...rest} />;
}

Button.propTypes = { className: PropTypes.string };
