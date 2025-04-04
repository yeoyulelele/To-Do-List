import { useState } from "react";
import CreateForm from "./CreateForm";
import ToDoItem from "./ToDoItem";

function ToDo() {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    console.log(content);
    setTodos([...todos, { content, id: Math.random(), isCompleted: false, isEdit: false }]);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEdit: true} : todo;
      })
    );
  }

  const handleEdit = (id,content) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, content: content, isEdit:false} : todo;
      })
    );
  }

  return (
    <div className="todo">
      <h1>To Do</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return (
          <ToDoItem
            todo={todo}
            key={todo.id}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            handleEdit={handleEdit}
          />
        );
      })}
    </div>
  );
}

export default ToDo;
