import React, { Component } from 'react';
import PropTypes from 'prop-types'
import React, { Component } from "react";
import logo from "../utilities/images/logo.png";
import SignRegister from "../SignRegister";
import "./Log.css";

class Log extends Component {
  render() {
    const { name } = this.props.currentMountainLog;
    let singleLog = this.props.currentMountainLog.map(log => {
      return (
        <li>
          name: {log.attributes.name}, hometown:{log.attributes.hometown},Date:
          {log.attributes.date}
        </li>
      );
    });

    if (!singleLog.length) {
      singleLog = <h2>This Summit has no existing log</h2>;
    }

    return (
      <div className="Log">
        <header className="header">
          <button className="back-btn" onClick={this.props.handleBackButton}>
            Back
          </button>
          <img className="logo-small" alt="logo" src={logo} />
        </header>
        <h1>{name}</h1>
        <ol>{singleLog}</ol>
        <SignRegister handleLogUpdate={this.props.handleLogUpdate} />
      </div>
    );
  }
}

Log.propTypes = {
  handleBackButton: PropTypes.func,
  currentMountainLog: PropTypes.array,
  handleLogUpdate: PropTypes.func

}

export default Log;