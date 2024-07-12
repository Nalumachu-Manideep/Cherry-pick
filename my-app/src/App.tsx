import React, { useState, useEffect } from 'react';
import './App.css';
import Greet from './Greet';
import Welcome from './Welcome';

const App: React.FC = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    if (name === '') {
      handleSubmit();
    } else if (name !== '') {
      console.log("Updated name: ", name);
    }
  }, [name]);

  function handleSubmit(e?: React.FormEvent) {
    if (e) e.preventDefault();
    console.log("Submitted Data", { name });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type='submit'>Click</button>
      </form>
    </>
  );
};

export default App;
