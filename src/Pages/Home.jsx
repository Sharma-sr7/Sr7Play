import React, { useState } from 'react'
import './Home.css'
import Sidebar from '../Components/Sidebar'
import Main from '../Components/Main'

const Home = ({sideNavBar, searchValue}) => {
  const [category,setCategory] = useState(0);
  return (
    <>
      <Sidebar sideNavBar={sideNavBar} category={category} setCategory={setCategory}/>
      <div className={`container ${sideNavBar?"":"large-container"}`}>
        <Main category={category} searchValue={searchValue} setCategory={setCategory}/>
      </div>
    </>
  )
}

export default Home
