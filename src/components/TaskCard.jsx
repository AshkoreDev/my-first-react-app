import { useContext } from 'react';
import { TaskContext } from './../context/TaskContext.jsx';

function TaskCard({ task }) {

	const { deleteTask } = useContext(TaskContext);

	const handleClick = () => deleteTask(task.id);
	
	return(

		<article className="bg-gray-800 text-white p-4 rounded-md w-72">
			<h2 className="text-xl font-bold capitalize">{task.title}</h2>
			<p className="text-sm">{task.description}</p>
			<button onClick={handleClick} className="bg-red-500 text-black mt-4 py-2 px-4 rounded-md hover:bg-red-400">Eliminar</button>
		</article>

	);
};

export default TaskCard;