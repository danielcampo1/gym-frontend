import React from 'react'
import { connect } from 'react-redux'
import WorkoutsForm from '../components/workoutsForm'
import WorkoutPlan from '../components/workoutPlan'
import { getWorkout } from '../redux/actions/gymAction'
import WorkoutsExercise from '../components/workoutExercise'



class WorkoutContainer extends React.Component {

    componentDidMount(){
        this.props.getWorkout()
    }

render() {
    return(
        <div>
            <WorkoutPlan workout={this.props.gymWorkouts} />
            <WorkoutsExercise workout={this.props.gymWorkouts} />
            <WorkoutsForm />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        gymWorkouts: state.gymWorkouts
        }
    }


export default connect(mapStateToProps, {getWorkout})(WorkoutContainer)