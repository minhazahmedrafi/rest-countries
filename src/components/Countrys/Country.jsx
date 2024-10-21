import { useState } from "react";
import "./country.css";
import CountryDetails from "./CountryDetails";
const Country = ({ country, handleVcountry, handleVisitedFlags }) => {
  const { name, flags, area, population, cca3 } = country;
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithParam = () => {
    handleVcountry(country);
    handleVisitedFlags(country.flags.png);
  };

  return (
    <>
      <div className={`country ${visited && "visited"}`}>
        <h4>Name: {name?.common}</h4>
        <img src={flags.png} alt="" />
        <p>Population: {population}</p>
        <p>Area: {area}</p>
        <p>
          <small>Country Code: {cca3}</small>
        </p>
        <br />
        <button onClick={passWithParam} className="visitBtn ">
          Mark Visited
        </button>
        <br />
        <button className="visitBtn" onClick={handleVisited}>
          {visited ? "Going" : "Visited"}
        </button>
        <br />
        {visited ? " I have visited this country" : " I want to visit"}
        <hr />
        <CountryDetails
          country={country}
          handleVcountry={handleVcountry}
          handleVisitedFlags={handleVisitedFlags}
        ></CountryDetails>
      </div>
    </>
  );
};

export default Country;
