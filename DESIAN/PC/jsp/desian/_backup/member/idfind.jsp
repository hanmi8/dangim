
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">
	function id_validSubmit(f){
		
		var sch_usernm = $.trim($('#id_user_name').val());
		var mobile1 = $.trim($('#id_mobile1').val());
		var mobile2 = $.trim($('#id_mobile2').val());
		var mobile3 = $.trim($('#id_mobile3').val());
		var gbn = "hirer";
		
		if (sch_usernm == null || sch_usernm == ""){
			alert("이름를 입력해주세요");
			return false;
		}
				
		
		if (mobile1 == null || mobile1 =="" || mobile2 == null || mobile2 ==""  || mobile3 == null || mobile3 =="" ){
			alert("핸드폰번호을 입력해주세요");
			return false;
		}
		
		if (mobile2.length < 3 ||  mobile3.length < 4 || checkNumber(mobile2) == 1 || checkNumber(mobile3) == 1 ){
			alert("핸드폰번호을 정확히 입력해주세요");
			return false;
		}
		
				
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/member/idfind_ajax.do',
			type: 'POST',
			data:{sch_usernm : sch_usernm, sch_mobile1 : mobile1, sch_mobile2 : mobile2, sch_mobile3 : mobile3, sch_gbn : gbn },
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		    async: false,
		    cache: false,
		    beforeSend: function(xhr){
				$('#loading').show().fadeIn('fast');
		    	  
				xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
		        xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
				xhr.setRequestHeader("Progma","no-cache");
			},
			complete:function(){
				$('#loading').fadeOut();
			},      
			error: function(xhr, status, err) {
		    
		          if (xhr.status == 401) {
		            alert("401 Unauthorized");
		          } else if (xhr.status == 403) {
		            alert("403 Forbidden");
		          } else {
		            alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
		          }		        
			},
			success: function(data) {
			
		    	if (data != null || data.result != null){
		    		if (data.result == "OK"){
		    		 	$('#sch_userid').val(data.sch_userid);
		    			$('#sch_user').val(data.sch_user);
		    			var f = document.Frm;
		    			f.target = "_self";
		    			f.action = "/front/member/idfind_complete.do";
		    			f.submit();
		    			
		    		}else{
		    			
		    			alert( data.message );
		    		}
		    	 }else{
		    		 alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.!!");
		    	 }
			}			
		}); // $.ajax
	}

	function gotoLogin(f){
		
		location.replace(GLOBAL_SSL_URL+"/front/member/login.do");
	}
	
	function gotoPwFind(f){
	
		
		location.replace(GLOBAL_SSL_URL+"/front/member/pwfind.do");
	}


</script>

<!-- container -->
<form name="Frm" method="post" >
	<input type="hidden" id="sch_userid" name="sch_userid" value="" />
	<input type="hidden" id="sch_user" name="sch_user" value="" />
	<input type="hidden" id="sch_user" name="sch_cnt" value="" />
		
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
				<!-- findForm -->
				<div class="findForm">
					
					<div>
						<span class="title">이름</span>
						<div class="info"><input type="text" class="width_wide type01" id="id_user_name" name="id_user_name"/></div>
					</div>
					<div>
						<span class="title">휴대폰 번호</span>
						<div class="info">
							<div class="selectBox selType02 width_30">
								<select class="selectCus" id="id_mobile1" name="id_mobile1">
									<option value="010" selected="selected">010</option>
									<option value="011">011</option>
									<option value="016">016</option>
									<option value="017">017</option>
									<option value="018">018</option>
									<option value="019">019</option>
									<option value="070">070</option>
								</select>
							</div>
							<span> - </span>
							<input type="text" class="width_30 type01" id="id_mobile2" name="id_mobile2" maxlength="4" title="전화번호 중간자리"/>
							<span> - </span>
							<input type="text" class="width_30 type01" id="id_mobile3" name="id_mobile3" maxlength="4" title="전화번호 끝자리"/>
						</div>
					</div>
				</div>
				<!-- //findForm -->
			</div>
			<!-- //gray_box -->

			<!-- btnArea -->
			<div class="btnArea">
				<button type="button" class="lineType" onClick="gotoLogin(this);">취소</button>
				<button type="button" class="fillType" onClick="id_validSubmit(this);">확인</button>
			</div>
			<!-- //btnArea -->

			<div class="bulType mt45">
				<p><span class="bul">*</span>회원가입 시 등록하셨던 정보를 입력해 주십시오.</p>
				<p><span class="bul">*</span>회원가입 시 입력하신 정보가 변경된 경우 관리자에게 문의해 주시기 바랍니다. (070-8811-8881)</p>
			</div>

		</div>
	</div>
	<!-- //container -->
</form>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>