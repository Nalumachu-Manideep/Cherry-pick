import React from 'react';

function CounterWithoutState() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count); 
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default CounterWithoutState;
