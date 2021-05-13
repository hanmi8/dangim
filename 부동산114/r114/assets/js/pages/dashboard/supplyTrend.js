// 공급동향(지역별)
var localSupplyTrend = localSupplyTrend||{};
var localSupplyTrendYears = localSupplyTrendYears||{};
var localSupplyTrendSelectYear = localSupplyTrendSelectYear||{};
var localSupplyTrendSelectYearNonhyun = localSupplyTrendSelectYearNonhyun||{};
// 공급동향(상권별)
var commerceSupplyTrend = commerceSupplyTrend||{};
var commerceSupplyTrendYears = commerceSupplyTrendYears||{};
var commerceSupplyTrendSelectYear = commerceSupplyTrendSelectYear||{};




// 공급정보
localSupplyTrend.options = {
    series: [{
        name: '누적 물량',
        type: 'column',
        data: [1400, 1300, 1400, 1300, 1500, 1380, 1580, 1500, 1590, 1750],
    },{
        name: '당해년도 물량',
        type: 'line',
        data: [204, 306, 271, 312, 283, 500, 500, 900, 600, 500],
    }],
    chart: {
        width:'100%',
        height: 550,
        type: 'line',
        stacked: false,
        toolbar: {
            show: true,
            offsetX: -20,
            offsetY: -30,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: [1],
            top: 3,
            left: 0,
            blur: 1,
            opacity: 0.2
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            // endingShape: 'rounded'
        },
    },
    // markers: {
    //     size: 5,
    //     colors: ['#d45769'],
    //     strokeColors: '#fff',
    //     strokeWidth: 0,
    //     strokeOpacity: 0.9,
    //     strokeDashArray: 0,
    //     fillOpacity: 1,
    //     discrete: [],
    //     shape: "circle",
    //     radius: 2,
    //     offsetX: 0,
    //     dropShadow: {
    //         enabled: true,
    //         // enabledOnSeries: [1],
    //         top: 3,
    //         left: 3,
    //         blur: 0,
    //         opacity: 0.2
    //     },
    // },
    stroke: {
        width: [1, 4]
    },
    title: {
        // text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
    },
    xaxis: {
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        axisBorder: {
            show: false,
        },
    },
    yaxis: [
        {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
                color: '#e0dcd8'
            },
            labels: {
                style: {
                    colors: '#e0dcd8',
                }
            },
            tooltip: {
                enabled: true
            }
        },
        {
            // seriesName: '매출정보추이',
            opposite: true,
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
                color: '#e39ba4'
            },
            labels: {
                style: {
                    colors: '#e39ba4',
                }
            },
        },
    ],
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    colors: ['#d4cfc9','#d45769'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '10px',
        fontFamily: 'Noto Sans Korean',
        fontWeight: 400,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
        itemMargin: {
            horizontal: 20,
            vertical: 0
        },
    },
}
localSupplyTrendYears.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 243,
    },
    series: [{
        name: '단지내',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '주상복합',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '근린',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '복합쇼핑몰',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '지산',
        data: [2700, 3700, 3600, 2700, 2600]
    },{
        name: '오피스',
        data: [2100, 2500, 2300, 2800, 2700]
    },{
        name: '기타',
        data: [2500, 2900, 2700, 2300, 2100]
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
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
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
localSupplyTrendSelectYear.options = {
    chart: {
        width: '100%',
        height: 260,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: '개포동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '논현동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '대치동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '도곡동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '삼전동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '세곡동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '수서동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '신사동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '압구정동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '역삼동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '율현동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '일원동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '지곡동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '청담동',
        data: [575, 355, 210, 433, 222]
    }],
    colors: ['#8176d4','#4d5dbe','#2985d2','#2eb7c4','#4cd3c5','#60bd85','#609057','#a7b01e','#b5d130','#f4eb00','#f1d200','#edaa4b','#ec6751','#e55d81'],
    xaxis: {
        // type: 'datetime',
        categories: ['근린상가', '단지내상가', '복합상가', '테마상가', '기타상가'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '10px',
        fontFamily: 'Noto Sans Korean',
        fontWeight: 400,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
    fill: {
        opacity: 1
    },
}
localSupplyTrendSelectYearNonhyun.options = {
    series: [2237, 3061, 2843, 1492, 3411],
    labels: ['근린상가', '단지내상가', '복합상가', '테마상가', '기타상가'],
    chart: {
        type: 'donut',
        height: 300,
        // dropShadow: {
        // 	enabled: true,
        // 	enabledOnSeries: [1],
        // 	top: 0,
        // 	left: 0,
        // 	blur: 10,
        // 	opacity: 0.2
        // },
    },
    colors: ['#60d2db', '#4943ba','#3b6c32', '#f0c23f', '#f6ad90'],
    stroke: {
        show: true,
        colors: '#ffffff',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
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
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}
commerceSupplyTrend.options = {
    series: [{
        name: '누적 물량',
        type: 'column',
        data: [1400, 1300, 1400, 1300, 1500, 1380, 1580, 1500, 1590, 1750],
    },{
        name: '당해년도 물량',
        type: 'line',
        data: [204, 306, 271, 312, 283, 500, 500, 900, 600, 500],
    }],
    chart: {
        width:'100%',
        height: 550,
        type: 'line',
        stacked: false,
        toolbar: {
            show: true,
            offsetX: -20,
            offsetY: -30,
            tools: {
                download: true,
                selection: false,
                zoom: false,
                zoomin: false,
                zoomout: false,
                pan: false,
                reset: false,
            },
        },
        dropShadow: {
            enabled: true,
            enabledOnSeries: [1],
            top: 3,
            left: 0,
            blur: 1,
            opacity: 0.2
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%',
            // endingShape: 'rounded'
        },
    },
    markers: {
        size: 5,
        colors: ['#d45769'],
        strokeColors: '#fff',
        strokeWidth: 0,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        dropShadow: {
            enabled: true,
            enabledOnSeries: [1],
            top: 3,
            left: 3,
            blur: 0,
            opacity: 0.2
        },
    },
    stroke: {
        width: [1, 4]
    },
    title: {
        // text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
    },
    dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
    },
    xaxis: {
        // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        categories: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
        axisBorder: {
            show: false,
        },
    },
    yaxis: [
        {
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
                color: '#e0dcd8'
            },
            labels: {
                style: {
                    colors: '#e0dcd8',
                }
            },
            tooltip: {
                enabled: true
            }
        },
        {
            // seriesName: '매출정보추이',
            opposite: true,
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false,
                color: '#e39ba4'
            },
            labels: {
                style: {
                    colors: '#e39ba4',
                }
            },
        },
    ],
    tooltip: {
        fixed: {
            enabled: false,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    colors: ['#d4cfc9','#d45769'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontSize: '10px',
        fontFamily: 'Noto Sans Korean',
        fontWeight: 400,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
        itemMargin: {
            horizontal: 20,
            vertical: 0
        },
    },
}
commerceSupplyTrendYears.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 243,
    },
    series: [{
        name: '단지내',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '주상복합',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '근린',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '복합쇼핑몰',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '지산',
        data: [2700, 3700, 3600, 2700, 2600]
    },{
        name: '오피스',
        data: [2100, 2500, 2300, 2800, 2700]
    },{
        name: '기타',
        data: [2500, 2900, 2700, 2300, 2100]
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
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
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
commerceSupplyTrendSelectYear.options = {
    chart: {
        width: '100%',
        height: 248,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: true
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            legend: {
                position: 'bottom',
                offsetX: -10,
                offsetY: 0
            }
        }
    }],
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [{
        name: '개포동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '논현동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '대치동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '도곡동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '삼전동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '세곡동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '수서동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '신사동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '압구정동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '역삼동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '율현동',
        data: [575, 355, 210, 433, 222]
    }, {
        name: '일원동',
        data: [412, 500, 300, 154, 312]
    }, {
        name: '지곡동',
        data: [611, 323, 548, 345, 158]
    }, {
        name: '청담동',
        data: [575, 355, 210, 433, 222]
    }],
    colors: ['#8176d4','#4d5dbe','#2985d2','#2eb7c4','#4cd3c5','#60bd85','#609057','#a7b01e','#b5d130','#f4eb00','#f1d200','#edaa4b','#ec6751','#e55d81'],
    xaxis: {
        // type: 'datetime',
        categories: ['근린상가', '단지내상가', '복합상가', '테마상가', '기타상가'],
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
        labels: {
            show: false,
        },
    },
    grid: {
        show: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '10px',
        fontFamily: 'Noto Sans Korean',
        fontWeight: 400,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
    fill: {
        opacity: 1
    },
}


// 지역별공급추이
localSupplyTrend.render = function() {
    new ApexCharts(document.querySelector("#localSupplyTrend"), localSupplyTrend.options).render();
}
// 지역별년도별공급추이
localSupplyTrendYears.render = function() {
    new ApexCharts(document.querySelector("#localSupplyTrendYears"), localSupplyTrendYears.options).render();
}
// 지역별선택년도공급추이
localSupplyTrendSelectYear.render = function() {
    new ApexCharts(document.querySelector("#localSupplyTrendSelectYear"), localSupplyTrendSelectYear.options).render();
}
// 지역별선택년도공급추이 - 논현동
localSupplyTrendSelectYearNonhyun.render = function() {
    new ApexCharts(document.querySelector("#localSupplyTrendSelectYearNonhyun"), localSupplyTrendSelectYearNonhyun.options).render();
}
// 상가별공급추이
commerceSupplyTrend.render = function() {
    new ApexCharts(document.querySelector("#commerceSupplyTrend"), commerceSupplyTrend.options).render();
}
// 상가별년도별공급추이
commerceSupplyTrendYears.render = function() {
    new ApexCharts(document.querySelector("#commerceSupplyTrendYears"), commerceSupplyTrendYears.options).render();
}
// 상가별선택년도공급추이
commerceSupplyTrendSelectYear.render = function() {
    new ApexCharts(document.querySelector("#commerceSupplyTrendSelectYear"), commerceSupplyTrendSelectYear.options).render();
}

