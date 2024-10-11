'use client'
import React from 'react'
import Link from 'next/link'
import {useSelector} from 'react-redux'

const Navbar = () => {

  const item = useSelector((state)=>state.cart)
  return (
    <div className='flex text-center items-center justify-between gap-3'>
      <span>Redux NextJs</span>
      <div>
        <Link className='font-bold mx-3 hover:cursor-pointer' href={'/'}>Home</Link>
        <Link className='font-bold mr-[7px] hover:cursor-pointer' href={'/cart'}>Cart</Link>
        <span className='font-bold '>items:{item.length}</span>
      </div>
    </div>
  )
}

export default Navbar