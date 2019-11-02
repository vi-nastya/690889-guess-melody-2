import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import GuessGenre from './guess-genre';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

const onAnswer = jest.fn();
const wrapper = shallow(
    <GuessGenre
      question={questions[0]}
      screenIndex={0}
      onAnswer={onAnswer}
    />
);

const song = wrapper.find(`.game__input`).first();
song.simulate(`click`);
const form = wrapper.find(`.game__tracks`);
form.simulate(`submit`);

describe(`Tests for GuessGenre`, () => {
  it(`onAnswer was called 1 time`, () => {
    expect(onAnswer).toHaveBeenCalledTimes(1);
  });
  it(`onAnswer received an array as an argument`, () => {
    expect(onAnswer).toBeCalledWith(expect.any(Array));
  });
});
