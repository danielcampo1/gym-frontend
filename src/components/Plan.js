import React from 'react'
import{ Redirect } from 'react-router-dom'

class Plan extends React.Component {


    render() {

        let plan = this.props.workout[this.props.match.params.id - 1]

        return(
            <h2>
            { plan ? plan.goal : null}
            </h2>
        )}
     }


export default Plan