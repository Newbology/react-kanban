export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const LOAD_TASK = 'LOAD_TASK';

export function addTask(newTask){
  return{
    type: ADD_TASK,
    payload: newTask
  }
};

export function addAsyncTask(newTask){
  return dispatch => {
    
  }
}

export function deleteTask(Task){
  return{
    type: DELETE_TASK,
    payload: Task
  }
};

export const loadTasks = () => {
  return (dispatch) => {
    return fetch('/')
     .then((response) => {
      return response.json();
    }) 
    .then((tasks) => {
     return dispatch({
       type: LOAD_TASK,
       payload: tasks
      });
    });
  }
}