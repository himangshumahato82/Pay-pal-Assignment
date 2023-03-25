import './App.css';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
function App() {
  return (
    <div className="App">
      <h1 className='main-heading'>Task Planner</h1>
      <TodoForm/>
      <Todos/>
    </div>
  );
}

export default App;
