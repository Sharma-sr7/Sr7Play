import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Video from './Pages/Video'
import Profile from './Components/Profile'
import Notifications from './Components/Notifications'
import Sign from './Components/Sign'
import SignUp from './Components/SignUp'

const App = () => {
  const [sideNavBar,setSideNavBar] = useState(true);
  const [profile,setProfile] = useState(true);
  const [notification,setNotificatons] = useState(true)
  return (
    <div>
      <Navbar setSideNavBar={setSideNavBar} setProfile={setProfile} setNotifications={setNotificatons}/>
      <Profile profile={profile}/>
      <Notifications notification={notification} />
      <Routes>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Sign/>}/>
        <Route path='/' element={<Home sideNavBar={sideNavBar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>} />
      </Routes>
    </div>
  )
}

export default App
