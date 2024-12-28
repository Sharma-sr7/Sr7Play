import React from 'react'
import './Notifications.css'

const Notifications = ({notification}) => {
  return (
    <div className={`notifications ${notification?"hide":""}`}>
        <h2>Notifications</h2>
        <hr />
        <p>You have no notifications</p>
      
    </div>
  )
}

export default Notifications
