import { createContext, useState, useEffect } from 'react';
import { tasks as data } from './../data/tasks.js';

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {

	const [tasks, setTasks] = useState([]);

	const createTask = ({ title, description }) => {

		setTasks([...tasks, {

			id: tasks.length,
			title,
			description

		}]);
	}

	const deleteTask = (taskId) => {

		setTasks(tasks.filter(task => task.id !== taskId));
	}

	useEffect(() => setTasks(data), []);
	
	return(

		<TaskContext.Provider value={{tasks, createTask, deleteTask}}>
			{props.children}
		</TaskContext.Provider>

	);
};