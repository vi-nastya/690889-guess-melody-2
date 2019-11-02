import React from "react";
import ReactDOM from "react-dom";
import App from './components/app/app.jsx';
import {questions} from './mocks/questions';

const init = () => {
  const params = {
    time: 10,
    numErrors: 3,
  };

  ReactDOM.render(
      <App time={params.time} numErrors={params.numErrors} questions={questions}/>,
      document.getElementById(`root`)
  );
};

init();
