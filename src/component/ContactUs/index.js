import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import SocialMedia from "../SocialMedia";
import ContactBannner from "./ContactBanner";
import ContactUsContent from "./ContactUsContent";


export default function () {
  return (
    <div>
      <Helmet>
        <title>Contact us | GetaTrek</title>
        <meta name="title" title="Contact us | GetaTrek" />
        <meta
          name="description"
          content="Do you've any query regarding trekking, camping, rafting and bike rental? Contact us now!!"
        />
        <meta
          name="keywords"
          content="contact getatrek, Help getatrek,Need any help regarding trekking"
        />
        <meta property="og:title" content="Contact us | GetaTrek" />
        <meta property="og:url" content="https://getatrek.com/contact-us" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Do you've any query regarding trekking, camping, rafting and bike rental? Contact us now!!"
        />
        <meta property="og:image" content="/images/og-images/contact-us.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact us | GetaTrek" />
        <meta
          name="twitter:description"
          content="Do you've any query regarding trekking, camping, rafting and bike rental? Contact us now!!"
        />
        <meta name="twitter:url" content="https://getatrek.com/contact-us" />
        <meta name="twitter:image" content="/images/og-images/contact-us.jpg" />
      </Helmet>
      <Base>
        <ContactBannner />
        <SocialMedia />
        <ContactUsContent />
      </Base>
    </div>
  );
}
