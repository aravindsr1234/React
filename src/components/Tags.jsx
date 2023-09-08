import React, { Component } from "react";
import { Tag } from "./Tag";

// function Tags() {
//     return (
//         <div className="tag">
//             <div className="popular_post_heading">
//                 <h1>Tags</h1>
//             </div>
//             <div className="tag_spans">
//                 <span className="tag_diff">Travel</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>
//                 <span>New York</span>   
//             </div>
//         </div>
//     )
// }


class Tags extends Component {
    render() {
        return (
            <div className="tag">
                <div className="popular_post_heading">
                    <h1>Tags</h1>
                </div>
                <div className="tag_spans">
                    <span className="tag_diff">Travel</span>
                    {Tag.map((item, index) => {
                        return (

                            <span>{item.tag}</span>

                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Tags;