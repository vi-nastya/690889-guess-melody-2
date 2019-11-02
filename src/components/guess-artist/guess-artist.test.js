import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtist from './guess-artist';
import {questions} from '../../mocks/questions';

it(`Guess artist question is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GuessArtist
          question={questions[1]}
          screenIndex={0}
          onAnswer={() => {}}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
