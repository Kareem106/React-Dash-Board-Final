import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
function ProductsTable() {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then(res=>{
            if(res.status===200){
                setProducts(res.data.products);
            }
        }).catch(err=>console.log(err));
    },[])
  return (
    

<div className="relative overflow-x-auto rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Product name
                </th>
                <th scope="col" className="px-6 py-3">
                    Brand
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Stock
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    rating
                </th>
            </tr>
        </thead>
        <tbody>
            {
                products?.map(item=>{
                    return(
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <Link to={`/dashboard/products/${item.id}`}>
                                    {
                                    item?.title
                                    }
                                    </Link>
                            </th>
                            <td className="px-6 py-4">
                                {
                                    item?.brand
                                }
                            </td>
                            <td className="px-6 py-4">
                                {
                                    item?.category
                                }
                            </td>
                            <td className="px-6 py-4">
                                {
                                    item?.stock
                                }
                            </td>
                            <td className="px-6 py-4">
                                $
                                {
                                    item?.price
                                }
                            </td>
                            <td className="px-6 py-4">
                                <svg className="w-4 h-4 text-yellow-300 me-1 inline" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                {
                                    item?.rating
                                }
                            </td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
</div>

  )
}

export default ProductsTable