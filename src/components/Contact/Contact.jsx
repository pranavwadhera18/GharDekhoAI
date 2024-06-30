import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsFillChatDotsFill } from "react-icons/bs";
import {HiChatBubbleBottomCenter} from 'react-icons/hi2'
import { color } from "framer-motion";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="primaryText">How to ask our AI??</span>
          <span className="secondaryText">
            Click on the circle on bottom right and ask questions about your listings.Still having a doubt why to choose our
            AI?? Here are some reasons!{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Personalized </span>
                    <span className="secondaryText">Receive tailored property suggestions based on preferences such as location, budget, size, and amenities, enhancing the search experience.</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Convenience</span>
                    <span className="secondaryText">Simplify the home searching process with intuitive navigation, property comparisons, and scheduling of viewings directly through the chatbot interface</span>
                  </div>
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Data-driven</span>
                    <span className="secondaryText">Benefit from AI algorithms that analyze user preferences and behavior to provide relevant insights and refine search results over time.</span>
                  </div>
                </div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexColStart detail">
                    <span className="primaryText">Interactive</span>
                    <span className="secondaryText">Engage in interactive conversations that simulate human-like interactions, offering a more engaging and user-friendly search process.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./pexels-hikaique-65438.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
