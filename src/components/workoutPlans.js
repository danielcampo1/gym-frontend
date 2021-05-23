import React from 'react'
import Plan from './Plan'

class WorkoutsPlans extends React.Component {


    render() {
        return(
            <div>
                {this.props.workout.map(plan => 
                    <div key={plan.id}> <Plan workout={plan}/></div>
                        )}
            </div>
        )}
     }

export default WorkoutsPlans