import React, { Component }from 'react';
import Task from '../Task';


class TaskList extends Component {
  constructor(props){
    super(props);
  }
  render(){
  return(
    <div className="Task">
      <Task 
      title={task.title}
      body={task.body}
      priority={task.priority}
      assignedBy={task.assignedBy}
      assignedTo={task.assignedTo}/>
    </div>
    )
  }
}


export default TaskList;