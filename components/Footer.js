// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Make sure to create this CSS file if it's separate

const Footer = () => (
    <footer>
        <div className="container">
            <div className="footer-sections">
                <div className="footer-box">
                    <div className="footer-column">
                        <h3>Meet the Team</h3>
                        <ul>
                            <li>56- Varun Maddi</li>
                            <li>57- Anushka Mahajan</li>
                            <li>58- Rahul Mahto</li>
                            <li>59- Rohit Mandan</li>
                            <li>60- Aman Maurya</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-column">
                        <h3>Collaborate with Us</h3>
                        <p>If you are interested in collaborating, sharing recipes or contributing please <a href="#">contact us</a>.</p>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-column">
                        <h3>Contact Us</h3>
                        <p>Email: info@recipefinder.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                </div>
                <div className="footer-box">
                    <div className="footer-column">
                        <h3>Feedback</h3>
                        <p>We would love to hear your feedback and your opinions. Please <a href="FeedbackForm">click here</a> to share your thoughts.</p>
                    </div>
                </div>
            </div>
            <p>&copy; 2024 Recipe Finder. All rights reserved.</p>
        </div>
    </footer>
);

export default Footer;
