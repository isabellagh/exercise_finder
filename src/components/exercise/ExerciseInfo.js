import React, { Component } from 'react'

class ExerciseInfo extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            name: '2 Handed Kettlebell Swing',
            image_url: 'https://kettlebellsworkouts.com/wp-content/uploads/2018/08/60_double_handed_swing.png',
            description: "Two Handed Russian Style Kettlebell swing",
            html_url: "https://kettlebellsworkouts.com/teaching-points-for-the-kettlebell-swing/"
        }
    }

    render() {
        return (
            <div className="card text-center">
                <h3>{this.state.name}</h3>
                <img src={this.state.image_url} alt="" className="round-image" style={{ width: '150px' }}/>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1" >More</a>
                </div>
            </div>
        )
    }
}

export default ExerciseInfo
