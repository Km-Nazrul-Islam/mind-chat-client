import { Users } from "../../dummyData"
import Online from "../online/Online"
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
      </div>
    </>
  )
}

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <ProfileRightbar />
      </div>
    </div>
  )
}
