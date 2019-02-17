import React from 'react';
import './Task.scss'

const Task = (props) => {
  const {title, body, priority, createdBy, assignedTo} = props;
  return(
    <div className="task">
      <div>{title}</div>
      <div>{body}</div>
      <div>{priority}</div>
      <div>{createdBy}</div>
      <div>{assignedTo}</div>
    </div>
  );
};

export default Task;
