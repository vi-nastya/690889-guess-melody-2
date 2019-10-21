import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';

const init = () => {
  const params = {
    time: 10,
    numErrors: 3,
  };

  ReactDOM.render(
      <App time={params.time} numErrors={params.numErrors}/>,
      document.getElementById(`root`)
  );
};

init();
