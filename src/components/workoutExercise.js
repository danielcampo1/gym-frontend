import React from 'react'

class WorkoutsExercise extends React.Component {


    render() {
        return(
            <div>
                {this.props.workout.map(workouts =>  
                <ul key={workouts.id}> 
                    <p> {workouts.muscle_group} </p> 
                    <p> {workouts.day} </p>
                    <p> {workouts.name}</p>
                    <p> {workouts.duration}</p>
                </ul>
            )   
        }
    </div>
    )
}}

export default WorkoutsExercise