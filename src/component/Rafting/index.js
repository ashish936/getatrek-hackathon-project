import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import RaftingBanner from "./RaftingBanner";
import RaftingGrid from "./RaftingGrid";
import RaftingWrap from "./RaftingWrap";

export default function () {
  return (
    <div>
      <Helmet>
        <title>
          Book Rafting in Rishikesh, Uttarakhand and Himachal | GetaTrek
        </title>
        <meta
          name="title"
          title="Book Rafting in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta
          name="description"
          content="Book Rafting in Rishiskesh online, Uttarakhand and Book Rafting in Manali, Himachal at best prices."
        />
        <meta
          name="keywords"
          content="Book rafting, book rafting in rishikesh, book rafting in shivpuri rishikesh, book rafting in manali, book rafting online, book rafting in rishikesh online, book river rafting in rishikesh, book rafting in uttarakhand, book rafting in India, book rafting in himachal"
        />
        <meta
          property="og:title"
          content="Book Rafting in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta property="og:url" content="https://getatrek.com/book-rafting" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Book Rafting in Rishiskesh online, Uttarakhand and Book Rafting in Manali, Himachal at best prices."
        />
        <meta property="og:image" content="/images/og-images/book-rafting-og.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Book Rafting in Rishikesh, Uttarakhand and Himachal | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="Book Rafting in Rishiskesh online, Uttarakhand and Book Rafting in Manali, Himachal at best prices."
        />
        <meta name="twitter:url" content="https://getatrek.com/book-rafting" />
        <meta
          name="twitter:image"
          content="/images/og-images/book-rafting-og.jpg"
        />
      </Helmet>
      <Base>
        <RaftingBanner />
        <RaftingGrid />
        <RaftingWrap />
      </Base>
    </div>
  );
}
