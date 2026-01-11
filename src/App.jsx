import { useState, useEffect } from 'react'
import './App.css'
import StatCards from './components/StatCards'
import CountyMap from './components/CountyMap'
import PsychologistChart from './components/PsychologistChart'
import ProductsChart from './components/ProductsChart'
import IncomeDistribution from './components/IncomeDistribution'
import FilterPanel from './components/FilterPanel'

function App() {
  const [zipData, setZipData] = useState([])
  const [countyData, setCountyData] = useState([])
  const [summary, setSummary] = useState(null)
  const [incomeData, setIncomeData] = useState([])
  const [loading, setLoading] = useState(true)
  
  // Filters
  const [selectedCounty, setSelectedCounty] = useState('all')
  const [selectedDensity, setSelectedDensity] = useState('all')

  useEffect(() => {
    // Load all data
    Promise.all([
      fetch('/data/zip_data.json').then(res => res.json()),
      fetch('/data/county_data.json').then(res => res.json()),
      fetch('/data/summary.json').then(res => res.json()),
      fetch('/data/income_distribution.json').then(res => res.json())
    ]).then(([zip, county, summ, income]) => {
      setZipData(zip)
      setCountyData(county)
      setSummary(summ)
      setIncomeData(income)
      setLoading(false)
    }).catch(err => {
      console.error('Error loading data:', err)
      setLoading(false)
    })
  }, [])

  // Filter data based on selections
  const filteredZipData = zipData.filter(zip => {
    const countyMatch = selectedCounty === 'all' || zip.county === selectedCounty
    const densityMatch = selectedDensity === 'all' || zip.income_category === selectedDensity
    return countyMatch && densityMatch
  })

  const filteredCountyData = selectedCounty === 'all' 
    ? countyData 
    : countyData.filter(c => c.county === selectedCounty)

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading Mental Health Data...</p>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <h1>Mental Health Access Disparities in California</h1>
          <p className="subtitle">
            Interactive analysis of mental health resources across income levels
          </p>
        </div>
      </header>

      <main className="main-content">
        <FilterPanel
          counties={[...new Set(zipData.map(z => z.county))].sort()}
          selectedCounty={selectedCounty}
          setSelectedCounty={setSelectedCounty}
          selectedDensity={selectedDensity}
          setSelectedDensity={setSelectedDensity}
        />

        <StatCards summary={summary} filteredData={filteredZipData} />

        <div className="dashboard-grid">
          <div className="chart-section full-width">
            <h2>Geographic Distribution</h2>
            <CountyMap data={filteredCountyData} />
          </div>
        <div className="chart-section">
          <h2>Psychologists per 100k Population vs. Income</h2>
          <PsychologistChart data={filteredCountyData} />
        </div>

          <div className="chart-section">
            <h2>Healthcare Products by County</h2>
            <ProductsChart data={filteredCountyData.slice(0, 20)} />
          </div>

          <div className="chart-section full-width">
            <h2>Income Distribution Across Counties</h2>
            <IncomeDistribution data={incomeData.slice(0, 15)} />
          </div>
        </div>

        <section className="findings">
          <h2>Key Findings</h2>
          <div className="findings-grid">
            <div className="finding-card">
              <h3>Access Disparity</h3>
              <p>
                {summary?.zip_with_no_psychologists} zip codes ({((summary?.zip_with_no_psychologists / summary?.total_zip_codes) * 100).toFixed(1)}%) 
                have zero licensed psychologists, highlighting significant access gaps.
              </p>
            </div>
            <div className="finding-card">
              <h3>Income Correlation</h3>
              <p>
                Higher-income counties show significantly more mental health resources per capita, 
                with a positive correlation between median household income and psychologist availability.
              </p>
            </div>
            <div className="finding-card">
              <h3>Insurance Coverage</h3>
              <p>
                All California zip codes have access to some insurance products, but the variety 
                and quality of coverage options vary significantly by region.
              </p>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>
            Data Sources: California Board of Psychology, 2023 American Community Survey, 
            Covered California, California Licensed MHRCs and PHFs
          </p>
          <p className="credit">
            Built by Duong | UCSD COGS108 Project | 2025
          </p>
        </footer>
      </main>
    </div>
  )
}

export default App
