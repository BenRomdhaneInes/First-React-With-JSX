import React, { useState }from 'react';
import ColorSelector from './Components/colorSelector';
import ColorBox from './Components/colorBox';

import './App.css'


function App() {
  const [boxs, setBoxs] = useState([])
  return (
    <div className="app">
      <ColorSelector boxs={boxs} setBoxs={setBoxs}/>
      <div className="box-wrapper">{boxs?.map((box, index) => <ColorBox box={box} key={index}/>)}</div>
    </div>
  );
}
                
export default App;

