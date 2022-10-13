const sightings = [10, 13, 15, 22, 34, 23, 55, 78, 44, 31];
const temperature = [33, 21, 22, 24, 25, 26, 26, 21, 31, 44];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
];

const lineChartOptions = {
  chart: {
    type: "line",
    height: "100%",
  },
  series: [
    {
      name: "sightings",
      data: sightings,
    },
    {
      name: "temperature",
      data: temperature,
    },
  ],
  xaxis: {
    category: months,
  },
};

const lineChart = new ApexCharts(
  document.querySelector("#line-chart"),
  lineChartOptions
);
lineChart.render();

const barChartOptions = {
  chart: {
    type: "bar",
    height: "100%",
  },
  series: [
    {
      name: "sightings",
      data: sightings,
    },
    {
      name: "temperature",
      data: temperature,
    },
  ],
  xaxis: {
    category: months,
  },
};

const barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();
