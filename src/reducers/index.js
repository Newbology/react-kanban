import { ADD_TASK, DELETE_TASK, EDIT_TASK, LOAD_TASK } from '../actions';

let taskId = 0

const tasks = [
{
  id:1,
  title: "Feed Dogs",
  createdBy: "Dad",
  assignedTo:"Kid",
  Priority: "High"
}
];

const taskReducer = (state = tasks, action) => {
  switch (action.type) {
    case ADD_TASK:
      action.payload.id = taskId++;
      return [...state, action.payload];
    case DELETE_TASK: return;
    case EDIT_TASK: return;
    case LOAD_TASK: return;
    default:
      return state;
  };
};

export default taskReducer;