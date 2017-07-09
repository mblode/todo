import React from 'react';

class TodoForm extends React.Component  {
  constructor(props) {
    super(props);
    this.createTodo = this.createTodo.bind(this);
  }

  createTodo(event) {
    event.preventDefault();

    const todo = {
      notes: this.notes.value,
      text: this.text.value,
      status: this.props.statusVal,
      time: 'Today',
      completed: false,
      archived: false,
    }

    this.props.addTodo(todo);
    this.todoForm.reset();
  }

  render() {
    let status = null;

    if (this.props.statusVal !== 'Inbox') {
      status = <span className="todo-form-status">{this.props.statusVal}</span>;
    }

    return (
      <form ref={(input) => {this.todoForm = input;} } onSubmit={(e) => this.createTodo(e)} className="todo-form">
        <input className="todo-check" type="checkbox" ref={(input) => {this.checkbox = input;} } />
        <input type="text" placeholder="New To-Do" ref={(input) => {this.text = input;} } />
        <textarea placeholder="Notes" ref={(input) => {this.notes = input;} } className="todo-notes" />

        {status}
      </form>
    );
  }
}

export default TodoForm;