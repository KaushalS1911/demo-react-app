import React from 'react'
import Registration from './pages/Registration'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Login from "./pages/Login";
import Users from "./pages/Users";

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={<Users />} />
        </Routes>

      </>
  )
}

export default App
