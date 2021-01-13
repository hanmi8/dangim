<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
    <%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
    <%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
    <%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld" %>
    <%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld" %>

    <!DOCTYPE html>

    <head>
    <title>이지램스(ezREMS)™ | 고객용 페이지</title>

    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport"
    content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no">

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

    <script type="text/javascript" src="https://cdn.megadata.co.kr/js/enliple_min2.js"></script>

    <!-- jquery.jqplot S -->
    <link rel="stylesheet" href="/resources/common/core/3rd/jqplot_1_0_8r1250/jquery.jqplot.min.css" type="text/css" />

    <script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/jquery.jqplot.min.js"></script>
    <script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/plugins/jqplot.categoryAxisRenderer.min.js"></script>
    <script type="text/javascript" src="/resources/common/core/3rd/jqplot_1_0_8r1250/plugins/jqplot.barRenderer.min.js"></script>
    <!-- jquery.jqplot E -->

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

    <script>
    $(function(){
		$("body").on('mousewheel',function(e){
			var wheel = e.originalEvent.wheelDelta;
			var windowWidth = $(window).width();

			//스크롤값을 가져온다.
			if(windowWidth < 737) {
				if(wheel > 0) {
					//스크롤 올릴때
					$('.mobileType.menuSticky').removeClass('fixed');
				} else {
					//스크롤 내릴때
					$('.mobileType.menuSticky').addClass('fixed');
				}
            }
		});
    });
    </script>


    </head>


    <script>
    <!-- 구글 애널리틱스 추적코드 S -->
    /* (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
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
    <body>

    <div id="wrap">
    <div class="dimmed"></div>

    <script>
    $(function(){
    $(".user-menu li").hover(function(){
    $('ul:first',this).show();
    }, function(){
    $('ul:first',this).hide();
    });

    /* $(".user-menu>li:has(ul)>a").each( function() {
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
            <li><a href="javascript:;">
            <%--							<i class="xi-user"></i>--%>
            안녕하세요. ${reqVo.userNm} 님</a>
            <ul>
            <li><a href="javascript:pf_changePwd();"><i class="xi-lock-o"></i>비밀번호 변경</a></li>
            <li><a href="javascript:alert('서비스 준비중 입니다.');"><i class="xi-pen-o"></i>프로필 변경</a></li>
            </ul>
            </li>
            <li><a href="javascript:pf_logout();">
            <%--							<i class="xi-power-off"></i>--%>
            로그아웃</a></li>
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
    <c:if test="${projMenu.front_menu_code_1  != null && projMenu.front_menu_code_1  != 'null' && projMenu.front_menu_code_1  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_1  != null && projMenu.front_menu_id_1  != 'null'  && projMenu.front_menu_id_1  != ''}">
                <li><a id="${projMenu.front_menu_id_1}" href="#none" class="active">${projMenu.front_menu_code_1}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none" class="active">${projMenu.front_menu_code_1}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_2  != null && projMenu.front_menu_code_2  != 'null' && projMenu.front_menu_code_2  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_2  != null && projMenu.front_menu_id_2  != 'null'  && projMenu.front_menu_id_2  != ''}">
                <li><a id="${projMenu.front_menu_id_2}" href="#none">${projMenu.front_menu_code_2}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_2}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_3  != null && projMenu.front_menu_code_3  != 'null' && projMenu.front_menu_code_3  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_3  != null && projMenu.front_menu_id_3  != 'null'  && projMenu.front_menu_id_3  != ''}">
                <li><a id="${projMenu.front_menu_id_3}" href="#none">${projMenu.front_menu_code_3}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_3}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_4  != null && projMenu.front_menu_code_4  != 'null' && projMenu.front_menu_code_4  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_4  != null && projMenu.front_menu_id_4  != 'null'  && projMenu.front_menu_id_4  != ''}">
                <li><a id="${projMenu.front_menu_id_4}" href="#none">${projMenu.front_menu_code_4}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_4}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_5  != null && projMenu.front_menu_code_5  != 'null' && projMenu.front_menu_code_5  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_5  != null && projMenu.front_menu_id_5  != 'null'  && projMenu.front_menu_id_5  != ''}">
                <li><a id="${projMenu.front_menu_id_5}" href="#none">${projMenu.front_menu_code_5}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_5}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_6  != null && projMenu.front_menu_code_6  != 'null' && projMenu.front_menu_code_6  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_6  != null && projMenu.front_menu_id_6  != 'null'  && projMenu.front_menu_id_6  != ''}">
                <li><a id="${projMenu.front_menu_id_6}" href="#none">${projMenu.front_menu_code_6}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_6}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_7  != null && projMenu.front_menu_code_7  != 'null' && projMenu.front_menu_code_7  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_7  != null && projMenu.front_menu_id_7  != 'null'  && projMenu.front_menu_id_7  != ''}">
                <li><a id="${projMenu.front_menu_id_7}" href="#none">${projMenu.front_menu_code_7}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_7}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_8  != null && projMenu.front_menu_code_8  != 'null' && projMenu.front_menu_code_8  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_8  != null && projMenu.front_menu_id_8  != 'null'  && projMenu.front_menu_id_8  != ''}">
                <li><a id="${projMenu.front_menu_id_8}" href="#none">${projMenu.front_menu_code_8}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_8}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_9  != null && projMenu.front_menu_code_9  != 'null' && projMenu.front_menu_code_9  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_9  != null && projMenu.front_menu_id_9  != 'null' && projMenu.front_menu_id_9  != ''}">
                <li><a id="${projMenu.front_menu_id_9}" href="#none">${projMenu.front_menu_code_9}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_9}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_10 != null && projMenu.front_menu_code_10  != 'null' && projMenu.front_menu_code_10 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_10  != null && projMenu.front_menu_id_10  != 'null' && projMenu.front_menu_id_10  != ''}">
                <li><a id="${projMenu.front_menu_id_10}" href="#none">${projMenu.front_menu_code_10}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_10}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_11 != null && projMenu.front_menu_code_11  != 'null' && projMenu.front_menu_code_11 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_11  != null && projMenu.front_menu_id_11  != 'null' && projMenu.front_menu_id_11  != ''}">
                <li><a id="${projMenu.front_menu_id_11}" href="#none">${projMenu.front_menu_code_11}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_11}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_12 != null && projMenu.front_menu_code_12  != 'null' && projMenu.front_menu_code_12 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_12  != null && projMenu.front_menu_id_12  != 'null' && projMenu.front_menu_id_12  != ''}">
                <li><a id="${projMenu.front_menu_id_12}" href="#none">${projMenu.front_menu_code_12}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_12}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_13 != null && projMenu.front_menu_code_13  != 'null' && projMenu.front_menu_code_13 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_13  != null && projMenu.front_menu_id_13  != 'null' && projMenu.front_menu_id_13  != ''}">
                <li><a id="${projMenu.front_menu_id_13}" href="#none">${projMenu.front_menu_code_13}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_13}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_14 != null && projMenu.front_menu_code_14  != 'null' && projMenu.front_menu_code_14 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_14  != null && projMenu.front_menu_id_14  != 'null' && projMenu.front_menu_id_14  != ''}">
                <li><a id="${projMenu.front_menu_id_14}" href="#none">${projMenu.front_menu_code_14}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_14}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_15 != null && projMenu.front_menu_code_15  != 'null' && projMenu.front_menu_code_15 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_15  != null && projMenu.front_menu_id_15  != 'null' && projMenu.front_menu_id_15  != ''}">
                <li><a id="${projMenu.front_menu_id_15}" href="#none">${projMenu.front_menu_code_15}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_15}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_16 != null && projMenu.front_menu_code_16  != 'null' && projMenu.front_menu_code_16 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_16  != null && projMenu.front_menu_id_16  != 'null' && projMenu.front_menu_id_16  != ''}">
                <li><a id="${projMenu.front_menu_id_16}" href="#none">${projMenu.front_menu_code_16}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_16}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_17 != null && projMenu.front_menu_code_17  != 'null' && projMenu.front_menu_code_17 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_17  != null && projMenu.front_menu_id_17  != 'null' && projMenu.front_menu_id_17  != ''}">
                <li><a id="${projMenu.front_menu_id_17}" href="#none">${projMenu.front_menu_code_17}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_17}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_18 != null && projMenu.front_menu_code_18  != 'null' && projMenu.front_menu_code_18 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_18  != null && projMenu.front_menu_id_18  != 'null' && projMenu.front_menu_id_18  != ''}">
                <li><a id="${projMenu.front_menu_id_18}" href="#none">${projMenu.front_menu_code_18}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_18}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_19 != null && projMenu.front_menu_code_19  != 'null' && projMenu.front_menu_code_19 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_19  != null && projMenu.front_menu_id_19  != 'null' && projMenu.front_menu_id_19  != ''}">
                <li><a id="${projMenu.front_menu_id_19}" href="#none">${projMenu.front_menu_code_19}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_19}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_20 != null && projMenu.front_menu_code_20  != 'null' && projMenu.front_menu_code_20 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_20  != null && projMenu.front_menu_id_20  != 'null' && projMenu.front_menu_id_20  != ''}">
                <li><a id="${projMenu.front_menu_id_20}" href="#none">${projMenu.front_menu_code_20}</a></li>
            </c:when>
            <c:otherwise>
                <li><a href="#none">${projMenu.front_menu_code_20}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <li style="display: none;"><a href="#none">마지막메뉴</a></li>
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
    <%--		 	<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt=""/>--%>
    </a></h1>
    <a href="#none" class="btn_menu"><i class="xi-bars"></i></a><em class=""></em>
    <!-- <a href="#none" class="btn_menu"></a><em class="redPont"></em> -->

    <!-- Swiper -->
    <div class="top_bar_menu ">
    <ul class="swiper-wrapper main_menu_tabs">

    <c:if test="${projMenu.front_menu_code_1  != null && projMenu.front_menu_code_1  != 'null' && projMenu.front_menu_code_1  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_1  != null && projMenu.front_menu_id_1  != 'null'  && projMenu.front_menu_id_1  != ''}">
                <li class="swiper-slide active">
                    <a id="${projMenu.front_menu_id_1}MbMid" href="#">${projMenu.front_menu_code_1}</a>
                </li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide active"><a href="#">${projMenu.front_menu_code_1}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_2  != null && projMenu.front_menu_code_2  != 'null' && projMenu.front_menu_code_2  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_2  != null && projMenu.front_menu_id_2  != 'null'  && projMenu.front_menu_id_2  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_2}MbMid" href="#">${projMenu.front_menu_code_2}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_2}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_3  != null && projMenu.front_menu_code_3  != 'null' && projMenu.front_menu_code_3  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_3  != null && projMenu.front_menu_id_3  != 'null'  && projMenu.front_menu_id_3  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_3}MbMid" href="#">${projMenu.front_menu_code_3}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_3}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_4  != null && projMenu.front_menu_code_4  != 'null' && projMenu.front_menu_code_4  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_4  != null && projMenu.front_menu_id_4  != 'null'  && projMenu.front_menu_id_4  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_4}MbMid" href="#">${projMenu.front_menu_code_4}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_4}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_5  != null && projMenu.front_menu_code_5  != 'null' && projMenu.front_menu_code_5  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_5  != null && projMenu.front_menu_id_5  != 'null'  && projMenu.front_menu_id_5  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_5}MbMid" href="#">${projMenu.front_menu_code_5}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_5}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_6  != null && projMenu.front_menu_code_6  != 'null' && projMenu.front_menu_code_6  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_6  != null && projMenu.front_menu_id_6  != 'null'  && projMenu.front_menu_id_6  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_6}MbMid" href="#">${projMenu.front_menu_code_6}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_6}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_7  != null && projMenu.front_menu_code_7  != 'null' && projMenu.front_menu_code_7  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_7  != null && projMenu.front_menu_id_7  != 'null'  && projMenu.front_menu_id_7  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_7}MbMid" href="#">${projMenu.front_menu_code_7}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_7}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_8  != null && projMenu.front_menu_code_8  != 'null' && projMenu.front_menu_code_8  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_8  != null && projMenu.front_menu_id_8  != 'null'  && projMenu.front_menu_id_8  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_8}MbMid" href="#">${projMenu.front_menu_code_8}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_8}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_9  != null && projMenu.front_menu_code_9  != 'null' && projMenu.front_menu_code_9  != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_9  != null && projMenu.front_menu_id_9  != 'null' && projMenu.front_menu_id_9  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_9}MbMid" href="#">${projMenu.front_menu_code_9}
                </a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_9}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_10 != null && projMenu.front_menu_code_10  != 'null' && projMenu.front_menu_code_10 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_10  != null && projMenu.front_menu_id_10  != 'null' && projMenu.front_menu_id_10  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_10}MbMid"
                href="#">${projMenu.front_menu_code_10}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_10}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_11 != null && projMenu.front_menu_code_11  != 'null' && projMenu.front_menu_code_11 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_11  != null && projMenu.front_menu_id_11  != 'null' && projMenu.front_menu_id_11  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_11}MbMid"
                href="#">${projMenu.front_menu_code_11}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_11}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_12 != null && projMenu.front_menu_code_12  != 'null' && projMenu.front_menu_code_12 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_12  != null && projMenu.front_menu_id_12  != 'null' && projMenu.front_menu_id_12  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_12}MbMid"
                href="#">${projMenu.front_menu_code_12}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_12}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_13 != null && projMenu.front_menu_code_13  != 'null' && projMenu.front_menu_code_13 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_13  != null && projMenu.front_menu_id_13  != 'null' && projMenu.front_menu_id_13  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_13}MbMid"
                href="#">${projMenu.front_menu_code_13}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_13}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_14 != null && projMenu.front_menu_code_14  != 'null' && projMenu.front_menu_code_14 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_14  != null && projMenu.front_menu_id_14  != 'null' && projMenu.front_menu_id_14  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_14}MbMid"
                href="#">${projMenu.front_menu_code_14}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_14}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_15 != null && projMenu.front_menu_code_15  != 'null' && projMenu.front_menu_code_15 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_15  != null && projMenu.front_menu_id_15  != 'null' && projMenu.front_menu_id_15  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_15}MbMid"
                href="#">${projMenu.front_menu_code_15}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_15}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_16 != null && projMenu.front_menu_code_16  != 'null' && projMenu.front_menu_code_16 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_16  != null && projMenu.front_menu_id_16  != 'null' && projMenu.front_menu_id_16  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_16}MbMid"
                href="#">${projMenu.front_menu_code_16}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_16}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_17 != null && projMenu.front_menu_code_17  != 'null' && projMenu.front_menu_code_17 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_17  != null && projMenu.front_menu_id_17  != 'null' && projMenu.front_menu_id_17  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_17}MbMid"
                href="#">${projMenu.front_menu_code_17}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_17}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_18 != null && projMenu.front_menu_code_18  != 'null' && projMenu.front_menu_code_18 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_18  != null && projMenu.front_menu_id_18  != 'null' && projMenu.front_menu_id_18  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_18}MbMid"
                href="#">${projMenu.front_menu_code_18}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_18}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_19 != null && projMenu.front_menu_code_19  != 'null' && projMenu.front_menu_code_19 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_19  != null && projMenu.front_menu_id_19  != 'null' && projMenu.front_menu_id_19  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_19}MbMid"
                href="#">${projMenu.front_menu_code_19}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_19}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>
    <c:if test="${projMenu.front_menu_code_20 != null && projMenu.front_menu_code_20  != 'null' && projMenu.front_menu_code_20 != ''}">
        <c:choose>
            <c:when test="${projMenu.front_menu_id_20  != null && projMenu.front_menu_id_20  != 'null' && projMenu.front_menu_id_20  != ''}">
                <li class="swiper-slide"><a id="${projMenu.front_menu_id_20}MbMid"
                href="#">${projMenu.front_menu_code_20}</a></li>
            </c:when>
            <c:otherwise>
                <li class="swiper-slide"><a href="#">${projMenu.front_menu_code_20}</a></li>
            </c:otherwise>
        </c:choose>
    </c:if>

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
    <p class="userName"><span>안녕하세요. ${loginHistoryInfo.usernm} 님</span> <a href="/front/member/actionLogout.do"
    class="logout ml5">로그아웃</a></p>
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

    <c:if test="${projMenu.front_menu_code_1  != null && projMenu.front_menu_code_1  != 'null' && projMenu.front_menu_code_1  != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_1  != null && projMenu.front_menu_id_1  != 'null'  && projMenu.front_menu_id_1  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_1}Mb" class="ico01 depth1
                m_menu_1""><span>${projMenu.front_menu_code_1}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico01 depth1 m_menu_1"><span>${projMenu.front_menu_code_1}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_2  != null && projMenu.front_menu_code_2  != 'null' && projMenu.front_menu_code_2  != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_2  != null && projMenu.front_menu_id_2  != 'null'  && projMenu.front_menu_id_2  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_2}Mb" class="ico02 depth1
                    m_menu_2""><span>${projMenu.front_menu_code_2}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico02 depth1 m_menu_2"><span>${projMenu.front_menu_code_2}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>

    <c:if test="${projMenu.front_menu_code_3  != null && projMenu.front_menu_code_3  != 'null' && projMenu.front_menu_code_3  != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_3  != null && projMenu.front_menu_id_3  != 'null'  && projMenu.front_menu_id_3  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_3}Mb" class="ico03 depth1
                m_menu_3""><span>${projMenu.front_menu_code_3}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico03 depth1 m_menu_3"><span>${projMenu.front_menu_code_3}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_4  != null && projMenu.front_menu_code_4  != 'null' && projMenu.front_menu_code_4  != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_4  != null && projMenu.front_menu_id_4  != 'null'  && projMenu.front_menu_id_4  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_4}Mb" class="ico04 depth1
                    m_menu_4""><span>${projMenu.front_menu_code_4}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico04 depth1 m_menu_4"><span>${projMenu.front_menu_code_4}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_5  != null && projMenu.front_menu_code_5  != 'null' && projMenu.front_menu_code_5  != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_5  != null && projMenu.front_menu_id_5  != 'null'  && projMenu.front_menu_id_5  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_5}Mb" class="ico05 depth1
                m_menu_5""><span>${projMenu.front_menu_code_5}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico05 depth1 m_menu_5"><span>${projMenu.front_menu_code_5}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_6  != null && projMenu.front_menu_code_6  != 'null' && projMenu.front_menu_code_6  != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_6  != null && projMenu.front_menu_id_6  != 'null'  && projMenu.front_menu_id_6  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_6}Mb" class="ico06 depth1
                    m_menu_6""><span>${projMenu.front_menu_code_6}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico06 depth1 m_menu_6"><span>${projMenu.front_menu_code_6}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_7  != null && projMenu.front_menu_code_7  != 'null' && projMenu.front_menu_code_7  != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_7  != null && projMenu.front_menu_id_7  != 'null'  && projMenu.front_menu_id_7  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_7}Mb" class="ico07 depth1
                m_menu_7""><span>${projMenu.front_menu_code_7}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico07 depth1 m_menu_7"><span>${projMenu.front_menu_code_7}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_8  != null && projMenu.front_menu_code_8  != 'null' && projMenu.front_menu_code_8  != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_8  != null && projMenu.front_menu_id_8  != 'null'  && projMenu.front_menu_id_8  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_8}Mb" class="ico08 depth1
                    m_menu_8""><span>${projMenu.front_menu_code_8}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico08 depth1 m_menu_8"><span>${projMenu.front_menu_code_8}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_9  != null && projMenu.front_menu_code_9  != 'null' && projMenu.front_menu_code_9  != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_9  != null && projMenu.front_menu_id_9  != 'null' && projMenu.front_menu_id_9  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_9}Mb" class="ico09 depth1
                m_menu_9""><span>${projMenu.front_menu_code_9}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico09 depth1 m_menu_9"><span>${projMenu.front_menu_code_9}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_10 != null && projMenu.front_menu_code_10  != 'null' && projMenu.front_menu_code_10 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_10  != null && projMenu.front_menu_id_10  != 'null' && projMenu.front_menu_id_10  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_10}Mb" class="ico10 depth1
                    m_menu_10""><span>${projMenu.front_menu_code_10}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico10 depth1 m_menu_10"><span>${projMenu.front_menu_code_10}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_11 != null && projMenu.front_menu_code_11  != 'null' && projMenu.front_menu_code_11 != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_11  != null && projMenu.front_menu_id_11  != 'null' && projMenu.front_menu_id_11  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_11}Mb" class="ico11 depth1
                m_menu_11""><span>${projMenu.front_menu_code_11}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico11 depth1 m_menu_11"><span>${projMenu.front_menu_code_11}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_12 != null && projMenu.front_menu_code_12  != 'null' && projMenu.front_menu_code_12 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_12  != null && projMenu.front_menu_id_12  != 'null' && projMenu.front_menu_id_12  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_12}Mb" class="ico12 depth1
                    m_menu_12""><span>${projMenu.front_menu_code_12}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico12 depth1 m_menu_12"><span>${projMenu.front_menu_code_12}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_13 != null && projMenu.front_menu_code_13  != 'null' && projMenu.front_menu_code_13 != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_13  != null && projMenu.front_menu_id_13  != 'null' && projMenu.front_menu_id_13  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_13}Mb" class="ico13 depth1
                m_menu_13""><span>${projMenu.front_menu_code_13}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico13 depth1 m_menu_13"><span>${projMenu.front_menu_code_13}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_14 != null && projMenu.front_menu_code_14  != 'null' && projMenu.front_menu_code_14 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_14  != null && projMenu.front_menu_id_14  != 'null' && projMenu.front_menu_id_14  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_14}Mb" class="ico14 depth1
                    m_menu_14""><span>${projMenu.front_menu_code_14}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico14 depth1 m_menu_14"><span>${projMenu.front_menu_code_14}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_15 != null && projMenu.front_menu_code_15  != 'null' && projMenu.front_menu_code_15 != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_15  != null && projMenu.front_menu_id_15  != 'null' && projMenu.front_menu_id_15  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_15}Mb" class="ico15 depth1
                m_menu_15""><span>${projMenu.front_menu_code_15}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico15 depth1 m_menu_15"><span>${projMenu.front_menu_code_15}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_16 != null && projMenu.front_menu_code_16  != 'null' && projMenu.front_menu_code_16 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_16  != null && projMenu.front_menu_id_16  != 'null' && projMenu.front_menu_id_16  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_16}Mb" class="ico16 depth1
                    m_menu_16""><span>${projMenu.front_menu_code_16}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico16 depth1 m_menu_16"><span>${projMenu.front_menu_code_16}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_17 != null && projMenu.front_menu_code_17  != 'null' && projMenu.front_menu_code_17 != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_17  != null && projMenu.front_menu_id_17  != 'null' && projMenu.front_menu_id_17  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_17}Mb" class="ico17 depth1
                m_menu_17""><span>${projMenu.front_menu_code_17}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico17 depth1 m_menu_17"><span>${projMenu.front_menu_code_17}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_18 != null && projMenu.front_menu_code_18  != 'null' && projMenu.front_menu_code_18 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_18  != null && projMenu.front_menu_id_18  != 'null' && projMenu.front_menu_id_18  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_18}Mb" class="ico18 depth1
                    m_menu_18""><span>${projMenu.front_menu_code_18}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico18 depth1 m_menu_18"><span>${projMenu.front_menu_code_18}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>
    <c:if test="${projMenu.front_menu_code_19 != null && projMenu.front_menu_code_19  != 'null' && projMenu.front_menu_code_19 != ''}">
        <li class="icoBtn">

        <c:choose>
            <c:when test="${projMenu.front_menu_id_19  != null && projMenu.front_menu_id_19  != 'null' && projMenu.front_menu_id_19  != ''}">
                <a href="#none" id="${projMenu.front_menu_id_19}Mb" class="ico19 depth1
                m_menu_19""><span>${projMenu.front_menu_code_19}</span></a>
            </c:when>
            <c:otherwise>
                <a href="#none" class="ico19 depth1 m_menu_19"><span>${projMenu.front_menu_code_19}</span></a>
            </c:otherwise>
        </c:choose>

        <c:if test="${projMenu.front_menu_code_20 != null && projMenu.front_menu_code_20  != 'null' && projMenu.front_menu_code_20 != ''}">
            <c:choose>
                <c:when test="${projMenu.front_menu_id_20  != null && projMenu.front_menu_id_20  != 'null' && projMenu.front_menu_id_20  != ''}">
                    <a href="#none" id="${projMenu.front_menu_id_20}Mb" class="ico20 depth1
                    m_menu_20""><span>${projMenu.front_menu_code_20}</span></a>
                </c:when>
                <c:otherwise>
                    <a href="#none" class="ico20 depth1 m_menu_20"><span>${projMenu.front_menu_code_20}</span></a>
                </c:otherwise>
            </c:choose>
        </c:if>

        </li>
    </c:if>

    </ul>
    <!-- <div class="leftbannerArea">
    <div class="leftMenuBanner">
    <ul class="leftMenuSlide">
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
