import React, { Component } from 'react';
import Modal from 'react-modal';
import AddTask from '../AddTask';
import './NewTask.scss';

class NewTask extends Component {
  constructor(props){
    super(props)

    this.state={
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  };

  openModal(){
    this.setState({ modalIsOpen: true });
  };

  closeModal(){
    this.setState({ modalIsOpen: false});
  };

  render(){
    return(
      <>
      <button onClick={this.openModal}>New Task</button>
      <Modal className="modal" isOpen={this.state.modalIsOpen}
      onRequestClose={this.closeModal}> 
      <AddTask/> 
      </Modal>
      </>
    )
  }

};

export default NewTask;