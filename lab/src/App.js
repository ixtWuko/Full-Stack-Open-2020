import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      console.log(response);
      setCountries(response.data);
    });
  };
  useEffect(hook, []);

  const [filterString, setFilterString] = useState("");
  const handleFilter = (event) => {
    setFilterString(event.target.value);
  };

  const countriesToShow =
    filterString.length === 0
      ? countries
      : countries.filter((country) =>
          country.name.toLowerCase().includes(filterString)
        );
  console.log(countriesToShow);

  const Filter = (props) => {
    return (
      <form>
        find countries{" "}
        <input value={props.filterString} onChange={props.handleFunction} />
      </form>
    );
  };
  const ShowCountries = ({ countriesToShow }) => {
    if (countriesToShow.length === 0) {
      return <p></p>;
    }
    if (countriesToShow.length === 1) {
      const country = countriesToShow[0];
      return (
        <div>
          <h2>{country.name}</h2>
          <p>capital {country.capital}</p>
          <p>population {country.population}</p>
          <h3>languages</h3>
          <ul>
            {country.languages.map((language) => (
              <li>{language.name}</li>
            ))}
          </ul>
          <img src={country.flag}></img>
        </div>
      );
    }
    if (countriesToShow.length < 10) {
      return (
        <div>
          {countriesToShow.map((country) => (
            <p>{country.name}</p>
          ))}
        </div>
      );
    } else {
      return <p>Too many matches, specify another filter.</p>;
    }
  };

  return (
    <div>
      <div>
        <Filter filterString={filterString} handleFunction={handleFilter} />
      </div>
      <div>
        <ShowCountries countriesToShow={countriesToShow} />
      </div>
    </div>
  );
};

export default App;
