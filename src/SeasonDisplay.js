import React from "react";

const seasonConfig = {
   summer: {
      text: "Let's hit the Beach",
      iconName: "sun",
   },
   winter: {
      text: "Burr, It is Chilly",
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
   // console.log(season);
   // const text =
   //    season === "winter" ? "Burr, It is Chilly" : "Let's hit the beach";
   // const icon = season === "winter" ? "snowflake" : "sun";
   // console.log(icon);

   const { text, iconName } = seasonConfig[season];

   return (
      <div>
         <i className={`${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`${iconName} icon`} />
      </div>
   );
};

export default SeasonDisplay;
