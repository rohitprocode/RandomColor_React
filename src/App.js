import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('black');

  const changeColor = () => {
    let RandomColor = "#"+  Math.floor(Math.random()*16777215).toString(16)
    setCurrentColor(RandomColor)
  };

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <h1>Random Color Generator</h1>
      <button onClick={changeColor}>Click To Change Color</button>
    </div>
  );
}

export default App;
