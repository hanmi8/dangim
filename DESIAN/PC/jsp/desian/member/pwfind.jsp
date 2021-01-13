
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>

<script type="text/javascript">
	function pw_validSubmit(f){
		var sch_userid = $.trim($('#pw_user_id').val());
		var sch_usernm = $.trim($('#pw_user_name').val());
		var mobile1 = $.trim($('#pw_mobile1').val());
		var mobile2 = $.trim($('#pw_mobile2').val());
		var mobile3 = $.trim($('#pw_mobile3').val());
		var gbn = "hirer";
		
		if (sch_userid == null || sch_userid == ""){
			alert("아이디를 입력해주세요");
			return false;
		}
		
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
			url: GLOBAL_SSL_URL+'/front/member/pwfind_ajax.do',
			type: 'POST',
			data:{sch_userid:sch_userid, sch_usernm : sch_usernm, sch_mobile1 : mobile1, sch_mobile2 : mobile2, sch_mobile3 : mobile3, gbn : gbn },
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
		    			
		    			if (data.sch_auth != "2") {
		    				alert("회원님에 계정은 인증대기상태입니다. 비밀번호 변경 불가합니다.");
		    			}else if (data.sch_emailauth != "2") {
		    				alert("회원님에 계정은 이메일 인증이 안된 상태입니다. 비밀번호 변경 불가합니다.");
		    			}else{
			    			
		    				alert("비밀번호변경 인증메일을 발송하였습니다. \n인증메일을  통해서 비밀번호 변경 진행해주세요!!");
			    			/* $('#sch_userid').val(data.sch_userid); */
			    			
			    			var f = document.Frm;
			    			f.target = "_self";
			    			f.action = GLOBAL_SSL_URL+"/front/member/login.do";
			    			f.submit();
		    			}
		    			
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
		
	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title member findPW">비밀번호 찾기</h3>

			<div class="tabWrap share_2">
				<div class="tabBtn">
					<a href="/front/member/idfind.do" >아이디 찾기</a>
					<a href="#none" class="active">비밀번호 찾기</a>
				</div>
			</div>

			<!-- gray_box -->
			<div class="gray_box">
				<!-- findForm -->
				<div class="findForm">
					
					<div>
						<span class="title">아이디(이메일)</span>
						<div class="info"><input type="text" class="width_wide type01" id="pw_user_id" name="pw_user_id"/></div>
					</div>
					<div>
						<span class="title">이름</span>
						<div class="info"><input type="text" class="width_wide type01" id="pw_user_name" name="pw_user_name"/></div>
					</div>
					<div>
						<span class="title">휴대폰 번호</span>
						<div class="info">
							<div class="selectBox selType02 width_30">
								<select class="selectCus" id="pw_mobile1" name="pw_mobile1" title="전화번호 앞자리">
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
							<input type="text" class="width_30 type01" id="pw_mobile2" name="pw_mobile2" maxlength="4" title="전화번호 중간자리"/>
							<span> - </span>
							<input type="text" class="width_30 type01" id="pw_mobile3" name="pw_mobile3" maxlength="4" title="전화번호 끝자리"/>
						</div>
					</div>
				</div>
				<!-- //findForm -->
			</div>
			<!-- //gray_box -->

			<!-- btnArea -->
			<div class="btnArea">
				<button type="button" class="lineType" onClick="gotoLogin(this);">취소</button>
				<button type="button" class="fillType" onClick="pw_validSubmit(this);">확인</button>
			</div>
			<!-- //btnArea -->

			<div class="bulType mt45">
				<p><span class="bul">*</span>회원가입 시 등록하셨던 정보를 입력해 주십시오.</p>
				<p><span class="bul">*</span>비밀번호는 초기화 후 임시비밀번호를 이메일로 보내드립니다.</p>
				<p><span class="bul">*</span>회원가입 시 입력하신 정보가 변경된 경우 관리자에게 문의해 주시기 바랍니다. (070-8811-8881)</p>
			</div>

		</div>
	</div>
	<!-- //container -->
</form>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>