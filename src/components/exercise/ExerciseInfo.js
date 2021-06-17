import React, { Component } from 'react'

class ExerciseInfo extends Component {
    state = {
        id: 'id',
        name: '2 Handed Kettlebell Swing',
        image_url: 'https://kettlebellsworkouts.com/wp-content/uploads/2018/08/60_double_handed_swing.png',
        html_url: "https://kettlebellsworkouts.com/teaching-points-for-the-kettlebell-swing/"
    }

    render() {
        const { name, image_url, html_url } = this.state  // {destructuring and pulling stuff out of the object}

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
