import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './components/clock'

const App: React.FC = () => {
  return (
    <div className="App">
      <Clock startHour={17} startMinute={49} startSecond={46} name={'Super Zegar'} />
    </div>
  );
}

export default App;
