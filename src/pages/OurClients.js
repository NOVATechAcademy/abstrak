import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import SEO from '../common/SEO';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import BrandItem from '../component/brand/BrandItem';
import HeaderFour from '../common/header/HeaderFour';
import BreadCrumbOne from '../elements/breadcrumb/BreadCrumbOne';

const OurClients = () => {

    return (
        <>
        <SEO title="Our partners" />
        <ColorSwitcher />
            <main className="main-wrapper">
                <HeaderFour />
                <BreadCrumbOne
                title="Our Partners"
                 page="Our Partners"
                />
                <BcrumbBannerOne 
                title="Our Collaborators"
                paragraph ="At NOVA Tech Academy, We work closely with our partners in order to deliver the best results"
                styleClass="thumbnail-2"
                mainThumb="/images/banner/partner3.jpg"
                />
                <div className="section brand-wrap-area bg-color-dark">
                    <div className="container">
                        <div className='row'>
                        <BrandItem />
                        </div>
                    </div>
                </div>
                <CtaLayoutOne />
                <FooterOne parentClass="" />
            </main>
        </>
    )
}

export default OurClients;