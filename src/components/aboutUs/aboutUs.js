import React from 'react';

/**
* @description  AboutUs function that renders the software dev team and their names
*/
const AboutUs = () => {
  return (
      <React.Fragment>
        <img className="team" src={ require('../../assets/GTA-team-image-final.jpg') } alt="GTA logo" />
        <section className="teamDescription">
          <p><a href="https://github.com/mwilkin">Matt</a> is a long-time Patriots fan.</p>
          <p><a href="https://github.com/TRose2014">Tia </a>is a die-hard Giants fan.</p>
          <p><a href="https://github.com/JeffLawrence1">Jeff </a> is a Seahawks fan.</p>
        </section>
      </React.Fragment>
  );
};

export default AboutUs;
