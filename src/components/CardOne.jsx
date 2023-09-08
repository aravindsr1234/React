import React, { Component } from "react";
// import { Content } from "./Content";
import axios from "axios";


class list extends Component {

  state = {
    contentData: [],
  };

  componentDidMount() {
    axios.get("http://localhost:3005") 
      .then((response) => {
        this.setState({ contentData: response.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }


    render() {
        return (
            <div>
            {
                this.state.contentData.map((item, index) => {
                    return (
                        <div className="card">
                            <div className="card_img">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="card_head">
                                <h1>{item.titile}</h1>
                                <h3 className="card_subhead">Title description, <span className="subhead_span">{item.date}</span></h3>
                            </div>
                            <div className="card_content">
                                <p>{item.content}</p>
                            </div>
                            <div className="card_action">
                                <button>READ MORE</button>
                                <h3>Comments <span>{item.comment}</span></h3>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        )
    }
}


export default list;


// import React from "react";

// function list(props) {
//   return (
//     <div>
//       {props.content.map((item, index) => {
//         return (
//           <div className="card" key={index}>
//             <div className="card_img">
//               <img src={item.img} alt="" />
//             </div>
//             <div className="card_head">
//               <h1>{item.title}</h1>
//               <h3 className="card_subhead">
//                 Title description, <span className="subhead_span">{item.date}</span>
//               </h3>
//             </div>
//             <div className="card_content">
//               <p>{item.content}</p>
//             </div>
//             <div className="card_action">
//               <button>READ MORE</button>
//               <h3>
//                 Comments <span>{item.comment}</span>
//               </h3>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default list;