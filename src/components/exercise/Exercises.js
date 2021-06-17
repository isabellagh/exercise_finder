import React, { Component } from 'react'
import ExerciseInfo from './ExerciseInfo'


class Exercises extends Component {
  state = {
    exercises: [
      {
        id: '1',
        name: '2 Handed Kettlebell Swing',
        image_url: 'https://kettlebellsworkouts.com/wp-content/uploads/2018/08/60_double_handed_swing.png',
        html_url: "https://kettlebellsworkouts.com/teaching-points-for-the-kettlebell-swing/"   
      },
      {
        id: '2',
        name: 'One-Hand Swings Are King',
        image_url: 'https://cdn3.omidoo.com/sites/default/files/imagecache/full_width/images/bydate/201412/cm1handedswing2.png',
        html_url: "https://breakingmuscle.com/fitness/why-one-hand-swings-are-king"   
      },
      {
        id: '3',
        name: 'Suitcase lunges',
        image_url: 'https://media.self.com/photos/59c18e0fb24b8e065cf7a75c/4:3/w_400%2Cc_limit/suitcase-lunges-jess.jpg',
        html_url: 'https://www.self.com/gallery/beginner-kettlebell-moves'  
      },
    ]
  }

  render() {  // loop through and create a list
    return (
      <div style={exerciseStyle}>                   
        {this.state.exercises.map(exercise => (   // loop through the exercise in the state  .map takes in a function
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
