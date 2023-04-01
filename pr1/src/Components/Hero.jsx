import React,{useState, useEffect }  from 'react';
import hr from '../Images//g4.gif';

import AOS from "aos";
import "aos/dist/aos.css";



const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
      const [show, setShow] = useState(false);
    return (
      <div
        className="hero min-h-screen bg-orange-200 overflow-hidden"
        data-theme="autumn"
       
      >
        <div
          className="hero-content flex-col lg:flex-row"
          data-aos="fade-right"
        >
          <img src={hr} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">Sam@holland</h1>
            <p className="py-6">
              I recently purchased a pair of shoes from OIKAWA, and I couldn't
              be happier with my purchase. The shoes are not only stylish, but
              they are also incredibly comfortable to wear. I've been able to
              wear them all day without experiencing any discomfort or pain.
              What impressed me the most about OIKAWA was their customer
              service. The staff was friendly, knowledgeable,
            </p>
            {show && (
              <p>
                {" "}
                and patient. They took the time to understand my needs and help
                me find the perfect pair of shoes. The quality of the shoes is
                also exceptional. The material is durable, and the stitching is
                strong. I can tell that these shoes are going to last me a long
                time, which makes the price worth it. Overall, I highly
                recommend OIKAWA to anyone in need of high-quality shoes that
                are both stylish and comfortable. The staff is excellent, and
                the products are top-notch. I will definitely be returning to
                OIKAWA for all my future footwear needs.
              </p>
            )}

            <button className="btn btn-primary" onClick={() => setShow(!show)}>
              {show === true ? "Read less" : "Read more"}
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;