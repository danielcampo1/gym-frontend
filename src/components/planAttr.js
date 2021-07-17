import React from 'react'
import {Link} from 'react-router-dom'

class PlanAttr extends React.Component {

    // state= {
    //     thumbs_up: 0
    // }

    // handleClick = () => {
    //     this.setState({ thumbs_up: [this.props.count]})
    //     this.props.reset()
    // }
    
    render() {
        return(
            <div>
                <Link to={`/plan/${this.props.plan.id}`}> <button class="button button5"> Go to </button></Link>
                {this.props.plan.goal} 
                {/* <button onClick={this.handleClick} type="button" class="btn btn-outline-secondary btn-sm">{this.state.thumbs_up}  thumbs up</button> */}
            </div>
        )
    }
}

export default PlanAttr