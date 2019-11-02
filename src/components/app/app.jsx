import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';
import GuessArtist from '../guess-artist/guess-artist.jsx';
import GuessGenre from '../guess-genre/guess-genre.jsx';


export default class App extends PureComponent {
  static getScreen(question, props, onUserAnswer) {
    if (question === -1) {
      const {time, numErrors} = props;

      return <WelcomeScreen time={time} numErrors={numErrors} onStartButtonClick={onUserAnswer}/>;
    }

    const {questions} = props;
    const currentQuestion = questions[question];

    switch (currentQuestion.type) {
      case `genre`: return <GuessGenre
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;

      case `artist`: return <GuessArtist
        screenIndex={question}
        question={currentQuestion}
        onAnswer={onUserAnswer}
      />;
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      question: -1,
    };
  }

  render() {
    const {
      questions
    } = this.props;

    const {question} = this.state;

    return App.getScreen(question, this.props, () => {
      this.setState((prevState) => {
        const nextIndex = prevState.question + 1;
        const isEnd = nextIndex >= questions.length;

        return {
          question: !isEnd ? nextIndex : -1,
        };
      });
    });
  }
}

App.propTypes = {
  time: PropTypes.number.isRequired,
  numErrors: PropTypes.number.isRequired,
  questions: PropTypes.array.isRequired,
};

