import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

function ToDoItem({ todo, completeTodo, deleteTodo, editTodo, handleEdit }) {
  return (
    <>
      {todo.isEdit ? (
        <EditForm todo={todo} handleEdit={handleEdit} />
      ) : (
        <div className={`todo-item ${todo.isCompleted ? "completed" : ""}`}>
          <p onClick={() => completeTodo(todo.id)}>{todo.content}</p>
          <div>
            <MdEdit
              style={{ cursor: "pointer", marginRight: "10px" }}
              onClick={() => editTodo(todo.id)}
            />
            <MdDelete
              style={{ cursor: "pointer" }}
              onClick={() => deleteTodo(todo.id)}
            />
          </div>
        </div>
      )}
    </>
  );
}
export default ToDoItem;
