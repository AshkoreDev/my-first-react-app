import { useState, useContext } from 'react';
import { TaskContext } from './../context/TaskContext.jsx';

function Taskform({creatTask}) {

	const  [ title, setTitle ] = useState("");
	const  [ description, setDescription ] = useState("");

	const { createTask } = useContext(TaskContext);

	const handlerSubmit = (e) => {

		e.preventDefault();
		
		createTask({ title, description });

		setTitle("");
		setDescription("");
	};

	return (

		<section className="max-w-md mx-auto mt-5">
			<form onSubmit={handlerSubmit} className="bg-slate-800 p-8 rounded-md">
				<h1 className="text-white text-2xl font-bold mb-5">Añadir tareas</h1>
				<input 
					placeholder="Escribe la tarea" 
					onChange={(e) => setTitle(e.target.value)} 
					value={title}
					autoFocus
					className="bg-slate-300 p-3 w-full mb-2 rounded-md"
				/>
				<textarea 
					placeholder="Escribe la descripción" 
					onChange={(e) => setDescription(e.target.value)} 
					value={description}
					className="bg-slate-300 p-3 w-full mb-2 rounded-md"
				></textarea>
				<button
					className="bg-indigo-500 text-black py-2 px-4 mt-2 rounded-md hover:bg-indigo-400"
				>Guardar</button>
			</form>
		</section>

	);
};

export default Taskform;