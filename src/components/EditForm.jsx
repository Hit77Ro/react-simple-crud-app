/* eslint-disable react/prop-types */
import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function EditedForm({ editedTask, updateTask }) {
  // eslint-disable-next-line react/prop-types
  const [updatedTask, setUpdatedTask] = useState(editedTask.title || "");
  const inputField = useRef(null);

  const handleFormSumit = (e) => {
    e.preventDefault();
    updateTask({
      ...editedTask,
      title: updatedTask,
    });
    inputField.current.focus();
  };

  return (
    <div className="wrapper">
      <h1>update task</h1>
      <form className="form" onSubmit={handleFormSumit}>
        <input
          ref={inputField}
          type="text"
          value={updatedTask}
          required
          placeholder="add task"
          autoFocus
          onInput={({ target: { value } }) => setUpdatedTask(value)}
        />
        <button type="submit"> add task</button>
      </form>
    </div>
  );
}
