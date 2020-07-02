import React, { Component } from 'react'
import { ListGroupItem, Button, FormCheck, FormGroup } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import './Task.style.css'

export default class Task extends Component {

  state = {
    isCheckboxChecked: false
  }

  handleRemoveClick = () => {
    const { id, removeTask } = this.props
    removeTask(id)
  }

  handleChange = () => {
    const { id, completeTask } = this.props
    this.setState((prevState) =>
     ({ isCheckboxChecked: !prevState.isCheckboxChecked }), () => completeTask(id, this.state.isCheckboxChecked))
  }

  render() {
    const {isCheckboxChecked } = this.state
    const { id, text, isDone } = this.props
    return (
      <ListGroupItem className='task d-flex justify-content-between align-items-center'>
        <span>{ text }</span>
        <FormGroup className='d-flex justify-content-between align-items-center'>
          <Button variant="danger" onClick={this.handleRemoveClick}>
            <FontAwesomeIcon icon={faTrash} />
          </Button>
          <FormCheck
              type="checkbox"
              checked={isCheckboxChecked}
              onChange={this.handleChange}
            />
        </FormGroup>  
      </ListGroupItem>
    )
  }
}