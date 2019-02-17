import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions';
import './AddTask.scss';


class AddTask extends Component{
  constructor(props){
    super(props)
    this.state= {
      id:1,
      title: '',
      body: '',
      status_id: 1,
      priority_id: 1,
      assignedTo_id: 1,
      createdby_id: 1
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  
  handleInputChange(event){
    const value = event.target.value;
    switch(event.target.id){
      case "title":
      this.setState({ title: value})
      break;
      case "body":
      this.setState({ body: value})
      break;
      case "priority_id":
      this.setState({ priority: value})
      break;
      case "assignedTo_id":
      this.setState({ assignedTo: value})
      break;
      case "createdby_id":
      this.setState({ createdby: value})
      break;
      default:
      break;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, body,status_id, priority_id, assignedTo_id, createdby_id } = this.state
    
    this.props.addTask({
     title,
     body,
     status_id,
     priority_id,
     assignedTo_id,
     createdby_id
    });
  }

 render(){
   return(
   <form className="form-container">
    <div className="inside-modal">
      <input id="title" type="text" value={this.state.title} onChange={this.handleInputChange}/>
      <input id="body" type="text" value={this.state.body} onChange={this.handleInputChange}/>

      <select id="status" type="text" value={this.state.status_id} onChange={this.handleInputChange}>
        <option> Choose a priority</option>
        <option> InQueue </option>
        <option> InProgress </option>
        <option> Completed </option>
      </select>


      <select id="priority" type="text" value={this.state.priority_id} onChange={this.handleInputChange}>
        <option> Choose a priority</option>
        <option> Low </option>
        <option> Medium </option>
        <option> High </option>
      </select>


      <input id="assignedTo" type="text" value={this.state.assignedTo_id} onChange={this.handleInputChange}/>
      <input id="createdby" type="text" value={this.state.createdby_id} onChange={this.handleInputChange}/>

      <button onClick={this.handleSubmit}>AddTask</button>
     </div>
   </form>
   );
 };
};

const mapStateToProps = (state) => {
  return {
    tasks: state
  };
};
const mapDispatchToProps = (dipatch) => {
  return {
    addTask : (task) => {
      dipatch(addTask(task))
    }
  };
};

AddTask = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTask);

export default AddTask;