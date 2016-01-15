 google.charts.load('current', {
     'packages': ['corechart']
 });
 google.charts.setOnLoadCallback(drawChart);


 var dataset = [{
         name: "Donald Trump",
         anger: 19,
         negative: 52,
         cheerfulness: 143
     },
     {
         name: "Mikhail Kornienko",
         anger: 0,
         negative: 0,
         cheerfulness: 0
     },
     {
         name: "Scott Kelly",
         anger: 1,
         negative: 9,
         cheerfulness: 67
     },
     {
         name: "Sergey Volkov",
         anger: 0,
         negative: 0,
         cheerfulness: 15
     },
     {
         name: "Yuri Malenchenko",
         anger: 0,
         negative: 0,
         cheerfulness: 0
     },
     {
         name: "Timothy Kopra",
         anger: 0,
         negative: 5,
         cheerfulness: 78
     },
     {
         name: "Timothy Peake",
         anger: 2,
         negative: 4,
         cheerfulness: 151
     }]

 function addChart(data) {
     var anchor = document.getElementById("collection")
     var personElement = document.createElement("div")
     anchor.appendChild(personElement)

     var newdata = google.visualization.arrayToDataTable([
          ['Person', data.name],
          ['Anger', data.anger],
          ['Negative', data.negative],
          ['Cheerfulness', data.cheerfulness]
        ]);

     var options = {
         title: data.name + ' Sentiments'
     };

     var newchart = new google.visualization.PieChart(personElement);

     newchart.draw(newdata, options);


 }

 function drawChart() {
     dataset.forEach(addChart)
 }