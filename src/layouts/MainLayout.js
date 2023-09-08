import React from "react";
import Heading from "../components/Head"
import List from '../components/CardOne';
import RightSide from "../components/RightCard";
import PopularPost from "../components/RightPopularPost"
import Tags from "../components/Tags";
import Footer from "../components/Footer";
// import { Content } from "../components/Content";
import Form from "../components/Form";
// import List from "../components/CardOne";


function MainLayout() {
    return (
      <div className="wrapper">
        <div className="container">
          <Heading />
          <div className="container_for_content">
            <div className="cards">
              <List  />
            </div>
            <div className="right_side_cards">
              <RightSide />
              <PopularPost />
              <Tags />
            </div>
          </div>
          <Form />
        </div>
        <div className="footer_wrap">
          <div className="footer container_for_footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
  
  export default MainLayout;