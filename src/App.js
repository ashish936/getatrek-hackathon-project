import React from "react";
import Helmet from "react-helmet";
import { Route, Switch } from "react-router-dom";
import Home from "./component/home";
import Treks from "./component/treks";
import AboutUs from "./component/About-us";
import PlacesForTrek from "./component/PlacesForTrek";
import ContactUs from "./component/ContactUs";
import BookGuide from "./component/BookGuide";
import Blogs from "./component/Blogs";
import ScrollToTop from "./component/shared/ScrollToTop";
import faq from "./component/faq";
import Trekking from "./component/Trekking";
import Camping from "./component/Camping";
import Rafting from "./component/Rafting";
import Rental from "./component/Rental";
import { createMemoryHistory } from "history";

const history = createMemoryHistory();

function App() {
  return (
    <>
      <Helmet>
        <title>
          Book Trekking, Camping, Rafting and Rent/Buy Trekking Equipments | GetaTrek
        </title>
        <meta charset="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="theme-color" content="#191919" />
        <meta
          name="title"
          title="Book Trekking,Camping,Rafting and Rent/Buy Trekking Equipments | GetaTrek"
        />
        <meta
          name="description"
          content="Find, Book Trekking, Camping and Rafting in Uttarakhand, Himachal, India. Online Guide Booking for Trekking. Rent/Buy Trekking Equipments and Rent a Bike or scooty. Get a trek, Get a life!! "
        />
        <meta
          name="keywords"
          content="Book Trekking, Book Camping, Book Rafting, Book trekking in uttarakhand, Book camping in uttarakhand, Book rafting in uttarakhand, online guide booking for trekking in uttarakhand,rent buy trekking equipments, trekking, treks in uttarakhand, uttarakhand treks, trekking in uttarakhand, trekking in India,  guide booking, guide booking for trekking, Online Guide Booking for Trekking, Trekking Equipments"
        />
        <meta
          property="og:title"
          content="Book Trekking,Camping,Rafting and Rent/Buy Trekking Equipments"
        />
        <meta property="og:url" content="https://getatrek.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Find, Book Trekking, Camping and Rafting in Uttarakhand, Himachal, India. Online Guide Booking for Trekking. Rent/Buy Trekking Equipments and Rent a Bike or scooty. Get a trek, Get a life!!"
        />
        <meta
          property="og:image"
          content="/images/og-images/home-getatrek.jpg"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="Book Trekking,Camping,Rafting and Rent/Buy Trekking Equipments"
        />
        <meta
          name="twitter:description"
          content="Find, Book Trekking, Camping and Rafting in Uttarakhand, Himachal, India. Online Guide Booking for Trekking. Rent/Buy Trekking Equipments and Rent a Bike or scooty. Get a trek, Get a life!!"
        />
        <meta name="twitter:url" content="https://getatrek.com/" />
        <meta
          name="twitter:image"
          content="/images/og-images/home-getatrek.jpg"
        />
      </Helmet>
      <ScrollToTop />
      <Switch>
        <Route component={Trekking} path="/book-trekking" />
        <Route component={Camping} path="/book-camping" />
        <Route component={Rafting} path="/book-rafting" />
        <Route component={Rental} path="/rent-bike-scooty" />
        <Route component={faq} path="/faqs" />
        <Route
          component={Blogs}
          path="/blogs/book-guide-why-you-should-need-a-guide-for-trekking"
        />
        <Route component={BookGuide} path="/book-guide" />
        <Route component={ContactUs} path="/contact-us" />
        <Route component={AboutUs} path="/about-us" />
        <Route component={PlacesForTrek} path="/places-for-trek" />
        <Route component={Treks} path="/treks" />
        <Route component={Home} path="/" />
      </Switch>
      </>
  );
}

export default App;
