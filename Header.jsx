import React from 'react'





import {FaBars} from "react-icons/fa";
const header = () => {
  return (
    <div className='flex justify-between '>
    <div className='flex size- item-center justify-center gap-2 '>
          <img className='h-50' src="./assets/logo.png" alt=""/>
          <button className='bg-gradient-to-r from orange-400 to ring-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl'>We are Hiring...</button>
    </div>
    <div>
          <FaBars/>
    </div>
    </div>
  )
}

export default header
