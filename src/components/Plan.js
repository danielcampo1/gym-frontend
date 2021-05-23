import React from 'react'
import{ Redirect } from 'react-router-dom'
import WorkoutContainer from '../containers/workoutsContainer'

class Plan extends React.Component {


    render() {

        let plan = this.props.plan[this.props.match.params.id - 1]

        return(
            <div>
            <h2>
            { plan ? plan.goal : null}
            </h2>
            <WorkoutContainer workout={plan}/>
            </div>
        )}
     }


export default Plan