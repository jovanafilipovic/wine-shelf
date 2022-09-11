import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h3 className="heading">About Us</h3>

        <div className="text">
          <p>
            We were born in the desire to help tourists who come to Serbia to
            choose the right wine to consume with our local specialties. Our
            intention is to bring you closer to the wine industry in the Balkan
            area and bring to you a sophisticated taste of our wines. Our offer
            includes wines from Serbia, Montenegro, North Macedonia, Croatia,
            Slovenia, Albania, Greece and Bulgaria.{" "}
          </p>
          <p>
            We are going to help you find the wine that best corresponds your
            requirements. We offer you the best selection of wines and the
            corresponding description, so that you can make the right choice. We
            offer you the opportunity to try foreign as well as domestically
            produced wines.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
