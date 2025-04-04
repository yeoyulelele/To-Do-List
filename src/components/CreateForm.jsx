import { useState } from "react";

function CreateForm({addTodo}) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter the to-do thing"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" onSubmit={(e) => setTodo(e.target.value)}>Submit</button>
    </form>
  );
}
export default CreateForm;
