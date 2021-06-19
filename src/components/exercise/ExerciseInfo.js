import React from 'react'
import PropTypes from 'prop-types'


const ExerciseInfo = ({ exercise: { name, image_url, html_url }}) => { //take exercise from props (destructure)

  return (
    <div className="card text-center">
      <h3>{name}</h3>
      <img src={image_url} alt="" className="round-image" style={{ width: '150px' }}/>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1" >More</a>
      </div>
    </div>
  )
}

  ExerciseInfo.propTypes = {
  exercise: PropTypes.object.isRequired
}

export default ExerciseInfo
