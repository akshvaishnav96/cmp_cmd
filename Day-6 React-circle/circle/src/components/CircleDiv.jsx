import React from 'react'

       
       
export default function CircleDiv({xPosition,yPosition,randomColorValue}) {
  return (
    <div style={{position:"absolute",left:xPosition,top:yPosition , width:"20px",height:"20px",borderRadius:"10px",background:randomColorValue,border:"1px solid"}}></div>
  )
}
