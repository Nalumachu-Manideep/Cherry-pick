import React, { useState } from 'react';
// When you use useState, 
// React automatically tracks the state variable. 
// When the state changes, 
// React knows to re-render the component and 
// update the UI accordingly. 
// Simply updating a variable like count = count + 1 
// does not trigger a re-render in React.
function CounterWithState() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("Before "+count)
    setCount(count + 1);
    
    console.log(count);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default CounterWithState;
