import React from "react";
import Helmet from "react-helmet";
import Base from "../base";
import RentalBanner from "./RentalBanner";
import RentalGrid from "./RentalGrid";
import RentalWrap from "./RentalWrap";

export default function () {
  return (
    <div>
      <Helmet>
        <title>
          Rent a Bike or Scooty in Uttarakhand and Himachal, India | GetaTrek
        </title>
        <meta
          name="title"
          title="Rent a Bike or Scooty in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta
          name="description"
          content="Rent a bike or scooty in Dehradun, Rishikesh Uttarakhand and in Himachal, India at very affordable prices."
        />
        <meta
          name="keywords"
          content="rent bike, rent a bike,Rent a Bike or Scooty in Uttarakhand, rent bike in dehradun, rent a bike in rishikesh, rent bike in uttarakhand, rent bike in himachal, rent bike in India, rent a scooty, rent a scooty in dehradun , rent a bike scooty in dehradun"
        />
        <meta
          property="og:title"
          content="Rent a Bike or Scooty in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta
          property="og:url"
          content="https://getatrek.com/rent-bike-scooty"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Rent a bike or scooty in Dehradun, Rishikesh Uttarakhand and in Himachal, India at very affordable prices."
        />
        <meta property="og:image" content="/images/og-images/rent-a-bike.jpg" />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Rent a Bike or Scooty in Uttarakhand and Himachal, India | GetaTrek"
        />
        <meta
          name="twitter:description"
          content="Rent a bike or scooty in Dehradun, Rishikesh Uttarakhand and in Himachal, India at very affordable prices."
        />
        <meta
          name="twitter:url"
          content="https://getatrek.com/rent-bike-scooty"
        />
        <meta
          name="twitter:image"
          content="/images/og-images/rent-a-bike.jpg"
        />
      </Helmet>
      <Base>
        <RentalBanner />
        <RentalGrid />
        <RentalWrap />
      </Base>
    </div>
  );
}
