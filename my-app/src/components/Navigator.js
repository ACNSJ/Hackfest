/// src/components/Navigator.js

import React, { useState } from 'react';
import './Navigator.css';

const Navigator = () => {
  const [currentLocation, setCurrentLocation] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    console.log('Current Location:', currentLocation);
    console.log('Destination:', destination);
    // Add search logic here
  };

  return (
    <div className="card">
      <h1>Campus Navigator</h1>
      <div className="field-container">
        <label className="label"> Your Current Location</label>
        <input
          type="text"
          value={currentLocation}
          onChange={(e) => setCurrentLocation(e.target.value)}
          className="input"
        />
      </div>
      <div className="field-container">
        <label className="label">Your Destination</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={handleSearch} className="button">
        Start Navigation
      </button>
    </div>
  );
};

export default Navigator;
