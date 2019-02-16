import React, { Component } from 'react';
import Column from '../../Components/Column';
import TaskList from '../../Components/TaskList';



class KanbanBoard extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    };
  };

  render() {
    return(
    <div className="kanban">
      <Column column={this.props.column}/>
      <TaskList tasks={this.state.props}/>
    </div>
    )
  };
};


export default KanbanBoard;