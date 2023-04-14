import TaskList from './components/TaskList.jsx';
import Taskform from './components/Taskform.jsx';

function App() {
	
	return (

	  <main className="bg-zinc-900 min-h-screen">
			<section className="container mx-auto p-2">
				<Taskform/>
				<TaskList/>
			</section>
		</main>

	);
};

export default App;