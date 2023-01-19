import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Beviryon</h1>

            <ul className="footer_list">
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#portfolio" className="footer_link">Projets</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Compétences</a>
                </li>
            </ul>

            <div className="footer_social">
                <a href="https//www.facebook.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-facebook"></i>
                </a>

                <a href="ttps//www.instagram.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>

                <a href="ttps//www.twitter.com/" className="footer_social-link" target="_blank">
                    <i class="bx bxl-twitter"></i>
                </a>
            </div>

            <span className="footer_copy">&#169; Beviryon ISSANGA NGOULOU</span>
        </div>
    </footer>
  )
}

export default Footer