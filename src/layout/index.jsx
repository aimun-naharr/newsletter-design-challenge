import React from 'react';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/Navbar';
import './style.css'

const Layout = () => {
   return (
      <div>
         <Navbar/>
         <Hero/>
      </div>
   );
};

export default Layout;