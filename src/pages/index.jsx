import React, { Fragment } from "react";
import Wrap from "../components/Wrap";
import Header from "../components/Header";
import Hero from "../components/home/Hero";
import Sites from "../components/home/Sites";
import Footer from "../components/Footer";

const Index = () => (
  <Fragment>
    <Wrap>
      <Header />
      <main id="main-content">
        <article>
          <Hero />
          <Sites heading="Projects" />
        </article>
      </main>
      <Footer />
    </Wrap>
  </Fragment>
);

export default Index;
