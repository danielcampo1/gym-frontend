import React from 'react'
import WorkoutAttr from './workoutAttr'

class WorkoutExercise extends React.Component {

    handleChange =(e) => { 
        this.setState({ [e.target.name] : parseInt(e.target.value) })
    }

    render() {

        return(
            <div>

                 {this.props.workout && this.props.workout.map(workouts => {
        
                        console.log(workouts);
                        
                return <ul key={workouts.id}>   
                        <WorkoutAttr text={workouts.muscle_group}  />
                        <WorkoutAttr text={workouts.day} />
                        <WorkoutAttr text={workouts.duration} />
                        <WorkoutAttr text ={workouts.name} />
                </ul> 
                 }
                )} 
    </div>
    )
}}

export default WorkoutExercise