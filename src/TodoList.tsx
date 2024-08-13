import React from 'react';
import { Todo } from './TodoApp';

type TodoListProps = {
  todos: Todo[];
  toggleTodo: (id: number) => void;
};

const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
      <li key={todo.id} className={todo.completed ? 'completed' : ''}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <label>{todo.text}</label>
        </div>
      </li>
    ))}
  </ul>
);

export default TodoList;
