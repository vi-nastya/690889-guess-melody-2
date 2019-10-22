import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import WelcomeScreen from "./welcome-screen";

Enzyme.configure({adapter: new Adapter()});

it(`WelcomeScreen button works correctly`, () => {
  const clickHandler = jest.fn();
  const welcomeScreen = shallow(<WelcomeScreen time={0} numErrors={0} onClick={clickHandler}/>);

  const startButton = welcomeScreen.find(`.welcome__button`);
  startButton.simulate(`click`);

  expect(clickHandler).toHaveBeenCalledTimes(1);
});
