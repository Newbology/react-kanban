import React from 'react';


const TaskListTitle = (props) => {

 const {title} = props;
 return(
   <div className="header">
   {title}
   </div>
 );
};

export default TaskListTitle;