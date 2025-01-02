import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import ProcessOne from '../component/process/ProcessOne';
import AboutThree from '../component/about/AboutThree';
import AboutFour from '../component/about/AboutFour';
import AboutFive from '../component/about/AboutFive';
import HeaderFour from '../common/header/HeaderFour';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

const AboutUs = () => {
    return (
        <>
            <SEO title="Corporate Agency" />
            <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderFour />
                <BreadCrumbOne
                 title="Who We Are"
                 page="Who We Are"
                />
                <BcrumbBannerOne 
                    title="One of the fastest growing Academy"
                    paragraph="Welcome to NOVA Tech Academy, your gateway to a brighter future in the tech industry.
                    </p>"
                    styleClass="thumbnail-4"
                    mainThumb="/images/banner/Growth.jpg"
                />
                <AboutFour />
                <AboutThree />
                <AboutFive />
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    );
}

export default AboutUs;