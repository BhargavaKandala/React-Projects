import { useState } from 'react'
import './App.css';
import ReactApexChart from 'react-apexcharts';

function ApexChart() {
  const [state] = useState({
    series: [{
      name: 'New Year',
      type: 'column',
      data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
    }, {
      name: 'Diwali',
      type: 'area',
      data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
    }, {
      name: 'Pongal',
      type: 'line',
      data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
    }],
    options: {
      chart: { type: 'line', stacked: false },
      stroke: { width: [0, 2, 5], curve: 'smooth' },
      plotOptions: { bar: { columnWidth: '50%' } },
      fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
          inverseColors: false,
          shade: 'light',
          type: "vertical",
          opacityFrom: 0.85,
          opacityTo: 0.55,
          stops: [0, 100, 100, 100]
        }
      },
      labels: ['01/01/2003','02/01/2003','03/01/2003','04/01/2003','05/01/2003','06/01/2003','07/01/2003','08/01/2003','09/01/2003','10/01/2003','11/01/2003'],
      markers: { size: 0 },
      xaxis: { type: 'category' },
      yaxis: { title: { text: 'Points' } },
      tooltip: {
        enabled: true,
        shared: true,
        followCursor: true,
        intersect: false,
        y: {
          formatter: (val) => (typeof val !== "undefined" ? val.toFixed(2) + " pts" : val)
        },
        custom: function({ series, seriesIndex, dataPointIndex, w }) {
          // x label for current point
          const xLabel = (w.globals.labels && w.globals.labels[dataPointIndex]) || '';
          let html = `<div class="custom-tooltip"><div class="tt-x">${xLabel}</div>`;
          w.config.series.forEach((s, i) => {
            const value = (series[i] && series[i][dataPointIndex] !== undefined) ? series[i][dataPointIndex] : '-';
            html += `<div class="tt-row"><span class="tt-name">${s.name}</span><span class="tt-val">${value}</span></div>`;
          });
          html += `</div>`;
          return html;
        }
      },
    }
  })

  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" height={600} width={600}/>
    </div>
  )
}

function App() {
   return <ApexChart />
};
export default App;
