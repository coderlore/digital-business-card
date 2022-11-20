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
                <li className="footer-icons"><FontAwesomeIcon icon={faSquareTwitter} /></li>
                <li className="footer-icons"><FontAwesomeIcon icon={faSquareFacebook} /></li>
                <li className="footer-icons"><FontAwesomeIcon icon={faSquareInstagram} /></li>
                <li className="footer-icons"><FontAwesomeIcon icon={faSquareGithub} /></li>
            </ul>
        </div>
    )
}