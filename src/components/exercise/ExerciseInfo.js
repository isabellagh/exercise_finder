import React, { Component } from 'react'

class ExerciseInfo extends Component {

    render() {
        const { name, image_url, html_url } = this.props.exercise;  // {destructuring and pulling stuff out of the object}

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
}

export default ExerciseInfo
