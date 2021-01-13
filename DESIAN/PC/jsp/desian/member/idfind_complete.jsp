
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">
	function gotoLogin(f){
		
		location.replace(GLOBAL_SSL_URL+"/front/member/login.do");
	}
	
	function gotoPwFind(f){
	
		
		location.replace(GLOBAL_SSL_URL+"/front/member/pwfind.do");
	}
	

	$(window).load(function() {	
		if ( '${sch_cnt}' != 1 ){
			alert("1개 이상에 가입 정보가 존재합니다. 관리자에게 문의하세요");
		}
	});

</script>

<!-- container -->
<form name="Frm" method="post" >
	
	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title member">아이디 찾기</h3>

			<div class="tabWrap share_2">
				<div class="tabBtn">
					<a href="#none" class="active">아이디 찾기</a>
					<a href="/front/member/pwfind.do">비밀번호 찾기</a>
				</div>
			</div>

			<!-- gray_box -->
			<div class="gray_box">
				<p class="text">
					<span>회원님께서가입하신ID는</span>
					<strong class="mt30">${sch_userid}입니다.</strong>
				</p>
			</div>
			<!-- //gray_box -->

			<!-- btnArea -->
			<div class="btnArea w150">
				<button type="button" class="fillType" onClick="gotoLogin(this);">로그인</button>
				<button type="button" class="lineType" onClick="gotoPwFind(this);">비밀번호 찾기</button>
			</div>
			<!-- //btnArea -->
		</div>
	</div>
	<!-- //container -->
</form>


<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>