// 시간별(클릭수 높은 지역)
var useLogTimeClick = useLogTimeClick||{};
// 다운로드 통계(엑셀/그래프)
var useLogDownloadStatistics = useLogDownloadStatistics||{};
// 클릭수 및 체류시간 그래프
var useLogClickStayTime = useLogClickStayTime||{};




// 시간별(클릭수 높은 지역)
useLogTimeClick.options = {
    chart: {
        type: 'bar',
        toolbar: {
            show: false,
        },
        width:'100%',
        height: 340,
    },
    series: [{
        name: '오전',
        data: [1700, 2400, 2700, 2500, 2880]
    },{
        name: '오후',
        data: [2600, 2400, 2500, 2700, 2600]
    },{
        name: '저녁',
        data: [2300, 2500, 2200, 3000, 2900]
    }],
    xaxis: {
        // categories: ['서울시 강남구 역삼동', '서울시 강남구 압구정동', '서울시 송파구 잠실4동', '수원시 팔달구 시원동', '경기도 용인시 처인구 유방동'],
        categories: ['서울시 강남구 역삼동', '서울시 강남구 압구정동', '서울시 송파구 잠실4동', '수원시 팔달구 시원동', '경기도 용인시 처인구 유방동'],
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '60%',
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
    colors: ['#2eb7c4','#b5bf1b','#f1c644'],
    stroke: {
        show: true,
        // curve: 'smooth',
        lineCap: 'butt',
        colors: '#ffffff',
        width: 2,
        dashArray: 0,
    },
    grid: {
        padding: {
            left: -60,
        }
    },
    legend: {
        show: true,
        showForSingleSeries: false,
        showForNullSeries: true,
        showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'right',
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
            horizontal: 20,
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
// 지역별년도별공급추이
useLogDownloadStatistics.options = {
    chart: {
        type: 'line',
        toolbar: {
            show: false,
        },
        width: '100%',
        height: 360,
        zoom: {
            enabled: false,
        }
    },
    grid: {
        padding: {
            left: 30,
            right: 30,
        },
    },
    series: [{
        name: '엑셀',
        data: [6, 13, 5.5, 9]
    },{
        name: '그래프',
        data: [9, 22, 0, 17]
    }],
    xaxis: {
        categories: ['2017', '2018', '2019', '2020']
    },
    colors: ['#2eb7c4','#eab600'],
    stroke: {
        show: true,
        width: 4,
        dashArray: 0,
    },
    markers: {
        size: 8,
        colors: ['#2eb7c4', '#eab600',],
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
        position: 'top',
        horizontalAlign: 'right',
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
            horizontal: 20,
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
// 클릭수 및 체류시간 그래프
useLogClickStayTime.options = {
    series: [{
        name: '엑셀',
        type: 'column',
        data: [1400, 1300, 1400, 1300, 1500, 1380, 1580, 1500, 1590, 1750],
    },{
        name: '그래프',
        type: 'line',
        data: [204, 306, 271, 312, 283, 500, 500, 900, 600, 500],
    }],
    chart: {
        width:'100%',
        height: 500,
        type: 'line',
        stacked: false,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            // endingShape: 'rounded'
        },
    },
    markers: {
        size: 8,
        colors: ['#2eb7c4'],
        strokeColors: '#fff',
        strokeWidth: 0,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        shape: "circle",
        radius: 10,
        offsetX: 0,
        dropShadow: {
            enabled: true,
            // enabledOnSeries: [1],
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
        enabled: false,
    },
    // grid: {
    //     padding: {
    //         left: 100,
    //         right: 100,
    //     },
    // },
    xaxis: {
        categories: ['공급동향', '평균분양가', '임대료변동률', '평균임대료', '실거래추이', '업종정보', 'GIS건물/분양', '상권분석리포트', '상권분석리포트 상세', '인구정보'],
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
                color: '#e0dcd8'
            },
            labels: {
                style: {
                    colors: '#e0dcd8',
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
    colors: ['#d4cfc9','#2eb7c4'],
    legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'right',
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




// 지역별년도별공급추이
useLogTimeClick.render = function() {
    new ApexCharts(document.querySelector("#useLogTimeClick"), useLogTimeClick.options).render();
}

// 지역별년도별공급추이
useLogDownloadStatistics.render = function() {
    new ApexCharts(document.querySelector("#useLogDownloadStatistics"), useLogDownloadStatistics.options).render();
}

// 클릭수 및 체류시간 그래프
useLogClickStayTime.render = function() {
    new ApexCharts(document.querySelector("#useLogClickStayTime"), useLogClickStayTime.options).render();
}

