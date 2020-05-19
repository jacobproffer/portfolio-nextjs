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
        <Hero heading="ウェブ開発者" image="/images/hero.jpg" imageAlt="Jacob Proffer." />
        <Intro heading="伝記" />
        <Sites heading="作品" />
      </main>
      <Footer />
    </Wrap>
  </Fragment>
);

export default Index;
