import { Users } from "../../dummyData"
import Online from "../online/Online"
import Profile from "./../../pages/profile/Profile"
import "./rightbar.css"

const HomeRightbar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText">
          <strong>Bilkis Baniya</strong> and <strong>3 others friends</strong>{" "}
          have birthday today
        </span>
      </div>
      <img className="rightbarAdd" src="assets/add.jpg" alt="" />
      <h4 className="onlineFriendsTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        {Users.map(u => (
          <Online user={u} key={u.id}></Online>
        ))}
      </ul>
    </>
  )
}

const ProfileRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">
        <div className="rightInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Rajshahi</span>
        </div>
        <div className="rightInfoItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInfoValue">Rajshahi</span>
        </div>
        <div className="rightInfoItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInfoValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile2.jpg"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile1.jpg"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile3.png"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile4.png"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile5.png"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile6.png"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>

        <div className="rightbarFollowing">
          <img
            className="rightbarFollowingImg"
            src="assets/person/profile7.jpg"
            alt=""
          />
          <span className="rightbarFollowingName">Rahul Khannah</span>
        </div>
      </div>
    </>
  )
}

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {Profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  )
}
