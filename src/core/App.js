import React, { Component } from 'react'
import { Container }  from 'react-bootstrap'

import './App.style.css'

import Control from '../components/Control/Control'
import List from '../components/List/List'

export default class App extends Component {

  state = {
    tasks: [
      {
        id: 1,
        text: 'Test task',
        isDone: false
      }
    ]
  }

  addTask = (text) => {
    if(text === '') return

    const newTask = {
      id: +new Date(),
      text,
      isDone: false
    }

    this.setState({ tasks: [newTask, ...this.state.tasks] })
  }

  removeTask = (id) => {
    const tasks = this.state.tasks.filter( task => task.id !== id)
    this.setState({ tasks })
  }

  render() {
    const { tasks } = this.state

    return (
      <Container className='app'>
        <Control addTask={this.addTask} />
        <List tasks={tasks} onRemoveTask={this.removeTask} />
      </Container>
    )
  }
}