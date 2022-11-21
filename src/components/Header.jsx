import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Header() {
    return (
        <div className="header">
            <h1 className="name">Laurie Hozaki</h1>
            <h3 className="title">Full-Stack Engineer</h3>
            <span className="website"><a href="https://laurie-hozaki.netlify.app/">Link to portfolio</a></span>
            <div className="btns">
                <a href="mailto:coderlore@gmail.com"><button id="email" className="col"><FontAwesomeIcon icon={faEnvelope} /> Email</button></a>
                <a href="https://www.linkedin.com/in/laurie-hozaki/"><button id="linkedin" className="col"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</button></a>
            </div>
        </div>
    )
}