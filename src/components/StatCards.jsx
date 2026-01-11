import './StatCards.css'

function StatCards({ summary, filteredData }) {
  if (!summary) return null

  const filteredPsychologists = filteredData.reduce((sum, zip) => sum + zip.psychologist_count, 0)
  const filteredAvgPer100k = filteredData.length > 0
    ? filteredData.reduce((sum, zip) => sum + zip.psychologists_per_100k, 0) / filteredData.length
    : 0

  return (
    <div className="stat-cards">
      <div className="stat-card">
        
        <div className="stat-content">
          <h3>Zip Codes</h3>
          <p className="stat-value">{filteredData.length}</p>
          <p className="stat-label">Analyzed</p>
        </div>
      </div>

      <div className="stat-card">
        
        <div className="stat-content">
          <h3>Psychologists</h3>
          <p className="stat-value">{filteredPsychologists.toLocaleString()}</p>
          <p className="stat-label">Licensed in CA</p>
        </div>
      </div>

      <div className="stat-card">
        
        <div className="stat-content">
          <h3>Average Density</h3>
          <p className="stat-value">{filteredAvgPer100k.toFixed(1)}</p>
          <p className="stat-label">per 100k population</p>
        </div>
      </div>

      <div className="stat-card alert">
        
        <div className="stat-content">
          <h3>No Access</h3>
          <p className="stat-value">
            {filteredData.filter(z => z.psychologist_count === 0).length}
          </p>
          <p className="stat-label">Zip codes without psychologists</p>
        </div>
      </div>
    </div>
  )
}

export default StatCards
