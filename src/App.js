import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Exercises from './components/exercise/Exercises';
import axios from 'axios';
import './App.css';


class App extends Component {
  state = {
    exercises: [],
    loading: false
  }

  async componentDidMount() {
    this.setState({ loading: true })

    const response = await axios.get("https://wger.de/api/v2/exercise/") //api.github.com/users

    this.setState({ exercises: response.data, loading: false })
  }
  
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
        <Exercises loading={this.state.loading} exercises={this.state.exercises} />
        </div>
      </div>
    );
  }
}

export default App;
