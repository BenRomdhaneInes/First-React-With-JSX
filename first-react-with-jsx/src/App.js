import React, { useState }from 'react';

import './App.css'
import Form from './form';
import ListItem from './ListItem';


function App() {
  const [newTask, setNewTask]= useState('')
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      name: 'to do 1',
      completed: false
    },
    {
      id: 2,
      name: 'to do 2',
      completed: false
    },
    {
      id: 3,
      name: 'to do 3',
      completed: false
    },
  ])

  const addTodoList = e => {
    e.preventDefault();
    if (newTask !== ''){
      const newListItem = {
        id:todoList.length+1,
        name: newTask,
        completed: false
      }
      setTodoList([...todoList, newListItem])
      setNewTask('')
    }
  }

  const handleTaskChange = (id) =>{
    const newList = todoList.map((task) => {
      if (task.id === id) {
        return {...task ,completed: !task.completed}
      }else return task
    })
    setTodoList(newList)
  }

  const handleDeleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id))
  }
  

  return (
    <div className="app">
      <Form addTodoList={addTodoList} newTask={newTask} setNewTask={setNewTask}/>
      <ol>
      {todoList.map((task, index) =>{
        return (
          <ListItem task={task} key={index} handleDeleteTask={handleDeleteTask} handleTaskChange={handleTaskChange}/>
        )
      })} 
      </ol>
    </div>
  );
}
                
export default App;

