import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import epingleImg from "../assets/img/epingle.png"

const epingleIcon = new L.Icon({
  iconUrl: epingleImg,
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
  shadowUrl: null,
})

function FlyToCountry({ country }) {
  const map = useMap()

  useEffect(() => {
    if (country && country.latlng && country.latlng.length === 2) {
      map.flyTo([country.latlng[0], country.latlng[1]], 5)
    }
  }, [country, map])

  return null
}

function MapView({ countries, selectedCountry }) {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        {countries.map((country, index) => {
          const latlng = country.latlng
          if (!latlng || latlng.length !== 2) return null
          return (
            <Marker key={index} position={[latlng[0], latlng[1]]} icon={epingleIcon}>
              <Popup>
                <div>
                  <img
                    src={country.flags.png}
                    alt={`Drapeau de ${country.name.common}`}
                    style={{
                      width: 60,
                      height: 40,
                      objectFit: "cover",
                      marginBottom: 5,
                    }}
                  />
                  <br />
                  <strong>{country.name.common}</strong>
                  <br />
                  Capital: {country.capital ? country.capital[0] : "Tsisy"}
                  <br />
                  Population: {country.population.toLocaleString()}
                </div>
              </Popup>
            </Marker>
          )
        })}
        <FlyToCountry country={selectedCountry} />
      </MapContainer>
    </div>
  )
}

export default MapView
