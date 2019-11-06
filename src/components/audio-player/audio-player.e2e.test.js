import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from "enzyme-adapter-react-16";

import AudioPlayer from './audio-player';
import {questions} from '../../mocks/questions';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer handles button click correctly`, () => {
  const onButtonClick = jest.fn();
  const wrapper = shallow(
      <AudioPlayer
        src={questions[0].answers[0].src}
        isPlaying={false}
        onPlayButtonClick={onButtonClick}
      />
  );

  wrapper.find(`.track__button`).simulate(`click`);
  expect(wrapper.state().isPlaying).toEqual(true);

  wrapper.find(`.track__button`).simulate(`click`);
  expect(wrapper.state().isPlaying).toEqual(false);
});
