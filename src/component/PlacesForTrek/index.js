import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import HeadSection from "./HeadSection";
import PlacesSection from "./PlacesSection";

export default function () {
  return (
    <div>
      <Helmet>
        <title>Best Places for Trekking in Uttarakhand, India | GetaTrek</title>
        <meta
          name="title"
          title="Best Places for Trekking in Uttarakhand, India | GetaTrek"
        />
        <meta
          name="description"
          content="The best places for trekking in Uttarakhand, India in 2020-21"
        />
        <meta
          name="keywords"
          content="places for trek, trekking, best places for trek, best places for trekking, best places for trekking in uttarakhand, best places for trekking in India,  contact get a trek, is this right time for trekking"
        />
        <meta
          property="og:title"
          content="Best Places for Trekking in India | GetaTrek"
        />
        <meta
          property="og:url"
          content="https://getatrek.com/places-for-trek"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="The best places for trekking in Uttarakhand, India in 2020-21"
        />
        <meta
          property="og:image"
          content="/images/og-images/best-treks-in-india.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Best places for trekking in India | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="The best places for trekking in Uttarakhand, India in 2020-21"
        />
        <meta
          name="twitter:url"
          content="https://getatrek.com/places-for-trek"
        />
        <meta
          name="twitter:image"
          content="/images/og-images/best-treks-in-india.jpg"
        />
      </Helmet>
      <Base>
        <HeadSection />
        <PlacesSection />
      </Base>
    </div>
  );
}
