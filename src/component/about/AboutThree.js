import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Comprehensive Curriculum",
        para: "We offer an intensive 12-week Full-Stack Java Developer Bootcamp, tailored for aspiring software engineers and full-stack developers."
    },
    {
        id: 2,
        title: "Experienced Instructors",
        para: "Learn from industry experts with years of experience in software development and education."
    },
    {
        id: 3,
        title: "Hands-On Projects",
        para: "Gain practical experience by working on real-world projects and building a strong portfolio."
    },
    {
        id: 4,
        title: "Career Support",
        para: "Receive personalized career coaching, resume reviews, and interview preparation to help you land your dream job."
    },
    {
        id: 5,
        title: "Community and Networking",
        para: "Join a vibrant community of learners, alumni, and industry professionals to expand your network and opportunities."
    }
]


const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Our Valus"
                    title="Why Choose NOVA Tech Academy?"
                    description="At NOVA Tech Academy, we are dedicated to providing a comprehensive and immersive learning experience that prepares you for a successful career in the tech industry. Our academy stands out for several reasons:"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;