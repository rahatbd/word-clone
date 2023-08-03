import React from 'react';
import Results from '../Results';
import Input from '../Input';
import Won from '../Won';
import Lost from '../Lost';
import Keyboard from '../Keyboard';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [status, setStatus] = React.useState('running');
  const [guesses, setGuesses] = React.useState([]);

  function handleSubmitGuess(guess) {
    const nextGuesses = [...guesses, guess];
    setGuesses(nextGuesses);
    if (guess === answer) setStatus('won');
    else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) setStatus('lost');
  }

  function handleRestart() {
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setStatus('running');
    setGuesses([]);
  }

  const validatedGuesses = guesses.map(guess => checkGuess(guess, answer));

  return (
    <>
      <Results validatedGuesses={validatedGuesses} />
      <Input
        status={status}
        handleSubmitGuess={handleSubmitGuess}
      />
      <Keyboard validatedGuesses={validatedGuesses} />
      {status === 'won' && (
        <Won
          numOfGuesses={guesses.length}
          handleRestart={handleRestart}
        />
      )}
      {status === 'lost' && (
        <Lost
          answer={answer}
          handleRestart={handleRestart}
        />
      )}
    </>
  );
}

export default Game;
