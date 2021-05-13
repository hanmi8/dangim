// 평균 분양가 추이
var localSellingPriceTrend = localSellingPriceTrend||{};
// 상가 유형별 평균 분양가 추이
var localSellingPriceTrendFiveYear = localSellingPriceTrendFiveYear||{};
// 상가 유형별 평균 분양가 변동율
var localSellingPrice = localSellingPrice||{};

// 평균 분양가 추이
var commerceSellingPriceTrend = commerceSellingPriceTrend||{};
// 상가 유형별 평균 분양가 추이
var commerceSellingPriceTrendFiveYear = commerceSellingPriceTrendFiveYear||{};
// 상가 유형별 평균 분양가 변동율
var commerceSellingPrice = commerceSellingPrice||{};




localSellingPriceTrend.options = {
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
        name: '거주인구',
        data: [4000, 6000, 5600, 6100, 10000, 18000, 12000, 10000]
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
    },
}
localSellingPriceTrendFiveYear.options = {
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
        categories: [2016, 2017, 2018, 2019, 2020],
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
localSellingPrice.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: 230,
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '근린상가',
        data: [4000, 6000, 5600]
    },{
        name: '단지내상가',
        data: [5000, 4365, 5535]
    },{
        name: '복합상가',
        data: [7685, 4358, 8265]
    },{
        name: '테마상가',
        data: [2589, 7755, 8569]
    },{
        name: '기타',
        data: [4545, 5454, 6565]
    }],
    xaxis: {
        categories: ['5,000 ~ 5.500','6,000 ~ 6,500','7,000 ~ 7,500']
    },
    colors: ['#5e58c9', '#2985d2', '#2eb7c4', '#6d9d64', '#b5bf1b'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#5e58c9', '#2985d2', '#2eb7c4', '#6d9d64', '#b5bf1b'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        shape: "circle",
        radius: 2,
        offsetX: 0,
        offsetY: 0,
    },
    legend: {
        show: false,
        // showForSingleSeries: false,
        // showForNullSeries: true,
        // showForZeroSeries: true,
        // position: 'bottom',
        // horizontalAlign: 'left',
        // floating: false,
        // fontSize: '10px',
        // fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        // fontWeight: 400,
        // offsetX: -40,
        // markers: {
        //     width: 8,
        //     height: 8,
        //     strokeWidth: 0,
        //     strokeColor: '#fff',
        //     radius: 12,
        //     offsetX: 0,
        //     offsetY: 20
        // },
        // itemMargin: {
        //     horizontal: 10,
        //     vertical: 0
        // },
        // onItemClick: {
        //     toggleDataSeries: true
        // },
        // onItemHover: {
        //     highlightDataSeries: true
        // },
    },
}


commerceSellingPriceTrend.options = {
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
        name: '거주인구',
        data: [4000, 6000, 5600, 6100, 10000, 18000, 12000, 10000]
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
    },
}
commerceSellingPriceTrendFiveYear.options = {
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
        categories: [2016, 2017, 2018, 2019, 2020],
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
commerceSellingPrice.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: 248,
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '근린상가',
        data: [4000, 6000, 5600]
    },{
        name: '단지내상가',
        data: [5000, 4365, 5535]
    },{
        name: '복합상가',
        data: [7685, 4358, 8265]
    },{
        name: '테마상가',
        data: [2589, 7755, 8569]
    },{
        name: '기타',
        data: [4545, 5454, 6565]
    }],
    xaxis: {
        categories: ['5,000 ~ 5.500','6,000 ~ 6,500','7,000 ~ 7,500']
    },
    colors: ['#5e58c9', '#2985d2', '#2eb7c4', '#6d9d64', '#b5bf1b'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#5e58c9', '#2985d2', '#2eb7c4', '#6d9d64', '#b5bf1b'],
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
    },
}




// 평균임대료
localSellingPriceTrend.render = function() {
    new ApexCharts(document.querySelector("#localSellingPriceTrend"), localSellingPriceTrend.options).render();
}
// 평균임대료 최근 5년
localSellingPriceTrendFiveYear.render = function() {
    new ApexCharts(document.querySelector("#localSellingPriceTrendFiveYear"), localSellingPriceTrendFiveYear.options).render();
}
// 평균임대료
localSellingPrice.render = function() {
    new ApexCharts(document.querySelector("#localSellingPrice"), localSellingPrice.options).render();
}

// 평균임대료
commerceSellingPriceTrend.render = function() {
    new ApexCharts(document.querySelector("#commerceSellingPriceTrend"), commerceSellingPriceTrend.options).render();
}
// 평균임대료 최근 5년
commerceSellingPriceTrendFiveYear.render = function() {
    new ApexCharts(document.querySelector("#commerceSellingPriceTrendFiveYear"), commerceSellingPriceTrendFiveYear.options).render();
}
// 평균임대료
commerceSellingPrice.render = function() {
    new ApexCharts(document.querySelector("#commerceSellingPrice"), commerceSellingPrice.options).render();
}
