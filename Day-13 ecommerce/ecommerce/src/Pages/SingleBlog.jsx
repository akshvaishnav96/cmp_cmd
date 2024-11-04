import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleBlogCard from '../components/SingleBlogCard'

export default function SingleBlog() {
  const data = useLoaderData()
  
  
  return (
   <div className="blogMain h-[100vh] bg-blue-200 flex items-center justify-center">
      <SingleBlogCard item={data}/>
   </div>
  )
}