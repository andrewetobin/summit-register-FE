import React, { Component } from "react";
import PropTypes from "prop-types";
import "./RegisterForm.css";

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      hometown: "",
      comments: ""
    };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.handleLogUpdate();
  };

  render() {
    const { name, hometown, comments } = this.state;
    return (
      <div className="RegisterForm">
        <button className="back-btn" onClick={this.props.handleBackButton}>
          Back
        </button>
        <form onSubmit={this.handleSubmit}>
          <input
            className="name-input"
            value={name}
            name="name"
            onChange={this.handleChange}
          />
          <input
            className="hometown-input"
            value={hometown}
            name="hometown"
            onChange={this.handleChange}
          />
          <input
            className="comments-input"
            value={comments}
            name="comments"
            onChange={this.handleChange}
          />
          <button
            // onClick={}
            type="submit"
          >
            Submit Your Entry
          </button>
        </form>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  currentDisplay: PropTypes.string,
  handleBackButton: PropTypes.func,
  handleLogUpdate: PropTypes.func
};
export default RegisterForm;
