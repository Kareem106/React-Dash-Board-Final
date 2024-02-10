import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
function UsersTable() {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((res)=>{
            if(res.status==200){
                setUsers(res.data.users);
            }
        }).catch((err)=>console.error(err))
    },[]);
  return (
<div className="relative overflow-x-auto shadow-md rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Gender
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Address
                </th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                return(
                    <tr key={user?.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {user?.firstName+" "+user?.lastName}
                    </th>
                    <td className="px-6 py-4">
                        {user?.gender}
                    </td>
                    <td className="px-6 py-4">
                        {user?.email}
                    </td>
                    <td className="px-6 py-4">
                        {user?.address.address}
                    </td>
                </tr>
                )
            })}
        </tbody>
    </table>
</div>
  )
}

export default UsersTable