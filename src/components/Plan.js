import React from 'react'

class Plan extends React.Component {


    render() {

        let plan = this.props.workout[this.props.match.params.id - 1]
        
        return(
            <li>
            { plan ? plan.goal : null}
            </li>
        )}
     }


export default Plan