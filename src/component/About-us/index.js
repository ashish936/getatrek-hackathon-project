import React from 'react';
import Base from '../base';
import FaqContent from '../faq/FaqContent';
import SocialMedia from '../SocialMedia';
import AboutBannner from './AboutBanner';
import AboutContent from './AboutContent';
import Helmet from "react-helmet";

export default function () {
  return (
    <div>
      <Helmet>
        <title>About Us | GetaTrek</title>
        <meta name="title" title="About us | Get a Trek" />
        <meta
          name="description"
          content="We deal with Trekking, Camping, Rafting and Rent a Bike or Scooty. Is this the right time for trekking?"
        />
        <meta
          name="keywords"
          content="about get a trek,trekking in Uttarakhand, trekking in India"
        />
        <meta property="og:title" content="Why GetaTrek?" />
        <meta property="og:url" content="https://getatrek.com/about-us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Trekking, Rafting, Camping and Bike Rental facilities for Uttarakhand and Himachal adventurous trips."
        />
        <meta
          property="og:image"
          content="/images/og-images/about-getatrek.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Why GetaTrek?" />
        <meta name="twitter:image" content="/images/og-images/about-getatrek.jpg" />
        <meta
          name="twitter:description"
          content="Trekking, Rafting, Camping and Bike Rental facilities for Uttarakhand and Himachal adventurous trips."
        />
        <meta name="twitter:url" content="https://getatrek.com/about-us" />
      </Helmet>
      <Base>
        <AboutBannner />
        <SocialMedia />
        <AboutContent>
          <FaqContent />
        </AboutContent>
      </Base>
    </div>
  );
}