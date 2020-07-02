import React, { Component } from 'react'
import { ListGroupItem, ButtonGroup, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

import './Task.style.css'

export default class Task extends Component {

  handleRemoveClick = (event) => {
    const {id, removeTask } = this.props
    removeTask(id)
  }

  render() {
    const { id, text, isDone } = this.props
    return (
      <ListGroupItem className='task d-flex justify-content-between align-items-center'>
        <span>{ text }</span>
        <ButtonGroup>
          <Button variant="danger" onClick={this.handleRemoveClick}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <Button variant="primary" >
            <FontAwesomeIcon icon={faCheck} />
          </Button>
        </ButtonGroup>
      </ListGroupItem>
    )
  }
}