import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      question: -1,
    };
  }

  render() {
    const {time, numErrors} = this.props;

    return <WelcomeScreen time={time} numErrors={numErrors} onStartButtonClick={() => {
      this.setState(
          (prevState) =>
            ({question: prevState.question + 1})
      );
    }
    }
    />;
  }

  statis getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {time, numErrors} = props;

      return <WelcomeScreen time={time} numErrors={numErrors} onStartButtonClick={onUserAnswer}/>;
    }

    const {questions} = props;
    return <div>Играем</div>;
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  numErrors: PropTypes.number.isRequired,
};

