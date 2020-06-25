import React, {Component} from 'react'

import './Task.style.css'

export default class Task extends Component {
  render() {
    return (
      <li className='task'>
        <span>{this.props.taskName}</span>
      </li>
    );
  }
}