/* eslint-disable react/prop-types */
import TaskItem from "./TaskItem";
export default function TasksList({
  tasks,
  toggleCheckBox,
  editingMode,
  deleteTask,
}) {
  return (
    <div className="tasks">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            editingMode={editingMode}
            deleteTask={deleteTask}
            toggleCheckBox={toggleCheckBox}
            task={task}
            key={task.id}
          />
        ))
      ) : (
        <h1 className="nothing">No task yet</h1>
      )}
    </div>
  );
}
