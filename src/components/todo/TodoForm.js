import React from 'react';

class TodoForm extends React.Component  {
  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(event) {
    event.preventDefault();
    
    let statusVar = '';
    if (this.props.statusVal === undefined) {
      statusVar = '';
    } else {
      statusVar = this.props.statusVal;
    }

    let projectVar = '';
    if (this.props.projectVal === undefined) {
      projectVar = '';
    } else {
      projectVar = this.props.projectVal;
    }

    const todo = {
      notes: this.notes.value,
      text: this.text.value,
      status: statusVar,
      complete: false,
      completed: false,
      archived: false,
      project: projectVar,
    }

    this.props.addTodo(todo);
    this.todoForm.reset();
  }

  render() {
    return (
      <form ref={(input) => {this.todoForm = input;} } onSubmit={(e) => this.createTodo(e)} className="todo-form">
        <input className="todo-check" type="checkbox" ref={(input) => {this.checkbox = input;} } />
        <input type="text" className="todo-input" placeholder="New To-Do" ref={(input) => {this.text = input;} } />
        <textarea placeholder="Notes" ref={(input) => {this.notes = input;} } className="todo-notes" />
      </form>
    );
  }
}

export default TodoForm;
