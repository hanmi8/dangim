$(document).on('ready', function(){

	$(".select-hide").select2({
		minimumResultsForSearch: Infinity
	});
	$.fn.datepicker.dates['kr'] = {
		days: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
		daysShort: ["일", "월", "화", "수", "목", "금", "토", "일"],
		daysMin: ["일", "월", "화", "수", "목", "금", "토", "일"],
		months: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
		monthsShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
	};
	$('.past-enabled').datepicker({
		autoclose: true,
		format: 'yyyy/mm/dd',
    language: 'kr'
	});
	$('.input-group .input-group-addon').on("click",function(e) {
	  e.preventDefault();
	  $('.past-enabled').focus();
	});
	$(".lotte-tr-btn").on("click",function(){
	  var obj = $(this);
	  if( obj.hasClass("xi-plus") ){
	    obj.hide();
	    obj.next().show();            
	    obj.parent().parent().next().show();
	  }else{
	     obj.hide();
	     obj.prev().show();
	     obj.parent().parent().next().hide();
	  }
	});
	$('#myCarousel').carousel({
		interval:   false
	});
	
	var clickEvent = false;
	$('#myCarousel').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var from = $('.nav li.active').index();
	    var next = $(e.relatedTarget);
	    var to =  next.index();
	  	$('.nav li').removeClass('active').eq(to).addClass('active');
		}
		clickEvent = false;
	});

	$('#myCarousel2').carousel({
		interval:   false
	});
	
	var clickEvent = false;
	$('#myCarousel2').on('click', '.nav a', function() {
			clickEvent = true;
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');		
	}).on('slid.bs.carousel', function(e) {
		if(!clickEvent) {
			var from = $('.nav li.active').index();
	    var next = $(e.relatedTarget);
	    var to =  next.index();
	  	$('.nav li').removeClass('active').eq(to).addClass('active');
		}
		clickEvent = false;
	});

	// Get current path and find target link
  var pathArray = window.location.pathname.split("/");
  console.log(pathArray);
  var path = pathArray[2];
  console.log(path);
  // Account for home page with empty path
  if ( path == '' ) {
    path = 'myelyes';
  }
  switch (path) {
  	case 'about.do' :
  		$('#primary-menu > ul > li:nth-child(1)').addClass('current');
  	break;
  	case 'stayAll.do' :
  		$('#primary-menu > ul > li:nth-child(2)').addClass('current');
  	break;
  	case 'stayView.do' :
  		$('#primary-menu > ul > li:nth-child(2)').addClass('current');
  	break;
  	case 'services.do' :
  		$('#primary-menu > ul > li:nth-child(3)').addClass('current');
  	break;
  	case 'notice.do' :
  		// $('#primary-menu > ul > li:nth-child(4)').addClass('current');
  	break;
  	case 'faqs.do' :
  		// $('#primary-menu > ul > li:nth-child(4)').addClass('current');
  	break;
  	case 'mailnot.do' :
  		// $('#primary-menu > ul > li:nth-child(4)').addClass('current');
  	break;
  	default :
  		// $('#primary-menu > ul > li:nth-child(4)').addClass('current');
  }
  
  $(".pop").popover({ trigger: "manual" , html: true, animation:false})
    .on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
          $(_this).popover('hide');
      });
    }).on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
          if (!$(".popover:hover").length) {
              $(_this).popover("hide");
          }
      }, 300);
	});

  $('#primary-menu .sub-menu > a').after('<div class="depth_mag"></div>');
  
  $('#primary-menu .sub-menu .depth_mag').click(function() {
  	$('#primary-menu .sub-menu .mega-menu-content').toggle();
  });
  
  depth_checker();
  mycustomer_heighter();
});

function prepare() {
	alert("준비중입니다.");
	return false;
}

var win_width = $(window).width();
$(window).resize(function () {
  depth_checker();
  mycustomer_heighter();
});//resize



function mycustomer_heighter(){
	/*alert('a')*/
	win_width = $(window).width();
	var mycustomer_height ; 
	var mycustomer_Num = $('.mycustomer-box .col-sm-4').length;
	if( mycustomer_Num > 0){
		/*alert('b')*/
		if(win_width > 767){
			mycustomer_height = $('.mycustomer-box .col-sm-4').eq(0).height();
			$('.mycustomer-box .col-sm-4').eq(1).height(mycustomer_height);
			$('.mycustomer-box .col-sm-4').eq(2).height(mycustomer_height);
			/*alert(mycustomer_height)*/
		}else{
			$('.mycustomer-box .col-sm-4').eq(1).height('auto');
			$('.mycustomer-box .col-sm-4').eq(2).height('auto');
		}
	}
	
}


function depth_checker(){
	win_width = $(window).width();
	var sub_tab_menu_Num = $('.nav-justified > li').length;
	
   if(win_width < 992){
 		if($('.nav-justified > li').length){
 			$('.nav-justified > li').find('ul').css('display','none');
   		for(i=0;i<sub_tab_menu_Num; i++){
   			if($('.nav-justified > li').eq(i).find('ul').length){
	   			$('.nav-justified > li').eq(i).find(' > a').click(function(e) {
						e.preventDefault();  
					});
	   		};
   		};
			$('.nav-justified > li > a').click(function(e) { 
				$(this).parent().find('ul').toggle();
			});
			
			$('.nav-justified > li').mouseleave(function() {
				$(this).find('ul').css('display','none');
			});
 		};
	};
};