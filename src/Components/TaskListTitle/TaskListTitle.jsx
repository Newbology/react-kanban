import React from 'react';
import './TaskListTitle.scss';
import NewTask from '../../Containers/NewTask'

const TaskListTitle = (props) => {
 const {title} = props;
 
 return(
   <div className="header">
    <div className="title">
      {title}
    </div>
    <div>
     <NewTask/>
    </div>
   </div>
 );
};

export default TaskListTitle;