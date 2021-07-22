import React from 'react'
import PlansContainer from './containers/plansContainer'
import Navigation from './components/nav'
import './App.css'


class App extends React.Component {
  
  render() {

    return (
      <div className="App">
       <Navigation/> <br/>
       <PlansContainer />
      </div>
    );
  }
}

export default App;
