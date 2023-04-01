import React, { useState,useEffect } from 'react';
import hr2 from '../Images//g5.gif';
import AOS from "aos";
import "aos/dist/aos.css";
const Hero2 = () => {
   useEffect(() => {
     AOS.init({ duration: 2000 });
   }, []);


      const [show, setShow] = useState(false);
    return (
      <div>
        <div
          className="hero min-h-screen bg-orange-200 overflow-hidden"
          data-theme="autumn"
        >
          <div
            className="hero-content flex-col lg:flex-row-reverse "
            data-aos="fade-left"
          >
            <img src={hr2} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Tom@hotmail.com</h1>
              <p className="py-6">
                As a loyal customer of OIKAWA for the past few years, I can
                confidently say that this shoe brand is my go-to for all my
                footwear needs. The quality of their shoes is exceptional, and
                the comfort is unmatched. Every pair of shoes I've purchased
                from OIKAWA has been worth every penny. What I love about OIKAWA
                is their attention to detail.
              </p>
              {show && (
                <p>
                  {" "}
                  From the design to the material to the stitching, everything
                  is top-notch. Their shoes are not only stylish but also
                  practical, making them perfect for any occasion. The staff at
                  OIKAWA is also incredibly knowledgeable and helpful. They
                  always take the time to understand my needs and recommend the
                  best pair of shoes for me. It's a pleasure to shop at OIKAWA,
                  and I always leave the store feeling satisfied with my
                  purchase. Overall, I highly recommend OIKAWA to anyone looking
                  for quality footwear that is both fashionable and functional.
                  They truly live up to their reputation as a premium shoe
                  brand.
                </p>
              )}
              <button
                className="btn btn-primary"
                onClick={() => setShow(!show)}
              >
                {show === true ? "Read less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Hero2;