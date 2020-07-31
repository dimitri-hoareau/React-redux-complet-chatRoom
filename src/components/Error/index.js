import React from 'react';
import './style.scss';

const Error = ({ message }) => {
  if (!message) {
    return false;
  }
  return (
    <div className="error-message">
      {message}
    </div>
  );
};
export default Error;
