// src/App.js

import React from 'react';
import Navigator from './components/Navigator';
import './styles.css';
import backgroundImage from './assets/sathyabhama-university.jpg'; // Import the image

function App() {
  const appStyle = {
    background: `url(${backgroundImage}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div className="App" style={appStyle}>
      <Navigator />
    </div>
  );
}

export default App;
