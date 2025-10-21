import Button from "./Button";
export default function ProjectsSidebar() {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 text-bold uppercase md:text-xl">Your Project</h2>
      <p>
        <Button>+ New Project</Button>
      </p>
    </aside>
  );
}
