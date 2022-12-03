import React from 'react';
import BottomBar from '../components/bottomBar/BottomBar';
import Hero from '../components/hero/hero';
import Navbar from '../components/navbar/Navbar';
import './style.css'

const Layout = () => {
   return (
      <div>
         <Navbar/>
         <Hero/>
         <BottomBar/>
      </div>
   );
};

export default Layout;