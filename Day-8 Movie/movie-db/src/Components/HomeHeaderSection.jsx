import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';





export default function HomeHeaderSection({ image }) {

      const BaseImageUrl = import.meta.env.VITE_IMAGE_BASE_URL
    

      const [search, setSearch] = useState("");
      const navigate = useNavigate();

      function handleSearch(form) {
            form.preventDefault()
            return navigate(`/search/${search}`);
      }
      return (
            <div className='ralative text-center' style={{ height: "40rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "3rem", flexDirection: "column" }}>
                  
                  <img src={BaseImageUrl+image} alt="" />
                  <div className="mainContant absolute">
                        <h1 className='text-white' style={{
                              fontSize: "5rem", fontFamily: "initial",
                              fontStyle: "normal"
                        }}>Welcome.</h1>
                        <h3 style={{
                              fontSize: "1.5rem", fontFamily: "initial",
                              fontStyle: "normal", color: 'white'
                        }} >Millions of movies, TV shows and people to discover. Explore now.</h3>
                        <form onSubmit={handleSearch} className='flex justify-center items-center relative my-5 '>
                              <input type="text" style={{
                                    width: "50rem",
                                    padding: "20px 40px",
                                    borderRadius: "50px", height: "4rem", fontSize: "1.5rem"
                              }} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a movie or tv show...' />
                              <button style={{
                                    padding: "0px  3rem",
                                    height: "4rem", position: "absolute",
                                    right: "0", borderRadius: "0px 32px 32px 0", fontSize: "1.3rem",
                              }} className=' text-white bg-orange-500' type='submit'>Search</button>
                        </form>
                  </div>
            </div>
      )
}
