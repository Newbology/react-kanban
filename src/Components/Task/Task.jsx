import React from 'react';

const Task = props => {
  const {title, body, priority, assignedBy, assignedTo} = props;
  return(
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{priority}</div>
      <div>{assignedBy}</div>
      <div>{assignedTo}</div>
    </div>
  );
};

export default Task;