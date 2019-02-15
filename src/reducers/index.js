import { ADD_TASK, DELETE_TASK, EDIT_TASK, LOAD_TASK } from '../actions';


const taskReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK: return;
    case EDIT_TASK: return;
    case LOAD_TASK: 
      return [].concat(action.payload);
    default:
      return state;
  };
};

export default taskReducer;