var scrollTop,
	lyNums = 0,
	lyOne = 0;

// �⑥닔 �ㅽ뻾
$(function(){
	selectDesign(); //select box �붿옄��
	//listType01(); //�꾩퐫�붿뼵 由ъ뒪��
	menuSticky(); //menu sticky
	tabEvent(); //�� �대깽��
	tabEvent02(); //�� �대깽��
	mobile_allMenu(); //mobile gnb
	$('.pcSlide').css('visibility','hidden');
	$('.mobileSlide').css('visibility','hidden');
	var slider1 = $('.pcSlide').bxSlider({
		slideWidth: 306,
		minSlides: 1,
		maxSlides: 3,
		moveSlides:1,
		slideMargin: 10,
		auto: true,
		touchEnabled:false,
		pager : false,
		onSliderLoad: function(){
			$('.pcSlide').css('visibility','visible');
		},
		onSlideAfter: function() {
			slider1.stopAuto();
			slider1.startAuto();
		}
	});


	var slider2 = $('.mobileSlide').bxSlider({
		auto: true,
		touchEnabled:false,
		pager : false,
		onSliderLoad: function(){
			$('.mobileSlide').css('visibility','visible');
		},
		onSlideAfter: function() {
			slider2.stopAuto();
			slider2.startAuto();
		}
	});

});

$(window).load(function(){
	$( ".cal_input" ).datepicker({
		changeMonth: true,
		changeYear: true,
		dayNames: ['�쇱슂��', '�붿슂��', '�붿슂��', '�섏슂��', '紐⑹슂��', '湲덉슂��', '�좎슂��'],
		dayNamesMin: ['��', '��', '��', '��', '紐�', '湲�', '��'],
		monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
		monthNames: ['1��','2��','3��','4��','5��','6��','7��','8��','9��','10��','11��','12��'],
		nextText: '�ㅼ쓬 ��',
		prevText: '�댁쟾 ��',
		showButtonPanel: true,
		currentText: '�ㅻ뒛 �좎쭨',
		closeText: '�リ린',
		dateFormat: "yy-mm-dd",

		showMonthAfterYear: true,
		yearSuffix: ' �� ',
		monthSuffix: ' ��',
		showOtherMonths: true, // �섎㉧吏� �좎쭨�� �붾㈃�� �쒖떆
		selectOtherMonths: true
	});

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.btn_goTop').fadeIn();
			$('.btn_goBack').fadeIn();
		} else {
			$('.btn_goTop').fadeOut();
			$('.btn_goBack').fadeOut();
		}
	});
	$(".btn_goTop").click(function() {
		$('html, body').animate({
			scrollTop : 0
		}, 1000);
		return false;
	});

	var slider3 = $('.leftMenuSlide').bxSlider({
		auto: true,
		touchEnabled:false,
		/*controls:false,*/
		onSlideAfter: function() {
			slider3.stopAuto();
			slider3.startAuto();
		}
	});

	//$("body").on("click", ".btn_goTop", function(){
	//$('html, body').stop().animate({scrollTop: $("html").offset().top}, 1000, "easeOutExpo");
	//});


	$(".layerArea .tab_wrap li.tab1").click(function(){
		$(".layerArea .tab_wrap li.tab1").addClass("on");
		$(".layerArea .tab_wrap li.tab2").removeClass("on");
		$(".layerArea .tab_wrap li.tab3").removeClass("on");
		$(".layerArea .textCont.con1").show();
		$(".layerArea .textCont.con2").hide();
		$(".layerArea .textCont.con3").hide();
	});
	$(".layerArea .tab_wrap li.tab2").click(function(){
		$(".layerArea .tab_wrap li.tab2").addClass("on");
		$(".layerArea .tab_wrap li.tab1").removeClass("on");
		$(".layerArea .tab_wrap li.tab3").removeClass("on");
		$(".layerArea .textCont.con2").show();
		$(".layerArea .textCont.con1").hide();
		$(".layerArea .textCont.con3").hide();
	});
	$(".layerArea .tab_wrap li.tab3").click(function(){
		$(".layerArea .tab_wrap li.tab3").addClass("on");
		$(".layerArea .tab_wrap li.tab2").removeClass("on");
		$(".layerArea .tab_wrap li.tab1").removeClass("on");
		$(".layerArea .textCont.con3").show();
		$(".layerArea .textCont.con2").hide();
		$(".layerArea .textCont.con1").hide();
	});
});




// select box �붿옄��
function selectDesign(){
	$(".selectBox:not('.lay')").each(function(index){
		if(!$(this).hasClass("on")){
			$(this).addClass("on");
			$(this).find("select.selectCus").customSelect({customClass:"selType"});
		}
	});
}

// faq 由ъ뒪�� �대깽��
function listType01() {

	var listWrap = $('.list_style01')
		, q = listWrap.find('dt')
		, a = listWrap.find('dd');

	q.each(function() {
		var _this = $(this)
			, trigger = _this.children('a')
			, answer = _this.next('dd');

		trigger.on({ click : function() {
				if ( trigger.hasClass('active') ) {
					trigger.removeClass('active');
					answer.stop().slideUp(200);
				} else {
					q.not(_this).children('a').removeClass('active');
					trigger.addClass('active');

					a.not(answer).stop().slideUp(200);
					answer.stop().slideDown(200);
				}
			}
		});
		trigger.on({ click : function() {
				return false;
			}
		});
	});
}



/* service indicator �대깽�� */
function menuSticky() {

	var menuSticky = $('.menuSticky ')
		, triggerWrap = $('.gnbMenu > ul')
		, trigger = triggerWrap.find('li a')
		, TOP = menuSticky.offset().top
		, section = $('.container .section')
		, currentScrollTop = $(window).scrollTop();

	_tabFix();
	_checkTab();
	_bind();

	$(window).on({
		'scroll.fnIndicatorMove' : function() {
			currentScrollTop = $(window).scrollTop();
			_tabFix();
		}
	});

	function _tabFix() {
		if ( currentScrollTop > 10 ) {
			if ( !$('.menuSticky').hasClass('fixed') ) {
				$('.menuSticky').addClass('fixed');
				$('.container').addClass('fixed');
			}
			_checkTab();
		} else {
			if ( $('.menuSticky').hasClass('fixed') ) {
				$('.menuSticky').removeClass('fixed');
				$('.container').removeClass('fixed');
				trigger.removeClass("active")
			}
		}
	}

	function _bind() {
		trigger.each(function(i) {
			$(this).on({
				click : function() {
					$('html, body').stop().animate({
						scrollTop : section.eq(i).offset().top - $('.menuSticky').outerHeight(true) -20

					}, 200);

					$(this).addClass("active");
					trigger.not($(this)).removeClass("active");

					return false;
				}
			});
		});
	}

	function _checkTab() {
		section.each(function(i) {
			var thisTop = $(this).offset().top ;
			if ( currentScrollTop + 110 > thisTop ) {
				trigger.removeClass('active');
				trigger.eq(i).addClass('active');
				$('.main_menu_tabs li').eq(i).addClass('active').siblings().removeClass('active');
				$(document).ready(function (){
					swiper_main_menu.slideTo(i, 300);
//					console.log("�쒕떎");
				});
			};
		});
	};
};

var home_total_idx = 0;
var tabLen = $('.main_menu_tabs > li').length;
var swiper_main_menu;

$(document).ready(function (){

	/*�꾩껜 硫붿씤 �곷떒 �ㅼ��댄봽 硫붾돱 �쒖옉*/
	swiper_main_menu = new Swiper('.top_bar_menu', {
		pagination: '.swiper-pagination',
		slidesPerView: 'auto',
		paginationClickable: true,
		spaceBetween: 0,
		freeMode: true,
		pagination: false,
		onInit: function(swiper){

		},
		onSlideChangeStart: function(swiper){
			console.log(swiper.activeIndex);
			home_total_idx = swiper.activeIndex;
			/*			if( home_total_idx < 0 ) {
                        home_total_idx = tabLen ;
                    } else if( home_total_idx == tabLen ){
                        home_total_idx = 0;
                    }*/
			$('.main_menu_tabs > li').removeClass('active').eq(home_total_idx).addClass('active');
			if( home_total_idx < tabLen ) {
				swiper_main_menu.slideTo(home_total_idx, 300);
			}
			/*
                    console.log("�쒕떎")
                    var main_content_height = $('.main_content_slide.swiper-slide-active').height();
                    console.log("�꾩옱而⑦뀗痢� �믪씠 : "+ main_content_height)
                    //$('body').height(main_content_height)

                    main_current_page_Checker();*/

		}


	});


	$('.main_menu_tabs > li > a').on('click', function(e){
		$(this).parent().addClass('active').siblings().removeClass('active');
		var tabIdx = $(this).parent().index();
		var tab_Num = tabIdx+1;
		swiper_main_menu.slideTo(tabIdx, 300);
		e.preventDefault();
		$('.menuList li a.m_menu_'+tab_Num).trigger('click')
	});

	tabLen = $('.main_menu_tabs > li').length;



});


/* �⑸�諛⑸쾿 蹂�寃� tab �대깽�� */
function tabEvent() {
	var tabWrap = $('.section04 > .tabWrap')
		, tabBtn = $('.tabBtn')
		, trigger = tabBtn.find('a')
		, content = tabWrap.find('.tabCont');

	tabWrap.find(trigger).each(function(index) {
		$(this).on({
			click : function() {
				$(this).addClass("active");
				tabWrap.find(trigger).not($(this)).removeClass("active");
				tabWrap.find(content).removeClass("active");
				tabWrap.find(content).eq(index).addClass("active");
			}
		});
	});
}

/* 怨좉컼吏��� tab �대깽�� */
function tabEvent02() {
	var tabWrap = $('.section07 > .tabWrap')
		, tabBtn = $('.tabBtn')
		, trigger = tabBtn.find('a')
		, cont = tabWrap.find('.tabCont');

	tabWrap.find(trigger).each(function(index) {
		$(this).on({
			click : function() {
				$(this).addClass("active");
				tabWrap.find(trigger).not($(this)).removeClass("active");
				tabWrap.find(cont).removeClass("active");
				tabWrap.find(cont).eq(index).addClass("active");
			}
		});
	});
}

// �덉씠�� �닿린
function openLay(name){
	lyNums++;
	$(".layerArea").each(function(index){
		if($(this).hasClass(name)){
			$(this).layerScript({divs : name});
		}
	});
}
// �덉씠�� �リ린
function layerClose(name){
	$(".layerArea").each(function(index){
		if($(this).hasClass(name)){
			var e = $(this);

			e.hide().attr("style","");
			$("#layerBg").attr("style","");

			lyNums --;
			if(lyNums == 0){
				$("html").css("overflow-y","auto");
				$("body").removeClass("lyOn");
				$("#layerBg").remove();
			}
		}
	});
}


//mobile gnb
function mobile_allMenu(){
	var wrap = $('.mobileGnb')
		, menuContainer = wrap.find('.gnbContainer')
		, dimmLayer = wrap.find('.dimm_layer')
		, scroller = wrap.find('.menuWrap')
		, section = $('.container .section')
		, allMenu_trigger = wrap.find('ul > li .depth1');

	_all_bind();

	scroll();
	open();
	close();

	// 紐⑤컮�� 硫붾돱�대┃�� gnb �ㅽ뵂
	function open(){
		TweenMax.set(menuContainer, { x : '100%' });

		$("body").on("click", ".btn_menu", function(){
			wrap.show();
			$('html, body').addClass('block');
			dimmLayer.fadeIn(250);
			TweenMax.to(menuContainer, 0.3, { x : '0%', ease : Power1.easeOut });
		});
	}

	// 紐⑤컮�� gnb 硫붾돱 �ㅽ겕濡�
	function scroll() {
		scroller.mCustomScrollbar({
			scrollInertia : 500
			, theme:"dark"
		});
	}

	// 紐⑤컮�� 硫붾돱 �リ린 �대┃�� gnb 硫붾돱 �④�
	function close(){
		$("body").on("click", ".mobileGnb .btn_close, .mobileGnb .dimm_layer", function(){
			TweenMax.to(menuContainer, 0.3, { x : '100%', ease : Power1.easeOut, onComplete : function() {
					wrap.hide();
					$('html, body').removeClass('block');
				}});
			dimmLayer.fadeOut(250);
		});
	}

	function _all_bind() {
		allMenu_trigger.each(function(i) {
			$(this).on({
				click : function() {
					/*$('html, body').stop().animate({
						scrollTop : section.eq(i).offset().top - $('.mobileType').outerHeight(true) -5
					}, 200);*/
					var win_w = $(window).width();
					//alert(win_w)
					//紐⑤컮�쇰찓�� �대┃ �대깽�� �쒖뼱
					if(win_w > 736){
						$('html, body').stop().animate({
							scrollTop : section.eq(i).offset().top - $('.mobileType').outerHeight(true) -15
						}, 200);
					}else{
						$('html, body').stop().animate({
							scrollTop : section.eq(i).offset().top - $('.mobileType').outerHeight(true) -35
						}, 200);
					}

					dimmLayer.fadeOut(250);
					wrap.stop().fadeOut(300);
					$('html, body').removeClass('block');
					$(".btn_allmenu").removeClass("active");
					allMenu_trigger.not($(this)).removeClass("active");

					return false;
				}
			});
		});
	}

}

//allMenu
function allMenu(){
	var wrap = $('.allmenuWrap')
		, dimmLayer = $('.dimmed')
		, scroller = wrap.find('.scroller_wrap')
		, section = $('.container .section')
		, allMenu_trigger = wrap.find('ul > li .depth1');

	_all_bind();

	$("body").on("click", ".btn_allmenu", function(){
		if(!$(this).hasClass("active")){
			wrap.stop().slideDown(300);
			$('html, body').addClass('block');
			dimmLayer.fadeIn(250);
			$(this).addClass("active");
		}else{
			wrap.stop().slideUp(300);
			dimmLayer.fadeOut(250);
			$(this).removeClass("active");
			$('html, body').removeClass('block');
		}
	});


}

// Plugin Script
jQuery(function($){
	//[s] Layer Script
	$.fn.layerScript = function(o){
		o = $.extend({
			divs : ''
		}, o || {});

		var e = $(this),
			bg = $('<div id="layerBg"></div>'),
			ly_w,
			ly_h,
			closeDiv = o.divs;

		//tab
		if(e.hasClass("tab")){
			// �뚮윭洹몄씤 �� 硫붾돱
			$(".tabArea.ly").tabScript({
				btns : '.btnTab>a',
				conts : '.tabConts',
				classd: 'active'
			});
		}

		$("body").attr("lyNums", lyNums)
		// �닿린
		if(!$("body").hasClass("lyOn")){
			$("html").css("overflow-y","hidden");
			$("body").addClass("lyOn");
			bg.prependTo($("body"));
		}

		ly_w = e.width();
		ly_h = e.height();
		e.css({"margin-left":-(ly_w/2), "margin-top":-(ly_h/2)}).show();

		if(lyNums == 2){
			$("#layerBg").css("z-index",12);
			e.css("z-index",13);
		}

		// �リ린
		$(this).find(".closeLy").off("click");
		$(this).find(".closeLy").on('click', function(){
			layerClose(closeDiv);
		});
	}
	//[e] Layer Script
});
