import React, {useState } from 'react'
import ErrMsg from './ErrMsg';
import { useDispatch, useSelector } from 'react-redux';
import {logInHandler} from "../../features/User/UserFeatures";
import Spinner from '../Spinner';
export default function SignInForm (){
  const loadingState=useSelector((state)=>state.user.loading);
  const dispatch=useDispatch();
  const initialFormData={
    email:"",
    password:""
  };
  const [err,setErr]=useState({
    email:false,
    password:false
  })
  const [formData,setFormData]=useState(initialFormData);
  const logInDataHandler=()=>{
    const {email,password}=formData;
    const emailPattern=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailPattern.test(email) && password.length<4){
      setErr({email:true,password:true});
    }else if(!emailPattern.test(email)){
      setErr({email:true,password:false});
    }else if(password.length<4){
      setErr({email:false,password:true});
    }else{
      logInHandler(formData);
      setErr({email:false,password:false});
    }
  };
  return (
    <div className='h-screen flex items-center	justify-center'>
    {
      loadingState?
        <Spinner/>
      :
      <form 
      onSubmit={(e)=>{
        // params should be passed as object to create actions
        e.preventDefault(logInDataHandler());
      }}
      className="sm:grow-0 grow w-2/6 p-5">
        <div className="mb-5">
          <label 
          for="email" 
          className="input-label">Your email</label>
          <input 
          onChange={(e)=>{
            setFormData({
              ...formData,
              email:e.target.value
            })
          }}
          type="text" 
          id="email" 
          className="input-field" 
          placeholder="name@gmail.com"/>
          {err.email?
            <ErrMsg msg={"Email format is not corrent!"}></ErrMsg>
            :
            <></>
          } 
        </div>
        <div className="mb-5">
          <label 
          for="password" 
          className="input-label"
          >Your password</label>
          <input 
              onChange={(e)=>{
                setFormData({
                  ...formData,
                  password:e.target.value
                })
              }}
          type="password" 
          id="password" 
          className="input-field"/>
          {err.password?
            <ErrMsg msg={"Password should be 4 or more chars!"}></ErrMsg>:
            <></>
          }
        </div>
        <button 
        type="submit" 
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
      </form>
 }
 </div>)   
}
