import React from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends React.Component {
  
    render() {
      return (
    <div>
        <Link to="/plans/new">Start plan</Link><br/>
        <Link to="/plans">All plans</Link><br/>
    </div>
      );
    }
  }