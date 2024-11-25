import React from "react";
import { CiStar } from "react-icons/ci";
import { RiShoppingBag3Line } from "react-icons/ri";
import product__img from "../../../assets/images/Rectangle 2.png";
import product__image from "../../../assets/images/WDCM-G15L-1-removebg-preview 1.svg";

import "./Product.scss";

const Product = () => {
  return (
    <section className="product">
      <div className="container">
        <div className="product__wrapper--top">
          <div className="product__info">
            <h4 className="product__text">Popular Product</h4>
            <h2 className="product__title">Coffee popular Product</h2>
          </div>
          <div className="product__cards">
            <div className="product__card">
              <img src={product__img} alt="Product image" />
              <h3 className="product__card--title">BRAZIL COFFEE GRED</h3>
              <button className="product__card--btn">
                <RiShoppingBag3Line /> ADD TO CARD
              </button>
            </div>
            <div className="product__card">
              <img src={product__img} alt="Product image" />
              <h4 className="product__card--rating">
                <span>COFFEE</span>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </h4>
              <h3 className="product__card--title">BRAZIL COFFEE GRED</h3>
              <p className="product__card--price">
                PRICE - <span>$320.00/</span> $358
              </p>
            </div>
            <div className="product__card">
              <img src={product__img} alt="Product image" />
              <h4 className="product__card--rating">
                <span>COFFEE</span>
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
                <CiStar />
              </h4>
              <h3 className="product__card--title">BRAZIL COFFEE GRED</h3>
              <p className="product__card--price">
                PRICE - <span>$320.00/</span> $358
              </p>
            </div>
          </div>
          <div className="product__btn">
            <button>VIEW ALL PRODUCT</button>
          </div>
        </div>
        <div className="product__wrapper--bottom">
          <div className="product__left">
            <img src={product__image} alt="" />
          </div>
          <div className="product__right">
            <h2 className="product__name">Coffee <br /> machine, buy for home</h2>
            <p className="product__description">
              Mauris rhoncus in imperdiet placerat. vestibu emismd nisl
              suscirpit ligula volutpat, a feyguat urn maxmaus. cars massa
              nibhtincidunt. donec et nib maximus, est eu, mattis nuce. preasent
              ut quam quis quam venen atis fri ngilla. morbi vastibulum id tells
              mmodo mattis. aliauam erat volutpal.
            </p>
            <button className="btn">Discover now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
