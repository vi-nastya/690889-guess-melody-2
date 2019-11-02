import React from 'react';
import renderer from 'react-test-renderer';

import GuessGenre from './guess-genre';
import {questions} from '../../mocks/questions';

it(`Guess genre question is rendered correctly`, () => {
  const tree = renderer
    .create(
        <GuessGenre
          question={questions[0]}
          screenIndex={0}
          onAnswer={() => {}}
        />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});
