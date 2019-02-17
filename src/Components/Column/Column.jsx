import React from 'react';
import TaskList from '../TaskList';
import './Column.scss'

const Column = (props) =>  {
const { title, column } = props;

  return (
  <div className="wrapper">
    <div className={title}> 
    <div>{title}</div>
      <TaskList type="complete" tasks={column} />
    </div>
  </div>
  );
};




export default Column;