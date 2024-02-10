import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProgressBar from '../components/ProgressBar';
import { Link } from 'react-router-dom';
function Home() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            if(res.status===200){
                setProducts(res.data.products.sort((a,b)=>b.rating-a.rating).slice(0,10));
            }
        })
    },[])
  return (
    <div className='home'>
        <div className='w-full border-none bg-slate-800 rounded-md p-4'>
            <h1 className='text-slate-300 text-2xl mb-4'><svg className="w-6 h-6 text-yellow-300 me-1 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>Top Rated Products</h1>
            {
                products?.map((item)=>{
                    return(
                        <div key={item?.id} className='my-4'>
                            <Link to={`/dashboard/products/${item?.id}`}>
                            <h3 className='text-white mb-2'>{item?.title} 
                            <span className='text-slate-500'> . <svg className="w-4 h-4 text-yellow-300 me-1 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                {
                                    item?.rating
                                }</span></h3>
                            </Link>
                        <ProgressBar rate={item?.rating}/>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Home