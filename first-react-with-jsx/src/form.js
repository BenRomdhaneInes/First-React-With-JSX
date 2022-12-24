import React from 'react';
const Form = ({addTodoList,newTask, setNewTask}) => {
  return(
    <form onSubmit={e => addTodoList(e)}>
      <h3>add ToDo item</h3>
      <input type="text" value={newTask} onChange={e => setNewTask(e.target.value)}/>
      <button>add</button>
    </form>
  )
}

export default Form