import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import ExerciseInfo from './components/exercise/ExerciseInfo';
import './App.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <ExerciseInfo />
      </div>
    );
  }
}

export default App;
