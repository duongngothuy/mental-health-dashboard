import './FilterPanel.css'

function FilterPanel({ counties, selectedCounty, setSelectedCounty, selectedDensity, setSelectedDensity }) {
  return (
    <div className="filter-panel">
      <div className="filter-group">
        <label htmlFor="county-select">Filter by County:</label>
        <select
          id="county-select"
          value={selectedCounty}
          onChange={(e) => setSelectedCounty(e.target.value)}
        >
          <option value="all">All Counties</option>
          {counties.map(county => (
            <option key={county} value={county}>{county}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label htmlFor="density-select">Population Density:</label>
        <select
          id="density-select"
          value={selectedDensity}
          onChange={(e) => setSelectedDensity(e.target.value)}
        >
          <option value="all">All Densities</option>
          <option value="Low Density">Low Density</option>
          <option value="Medium Density">Medium Density</option>
          <option value="High Density">High Density</option>
        </select>
      </div>

      <button 
        className="reset-btn"
        onClick={() => {
          setSelectedCounty('all')
          setSelectedDensity('all')
        }}
      >
        Reset Filters
      </button>
    </div>
  )
}

export default FilterPanel
