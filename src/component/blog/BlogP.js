import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';
import BlogPList from './BlogPList';

// import React from 'react';
import { Link } from 'react-router-dom';
// import SectionTitle from '../components/SectionTitle';



const BlogP = () => { 
    return (
        <div className="section section-padding-equal">
            <div className="container">
                <SectionTitle 
                    subtitle="Upcoming Programs"
                    title="Software Developer - Fullstack JAVA"
                    description=""
                    textAlignment="text-center"
                    textColor=""
                />

<div className="program-description text-center">
                    <p>
                        Our Full Stack Software Development program includes comprehensive training in both back-end and front-end technologies. 
                        You will learn back-end development with JAVA and front-end development with React. The program covers essential languages 
                        and technologies such as Java, JavaScript, HTML, CSS, Node.js, and deployment using AWS.
                    </p>
                </div>
                <div className="program-details text-center">
                    <p><i className="far fa-clock"></i> Class Time: 9am to 5pm</p>
                    <p><i className="far fa-calendar-alt"></i> Class Days: Monday to Friday</p>
                    <p><i className="far fa-calendar-alt"></i> Application Closing Date: January 25</p>
                    <p><i className="far fa-calendar-alt"></i> Class Start Date: January 29</p>
                    <p><i className="far fa-map-marker-alt"></i> Mode of Learning: Onsite</p>
                    <Link to="/apply" className="btn btn-primary">Apply</Link>
                </div>
                <div className="row g-0">
                    {/* <BlogPList colSize="col-xl-6" itemShow="2" /> */}
                </div>
            </div>
            <ul className="shape-group-1 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-1.png"} alt="bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="bubble" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-2.png"} alt="bubble" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/bubble-2.png"} alt="bubble" /></li>
            </ul>
        </div>
    )
}

export default BlogP;
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   


















