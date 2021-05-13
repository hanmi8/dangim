// 평균 분양가 추이
var localAverageRentTrend = localAverageRentTrend||{};
// 상가 유형별 평균 분양가 추이
var localrentTrendFiveYear = localrentTrendFiveYear||{};
// 상가 유형별 평균 분양가 추이
var localRentVariation = localRentVariation||{};


// 평균 분양가 추이
var commerceAverageRentTrend = commerceAverageRentTrend||{};
// 상가 유형별 평균 분양가 추이
var commerceAverageRentTrendFiveYear = commerceAverageRentTrendFiveYear||{};
// 상가 유형별 평균 분양가 추이
var commerceRentVariation = commerceRentVariation||{};




localAverageRentTrend.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: 550,
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '당해년도 분양가',
        data: [4000, 6000, 5600, 6100, 5400, 10000, 10000, 18000, 12000, 10000]
    }],
    xaxis: {
        categories: ['2019.1Q','2019.2Q','2019.3Q','2019.4Q','2020.1Q','2020.2Q','2020.3Q','2020.4Q']
    },
    colors: ['#009dd7'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#009dd7'],
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
        horizontalAlign: 'center',
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
localrentTrendFiveYear.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 243,
    },
    series: [{
        name: '근린상가',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '단지내상가',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '복합상가',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '테마상가',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '기타',
        data: [2700, 3700, 3600, 2700, 2600]
    }],
    xaxis: {
        categories: ['2019.4Q', '2020.1Q', '2020.2Q', '2020.3Q', '2020.4Q'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ],
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
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
        offsetX: -40,
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
            horizontal: 10,
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
localRentVariation.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 168,
    },
    series: [{
        name: '지하1층',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '1층',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '2층',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '3층',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '4층 이상',
        data: [2700, 3700, 3600, 2700, 2600]
    }],
    xaxis: {
        categories: ['근린상가', '단지내상가', '복합상가', '테마상가', '기타'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ],
    colors: ['#2985d2','#60bd85','#f4eb00','#edaa4b','#e55d81'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
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
        offsetX: -40,
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
            horizontal: 10,
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

commerceAverageRentTrend.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: 550,
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '당해년도 분양가',
        data: [4000, 6000, 5600, 6100, 5400, 10000, 10000, 18000, 12000, 10000]
    }],
    xaxis: {
        categories: ['2019.1Q','2019.2Q','2019.3Q','2019.4Q','2020.1Q','2020.2Q','2020.3Q','2020.4Q']
    },
    colors: ['#009dd7'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#009dd7'],
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
        horizontalAlign: 'center',
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
commerceAverageRentTrendFiveYear.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 243,
    },
    series: [{
        name: '근린상가',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '단지내상가',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '복합상가',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '테마상가',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '기타',
        data: [2700, 3700, 3600, 2700, 2600]
    }],
    xaxis: {
        categories: ['2019.4Q', '2020.1Q', '2020.2Q', '2020.3Q', '2020.4Q'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ],
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
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
        offsetX: -40,
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
            horizontal: 10,
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
commerceRentVariation.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 168,
    },
    series: [{
        name: '지하1층',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '1층',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '2층',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '3층',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '4층 이상',
        data: [2700, 3700, 3600, 2700, 2600]
    }],
    xaxis: {
        categories: ['근린상가', '단지내상가', '복합상가', '테마상가', '기타'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
            // endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    responsive: [
        {
            breakpoint: 1000,
            options: {
                plotOptions: {
                    bar: {
                        horizontal: true
                    }
                },
                legend: {
                    position: "bottom"
                }
            }
        }
    ],
    colors: ['#2985d2','#60bd85','#f4eb00','#edaa4b','#e55d81'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
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
        offsetX: -40,
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
            horizontal: 10,
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




// 분양가 추이
localAverageRentTrend.render = function() {
    new ApexCharts(document.querySelector("#localAverageRentTrend"), localAverageRentTrend.options).render();
}
// 상가 유형별 분양가 추이
localrentTrendFiveYear.render = function() {
    new ApexCharts(document.querySelector("#localrentTrendFiveYear"), localrentTrendFiveYear.options).render();
}
// 상가 유형별 분양가 추이
localRentVariation.render = function() {
    new ApexCharts(document.querySelector("#localRentVariation"), localRentVariation.options).render();
}


// 분양가 추이
commerceAverageRentTrend.render = function() {
    new ApexCharts(document.querySelector("#commerceAverageRentTrend"), commerceAverageRentTrend.options).render();
}
// 상가 유형별 분양가 추이
commerceAverageRentTrendFiveYear.render = function() {
    new ApexCharts(document.querySelector("#commerceAverageRentTrendFiveYear"), commerceAverageRentTrendFiveYear.options).render();
}
// 상가 유형별 분양가 추이
commerceRentVariation.render = function() {
    new ApexCharts(document.querySelector("#commerceRentVariation"), commerceRentVariation.options).render();
}
