
import Button from './Button';
import No_Project from '../assets/no-projects.png';

export default function NoProejectSelected() {
  return(
  <div className='mt-24 text-center w-2/3'>
    <img src={No_Project} alt="No Project Selected"
    className="h-16 w-16 object-contain mx-auto" />
    <h2 className="text-2xl font-bold mt-4">No Project Selected</h2>
    <p className="mt-2 text-stone-400 mb-4">
      Please select a project to view its details.
    </p>
    <p className='mt-8'>
        <Button>+ Create New Project</Button>
    </p>
  </div>
  )
}
