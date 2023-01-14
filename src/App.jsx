import TaskList from './components/TaskList';
import Taskform from './components/Taskform';

function App() {
	
	return (
	  <main className="bg-zinc-900 min-h-screen">
			<section className="container mx-auto p-10">
				<Taskform/>
				<TaskList />
			</section>
		</main>
	);
}

export default App;