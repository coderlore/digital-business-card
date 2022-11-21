import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
    return (
        <div className="footer">
            <ul>
                <a href="https://twitter.com/coderlore"><li className="footer-icons"><FontAwesomeIcon icon={faSquareTwitter} /></li></a>
                <a href="#"><li className="footer-icons"><FontAwesomeIcon icon={faSquareFacebook} /></li></a>
                <a href="#"><li className="footer-icons"><FontAwesomeIcon icon={faSquareInstagram} /></li></a>
                <a href="https://github.com/coderlore"><li className="footer-icons"><FontAwesomeIcon icon={faSquareGithub} /></li></a>
            </ul>
        </div>
    )
}