import React from 'react';
import p1 from '../Images/m.jpg'
import p2 from '../Images/n.jpg'
import p3 from '../Images/o.jpg'
import p4 from '../Images/p.jpg'
import p5 from '../Images/r.jpg'
import p6 from '../Images/q.jpg'
import p7 from '../Images/s.jpg'
import p8 from '../Images/17.jpg'

const Team = () => {
    return (
      <div>
        <div className="text-red-900 bg-orange-200 " data-theme="autumn">
          <h1 className="text-red-900 bg-orange-200 p-20 text-center text-5xl text-bold">
            Our team
          </h1>
          <div className="container px-25 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="lg:w-1/4 md:w-1/2 w-full p-4 ">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p1} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">CEO</h2>
                    <p>
                      Zendaya
                      <hr />
                      <br />
                      zen2e3@gmail.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p2} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manager </h2>
                    <p>obxjxiwb@gmail.com</p>
                    
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p8}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">MD</h2>
                    <p>vziuqsi5tg@gmail.com</p>
                    
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img
                      src={p7}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Product Manager</h2>
            <p>syivuysxu@gmail.com</p>
                    
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p3} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manager b-1</h2>
                    <p>jigsiuvi@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img
                      src={p6}
                      alt="Shoes"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manager b-2</h2>
                    <p>bhiqsbi@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p4} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manager b-3</h2>
                    <p>xyz1232@gmail.com</p>
                  </div>
                </div>
              </div>
              <div className="lg:w-1/4 md:w-1/2 w-full p-4">
                <div className="card w-96 bg-orange-200 shadow-xl image-full">
                  <figure>
                    <img src={p5} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">Manager b-4</h2>
                    <p>xyz1232@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Team;