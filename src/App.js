import React from 'react'

class App extends React.Component {
  
      componentDidMount() {
        fetch("http://localhost:3000/workouts/1")
        .then(res => res.json())
        .then(data => console.log(data));
      }
  render() {

    return (
      <div className="App">
      App
      </div>
    );
  }
}

export default App;
