import { useState } from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Upload from './Upload'
import VideoUpload from './VideoUpload'
import VideoView from './VideoView'


function App() {
  return (
    <div>
      <BrowserRouter>
         <Routes>
          <Route path='/register' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/upload' element={<Upload />} />
          <Route path='/videoupload' element={<VideoUpload />} />
          <Route path='/videoview' element={<VideoView />} />
         </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
