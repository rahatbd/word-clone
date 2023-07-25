import React from 'react';
import Guess from '../Guess';
import Form from '../Form';

import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    setGuesses([...guesses, guess]);
  }

  return (
    <>
      <Guess guesses={guesses} />
      <Form handleSubmitGuess={handleSubmitGuess} />
    </>
  );
}

export default Game;
