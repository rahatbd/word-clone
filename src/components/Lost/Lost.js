import React from 'react';
import Banner from '../Banner';

function Lost({ answer, handleRestart }) {
  return (
    <Banner
      status="sad"
      action={handleRestart}
      actionText="Restart Game"
    >
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </Banner>
  );
}

export default Lost;
