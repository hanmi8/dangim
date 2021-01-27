"use strict";

// Shared Colors Definition
const primary = '#4b8eef';
const success = '#7ed0f3';
const info = '#ff6f38';
const warning = '#ffac5c';
const danger = '#F64E60';

var KTApexChartsDemo = function () {
	// Private functions
	var _demo1 = function () {
		const apexChart = "#chart_1";
		var options = {
			series: [{
				name: '근린상가',
                data: [563, 577, 96, 0]
            }, {
				name: '단지내상가',
                data: [121, 324, 627, 0]
            }, {
				name: '복합상가',
				data: [94, 0, 0, 0]
            }, {
				name: '기타상가',
				data: [1083, 512, 788, 50]
			}],
			chart: {
				height: 200,
				type: 'bar',
				stacked: true,
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['2018', '2019', '2020', '2021'],
			},
			colors: ["#7ed0f3", "#4b8eef", "#ff6f38", "#dcdcde"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}
	// 201215 추가 내용
	var _demo1_1 = function () {
		const apexChart = "#chart_1_1";
		var options = {
			series: [{
				name: '지역비교',
                data: [563, 577, 96, 370, 120, 350]
            }],
			chart: {
				height: 200,
				type: 'bar',
				stacked: true,
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['세곡동', '첨당동', '자곡동', '개포동', '대치동', '역삼동'],
			},
			colors: ["#7ed0f3", "#4b8eef", "#ff6f38", "#dcdcde"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}
	// 21.01.04 series 수정
	var _demo2 = function () {
		const apexChart = "#chart_2";
		var options = {
			series: [{
				name: '근린상가',
				data: [1000, 1050, 1100]
			}, {
				name: '단지내상가',
				data: [1600, 1300, 1300]
			}, {
				name: '복합상가',
				data: [500, 470, 600]
			}, {
				name: '기타상가',
				data: [1300, 1000, 600]
			}],
			chart: {
				height: 200,
				type: 'line',
				zoom: {
					enabled: false
				}
            },
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 1,
			},
			xaxis: {
				categories: ['2018', '2019', '2020'],
			},
			colors: [primary, success, info, "#dcdcde"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo3 = function () {
		const apexChart = "#chart_3";
		var options = {
			series: [{
				name: '근린상가',
				data: [1000, 1050, 1100]
			}, {
				name: '단지내상가',
				data: [1600, 1300, 1300]
			}, {
				name: '복합상가',
				data: [500, 470, 600]
			}, {
				name: '기타상가',
				data: [1300, 1000, 600]
			}],
			chart: {
				height: 200,
				type: 'bar',
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
				},
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['2018', '2019', '2020'],
			},
			colors: ["#dcdcde", "#4b8eef", "#ff6f38", "#dcdcde"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}
	// 201215 차트추가 
	var _demo3_1 = function () {
		const apexChart = "#chart_3_1";
		var options = {
			series: [{
				name: '남',
				data: [1000, 1050, 1100, 500, 800, 1100]
			}, {
				name: '여',
				data: [1600, 1300, 1300, 1100, 200, 900]
			}],
			chart: {
				height: 200,
				type: 'bar',
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
				},
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['10대', '20대', '30대', '40대', '50대', '60대'],
			},
			colors: ["#4b8eef", "#ff6f38"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo4 = function () {
		const apexChart = "#chart_4";
		var options = {
			series: [{
				name: '매출정보',
				data: [1000, 1050, 1100]
			}],
			chart: {
				height: 200,
				type: 'bar',
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
				},
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['2018', '2019', '2020'],
			}
			//  colors: [primary, success, info, warning]
			// colors: [primary]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	// 201215 차트추가 
	var _demo4_1 = function () {
		const apexChart = "#chart_4_1";
		var options = {
			series: [{
				name: '유동인구',
				data: [1000, 1050, 1100, 1000, 800, 500, 1500]
			}],
			chart: {
				height: 200,
				type: 'bar',
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
				},
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['월', '화', '수', '목', '금', '토', '일'],
			}
			//  colors: [primary, success, info, warning]
			// colors: [primary]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo5 = function () {
		const apexChart = "#chart_5";
		var options = {
			series: [{
				name: '2020',
				data: [10, 12, 11, 4, 20, 40, 10, 50]
			}],
			chart: {
				height: 200,
				type: 'bar',
				stacked: false,
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: true,
				},
			},
			dataLabels: {
				enabled: false
			},
			grid: {
				show: false,
				xaxis: {
					lines: {
						show: true
					}
				}, 
				yaxis: {
					lines: {
						show: true
					}
				}, 
			},
			xaxis: {
				categories: ['도소매', '외식', '서비스', '제조', '금융', '종교', '국가기관', '기타'],
			},
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}
	// 201215 차트 추가 
	var _demo5_1 = function () {
		const apexChart = "#chart_5_1";
		var options = {
			series: [44, 55, 30, 43, 20, 15, 8, 2],
			chart: {
				width: 500,
				type: 'pie',
			},
			labels: ['도소매', '외식', '서비스', '제조', '금융', '종교', '국가기관', '기타'],
			responsive: [{
				breakpoint: 480,
				options: {
					chart: {
						width: 200
					},
					legend: {
						position: 'bottom'
					}
				}
			}],
			colors: [primary, success, warning, danger, "#48e44d", "#8b7ae6", "#848484", "#cecece"  ]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo6 = function () {
		const apexChart = "#chart_6";
		var options = {
			series: [{
				name: '남',
                data: [11, 6.3, 7.6, 9.9, 6.3, 6.5]
            }, {
				name: '여',
                data: [9.1, 6.8, 10.8, 11.3, 6.1, 8.2]
			}],
			chart: {
				height: 200,
				type: 'bar',
				stacked: true,
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['10대', '20대', '30대', '40대', '50대', '60대'],
			},
			colors: [primary, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo7 = function () {
		const apexChart = "#chart_7";
		var options = {
			series: [{
				name: '근린상가',
                data: [563, 577, 96, 0]
            }, {
				name: '단지내상가',
                data: [121, 324, 627, 0]
            }, {
				name: '복합상가',
				data: [94, 0, 0, 0]
            }, {
				name: '기타상가',
				data: [1083, 512, 788, 50]
			}],
			chart: {
				height: 200,
				type: 'bar',
				stacked: true,
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['2018', '2019', '2020', '2021'],
			},
			colors: ["#7ed0f3", "#4b8eef", "#ff6f38", "#dcdcde"]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo8 = function () {
		const apexChart = "#chart_8";
		var options = {
			series: [{
				name: 'B1',
				data: [210, 788, 791]
			}, {
				name: '1F',
				data: [756, 636, 860]
			}, {
				name: '2F',
				data: [347, 383, 476]
			}],
			chart: {
				height: 200,
				type: 'line',
				zoom: {
					enabled: false
				}
            },
			dataLabels: {
				enabled: false
			},
			stroke: {
				show: true,
				width: 1,
			},
			xaxis: {
				categories: ['2018', '2019', '2020'],
			},
			colors: [primary, success, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo9 = function () {
		const apexChart = "#chart_9";
		var options = {
			series: [{
				name: '근린상가',
				data: [1000, 1050, 1100]
			}, {
				name: '단지내상가',
				data: [1600, 1300, 1300]
			}, {
				name: '복합상가',
				data: [500, 470, 600]
			}, {
				name: '기타상가',
				data: [1300, 1000, 600]
			}],
			chart: {
				height: 200,
				type: 'bar',
				zoom: {
					enabled: false
				}
			},
			plotOptions: {
				bar: {
					horizontal: false,
					columnWidth: '55%',
				},
			},
			stroke: {
				show: true,
				width: 2,
				colors: ['transparent']
			},
			dataLabels: {
				enabled: false
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['2018', '2019', '2020'],
			},
			colors: [primary, success, info, warning]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}

	var _demo10 = function () {
		const apexChart = "#chart_10";
		var options = {
			series: [{
				name: '남',
                data: [11, 6.3, 7.6, 9.9, 6.3, 6.5]
            }, {
				name: '여',
                data: [9.1, 6.8, 10.8, 11.3, 6.1, 8.2]
			}],
			chart: {
				height: 200,
				type: 'bar',
				stacked: true,
				zoom: {
					enabled: false
				}
			},
			dataLabels: { 	
				enabled: false
			},
			stroke: {
				width: 1,
				colors: ['#fff']
			},
			fill: {
				opacity: 1
			},
			xaxis: {
				categories: ['10대', '20대', '30대', '40대', '50대', '60대'],
			},
			colors: [primary, info]
		};

		var chart = new ApexCharts(document.querySelector(apexChart), options);
		chart.render();
	}


	return {
		// public functions
		init: function () {
			_demo1();
			_demo2();
			_demo3();
			_demo4();
			_demo5();
			_demo6();
			_demo7();
			_demo8();
			_demo9();
			_demo10();
			_demo1_1();
			_demo3_1();
			_demo4_1();
			_demo5_1();
		}
	};
}();

jQuery(document).ready(function () {
	KTApexChartsDemo.init();
});
