import React from 'react'
import PlansContainer from './containers/plansContainer'
import WorkoutsContainer from './containers/workoutsContainer'


class App extends React.Component {
  
  
  render() {

    return (
      <div className="App">
      <PlansContainer />
      <WorkoutsContainer />
      </div>
    );
  }
}

export default App;
