<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">
	
	
	function validSubmit() {
		
		
		var f = document.Frm;
		f.target = "_self";
		f.action="/front/member/join_agree.do?gbn=hirer";
		f.submit();
		
	
	}

</script>

<!-- container -->
<form name="Frm" method="post" >
	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title join1">사용자/고객 서비스</h3>
			<p class="desc_text">* 계약하신 임대인/임대관리인/임차인 고객님들만 이용가능한 서비스 입니다. </p>
			<p class="desc_text02">본 서비스는 건물주/임대인이 계약 정보를 등록하셔야 사용하실 수 있습니다.</p>

			<!-- join_intro1 -->
			<div class="join_intro3">
				<!-- STEP 1 -->
				<div class="box join01">
					<p class="title"><strong>STEP 1</strong></p>
					<div class="txt">
						<strong>
							계약정보 조회 및 확인
						</strong>
						<span>
							계약 정보 조회 후 확인합니다
						</span>
					</div>
				</div>

				<!-- STEP 2 -->
				<div class="box join02">
					<p class="title"><strong>STEP 2</strong></p>
					<div class="txt">
						<strong>
							회원가입 
						</strong>
						<span>
							홈페이지에서 온라인으로 <br />회원 가입을 합니다. <br />임대계약, 호실 선택
						</span>
					</div>
				</div>
				
				<!-- STEP 3 -->
				<div class="box join03">
					<p class="title"><strong>STEP 3</strong></p>
					<div class="txt">
						<strong>
							인증처리<br />(자동인증)
						</strong>
					</div>
				</div>

				<!-- STEP 4 -->
				<div class="box join04">
					<p class="title"><strong>STEP 4</strong></p>
					<div class="txt">
						<strong>
							서비스 이용
						</strong>
						<span>
							웹, 모바일앱 로그인
						</span>
					</div>
				</div>
			</div>
			<!-- //join_intro -->

			<div class="btn_join3">
				<button type="button" onClick="validSubmit();" >가입하기</button>
			</div>

		</div>
	</div>
	<!-- //container -->
	
</form>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>