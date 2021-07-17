import React from 'react'
import PlansContainer from './containers/plansContainer'
import Navigation from './components/nav'
import './App.css'


class App extends React.Component {

  // state={
  //   darkMode: false
  // }

  //  darkStyle = () => {
  //   this.setState({ darkMode: true })
  // }
  
  // NonDarkMode =() => {
  //   this.setState({ darkMode : false})
  // }

  // handleClick = () => {
  //   this.setState((state) => ({darkMode: !state.darkMode}))
  // }
  //   // if (this.state.darkMode === false){
  //   //   return this.darkStyle()
  //   // } else if (this.state.darkMode === true){
  //   //   return this.NonDarkMode()
  //   // }
  
  
  render() {

    return (
      <div className="App">
        {/* <div className={this.state.darkMode ? "darkmode" : null} >
          <button onClick={this.handleClick}>
            Dark mode
          </button>
        </div> */}
       <Navigation/> <br/>
       <PlansContainer />
      </div>
    );
  }
}

export default App;
