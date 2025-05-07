import React from 'react';
import './Home.css';
import Nav from '../../components/Navbar/Nav';

import heroimg from '../../assets/hero_banner.jpg';
import herotext from '../../assets/hero_title.png';
import info_icon from '../../assets/info_icon.png';
import Card from '../../components/Cards/Card';
import Page2 from '../../components/Page2/Page2';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  return (
    <div className='home'>
      <Nav />
      <div className="hero">
        <img src={heroimg} alt="" className='hero-img' />
        <img src={herotext} alt="" className='hero-title' />
        <p>You can watch as much as you want, whenever you want without a single commercial — all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</p>
        <div className="hero-btns">
          <button>Play</button>
          <button className='dark-btn'><img src={info_icon} alt="" /> More</button>
        </div>
        <Card />
        
      </div>
       <Page2 />
       <Footer/>
    </div>
  );
};

export default Home;
