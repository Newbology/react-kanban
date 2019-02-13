import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskListTitle from '../../Components/TaskListTitle';

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
      </div>
    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = (dispatch) => {

};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)


export default App;
