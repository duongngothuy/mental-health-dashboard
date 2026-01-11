import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label } from 'recharts'

function IncomeDistribution({ data }) {
  const chartData = data.map(d => ({
    county: d.County.length > 15 ? d.County.substring(0, 15) + '...' : d.County,
    fullCounty: d.County,
    ami: d.AMI,
    veryLow: d.VLI_4,
    low: d.LI_4,
    moderate: d.MOD_4
  }))

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart 
        data={chartData}
        margin={{ top: 20, right: 30, bottom: 80, left: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="county" 
          angle={-45}
          textAnchor="end"
          height={120}
        />
        <YAxis>
          <Label value="Income Limit ($)" angle={-90} position="left" offset={20} />
        </YAxis>
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              return (
                <div className="custom-tooltip">
                  <p className="tooltip-county">{data.fullCounty}</p>
                  <p>AMI: ${data.ami?.toLocaleString()}</p>
                  <p style={{color: '#8884d8'}}>Very Low: ${data.veryLow?.toLocaleString()}</p>
                  <p style={{color: '#82ca9d'}}>Low: ${data.low?.toLocaleString()}</p>
                  <p style={{color: '#ffc658'}}>Moderate: ${data.moderate?.toLocaleString()}</p>
                </div>
              )
            }
            return null
          }}
        />
        <Legend wrapperStyle={{ paddingTop: '20px' }} />
        <Bar dataKey="veryLow" name="Very Low Income" fill="#8884d8" />
        <Bar dataKey="low" name="Low Income" fill="#82ca9d" />
        <Bar dataKey="moderate" name="Moderate Income" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default IncomeDistribution
