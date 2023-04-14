import { useContext } from 'react';
import TaskCard from './TaskCard.jsx';
import { TaskContext } from './../context/TaskContext.jsx';

function TaskList() {

	const { tasks } = useContext(TaskContext);

	return(

		<section className="w-100 flex items-center justify-center my-5 flex-wrap gap-4">
			{ 
				(tasks.length === 0)
					? <h2 className="text-white text-2xl font-bold text-center mt-4">No hay tareas</h2> 
					: tasks.map((task) => <TaskCard key={task.id} task={task}/>)
			} 
		</section>

	);
};

export default TaskList;