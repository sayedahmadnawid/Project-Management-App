import Textbox from "./Textbox";
export default function ProjectsSidebar() {
  return (
    <div className="w-[35rm] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="bg-red-400 px-4 py-2 rounded-sm text-stone-800 hover:text-stone-950">Cancel</button></li>
        <li><button className="bg-green-400 px-6 py-2 rounded-sm text-stone-800 hover:text-stone-950">Save</button></li>
      </menu>
      <div>
        <Textbox label="Title"/>
        <Textbox label="Description" isTextArea="true" />
        <Textbox label="Due Date" date/>
      </div> 
    </div>
  );
}
