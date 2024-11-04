import React from 'react'

export default function Avatar({text,color,id,deletePreviewHandler}) {

    return (
        <div className='avatarLogo' style={{background:color.background,color:color.color == "dark" ? "black" : "white"}}>
            <p>{text}</p>
            <div onClick={()=>deletePreviewHandler(id)} className='deleteAvatar'>
            &#10006;
            </div>
        </div>
    )
}
