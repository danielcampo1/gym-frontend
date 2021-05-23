import React from 'react'
import {connect} from 'react-redux'
import { createPlan } from '../redux/actions/gymAction'

class planForm extends React.Component {

    state = {
        goal: "",
        // muscle_group: "",
        // day: "",
        // name: "",
        // duration: "",
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createPlan(this.state)
    }

    render() {
        return(
            <div>
                <h1> What the plan! </h1>
                <form onSubmit = {this.handleSubmit}>

                    <label for="Goal">Goal: </label> 
                    <input
                    id='Goal'
                    name = 'goal'
                    onChange = {this.handleChange}
                    value = {this.state.value} 
                    placeholder = "Loss weight ..."/><br/> <br/> <br/> 
{/* 
                    <label for="muscle_group">Muscle group: </label>
                    <input
                    id='muscle_group'
                     name = 'muscle_group'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Arms,Shoulder,ETC...'
                    /><br />

                    <label for="day_of_the_week">Day of the week: </label>
                    <input
                    id='day_of_the_week'
                     name = 'day'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Mon,Tues ...'
                    /><br />

                    <label for="name_of_workout">Name of workout: </label>
                    <input
                    id='name_of_workout'
                     name = 'name'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Bench press ...'
                    /><br />

                    <label for="duration">Duration: </label>
                    <input
                    id='duration'
                     name = 'duration'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = '5 mins, 10 reps ... '
                    /><br /> */}
                    <button type = "submit"> Submit your plan</button>
                </form>
            </div>
        )
    }
}

export default connect (null, { createPlan })(planForm)