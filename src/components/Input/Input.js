import React from 'react';

function Form({ status, handleSubmitGuess }) {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    handleSubmitGuess(guess);
    setGuess('');
  }

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={handleSubmit}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={guess}
        onChange={event => setGuess(event.target.value.toUpperCase())}
        disabled={status !== 'running'}
        required
      />
    </form>
  );
}

export default Form;
