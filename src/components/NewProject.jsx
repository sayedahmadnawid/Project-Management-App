import Textbox from "./Textbox";
import { useRef } from "react";
import Modal from "./Modal";

export default function NewProject({onAddProject, onCancel}) {

  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
   let titleValue = title.current.value;
   let descriptionValue = description.current.value;
   let dueDateValue = dueDate.current.value;

    // validation

    if(titleValue.trim() === "" || descriptionValue.trim() === "" || dueDateValue.trim() === ""){
      modal.current.open()
      return;
    }

   onAddProject({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,  
   })
    
  }

  function handleReset() {
    // Clear input fields
    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  }

  return (
    <>
    <Modal ref={modal} buttonCaption="Close">
      <h2 className="p-2 text-xl text-gray-950">Invalid Input</h2>
      <p className="mx-2 mb-4 text-stone-950">All fields are required!</p>
    </Modal>
    <div className="w-[35rm] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="bg-red-400 px-4 py-2 rounded-sm text-stone-800 hover:text-stone-950"
            onClick={onCancel}
          >   
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={handleReset}
            className="bg-yellow-400 px-6 py-2 rounded-sm text-stone-800 hover:text-stone-950"
          >
            Reset
          </button>
        </li>
        <li>
          <button
            onClick={handleSave}
            className="bg-green-400 px-6 py-2 rounded-sm text-stone-800 hover:text-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Textbox ref={title} label="Title" />
        <Textbox ref={description} label="Description" isTextArea="true" />
        <Textbox ref={dueDate} label="Due Date" type="date" />
      </div>
    </div>
    </>
  );
}
