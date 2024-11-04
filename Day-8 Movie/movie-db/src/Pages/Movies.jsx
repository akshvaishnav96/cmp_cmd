import React, { useEffect, useState } from 'react'
import { useLoaderData, useLocation } from 'react-router-dom'
import Card from '../Components/Card'
import SingleProductHeader from '../Components/SingleProductHeader'
import { fetchDataFromApi } from "../utils/app"
import { useRef } from 'react'
import { Audio, Circles, RotatingLines } from 'react-loader-spinner'
import LoadMoreLoader from "../Components/LoadMoreLoader"


export default function Movies() {



  const data = useLoaderData()
  const previewRef = useRef()


  const [productData, setProductData] = useState([])
  const [genre, setGenre] = useState(data.genre)
  const [page, setPage] = useState(1);
  const [isLoading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState([]);

  const handleScroll = () => {

    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      return;
    }
    setPage((prev) => prev + 1);
  };




  async function loadMoreItems() {
    setLoading(true)
    const data = await fetchDataFromApi(`discover/movie?page=${page}&sort_by=${sortBy || "asc"}`)
    setProductData((prev) => [...prev, ...data.results]);
    setLoading(false)

  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

  useEffect(() => {
    loadMoreItems();
  }, [page])



  async function updateProducts(e) {
    setLoading(true)
    let id = e.target.value;
    const newData = await fetchDataFromApi(`discover/movie?with_genres=${id}&sory_by=popularity.asc`)
    setProductData(() => newData.results)
    setLoading(false)

  }

  async function sortHandler(e) {
    let id = e.target.value;
    const newData = await fetchDataFromApi(`discover/movie?page=${page}&sort_by=${id}`)
    setSortBy(id)
    setProductData(() => newData.results)
  }




  return (
    <div className='w-[80%] m-auto'>
      <SingleProductHeader heading="Movies" genre={genre} updateProducts={updateProducts} sortHandler={sortHandler} />
      <div ref={previewRef} style={{ overflowY: "scroll", position: 'relative', display: 'grid', gridTemplateColumns: "repeat(7,1fr)" }}>    {productData.map((item) => <Card key={item.id} item={item} media_type={"movie"} />)}


      </div>
      {isLoading ? <LoadMoreLoader /> : ""}
    </div>
  )
}
