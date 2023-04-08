import React, { useContext, useState } from 'react'
import axios from 'axios'
import img from '../images/login-animation.gif'
import data from '../ContextApi'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const { setUserdata } = useContext(data);

    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    // console.log(user)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = axios.post("http://localhost:3030/login", user)
            .then(res => {
                alert(res.data.message)
                setUserdata(res.data.user)
            })
    }

    return (
        <div className='p-3 md:p-4'>
            <div className="w-full max-w-sm bg-white m-auto flex flex-col p-4">
                {/* <h1 className='text-center'>Sign-up</h1> */}
                <div className='w-20 overflow-hidden m-auto rounded-full shadow-md drop-shadow-md'>
                    <img src={img} alt="img" className='w-full' />
                </div>
                <form className='p-3 w-full'>
                    <label htmlFor="email">Email</label> <br />
                    <input type="text" placeholder='email' name='email' id='email' value={user.email} onChange={handleChange} className='border-solid border w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 focus:outline-blue-300' />
                    <label htmlFor="password">Password</label> <br />
                    <div className='flex px-2 py-1 bg-slate-200 rounded focus-within:outline focus:outline-blue-300 mt-1 mb-2'>
                        <input type="password" placeholder='password' name='password' id='password' value={user.password} onChange={handleChange} className='rounded bg-slate-200 px-1 w-full border-none outline-none' />
                    </div>
                    <div className='flex flex-row'>
                        <button type='submit' onClick={()=>{navigate("/register")}} className=' mt-4 max-w-[120px] m-auto flex justify-center w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl rounded-full py-1 text-center font-medium '>Register</button>
                        <button type='submit' onClick={handleSubmit} className=' mt-4 max-w-[120px] m-auto flex justify-center w-full bg-red-400 hover:bg-red-500 cursor-pointer text-white text-xl rounded-full py-1 text-center font-medium '>Login</button>
                    </div>
                </form>
                <p className='text-sm btn' ><b>Don't have an acct?</b> </p>
            </div>
        </div>
    )
}

export default Login