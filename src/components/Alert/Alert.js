import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import './alert.css';

export class Alert extends Component {
  render() {
    return (
      <CSSTransition in={true} appear={true} timeout={1700} classNames="Alert">
        {/* <button type="button" className="alert">
          Alredy in contacts!
        </button> */}
        <p className="alert">Contact already exists!</p>
      </CSSTransition>
    );
  }
}

export default Alert;
