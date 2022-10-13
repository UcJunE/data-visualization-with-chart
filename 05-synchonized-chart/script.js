const reach = [5000,17000,2400,25000,14000,55000];
const campaign = [3,5,1,8,4,10];
const months = ["Jan","Feb","Mar","Apr","May","June"];

const campaignChartOptions = {
  chart:{
    id:"campaign",
    type:"line",
    height:"100%",
    group:"campaign-charts"
  },
  series:[
    {
      name:"campaign",
      data:campaign
    },
  ],
  xaxis:{
    categories:months
  },
  yaxis:{
    labels:{
      minWidth:40
    }
  }
};

const campaignChart = new ApexCharts(document.querySelector("#campaign-chart"),campaignChartOptions);
campaignChart.render();

const reachChartOptions = {
  chart:{
    id:"reach",
    type:"line",
    height:"100%",
    group:"campaign-charts"
  },
  series:[
    {
      name:"reach",
      data:reach
    },
  ],
  xaxis:{
    categories:months
  },
  yaxis:{
    labels:{
      minWidth:40
    }
  }
};

const reachChart = new ApexCharts(document.querySelector("#reach-chart"),reachChartOptions);
reachChart.render();

//things to take note in synchonized chart .
//1 . assign unique id for each data set .
//2 . grouping the data set with keyword "group" that gonna be synchonized together.
//3 . and make sure "yaxis.labels.minWidth" is set for both chart.
//4 . only data with same type aka line or bar can be synchonized.

// in order to make both chart appear on the same column 
//1 .  enclose the both div that represent the data with a div.
//2 . change the display type to flex .
//3 . flex-basis to 100
//4 . flex :1 
