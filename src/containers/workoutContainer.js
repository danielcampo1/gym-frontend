import React from 'react'
import { connect } from 'react-redux'
import WorkoutsForm from '../components/workoutsForm'
import WorkoutPlan from '../components/workoutPlan'
import { getWorkout } from '../redux/actions/gymAction'



class WorkoutContainer extends React.Component {

    componentDidMount(){
        this.props.getWorkout()
    }

render() {
    return(
        <div>
            <WorkoutPlan gymWorkouts={this.props.gymWorkouts} />
            <WorkoutsForm gymWorkouts={this.props.gymWorkouts} />
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