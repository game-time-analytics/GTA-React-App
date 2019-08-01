import React from 'react';

/**
* @description  AboutUs function that renders the software dev team and their names
*/
const AboutUs = () => {
  return (
      <React.Fragment>
        <img className="team" src={ require('../../assets/GTA-team-image-final.jpg') } alt="GTA logo" />
        <section className="teamDescription">
          <p>Matt is a long-time Patriots fan.</p>
          <p>Tia is a die-hard Giants fan.</p>
          <p>Jeff is a Seahawks fan.</p>
        </section>
      </React.Fragment>
  );
};

export default AboutUs;
