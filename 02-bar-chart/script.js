const options = {
    chart:{
        type:"bar",
        height:"100%"
    },
    series:[
        {
            name:"Revenue",
            data:[12000,75000,80000,450000,330000,445550]
        },
        {
            name:"Number of male residents",
            data:[175000,188000,190000,185000,190760,540000]
        },
        {
            name:"Number of female residents",
            data:[190000,190000,210000,210000,200000,54545]
        }
    ],
    xaxis:{
        "categories":["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
    }
   
}

let chart = new ApexCharts(document.querySelector("#chart"),options);

chart.render();