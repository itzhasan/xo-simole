import React from 'react';
import './App.css'; // Base styles
import './MobileStyles.css'; // Responsive styles
import Board from './Board';

function App() {
  return (
    <div className="App">
      <h1>XO Game</h1>
      <Board />
    </div>
  );
}

export default App;
