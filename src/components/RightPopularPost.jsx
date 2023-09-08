import React, { Component } from "react";
import { Popular } from "./Popular";

class PopularPost extends Component {
    render() {
        return (
            <div>
                {
                    <div className="popular">
                        <div className="popular_post_heading">
                            <h1>Popular Posts</h1>
                        </div>
                      { Popular.map((item, index) => {
                            return(
                            <div className="popular_posts">
                                <img src={item.img} alt="" />
                                <div className="popular_posts_title">
                                    <h3>{item.title}</h3>
                                    <h2>{item.description}</h2>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                }
            </div>
        )
    }
}

export default PopularPost;




