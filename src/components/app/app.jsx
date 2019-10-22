import React from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const onStartGameClick = () => {
  // TODO: implement
};

const App = (props) => {
  const {time, numErrors} = props;

  return <WelcomeScreen time={time} numErrors={numErrors} onClick={onStartGameClick}
  />;
};

App.propTypes = {
  time: PropTypes.number.isRequired,
  numErrors: PropTypes.number.isRequired,
};

export default App;
