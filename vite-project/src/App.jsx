import React, { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import data from './ContextApi'


const App = () => {

  const [userdata,setUserdata]=useState({})
  console.log(userdata)
  return (
    <div className='App'>
      <data.Provider value={{setUserdata,userdata}}>
        <Router>
          <Routes>
            <Route path='/' element={userdata && userdata._id ? <Home /> : <Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </Router>
      </data.Provider>
    </div>
  )
}

export default App