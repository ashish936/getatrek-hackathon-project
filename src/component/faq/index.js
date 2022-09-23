import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import SocialMedia from "../SocialMedia";
import FaqBannner from "./FaqBanner";
import FaqContent from "./FaqContent";

export default function () {
  return (
    <div>
      <Helmet>
        <title>FAQs | GetaTrek</title>
        <meta name="title" title="Frequently Asked Questions | GetaTrek" />
        <meta
          name="description"
          content="Why GetaTrek? Here are some frequenty asked questions!!"
        />
        <meta
          name="keywords"
          content="faq getatrek, frequently asked questions getatrek,Need any help regarding trekking"
        />
        <meta
          property="og:title"
          content="Frequently Asked Questions | GetaTrek"
        />
        <meta property="og:url" content="https://getatrek.com/faqs" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Why GetaTrek? Here are some frequenty asked questions!!"
        />
        <meta property="og:image" content="" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Frequently Asked Questions | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="Why GetaTrek? Here are some frequenty asked questions!!"
        />
        <meta name="twitter:url" content="https://getatrek.com/faqs" />
        <meta name="twitter:image" content="" />
      </Helmet>
      <Base>
        <FaqBannner />
        <SocialMedia />
        <FaqContent />
      </Base>
    </div>
  );
}
