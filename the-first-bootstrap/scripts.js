const data = {
  labels: ["01/04", "02/04", "03/04", "04/04", "05/04", "06/04", "07/04"],
  datasets: [
    {
      label: "USA",
      backgroundColor: window.chartColors.red,
      borderColor: window.chartColors.red,
      fill: false,
      yAxisID: "VND",
      data: [22545, 22580, 22655, 22660, 22790, 22902, 22860],
    },
    {
      label: "EURO",
      backgroundColor: window.chartColors.blue,
      borderColor: window.chartColors.blue,
      fill: false,
      yAxisID: "VND",
      data: [25584, 25907, 26109, 25900, 26717, 26955, 25700],
    },
    {
      label: "GPB",
      backgroundColor: window.chartColors.green,
      borderColor: window.chartColors.green,
      fill: false,
      yAxisID: "VND",
      data: [29916, 30200, 30970, 30623, 30142, 31131, 31430],
    },
  ],
};

var config = {
  type: "line",
  data: data,

  options: {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          id: "VND",
          type: "linear",
          position: "left",
        },
        {
          position: "right",
          gridLines: {
            display: false,
          },
          ticks: {
            max: 1,
            min: 0,
          },
        },
      ],
    },
  },
};

window.onload = function () {
  var ctx = document.getElementById("lineChart").getContext("2d");
  window.myLine = new Chart(ctx, config);
};