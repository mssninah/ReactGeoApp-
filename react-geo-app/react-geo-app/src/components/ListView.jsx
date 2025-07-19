function ListView({ countries, onSelectCountry }) {
  return (
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
          {countries.map((country, idx) => (
            <tr key={idx} onClick={() => onSelectCountry(country)} style={{ cursor: "pointer" }}>
              <td>
                <img
                  src={country.flags.png}
                  alt={`Drapeau  ${country.name.common}`}
                  style={{ width: 40, height: 25, objectFit: "cover" }}
                />
              </td>
              <td>{country.name.common}</td>
              <td>{country.capital ? country.capital[0] : "tsisy"}</td>
              <td>{country.population.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ListView;