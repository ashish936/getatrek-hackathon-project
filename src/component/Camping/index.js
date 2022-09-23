import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import CampingBanner from "./CampingBanner";
import CampingGrid from "./CampingGrid";
import CampingWrap from "./CampingWrap";

export default function () {
  return (
    <div>
      <Helmet>
        <title>
          Book Camp in Rishikesh, Uttarakhand and Himachal | GetaTrek
        </title>
        <meta
          name="title"
          title="Book Camp in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta
          name="description"
          content="Book Camp in Shivpuri Rishiskesh, Uttarakhand and Himachal at best prices. Rent/Buy Camping equipments."
        />
        <meta
          name="keywords"
          content="Book camp, book camp in rishikesh, book camp in shivpuri rishikesh, book camps in kasol, book camp in triund, book camp in uttarakhand, book camp in India, book camp in shimla, book camp in himachal, rent camping equipments, buy camping equipments,"
        />
        <meta
          property="og:title"
          content="Book Camp in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta property="og:url" content="https://getatrek.com/book-camping" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Book Camp in Shivpuri Rishiskesh, Uttarakhand and Himachal at best prices. Rent/Buy Camping equipments."
        />
        <meta
          property="og:image"
          content="/images/og-images/book-camping-og.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Book Camp in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="Book Camp in Shivpuri Rishiskesh, Uttarakhand and Himachal at best prices. Rent/Buy Camping equipments."
        />
        <meta name="twitter:url" content="https://getatrek.com/book-camping" />
        <meta
          name="twitter:image"
          content="/images/og-images/book-camping-og.jpg"
        />
      </Helmet>
      <Base>
        <CampingBanner />
        <CampingGrid />
        <CampingWrap />
      </Base>
    </div>
  );
}
