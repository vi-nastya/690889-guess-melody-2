import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {questions} from './mocks/questions';
import {GameSettings} from './mocks/game-settings';

const init = () => {
  ReactDOM.render(
      <App time={GameSettings.TIME} numErrors={GameSettings.NUM_ERRORS} questions={questions}/>,
      document.getElementById(`root`)
  );
};

init();
