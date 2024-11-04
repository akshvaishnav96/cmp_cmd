import React, { useState, useEffect, useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import Card from '../Components/Card';
import SingleProductHeader from '../Components/SingleProductHeader';
import { fetchDataFromApi } from '../utils/app';
import LoadMoreLoader from "../Components/LoadMoreLoader"

export default function Tv() {
  const data = useLoaderData();

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
    let id = e.target.value;
    const newData = await fetchDataFromApi(`discover/tv?movie?with_genres=${id}&sory_by=popularity.asc`)
    setProductData(() => newData.results)
  }


  async function sortHandler(e) {
    let id = e.target.value;
    const newData = await fetchDataFromApi(`discover/tv?page=${page}&sort_by=${id}`)
    setSortBy(id)
    setProductData(() => newData.results)
  }



  return (
    <div className='w-[80%] m-auto'>
      <SingleProductHeader heading="Tv Sows" genre={genre} updateProducts={updateProducts} sortHandler={sortHandler} />
      <div ref={previewRef} style={{ overflowY: "scroll", position: 'relative', display: 'grid', gridTemplateColumns: "repeat(7,1fr)" }}>    {productData.map((item) => <Card key={item.id} item={item} media_type={"tv"} />)}
      </div>
      {isLoading ? <LoadMoreLoader /> : ""}
    </div>
  )
}
