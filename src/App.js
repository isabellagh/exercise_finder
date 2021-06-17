import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Exercises from './components/exercise/Exercises';
import './App.css';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Exercises />
      </div>
    );
  }
}

export default App;
