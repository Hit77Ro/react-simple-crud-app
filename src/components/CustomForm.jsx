import { useRef, useState } from "react";

// eslint-disable-next-line react/prop-types
export default function CustomForm({ addTask }) {
  const [task, setTask] = useState("");
  const inputField = useRef(null);

  const handleFormSumit = (e) => {
    e.preventDefault();
    addTask({
      title: task,
      id: crypto.randomUUID(),
      checked: false,
    });
    setTask("");
    inputField.current.focus();
  };

  return (
    <form className="form" onSubmit={handleFormSumit}>
      <input
        ref={inputField}
        type="text"
        value={task}
        required
        placeholder="add task"
        autoFocus
        onInput={({ target: { value } }) => setTask(value)}
      />
      <button type="submit"> add task</button>
    </form>
  );
}
