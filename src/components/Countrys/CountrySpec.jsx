import React from "react";

const CountrySpec = ({ country, handleVcountry, handleVisitedFlags }) => {
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountrySpec;
