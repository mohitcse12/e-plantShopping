import React from 'react';
import './App.css';
import AboutUs from './AboutUs';

function App() {
  return (
    <div className="landing-page">
      <h1>Welcome to Paradise Nursery</h1>
      <AboutUs />
      <button className="get-started-btn">Get Started</button>
    </div>
  );
}

export default App;
