<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld"%>
<%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld"%>

<!DOCTYPE html>

<head>
	<title>이지램스(ezREMS)™ | 고객용 페이지</title>
	
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no">
	
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/main/css/reset.css" />
	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/main/css/jquery-ui.css" />
	<!-- <link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/main/css/jquery.ui.lastest.css" /> -->
	
	<!-- FontAwesome Icons -->
	<link rel="stylesheet" href="/resources/common/core/3rd/font-awesome/css/font-awesome.min.css">

	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery.bxslider.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery.customSelect.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-ui.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/tweenmax/TweenMax.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/mcustomscrollbar/mCustomScrollbar.js"></script>	
	<script type="text/javascript" src="/resources/front/pc/desian/publisher/publisher.js"></script>

	<script type="text/javascript" src="/resources/front/pc/desian/member/js/misc.js"></script>
	<script type="text/javascript" src="/resources/front/pc/desian/member/js/common.js"></script>
	<script type="text/javascript" src="/resources/front/pc/desian/member/js/ui.js"></script>
	
	<script src="https://cdn.megadata.co.kr/js/enliple_min2.js"></script>
	
	<!-- jquery.jqplot S --> 
	<link rel="stylesheet" href="/resources/common/core/3rd/jqplot_1_0_8r1250/jquery.jqplot.min.css" type="text/css" />
	
	<script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/jquery.jqplot.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/plugins/jqplot.categoryAxisRenderer.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/plugins/jqplot.barRenderer.min.js"></script>
	<!-- jquery.jqplot E  -->

	<!-- publishing 추가-->
	<link rel="stylesheet" href="/resources/front/pc/desian/new/css/common.css" type="text/css" />

  <!-- 구글 애널리틱스 추가 시작 20200610 kth -->
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-102197268-2"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-102197268-2');
  </script>
  <!-- 구글 애널리틱스 추가 끝 20200610 kth -->
	
<style>
#headerNonAmtMb span { float: left; }
#headerNonAmtMb em { position: initial; float: left; margin-left: 5px; }
</style>
	
</head>
 

<script>
	<!-- 구글 애널리틱스 추적코드 S --> 
/*   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-83849964-1', 'auto');
  ga('send', 'pageview'); */
  <!-- 구글 애널리틱스 추적코드 E -->
  
	<!-- Withpang Tracker v3.0 [공용] start -->
	var rf = new EN();
	rf.setData("sc", encodeURIComponent(""));
	rf.sendRf();
	<!-- Withpang Tracker v3.0 [공용] end -->
	
	$(document).ready(function(){
	    $(".gnb_btn").click(function(){
	        $(".gnbMenu > ul > li .menu").toggle();
	    });
	});
	
	function go_href(gbn){
		var gnb_btn = GLOBAL_SSL_URL+"/"+gbn+"/main/main.do";
		location.replace(gnb_btn);
	}
</script>
 
<iframe id="frmProc" name="frmProc" src="/dummy.htm" width="0" height="0" style="display:none"></iframe>

<%@include file="/WEB-INF/view/front/pc/desian/main/include/commonJavascript.jsp" %>
<%@ include file="/WEB-INF/view/front/pc/desian/main/include/cm_page_reload.jsp" %>
<body class="body">
	
<div id="wrap">
	<div class="dimmed"></div>
	
<script>
$(function(){
  $(".user-menu li").hover(function(){
    $('ul:first',this).show();
  }, function(){
    $('ul:first',this).hide();
  });
  
/*   $(".user-menu>li:has(ul)>a").each( function() {
    $(this).html( $(this).html()+' &or;' );
  });
  $(".user-menu ul li:has(ul)")
    .find("a:first")
    .append("<p style='float:right;margin:-3px'>&#9656;</p>"); */
});
</script>
	<!-- header 영역-->
	<div id="header">
		
		<div class="topLogin">
			<!-- utilTop -->
			<div class="utilTop">
				<ul class="user-menu">
					 <c:choose>
						<c:when test="${!empty userId}">
							<li>
								<select id="selectCont" style="border: 1px solid #ccc; padding: 5px 20px;">
								</select>
							</li>
							<li><a href="javascript:;"><i class="xi-user"></i>안녕하세요. ${reqVo.userNm} 님</a>
								<ul>
									<li><a href="javascript:pf_changePwd();"><i class="xi-lock-o"></i>비밀번호 변경</a></li>
									<li><a href="javascript:alert('서비스 준비중 입니다.');"><i class="xi-pen-o"></i>프로필 변경</a></li>
								</ul>
							</li>
							<li><a href="javascript:pf_logout();"><i class="xi-power-off"></i>로그아웃</a></li>
						</c:when>						
						<c:otherwise>						
							<li><a href="/front/member/login.do">로그인</a></li>
						</c:otherwise>
					</c:choose>
				</ul>
			</div>
			<!-- //utilTop -->
		</div>

		<!-- menuSticky -->
		<div class="menuSticky ">
			<div class="inner">
				<div class="logo_box">
				 	<h1>
				 		<!-- <a href="#header"> -->
				 		<a href="/front/main/main.do">
					 	<%-- <c:choose>
					 		<c:when test="${!empty contractInfo.atch_file_id}">
					 			${contractInfo.imaged}
					 		</c:when>
					 		<c:otherwise>
					 			<img src="/resources/front/pc/desian/main/img/popS_logo.jpg" alt="" />
					 		</c:otherwise> 
					 	</c:choose> --%>
<%--					 	<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt="" />--%>
					 </a></h1>
				</div>
				 
				<!-- gnbMenu1 -->
				<div class="gnbMenu">
					<ul>
						<li><a href="#none">청구서</a></li>
						<li id="headerNonAmt"><a href="#none">미납내역 </a></li>
						<li><a href="#none">납부내역</a></li>
						<li><a href="#none">납부방법변경</a></li>
						<li><a href="#none">주거편의 서비스</a></li>
						<li><a href="#none">공용시설 예약</a></li>
						<li><a href="#none">계약정보</a></li>
						<li id="headerNoticeCnt"><a href="#none">공지사항  </a></li>
						<li><a href="#none">고객지원</a></li>
						<li style="display: none;"><a href="#none">8번째메뉴</a></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //menuSticky -->
	</div>

	<div id="header" class="mobileType menuSticky">
		 <h1><a href="#header">
		 	<%-- <c:choose>
		 		<c:when test="${!empty contractInfo.atch_file_id}">
		 			${contractInfo.imaged}
		 		</c:when>
		 		<c:otherwise>
		 			<img src="/resources/front/pc/desian/main/img/h1_logo.png" alt="" />
		 		</c:otherwise> 
		 	</c:choose> --%>
		 	<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt=""/>
		 </a></h1>
		<a href="#none" class="btn_menu"><i class="xi-bars"></i></a><em class=""></em>
		<!-- <a href="#none" class="btn_menu"></a><em class="redPont"></em> -->
		
		<!-- Swiper -->
	    <div class="top_bar_menu ">
			<ul class="swiper-wrapper main_menu_tabs">
				<li class="swiper-slide active"><a href="#">청구서</a></li>
				<li class="swiper-slide"><a href="#">미납내역</a></li>
				<li class="swiper-slide" id="headerNonAmtMbMid"><a href="#">납부내역</a></li>
				<li class="swiper-slide"><a href="#">납부방법변경</a></li>
				<li class="swiper-slide"><a href="#">주거편의 서비스</a></li>
				<li class="swiper-slide"><a href="#">공용시설 예약</a></li>
				<li class="swiper-slide"><a href="#">계약정보</a></li>
				<li class="swiper-slide"><a href="#">공지사항</a></li>
				<li class="swiper-slide"><a href="#">고객지원</a></li>
			</ul>
	    </div>
		<!-- <div class="top_bar_menu_holder"></div> -->
		
	</div>

	<!-- mobile gnb -->
	<div class="mobileGnb">
		<div class="dimm_layer"></div>
		<div class="gnbContainer">
			<div class="gnbTop">
				<div class="accInfo">
					<p class="userName"><span>안녕하세요. ${loginHistoryInfo.usernm} 님</span> <a href="/front/member/actionLogout.do" class="logout ml5">로그아웃</a></p>
					<p class="accessDay">최근 접속일  ${loginHistoryInfo.login_date}</p>
					<p>
						<select id="selectCont_mb" style="border: 1px solid #ccc; padding: 5px 20px;">
						</select>
					</p>
					
				</div>
				<a href="#none" class="btn_close">닫기</a>
			</div>	
			<div class="menuWrap">
				<div class="notice" >
					<p>공지사항</p>
					<p id="headerNoticeNew"></p>
				</div>
				<ul class="menuList">
					<li class="icoBtn">
						<a href="#none"  class="ico01 depth1 m_menu_1"><span>청구서</span></a>
						<a href="#none" class="ico02 depth1 m_menu_2" id="headerNonAmtMb"><span>미납내역</span></a>
					</li>
					<li class="icoBtn">
						<a href="#none" class="ico03 depth1 m_menu_3"><span>납부내역</span></a> 
						<a href="#none" class="ico04 depth1 m_menu_4"><span>납부방법변경</span></a>
					</li>
					<li class="icoBtn">
						<a href="#none" class="ico09 depth1 m_menu_5"><span>주거편의 서비스</span></a>
						<a href="#none" class="ico10 depth1 m_menu_6"><span>공용시설 예약</span></a>
					</li>
					<li class="icoBtn">
						<a href="#none" class="ico05 depth1 m_menu_7"><span>계약정보</span></a>
						<a href="#none" class="ico06 depth1 m_menu_8" id="headerNoticeCntMb"><span>공지사항</span></a>
					</li>
					<li class="icoBtn">
						
						<a href="#none" class="ico07 depth1 m_menu_9"><span>고객지원</span></a>
					</li>
				</ul>
				<!-- <div class="leftbannerArea">
					<div class="leftMenuBanner">
						<ul  class="leftMenuSlide">						
							<li><a href="#none"><img src="/resources/front/pc/desian/main/img/@temp_banner.png" alt="" /></a></li>
							<li><a href="#none"><img src="/resources/front/pc/desian/main/img/@temp_banner2.png" alt="" /></a></li>
							<li><a href="#none"><img src="/resources/front/pc/desian/main/img/@temp_banner3.png" alt="" /></a></li>
							<li><a href="#none"><img src="/resources/front/pc/desian/main/img/@temp_banner4.png" alt="" /></a></li>
						</ul>
					</div>
				</div> -->
				<div class="custommer"><a href="javascript:alert('준비중입니다');" class="icoCustom"><span>고객센터 전화 걸기</span></a></div>	
			</div>
		</div>
	</div>
	<!-- //mobile gnb -->

	<!-- //header 영역-->
