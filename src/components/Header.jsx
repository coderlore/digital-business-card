import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <div className="header">
            <h1 className="name">Jane Smith</h1>
            <h3 className="title">Full-Stack Engineer</h3>
            <span className="website"><a href="#">jane.smith.website</a></span>
            <div className="btns">
                <button id="email" className="col"><FontAwesomeIcon icon={faEnvelope} /> Email</button>
                <button id="linkedin" className="col"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button>
            </div>
        </div>
    )
}