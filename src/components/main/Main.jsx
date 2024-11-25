import React from 'react'
import "./Main.scss"
import Hero from './hero/Hero'
import Gallery from './gallery/Gallery'
import Product from './product/Product'

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Gallery />
      <Product />
    </main>
  );
}

export default Main