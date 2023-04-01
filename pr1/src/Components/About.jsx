import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import video from "../Images/vedio.mp4";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="main">
      <div className="overlay" data-aos='zoom-out'>
        <div className="text-center text-7xl py-5 font-bold">About Us</div>
        <div className="text-center text-xl py-8 font-bold">
          OIKAWA is a premium shoe brand that has been serving customers in the
          Indian continent for the past decade. Known for its unique designs,
          exceptional quality, and unparalleled comfort, OIKAWA has become a
          household name in the footwear industry.
          <br />
          <br />
          <br />
          With over 20 stores across the Indian continent, OIKAWA has
          established a strong presence in the market, catering to customers
          from all walks of life. The brand's commitment to excellence and
          customer satisfaction is evident in every product it produces
        </div>
        <br />
       
      </div>

      <video src={video} autoPlay loop muted />
    </div>
  );
};

export default About;
