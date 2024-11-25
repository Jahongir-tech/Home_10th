import React from "react";
import "./Gallery.scss";

import coffeeImg1 from "../../../assets/images/image (12).png";
import coffeeImg2 from "../../../assets/images/Rectangle 4 (1).png";
import coffeeImg3 from "../../../assets/images/Rectangle 4 (2).png";
import coffeeImg4 from "../../../assets/images/Rectangle 13.png";
import coffeeImg5 from "../../../assets/images/Rectangle 14.png";
import coffeeImg6 from "../../../assets/images/Rectangle 4.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__top">
          <div className="gallery__item">
            <h3>
              <span>01</span> Best Coffee Flavour
            </h3>
            <img src={coffeeImg1} alt="Coffee Flavour" />
          </div>
          <div className="gallery__item">
            <h3>
              <span>02</span> Place to get lost
            </h3>
            <img src={coffeeImg2} alt="Place to get lost" />
          </div>
          <div className="gallery__item">
            <h3>
              <span>03</span> Proper roasting
            </h3>
            <img src={coffeeImg3} alt="Proper roasting" />
          </div>
        </div>

        <div className="gallery__bottom">
          <div className="gallery__bottom-images">
            <img src={coffeeImg4} alt="Coffee Pouring" />
            <img src={coffeeImg5} alt="Coffee and Plants" />
            <img src={coffeeImg6} alt="Coffee Cup" />
          </div>
          <div className="gallery__content">
            <span className="gallery__history">Our history</span>
            <h2>Create a new story with us</h2>
            <p>
              Mauris Rhoncus in Imperdiet Placerat. Vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nibh maximus, est eu, mattis nuce.
              preasent ut quam quis quam venen atis fringilla. morbi vastibulum
              id tells mmodo mattis. aliauam erat volutpal.Mauris rhoncus in
              imperdiet placerat. Vestibulum euismod nisl suscipit ligula
              volutpat, a feugiat urna maximus. Cras massa nibh, tincidunt ut
              eros vitae, aliquam varius.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
