import React, { useEffect } from "react";
import EmailSubscription from "../../components/EmailSubscription.jsx/EmailSubscription";
import './home.css';
import AOS from "aos";
import "aos/dist/aos.css";
import SEO from '../SEO'
// import { Link } from 'react-router-dom';
import '../Schedule/Schedule.css';
// import CountDown from "../../components/CountDown/CountDown";
import Merchandise from "../../components/Merchandise/Merchandise";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import {BsFillBriefcaseFill} from 'react-icons/bs'

const HomePage = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className="home-container">
      <SEO title={'GIS Festival 2022'} url={'https://gisfest.org'} />
      <div className="hero" id="top">
        <div className="hero-content">
          <div>
            <img src="/assets/logo_colored.png" alt="Background"></img>
          </div>
          <div className="hero-info flexbox">
            <h2>10 - 11th November, 2023  | </h2>
            <h2>Lagos, Nigeria.</h2>
          </div>
          <div className="cta-buttons">
          <div className="cta-button">
            <a className="pro-button" href="https://www.youtube.com/@gisfest/videos" rel="noreferrer" target='_blank'>
              <BsFillCollectionPlayFill className="pro-Icon" />
              <span className="pro-text">#GISfest2022 Proceedings</span>
            </a>
          </div>
          <div className="cta-button">
            <a className="pro-button" href="https://drive.google.com/file/d/1gNvxACEe804idXnpsOeLzPMBBauDYV-K/view?usp=sharing" rel="noreferrer" target='_blank'>
              <BsFillBriefcaseFill className="pro-Icon" />
              <span className="pro-text">Become a sponsor</span>
            </a>
          </div>
          
          </div>
          

        </div>

      </div>
      <main>
        <aside>
          <h1>LEARN.</h1>
          <h1>NETWORK.</h1>
          <h1>Discover.</h1>
        </aside>
        <aside className="main-about">
          <p>GISfest is a conference bringing together geospatial professionals and enthusiasts in Africa and beyond to discuss geospatial technologies and its applications in numerous industries. This event is primed to put a spotlight on geospatial technology with respect to modern tools and innovation.
            This 2 days event will feature workshops, presentations, panel discussions, hackathons and will provide a good way to connect with community members from all over Africa. If you are a Geospatial enthusiasts, students, engineer, analysts, technician, developer, manager or you use geospatial data and/or technology then GISfest is for YOU!</p>
        </aside>
      </main>
      <EmailSubscription />
      <Merchandise />
      
    </div>
  )
}

export default HomePage;
