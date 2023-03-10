import React from "react"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"
import "./profile.css"

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/post4.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/profile4.png"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sayontika Anr</h4>
              <span className="profileInfoDetails">Welcome My World</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  )
}
