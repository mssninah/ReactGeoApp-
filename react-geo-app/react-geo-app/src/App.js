import { useState, useEffect } from "react";
import { getAllCountries } from "./services/countryService";
import MapView from "./components/MapView";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getAllCountries()
      .then((data) => {
        console.log("Pays azo=> ", data);  
        setCountries(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="App">
      <h1>React Geo App By ninah</h1>
      <MapView countries={countries}/>
    </div>
  );
}

export default App;
