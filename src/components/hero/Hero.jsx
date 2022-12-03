import React from 'react';
import HeroLeft from '../heroLeftSection/HeroLeft';
import HeroRight from '../heroRight/HeroRight';
import './hero.css'
const Hero = () => {
   return (
      <div className='heroContainer'>
         <div className="heroLeft"><HeroLeft/></div>
         <div className="heroRight"><HeroRight/></div>
      </div>
   );
};

export default Hero;