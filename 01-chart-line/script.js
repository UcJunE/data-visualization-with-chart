let options ={
    "chart":{
        "type":"line", // you can choose bar or line , just change the type "line" if i wanted line.
        "height":"100%"
    },
"series":[
    {
        "name":"Sightings",
        "data":[10,13,15,22,34,25,61,99,100,120]
    },{
        "name":"temperature",
        "data":[33,21,24,25,26,26,21,100,120]
    },
],
"xaxis":{
    "categories":["Jan","Feb","Mar","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec"]
}
}

let chart = new ApexCharts(document.querySelector("#chart"),options);

chart.render();