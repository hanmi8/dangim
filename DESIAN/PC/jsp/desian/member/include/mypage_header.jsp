<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld"%>
<%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld"%>

<%@include file="/WEB-INF/view/front/pc/desian/main/include/version.jsp" %>

<!DOCTYPE html>
<html lang="ko">
<head>
	<title> 이지램스 </title>
	
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no">
	
	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/member/css/reset.css" />    
	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/member/css/jquery.ui.lastest.css" />
    <link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/member/css/join.css" />
    <link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/member/css/main.css" />
    
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-1.11.3.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery.bxslider.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/tweenmax/TweenMax.min.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/mcustomscrollbar/mCustomScrollbar.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-ui.js"></script>
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery.customSelect.js"></script>
	
	<script type="text/javascript" src="/resources/front/pc/desian/publisher/publisher.js?v=${_version}"></script>
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

	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/new/css/common.css" />
	
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
</script>

</head>

<iframe id="frmProc" name="frmProc" src="/dummy.htm" width="0" height="0" style="display:none"></iframe>

<%@include file="/WEB-INF/view/front/pc/desian/main/include/commonJavascript.jsp" %>
<%@ include file="/WEB-INF/view/front/pc/desian/main/include/cm_page_reload.jsp" %>
<body>
<!-- wrap -->
<div id="wrap">
	<div class="dimmed"></div>
	
	
	<!-- header 영역-->
	<div id="header">
		<!-- menuSticky -->
		<div class="menuSticky ">
			<div class="inner">
				<h1>
					<!-- <a href="#header"> -->
					<a href="/front/member/login.do">
<%--					<c:choose>--%>
<%--						<c:when test="${param.gbn eq 'lessor'}">--%>
<%--							<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt="" />--%>
<%--						</c:when>--%>
<%--						<c:when test="${param.gbn eq 'manager'}">--%>
<%--							<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt="" />--%>
<%--						</c:when>--%>
<%--						<c:otherwise>--%>
<%--							<img src="/resources/front/pc/desian/main/img/ezrems_logo.svg" alt="" />--%>
<%--						</c:otherwise>--%>
<%--					</c:choose>--%>
				</a></h1>
				<!-- gnbMenu -->
				<div class="gnbMenu">
					<ul>
						<li><p></p></li>
					</ul>
				</div>
			</div>
		</div>
		<!-- //menuSticky -->
	</div>

	<!-- //header 영역-->
</div>