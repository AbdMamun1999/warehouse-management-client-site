import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './Footer.css'


const Footer = () => {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div>
                    <h6 className='footer-header'>You can find us at</h6>
                    <ul className='footer-social-icon'>
                        <li>
                            <Link to="">
                                <FaFacebookSquare></FaFacebookSquare>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FaLinkedin></FaLinkedin>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FaTwitterSquare></FaTwitterSquare>
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <FaYoutube></FaYoutube>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='footer-help-list'>
                    <div>
                        <ul>
                            <li className='mb-3'><h5>Product</h5></li>
                            <li><p>Fresh Fruits</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-3'><h5>Company</h5></li>
                            <li><p>About</p></li>
                            <li><p>Careers</p></li>
                            <li><p>Support</p></li>
                            <li><p>Pricing</p></li>
                            <li><p>FAQ</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-3'><h5>Resources</h5></li>
                            <li><p>Blogs</p></li>
                            <li><p>eBook</p></li>
                            <li><p>white pagers</p></li>
                            <li><p>Comparison Guide</p></li>
                            <li><p>Website Grader</p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='mb-3'><h5>Get Help</h5></li>
                            <li><p>Help Center</p></li>
                            <li><p>Contact Us</p></li>
                            <li><p>Privacy Policy</p></li>
                            <li><p>Terms</p></li>
                            <li><p>Login</p></li>
                        </ul>
                    </div>
                </div>
                <div className='copyright-div'>
                    <p>
                        <small>
                            copyright &copy;{currentYear} | It is free for use
                        </small>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;