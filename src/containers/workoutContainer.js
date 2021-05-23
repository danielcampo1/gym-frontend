import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getPlan } from '../redux/actions/gymAction'
import WorkoutsForm from '../components/workoutsForm'
import WorkoutPlans from '../components/workoutPlans'
import Plan from '../components/Plan'
import WorkoutsExercise from '../components/workoutExercise'



class WorkoutContainer extends React.Component {

    componentDidMount(){
        this.props.getPlan()
    }

render() {
    return(
        <div>
            <Switch>
            <Route path="/plans/new" component={WorkoutsForm}/>
            <Route path="/plan/:id" render = {(routerProps) => <Plan {...routerProps} workout={this.props.plan}/>}/>
            <Route path="/plans" render = {(routerProps) => <WorkoutPlans {...routerProps} workout={this.props.plan}/>}/>
            </Switch>
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