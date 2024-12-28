import React from 'react'
import './Profile.css'
import profile_icon from '../assets/sharma.jpg'
import google_icon from '../assets/google.png'
import switch_icon from '../assets/people.png'
import logout_icon from '../assets/logout.png'
import more_icon from '../assets/arrow.png'
import video_icon from '../assets/youtube.png'
import download_icon from '../assets/download.png'
import history_icon from '../assets/history.png'
import settings_icon from '../assets/setting.png'
import help_icon from '../assets/question.png'
import feedback_icon from '../assets/feedback.png'
import studio_icon from '../assets/video.png'
import purchase_icon from '../assets/coin.png'


const Profile = ({profile}) => {
  return (
    <div className={`profile ${profile?"hide":""}`}>
        <div className="user-details flex-div">
            <img src={profile_icon} alt="" />
            <div>
                <h4>Sharma sr7</h4>
                <p>@sharma sr7</p>
                <a href="">View your channel</a>
            </div>
        </div>
        <hr />
        <div className="account-details">
            <div className="account flex-div">
                <img src={google_icon} alt="" />
                <p>Google Account</p>
            </div>
            <div className="account flex-div">
                <img src={switch_icon} alt="" />
                <p>Switch account</p>
                <img src={more_icon} id='more-icon' alt="" />
            </div>
            <div className="account flex-div">
                <img src={logout_icon} alt="" />
                <p>Sign out</p>
            </div>
            <hr />
            <div className="account flex-div">
                <img src={video_icon} alt="" />
                <p>Your videos</p>
            </div>
            <div className="account flex-div">
                <img src={download_icon} alt="" />
                <p>Downloads</p>
            </div>
            <div className="account flex-div">
                <img src={history_icon} alt="" />
                <p>History</p>
            </div>
            <hr />
            <div className="account flex-div">
                <img src={settings_icon} alt="" />
                <p>Settings</p>
            </div>
            <hr />
            <div className="account flex-div">
                <img src={studio_icon} alt="" />
                <p>Sr7Play studio</p>
            </div>
            <div className="account flex-div">
                <img src={purchase_icon} alt="" />
                <p>Purchases and Memberships</p>
            </div>
            <hr />
            <div className="account flex-div">
                <img src={help_icon} alt="" />
                <p>Help</p>
            </div>
            <div className="account flex-div">
                <img src={feedback_icon} alt="" />
                <p>Feedback</p>
            </div>

        </div>
      
    </div>
  )
}

export default Profile
