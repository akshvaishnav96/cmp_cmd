import { useLoaderData } from 'react-router-dom'
import ProductPreview from '../components/ProductPreview';
import ResizableSlider from '../components/ResizableSlider';


export default function Home() {
  const data = useLoaderData();
  return (
   <div className='bg-gray-100'>
 <ResizableSlider item={data}/>
    <div className='flex flex-wrap gap-4 justify-center  my-5'>
      {data.map((item)=> <ProductPreview key={item.id} item={item}/>)}
    </div>
   </div>
  )
}