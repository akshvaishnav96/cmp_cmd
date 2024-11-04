import React from 'react'
import Avatar from './Avatar'

export default function AvatarContainer({addAvatarBtnHandler,setFormStatus,avatarData,deletePreviewHandler,}) {
  return (
    <div className="container">
        <div className="avatarMin">
          <div className="showAvatarArea">
            {avatarData.map((item)=>(
               <Avatar text={item.text} color={item.color} id={item.id} deletePreviewHandler={deletePreviewHandler}/>
            ))}
          </div>

          <div className="addAvaterBtn" onClick={addAvatarBtnHandler}>+</div>
        </div>
      </div>
  )
}
