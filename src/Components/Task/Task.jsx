import React from 'react';

const Task = props => {
  const {title, body, createdBy, assignedTo, rank} = props
  return( 
    <div>
      <div>{title}</div>
      <div>{body}</div>
      <div>{createdBy}</div>
      <div>{assignedTo}</div>
      <div>{rank}</div>
    </div>
  );
};

export default Task;