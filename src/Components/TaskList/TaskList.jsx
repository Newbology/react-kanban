import React, { Component }from 'react';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => {
  return{}
};

const mapDispatchToProps = (dispatch) => {
  return{}
}

TaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList)



export default TaskList;