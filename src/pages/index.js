import React, { Fragment } from 'react';
import Wrap from '../components/Wrap';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Education from '../components/home/Education';
import Sites from '../components/home/Sites';
import Footer from '../components/Footer';

const Index = () => (
  <Fragment>
    <Wrap>
      <Header />
      <main id="main-content">
        <Hero
          heading="プログラマー"
          image="/images/jacob-proffer.jpg"
          imageAlt=""
        />
        <Intro heading="Introduction" />
        <Education heading="Education" />
      </main>
      <Sites heading="Projects" />
      <Footer />
    </Wrap>
  </Fragment>
);

export default Index;
