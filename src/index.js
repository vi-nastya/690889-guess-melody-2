import React from "react";
import ReactDOM from "react-dom";
import App from './components/app.jsx';

const init = () => {
  ReactDOM.render(
      <App/>,
      document.getElementById(`root`)
  );
};

init();
