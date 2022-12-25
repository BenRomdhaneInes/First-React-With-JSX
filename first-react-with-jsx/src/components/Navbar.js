import React, { useContext } from 'react';
import {MyContext} from '../context/MyContext';

const Navbar = ()=>{
  const { userName } = useContext(MyContext);
  return(
    <div className="navbar">
      <h2>hi. {userName} !</h2>
    </div>
  )
}

export default Navbar