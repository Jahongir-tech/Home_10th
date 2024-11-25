// rafce
import React from "react";
import hero__img from "../../../assets/images/Rectangle 12.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <section
      className="hero"
      id="hero"
      style={{
        width: "100%",
        backgroundImage: `url(${hero__img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="hero__wrapper">
          <h1 className="hero__title">Enjoy Your Morning Coffee.</h1>
          <p className="hero__text">
            The coofee is brewed by fist roasting the green coffee beans over
            hot coals in brazier. given to Opportunity
          </p>
          <button className="hero__btn">TEST COFFEE</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
