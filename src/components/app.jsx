import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from './welcome-screen.jsx';

const App = (props) => {
  const {time, numErrors} = props;

  return <WelcomeScreen time={time} numErrors={numErrors}
  />;
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  numErrors: PropTypes.number.isRequired,
};

export default App;
