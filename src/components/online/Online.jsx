import React from "react"
import "./online.css"

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImageContainer">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.userName}</span>
    </li>
  )
}
