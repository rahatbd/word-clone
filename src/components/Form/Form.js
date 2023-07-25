import React from 'react';

function Form() {
  const [value, setValue] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log(value);
    setValue('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        minLength={5}
        maxLength={5}
        pattern="[A-Za-z]{5}"
        title="5 letter word"
        value={value}
        onChange={event => setValue(event.target.value.toUpperCase())}
        required
      />
    </form>
  );
}

export default Form;
