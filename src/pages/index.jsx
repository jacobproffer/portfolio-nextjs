import React, { Fragment } from 'react';
import Wrap from '../components/Wrap';
import Header from '../components/Header';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import Sites from '../components/home/Sites';
import Footer from '../components/Footer';
import VisuallyHidden from '../components/VisuallyHidden';

const Index = () => (
  <Fragment>
    <Wrap>
      <Header />
      <main id="main-content">
        <article>
          <VisuallyHidden as="h1">Portfolio of Jacob Proffer</VisuallyHidden>
          <Hero
            heading="プログラマー"
            image="/images/jacob-proffer.jpg"
            imageAlt=""
            aria-hidden="true"
          />
          <Intro heading="Introduction" />
          <Sites heading="Projects" />
        </article>
      </main>
      <Footer />
    </Wrap>
  </Fragment>
);

export default Index;
