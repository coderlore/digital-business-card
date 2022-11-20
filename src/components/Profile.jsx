import React from "react"
import profile from '../assets/profile.jpg'

export default function Profile() {
    return (
        <div>
            <img src={profile} className="profile"></img>
        </div>
    )
}