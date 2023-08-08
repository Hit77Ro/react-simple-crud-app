import { useEffect, useState } from "react";
import CustomForm from "./CustomForm";
import TasksList from "./TasksList";
import EditForm from "./EditForm";

function App() {
  const [tasks, setTasks] = useState(() =>
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(null);
  const addTask = (task) => {
    if (task.title.trim() !== "") {
      setTasks((prev) => [task, ...prev]);
    }
  };
  // check and uncheck checkbox
  const toggleCheckBox = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  };
  // on clicking edit icon
  const editingMode = (task) => {
    setIsEditing(true);
    setEditedTask(task);
  };
  // on submit
  const updatetask = (task) => {
    setTasks((prev) =>
      prev.map((el) => (el.id === task.id ? { ...el, title: task.title } : el))
    );
    setIsEditing(false);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((el) => el.id !== id));
  };

  useEffect(() => {
    console.log("useEffect runs");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      {isEditing && (
        <EditForm editedTask={editedTask} updateTask={updatetask} />
      )}
      <div className="container">
        <h1 className="header">my task List </h1>
        <CustomForm addTask={addTask} />

        <TasksList
          editingMode={editingMode}
          deleteTask={deleteTask}
          toggleCheckBox={toggleCheckBox}
          tasks={tasks}
        />
      </div>
    </>
  );
}

export default App;
