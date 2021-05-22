import React from 'react'
import { connect } from 'react-redux'
import WorkoutsForm from '../components/workoutsForm'
import WorkoutPlan from '../components/workoutPlan'
import { getPlan } from '../redux/actions/gymAction'
import WorkoutsExercise from '../components/workoutExercise'



class WorkoutContainer extends React.Component {

    componentDidMount(){
        this.props.getPlan()
    }

render() {
    return(
        <div>
            <WorkoutPlan workout={this.props.plan} />
            <WorkoutsExercise workout={this.props.plan} />
            <WorkoutsForm />
        </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        plan: state
        }
    }


export default connect(mapStateToProps, {getPlan})(WorkoutContainer)