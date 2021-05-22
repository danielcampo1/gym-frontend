import React from 'react'
import  WorkoutContainer from './containers/workoutContainer'
import home from './components/home'
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">
        <Switch>
        <Route exact path = '/' component={home} />
        <Route exact path='/workoutplan' component={WorkoutContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
