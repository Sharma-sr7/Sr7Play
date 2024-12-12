import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'

const App = () => {
  const [sideNavBar,setSideNavBar] = useState(true);
  return (
    <div>
      <Navbar setSideNavBar={setSideNavBar}/>
      <Routes>
        <Route path='/' element={<Home sideNavBar={sideNavBar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
