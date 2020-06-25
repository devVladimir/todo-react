import React, { Component } from 'react'
import { ListGroupItem } from 'react-bootstrap'

import './Task.style.css'

export default class Task extends Component {
  render() {
    const { id, text, isDone } = this.props
    return (
      <ListGroupItem className='task'>
        <span>{ text }</span>
      </ListGroupItem>
    )
  }
}