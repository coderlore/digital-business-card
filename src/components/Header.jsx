import React from "react"

export default function Header() {
    return (
        <div className="header">
            <h1 className="name">Jane Smith</h1>
            <h3 className="title">Full-Stack Engineer</h3>
            <span className="website"><a href="#">jane.smith.website</a></span>
            <button>Email</button>
            <button>LinkedIn</button>
        </div>
    )
}