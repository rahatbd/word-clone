import React from 'react';
import Results from '../Results';
import Input from '../Input';
import Won from '../Won';
import Lost from '../Lost';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

function Game() {
  const [status, setStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) setStatus('won');
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setStatus('lost');
  }

  return (
    <>
      <Results guesses={guesses} answer={answer} />
      <Input status={status} handleSubmitGuess={handleSubmitGuess} />
      {status === 'won' && <Won numOfGuesses={guesses.length} />}
      {status === 'lost' && <Lost answer={answer} />}
    </>
  );
}

export default Game;
