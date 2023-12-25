import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Location from './components/Location'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Location/>
    </div>
  );
}

export default App;
