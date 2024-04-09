import React from "react";
import R1 from "../imgs/r1.jpg";
import R2 from "../imgs/r2.jpg";
import R3 from "../imgs/r3.jpg";
import "../css/home.css";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

function Home() {
  return (
    <>
    <Helmet>
        <title>Home - Bedjet</title>
    </Helmet>
    <div className="home-container">
      <div className="bg-container">
        <div className="info">
          <h2>
            End sleepless nights with the world's #1 best-selling cooling &
            warming sleep system for beds
          </h2>
          <ul>
            <li>Cools or warms either side of the bed in seconds</li>
            <li>Clinically proven by doctors to improve sleep</li>
            <li>Removes body moisture and sweat from the bed</li>
            <li>No-tool install on any bed in minutes</li>
            <li>Barely noticeable when your bed is made</li>
          </ul>
          <button className="shop-btn"><Link to="/shop">Shop Now</Link></button>
        </div>
        <iframe
          src="https://player.vimeo.com/video/354914385?autoplay=0&loop=0&transparent=0"
          frameborder="0"
        ></iframe>
      </div>
      <div className="shop">
        <h2>Eliminate night sweats with BedJet</h2>
        <p>
          The air conditioning unit in BedJet smart beds not only keeps you cool
          during hot nights but also provides warmth in colder seasons, catering
          to your preferences year-round. This versatility contributes to better
          sleep quality and overall well-being.
        </p>
        <p>
          BedJet smart beds integrate cutting-edge technology to create the
          perfect sleep environment. With features like adjustable temperature
          settings, dual-zone climate control, and quiet operation, BedJet
          offers unparalleled comfort and convenience.
        </p>
        <p>
          A smart bed like BedJet goes beyond traditional mattresses, providing
          personalized climate control for a truly customized sleep experience.
          By regulating temperature and airflow, these beds ensure optimal
          conditions for a restful night's sleep.
        </p>
        <button className="shop-btn"><Link to="/shop">Start Sleeping Better Today</Link></button>
      </div>
      <div className="reviews">
        <h2>Sleep technology that physicians love</h2>
        <div className="reviews-cards">
          <div >
            <img src={R1} alt="" />
            <h4>Dr. THANUJA HAMILTON, MD</h4>
            <p>
              "I've recommended BedJet to high performance athletes and they
              report better sleep quality and feeling more recovered after hard
              workouts."
            </p>
          </div>
          <div>
            <img src={R2} alt="" />
            <h4>Dr. JAY KHORSANDI</h4>
            <p>
              "I recommend BedJet to all my patients! I track my sleep every
              night and nothing has given me such dramatic improvement in my
              scores as sleeping cooler and drier."
            </p>
          </div>
          <div>
            <img src={R3} alt="" />
            <h4>Dr. STEVEN BIRD, MD</h4>
            <p>
              "BedJet has improved my own sleep and bedtime comfort. I recommend
              it to other physicians as a great sleep technology improvement to
              the bedroom."
            </p>
          </div>
        </div>
      </div>
      <div style={{background:"rgb(232 238 244)",padding:"50px"}}>
        <h2>Invented by a Former NASA Spacesuit Engineer</h2>
        <p>Mark Aramli was an engineer on the NASA spacesuit program. Astronauts were his customers and he worked on the cooling and climate comfort systems of the suit. He wondered...</p>
        <p>“Why is it we can keep astronauts perfectly comfortable in outer space, the most hostile environment in the universe, and yet so many of us (including myself) aren’t perfectly comfortable in our own beds!?”</p>
        <p>We spend 30% of our lives in bed. Mark knew he could use his engineering talents to solve his problem—as well as those of millions of other sleepers. Mark launched his BedJet prototype on Kickstarter where it became the largest Kickstarter project ever to come out of Rhode Island.</p>
        <p>Since then BedJet has sold over 240,000 units to improve the lives of sleepers through better, more restful sleep and become the #1 best selling product in America for cooling and warming beds. We are told Mark's inner 12-year old nerd is very proud of him.</p>
      </div>
    </div>
    </>
  );
}

export default Home;
