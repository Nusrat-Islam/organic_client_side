import React from 'react'

export default function Logo() {
  return (
    <div className='flex justify-center items-center'>
        <img
         src="/organic logo.png" 
         alt="website logo"
         className='h-25 w-26'/>
        <p className='primary-font font-bold text-xl -ms-12  bg-gradient-to-r from-green-700 to-[#9ACD32] bg-clip-text text-transparent'>ORGANIC RIZQ</p>
    </div>
  )

}
