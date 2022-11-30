
import PersonalCard from './personal-card/personal-card'
import './App.css';


function App() {
  const todoList = ['Learn React', 'Climb Mt. Everest', 'Run a Marathon', 'Feed the dogs'];
  const personalData = [
    {
      firstName: 'Jane',
      lastName: 'Doe',
      age: 36,
      hairColor: 'Black',
    },
    {
      firstName: 'John',
      lastName: 'Smith',
      age: 88,
      hairColor: 'Brown',
    },
    {
      firstName: 'Millard',
      lastName: 'FillMore',
      age: 50,
      hairColor: 'Brown',
    },
    {
      firstName: 'Maria',
      lastName: 'Smith',
      age: 36,
      hairColor: 'black',
    },
  ]
  return (
    <div className="App">
      <h1>Hello Dojo</h1>
      <h2>things i need to do:</h2>
      <ul>{todoList.map((todo,index) => <li key={index}>{todo}</li>)}</ul>
      <hr/>
      {personalData.map((person,index) => <PersonalCard person={person} key={index}/>)}
    </div>
  );
}

export default App;
