import ProjectsSidebar from "./components/ProjectsSidebar";
import NewProject from "./components/NewProject";
function App() {
  return (
    <main className="h-screen flex gap-8">
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}

export default App;
