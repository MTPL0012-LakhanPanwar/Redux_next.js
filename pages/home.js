import React, { useEffect, useState } from 'react';
import Header from './header';
import Footer from './footer';
import Slider from "../components/carousel/Slider";
import classes from "./Header/header.module.css";

function Home(props) {
 console.log(props);
  return (
    <div>
      <div>
      <Header/>
      <h1>Home</h1>
      <div className={classes.carousel} >
        <Slider />
      </div>
      <Footer/>
      </div>  
    </div>
  )
};

export default Home;
