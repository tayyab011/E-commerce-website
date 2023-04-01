import React from 'react';
import pro1 from '../Images/pro1.jpg';
import pro2 from '../Images/pro2.jpg';
import pro3 from '../Images/pro3.jpg';

const Card = () => {
    return (
      <div id='grid'
        className="sm:flex-wrap lg:flex  lg:justify-center px-30 bg-orange-200"
        data-theme="autumn"
      >
        <div
          id="card1"
          className=" col-span-4 card w-106 bg-orange-100 shadow-xl"
        >
          <figure>
            <img src={pro1} alt="Bag" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bag!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div
          id="card2"
          className=" col-span-4 card w-106 bg-orange-100 shadow-xl"
        >
          <figure>
            <img src={pro2} alt="Canon" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Canon!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
        <div
          id="card3"
          className=" col-span-4 card w-106 bg-orange-100 shadow-xl"
        >
          <figure>
            <img src={pro3} alt="Laptop" />
          </figure>
          <div className="card-body ">
            <h2 className="card-title">
              Laptop!
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">Fashion</div>
              <div className="badge badge-outline">Products</div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Card;