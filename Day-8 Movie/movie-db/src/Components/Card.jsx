import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Card({ item,media_type }) {


    

const dummyImage = "https://images.unsplash.com/photo-1511406361295-0a1ff814c0ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGFya3xlbnwwfHwwfHx8MA%3D%3D"
    const BaseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL
    const location = useLocation()

   let search =  location.pathname.startsWith("/search") ? true : false
   let home =  location.pathname == "/" ? true : false
    return (
       <Link style={{marginTop:"2rem"}} to={search ? `../../movie/${item.id}` : home ? `${item.media_type || media_type}/${item.id}` :  `${item.id}`}> <div className='p-5 '>
            <div className='cardBakcground p-3 my-2 rounded-xl relative' style={{
                minHeight: "20rem"
            }}>
                <img  className=" rounded-md absolute top-[0] h-[100%] object-cover " src={`${item.poster_path ? BaseImageUrl + item.poster_path : dummyImage})`} alt="" />
                <div className="absolute  bg-white rounded-[100%] size-[3rem] bottom-[-1rem] left-0">
                    <svg className="rotate-[135deg] size-full" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current  text-green-200 dark:text-neutral-700" strokeWidth="1" strokeDasharray={` 100`} strokeLinecap="round"></circle>

                        <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-green-500 dark:text-green-500" strokeWidth="2" strokeDasharray={`${Math.trunc(item.vote_average*10)} 100`} strokeLinecap="round"></circle>
                    </svg>

                    <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                        <span className="text-1xl font-bold text-green-600 dark:text-gray-500">{item.vote_average.toFixed(1)}</span>
                    </div>
                </div>
                <div className='category ' style={{zIndex:100,position:'relative'}}>
                    <span className='bg-pink-500 p-1 m-1 text-white rounded-md cursor-pointer'>Drama</span>
                    <span className='bg-pink-500 p-1 m-1 text-white rounded-md cursor-pointer'>Thriller</span>
                </div>
            </div>
            <p className='text-white text-2xl py-5'>{item.original_title || item.name}</p>
            <p className='date text-gray-400'>{new Date(item.release_date || item.first_air_date).toDateString()}</p>
        </div>
        </Link>
    )
}
