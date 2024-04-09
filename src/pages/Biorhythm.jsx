import React from "react";
import "../css/biorhythm.css";
import { Helmet } from "react-helmet";

function Biorhythm() {
  return (
    <>
      <Helmet>
        <title>Biorhythm - Bedjet</title>
      </Helmet>
      <div className="biorhythm-bg">
        <div>
          <h2>BedJet Biorhythm</h2>
          <p>
            BedJet's most powerful sleep-inducing feature can be mystifying at
            first glance. We've broken down all the details of our biorhythm
            sleep technology here, where you can learn about everything from
            recommended sleep cycles based on age and how to set up a
            temperature wakeup alarm to specific custom programming options.
          </p>
        </div>
      </div>
      <div className="biorhythm-container">
        <h2>Biorhythm</h2>
        <div>
          <h4>Understanding Sleep Cycles:</h4>
          <p>
            Delve into the fascinating world of sleep cycles, where your body
            transitions through different stages of sleep to rejuvenate and
            restore itself. Learn about the importance of quality sleep and how
            understanding your sleep cycle can optimize your rest.
          </p>
        </div>
        <div>
          <h4>Importance of Sleep Patterns:</h4>
          <p>
            Your sleep patterns play a crucial role in determining the quality
            of your rest. Discover how monitoring and analyzing your sleep
            patterns can help identify areas for improvement, leading to better
            overall sleep health and well-being.
          </p>
        </div>
        <div>
          <h4>Exploring Sleep Stages and Cycles:</h4>
          <p>
            Uncover the intricacies of sleep stages and cycles, from light sleep
            to deep REM (rapid eye movement) sleep. Explore how each stage
            contributes to your overall restfulness and learn how disruptions in
            these cycles can impact your daily functioning.
          </p>
        </div>
        <div>
          <h4>Utilizing a Sleep Cycle Calculator:</h4>
          <p>
            A sleep cycle calculator can be a valuable tool in understanding
            your individual sleep needs and optimizing your bedtime routine.
            Explore how this tool can help you determine the best times to go to
            bed and wake up, aligning with your natural sleep rhythms for a more
            restorative night's rest.
          </p>
        </div>
      </div>
    </>
  );
}

export default Biorhythm;
