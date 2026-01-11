import './CountyMap.css'

function CountyMap({ data }) {
  // Sort counties by psychologists per 100k for the table
  const sortedData = [...data]
    .sort((a, b) => (b.psychologists_per_100k || 0) - (a.psychologists_per_100k || 0))
    .slice(0, 20)

  return (
    <div className="county-map-container">
      <div className="map-description">
        <p>Top 20 Counties by Mental Health Resource Density</p>
      </div>
      
      <div className="county-table-wrapper">
        <table className="county-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>County</th>
              <th>Population</th>
              <th>Psychologists</th>
              <th>Per 100k</th>
              <th>AMI</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map((county, idx) => (
              <tr key={county.county}>
                <td className="rank">{idx + 1}</td>
                <td className="county-name">{county.county}</td>
                <td>{county.population?.toLocaleString() || 'N/A'}</td>
                <td>{county.psychologist_count || 0}</td>
                <td className="density">
                  {county.psychologists_per_100k ? county.psychologists_per_100k.toFixed(2) : 'N/A'}
                </td>
                <td>${county.AMI?.toLocaleString() || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="map-legend">
        <h4>Understanding the Data</h4>
        <ul>
          <li><strong>Per 100k:</strong> Number of psychologists per 100,000 population</li>
          <li><strong>AMI:</strong> Area Median Income</li>
          <li><strong>Trend:</strong> Higher income counties generally show more mental health resources</li>
        </ul>
      </div>
    </div>
  )
}

export default CountyMap
