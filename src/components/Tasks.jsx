import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">This Project has no tasks yet.</p>
      )}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li
              key={task.taskId}
              className="flex justify-between items-center my-2 p-2 bg-stone-200 rounded-sm"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onDelete(task.taskId)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}


    </section>
  );
}
