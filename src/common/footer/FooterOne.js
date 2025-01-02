import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaPinterestP, FaLinkedin, FaInstagram, FaVimeoV, FaDribbble, FaBehance, FaEnvelopeOpen, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServiceData from "../../data/service/ServiceMain.json";
import { slugify } from '../../utils';

const getServiceData = ServiceData;

const FooterOne = ({parentClass}) => {
    
    return (
        <footer className={`footer-area ${parentClass}`}>
            <div className="container">
                <div className="footer-top">
                    <div className="footer-social-link">
                        <ul className="list-unstyled">
                            <li><Link to="https://facebook.com/"><FaFacebookF /></Link></li>
                            <li><Link to="https://twitter.com/"><FaXTwitter /></Link></li>
                            <li><Link to="https://www.pinterest.com/"><FaPinterestP /></Link></li>
                            <li><Link to="https://www.linkedin.com/"><FaLinkedin /></Link></li>
                            <li><Link to="https://www.instagram.com/"><FaInstagram /></Link></li>
                            <li><Link to="https://vimeo.com/"><FaVimeoV /></Link></li>
                            <li><Link to="https://dribbble.com/"><FaDribbble /></Link></li>
                            <li><Link to="https://www.behance.net/"><FaBehance /></Link></li>
                            <li><Link to="https://www.tiktok.com/en/"><FaTiktok /></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-main">
                    <div className="row">
                        <div className="col-xl-6 col-lg-5">
                            <div className="footer-widget border-end">
                                <div className="footer-newsletter">
                                    <h2 className="title">Get in touch!</h2>
                                    <p>Contact us for more information about our programs, admissions process, and how we can help you achieve your career goals in the tech industry.</p>
                                    
                                        <div className="input-group">
                                            <Link to={process.env.PUBLIC_URL + "/contact"} className="subscribe-btn">Contact Us</Link>
                                        </div>
    
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Explore Our Courses</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                    <li> <Link to={"/programs"}>Upcoming Programs</Link> </li>
                                                    <li> <Link to={"/faq"}>Frequently Asked Questions</Link> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">About Us</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/who-we-are"}>Who We Are</Link></li>
                                                <li> <Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Partners</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="footer-widget">
                                        <h6 className="widget-title">Support</h6>
                                        <div className="footer-menu-link">
                                            <ul className="list-unstyled">
                                                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link></li>
                                                <li>
                                                 <a href="https://www.google.com/maps/dir/?api=1&destination=2570+Eastbourne+Dr,+Woodbridge,+VA+22191" target="_blank" rel="noopener noreferrer">
                                                         Get Directions
                                                 </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom"> 
                    <div className="row">
                        <div className="col-md-6">
                            <div className="footer-copyright">
                                <span className="copyright-text">© {new Date().getFullYear()}. All rights reserved by <a href="https://axilthemes.com/">NOVA Leading Tech Solution LLC</a>.</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="footer-bottom-link">
                                <ul className="list-unstyled">
                                    <li><Link to={process.env.PUBLIC_URL + "/privacy-policy"}>Privacy Policy</Link></li>
                                    <li><Link to={process.env.PUBLIC_URL + "/terms-use"}>Terms of Use</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterOne;