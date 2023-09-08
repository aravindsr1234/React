import React from "react";

function CardTwo() {
    return (
        <div className="card">
            <div className="card_img">
                <img src="https://www.w3schools.com/w3images/bridge.jpg" alt="" />
            </div>
            <div className="card_head">
                <h1>BLOG ENTRY</h1>
                <h3 className="card_subhead">Title description, <span className="subhead_span">April 7, 2014</span></h3>
            </div>
            <div className="card_content">
                <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
            </div>
            <div className="card_action">
                <button>READ MORE</button>
                <h3>Comments <span>2</span></h3>
            </div>
        </div>
    )
}


export default CardTwo;