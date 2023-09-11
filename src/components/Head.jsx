import React from "react";
import { Link } from "react-router-dom";


function Heading() {
    return (
        <div className="header">
            <div className="main_head">
                <h1 className="myblog">MY BLOG</h1>
                <h5 className="sub_head">Welcome to the blog of <span className="header_spam">unknown</span></h5>
            </div>
            <div>
                <Link to="/add">
                    <button className="addBlogBtn">Add Blog</button>
                </Link>
            </div>
        </div>
    )
}

export default Heading;