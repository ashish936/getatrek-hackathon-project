import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={3}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#e2e2e2"
    {...props}
    style={{width:'100%',height:'100%'}}
  >
    <rect x="26" y="325" rx="2" ry="2" width="100%" height="14" />
    <rect x="25" y="350" rx="2" ry="2" width="100%" height="14" />
    <rect x="24" y="56" rx="2" ry="2" width="100%" height="250" />
  </ContentLoader>
);

export default MyLoader;
