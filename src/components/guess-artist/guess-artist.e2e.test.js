import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import GuessArtist from './guess-artist';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

const onAnswer = jest.fn();
const wrapper = shallow(
    <GuessArtist
      question={questions[1]}
      screenIndex={0}
      onAnswer={onAnswer}
    />
);

const artist = wrapper.find(`.artist`).first();

artist.simulate(`click`);

describe(`Tests for GuessArtist`, () => {
  it(`onAnswer was called 1 time`, () => {
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });
  it(`onAnswer received a string as an argument`, () => {
    expect(onAnswer).toBeCalledWith(expect.any(String));
  });
});
