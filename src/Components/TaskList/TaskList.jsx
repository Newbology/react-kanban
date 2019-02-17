import React from 'react';
import Task from '../Task';
import './TaskList.scss';

const TaskList = props => {
  const list = props.tasks.map(task => {
    return (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        body={task.body}
        priority={task.priority_id}
        status={task.status_id}
        assignedTo={task.assignedTo_id}
        createdBy={task.createdBy_id}
      />
    );
  });

  return <div className="list-wrapper">{list}</div>;
};

export default TaskList;
