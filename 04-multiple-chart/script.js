const options = {
  chart: {
    type: "pie",
    height: "100%",
  },
  // each series represents one set of data
  series: [21, 23, 22, 27, 45],

  // what is are the labels along the x-axis (horizontal line)
  labels: ["English", "Mathematics", "Mother Tongue", "Science", "PE"],
  
};

let chart = new ApexCharts(document.querySelector("#chart"), options);

chart.render();
