import React from "react";
import Logo from "../imgs/logo.png";
import "../css/about.css";
import { Helmet } from "react-helmet";

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - Bedjet</title>
      </Helmet>
      <div className="about-container">
        <div className="about-bg">
          <div>
            <img src={Logo} alt="logo" />
            <p style={{ color: "white", textAlign: "center" }}>
              17 Connell Highway
              <br /> Newport, RI 02840
              <br /> (401) 404-5250
              <br /> info@bedjet.com
            </p>
          </div>
        </div>
        <div className="div-info">
          <h2>How it started</h2>
          <p>
            BedJet inventor Mark Aramli was an engineer on the NASA spacesuit
            program. Astronauts were his customers and he worked on the cooling
            and climate comfort systems of the suit. He wondered... “Why is it
            we can keep astronauts perfectly comfortable in outer space, the
            most hostile environment in the universe, and yet so many of us
            (including myself) aren’t sleeping perfectly comfortable in our own
            beds!?”
          </p>
          <p>
            Mark knew he could use his engineering talents to solve his
            problem—as well as those of millions of other sleepers. Mark
            launched his BedJet prototype on Kickstarter where it became the
            largest Kickstarter project ever to come out of Rhode Island.
          </p>
          <p></p>
          From the first prototype Mark designed and built on his kitchen table,
          the product has continued to evolve into a third-generation machine.
          BedJet has sold over 200,000 units to improve the lives of sleepers
          through better, more restful sleep and become the #1 best-selling
          cooling and warming sleep system for beds in America. We are told
          Mark's inner 12-year old nerd is very proud of him.
        </div>
        <div className="div-about">
          <h2>About our Company</h2>
          <p>
            BedJet is, at its heart, a sleep technology company. Our mission is
            to apply bleeding-edge engineering design, technology, and proven
            medical science into improving the sleep and bedroom comfort
            experience. We simply love creating and sharing awesome new
            technology that improves the lives of our customers!
          </p>
          <p>
            We are not a division of a massive multinational consumer appliance
            company, nor are we funded by big corporate capital. We are a true
            American start-up company based in Rhode Island, full of bright eyed
            inventors, engineers and gadget nerds who are part of the community
            of Makers. In the decade since our origins as a scrappy start-up
            company, BedJet has grown into a national brand and is now a
            healthy, stable, and profitable mid-sized company – we are here to
            stay.
          </p>
          <p>
            Selecting the best bed with a mattress involves considering factors
            like comfort, support, and durability. Find a store that offers a
            wide range of high-quality mattresses to pair with your preferred
            bed frame for a personalized sleep experience.
          </p>
          <p>
            An air-conditioned bed provides a cool and comfortable sleep
            environment, especially during hot nights. Experience restful sleep
            with temperature-controlled bedding that ensures you stay cool and
            cozy throughout the night.
          </p>
          <p>
            We also understand that the BedJet is a luxury product and that
            there are many in the world who cannot afford such luxuries. In
            recognition of that, BedJet strives to help those in need. Read on
            to hear more about the charitable work done by the Aramli
            Foundation, which is fully funded by an endowment 100% built by
            proceeds from BedJet sales.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
