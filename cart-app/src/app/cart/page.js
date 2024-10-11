"use client"
import React from 'react'
import { remove } from '@/Redux/Cartslice/page'
import {useDispatch,useSelector } from 'react-redux'
const Cartpage = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state)=>state.cart)

  const handleRemove = (id)=>{
    dispatch(remove(id))
  }
  return (
    <div>
        <h3>Cart Page</h3>
        <div className='productsWrapper grid grid-cols-1 w-[100%] gap-[30px]'>
            {
                cartItems.map((item)=>(
                    <div className='flex items-center justify-between gap-[10px] bg-white mb-[20px] mx-auto p-[14px] rounded-[5px]   text-center  hover:bg-gray-300 hover:scale-[1.02] hover:transition-all hover:duration-300  w-[90%]'>
                        <img src={item.image} alt="img" className='h-[100px] mx-auto'/>
                        <h5 className='p-[25px] font-bold'>{item.title}</h5>
                        <h5 className='p-[25px] font-bold'>{item.price}</h5>
                        <button className='btn border-none outline-none bg-[#764abc] px-[5px] py-[6px] text-white rounded-[5px] font-bold cursor-pointer  hover:bg-[#513282] ' onClick={()=>handleRemove(item.id)}>Remove</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cartpage