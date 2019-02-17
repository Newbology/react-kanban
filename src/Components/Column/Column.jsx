import React from 'react';
import TaskList from '../TaskList';

const Column = props => {
  const { title, column } = props;

  return (
    <div className={title}>
      <div>{title}</div>
      <TaskList type="complete" tasks={column} />
    </div>
  );
};

export default Column;
