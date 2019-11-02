import React from 'react';
import renderer from 'react-test-renderer';

import GuessGenre from './guess-artist';
import questions from '../../mocks/questions.js';

it(`Guess genre question is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GuessGenre
          question={questions[0]}
          onAnswer={() => {}}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
