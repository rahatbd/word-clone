import React from 'react';

import { checkGuess } from '../../game-helpers';
import { range } from '../../utils';

function Cell({ letter, status }) {
  const className = status ? `cell ${status}` : 'cell';
  return <span className={className}>{letter}</span>;
}

function Guess({ value, answer }) {
  const result = checkGuess(value, answer);
  return (
    <p className="guess">
      {range(5).map(num => (
        // <span
        //   className={result ? `cell ${result[num].status}` : "cell"}
        //   key={num}
        // >
        //   {value ? value[num] : null}
        // </span>
        <Cell
          key={num}
          letter={result ? result[num].letter : null}
          status={result ? result[num].status : null}
        />
      ))}
    </p>
  );
}

export default Guess;
