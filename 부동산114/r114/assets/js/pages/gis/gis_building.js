// 업종현황
var chart_map_sale_01 = chart_map_sale_01||{};

// 총 매출 추이
var chart_map_sale_02 = chart_map_sale_02||{};

// 업종별 매출 추이
var chart_map_sale_03 = chart_map_sale_03||{};

// 거주/직장인구 : 성별
var chart_map_sale_04 = chart_map_sale_04||{};

// 거주/직장인구 : 성별 x 연령별
var chart_map_sale_05 = chart_map_sale_05||{};

// 유동인구 : 요일 x 시간대별
var chart_map_sale_06 = chart_map_sale_06||{};



// 업종현황
chart_map_sale_01.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
            offsetY: -30,
        },
        width: '95%',
        height: 320,
        zoom: {
            enabled: false,
        },
        offsetX: 10,
    },
    series: [{
        name: '관광/여가/오락',
        data: [3224,3252,3636,3425,3147,3258,3258,3132,3125,3001,3222,3165]
    },{
        name: '부동산',
        data: [3201,3132,3452,3639,3254,3858,3125,3210,3100,3001,3011,3542]
    },{
        name: '생활 서비스',
        data: [2896,2856,2765,2896,2451,2863,2105,2865,2314,2588,2569,2459]
    },{
        name: '소매',
        data: [2124,2541,2423,2321,2523,2632,2141,2100,2001,2352,2014,2001]
    },{
        name: '숙박',
        data: [1985,1686,1789,1987,1456,1654,1452,1236,1254,1452,1230,1000]
    },{
        name: '스포츠',
        data: [1010,1232,1312,1402,1201,1009,1030,1420,1002,998,966,1000]
    },{
        name: '음식',
        data: [989,986,586,986,639,686,978,587,798,855,789,856]
    },{
        name: '학문/교육',
        data: [789,898,895,857,754,452,256,569,859,656,547,758]
    }],
    xaxis: {
        categories: ['2018.1Q','2018.2Q','2018.3Q','2018.4Q','2019.1Q','2019.2Q','2019.3Q','2019.4Q','2020.1Q','2020.2Q','2020.3Q','2020.4Q']
    },
    colors: ['#5e58c9','#2985d2','#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c', '#e55d81'],
    stroke: {
        show: true,
        width: 2,
        dashArray: 0,
    },
    markers: {
        size: 5,
        colors: ['#5e58c9','#2985d2', '#2eb7c4','#6d9d64','#b5bf1b','#f1c644','#f28f6c', '#e55d81'],
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
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        inverseOrder: false,
        horizontalAlign: 'left',
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
// 총 매출 추이
chart_map_sale_02.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        },
        width: '100%',
        height: 270,
        zoom: {
            enabled: false,
        },
        offsetX: 35,
    },
    series: [{
        name: '관광/여가/오락',
        data: [3224, 2986, 1836]
    }],
    xaxis: {
        categories: ['2018','2019','2020'],
        // tickAmount: 10,
        tickPlacement: 'between',
    },
    // grid: {
    //     padding: {
    //         left: 30,
    //         right: 30,
    //     },
    // },
    colors: ['#5e58c9'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#5e58c9'],
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
        markers: {
            width: 8,
            height: 8,
            strokeWidth: 0,
            strokeColor: '#fff',
            radius: 12,
            offsetX: 0,
            offsetY: 20
        },
    }
}

chart_map_sale_03.options = {
    series: [{
        name: '2018',
        data: [3224,3201,2889,2765,2548,2432,2100,2001]
    },{
        name: '2019',
        data: [3420,3258,3102,3102,2998,2568,2100,2007]
    },{
        name: '2020',
        data: [2563,2541,2431,2310,2201,2005,1988,1960]
    }],
    chart: {
        type: 'bar',
        height: 410,
        toolbar: {
            show: false,
        },
    },
    xaxis: {
        categories: ['관광/여가/오락','부동산','생활 서비스','소매','숙박','스포츠','음식', '학문/교육'],
        labels: {
            show: true,
            align: 'left',
            minWidth: 0,
            maxWidth: 80,
            style: {
                colors: ['#888'],
                fontSize: '12px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 400,
                cssClass: 'apexcharts-yaxis-label',
            },
        },
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
    colors: ['#f1d200','#f4eb00','#2985d2'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false
    },
    grid: {
        show: false,
    },
    legend: {
        show: true,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        inverseOrder: false,
        horizontalAlign: 'left',
        offsetX: 36,
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
            horizontal: 30,
            vertical: 0
        },
    },
};

chart_map_sale_04.options = {
    series: [{
        name: '거주인구(남)',
        data: [3224]
    },{
        name: '거주인구(여)',
        data: [3652]
    },{
        name: '직장인구(남)',
        data: [2563]
    },{
        name: '직장인구(여)',
        data: [3635]
    }],
    chart: {
        type: 'bar',
        height: 240,
        toolbar: {
            show: false,
        },
        offsetX: 65,
    },
    xaxis: {
        categories: ['인구'],
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
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '100%',
            // distributed: true,
        }
    },
    colors: ['#2985d2','#2eb7c4','#f4cc93','#f1d200'],
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 8,
        colors: ['#fff']
    },
    tooltip: {
        shared: true,
        intersect: false
    },
    legend: {
        show: true,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        inverseOrder: false,
        horizontalAlign: 'left',
        offsetX: -10,
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
            horizontal: 10,
            vertical: 0
        },
    },
};

chart_map_sale_05.options = {
    series: [{
        name: '10대 이하',
        data: [1365, 2565, 3524, 2536]
    }, {
        name: '10대',
        data: [1025, 4242, 925, 4353]
    }, {
        name: '20대',
        data: [1025, 2565, 1025, 2453]
    }, {
        name: '30대',
        data: [1025, 2565, 866, 1345]
    }, {
        name: '40대',
        data: [1025, 4242, 925, 3524]
    }, {
        name: '50대',
        data: [1025, 2565, 1025, 2523]
    }, {
        name: '60대 이상',
        data: [1025, 2565, 866, 4352]
    }],
    chart: {
        type: 'bar',
        width: '100%',
        height: 220,
        stacked: true,
        toolbar: {
            show: false,
        },
        offsetX: 10,
    },
    colors: ['#8176d4','#4d5dbe','#2985d2','#2eb7c4','#4cd3c5','#60bd85', '#609057'],
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['거주인구(남)','거주인구(여)','직장인구(남)','직장인구(여)'],
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
    yaxis: {
        show: true,
        axisTicks: {
            show: false,
        },
    },
    legend: {
        show: true,
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        inverseOrder: false,
        verticalAlign: 'bottom',
        horizontalAlign: 'left',
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
            horizontal: 15,
            vertical: 0
        },
    },
};

chart_map_sale_06.options = {
    series: [{
        name: '00시 ~ 08시',
        data: [1365, 1231, 1535, 1868, 1535, 2321, 2000]
    }, {
        name: '09시 ~ 12시',
        data: [1025, 1343, 925, 2010, 1252, 2035, 1900]
    }, {
        name: '13시 ~ 18시',
        data: [1025, 1355, 1025, 1985, 1235, 2100, 1869]
    }, {
        name: '19시 ~ 23시',
        data: [1025, 1000, 1055, 1564, 1352, 1865, 1495]
    }],
    chart: {
        type: 'bar',
        width: '100%',
        height: 340,
        stacked: true,
        toolbar: {
            show: false,
        },
        offsetX: 35,
    },
    colors: ['#2985d2','#2eb7c4','#b5d130','#f1d200'],
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    xaxis: {
        categories: ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일'],
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
        fontSize: '10px',
        fontFamily: "'Noto Sans Korean', 'Helvetica', sans-serif'",
        fontWeight: 400,
        inverseOrder: false,
        verticalAlign: 'bottom',
        horizontalAlign: 'left',
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
            horizontal: 20,
            vertical: 0
        },
    },
};




// 업종현황
chart_map_sale_01.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_01"), chart_map_sale_01.options).render();
}

// 총 매출 추이
chart_map_sale_02.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_02"), chart_map_sale_02.options).render();
}

// 업종별 매출 추이
chart_map_sale_03.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_03"), chart_map_sale_03.options).render();
}

// 거주/직장인구 : 성별
chart_map_sale_04.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_04"), chart_map_sale_04.options).render();
}

// 거주/직장인구 : 성별 x 연령별
chart_map_sale_05.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_05"), chart_map_sale_05.options).render();
}

// 유동인구 : 요일 x 시간대별
chart_map_sale_06.render = function() {
    new ApexCharts(document.querySelector("#chart_map_sale_06"), chart_map_sale_06.options).render();
}

