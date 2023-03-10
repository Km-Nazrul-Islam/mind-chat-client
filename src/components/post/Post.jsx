import { MoreVert } from "@mui/icons-material"
import { useState } from "react"
import { Users } from "../../dummyData"
import "./post.css"

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)
  const [isliked, setIsLiked] = useState(false)

  const likeHandler = () => {
    setLike(isliked ? like - 1 : like + 1)
    setIsLiked(!isliked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="topLeft">
            <img
              className="PostProfileImg"
              src={Users.filter(u => u.id === post.userId)[0].profilePicture}
              alt=""
            />
            <span className="postProfileName">
              {Users.filter(u => u.id === post.userId)[0].userName}
            </span>
            <span className="postProfileTime">{post.date}</span>
          </div>
          <div className="topRight">
            <MoreVert />
            <span>
              <button>X</button>
            </span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postCenterText">{post?.description}</span>
          <img className="postCenterImg" src={post.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="assets/like.png"
              onClick={likeHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="likeCounter">{like} people like</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
