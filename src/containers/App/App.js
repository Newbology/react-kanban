import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListTitle from '../../Components/TaskListTitle';
import KanbanBoard from '../../Containers/KanbanBoard';
import './App.css';
import { loadTasks } from '../../actions';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageTitle: `Kanban Board`,
    };
  };

  componentDidMount() {
    return this.props.loadTasks();
  };


  render() {
    return (
      <div className="App">
       <TaskListTitle title={this.state.pageTitle}/>
       <KanbanBoard  board={this.state.kanbanBoard}/>
      </div>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    tasks: state
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadTasks : () => {
      return dispatch(loadTasks())
    }
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default App;
