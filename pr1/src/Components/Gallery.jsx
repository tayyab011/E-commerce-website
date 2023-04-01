import React from 'react';
import p1 from '../Images//1.jpg';
import p2 from "../Images//2.jpg";
import p3 from "../Images//3.jpg";

const Gallery = () => {
    return (
      <div className="flex md:max-md:flex-col " >
        <div className="col-md-4 w-full mx-0" >
          <img src={p1}></img>
        </div>
        <div className="col-md-4  w-full mx-0">
        
          <img src={p2}></img>
        </div>
        <div className="col-md-4 w-full  mx-0">
          <img src={p3}></img>
        </div>
      </div>
    );
};

export default Gallery;