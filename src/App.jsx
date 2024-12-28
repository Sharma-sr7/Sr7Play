import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Profile from './Components/Profile'

const App = () => {
  const [sideNavBar,setSideNavBar] = useState(true);
  const [profile,setProfile] = useState(true);
  return (
    <div>
      <Navbar setSideNavBar={setSideNavBar} setProfile={setProfile}/>
      <Profile profile={profile}/>
      <Routes>
        <Route path='/' element={<Home sideNavBar={sideNavBar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
