import React from 'react'

export default function PorfileLogo({item}) {
const BaseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL
const dummyImage = "https://static.vecteezy.com/system/resources/previews/036/594/092/original/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
  return (
   
      <>
        <img src={item.profile_path ? BaseImageUrl + item.profile_path: dummyImage } alt="" srcset="" style={{padding:"10px",height:"12rem", aspectRatio:1/1, borderRadius:"100px"}}/>
        <h5>{item.original_name}</h5>
        <p>({item.character})</p>
      </>
  )
}
