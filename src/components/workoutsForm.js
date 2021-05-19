import React from 'react'

class WorkoutsForm extends React.Component {


    render() {
        return(
            <div>
                {this.props.gymWorkouts.map(workouts => <li> {workouts.plan.goal} </li>)}
            </div>
        )
    }
}

export default WorkoutsForm