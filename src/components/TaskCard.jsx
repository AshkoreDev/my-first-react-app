import { useContext } from 'react';
import { TaskContext } from './../context/TaskContext';

function TaskCard({ task }) {

	const { deleteTask } = useContext(TaskContext);
	
	return(

		<article className="bg-gray-800 text-white p-4 rounded-md">
			<h2 className="text-xl font-bold capitalize">{task.title}</h2>
			<p className="text-gray-500 text-sm">{task.description}</p>
			<button onClick={() => deleteTask(task.id)} className="bg-red-500 mt-4 py-2 px-4 rounded-md hover:bg-red-400">Eliminar</button>
		</article>
	);
}

export default TaskCard;
// buscar dropdiling, contexto