import React from 'react'

class WorkoutsPlan extends React.Component {


    render() {
        return(
            <div>
                {this.props.workout.map(plan => 
                    <li key={plan.id}> {plan.goal}</li>
                        )}
            </div>
        )}
     }

export default WorkoutsPlan