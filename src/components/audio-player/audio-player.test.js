import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';
import {questions} from '../../mocks/questions';

it(`Audio player is rendered correctly`, () => {
  const tree = renderer
    .create(
        <AudioPlayer
          src={questions[0].answers[0].src}
          isPlaying={false}
          onPlayButtonClick={() => {}}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
