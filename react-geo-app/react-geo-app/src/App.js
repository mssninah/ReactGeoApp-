import { useState, useEffect } from "react"
import MapView from "./components/MapView"
import ListView from "./components/ListView"
import { getAllCountries } from "./services/countryService"

function App() {
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [view, setView] = useState("map")

  useEffect(() => {
    getAllCountries()
      .then(setCountries)
      .catch(console.error)
  }, [])

  const handleSelectCountry = (country) => {
    setSelectedCountry(country)
    setView("map")
  }

  const toggleView = () => {
    setView(view === "map" ? "list" : "map")
  }

  return (
    <div className="container my-4">
      <h1>React Geo App By Ninah</h1>
      <button onClick={toggleView} className="btn btn-secondary mb-3">
        Switch view
      </button>

      {view === "map" ? (
        <MapView countries={countries} selectedCountry={selectedCountry} />
      ) : (
        <ListView countries={countries} onSelectCountry={handleSelectCountry} />
      )}
    </div>
  )
}

export default App
