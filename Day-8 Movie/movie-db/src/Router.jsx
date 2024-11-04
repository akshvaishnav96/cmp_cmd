import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home"
import PageLayout from "./Outlets/PageLayout"
import Movies from "./Pages/Movies"
import Tv from "./Pages/Tv"
import SingleMovie from "./Pages/SingleMovie"
import MoviesOutlet from "./Outlets/MoviesOutlet"
import TvOutlet from "./Outlets/TvOutlet"
import SingleTv from "./Pages/SingleTv"
import NotFound from "./Pages/Not-found"
import {fetchDataFromApi} from "./utils/app" 
import SearchPage from "./Pages/SearchPage"
const Token = import.meta.env.VITE_API_KEY



async function getProductData(){
    const dataByDay =  await  fetchDataFromApi("trending/all/day")
    const dataByWeek =  await  fetchDataFromApi("trending/all/week")
    const dataByPopularityMovie =  await  fetchDataFromApi("movie/popular")
    const dataByPopularityTv =  await  fetchDataFromApi("tv/popular")
    const dataByRatingMovie =  await  fetchDataFromApi("movie/top_rated")
    const dataByRatingTv =  await  fetchDataFromApi("tv/top_rated")
 
    return {dataByDay,dataByWeek,dataByPopularityMovie,dataByPopularityTv,dataByRatingTv,dataByRatingMovie}
}
async function getMovies() {
   
  const data =  await  fetchDataFromApi("movie/popular")
  
  const genre = await fetchDataFromApi(`genre/movie/list`)
  console.log(data);
  
    return {data,genre}
    
 }
async function getSingleMovie(event) {
    const {id}= event.params
    const data = await fetchDataFromApi(`movie/${id}`)
    const data2 = await fetchDataFromApi(`movie/${id}/similar`)
    const video = await fetchDataFromApi(`movie/${id}/videos`)
    const credits = await fetchDataFromApi(`movie/${id}/credits`)
  





    return {item:data,videoUrl:video,item2:data2,credits}
 }

async function getTv() {
    const data =  await  fetchDataFromApi("tv/popular")
    const genre = await fetchDataFromApi(`genre/tv/list`)
    return {data,genre}
}

async function getSingleTv(event) {
   
    const {id}= event.params
    const data = await fetchDataFromApi(`tv/${id}`)
    const video = await fetchDataFromApi(`tv/${id}/videos`)

    return {item:data,videoUrl:video}
 }

 async function getSerchItems(event){
let text = event.params.searchtext;
const data = await fetchDataFromApi(`search/movie?query=${text}`)
return data

 }

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <PageLayout />,
            children: [
                {
                    path: "",
                    element: <Home />,
                    loader:getProductData
                },
                {
                    path: "/movie",
                    element: <MoviesOutlet />,
                    children: [
                        {
                            path: ":id",
                            element: <SingleMovie />,
                            loader: (id) => getSingleMovie(id),
                        },
                        {
                            index: true,
                            element: <Movies />,
                            loader: getMovies
                        }
                    ]
                },
                {
                    path: "/tv",
                    element: <TvOutlet />,
                    children: [
                        {
                            path: ":id",
                            element: <SingleTv />,
                            loader: (id) => getSingleTv(id),
                        },
                        {
                            index: true,
                            element: <Tv />,
                            loader: getTv
                        }
                    ]
                },
                {
                    path:"/search/:searchtext",
                    element:<SearchPage />,
                    loader:(text)=>getSerchItems(text)
                },
                {
                    path: "*",
                    element: <NotFound />
                }]
        }



    ])
