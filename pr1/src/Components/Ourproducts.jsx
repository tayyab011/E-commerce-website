import React,{useState} from 'react';
import i1 from '../Images/s1.jpg'
const Ourproducts = () => {
  
      const [show, setShow] = useState(false);
    return (
      <div data-theme="autumn">
        <div className="hero min-h-screen bg-orange-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={i1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-7xl font-bold text-red-900">Our products</h1>
              <p className="py-6 text-xl">
                At OIKAWA, we are proud to say that our shoes are made in the
                urban area of Bangladesh, a country with a rich history in the
                footwear industry. Our manufacturing process is closely
                monitored to ensure that each product meets our high standards
                of quality and durability.
                <br />
              </p>
              {show && (
                <p className="py-6 text-xl">
                  {" "}
                  We work with skilled craftsmen and women who have years of
                  experience in the footwear industry. They use traditional
                  techniques and modern machinery to produce shoes that are not
                  only stylish but also practical and long-lasting.
                  <br />
                  Our materials are sourced from the best suppliers to ensure
                  that we are using only the highest quality materials
                  available. We believe that our customers deserve nothing but
                  the best, and we are committed to delivering just that.
                  <br />
                  One of the advantages of producing our products in the urban
                  area of Bangladesh is the availability of skilled labor at a
                  lower cost, which allows us to keep our prices competitive
                  without sacrificing quality.
                  <br />
                  We take pride in providing our employees with fair wages and
                  good working conditions, creating a positive impact on the
                  community. By choosing to manufacture our products in the
                  urban area of Bangladesh, we are not only supporting the local
                  economy but also providing employment opportunities to those
                  in need.
                  <br />
                  At OIKAWA, we are committed to producing high-quality products
                  while supporting local communities. We believe that by making
                  our products in the urban area of Bangladesh, we are
                  contributing to the growth and development of the region while
                  providing our customers with the best possible products.
                </p>
              )}

              <button
                className="btn btn-primary btn-lg text-xl p-3"
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

export default Ourproducts;