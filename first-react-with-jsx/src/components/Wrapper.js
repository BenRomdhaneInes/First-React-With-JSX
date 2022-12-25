import React, { useState } from 'react';
import {MyContext} from '../context/MyContext';

const Wrapper = (props) => {
  const [userName, setUserName] = useState('');
  return(
    <MyContext.Provider value={{userName, setUserName}}>
      {props.children}
    </MyContext.Provider>
  )
}

export default Wrapper