import React from 'react';
import { Link } from 'react-router-dom';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const AboutFour = () => {
    return (
            <div className="section section-padding case-study-featured-area">
                <div className="container">
                    <div className="row">
                    <div className="col-xl-7 col-lg-6">
                        <div className="case-study-featured-thumb text-start">
                        <img src={process.env.PUBLIC_URL + "/images/others/empower.jpg"} alt="travel" />
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6">
                        <div className="case-study-featured">
                        <div className="section-heading heading-left">
                            <span className="subtitle">What we do</span>
                            <h2 className="title">Empowering Future Tech Leaders</h2>
                            <p>At NOVA Tech Academy, we specialize in providing immersive, practical, and industry-focused training to individuals aspiring to launch their careers in technology.</p>
                            <p>Our primary mission is to bridge the gap between potential and success by equipping our students with the technical expertise, problem-solving skills, and hands-on experience needed to thrive in the ever-evolving tech world.</p>
                            <Link to="#" className="axil-btn btn-fill-primary btn-large">Read More</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AboutFour;