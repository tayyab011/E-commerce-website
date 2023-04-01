import React from 'react';

import ab from "../Images/aboutus.png";
const Aboutus = () => {
    return (
      <div>
        <div className="aboutus" data-theme="autumn">
          <div
            className="hero min-h-screen bg-orange-200"
            data-theme="autumn"
            id="bg"
          >
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-7xl font-bold text-center">About Us</h1>
                <p className="py-6 text-center text-xl">
                  OIKAWA is a premium shoe brand that has been serving customers
                  in the Indian continent for the past decade. Known for its
                  unique designs, exceptional quality, and unparalleled comfort,
                  OIKAWA has become a household name in the footwear industry.{" "}
                  <br />
                  With over 20 stores across the Indian continent, OIKAWA has
                  established a strong presence in the market, catering to
                  customers from all walks of life. The brand's commitment to
                  excellence and customer satisfaction is evident in every
                  product it produces. OIKAWA's team of expert designers and
                  craftsmen work tirelessly to create innovative and stylish
                  designs that not only look good but also feel good. Each pair
                  of shoes is made from the finest materials, ensuring
                  durability and longevity. <br /> The brand's mission is to
                  provide its customers with shoes that are not only fashionable
                  but also functional, allowing them to perform at their best
                  while maintaining a sense of style. OIKAWA offers a wide range
                  of shoes, from formal to casual, to sports and everything in
                  between. At OIKAWA, we believe that the perfect pair of shoes
                  can make all the difference in one's life, which is why we
                  strive to provide our customers with the best footwear
                  experience possible. Our goal is to continue to innovate and
                  create new designs that will set us apart from the
                  competition, while still maintaining the quality and comfort
                  our customers have come to expect from us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Aboutus;