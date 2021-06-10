import React from 'react'
import {Link} from 'react-router-dom'

export default class Navigation extends React.Component {
  
    render() {
      return (
    <ul class="nav justify-content-center nav nav-tabs" >
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to='/home'>Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to='/plans/new'>Start a plan</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to='/plans/'>All plans</Link>
  </li>
</ul>
      );
    }
  }