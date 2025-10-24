import Button from "./Button";
export default function ProjectsSidebar({
  displayNewProjectForm,
  projects,
  onSelectProject,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 text-bold uppercase md:text-xl">Your Project</h2>
      <p>
        <Button onClick={displayNewProjectForm}>+ New Project</Button>
      </p>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses = "my-1 mx-2 px-2 py-1 rounded-md hover:bg-slate-400 hover:text-slate-800";
          if(selectedProjectId === project.id){
            cssClasses += " text-stone-200 bg-stone-800";
          }else{
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                onClick={()=>onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.description}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
