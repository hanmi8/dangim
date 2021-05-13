
// 업종정보
var localIndustryDistribution = localIndustryDistribution||{};
var commerceIndustryDistributionTrend = commerceIndustryDistributionTrend||{};

// 업종정보
localIndustryDistribution.options = {
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
        data: [412, 500, 300, 154, 312, 245, 535, 252]
    }, {
        name: '논현동',
        data: [575, 355, 210, 433, 222, 333, 542, 221]
    }, {
        name: '대치동',
        data: [611, 323, 548, 345, 158, 210, 433, 222]
    }, {
        name: '도곡동',
        data: [412, 500, 300, 154, 312, 245, 535, 252]
    }, {
        name: '삼전동',
        data: [575, 355, 210, 433, 222, 548, 345, 158]
    }, {
        name: '세곡동',
        data: [611, 323, 548, 345, 158, 245, 535, 252]
    }, {
        name: '수서동',
        data: [412, 500, 300, 154, 312, 333, 542, 221]
    }, {
        name: '신사동',
        data: [611, 323, 548, 345, 158, 548, 345, 158]
    }, {
        name: '압구정동',
        data: [575, 355, 210, 433, 222, 210, 433, 222]
    }, {
        name: '역삼동',
        data: [611, 323, 548, 345, 158, 333, 542, 221]
    }, {
        name: '율현동',
        data: [575, 355, 210, 433, 222, 245, 535, 252]
    }, {
        name: '일원동',
        data: [412, 500, 300, 154, 312, 548, 345, 158]
    }, {
        name: '지곡동',
        data: [611, 323, 548, 345, 158, 355, 210, 433]
    }, {
        name: '청담동',
        data: [575, 355, 210, 433, 222, 154, 312, 548]
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
commerceIndustryDistributionTrend.options = {
    series: [2237 , 3061, 2843, 1492, 3411, 2843, 1492, 3411, 2843, 1492, 3411, 2843, 1492, 3411],
    labels: ['개포동', '논현동', '대치동', '도곡동', '삼전동', '세곡동', '수서동', '신사동', '압구정동', '역삼동', '율현동', '일원동', '지곡동', '청담동'],
    chart: {
        type: 'donut',
        width:'100%',
        height: 300,
    },
    colors: ['#8176d4','#4d5dbe','#2985d2','#2eb7c4','#4cd3c5','#60bd85','#609057','#a7b01e','#b5d130','#f4eb00','#f1d200','#edaa4b','#ec6751','#e55d81'],
    stroke: {
        show: false,
        colors: '#fff',
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
        inverseOrder: false,
        offsetX: 0,
        offsetY: 8,
    },
}


// 전체업종분포현황
localIndustryDistribution.render = function() {
    new ApexCharts(document.querySelector("#localIndustryDistribution"), localIndustryDistribution.options).render();
}
// 전체업종분포트랜드
commerceIndustryDistributionTrend.render = function() {
    new ApexCharts(document.querySelector("#commerceIndustryDistributionTrend"), commerceIndustryDistributionTrend.options).render();
}


