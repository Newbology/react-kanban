import React, { Component } from 'react';
import Column from '../../Components/Column';
import { connect } from 'react-redux';

class KanbanBoard extends Component {
  render() {
    let inQueue = [];
    let inProg = [];
    let completed = [];

    this.props.tasks.forEach(tasks => {
      switch (tasks.status_id) {
        case 1:
          inQueue.push(tasks);
          break;
        case 2:
          inProg.push(tasks);
          break;
        case 3:
          completed.push(tasks);
          break;
        default:
          break;
      }
    });

    return (
      <div className="kanban">
        <Column title="inQueue" column={inQueue} />
        <Column title="inProgress" column={inProg} />
        <Column title="Completed" column={completed} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tasks: state
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

KanbanBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(KanbanBoard);

export default KanbanBoard;
