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
                    <input
                     name = 'muscle_group'
                     onChange = {this.handleChange}
                     value = { this.state.value}
                    />
                </form>
                {/* {this.props.gymWorkouts.map(workouts => <li> {workouts.plan.goal} </li>)} */}
            </div>
        )
    }
}

export default WorkoutsForm