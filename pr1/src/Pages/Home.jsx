import React from 'react';
import About from '../Components/About';
import Card from '../Components/Card';
import Carosol from '../Components/Carosol';



import Hero from '../Components/Hero';
import Hero2 from '../Components/Hero2';

const Home = () => {
    return (
        <div>
    <About/>
    <Hero/>
    <Hero2/>
   
    <Carosol />
    <Card/>
        </div>
    );
};

export default Home;