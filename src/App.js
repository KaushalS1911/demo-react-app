import React from 'react'
import Registration from './pages/Registration'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'

const App = () => {
  return (
      <>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/register' element={<Registration />} />
        </Routes>

      </>
  )
}

export default App
