"use client"
import  React ,{useState,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import { add } from '@/Redux/Cartslice/page'
export default function Home() {
  const [products, setproducts] = useState([])
  const dispatch = useDispatch()
  const getproducts = async()=>{
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    setproducts(data)
  }
   
  const handleAdd=(product)=>{
     dispatch(add(product))
  }

  useEffect(()=>{
    getproducts()
  },[])

  
  return (

   <div className='productsWrapper grid grid-cols-4 gap-[30px] '>
    {
      products.map((product,i)=>(
        <div key={product.id} className='card bg-white p-[20px] text-center rounded-[10px] hover:bg-gray-300 hover:scale-[1.05] hover:transition-all hover:duration-200'>
          <img src={product.image} alt="img" className='h-[80px] align-middle mx-auto'/>
          <h4 className='p-[25px] font-bold'>{product.title}</h4>
          <h5 className='p-[25px] font-bold'>{product.price}</h5>
          <button className='btn border-none outline-none bg-[#764abc] px-[5px] py-[6px] text-white rounded-[5px] font-bold cursor-pointer  hover:bg-[#513282] ' onClick={()=>handleAdd(product)}>Add to Cart</button>
        </div>
      ))
    }
   </div>
  );
}
