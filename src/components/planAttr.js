import React from 'react'
import {Link} from 'react-router-dom'

class PlanAttr extends React.Component {
    
    render() {
        return(
            <div>
                <Link to={`/plan/${this.props.plan.id}`}> <button class="button button5"> Go to </button></Link>
                {this.props.plan.goal} 
            </div>
        )
    }
}

export default PlanAttr