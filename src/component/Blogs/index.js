import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import BlogBanner from "./BlogBanner";
import BlogContent from "./BlogContent";

export default function() {
    return (
      <div>
        <Helmet>
          <title>Why you should need a Guide for trekking? | GetaTrek</title>
          <meta
            name="title"
            title="Why you should need a Guide for trekking? | GetaTrek"
          />
          <meta
            name="description"
            content="Why you should need a Guide or professional for trekking? Read more"
          />
          <meta
            name="keywords"
            content="trekking with guide, trek wiith guide, is it safe to trek alone, Why you should need a Guide for trekking, need a guide for trekking, guide for trekking, why you should trek with the professional, trek with professional, trekking with professional, "
          />
          <meta
            property="og:title"
            content="Why you should need a Guide for trekking?"
          />
          <meta
            property="og:url"
            content="https://getatrek.com/blogs/book-guide-why-you-should-need-a-guide-for-trekking"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Why you should need a Guide or professional for trekking? Read more"
          />
          <meta
            property="og:image"
            content="/images/og-images/why-you-should-need-a-guide-for-trekking.jpg"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Why you should need a Guide for trekking?"
          />
          <meta
            name="twitter:description"
            content="Why you should need a Guide or professional for trekking? Read more"
          />
          <meta
            name="twitter:url"
            content="https://getatrek.com/blogs/book-guide-why-you-should-need-a-guide-for-trekking"
          />
          <meta
            name="twitter:image"
            content="/images/og-images/why-you-should-need-a-guide-for-trekking.jpg"
          />
        </Helmet>
        <Base>
          <BlogBanner />
          <BlogContent />
        </Base>
      </div>
    );
}