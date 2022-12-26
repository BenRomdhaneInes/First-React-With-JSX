import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
const Form = () => {
  const resources = ['films', 'people', 'planets', 'species', 'starships', 'vehicles']
  const [type, setType]= useState(resources[0])
  const [id, setId] = useState(0)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${type}/${id}`)
  }

  return(
    <form onSubmit={(e) => handleSubmit(e)} className='form'>
      <label><b>Search For: </b></label>
      <select id="mySelect" onChange={(e) => setType(e.target.value)}>
        {resources.map((elem, i) => <option key={i} value={elem}>{elem}</option>)}
      </select>
      <label><b>ID: </b></label>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)}/>
      <button>Search</button>
    </form>
  )
}

export default Form