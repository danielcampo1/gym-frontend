import React from 'react'

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

    render() {
        return(
            <div>
                <h1> Create a workout plan! </h1>
                <form>
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

export default WorkoutsForm