import React from 'react';
import TodoForm from '../todo/TodoForm';
import TodoList from '../todo/TodoList';

const Today = (props) => {
  return (
    <div>
      <h3 className="list-title">{props.statusVal}</h3>

      <TodoForm addTodo={props.addTodo} statusVal={props.statusVal} />

      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        archiveTodo={props.archiveTodo}
        handleChange={props.handleChange}
        statusVal={props.statusVal}
      />

      <h4 className="list-subtitle">This Evening</h4>
      <TodoList
        todos={props.todos}
        completeTodo={props.completeTodo}
        archiveTodo={props.archiveTodo}
        handleChange={props.handleChange}
        statusVal="Evening"
      />
    </div>
  );
};

export default Today;
