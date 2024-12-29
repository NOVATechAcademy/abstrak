import React from 'react';

const Data = [
    {
        image: "/images/brand/Oracle-Partner.jpg"
    },
    {
        image: "/images/brand/aws.jpg"
    },
    {
        image: "/images/brand/Microsoft.webp"
    },
    {
        image: "/images/brand/react.jpg"
    },
    
]


const BrandItem = () => {
    return (
        <>
            {Data.map((data, index) => (
                <div className="col-lg-3 col-6" key={index}>
                    <div className="brand-grid">
                        <img src={process.env.PUBLIC_URL + data.image} alt="Brand" />
                    </div>
                </div>
            ))}
        </>
    )
}

export default BrandItem;