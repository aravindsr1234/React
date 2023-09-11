import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
    <Router>
      <div className="wrapper">
        <div className="container">
          <Routes>
          <Route path="/" Component={Heading} />
            {/* <Heading /> */}
          </Routes>
          <div className="container_for_content">
            <div className="cards">
              <Routes>
                <Route path="/" Component={List} />
                {/* <List /> */}
              </Routes>
            </div>
            <div className="right_side_cards">
              <Routes>
                <Route path="/" Component={RightSide} />
                <Route path="/" Component={PopularPost} />
                <Route path="/" Component={Tags} />
              </Routes>
            </div>
          </div>
          <Routes>

            <Route path="/add" Component={Form} />

          </Routes>
          {/* <Form /> */}
        </div>
        <div className="footer_wrap">
          <div className="footer container_for_footer">
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default MainLayout;