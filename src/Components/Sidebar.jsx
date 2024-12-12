import React from 'react'
import './Sidebar.css'
import home from '../assets/home.png'
import game_icon from '../assets/game_icon.png'
import automobiles from '../assets/automobiles.png'
import sports from '../assets/sports.png'
import entertainment from '../assets/entertainment.png'
import tech from '../assets/tech.png'
import music from '../assets/music.png'
import blogs from '../assets/blogs.png'
import news from '../assets/news.png'
import sharma from '../assets/sharma.jpg'
import csk from '../assets/csk.jpeg'
import star from '../assets/star.jpeg'
import icc from '../assets/icc.jpeg'
import disney from '../assets/disney.jpeg'

const Sidebar = ({sideNavBar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sideNavBar?"":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category ===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className={`side-link ${category === 20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="" />
          <p>Gaming</p>
        </div>
        <div className={`side-link ${category === 2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobiles} alt="" />
          <p>Automobiles</p>
        </div>
        <div className={`side-link ${category === 17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="" />
          <p>Sports</p>
        </div>
        <div className={`side-link ${category === 24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="" />
          <p>Entertainment</p>
        </div>
        <div className={`side-link ${category === 28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="" />
          <p>Tech</p>
        </div>
        <div className={`side-link ${category === 10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="" />
          <p>Music</p>
        </div>
        <div className={`side-link ${category === 22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="" />
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category === 25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
          <img src={sharma} alt="" />
          <p>Sharma sr7</p>
        </div>
        <div className="side-link">
          <img src={csk} alt="" />
          <p>Chennai Super Kings</p>
        </div>
        <div className="side-link">
          <img src={star} alt="" />
          <p>Star Sports</p>
        </div>
        <div className="side-link">
          <img src={icc} alt="" />
          <p>ICC</p>
        </div>
        <div className="side-link">
          <img src={disney} alt="" />
          <p>Disney+ Hotstar</p>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
