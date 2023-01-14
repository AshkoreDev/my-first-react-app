import TaskCard from './TaskCard';
import { useContext } from 'react';
import { TaskContext } from './../context/TaskContext';

function TaskList() {

	const { tasks } = useContext(TaskContext);

	if (tasks.length === 0) {
		
		return <h2 className="text-white text-2xl font-bold text-center mt-4">No hay tareas aún.</h2>
	}

	return(

		<section className="grid grid-cols-3 gap-4 mt-4"> { tasks.map(task => (

			<TaskCard key={task.id} task={task}/>

		))} </section>
	);
}

export default TaskList;