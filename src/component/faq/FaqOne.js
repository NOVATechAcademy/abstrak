import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SectionTitle from '../../elements/section-title/SectionTitle';
import FaqData from '../../data/faq/FaqData.json';
import SEO from '../../common/SEO';
import ColorSwitcher from '../../elements/switcher/ColorSwitcher';
import HeaderFour from '../../common/header/HeaderFour';
import BreadCrumbOne from '../../elements/breadcrumb/BreadCrumbOne';

const allData = FaqData;


const FaqOne = () => {
    return (
        <>
         <SEO title="Corporate Agency" />
         <ColorSwitcher />
         <main className="main-wrapper">
            <HeaderFour />
            <BreadCrumbOne
            title="Frequently Asked Questions"
            page="FAQ"
            />
        <div className="section section-padding-equal bg-color-light faq-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-xl-4">
                        <SectionTitle 
                            title="Frequently asked questions"
                            description="Find answers to the most common questions about NOVA Tech Academy, including our programs, admissions process, and more."
                            textAlignment="heading-left"
                            textColor=""
                        />
                    </div>
                    <div className="col-lg-7 col-xl-8">
                        <div className="faq-accordion">
                            <Accordion defaultActiveKey="1">
                                {allData.map((data) => (
                                    <Accordion.Item eventKey={data.id} key={data.id}>
                                        <Accordion.Header><span>{`${data.id}.`}</span>{data.title}</Accordion.Header>
                                        <Accordion.Body><p>{data.body}</p></Accordion.Body>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-4"><img src={process.env.PUBLIC_URL + "/images/others/poses-lady.png"} alt="Poses" /></li>
            </ul>
        </div>
        </main>
        </>
    )
}

export default FaqOne;