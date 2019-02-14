import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListTitle from '../../Components/TaskListTitle';
import KanbanBoard from '../../Containers/KanbanBoard';

import './App.css';


class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      pageTitle: `Kanban Board`
    }
  }


  render() {
    return (
      <div className="App">
       <TaskListTitle title={this.state.pageTitle}/>
       <KanbanBoard  board={this.state.kanbanBoard}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default App;
