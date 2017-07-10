import React from 'react';

import Todo from './Todo';

const TodoList = (props) => {
  return (
    <div className="todo-list">
      {
        Object.keys(props.todos)
        .filter((key) => {
          if (props.completedVal === undefined) {
            return props.todos[key].completed === false;
          }

          return props.todos[key].completed === props.completedVal;
        }).filter((key) => {
          if (props.archivedVal === undefined) {
            return props.todos[key].archived === false;
          }

          return props.todos[key].archived === props.archivedVal;
        }).filter((key) => {
          if (props.statusVal === 'Logbook' || props.statusVal === 'Trash') {
            return props.todos[key];
          } else if (props.statusVal === undefined) {
            return props.todos[key].status === '';
          }
          return props.todos[key].status === props.statusVal;
        }).filter((key) => {
          if (props.projectVal === undefined) {
            return props.todos[key].project === '';
          }
          return props.todos[key].projectVal === props.projectValVal;
        })
        .map(key => (<Todo
          key={key}
          index={key}
          details={props.todos[key]}
          completeTodo={props.completeTodo}
          archiveTodo={props.archiveTodo}
          handleChange={props.handleChange}
          projects={props.projects}
        />))
      }
    </div>
  );
}

export default TodoList;
