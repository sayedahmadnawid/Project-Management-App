import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState, useRef } from "react";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [isNewProjectFormVisible, setIsNewProjectFormVisible] = useState({
    newProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddTask(text) {
    setIsNewProjectFormVisible((prevState) => {
      const newTask = {
        taskId: Math.random(),
        text: text,
        projectId: prevState.newProjectId,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setIsNewProjectFormVisible((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => {
          task.taskId !== id;
        }),
      };
    });
  }

  function handleDisplayNewProjectForm() {
    setIsNewProjectFormVisible((prevState) => {
      return {
        ...prevState,
        newProjectId: null,
      };
    });
  }

  function handleCloseNewProjectForm() {
    setIsNewProjectFormVisible((prevState) => {
      return {
        ...prevState,
        newProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setIsNewProjectFormVisible((prevState) => {
      const newProject = {
        id: Math.random(),
        ...projectData,
      };

      return {
        ...prevState,
        newProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  function handleSelectProject(id) {
    setIsNewProjectFormVisible((prevState) => {
      return {
        ...prevState,
        newProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setIsNewProjectFormVisible((prevState) => {
      const updatedProjects = prevState.projects.filter(
        (project) => project.id !== prevState.newProjectId
      );

      return {
        ...prevState,
        newProjectId: undefined,
        projects: updatedProjects,
      };
    });
  }

  const selectedProject = isNewProjectFormVisible.projects.find(
    (project) => project.id === isNewProjectFormVisible.newProjectId
  );

  let contents = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={isNewProjectFormVisible.tasks}
    />
  );
  if (isNewProjectFormVisible.newProjectId === null) {
    contents = (
      <NewProject
        onAddProject={handleAddProject}
        onCancel={handleCloseNewProjectForm}
      />
    );
  } else if (isNewProjectFormVisible.newProjectId === undefined) {
    contents = (
      <NoProjectSelected displayNewProjectForm={handleDisplayNewProjectForm} />
    );
  }

  return (
    <main className="h-screen flex gap-8 ">
      <ProjectsSidebar
        displayNewProjectForm={handleDisplayNewProjectForm}
        projects={isNewProjectFormVisible.projects}
        onSelectProject={handleSelectProject}
      />
      {contents}
    </main>
  );
}

export default App;
