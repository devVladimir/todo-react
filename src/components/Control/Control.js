import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

import './Control.style.css'

export default class Control extends Component {
  state = {
    taskText: ''
  }
  
  handleSubmit = (event) => {
    const { addTask } = this.props
    event.preventDefault()
    addTask(this.state.taskText)
    this.setState({ taskText: '' })
  }

  handleChange = (event) => {
    this.setState({ taskText: event.target.value })
  }

  render() {
    const { taskText } = this.state

    return (
      <Form className='control'  onSubmit={this.handleSubmit}>
        <Form.Control
          placeholder='Type your task here'
          value={taskText}
          onChange={this.handleChange}
        />
        <Button variant='primary' type='submit'>
          Add task
        </Button>
      </Form>
    )
  }
}