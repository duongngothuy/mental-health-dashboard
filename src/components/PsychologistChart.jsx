import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts'

function PsychologistChart({ data }) {
  // Filter out null AMI values and prepare data
  const chartData = data
    .filter(d => d.AMI && d.psychologists_per_100k)
    .map(d => ({
      county: d.county,
      income: d.AMI,
      psychologists: d.psychologists_per_100k
    }))

  console.log('Chart data:', chartData);  

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ScatterChart margin={{ top: 20, right: 30, bottom: 60, left: 60 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="income" 
          type="number"
          name="Area Median Income"
        >
          <Label value="Area Median Income ($)" position="bottom" offset={10} />
        </XAxis>
        <YAxis 
          dataKey="psychologists" 
          type="number"
          name="Psychologists per 100k"
        >
          <Label value="Psychologists per 100k" angle={-90} position="left" offset={20} />
        </YAxis>
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              return (
                <div className="custom-tooltip">
                  <p className="tooltip-county">{data.county}</p>
                  <p>Income: ${data.income.toLocaleString()}</p>
                  <p>Psychologists: {data.psychologists.toFixed(2)} per 100k</p>
                </div>
              )
            }
            return null
          }}
        />
        <Scatter 
          data={chartData} 
          fill="#8884d8" 
          fillOpacity={0.6}
        />
      </ScatterChart>
    </ResponsiveContainer>
  )
}

export default PsychologistChart
