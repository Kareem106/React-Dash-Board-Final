import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='text-white h-screen w-full flex items-center justify-center flex-col gap-4'>
        <h1 className='text-4xl'>Not Found</h1>
        <Link to={"/"} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'>Go Back</Link>
    </div>
  )
}

export default NotFound