import React from 'react'
import WorkoutAttr from './workoutAttr'

class WorkoutExercise extends React.Component {

    state={
        count:0,
    }

    handleChange =(e) => { 
        this.setState({ [e.target.name] : parseInt(e.target.value) })
    }

    resetState = () => this.setState({ count: 0})

    render() {

        return(
            <div>
                 <input
                    type='number'
                     name = 'count'
                     onChange = {this.handleChange}
                     value = {this.state.count} />

                 {this.props.workout && this.props.workout.map(workouts => 
        
                <ul key={workouts.id}> 
                        <WorkoutAttr text={workouts.muscle_group} count={this.state.count} reset={this.resetState} />
                        <WorkoutAttr text={workouts.day} count={this.state.count} reset={this.resetState}/>
                        <WorkoutAttr text={workouts.duration} count={this.state.count} reset={this.resetState}/>
                        <WorkoutAttr text ={workouts.name} count={this.state.count} reset={this.resetState}/>
                </ul> 
                 
                )} 
    </div>
    )
}}

export default WorkoutExercise