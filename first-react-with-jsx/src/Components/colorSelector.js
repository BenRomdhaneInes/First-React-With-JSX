import React, { useState } from 'react'
const ColorSelector = ({boxs, setBoxs}) => {
  const [color, setColor] = useState('')
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const addColor = (e) =>{
    e.preventDefault();
    setBoxs([...boxs, {color: color, width: width, height: height}])
    setColor('')
    setHeight('')
    setWidth('')
  }
  return(
      <form className='color-selector' onSubmit={addColor}>
          <div>
          <label htmlFor="color">Color</label>
          <input type="text" id="color" onChange={(e) => setColor(e.target.value)} value={color}/>
          </div>
          <div>
          <label htmlFor="width">Width</label>
          <input type="number" id="width" onChange={(e) => setWidth(e.target.value)} value={width}/>
          </div>
          <div>
          <label htmlFor="height">Height</label>
          <input type="number" id="height" onChange={(e) => setHeight(e.target.value)} value={height}/>
          </div>
          <button className='submit-btn'>Add</button>
      </form>
  )
}

export default ColorSelector