import React from 'react'
import SideBar from '../components/SideBar/SideBar'
import UsersTable from '../components/Users/UsersTable'
import { Outlet, Routes } from 'react-router-dom'
import ProductsTable from '../components/products/ProductsTable'
import { Route } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb'
function DashBoard() {

  return (
    <div className='dash-board flex'>
            <SideBar></SideBar>
            <div className='container grow bg-slate-900 p-4 pt-10 overflow-y-scroll h-screen'>
              <BreadCrumb/>
              <Outlet></Outlet>
            </div>
    </div>
  )
}

export default DashBoard