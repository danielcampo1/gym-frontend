import React from 'react'

class WorkoutsPlan extends React.Component {


    render() {
        return(
            <div>
                {this.props.workout.map(workouts => <li key={workouts.plan.id}> {workouts.plan.goal} </li>)}
            </div>
        )
    }
}

export default WorkoutsPlan