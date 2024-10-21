import React from "react";
import CountrySpec from "./CountrySpec";

const CountryDetails = ({ country, handleVcountry, handleVisitedFlags }) => {
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      <CountrySpec
        country={country}
        handleVcountry={handleVcountry}
        handleVisitedFlags={handleVisitedFlags}
      ></CountrySpec>
    </div>
  );
};

export default CountryDetails;
