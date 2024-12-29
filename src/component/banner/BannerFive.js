import React from 'react';
import { Link } from 'react-router-dom';
import FormOne from '../contact/FormOne';
import FormTwo from '../contact/FormTwo';


const BannerFive = () => {
    return (
        <div className="banner banner-style-5" style={{backgroundImage:`url(${process.env.PUBLIC_URL + "/images/banner/background.jpg"})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-xl-7">
                        <div className="banner-content">
                            <h1 className="title">Welcome to NOVA Tech  Academy</h1>
                            {/* <div>
                                <Link to={process.env.PUBLIC_URL + "/project-grid-one"} className="axil-btn btn-fill-white btn-large">View Showcase</Link>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-5">
                        <div className="banner-form">
                            <div className="contact-form-box shadow-box">
                                <h3 className="title">Contact Us for More Information</h3>
                                <FormTwo />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerFive;