import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addTask } from '../../actions'

class AddTask extends Component {
  constructor(props) {
    this.stats ={
      title: '',
      createdBy: '',
      assignedTo: '',
      priority: ''  
    }

    this.titleInputRef = createRef();

  }
}

const mapstateToProps = (state) => {};
const mapDispatchToProps = (dispatch) => {};

AddTask = connect(
  mapstateToProps,
  mapDispatchToProps
)(AddTask);

export default AddTask;
