import React from "react"
import "./register.css"

export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">Mindchatapp</h4>
          <span className="loginDetails">
            "Connect minds, share thoughts, empower conversations By Mind Chat."
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input placeholder="User Name" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Re Type Password" className="loginInput" />
            <button className="loginButton">Sign Up</button>
            <button className="loginRegisterButton">Login Your Account</button>
          </div>
        </div>
      </div>
    </div>
  )
}
