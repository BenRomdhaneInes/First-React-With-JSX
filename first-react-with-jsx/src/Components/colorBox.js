import React from 'react'
const ColorBox = ({ box }) => {

  return(
     <div className='color-box' style={{ backgroundColor: box.color, width: box.width + 'px', height: box.height + 'px'}}/>
  )
}

export default ColorBox