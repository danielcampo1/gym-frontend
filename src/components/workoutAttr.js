import React from 'react'

class WorkoutAttr extends React.Component {

    state = {
        likes: 0
    }
    handleClick = () => {
        this.setState({ likes: [this.props.count ]})
        this.props.reset()
        }


    render() {    
    return(
        <div>
            {this.props.text} <button onClick={this.handleClick}> likes {this.state.likes} </button>
    
        </div>
    )}
}

export default WorkoutAttr