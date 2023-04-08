import React, { useContext } from 'react'
import data from '../ContextApi'

const Home = () => {
  const {userdata,setUserdata} =useContext(data)
  // console.log(userdata)
  const logout=()=>{
    setUserdata({})
  }
  return (
    <div className='w-full max-w-sm bg-white m-auto flex flex-col p-2 mt-10px md:p-4'>

      <h1 className='text-center text-slate-700'>Hi,<b>{userdata.firstname}</b> this is a Home Page </h1>

      <button type='submit' onClick={logout} className=' mt-4 max-w-[120px] m-auto flex justify-center w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl rounded-full py-1 text-center font-medium '>Logout</button>
    </div>
  )
}

export default Home