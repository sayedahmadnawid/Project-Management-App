import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProejectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";

function App() {
  const [isNewProjectFormVisible, setIsNewProjectFormVisible] = useState({
    newProjectId: undefined,
    projects: [],
  });

  function handleDisplayNewProjectForm() {
    setIsNewProjectFormVisible(prevState =>{
      return {
        ...prevState,
        newProjectId: null,
      }
    })
  }

  function handleCloseNewProjectForm() {
    setIsNewProjectFormVisible(prevState =>{
      return {
        ...prevState,
        newProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData) {
    setIsNewProjectFormVisible(prevState => {
      const newProject ={
        id:Math.random(),
        ...projectData,
      }

      return {
        ...prevState,
        newProjectId:undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  } 


  let contents = null;
  if (isNewProjectFormVisible.newProjectId === null){
    contents = <NewProject onAddProject={handleAddProject} onCancel={handleCloseNewProjectForm} />;
  } else if (isNewProjectFormVisible.newProjectId === undefined){
    contents = <NoProejectSelected displayNewProjectForm={handleDisplayNewProjectForm} />;
  }

  return (
    <main className="h-screen flex gap-8 ">
      <ProjectsSidebar displayNewProjectForm={handleDisplayNewProjectForm} projects={isNewProjectFormVisible.projects} />
      {contents}
    </main>
  );
}

export default App;
