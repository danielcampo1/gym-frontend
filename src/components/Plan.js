import React from 'react'
import{ Redirect } from 'react-router-dom'
import WorkoutContainer from '../containers/workoutsContainer'

class Plan extends React.Component {


    render() {
        console.log(this.props);

        let plan = this.props.plan[this.props.match.params.id - 1]
        // let plan = this.props.plan.filter(plan => plan.id == this.props.match.params.id)[0]
        console.log(plan);
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