import React from 'react';
import s3 from '../Images/s3.jpg';

const Material = () => {
    return (
      <div className="hero min-h-screen bg-orange-200" data-theme="autumn">
        <div className="hero-content flex-col lg:flex-row">
          <img src={s3} className="max-w-sm rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-6xl font-bold text-red-900">
              How we make them
            </h1>
            <p className="py-6 text-xl">
              At OIKAWA, we believe that the quality of the materials used in
              our products is just as important as the design and craftsmanship.
              That's why we source only the highest quality materials from
              trusted suppliers around the world.
              <br />
              <br />
              We use a variety of materials in our products, including leather,
              suede, canvas, and synthetic materials. Each material is carefully
              selected based on its durability, comfort, and aesthetic appeal.
              Our leather is sourced from top-quality tanneries, ensuring that
              it is not only soft and comfortable but also long-lasting. We
              offer a range of leather options, including full-grain, top-grain,
              and suede, to provide our customers with a variety of options to
              choose from.
              <br />
              <br />
              Our canvas materials are made from high-quality cotton, making
              them breathable and lightweight. We use canvas in many of our
              casual shoes, as it provides a relaxed and comfortable feel. For
              our synthetic materials, we use only the best quality materials
              that mimic the look and feel of leather and suede while being
              environmentally friendly. These materials are durable, easy to
              clean, and often used in our sports and outdoor shoes. In addition
              to the materials we use in our shoes, we also pay close attention
              to the quality of our hardware, such as zippers, buckles, and
              eyelets.
              <br />
              <br />
              We use only high-quality hardware to ensure that our products are
              not only functional but also durable. At OIKAWA, we are committed
              to using only the highest quality materials in our products to
              ensure that our customers receive products that are not only
              stylish but also practical and long-lasting.
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default Material;