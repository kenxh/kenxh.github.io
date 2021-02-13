import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faInstagram,
    faGithubSquare,
    faTelegramPlane
  } from "@fortawesome/free-brands-svg-icons";

export default function SocialMedia() {
  return (
    <div class="social-container">
        <a href="https://www.instagram.com/kendall.xh/"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/kendall-howard-52aa64204/"
        className="linked in social">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" />
        </a>
        <a href="https://github.com/kenxh"
        className="github social">
        <FontAwesomeIcon icon={faGithubSquare} size="2x" />
        </a>
        <a href="mailto:kenxh@email.unc.edu"
        className="email social">
        <FontAwesomeIcon icon={faTelegramPlane} size="2x" />
        </a>
    </div>
  );
}