import React ,{ useState, useEffect} from 'react';
import './App.css';
import {MenuItem, FormControl, Select,} from "@material-ui/core";

function App() {

  const[countries, setCountries] = useState([])

  useEffect(() => {
    // the code inside here will run once 
    // when the component loads and not again after

    const getCountriesData =async () => {
      await fetch ("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) =>{
        const countries = data.map((country) => ({
          name: country.country, // rwanda, burundu
          value: country.countryInfo.iso2 // rw, us, ug
        }));

        setCountries(countries);

      });
    };

    getCountriesData();

  },[]);

  return (
    <div className="App">

    <div className="app__header">
      <h1>COVID-19 TRACKER</h1>
      <FormControl className="app__dropdown">
        <Select variant="outlined" value="abc">
          {countries.map((country) =>(
            <MenuItem value={country.value}>{country.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
      {/* header */}
      {/* Title + select input ropdown field */}

      {/* InfoBoxes */}
      {/* InfoBoxes */}
      {/* InfoBoxes */}

      {/* Table */}
      {/* Graph */}

      {/* Map */}
    </div>
  );
}

export default App;
