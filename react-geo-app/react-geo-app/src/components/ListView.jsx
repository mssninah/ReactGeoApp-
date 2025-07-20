import { useState } from "react"

function ListView({ countries, onSelectCountry }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [query, setQuery] = useState("")
  const pageSize = 10

  const filtered = countries.filter((country) => {
    const name = country.name?.common?.toLowerCase() || ""
    const capital =
      Array.isArray(country.capital) && country.capital[0]
        ? country.capital[0].toLowerCase()
        : ""
    return name.includes(query.toLowerCase()) || capital.includes(query.toLowerCase())
  })

  const totalPages = Math.ceil(filtered.length / pageSize)

  const paginated = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const prev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const next = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Recherche par nom ou capitale"
        value={query}
        onChange={handleSearch}
      />

      <div className="table-responsive" style={{ maxHeight: "500px", overflowY: "auto" }}>
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Drapeau</th>
              <th>Pays</th>
              <th>Capitale</th>
              <th>Population</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((country, idx) => (
              <tr
                key={idx}
                onClick={() => onSelectCountry(country)}
                style={{ cursor: "pointer" }}
              >
                <td>
                  <img
                    src={country.flags.png}
                    alt={country.name.common}
                    style={{ width: 40, height: 25 }}
                  />
                </td>
                <td>{country.name.common}</td>
                <td>{country.capital ? country.capital[0] : "tsisy"}</td>
                <td>{country.population.toLocaleString()}</td>
                 <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onSelectCountry(country)}
                  >
                    Voir sur la carte
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="my-3 text-center">
        <button className="btn btn-sm btn-secondary mx-1" onClick={prev} disabled={currentPage === 1}>
          Précédent
        </button>
        <span>Page {currentPage} / {totalPages || 1}</span>
        <button className="btn btn-sm btn-secondary mx-1" onClick={next} disabled={currentPage === totalPages}>
          Suivant
        </button>
      </div>
    </div>
  )
}

export default ListView
