import React from 'react'
import {Link} from 'react-router-dom'

class WorkoutsPlans extends React.Component {


    render() {
        return(
            <div>
                {this.props.workout.map(plan => 
                    <li key={plan.id}> 
                    <Link to={`/plans/${plan.id}`}> {plan.goal} </Link> 
                    </li>
                        )}
            </div>
        )}
     }

export default WorkoutsPlans