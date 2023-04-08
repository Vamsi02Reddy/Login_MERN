import React, { useState } from 'react'
import axios from "axios"
import img from '../images/login-animation.gif'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const [user,setUser]=useState({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:""
  })

  const navigate=useNavigate()

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setUser((prev)=>{
        return{
            ...prev,
            [name]:value
        }
    })
}

  const handleSubmit=async(e)=>{
    e.preventDefault()
    console.log(user)
    const{firstname,lastname,email,password,confirmpassword}=user
    if(firstname && lastname && email && password && confirmpassword){
      if(password===confirmpassword){
        await axios.post("http://localhost:3030/register",user)
        .then(res=>console.log(res))     //res.data.message
      }
      else{
        alert("Please verify the Credentials or look at your password")
      }
    }
    else{
      alert("please  enter the details")
    }
    
  }
  

  return (
    <div className='p-3 md:p-4'>
      <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
        {/* <h1 className='text-center'>Sign-up</h1> */}
        <div className='w-20 overflow-hidden m-auto rounded-full shadow-md drop-shadow-md'>
          <img src={img} alt="img" className='w-full' />
        </div>
        <form className='p-3 w-full'>
          <label htmlFor="firstname">Firstname</label> <br />
          <input type="text" placeholder='firstname' name='firstname' id='firstname' value={user.firstname} onChange={handleChange} className='border-solid border w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus:outline-blue-300' />
          
          <label htmlFor="lastname">Lastname</label> <br />
          <input type="text" placeholder='lastname' name='lastname' id='lastname' value={user.lastname} onChange={handleChange} className='border-solid border w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus:outline-blue-300' />

          <label htmlFor="email">Email</label> <br />
          <input type="text" placeholder='email' name='email' id='email'value={user.email} onChange={handleChange} className='border-solid border w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus:outline-blue-300' />
          
          <label htmlFor="password">Password</label> <br />
          <div className='flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus:outline-blue-300 mt-1 mb-2'>
            <input type="password" placeholder='password' name='password' id='password' value={user.password} onChange={handleChange} className='rounded bg-slate-200 px-1 w-full border-none outline-none' />
          </div>

          <label htmlFor="confirmpassword">Confirm-Password</label> <br />
          <div className='flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus:outline-blue-300 mt-1 mb-2'>
            <input type="password" placeholder='confirmpassword' name='confirmpassword' id='confirmpassword' onChange={handleChange} value={user.confirmpassword} className='rounded bg-slate-200 px-1 w-full border-none outline-none' />
          </div>

          <div className='flex flex-row'>
          <button type='submit' onClick={()=>{navigate("/login")}} className=' mt-4 max-w-[120px] m-auto flex justify-center w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl rounded-full py-1 text-center font-medium'>Login</button>
          <button type='submit' onClick={handleSubmit} className=' mt-4 max-w-[120px] m-auto flex justify-center w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl rounded-full py-1 text-center font-medium'>Register</button>
          </div>
        </form>
        <p className='text-sm btn'>  <b>Existing User?</b> </p>
      </div>
    </div>
  )
}

export default Register