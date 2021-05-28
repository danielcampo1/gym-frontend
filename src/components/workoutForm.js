import React from 'react'
import { connect } from 'react-redux'
import {createWorkout} from '../redux/actions/gymAction'

class WorkoutForm extends React.Component {

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
        this.props.createWorkout(this.state, this.props.workout.id)
        this.setState({
            muscle_group: "",
            day: "",
            name: "",
            duration: "",})
    }

    render() {
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <label for="day_of_the_week">Day of the week: </label>
                    <input
                    id='day_of_the_week'
                     name = 'day'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Mon,Tues ...'
                    /><br />

                    <label for="muscle_group">Muscle group: </label>
                    <input
                    id='muscle_group'
                     name = 'muscle_group'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                     placeholder = 'Arms,Shoulder,ETC...'
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
                    /><br />
                    <button type = "submit"> Submit your plan</button>
                    </form>
            </div>
        )
    }
}



export default connect(null, {createWorkout})(WorkoutForm)