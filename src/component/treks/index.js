import React, { useState, useEffect } from "react";
import Helmet from "react-helmet";
import Base from '../base';
import TreksBannner from './TreksBanner';
import TreksGrid from './TreksGrid';
import TreksInfo from './TreksInfo';

export default function(props){
    console.log(props);
    let [trek, setTrek] = useState([]);
    if (props.staticContext) {
      for (const t of props.staticContext.body.treks) {
        if (t.url === props.history.location.pathname) {
          trek = t;
        }
      }
    }

    console.log(trek);
    useEffect(async () => {
      const response = await (
        await fetch(
          "https://ysn2atituc.execute-api.us-east-1.amazonaws.com/dev/treks"
        )
      ).json();
    //   const trek = response.body.treks.find(
    //     (trek) => (trek.url = window.location.pathname)
    //   );
      let trek = null;
      for (const t of response.body.treks) {
          if (t.url === window.location.pathname) {
            trek = t;
          }
      }
      console.log(trek, '');
      setTrek(trek);
    }, []);
    let path = '';
    return (
      <div>
        <Helmet>
          <title>{trek.meta_title}</title>
          <meta name="title" title={trek.meta_title} />
          <meta name="description" content={trek.meta_desc} />
          <meta name="keywords" content={trek.meta_keywords} />
          <meta property="og:title" content={trek.meta_title} />
          <meta property="og:url" content={path} />
          <meta property="og:type" content="website" />
          <meta property="og:description" content={trek.meta_desc} />
          <meta property="og:image" content={trek.background_image} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:title" content={trek.meta_title} />
          <meta name="twitter:description" content={trek.meta_desc} />
          <meta name="twitter:url" content={path} />
          <meta name="twitter:image" content={trek.background_image} />
        </Helmet>
        <Base>
          <TreksBannner title={trek.title} banner_bg={trek.background_image} />
          <TreksGrid
            duration={trek.duration}
            difficulty={trek.difficulty}
            altitude={trek.altitude}
            time_to_visit={trek.time_to_visit}
          />
          <TreksInfo
            title={trek.title}
            content={trek.content}
            path={`${props.history.location.pathname}`}
          />
        </Base>
      </div>
    );
}