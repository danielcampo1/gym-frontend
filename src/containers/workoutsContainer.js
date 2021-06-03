import React from 'react'
import WorkoutExercise from '../components/workoutExercise'
import WorkoutForm from '../components/workoutForm'


class WorkoutsContainer extends React.Component {

render() {
    return(
        <div>
            <WorkoutExercise workout={this.props.workout && this.props.workout.workouts} />
            <WorkoutForm workout={this.props.workout} />

        </div>
    )
}

}

export default WorkoutsContainer