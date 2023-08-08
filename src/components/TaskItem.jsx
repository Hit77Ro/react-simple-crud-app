import { useState } from "react";

/* eslint-disable react/prop-types */
export default function TaskItem({
  task,
  toggleCheckBox,
  deleteTask,
  editingMode,
}) {
  const [check, setCheck] = useState(task.checked);
  const handleCheckBox = () => {
    setCheck((prev) => !prev);
    toggleCheckBox(task.id);
  };

  return (
    <div className="task">
      <div className="row">
        <input
          type="checkbox"
          checked={check}
          id={task.id}
          name="title"
          onChange={handleCheckBox}
        />
        <label htmlFor={task.id}>{task.title}</label>
      </div>
      <div className="row settings">
        <button className="btn" onClick={() => editingMode(task)}>
          {" "}
          <i className="fas fa-edit"></i>{" "}
        </button>
        <button className="btn" onClick={() => deleteTask(task.id)}>
          {" "}
          <i className="fas fa-trash"></i>{" "}
        </button>
      </div>
    </div>
  );
}
