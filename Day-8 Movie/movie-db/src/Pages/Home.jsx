import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import HomeHeaderSection from '../Components/HomeHeaderSection'
import { useLoaderData } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import LoadMoreLoader from '../Components/LoadMoreLoader';

export default function Home() {


  
  let slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  const data = useLoaderData()
  const [dataType, setDataType] = useState("day")
  const [dataByPopularity, setDatabyPopularity] = useState("movie")
  const [dataByRating, setDatabyRating] = useState("movie")
  const [popularityMediaType, setPopularityMediaType] = useState("movie")
  const [ratingMediaType, setRatingMediaType] = useState("movie")
  const [isLoading, setLoading] = useState(true)


  
  
  const trandingData = (dataType === "day" ? data.dataByDay: data.dataByWeek)
  const popularityData = (dataByPopularity === "movie" ? data.dataByPopularityMovie: data.dataByPopularityTv)
  const ratingData = (dataByRating === "movie" ? data.dataByRatingMovie: data.dataByRatingTv)


  useEffect(()=>{
    if(data){
      setLoading(false)
    }
  },[data])
  

  function getRandomImageurl(){

    const number = Math.floor(Math.random()*(20-0)+0)

       return (data.dataByDay.results[number].backdrop_path);
       
        
  }




  let image = getRandomImageurl()

  return (
    <>
      <HomeHeaderSection  image={image}/>
      {isLoading ? <LoadMoreLoader />: <>
        <div className="switchBtn  mt-3 flex justify-evenly w-[80%] flex flex-col m-auto p-5">
        <div className='flex justify-between items-center'>
        <h5 className='text-3xl text-white'>Trending</h5>
        <div className='bg-white p-1' style={{borderRadius:"50px",transition: "1s ease"}} >
          <button className={`p-2  mx-2 ${dataType == "day" ? "bg-yellow-300" : ""}`} onClick={() => setDataType("day")} style={{borderRadius:"25px",transition: "1s ease"}}>Day</button>
          <button className={`p-2  mx-2 rounded-md ${dataType == "week" ? "bg-yellow-300" : ""}`} onClick={() => setDataType("week") } style={{borderRadius:"25px",transition: "1s ease"}}>Week</button>

        </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)", gap: "30px" }}>
        </div>
        <Slider {...slickSettings}>
          {trandingData.results.map((item) => <Card key={item.id} item={item} />)}
        </Slider>
      </div>
      <div className="switchBtn  mt-3 flex justify-evenly w-[80%] flex flex-col m-auto p-5">
        <div className='flex justify-between items-center'>
        <h5 className='text-3xl text-white'>Popularity</h5>
        <div className='bg-white p-1' style={{borderRadius:"50px",transition: "1s ease"}} >
          <button className={`p-2  mx-2 ${dataByPopularity == "movie" ? "bg-yellow-300" : ""}`} onClick={() => {setDatabyPopularity("movie") , setPopularityMediaType("movie")}}style={{borderRadius:"25px",transition: "1s ease"}} >movie</button>
          <button className={`p-2  mx-2 ${dataByPopularity == "tv" ? "bg-yellow-300" : ""}`} onClick={() => {setDatabyPopularity("tv"),setPopularityMediaType("tv")}}style={{borderRadius:"25px",transition: "1s ease"}} >Tv</button>

        </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)", gap: "30px" }}>
        </div>
        <Slider {...slickSettings}>
          {popularityData.results.map((item) => <Card key={item.id} item={item} media_type={popularityMediaType} />)}
        </Slider>
      </div>
      <div className="switchBtn  mt-3 flex justify-evenly w-[80%] flex flex-col m-auto p-5">
        <div className='flex justify-between items-center'>
        <h5 className='text-3xl text-white'>Rating</h5>
        <div className='bg-white p-1' style={{borderRadius:"50px",transition: "1s ease"}} >
          <button className={`p-2  mx-2 rounded-md ${dataByRating == "movie" ? "bg-yellow-300" : ""}`} onClick={() => {setDatabyRating("movie") ,setRatingMediaType("movie")}} style={{borderRadius:"25px",transition: "1s ease"}}>Movies</button>
          <button className={`p-2  mx-2 rounded-md ${dataByRating == "tv" ? "bg-yellow-300" : ""}`} onClick={() => {setDatabyRating("tv"),setRatingMediaType("tv")}} style={{borderRadius:"25px",transition: "1s ease"}}>Tv</button>

        </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)", gap: "30px" }}>
        </div>
        <Slider {...slickSettings}>
          {ratingData.results.map((item) => <Card key={item.id} item={item} media_type={ratingMediaType}/>)}
        </Slider>
      </div>
      </>}
     

    </>

  )
}
