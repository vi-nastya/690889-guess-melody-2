import React from "react";
import renderer from "react-test-renderer";
import WelcomeScreen from "./welcome-screen";

it(`Welcome screen is rendered correctly after relaunch`, () => {
  const tree = renderer.create(<WelcomeScreen time={0} numErrors={0} onStartButtonClick={jest.fn()}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
