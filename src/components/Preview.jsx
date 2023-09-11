import React from "react";

function Preview() {
    return (
        <div className="card">
            <div className="card_img">
                <img src alt="" />
            </div>
            <div className="card_head">
                <h3 className="card_subhead">Title description, <span className="subhead_span"></span></h3>
            </div>
            <div className="card_content">
                <p></p>
            </div>
            <div className="card_action">
                <button>READ MORE</button>
                <h3>Comments <span></span></h3>
            </div>
        </div>
    )
}

export default Preview;