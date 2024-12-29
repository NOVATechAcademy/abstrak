import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import BlogData from "../../data/blog/BlogData.json";

const allBlogData = BlogData;

const BlogListOne = ({colSize, itemShow}) => {
    return (
        <>
            {allBlogData.slice(0, itemShow).map((data) => (
                <div className={`${colSize}`} key={data.id}>
                    <div className={`blog-list ${(data.id % 2  === 0) ? "border-start" : ""}`}>
                        <div className="post-thumbnail">
                            <a href="https://money.usnews.com/careers/best-jobs/software-developer" target="_blank" rel="noopener noreferrer">
                                <img src={`${process.env.PUBLIC_URL}/${data.thumb}`} alt="Blog Post" />
                            </a>
                        </div>
                        <div className="post-content">
                            <h5 className="title">
                                <a href="https://money.usnews.com/careers/best-jobs/software-developer" target="_blank" rel="noopener noreferrer">
                                    {data.title}
                                </a>
                            </h5>
                            <p>{data.excerpt}</p>
                            <a href="https://money.usnews.com/careers/best-jobs/software-developer" target="_blank" rel="noopener noreferrer" className="more-btn">
                                Learn more <FaAngleRight />
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default BlogListOne;