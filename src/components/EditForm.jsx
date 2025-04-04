import { useState } from "react";

function EditForm({ todo, handleEdit }) {
  const [newTodo, setNewTodo] = useState(todo.content); // Hold the content of the todo you're editing

  const HandleEdit = (e) => {
    e.preventDefault();  // Prevent form submission
    handleEdit(todo.id, newTodo); // Pass the updated content to handleEdit
  };

  return (
    <form className="create-form submit-form" onSubmit={HandleEdit}>
      <input
        type="text"
        placeholder="Edit the to-do"
        value={newTodo} // Set value to the state variable holding the todo's content
        onChange={(e) => setNewTodo(e.target.value)} // Update newTodo state on input change
      />
      <button type="submit">Edit</button>
    </form>
  );
}

export default EditForm;
