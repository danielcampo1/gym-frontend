import React from 'react'
import {connect} from 'react-redux'
import { createWorkout } from '../redux/actions/gymAction'

class WorkoutsForm extends React.Component {

    state = {
        muscle_group: "",
        day: "",
        name: "",
        duration: "",
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createWorkout(this.state)
    }

    render() {
        return(
            <div>
                <h1> Create a workout plan! </h1>
                <form onSubmit = {this.handleSubmit}>
                    Muscle group: <input
                     name = 'muscle_group'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Arms,Shoulder,ETC...'
                    /><br />
                    Day of the Week: <input
                     name = 'day'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Mon,Tues ...'
                    /><br />
                    Name of workout: <input
                     name = 'name'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Bench press ...'
                    /><br />
                    Duration of workout: <input
                     name = 'duration'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = '5 mins, 10 reps ... '
                    /><br />
                    <button type = "submit"> Submit your workout</button>
                </form>
            </div>
        )
    }
}

export default connect (null, { createWorkout })(WorkoutsForm)