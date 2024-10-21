import React, { useEffect, useState } from "react";
import Country from "./Country";
import "./countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [vCountries, setVcountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  const handleVcountry = (vCountry) => {
    const newVcountries = [...vCountries, vCountry];
    setVcountries(newVcountries);
  };

  const handleVisitedFlags = (flag) => {
    const newVisitedFlags = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlags);
  };
  return (
    <>
      <div>
        <h1 style={{ textAlign: "center", margin: "10px 0px" }}>
          Rest Countrys
        </h1>
        <div>
          <h5>Visited Countries {vCountries.length}</h5>
          <ul>
            {vCountries.map((country, idx) => (
              <li key={idx}>{country.name.common}</li>
            ))}
          </ul>
        </div>
        <div className="flagContainer">
          {visitedFlags.map((flag, idx) => (
            <img key={idx} src={flag} alt="" />
          ))}
        </div>
        <div className="countryContainer">
          {countries.map((country) => (
            <Country
              handleVcountry={handleVcountry}
              key={country.cca2}
              country={country}
              handleVisitedFlags={handleVisitedFlags}
            ></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
