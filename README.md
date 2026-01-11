# Mental Health Access Disparities in California 🧠

An interactive data visualization dashboard analyzing mental health resource accessibility across different income levels in California.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3-blue)
![Vite](https://img.shields.io/badge/Vite-7.3-purple)

## 📊 Project Overview

This project transforms a data science analysis from UCSD's COGS108 course into an interactive web application. It explores how access to mental health care—including therapists, facilities, and insurance coverage—differs between high-income and low-income neighborhoods across California.

### Research Question
**How does access to mental health care differ between high-income and low-income neighborhoods across California?**

## ✨ Features

- **Interactive Filters**: Filter data by county and population density
- **Real-time Statistics**: Dynamic stat cards showing key metrics
- **Data Visualizations**:
  - Geographic distribution table of top counties
  - Scatter plot: Psychologists per 100k vs. Area Median Income
  - Bar chart: Healthcare products availability by county
  - Stacked bar chart: Income distribution across counties
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Key Findings**: Highlighted insights from the analysis

## 🗂️ Data Sources

1. **California Zip Codes** - Population and geographic data
2. **2023 American Community Survey** - Median household income data
3. **California Board of Psychology** - Licensed psychologist data
4. **Covered California** - Insurance product availability
5. **California Licensed MHRCs and PHFs** - Mental health facility data
6. **California County Income Limits** - Area Median Income (AMI) data

## 🛠️ Tech Stack

- **Frontend**: React 18.3 with Vite
- **Data Visualization**: Recharts
- **Styling**: Custom CSS with CSS Variables
- **Data Processing**: Python (pandas, numpy)
- **Deployment**: Vercel / Netlify

## 📈 Key Findings

1. **Access Disparity**: 1,078 zip codes (59.8%) have zero licensed psychologists
2. **Income Correlation**: Strong positive correlation between median household income and mental health resource availability
3. **Insurance Coverage**: All zip codes have some insurance products, but variety differs significantly

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+ (for data processing)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/mental-health-dashboard.git
cd mental-health-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

## 📁 Project Structure

```
mental-health-dashboard/
├── public/
│   └── data/              # Processed JSON data files
├── src/
│   ├── components/        # React components
│   │   ├── StatCards.jsx
│   │   ├── FilterPanel.jsx
│   │   ├── CountyMap.jsx
│   │   ├── PsychologistChart.jsx
│   │   ├── ProductsChart.jsx
│   │   └── IncomeDistribution.jsx
│   ├── App.jsx           # Main application component
│   ├── App.css           # Global styles
│   └── main.jsx          # Application entry point
├── process_data.py       # Python script to process raw data
└── package.json
```

## 💻 Local Development

To process the raw data:

```bash
python3 process_data.py
```

This will generate the JSON files needed by the application in `public/data/`.

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repo for continuous deployment

## 📊 Data Processing Pipeline

1. Load raw CSV/TSV data files
2. Filter and clean data (psychologists in CA, valid zip codes)
3. Aggregate by zip code and county
4. Calculate derived metrics (psychologists per 100k population)
5. Export to JSON format for frontend consumption

## 🎨 Design Decisions

- **Color Scheme**: Professional blue gradient with semantic colors for alerts
- **Responsive**: Mobile-first design approach
- **Accessibility**: High contrast ratios and semantic HTML
- **Performance**: Lazy loading and optimized bundle size

## 🤝 Contributing

This is an academic project, but suggestions are welcome! Feel free to open issues or submit pull requests.

## 📝 License

This project is part of academic coursework at UCSD. Data sources have their own respective licenses.

## 👤 Author

**Duong**
- UCSD - Mathematics & Computer Science (B.S. 2025)
- Project for COGS108 - Data Science in Practice

## 🙏 Acknowledgments

- UCSD COGS108 Course Staff
- California Department of Public Health
- U.S. Census Bureau
- Covered California

---

Built with ❤️ for better mental health access understanding
