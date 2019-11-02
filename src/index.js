import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {questions} from './mocks/questions';
import {gameSettings} from './mocks/game-settings';

const init = () => {
  ReactDOM.render(
      <App time={gameSettings.time} numErrors={gameSettings.numErrors} questions={questions}/>,
      document.getElementById(`root`)
  );
};

init();
