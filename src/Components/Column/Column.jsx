import React, { Component } from 'react';
import TaskList from '../TaskList'

class Column extends Component {
constructor(props) {
  super(props);
}
  render() {

  return (
    <div>
      <TaskList type="in-queue"/>
      <TaskList type="in-progress"/>
      <TaskList type="complete"/>
    </div>
  )
  
 }
}

export default Column;