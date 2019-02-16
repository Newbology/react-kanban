import React, { Component } from 'react';
import TaskList from '../TaskList';
import { connect } from 'react-redux';

class Column extends Component {
constructor(props) {
  super(props);
};
render() {

  return (
    <div>
      <TaskList type="in-queue"/>
      <TaskList type="in-progress"/>
      <TaskList type="complete"/>
    </div>
  );
 };
};


const mapStateToProps = (state) => {
  return{};
};

const mapDispatchToProps = (dispatch) => {
  return{};
};

Column = connect(
  mapStateToProps,
  mapDispatchToProps
)(Column);

export default Column;