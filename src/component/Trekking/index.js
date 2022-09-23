import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import TrekkingBanner from "./TrekkingBanner";
import TrekkingGrid from "./TrekkingGrid";
import TrekkingWrap from "./TrekkingWrap";

export default function () {
    return (
      <div>
        <Helmet>
          <title>
            Book Trekking in Uttarakhand and Himachal, India | GetaTrek
          </title>
          <meta
            name="title"
            title="Book Trekking in Uttarakhand and Himachal, India | GetaTrek"
          />
          <meta
            name="description"
            content="Book Trekking in Uttarakhand and Himachal, India at best prices. Rent/Buy Trekking equipments in Uttarakhand and Himachal."
          />
          <meta
            name="keywords"
            content="Book trekking, book trekking in uttrakhand, book trekking in himachal, book trekking in India, book trekking in kasol, book trekking in kheerganga, book trekking in triund, book trekking in mcleodganj, rent trekking equipments, rent trekking equipments in uttrakhand, rent trekking equipments in himachal, rent trekking equipments in India"
          />
          <meta
            property="og:title"
            content="Book Trekking in Uttarakhand and Himachal, India | GetaTrek"
          />
          <meta
            property="og:url"
            content="https://getatrek.com/book-trekking"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Book Trekking in Uttarakhand and Himachal, India at best prices. Rent/Buy Trekking equipments in Uttarakhand and Himachal."
          />
          <meta
            property="og:image"
            content="/images/og-images/book-trekking-og.jpg"
          />

          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:title"
            content="Book Trekking in Uttarakhand and Himachal, India | GetaTrek"
          />
          <meta
            name="twitter:description"
            content="Book Trekking in Uttarakhand and Himachal, India at best prices. Rent/Buy Trekking equipments in Uttarakhand and Himachal."
          />
          <meta
            name="twitter:url"
            content="https://getatrek.com/book-trekking"
          />
          <meta
            name="twitter:image"
            content="/images/og-images/book-trekking-og.jpg"
          />
        </Helmet>
        <Base>
          <TrekkingBanner />
          <TrekkingGrid />
          <TrekkingWrap />
        </Base>
      </div>
    );
}