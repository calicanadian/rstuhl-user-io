import React from 'react';
import './User.css';

const userInput = (props) => {
  return (
    <div className="card">
      <input className="username-input" type='text' onChange={props.changed} value={props.username} />
    </div>
  )
};

export default userInput;
