import React from "react";
import renderer from "react-test-renderer";
import App from "./app";

it(`Welcome screen is rendered correctly after relaunch`, () => {
  const tree = renderer.create(<App time={0} numErrors={0}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
