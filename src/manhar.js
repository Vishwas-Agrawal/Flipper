var urlString = window.location.href.split('?')[1].split('&');
var n = urlString[0].substring(2,);
var typ = urlString[1].substring(4,);

function getRndInteger(min, max)
{
    return Math.floor(Math.random()*(max-min))+min;
}

if (typ == 1)
{
    // player goes first, generate pile with xor = 0
    var max = 16;
    var min = 1;
    while (1)
    {
        var values = [];
        var xor = 0;
        for (var i=0;i<n-1;i++)
        {
            values.push(getRndInteger(min,max));
            xor ^= values[i];
        }
        if (xor != 0)
        {
            values.push(xor);
            break;
        }
    }
}
else
{
    // player goes first, generate pile with non zero xor
    var max = 16;
    var min = 1;
    while (1)
    {
        var values = [];
        var xor = 0;
        for (var i=0;i<n;i++)
        {
            values.push(getRndInteger(min,max));
            xor ^= values[i];
        }
        if (xor != 0)
        {
            break;
        }
    }
}
var mainDiv = document.getElementsByClassName("main")[0];
var xValues = [];
for (var i=0;i<n;i++)
{
    xValues.push("");
}


// function triggerOnClick(evt)
// {
//     console.log(evt);
//     var activePoints = myChart.getElementAtEvent(evt);
//     console.log(activePoints);
//     if (activePoints[0]) 
//     {
//         var idx = activePoints[0]['_index'];
//         alert(idx);
//     }

// }

var canvas = document.getElementById('myChart');
var myChart = new Chart(canvas.getContext('2d'),
{
    type: "bar",
    data: 
    {
        labels: xValues,
        datasets: 
        [{
            backgroundColor: "red",
            data: values
        }]
    },
    options: 
    {
        scales: {y:{beginAtZero:true}},
        title:{display:false},
        legend: {display:false},
        onClick: function(e)
        {
            var element = this.getActiveElements(e);
            if(element.length > 0){
        		alert("Clicked on a bar with index: "+element[0]._index+". Now this bar should be marked as active.");
          }
        }
    },
    scales:
    {
        x:{grid:{display:false}},
        y:{grid:{display:false}},
    },
    // actions: [{
    //       name: 'Trigger OnClick',
    //       handler: triggerOnClick
    // }]
});