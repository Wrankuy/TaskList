import React from 'react';
import ReactDOM from 'react-dom';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import useTodoState from './useTodoState';
import './styles.css';

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <h1>
        TO-DO LIST
      </h1>
      <TodoForm
        saveTodo={(todoText) => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }
      }
      />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <h1>
      DONE LIST
      </h1>
    </div>

  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
