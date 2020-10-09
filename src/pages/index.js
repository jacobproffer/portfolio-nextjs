import React, { Fragment } from 'react';
import Wrap from '../components/Wrap';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Sites from '../components/home/Sites';
import Footer from '../components/Footer';

const Index = () => (
  <Fragment>
    <Wrap>
      <Header />
      <main id="main-content">
        <Hero
          heading="プログラマー"
          image="/images/hero.jpg"
          imageAlt=""
        />
        <Intro heading="Intro" />
      </main>
      <Sites heading="Projects" />
      <Footer />
    </Wrap>
  </Fragment>
);

export default Index;
