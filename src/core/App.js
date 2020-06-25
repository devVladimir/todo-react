import React, {Component} from 'react'

import './App.style.css'

import Control from '../components/Control/Control'
import List from '../components/List/List'

export default class App extends Component {
  addTask = (task) => {
    console.log(task)
  }

  render() {
    return (
      <div className='app container'>
        <Control addTask={this.addTask}/>
        <List/>
      </div>
    )
  }
}