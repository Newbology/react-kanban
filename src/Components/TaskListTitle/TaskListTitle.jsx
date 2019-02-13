import React from 'react';


const TaskListTitle = (props) => {
 console.log('asdkajslkdjsa:', props); 
 const {title} = props;
 return(
   <div className="header">
   {title}
   </div>
 )
}

export default TaskListTitle;