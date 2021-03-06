import React, { Component } from "react";
import SignRegister from "../SignRegister";
import PropTypes from "prop-types";
import "./Footer.css";

class Footer extends Component {
  render() {
    const {
      handleSignLog,
      handleSignIn,
      currentDisplay,
      handleMyMountains,
      withinRange,
      handleSignOut,
      isSignedIn
    } = this.props;

    return (
      <footer className="Footer">
        {currentDisplay[0] !== "registerForm" &&
          currentDisplay[0] !== "myMountains" &&
          currentDisplay[0] !== "start" && (
            <SignRegister
              handleSignLog={handleSignLog}
              withinRange={withinRange}
            />
          )}
        {isSignedIn === true && currentDisplay[0] !== "myMountains" && (
          <button
            className="my-mountains-btn footer-btn"
            onClick={handleMyMountains}
          >
            My Mountains
          </button>
        )}
        {isSignedIn === true && (
          <button className="sign-out-btn footer-btn" onClick={handleSignOut}>
            Sign Out
          </button>
        )}
        {this.props.isSignedIn === false && (
          <button className="sign-in-btn footer-btn" onClick={handleSignIn}>
            Sign In
          </button>
        )}
      </footer>
    );
  }
}

Footer.propTypes = {
  currentDisplay: PropTypes.array,
  handleSignIn: PropTypes.func,
  handleSignOut: PropTypes.func,
  handleSignLog: PropTypes.func,
  handleMyMountains: PropTypes.func,
  isSignedIn: PropTypes.bool,
  withinRange: PropTypes.bool
};

export default Footer;
