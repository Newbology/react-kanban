export const ADD_TASK = 'ADD_TASK';
export const DELETE_TASK = 'DELETE_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const LOAD_TASK = 'LOAD_TASK';

export function addTask(newTask){
  return (dispatch) => {
    return fetch('/kanban', {
      method: 'POST',
      body: JSON.stringify(newTask),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((newTask) => {
      return dispatch({
        type: ADD_TASK,
        payload: newTask
      });
    });
  };
};



export const loadTasks = () => {
  return (dispatch) => {
    return fetch('/kanban')
     .then((response) => {
      return response.json();
    }) 
    .then((tasks) => {
     return dispatch({
       type: LOAD_TASK,
       payload: tasks
      });
    });
  };
};