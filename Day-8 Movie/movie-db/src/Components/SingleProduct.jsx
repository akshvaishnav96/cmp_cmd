import React, { useState } from 'react'
import Slider from 'react-slick'
import Card from './Card'
import PorfileLogo from './PorfileLogo';

export default function SingleProduct({ data }) {

    let slickSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 8,
    };


    const BaseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL
    const { item, videoUrl, item2, credits } = data
    const videoData = videoUrl.results.find((item) => item.name = "Official Trailer")
    const [video, setVideo] = useState(false)
    const dummyImage = "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHx8MA%3D%3D"

    console.log(credits);


    return (
        <>

            <div className="videoElem  flex flex-col absolute top-[20%] left-[20%]" style={{ zIndex: 200 }}>
                {video && <div onClick={() => setVideo(false)} className='cursor-pointer '><div className='flex justify-center m-15 relative playButtonAndRatingMain h-[3rem] flex text-end' >
                    <div className="relative bg-white rounded-[100%] size-[5rem] ">
                        <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-white dark:text-neutral-700" strokeWidth="1" strokeDasharray={` 100`} strokeLinecap="round"></circle>


                        </svg>

                        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                            <span className="text-3xl font-bold text-red-600 flex items-center justify-center"><i className="fa fa-close" style={{ fontSize: "30px" }}></i> </span>
                        </div>
                    </div>
                </div>
                </div>}
                {video ?
                    <iframe className=' top-[30%] left-[0%]' width="1000" height="500" src={`https://www.youtube.com/embed/${videoData.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen >
                    </iframe>
                    : ""}

            </div>
            <div className={`mainBannerSingleProduct ${video ? "blur-md" : ""}`} >
                <div className="backgroundImage absolute " style={{ background: `url(${item.backdrop_path ? BaseImageUrl + item.backdrop_path : dummyImage})`, backgroundPosition: "center", backgroundSize: "cover", height: "100%", width: "100%", webkitFilter: "opacity(0.4)" }}></div>
                <div className="headerSingleProduct p-[10rem] h-[40rem]">
                    <div className="conatiner productDetailMain flex">
                        <img src={`${item.poster_path ? BaseImageUrl + item.poster_path : dummyImage})`} alt="" style={{ zIndex: "100", width: "20rem", aspectRatio: "1/1.5", borderRadius: "30px" }} />
                        <div className='singleProductDetail relative w-50'>
                            {item.original_title ? <h3>Movie Name : {item.original_title}  ( {new Date(item.release_date || item.first_air_date).getFullYear()})</h3> : <h3>Tv Show Name : {item.name}</h3>}
                            <p className='my-5'>

                                {item.genres.map((item) => <span className='bg-gray-500 hover:bg-gray-700 rounded-lg p-2 m-1 text-white text-[1.1rem] rounded-md cursor-pointer'>{item.name}</span>)}

                            </p>
                            <div className='playButtonAndRatingMain h-[5rem] flex text-end' >
                                <div className=" relative bg-white rounded-[100%] size-[5rem]">
                                    <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-200 dark:text-neutral-700" strokeWidth="1" strokeDasharray={` 100`} strokeLinecap="round"></circle>

                                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500 dark:text-green-500" strokeWidth="2" strokeDasharray={`${Math.trunc(item.vote_average * 10)} 100`} strokeLinecap="round"></circle>
                                    </svg>

                                    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                        <span className="text-3xl font-bold text-green-600 dark:text-gray-500">{item.vote_average.toFixed(1)}</span>
                                    </div>
                                </div>
                                {!video && <div onClick={() => setVideo(true)} className='mx-5 cursor-pointer '><div className=' relative playButtonAndRatingMain h-[5rem] flex text-end items-center justify-center text-green-600 hover:text-red-500' >
                                    <div className="relative bg-white rounded-[100%] size-[5rem] ">
                                        <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current dark:text-neutral-700" strokeWidth="1" strokeDasharray={` 100`} strokeLinecap="round"></circle>


                                        </svg>

                                        <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                            <span className="text-3xl font-bold  flex items-center justify-center"><i className="fa fa-play" style={{ fontSize: "30px" }}></i> </span>
                                        </div>
                                    </div>
                                    <h3 className='mx-3'> Watch Trailer</h3>
                                </div>
                                </div>}


                            </div>
                            {item.overview && <div className='text-[1.3rem] my-5'><p className='bold text-2xl'>Overview :</p> {item.overview}</div>}

                            <p className='text-[1.3rem] my-3'><span className='uppercase'></span> Status : {item.status}</p>

                            <p className='text-[1.3rem]'><span className=' uppercase bold text-gray-300 '>Release Date:</span> {new Date(item.release_date || item.first_air_date).toDateString()}</p>



                        </div>
                    </div>
                </div>

            </div>
            <div className="castingm flex justify-evenly w-[80%]">

            </div>

<div className='w-[80%] m-auto text-white text-center'>
<Slider {...slickSettings}>
                {credits.cast.map((item) => <PorfileLogo item={item} />)}
            </Slider>
</div>
           
            <div className="switchBtn  mt-3 flex justify-evenly w-[80%] flex flex-col m-auto p-5">
                <div className='flex justify-between items-center'>
                    <h5 className='text-3xl text-white'>Similer Movies</h5>

                </div>
                <div style={{ display: 'grid', gridTemplateColumns: "repeat(7,1fr)", gap: "30px" }}>
                </div>
                <Slider {...slickSettings}>
                    {item2.results.map((item) => <Card key={item.id} item={item} />)}
                </Slider>
            </div>

        </>
    )
}
