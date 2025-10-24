import Tasks from "./Tasks";

export default function SelectedProject({ project, onDeleteProject }) {
  const formattedeDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="w-[35rem] mt-16 p-8">
      <header className="mb-8 border-b pb-4 border-stone-300">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold mb-2s">{project.title}</h1>
          <button 
          onClick={onDeleteProject}
          className="text-stone-600 hover:text-stone-800">
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-300">{formattedeDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">Description</p>
      </header>
      <Tasks />
    </div>
  );
}
