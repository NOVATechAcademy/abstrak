import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';

const PrivacyPolicy = () => {
    return (
        <>
            <SEO title="Privacy Policy" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderOne />
                <BreadCrumbOne 
                    title="Privacy Policy"
                    page="Privacy Policy"
                />
                <div className="section-padding privacy-policy-area">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-10">
                                <div className="privacy-policy-content">
                                    <h1>Privacy Policy</h1>
                                    <p>Welcome to NOVA Tech Academy, operated under NOVA Leading Tech Solution LLC. This privacy policy explains how we use any personal information we collect about you when you use this website.</p>
                                    
                                    <h2>1. What Information Do We Collect About You?</h2>
                                    <p>We collect information about you when you apply for registration at our academy. This information is used solely for the purpose of processing your application and managing your registration.</p>
                                    
                                    <h2>2. How Will We Use the Information About You?</h2>
                                    <p>We collect information about you to process your application and manage your registration at NOVA Tech Academy. We do not use your information for any other purposes.</p>
                                    
                                    <h2>3. Access to Your Information and Correction</h2>
                                    <p>You have the right to request a copy of the information that we hold about you. If you would like a copy of some or all of your personal information, please email us at the following address: [Your Email Address]. We may make a small charge for this service. We want to make sure that your personal information is accurate and up to date. You may ask us to correct or remove information you think is inaccurate.</p>
                                    
                                    <h2>4. Cookies</h2>
                                    <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behavior information. This information is used to track visitor use of the website and to compile statistical reports on website activity. For further information, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">www.allaboutcookies.org</a>. You can set your browser not to accept cookies and the above websites tell you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>
                                    
                                    <h2>5. Other Websites</h2>
                                    <p>Our website contains links to other websites. This privacy policy only applies to this website so when you link to other websites you should read their own privacy policies.</p>
                                    
                                    <h2>6. Changes to Our Privacy Policy</h2>
                                    <p>We keep our privacy policy under regular review and we will place any updates on this web page. This privacy policy was last updated on [December, 2024].</p>
                                    
                                    <h2>7. How to Contact Us</h2>
                                    <p>Please contact us if you have any questions about our privacy policy or information we hold about you:</p>
                                    <ul>
                                        <li>By email: [ino@novaleadingtech.com]</li>
                                        <li>Or write to us at: [Your Address]</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne />
            </main>
        </>
    );
}

export default PrivacyPolicy;