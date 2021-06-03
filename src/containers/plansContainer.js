import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { getPlan } from '../redux/actions/gymAction'
import planForm from '../components/planForm'
import Plans from '../components/Plans'
import Plan from '../components/Plan'
import Home from '../components/home'


class PlansContainer extends React.Component {

    componentDidMount(){
        this.props.getPlan()
    }

render() {
    return(
        <div>
            <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/plans/new" component={planForm}/>
            <Route path="/plan/:id" render = {(routerProps) => <Plan {...routerProps} plan={this.props.plan}/>}/>
            <Route path="/plans" render = {(routerProps) => <Plans {...routerProps} plan={this.props.plan}/>}/>
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


export default connect(mapStateToProps, {getPlan})(PlansContainer)