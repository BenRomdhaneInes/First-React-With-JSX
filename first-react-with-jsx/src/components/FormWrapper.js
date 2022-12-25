import React, { useContext, useState } from 'react';
import {MyContext} from '../context/MyContext';

const FormWrapper = () => {
  const [name, setName] = useState('');
  const { setUserName } = useContext(MyContext);

  const submitForm = (e) => {
    e.preventDefault();
    setUserName(name)
    setName('')
  }

  return(
    <form onSubmit={(e) => submitForm(e)} className="formWrapper">
      <label><b>Your name: </b></label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder={'your name'}/>
    </form>
  )
}

export default FormWrapper