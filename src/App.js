import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentColor, setCurrentColor] = useState('black');

  const changeColor = () => {
    // Generate a random color
    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    // Set the current color to the random color
    setCurrentColor(randomColor);
    // let a = Math.random()*16777215;
    // console.log(a)
    // let b = a.toString(16);
    // console.log(b)
  };

  return (
    <div className="App" style={{ backgroundColor: currentColor }}>
      <h1>Random Color Generator</h1>
      <button onClick={changeColor}>Click To Change Color</button>
    </div>
  );
}

export default App;
