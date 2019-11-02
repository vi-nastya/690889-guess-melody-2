import React from 'react';
import renderer from 'react-test-renderer';

import GuessArtist from './guess-artist';
import questions from '../../mocks/questions.js';

it(`Guess artist question is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GuessArtist
          question={questions[1]}
          onAnswer={() => {}}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
