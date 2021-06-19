import React, { Component } from 'react'
import ExerciseInfo from './ExerciseInfo'


class Exercises extends Component {
  render() { 
    return (
      <div style={exerciseStyle}>                   
        {this.props.exercises.map(exercise => (   // loop through the exercise in the state  .map takes in a function
          <ExerciseInfo key={exercise.id} exercise={exercise} />  //pass the whole "exercise/object" to the exercise prop
        ))}          
      </div>
    )
  }
}

const exerciseStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Exercises
