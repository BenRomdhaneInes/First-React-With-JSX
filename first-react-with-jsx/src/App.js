
import PersonalCard from './personal-card/personal-card'
import './App.css';


function App() {
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
      {personalData.map((person,index) => <PersonalCard person={person} key={index}/>)}
    </div>
  );
}

export default App;
