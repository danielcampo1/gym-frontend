import React from 'react'
import {Link} from 'react-router-dom'

class Plans extends React.Component {


    render() {
        return(
            <div>
                {this.props.plan.map(plan => 
                    <li key={plan.id}> 
                    <Link to={`/plan/${plan.id}`}> {plan.goal} </Link> 
                    </li>
                        )}
            </div>
        )}
     }

export default Plans