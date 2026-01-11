import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label } from 'recharts'

function ProductsChart({ data }) {
  const chartData = data
    .filter(d => d.Total_Products)
    .map(d => ({
      county: d.county.length > 15 ? d.county.substring(0, 15) + '...' : d.county,
      fullCounty: d.county,
      products: d.Total_Products
    }))
    .sort((a, b) => b.products - a.products)

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart 
        data={chartData}
        margin={{ top: 20, right: 30, bottom: 60, left: 60 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis 
          dataKey="county" 
          angle={-45}
          textAnchor="end"
          height={100}
        />
        <YAxis>
          <Label value="Avg Healthcare Products" angle={-90} position="left" offset={20} />
        </YAxis>
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              return (
                <div className="custom-tooltip">
                  <p className="tooltip-county">{data.fullCounty}</p>
                  <p>Products: {data.products.toFixed(2)}</p>
                </div>
              )
            }
            return null
          }}
        />
        <Bar dataKey="products" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ProductsChart
