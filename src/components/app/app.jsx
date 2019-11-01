import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const onStartGameClick = () => {
  // TODO: implement
};

export default class App extends PureComponent {
  render() {
    const {time, numErrors} = this.props;

    return <WelcomeScreen time={time} numErrors={numErrors} onClick={onStartGameClick}
    />;
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  numErrors: PropTypes.number.isRequired,
};

