// Link CSS file
import "./SeasonDisplay.css";

import React from "react";

const seasonConfig = {
   summer: {
      text: "Let's hit the Beach! (SUMMER)",
      iconName: "sun",
   },
   winter: {
      text: "It is Chilly! (WINTER)",
      iconName: "snowflake",
   },
};

const getSeason = (lat, months) => {
   if (months > 2 && months < 9) {
      // lat>0 then Northern Hemisphere else Southern Hemisphere
      return lat > 0 ? "summer" : "winter";
   } else {
      return lat > 0 ? "winter" : "summer";
   }
};

const SeasonDisplay = (props) => {
   const season = getSeason(props.lat, new Date().getMonth());

   const { text, iconName } = seasonConfig[season];

   return (
      <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
      </div>
   );
};

export default SeasonDisplay;
