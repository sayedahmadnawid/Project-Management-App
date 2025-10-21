import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProejectSelected from "./components/NoProjectSelected";

function App() {

  return (
    <main className="h-screen flex gap-8 ">
      <ProjectsSidebar />
      <NoProejectSelected />
    </main>
  );
}

export default App;
