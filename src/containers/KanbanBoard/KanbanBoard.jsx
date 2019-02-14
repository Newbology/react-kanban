import React, { Component } from 'react';
import Column from '../../Components/Column'



class KanbanBoard extends Component {
  constructor(props){
    super(props)

    this.state = {
      input: ''
    }
  }

  render() {
    return(
    <div className="kanban">
      <Column column={this.props.column}/>
    </div>
    )
  }

};


export default KanbanBoard;