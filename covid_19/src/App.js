import React, { useState, useEffect } from "react";
import "./App.css";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");

  useEffect(() => {
    // the code inside here will run once
    // when the component loads and not again after

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // rwanda, burundu
            value: country.countryInfo.iso2, // rw, us, ug
          }));

          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const onCountryChange = async (e) => {
    const countryCode = e.target.value;
    console.log("hhhhhhhhhhhhhhhhhhhhhh>>>>>>>>>>>>>>>>....", countryCode);
    setCountry(countryCode);
  };

  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldWide">WorldWide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        {/* header */}
        {/* Title + select input ropdown field */}

        <div className="app__stats">
          {/* InfoBoxes */}

          <InfoBox title="CoronaVirus cases" total={2000} cases={20} />

          {/* InfoBoxes */}

          <InfoBox title="Recovered" total={3000} cases={20} />

          {/* InfoBoxes */}

          <InfoBox title="Deaths" total={100} cases={20} />
        </div>

        {/* Table */}
        {/* Graph */}

        {/* Map */}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live Case by Country</h3>
        </CardContent>
        {/* Table */}
        <h3>worldwide new case</h3>
        {/* graph */}
      </Card>
    </div>
  );
}

export default App;
