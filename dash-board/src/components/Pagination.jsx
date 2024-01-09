import React, { useLayoutEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Pagination({count}) {
    const [total,setTotal]=useState(0);
    useLayoutEffect(()=>{
        setTotal(Math.ceil(count/10));
    },[total])
  return (
    <nav className='my-5 text-center' aria-label="Page navigation example">
  <ul className="inline-flex -space-x-px text-base h-10">
    <li>
      <Link href="#" className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
    </li>
    <Pages total={total}></Pages>
    <li>
      <Link href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
    </li>
  </ul>
</nav>
  )
}
function Pages(total){
    let arr=[];

        arr.push(
            <li>
            <Link href="#" className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">total</Link>
          </li>
        )

    return(
        arr
    )
}
export default Pagination