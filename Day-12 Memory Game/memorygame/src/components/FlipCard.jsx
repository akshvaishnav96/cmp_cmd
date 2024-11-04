import React from 'react'

export default function FlipCard({item,clickHandler,id}) {


    return (


         <div className="flip-card" onClick={(elem)=>clickHandler(elem,item,id)} id={id}>
                <div className={`flip-card-inner ${item.status == "rotate" ? "rotate": ""  } ` }  >
                    <div className="flip-card-front">
                        <img src="https://media.istockphoto.com/id/1398132096/vector/question-mark-icon.jpg?s=612x612&w=0&k=20&c=pugL7du4lXu_GVox1Zl_k_TFev6FrTCaMoeaJd8q9tI=" alt="Avatar" style={{width:"200px",height:"200px"}} />
                    </div>
                    <div className="flip-card-back">
                    <img src={item.image} alt="Avatar" className='carImage' style={{width:"200px",height:"200px"}} />
                    </div>
                </div>
            </div>
    )
}
