import React from 'react'
import PlanAttr from './planAttr'

class Plans extends React.Component {

    state = {
        count: 0
    }
    

    handlechange =(e) => { 
        this.setState({ [e.target.name] : parseInt(e.target.value) })
    }

    resetState = () => this.setState({ count: ''})

    render() {
        return(
            <div>
                {/* <input
                    type='number'
                     name = 'count'
                     onChange = {this.handlechange}
                     value = {this.state.count} /> */}


                {this.props.plan.map(plan => 
                    <ul key={plan.id}> 
                    <PlanAttr plan={plan} count={this.state.count} reset={this.resetState}/>
                    </ul>
                        )}
            </div>
        )}
     }

export default Plans