var chartRentChange = chartRentChange||{};
var chartSupply = chartSupply||{};
var chartSupply2 = chartSupply2||{};
var chartAverageRent = chartAverageRent||{};
var chartAveragesale = chartAveragesale||{};
var chartInformationTrend = chartInformationTrend||{};
var chartIndustryInformation = chartIndustryInformation||{};
var chartPopulationInformationYears = chartPopulationInformationYears||{};
var chartPopulationInformationFab1 = chartPopulationInformationFab1||{};
var chartPopulationInformationFab2 = chartPopulationInformationFab2||{};
var chartPopulationInformationFab3 = chartPopulationInformationFab3||{};

chartRentChange.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: '75%',
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
chartSupply.options = {
    chart: {
        width: '100%',
        height: '75%',
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
        name: '2018년도',
        data: [22, 10, 20, 25, 35, 19, 15]
    }, {
        name: '2019년도',
        data: [13, 23, 20, 8, 20, 27, 32]
    }, {
        name: '2020년도',
        data: [44, 55, 41, 36, 30, 43, 11]
    }],
    colors: ['#eeeeec','#dadedc','#7697a0'],
    xaxis: {
        // type: 'datetime',
        categories: ['단지내상가', '주상복합상가', '근린상가', '복합쇼핑몰', '지산상가', '오피스상가', '기타'],
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
        offsetY: 8,
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
chartSupply2.options = {
    chart: {
        width: '100%',
        height: '75%',
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
        name: '2018년도',
        data: [11, 10, 20, 15, 16, 19, 15, 21]
    }, {
        name: '2019년도',
        data: [13, 23, 20, 20, 13, 27, 32, 52]
    }, {
        name: '2020년도',
        data: [44, 55, 41, 37, 22, 33, 11, 13]
    }],
    colors: ['#eeeeec','#dadedc','#7697a0'],
    xaxis: {
        // type: 'datetime',
        categories: ['1,000미만', '~3,000미만', '~5,000미만', '~7,000미만', '~10,000미만', '~15,000미만', '~30,000미만', '30,000이상'],
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
        offsetY: 8,
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
chartAverageRent.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: true,
            offsetY: -40,
        },
        width: '100%',
        height: '80%',
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
        // formatter: undefined,
        inverseOrder: false,
        // width: undefined,
        // height: undefined,
        // tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 8,
        labels: {
            // colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            // fillColors: undefined,
            radius: 12,
            // customHTML: undefined,
            // onClick: undefined,
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
chartAveragesale.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: true,
            offsetY: -40,
        },
        width: '100%',
        height: '80%',
    },
    series: [{
        name: '단지내',
        data: [75,81,67]
    },{
        name: '주상복합',
        data: [22,14,55]
    },{
        name: '근린',
        data: [46, 78, 46]
    },{
        name: '복합쇼핑몰',
        data: [55, 16, 54]
    },{
        name: '지산',
        data: [32, 56, 94]
    },{
        name: '오피스',
        data: [33, 22, 11]
    },{
        name: '기타',
        data: [16, 28, 47]
    }],
    xaxis: {
        categories: [2018,2019,2020]
    },
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 5,
        colors: ['#5e58c9','#2985d2', '#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c'],
        strokeColors: '#fff',
        strokeWidth: 2,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 2,
        offsetX: 0,
        // offsetY: 0,
        // onClick: undefined,
        // onDblClick: undefined,
        // showNullDataPoints: true,
        // hover: {
        // 	size: undefined,
        // 	sizeOffset: 3
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
        // formatter: undefined,
        inverseOrder: false,
        // width: undefined,
        // height: undefined,
        // tooltipHoverFormatter: undefined,
        offsetX: 0,
        offsetY: 0,
        labels: {
            // colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            // fillColors: undefined,
            radius: 12,
            // customHTML: undefined,
            // onClick: undefined,
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
chartInformationTrend.options = {
    series: [{
        name: '연도별 매출총액',
        type: 'column',
        data: [150, 165, 190]
    },{
        name: '연도별 유동인구',
        type: 'line',
        data: [67, 79, 85]
    }],
    chart: {
        width:'100%',
        height: '75%',
        type: 'line',
        stacked: false,
        toolbar: {
            show: false
        },
    },
    // dataLabels: {
    // 	enabled: false
    // },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '30%',
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
        // offsetY: 0,
        // onClick: undefined,
        // onDblClick: undefined,
        // showNullDataPoints: true,
        // hover: {
        // 	size: undefined,
        // 	sizeOffset: 3
    },
    stroke: {
        width: [1, 4]
    },
    title: {
        // text: 'XYZ - Stock Analysis (2009 - 2016)',
        align: 'left',
        offsetX: 110
    },
    xaxis: {
        // categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
        categories: ['2018', '2019', '2020'],
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
            enabled: true,
            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
        },
    },
    colors: ['#d4cfc9','#d45769'],
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'left',
        fontSize: '10px',
        fontFamily: 'Noto Sans Korean',
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}
chartIndustryInformation.options = {
    chart: {
        width:'100%',
        height: '75%',
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
        name: '2018년도',
        data: [44, 55, 41, 67, 22, 43, 11, 13]
    }, {
        name: '2019년도',
        data: [13, 23, 20, 8, 13, 27, 32, 22]
    }, {
        name: '2020년도',
        data: [11, 10, 20, 5, 16, 19, 15, 21]
    }],
    colors: ['#eeeeec','#dadedc','#7697a0'],
    xaxis: {
        // type: 'datetime',
        categories: ['관광/오락', '부동산', '생활서비스', '소매', '숙박', '서비스', '음식', '학문/교육'],
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
        offsetY: 8,
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
chartPopulationInformationYears.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false
        },
        width: '100%',
        height: '75%',
    },
    series: [{
        name: '지역인구',
        data: [13, 14, 15]
    },{
        name: '직장인구',
        data: [22, 16, 18]
    },{
        name: '유동인구',
        data: [7, 6, 8]
    }],
    xaxis: {
        categories: [2018,2019,2020]
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
                    position: "bottom",
                }
            }
        }
    ],
    colors: ['#009dd7','#2eb7c4','#eab600'],
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
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetX: -20,
        offsetY: 7,
        labels: {
            // colors: undefined,
            useSeriesColors: false
        },
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            // fillColors: undefined,
            radius: 12,
            // customHTML: undefined,
            // onClick: undefined,
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
chartPopulationInformationFab1.options = {
    series: [46, 54],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: '90%',
    },
    colors: ['#009dd7', '#7fceeb'],
    stroke: {
        show: true,
        colors: '#009dd7',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    title: {
        text: '거주인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 150,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}
chartPopulationInformationFab2.options = {
    series: [59, 41],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: '90%',
    },
    colors: ['#2eb7c4', '#96dbe1'],
    stroke: {
        show: true,
        colors: '#2eb7c4',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    title: {
        text: '직장인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 150,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}
chartPopulationInformationFab3.options = {
    series: [42, 58],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: '90%',
    },
    colors: ['#eab600', '#f4da7f'],
    stroke: {
        show: true,
        colors: '#eab600',
        width: 1,
        dashArray: 0,
    },
    dataLabels: {
        enabled: false,
    },
    title: {
        text: '유동인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 150,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        offsetY: 8,
        markers: {
            width: 8,
            height: 8,
            radius: 12,
        },
    },
}


// 임대료 변동률
chartRentChange.render = function() {
    new ApexCharts(document.querySelector("#chartRentChange"), chartRentChange.options).render();
}
// 공급동향
chartSupply.render = function() {
    new ApexCharts(document.querySelector("#chartSupply"), chartSupply.options).render();
}
// 공급동향 02
chartSupply2.render = function() {
    new ApexCharts(document.querySelector("#chartSupply2"), chartSupply2.options).render();
}
// 상가유형별 평균임대료
chartAverageRent.render = function() {
    new ApexCharts(document.querySelector("#chartAverageRent"), chartAverageRent.options).render();
}
// 상가유형별 평균분양가
chartAveragesale.render = function() {
    new ApexCharts(document.querySelector("#chartAveragesale"), chartAveragesale.options).render();
}
// 매출정보추이
chartInformationTrend.render = function() {
    new ApexCharts(document.querySelector("#chartInformationTrend"), chartInformationTrend.options).render();
}
// 업종정보
chartIndustryInformation.render = function() {
    new ApexCharts(document.querySelector("#chartIndustryInformation"), chartIndustryInformation.options).render();
}
// 인구정보
chartPopulationInformationYears.render = function() {
    new ApexCharts(document.querySelector("#chartPopulationInformationYears"), chartPopulationInformationYears.options).render();
}
// 인구정보
chartPopulationInformationFab1.render = function() {
    new ApexCharts(document.querySelector("#chartPopulationInformationFab1"), chartPopulationInformationFab1.options).render();
}
// 인구정보
chartPopulationInformationFab2.render = function() {
    new ApexCharts(document.querySelector("#chartPopulationInformationFab2"), chartPopulationInformationFab2.options).render();
}
// 인구정보
chartPopulationInformationFab3.render = function() {
    new ApexCharts(document.querySelector("#chartPopulationInformationFab3"), chartPopulationInformationFab3.options).render();
}
