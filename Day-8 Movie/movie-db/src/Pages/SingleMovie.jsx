import { useLoaderData } from 'react-router-dom'
import SingleProduct from '../Components/SingleProduct';



export default function SingleMovie() {

  const data = useLoaderData()



  return (

    <SingleProduct data={data} />
  )
}
