import { useState, useEffect } from "react";
import { getAllCountries } from "./services/countryService";
import MapView from "./components/MapView";
import ListView from "./components/ListView";
import ViewSwitch from "./components/ViewSwitch";

function App() {
  const [countries, setCountries] = useState([]);
  const [view, setView] = useState("map"); 
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const toggleView = () => {
    setView((prev) => (prev === "map" ? "list" : "map"));
  };

  const handleSelectCountry = (country) => {
    setSelectedCountry(country);

    //gerer country cselected 
  };

  return (
    <div className="App container my-4">
      <h1>React Geo App By Ninah</h1>
      <ViewSwitch view={view} onToggle={toggleView} />
      {view === "map" ? (
        <MapView countries={countries} onSelectCountry={handleSelectCountry} />
      ) : (
        <ListView countries={countries} onSelectCountry={handleSelectCountry} />
      )}
    </div>
  );
}

export default App;
