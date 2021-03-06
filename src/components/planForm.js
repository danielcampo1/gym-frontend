import React from 'react'
import {connect} from 'react-redux'
import { createPlan } from '../redux/actions/gymAction'

class planForm extends React.Component {

    state = {
        goal: ""
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPlan(this.state)
        this.props.history.push('/plans')
    }

    render() {
        return(
            <div class="text-center">
                <h1> What's the plan! </h1><br/>
                <form onSubmit = {this.handleSubmit}>

                    <label for="Goal" class="fw-normal">Goal: </label> <br/>
                    <input
                    id='Goal'
                    name = 'goal'
                    onChange = {this.handleChange}
                    value = {this.state.value} 
                    placeholder = "Loss weight ..."/><br/> <br/> <br/> 

                    <button type = "submit"> Submit your plan</button>
                </form>
            </div>
        )
    }
}

export default connect (null, { createPlan })(planForm)