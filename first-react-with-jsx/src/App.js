
import './App.css';

function App() {
  const todoList = ['Learn React', 'Climb Mt. Everest', 'Run a Marathon', 'Feed the dogs'];
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <h2>things i need to do:</h2>
      <ul>{todoList.map((todo,index) => <li key={index}>{todo}</li>)}</ul>
    </div>
  );
}

export default App;
