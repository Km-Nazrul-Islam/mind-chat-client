import React from "react"
import "./offline.css"

export default function Offline({ user }) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFrienfName">{user.userName}</span>
    </li>
  )
}
