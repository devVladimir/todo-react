import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

import './List.style.css'

import Task from '../Task/Task'

export default class List extends Component {
  render() {
    const { tasks, onRemoveTask, onCompleteTask} = this.props
    return (
      <ListGroup className='list'>
        {tasks.map(task =>
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            isDone={task.isDone}
            removeTask={onRemoveTask}
            completeTask={onCompleteTask}
            />
        )}
      </ListGroup>
    )
  }
}