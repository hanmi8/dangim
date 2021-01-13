<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">

function gotoLogin(){
	location.replace(GLOBAL_SSL_URL+"/front/member/login.do");
}
	
</script>


	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title join">회원가입</h3>

			<div class="tabWrap share_4">
				<div class="tabBtn">
					<a href="#none" >약관동의</a>
					<a href="#none" >정보입력</a>
					<a href="#none" class="active">가입완료</a>
				</div>
			</div>

			<!-- gray_box -->
			<div class="gray_box">
				<p class="text">
					<strong>
						이메일 인증 후 가입 승인처리 됩니다.
					</strong>
					 <span class="mt20">
						<!-- 회원님의 계약 정보를 찾지 못하였습니다. <br />-->
						담당자 확인 후 가입이 진행됩니다.
					</span> 
				</p>
			</div>
			<!-- //gray_box -->

			<div class="btnArea">
				<button type="button" class="fillType" onclick="gotoLogin();">로그인</button>
			</div>

		</div>
	</div>
	<!-- //container -->

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>