var chart01 = chart01||{};

chart01.options = {
  chart: {
    type: 'line',
    toolbar: {
      show: true,
      offsetY: -30,
    },
    width: '100%',
    height: 180,
    zoom: {
      enabled: false,
    }
  },
  series: [{
    name: '단지내',
    data: [15,20,30]
  },{
    name: '주상복합',
    data: [30,58,46]
  },{
    name: '근린',
    data: [11, 2, 35]
  },{
    name: '복합쇼핑몰',
    data: [46,78,21]
  },{
    name: '지산',
    data: [52,16,55]
  },{
    name: '오피스',
    data: [28, 85, 73]
  },{
    name: '기타',
    data: [5, 15, 38]
  }],
  xaxis: {
    categories: [2018,2019,2020]
  },
  colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
  stroke: {
    show: true,
    width: 2,
    dashArray: 0,
  },
  markers: {
    size: 5,
    colors: ['#5e58c9','#2985d2', '#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
    strokeColors: '#fff',
    strokeWidth: 2,
    strokeOpacity: 0.9,
    shape: "circle",
    radius: 2,
    offsetX: 0,
    offsetY: 0,
  },
  legend: {
    show: true,
    showForSingleSeries: false,
    showForNullSeries: true,
    showForZeroSeries: true,
    position: 'bottom',
    horizontalAlign: 'left',
    floating: false,
    fontSize: '10px',
    fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
    fontWeight: 400,
    inverseOrder: false,
    offsetX: 0,
    offsetY: 8,
    labels: {
      useSeriesColors: false
    },
    markers: {
      width: 8,
      height: 8,
      strokeWidth: 0,
      strokeColor: '#fff',
      radius: 12,
      offsetX: 0,
      offsetY: 20
    },
    itemMargin: {
      horizontal: 5,
      vertical: 0
    },
    onItemClick: {
      toggleDataSeries: true
    },
    onItemHover: {
      highlightDataSeries: true
    },
  }
}
chart01.render = function() {
 new ApexCharts(document.querySelector("#chart01"), chart01.options).render();
}