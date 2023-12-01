import { useState } from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'

function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
