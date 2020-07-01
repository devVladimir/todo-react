import React, { Component } from 'react'
import { Container }  from 'react-bootstrap'

import './App.style.css'

import Control from '../components/Control/Control'
import List from '../components/List/List'

export default class App extends Component {

  maxId = 1;

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
      id: ++this.maxId,
      text,
      isDone: false
    }

    this.setState({ tasks: [newTask, ...this.state.tasks] })
  }

  render() {
    const { tasks } = this.state

    return (
      <Container className='app'>
        <Control addTask={this.addTask} />
        <List tasks={tasks} />
      </Container>
    )
  }
}