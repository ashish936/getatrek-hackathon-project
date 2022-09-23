import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import SocialMedia from "../SocialMedia";
import TreksSection from "../TreksSection";
import BookGuideAbout from "./BookGuideAbout";
import BookGuideBannner from "./BookGuideBanner";
import BookGuideInfo from "./BookGuideInfo";

export default function () {
  return (
    <div>
      <Helmet>
        <title>
          Book a Guide for Trekking in Uttarakhand and Himachal, India |
          GetaTrek
        </title>
        <meta
          name="title"
          title="Book a Guide for Trekking in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta
          name="description"
          content="Book a Guide online for trekking in Uttarakhand and Himachal, India."
        />
        <meta
          name="keywords"
          content="book a guide for trekking, book a guide for trekking online, book a guide online in uttarakhand,book a guide online in himachal, book a guide for trekking in uttarakhand, trekking in Uttarakhand, book a guide for trekking in himachal, book a guide for trekking in India,"
        />
        <meta
          property="og:title"
          content="Book a Guide for Trekking in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta property="og:url" content="https://getatrek.com/book-guide" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Book a Guide for Trekking in Uttarakhand and Himachal, India."
        />
        <meta property="og:image" content="/images/og-images/book-guide.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Book a Guide for Trekking in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="Book a Guide for Trekking in Uttarakhand and Himachal, India."
        />
        <meta name="twitter:url" content="https://getatrek.com/book-guide" />
        <meta name="twitter:image" content="/images/og-images/book-guide.jpg" />
      </Helmet>
      <Base>
        <BookGuideBannner />
        <BookGuideInfo />
        <BookGuideAbout />
        <TreksSection />
        <SocialMedia />
      </Base>
    </div>
  );
}
