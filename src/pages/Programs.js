import React from 'react';
import SEO from '../common/SEO';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import FooterOne from '../common/footer/FooterOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import HeaderFour from '../common/header/HeaderFour';
import BlogP from '../component/blog/BlogP';





const Programs = () => {
    return (
        <>
            <SEO title="Programs" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderFour />
                <BreadCrumbOne 
                    title="Programs"
                    page="Programs"
                />
                <div className="section section-padding bg-color-light">
                    <div className="container">
                        <h1 className="programs-title">Full Stack Java Developer Bootcamp</h1>
                        <p className="programs-description">
                            Are you ready to launch your career as a software engineer or full-stack developer? Join our 
                            <strong> 12-week Full Stack Java Developer Bootcamp</strong>. This immersive training program is designed
                            to equip you with the in-demand skills you need to succeed in the tech industry. Our curriculum covers:
                        </p>
                        <ul className="programs-list">
                            <li>Core Java Programming and Object-Oriented Design</li>
                            <li>Front-end Development with HTML, CSS, and JavaScript</li>
                            <li>Modern Frameworks: React.js for UI and Spring Boot for backend</li>
                            <li>Database Management: SQL, MySQL, and MongoDB</li>
                            <li>Hands-on projects and live coding sessions</li>
                            <li>Career services to help you secure your dream job</li>
                        </ul>
                        <p className="programs-description">
                            After completing the bootcamp, our dedicated career services team will assist you in landing a job as a 
                            software engineer or full-stack developer. With industry-relevant projects, practical experience, and 
                            interview preparation, you’ll be ready to excel in the competitive tech world.
                        </p>
                    </div>
                </div>

                <div className="section section-padding bg-color-white overflow-hidden">
                    <div className="container">
                    <BlogP/>
                    </div>
                    <ul className="shape-group-11 list-unstyled">
                        <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-6.png"} alt="line" /></li>
                        <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/circle-3.png"} alt="line" /></li>
                    </ul>
                </div>

                <FooterOne parentClass="pt--150 pt_lg--100 pt_md--80 pt_sm--60" />
            </main>
        </>
    )
}

export default Programs;
     
     
     
     
     
     

     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     
     



     
     

     
     
     
     
     
     
     
     
     
     
    
     
     
    
     

     
     
     
