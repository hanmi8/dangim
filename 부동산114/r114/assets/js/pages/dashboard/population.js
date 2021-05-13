
// 인구정보
var localPopulation = localPopulation||{};
var localPopulationGenderRateResident  = localPopulationGenderRateResident||{};
var localPopulationGenderRateWorking = localPopulationGenderRateWorking||{};
var localPopulationGenderRateFloating = localPopulationGenderRateFloating||{};
var localpopulationDistribution = localpopulationDistribution||{};
var commercePopulation = commercePopulation||{};
var localPopulationLastFiveYear = localPopulationLastFiveYear||{};
var localpopulationTime = localpopulationTime||{};


var chart_right_second_01 = chart_right_second_01||{};
var chart_right_second_02 = chart_right_second_02||{};


// 인구정보 - 지역별
localPopulation.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: '95%',
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '거주인구',
        data: [4000, 6000, 5600, 6100, 5400, 10000, 10000, 18000, 12000, 10000]
    },{
        name: '직장인구',
        data: [3800, 5500, 5900, 4010, 7200, 11800, 10500, 13450, 11500, 12500]
    },{
        name: '유동인구',
        data: [6101, 7850, 9500, 7900, 9800, 12800, 12500, 12100, 15500, 15900]
    }],
    xaxis: {
        categories: ['2020년 1월', '2020년 2월', '2020년 3월', '2020년 4월', '2020년 5월', '2020년 6월', '2020년 7월', '2020년 8월', '2020년 9월', '2020년 10월']
    },
    colors: ['#009dd7','#2eb7c4','#eab600'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#009dd7', '#2eb7c4', '#eab600',],
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
        offsetY: 0,
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

localPopulationGenderRateResident.options = {
    series: [46, 54],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 280,
    },
    title: {
        text: '거주인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 205,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
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
    legend: {
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
localPopulationGenderRateWorking.options = {
    series: [59, 41],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 280,
    },
    title: {
        text: '직장인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 205,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
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
    legend: {
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
localPopulationGenderRateFloating.options = {
    series: [42, 58],
    labels: ['남자', '여자'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 280,
    },
    title: {
        text: '유동인구',
        align: 'center',
        margin: 0,
        offsetX: 0,
        offsetY: 205,
        floating: true,
        style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
            color:  '#263238'
        },
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
    legend: {
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

localpopulationDistribution.options = {
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
        name: '10대이전',
        data: [412, 500, 300, 154, 312, 245]
    }, {
        name: '10대',
        data: [575, 355, 210, 433, 222, 333]
    }, {
        name: '20대',
        data: [611, 323, 548, 345, 158, 210]
    }, {
        name: '30대',
        data: [412, 500, 300, 154, 312, 245]
    }, {
        name: '40대',
        data: [575, 355, 210, 433, 222, 548]
    }, {
        name: '50대',
        data: [611, 323, 548, 345, 158, 245]
    }, {
        name: '60대 이상',
        data: [412, 500, 300, 154, 312, 333]
    }],
    colors: ['#2eb7c4','#60bd85','#609057','#a7b01e','#f1d200','#edaa4b','#ec6751'],
    xaxis: {
        // type: 'datetime',
        categories: ['거주인구-남', '거주인구-여', '직장인구-남', '직장인구-여', '유동인구-남', '유동인구-여'],
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
    yaxis: {
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
        offsetX: -8,
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

// 인구정보 - 상권별
commercePopulation.options = {
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
        data: [4000, 6000, 5600, 6100, 5400, 10000, 10000, 18000, 12000, 10000]
    },{
        name: '직장인구',
        data: [3800, 5500, 5900, 4010, 7200, 11800, 10500, 13450, 11500, 12500]
    },{
        name: '유동인구',
        data: [6101, 7850, 9500, 7900, 9800, 12800, 12500, 12100, 15500, 15900]
    }],
    xaxis: {
        categories: ['2020년 1월', '2020년 2월', '2020년 3월', '2020년 4월', '2020년 5월', '2020년 6월', '2020년 7월', '2020년 8월', '2020년 9월', '2020년 10월']
    },
    colors: ['#009dd7','#2eb7c4','#eab600'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#009dd7', '#2eb7c4', '#eab600',],
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
// 인구정보 - 최근5년간
localPopulationLastFiveYear.options = {
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
// 인구정보 시간대별
localpopulationTime.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: true,
            offsetY: -30,
        },
        width: '100%',
        height: 260,
        zoom: {
            enabled: false,
        }
    },
    series: [{
        name: '월요일',
        data: [4000, 6000, 5600, 6100]
    },{
        name: '화요일',
        data: [3800, 5500, 5900, 4010]
    },{
        name: '수요일',
        data: [6101, 7850, 9500, 7900]
    },{
        name: '목요일',
        data: [2500, 4300, 1600, 5000]
    },{
        name: '금요일',
        data: [1324, 8586, 6547, 8585]
    },{
        name: '토요일',
        data: [4563, 5656, 7686, 8575]
    },{
        name: '일요일',
        data: [4679, 4358, 5656, 6547]
    }],
    xaxis: {
        categories: ['00시 ~ 08시', '09시 ~ 12시', '13시 ~ 18시', '19시 ~ 23시']
    },
    colors: ['#5e58c9','#2985d2','#2eb7c4', '#6d9d64', '#b5bf1b', '#f1c644', '#f28f6c'],
    stroke: {
        show: true,
        width: 2,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#5e58c9','#2985d2','#2eb7c4', '#6d9d64', '#b5bf1b', '#f1c644', '#f28f6c'],
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
        offsetY: 5,
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


chart_right_second_01.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 270,
    },
    series: [{
        name: '월요일',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '화요일',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '수요일',
        data: [2300, 2500, 2200, 3000, 2900]
    },{
        name: '목요일',
        data: [2500, 2200, 2000, 3000, 3100]
    },{
        name: '금요일',
        data: [2700, 3700, 3600, 2700, 2600]
    },{
        name: '토요일',
        data: [2100, 2500, 2300, 2800, 2700]
    },{
        name: '일요일',
        data: [2500, 2900, 2700, 2300, 2100]
    }],
    xaxis: {
        categories: ['2020년6월', '2020년7월', '2020년8월', '2020년9월', '2020년10월'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '80%',
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
        offsetX: -30,
        offsetY: 0,
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
            horizontal: 30,
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
chart_right_second_02.options = {
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
        name: '거주인구',
        data: [700, 300, 1500, 1200]
    }],
    xaxis: {
        categories: ['00시 ~ 08시', '09시 ~ 12시', '13시 ~ 18시', '19시 ~ 23시']
    },
    colors: ['#6d9d64'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    grid: {
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 30
        },
    },
    markers: {
        size: 8,
        colors: ['#6d9d64'],
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



// 인구정보 추이
localPopulation.render = function() {
    new ApexCharts(document.querySelector("#localPopulation"), localPopulation.options).render();
}
// 인구정보 성비
localPopulationGenderRateResident.render = function() {
    new ApexCharts(document.querySelector("#localPopulationGenderRateResident"), localPopulationGenderRateResident.options).render();
}
localPopulationGenderRateWorking.render = function() {
    new ApexCharts(document.querySelector("#localPopulationGenderRateWorking"), localPopulationGenderRateWorking.options).render();
}
localPopulationGenderRateFloating.render = function() {
    new ApexCharts(document.querySelector("#localPopulationGenderRateFloating"), localPopulationGenderRateFloating.options).render();
}
// 인구 분포
localpopulationDistribution.render = function() {
    new ApexCharts(document.querySelector("#localpopulationDistribution"), localpopulationDistribution.options).render();
}

// 인구 분포 - 상권별
commercePopulation.render = function() {
    new ApexCharts(document.querySelector("#commercePopulation"), commercePopulation.options).render();
}
// 인구분포 - 최근 5년간
localPopulationLastFiveYear.render = function() {
    new ApexCharts(document.querySelector("#localPopulationLastFiveYear"), localPopulationLastFiveYear.options).render();
}
// 인구 분포 - 시간대별
localpopulationTime.render = function() {
    new ApexCharts(document.querySelector("#localpopulationTime"), localpopulationTime.options).render();
}
// 인구 분포 - 시간대별
chart_right_second_01.render = function() {
    new ApexCharts(document.querySelector("#chart_right_second_01"), chart_right_second_01.options).render();
}
// 인구 분포 - 시간대별
chart_right_second_02.render = function() {
    new ApexCharts(document.querySelector("#chart_right_second_02"), chart_right_second_02.options).render();
}


