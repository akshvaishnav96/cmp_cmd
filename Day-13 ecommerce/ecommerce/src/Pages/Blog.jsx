import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useLocation, useParams, useSearchParams } from 'react-router-dom'
import SingleBlogCard from "../components/SingleBlogCard"
import Pagination from '../components/Pagination';

export default function Blog() {
  const data = useLoaderData()
  const paramsData = useLocation()
  const [start,setStart] = useState(Number(paramsData.search[paramsData.search.length-1]))
  const [contentData,setContentData] = useState([])
  const [currentPageNumber,setCurrentPageNumber] = useState(paramsData.search[paramsData.search.length-1]-1);
  const [paramsPage,setParamsPage] = useState()

 
useEffect(()=>{
function chunkData(){
    let datafilter = data.filter((item)=>item.id > start && item.id<=start+10)
    setContentData(datafilter);
  }
  chunkData()


},[start])


useEffect(()=>{
setStart(Number(paramsData.search[paramsData.search.length-1]))
  setCurrentPageNumber(paramsData.search[paramsData.search.length-1]-1)
},[paramsData])

function paginationHandler(elem){



  setStart(Number(elem.target.innerHTML-1)*10)
  setCurrentPageNumber(Number(elem.target.innerHTML-1))

  
}
  
  return (
    <div className='flex flex-col'>
      
      <div className='grid BlogCards  '>
         {contentData.map((item)=>  <SingleBlogCard item={item}/>)}
      </div>
        <Pagination item={data} paginationHandler={paginationHandler} currentPageNumber={currentPageNumber} />
    </div>
  )
}