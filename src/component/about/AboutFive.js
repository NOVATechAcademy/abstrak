import React from 'react';
import { Link } from 'react-router-dom';


const AboutFive = () => {
    return (
      <div className="section-padding-equal">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-7">
                    <div className="about-team">
                    <div className="thumbnail">
                        <img src={process.env.PUBLIC_URL + "/images/about/empower2.png"} alt="thumbnail" />
                    </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="about-team">
                    <div className="section-heading heading-left">
                        <span className="subtitle">Our Mission</span>
                        <h2>Empowering individuals to achieve greatness through innovation.</h2>  
                        <p>At NOVA Tech Academy, our mission is to empower individuals with the knowledge and skills needed to excel in the tech industry. We believe in the transformative power of education and are committed to providing high-quality, accessible, and affordable training to help you achieve your career goals.</p>
                        <Link to="#" className="axil-btn btn-large btn-fill-primary">Our Team</Link>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default AboutFive;