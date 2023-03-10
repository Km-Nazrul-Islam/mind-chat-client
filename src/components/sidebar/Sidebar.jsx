import {
  AddBusiness,
  Bookmark,
  Event,
  Group,
  MarkUnreadChatAlt,
  OndemandVideo,
  QuestionAnswer,
  RssFeed,
  WorkOutline,
} from "@mui/icons-material"
import { Users } from "../../dummyData"
import Offline from "../offline/Offline"
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">News Feed</span>
          </li>
          <li className="sidebarListItem">
            <MarkUnreadChatAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <OndemandVideo className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <span className="sidebarListItemText">Group</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <QuestionAnswer className="sidebarIcon" />
            <span className="sidebarListItemText">Question Answer</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <AddBusiness className="sidebarIcon" />
            <span className="sidebarListItemText">Add Business</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map(u => (
            <Offline user={u} key={u.id}></Offline>
          ))}
        </ul>
      </div>
    </div>
  )
}
