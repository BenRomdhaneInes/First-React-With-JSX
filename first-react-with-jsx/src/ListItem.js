import React from 'react';
const ListItem = ({task, handleDeleteTask, handleTaskChange}) => {
  return (
    <li  className={`list-item`}>
      <input type='checkbox' id={task.id} checked={task.completed} onChange={() => handleTaskChange(task.id)}/>
      <span style={{textDecoration: task.completed ? 'line-through' : 'none', marginRight:'8px'}}>{task.name}</span>
      <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
    </li>
  )
}
export default ListItem