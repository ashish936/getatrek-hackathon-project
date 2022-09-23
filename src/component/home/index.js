import React from "react";
import Base from '../base';
import FrontBanner from './FrontBanner';
import FeaturesSection from '../FeaturesSection';
import Rent from "./Rent";
import AboutSection from '../AboutSection';
import TreksSection from '../TreksSection';
import GuideSection from '../GuideSection';
import BookTour from "./BookTour";

export default function () {
  return (
    <>
      <Base>
        <FrontBanner />
        <FeaturesSection />
        <Rent />
        <AboutSection />
        <TreksSection />
        <BookTour />
        <GuideSection />
      </Base>
    </>
  );
}
