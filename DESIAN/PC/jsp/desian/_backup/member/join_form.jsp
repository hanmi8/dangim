<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_header.jsp" %>
<script src="https://ssl.daumcdn.net/dmaps/map_js_init/postcode.v2.js"></script>
<script type="text/javascript">


	
	function authDHSet(dhlist){
		
		$('#proj_txt').hide();
		$('#proj_button').hide();
		$('#procode_div').hide();
		/* $('#sellcode_div').hide(); */
		$('#dong_div').hide();
		$('#floor_div').hide();
		$('#ho_div').hide();
		
		
		
		$('#DFHList_div').show();
		console.log(dhlist);
		$('#DFHList').find("option").remove();
		
		var temp_str = "";
		var temp_value = "";
		for(var i=0; i<dhlist.length; i++){
			temp_str = "["+dhlist[i].projname+"] "+dhlist[i].dong+"동 "+dhlist[i].ho+"호";
			temp_value = dhlist[i].companycode+"|"+dhlist[i].projcode+"|"+dhlist[i].sellcode+"|"+dhlist[i].dong+"|"+dhlist[i].floor+"|"+dhlist[i].ho+"|"+dhlist[i].group_cont_id+"|"+dhlist[i].cont_id
			$("#DFHList").append("<option value='"+temp_value+"'>"+temp_str+"</option>");
		};
		$("#DFHList option:eq(0)").prop("selected", true);
		
/* 		$("#DFHList_div > .selectCus").css("width", "50%"); */
		$("#DFHList_div > .selectCus > .selTypeInner").css("width", "100%");
		var txt = $("#DFHList_div > #DFHList option:eq(0)").text();		
		$("#DFHList_div > .selectCus > .selTypeInner").html(txt);
	}
	
	
	function projSearchSet(){
	
		$('#DFHList_div').hide();
		
		$('#proj_txt').show();
		$('#proj_button').show();
		$('#procode_div').hide();
		/* $('#sellcode_div').hide(); */
		$('#dong_div').hide();
		$('#floor_div').hide();
		$('#ho_div').hide();
		
		
		$("#procode_div").css("width", "30%");
		$("#dong_div").css("width", "15%");
		$("#floor_div").css("width", "15%");
		$("#ho_div").css("width", "20%");
	
	}
	
	
	
	//사업지 가져오기
	function projcodecall(){
	    
	   
	    var proj_txt = $('#proj_txt').val();
	    	    
	    $('#company_code').val('');
	    $('#sell_code').val('');
	    
	    $('#procode_div').show();
	    	    
	    $.ajax({
	      url: GLOBAL_SSL_URL+'/front/common/getHttpsProjCode.do',
	      type: 'POST',
	      data:{proj_txt:proj_txt},
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
	          if (data != null || data.retdata != null){
	            var proj = eval(data.retdata);
	            $('#procode').find("option").remove();
	            for(var i=0; i<proj.length; i++){                 
	            	$("#procode").append("<option value='"+proj[i].proj_code+"' data-sub='"+proj[i].company_code+"'>"+proj[i].proj_name+"</option>");	        
	            
	            };	            
	            $("#procode_div > .selectCus > .selTypeInner").css("width", "110%");
	    		var txt = $("#procode_div > #procode option:eq(0)").text();
	            $("#procode_div > .selectCus > .selTypeInner").html(txt);
	            
	            
	            /* var txt = $("#procode_div > #procode option:eq(0)").text();           
	            $("#procode_div > .selectCus > .selTypeInner").html(txt); */
	            
	            dongListcall();
	           }
			}     
		}); // $.ajax
	}
	
	
	function dongListcall(){

	    var proj_code = $('#procode').val();	    
	    var comp_code = $('#procode option:selected').data("sub");
	    $('#company_code').val(comp_code);
	    
	    $('#dong_div').show();
	    
	    $.ajax({
	      url: GLOBAL_SSL_URL+'/front/common/getHttpsDongList.do',
	      type: 'POST',
	      data:{company_code : comp_code, proj_code : proj_code},
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
	          if (data != null || data.retdata != null){
	        	  
	            var dong = eval(data.retdata);
	            $('#dong').find("option").remove();
	            for(var i=0; i<dong.length; i++){                 
	            	$("#dong").append("<option value='"+dong[i].dong+"'  data-sub='"+dong[i].sell_code+"'>"+dong[i].dong+"</option>");
	            };
	            
	            $("#dong_div > .selectCus > .selTypeInner").css("width", "110%");
	            var txt = $("#dong_div > #dong option:eq(0)").text();           
	            $("#dong_div > .selectCus > .selTypeInner").html(txt);
	            
	            floorListcall();
	           }
			}     
		}); // $.ajax
		
	}
	
	function floorListcall(){

	    var proj_code = $('#procode').val();	    
	    var comp_code = $('#procode option:selected').data("sub");
	    
	    var dong = $('#dong').val();	    
	    var sell_code = $('#dong option:selected').data("sub");
	    $('#sell_code').val(sell_code);
	    
	    $('#floor_div').show();
	    
	    $.ajax({
	      url: GLOBAL_SSL_URL+'/front/common/getHttpsFloorList.do',
	      type: 'POST',
	      data:{company_code : comp_code, proj_code : proj_code, sell_code: sell_code, dong: dong },
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
	          if (data != null || data.retdata != null){
	        	  
	            var floor = eval(data.retdata);
	            $('#floor').find("option").remove();
	            for(var i=0; i<floor.length; i++){                  
	            $("#floor").append("<option value='"+floor[i].floor+"'>"+floor[i].floor+"</option>");
	            };
	            $("#floor option:eq(0)").prop("selected", true);
	            $('.selectBox').trigger( "create" );
	            
	            
	            $("#floor_div > .selectCus > .selTypeInner").css("width", "110%");
	            var txt = $("#floor_div > #floor option:eq(0)").text();           
	            $("#floor_div > .selectCus > .selTypeInner").html(txt);
	            
	            hoListcall();
	           }
			}     
		}); // $.ajax
		
	}
	
	function hoListcall(){
		
		
	    var proj_code = $('#procode').val();	    
	    var comp_code = $('#procode option:selected').data("sub");
	    
	    var dong = $('#dong').val();	    
	    var sell_code = $('#dong option:selected').data("sub");
	    
	    var floor = $('#floor').val();
	    
	    $('#ho_div').show();
	    
	    $.ajax({
	      url: GLOBAL_SSL_URL+'/front/common/getHttpsHoList.do',
	      type: 'POST',
	      data:{company_code : comp_code, proj_code : proj_code, sell_code: sell_code, dong: dong, floor:floor },
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
	          if (data != null || data.retdata != null){
	        	  
	            var ho = eval(data.retdata);
	            
	            $('#ho').find("option").remove();
	            for(var i=0; i<ho.length; i++){                  
	            	$("#ho").append("<option value='"+ho[i].ho+"'>"+ho[i].ho+"</option>");
	            };
	            
	            $("#ho option:eq(0)").prop("selected", true);
	            $('.selectBox').trigger( "create" );
	            
	            $("#ho_div > .selectCus > .selTypeInner").css("width", "110%");
	            var txt = $("#ho_div > #ho option:eq(0)").text();           
	            $("#ho_div > .selectCus > .selTypeInner").html(txt);
	            
	            
	            
	           }
			}     
		}); // $.ajax
		
	}
	
	// email 도메인 선택
	function emailSelectChange(f){
		var fval = f.value;
		if (fval == '9999'){
			$("#email_domain").attr("readonly",false);
		}else if (fval == '0000'){
			$("#email_domain").val("");
			$("#email_domain").attr("readonly",true);
		}else{
			$("#email_domain").val(fval);
			$("#email_domain").attr("readonly",true);
		}
		
	}
	//우편번호
	function FindRoadCode(fr){
		var mWidth = 700;
		var mHeight = 450
	
		var mLeft=(screen.width-mWidth)/2;
		var mTop=(screen.height-mHeight)/2;
	
		webbrowser=navigator.appVersion;
		
	 	var isIPHONE = (navigator.userAgent.match('iPhone') != null ||
		navigator.userAgent.match('iPad') != null);
		var isIPAD = (navigator.userAgent.match('iPad') != null);
		var isANDROID = (navigator.userAgent.match('Android') != null);
		
		if(isIPHONE || isIPAD || isANDROID){
			execDaumPostcode();
		}else{ 
			//var pop = window.open(GLOBAL_WEB_URL+"/common/jusoPopupHttps.do","pop","scrollbars=yes, resizable=yes");
			w=window.open(GLOBAL_SSL_URL+"/common/zipcode.do","zip","width=700px,height=450px,scrollbars=yes, left="+ mLeft + "px,top=" + mTop + "px");
			w.focus();
		}
	}
	
	function receveZipcode(roadFullAddr, roadAddrPart1, addrDetail, roadAddrPart2, engAddr, jibunAddr, zipNo, admCd, rnMgtSn, bdMgtSn){
		$("#zipcode").val(zipNo);
		$("#addr").val(roadAddrPart1);
		$("#addr_detail").val(addrDetail + ' ' + roadAddrPart2);		
	}
	
	
	$(function(){
		var user_pw = $('#user_pw');
		var user_re_pw = $('#user_re_pw');
		  		  
		user_pw.focus(function(){
			UserPwCheck();
		}); 
		user_pw.blur(function(){
			UserPwCheck();
		});
	
		user_re_pw.focus(function(){
			UserPwCheck();
		}); 
		user_re_pw.blur(function(){
			UserPwCheck();
		});		
	});
	
	//비밀번호 일치체크
	function UserPwCheck(){
		var user_pw = $('#user_pw').val();
		var user_re_pw = $('#user_re_pw').val();
		
		if (user_pw == '' || user_re_pw == ''){
			$('#pwmsg').html("");
		}else if (user_pw == user_re_pw){
			$('#pwmsg').html("");
		}else{
			$('#pwmsg').html("비밀번호가 일치하지 않습니다.");
		}
	}
	
	
	
	
	//ID 체크
	function UserIdCheck(f){
		var email1= $.trim($('#email_addr').val());
		var email2= $.trim($('#email_domain').val());
		var userid = email1+"@"+email2;
		var mobile1= $.trim($('#mobile1').val());
		var mobile2= $.trim($('#mobile2').val());
		var mobile3= $.trim($('#mobile3').val());
		var mobile = mobile1+"-"+mobile2+"-"+mobile3;
		
		if (email1 == null || email1 =="" ){
			alert("이메일을 등록해주세요");
			return false;
		}else if (email2 == null || email2 =="" ){
			alert("이메일 도메인을 선택 또는 직접입력해주세요");
			return false;
		}
		
		if (!checkEmail(userid)) {
			alert("형식에 맞지 않는 이메일 주소입니다.\n이메일 주소를 정확하게 입력해 주세요.");			
			return false;
		}
		
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/member/getUserIdChk.do',
			type: 'POST',
			data:{i_userid : userid, i_gbn : "hirer", i_mobile : mobile},
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
		    			alert("사용가능한 ID 입니다");
		    			$('#useridauth').val("3");
						$('#idchkmsg').html("* 사용 가능한 ID입니다.");
					}else if (data.result == "OKE"){
		    			alert("사용가능한 ID 입니다 \n 계약정보에 해당 이메일주소가 없습니다 ");
						$('#useridauth').val("2");
						$('#idchkmsg').html("* 사용 가능한 ID입니다.");
					}else{
		    			alert("이미 사용중인 ID 입니다");
		    			$('#useridauth').val("1");
		    			$('#idchkmsg').html("* 이미 가입된 ID입니다.");
					}
		    		$('#useridchk').val(userid);
		    		 		  
				}
			}			
		}); // $.ajax		
	}
	
	//입주민 인증
	function UserAuth(f){
		var email1= $.trim($('#email_addr').val());
		var email2= $.trim($('#email_domain').val());
		var userid = email1+"@"+email2;
		
		var mobile1= $.trim($('#mobile1').val());
		var mobile2= $.trim($('#mobile2').val());
		var mobile3= $.trim($('#mobile3').val());
		
		var comp_code = $('#company_code').val();
		var procode= $('#procode').val();
		
		var useridauth= $('#useridauth').val();
	
		
		
		if (useridauth == null || useridauth =="" || useridauth =="0"){
			alert("아이디 중복 확인을 먼저 해주세요");
			return false;
		}else if (useridauth == "1"){
			alert("사용 중인 아이디입니다.");
			return false;
		}
		
		if (!checkEmail(userid)) {
			alert("형식에 맞지 않는 이메일 주소입니다.\n이메일 주소를 정확하게 입력해 주세요.");			
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
		
		if ( $('#useridchk').val() != userid ){
			alert("중복확인한 ID가 변경되었습니다");
			return false;
		}
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/member/getUserAuth.do',
			type: 'POST',
			data:{i_userid : userid, i_mobile1:mobile1, i_mobile2:mobile2, i_mobile3:mobile3, useridauth:useridauth },
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
						alert("인증 완료");
		    			$('#auth').val("3");
		    			$('#authchkmsg').html("* 인증 완료");
		    			
		    			
		    			authDHSet(data.DFHList);
		    			
					}else if (data.result == "OK2"){
		    			alert("일치하는 계약동호가 존재하지 않습니다.");
		    			$('#auth').val("2");
		    			$('#authchkmsg').html("* 대기상태로 가입가능");
							    			 
		    			projSearchSet();
		    			
					}else{
		    			alert("인증오류 발생");
		    			$('#auth').val("0");
		    			$('#authchkmsg').html("* 인증 오류");
					}
		  
				}
			}			
		}); // $.ajax		
	}
	
	function CancelJoin(f){
		var f = document.Frm;
		f.target = "_self";
		f.action = GLOBAL_SSL_URL+"/front/member/login.do";
		f.submit();
	}
	
	function validSubmit(f) {		
		var f = document.Frm;
		
		var email1= $.trim($('#email_addr').val());
		var email2= $.trim($('#email_domain').val());
		var userid = email1+"@"+email2;
		
		var mobile1= $.trim($('#mobile1').val());
		var mobile2= $.trim($('#mobile2').val());
		var mobile3= $.trim($('#mobile3').val());
		
		var useridauth= $('#useridauth').val();
		
		if (useridauth == null || useridauth =="" || useridauth =="0"){
			alert("아이디 중복 확인을 먼저 해주세요");
			return false;
		}else if (useridauth == "1"){
			alert("사용 중인 아이디입니다.");
			return false;
		}
		
		var procode= "";
		var sellcode= "";
		
		var dong= "";
		var floor= "";
		var ho= "";
		
		 var cnt_auth = $('#auth').val();
		 
		if (cnt_auth =="3"){
			
			var jbSplit = $('#DFHList').val().split('|');
			
			
		}else{
			procode= $('#procode').val();
			sellcode= $('#sellcode').val();
			dong= $.trim($('#dong').val());
			floor= $.trim($('#floor').val());
			ho= $.trim($('#ho').val());
			
			if (isEmpty(f.dong)) {
				alert("동을 입력해 주세요.");
				f.dong.focus();
				return false;
			}
			if (isEmpty(f.floor)) {
				alert("층을 입력해 주세요.");
				f.floor.focus();
				return false;
			}
			if (isEmpty(f.ho)) {
				alert("호을 입력해 주세요.");
				f.ho.focus();
				return false;
			}
		}
		
		
		
		var emailpush= $('#emailpush').val();
		var smspush= $('#smspush').val();
		
		if (isEmpty(f.usernm)) {
			alert("이름를 입력해 주세요.");
			f.usernm.focus();
			return false;
		}
		
		if (isEmpty(f.user_pw)) {
			alert("비밀번호를 입력해 주세요.");
			f.user_pw.focus();
			return false;
		}
	
		
		if (isEmpty(f.user_re_pw)) {
			alert("비밀번호 확인을 입력해 주세요.");
			f.user_re_pw.focus();
			return false;
		}
		
		if (f.user_pw.value != f.user_re_pw.value) {
			alert("비밀번호를 다시 한번 확인해 주세요.");
			f.user_re_pw.focus();
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
		
		if ( $('#useridchk').val() != userid ){
			alert("중복확인한 ID가 변경되었습니다");
			return false;
		}
	
		switch (checkInvalidPw(userid, f.user_pw.value, 6, 20)) {
			case 1:		alert("비밀번호는 아이디와 동일하게 사용할 수 없습니다."); return false;
			case 2:		alert("비밀번호는 영문 대/소문자, 숫자를 조합하여 6~20자리로 해주세요."); return false;
			case 3:		alert("비밀번호는 동일문자를 3번 이상 사용할 수 없습니다"); return false;
			case 4:		alert("비밀번호는 연속된 문자열(123 또는 abc 등)을 3자 이상 사용할수 없습니다."); return false;
		}
		
		if (!checkEmail(userid)) {
			alert("형식에 맞지 않는 이메일 주소입니다.\n이메일 주소를 정확하게 입력해 주세요.");			
			return false;
		}
		
				
		if (isEmpty(f.zipcode)) {
			alert("주소을 입력해주세요");
			f.zipcode.focus();
			return false;
		}
		if (isEmpty(f.addr)) {
			alert("주소을 입력해주세요");
			f.zipcode.focus();
			return false;
		}
		if (isEmpty(f.addr_detail)) {
			alert("상세 주소을 입력해주세요");
			f.addr_detail.focus();
			return false;
		}
				
		var msg = "회원가입을 하시겠습니까?";
		
		if (confirm(msg)) {
			$('#loading').show().fadeIn('fast');
			
			f.target = "_self";
			
			//f.target = "frmProc";
			f.action = GLOBAL_SSL_URL+"/front/member/join_act.do?gbn=hirer";
			f.submit();
		}
	
	}
	
	function formresize(){
		var class_by_id = $('#joinform').attr('class');
		
		if ($(window).width() >= 1024){
			if (class_by_id != 'list_table02 mt70 join pc'){
				$('#joinform').attr('class', 'list_table02 mt70 join pc');;
			}
		}else{
			if (class_by_id != 'list_table02 mt70 join mb'){
				$('#joinform').attr('class', 'list_table02 mt30 join mb');;
			}
		}
	}
	
	$(window).load(function() {
		formresize();
		
		
		$('#proj_txt').hide();
		$('#proj_button').hide();
		$('#procode_div').hide();
		/* $('#sellcode_div').hide(); */
		$('#dong_div').hide();
		$('#floor_div').hide();
		$('#ho_div').hide();
				
		$('#DFHList_div').hide();
	});
	
		
	$( window ).resize(function() {
		formresize();		
	});

</script>


<form name="Frm" id="Frm" method="post" >
	<input type="hidden" id="useridauth" 		name="useridauth" 		value="" />
	<input type="hidden" id="useridchk"  		name="useridchk"		value="" />
	<input type="hidden" id="auth"       		name="auth" 			value="" />
	<input type="hidden" id="ci"    	 		name="ci" 				value="${ci}" />
	<input type="hidden" id="di"    	 		name="di" 				value="${di}" />
	<input type="hidden" id="nice_insert_seq"   name="nice_insert_seq" 	value="${nice_insert_seq}" />
	<input type="hidden" id="agree1"     		name="agree1" 			value="${agree1}" />
	<input type="hidden" id="agree2"     		name="agree2" 			value="${agree2}" />
	<input type="hidden" id="agree3"     		name="agree3" 			value="${agree3}" />
	<input type="hidden" id="agree4"     		name="agree4" 			value="${agree4}" />
	<input type="hidden" id="company_code" 		name="company_code" 	value="" />
	<input type="hidden" id="sell_code" 		name="sell_code" 		value="" />

	<!-- container -->
	<div class="container">
		<div class="subContent">
			<h3 class="sec_title join">회원가입 (임차인)</h3>

			<div class="tabWrap share_4">
				<div class="tabBtn">
					<a href="#none" >약관동의</a>
					<a href="#none" class="active">정보입력</a>
					<a href="#none">가입완료</a>
				</div>
			</div>
			<p class="memTxt red">* 계약하신 임차인 고객님이 이용가능한 서비스 입니다. </p>
			<p class="memTxt tar"><span class="red">*</span> 기본(필수)정보 입력</p>

			<!-- tb-list01 -->
			<div class="tb-list01 type01">
				<table>
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="*"/>
					</colgroup>
					<tbody>
						<tr>
							<th class="tal">이름 <span class="red">*</span></th>
							<td class="tal"><input type="text" class="type01 width_50" id="usernm" name="usernm" value="${s_name}"/></td>
						</tr>
						<tr>
							<th class="tal">아이디(이메일) <span class="red">*</span></th>
							<td class="tal">
								<input type="text" class="type01 width_20 mobile_w35" id="email_addr" name="email_addr"/>
								<span>@</span>
								<input type="text" class="type01 width_20 mobile_w40" placeholder="직접입력" id="email_domain" name="email_domain"/>
								<div class="selectBox selType02 width_30 mobile_wide">
									<select class="selectCus" id="email_select" onchange="emailSelectChange(this);">
											<option value="">선택하세요.</option>
											<option value="naver.com">naver.com</option>
											<option value="daum.net">daum.net</option>
											<option value="nate.com">nate.com</option>
											<option value="gmail.com">gmail.com</option>
											<option value="hanmail.net">hanmail.net</option>
											<option value="yahoo.co.kr">yahoo.co.kr</option>
											<option value="dreamwiz.com">dreamwiz.com</option>
											<option value="lycos.co.kr">lycos.co.kr</option>
											<option value="empal.com">empal.com</option>
											<option value="korea.com">korea.com</option>
											<option value="paran.com">paran.com</option>
											<option value="freechal.com">freechal.com</option>
											<option value="hanmir.com">hanmir.com</option>
											<option value="hotmail.com">hotmail.com</option>
											<option value="9999" selected="selected">직접입력</option>
									</select>
								</div>
								<span class="btn_idSearch"><button type="button" class="btnType01" onClick="UserIdCheck(this);">중복확인</button></span>
								<p class="mt5 bdAlertTxt"><span class="red " id="idchkmsg"></span></p>
							</td>
						</tr>
						<tr>
							<th class="tal">비밀번호 <span class="red">*</span></th>
							<td class="tal">
								<input type="password" class="type01 width_50" id="user_pw" name="user_pw"/>
								<span class="bdAlertTxt text01 ml5">6~20자 영문, 숫자, 특수기호 사용 가능</span>
							</td>
						</tr>
						<tr>
							<th class="tal">비밀번호 확인 <span class="red">*</span></th>
							<td class="tal">
								<input type="password" class="type01 width_50" id="user_re_pw" name="user_re_pw" />
								<span class="blue ml10" id="pwmsg"></span>
							</td>
						</tr>
						<tr>
							<th class="tal">휴대폰 번호 <span class="red">*</span></th>
							<td class="tal">
								<!-- <div class="selectBox selType02 width_20">
									<select class="selectCus">
										<option value="">010</option>
										<option value="">011</option>
									</select>
								</div> -->
								
								<input type="text" class="type01 width_20 mobile_w30" id="mobile1" name="mobile1" value="${hp1}" maxlength="4" readonly/>
								<span> - </span>
								<input type="text" class="type01 width_20 mobile_w30" id="mobile2" name="mobile2" value="${hp2}" maxlength="4" readonly/>
								<span> - </span>
								<input type="text" class="type01 width_20 mobile_w30" id="mobile3" name="mobile3" value="${hp3}" maxlength="4" readonly/>
								<span class="btn"><button type="button" class="btnType01" onClick="UserAuth(this);" >입주민 인증</button></span>
								<span class="red"><p class="mt5 bdAlertTxt" id="authchkmsg"></p></span>
							</td>
						</tr>
						<tr>
							<th class="tal">입주 빌딩/유형/동/층/호 <span class="red">*</span></th>
							<td class="tal">
								<div class="selectBox selType02 mobile_wide" id="DFHList_div" style="width:50%;">
									<select class="selectCus" id="DFHList" name="DFHList">
										
									</select>
								</div>
							
								<input type="text" class="type01 width_50" id="proj_txt" name="proj_txt" style="display:none;"/>
								<span class="btn" ><button type="button" id="proj_button" class="btnType01" onClick="projcodecall(this);" style="display:none;">단지검색</button></span>
								
								<span class="red"><p class="mt5 bdAlertTxt" id="aaaaa"></p></span>
								
								<br/>
								<div class="selectBox selType02 mobile_wide" id="procode_div">
									
									<select class="selectCus" id="procode" name="procode" onchange="dongListcall(this);" >
										
									</select>	
									
								</div>
								<%-- <div class="selectBox selType02 mobile_wide" id="sellcode_div" style="display:none;">
									
									<select class="selectCus" id="sellcode" name="sellcode" onchange="sellcodeChange();">
										<c:forEach var="SellList" items="${SellList}">
											<option value="${SellList.sell_code}">${SellList.sell_name}</option>
										</c:forEach>
									</select>	
								</div> --%>
								<div class="selectBox selType02 mobile_wide" id="dong_div">
									<select class="selectCus" id="dong" name="dong" onchange="floorListcall(this);">
										
									</select>		
								</div>
								<div class="selectBox selType02 mobile_wide" id="floor_div">
									<select class="selectCus" id="floor" name="floor" onchange="hoListcall(this);">
										
									</select>		
								</div>
								<div class="selectBox selType02 mobile_wide" id="ho_div">
									<select class="selectCus" id="ho" name="ho">
										
									</select>
								</div>
								<!--^^ <p class="mt5 bdAlertTxt"><span class="red ">정보가 조회되지 않습니다. 임대인/임대관리인에게 문의하세요.</span></p> -->
							</td>
						</tr>
						<tr>
							<th class="tal">주소 <span class="red">*</span></th>
							<td class="tal">
								<p>
									<input type="text" id="zipcode" name="zipcode" class="type01 width_20 mobile_w35" readonly/>
									<button type="button" class="btnType01" onClick="FindRoadCode(this);">우편번호</button>
								</p>
								<p class="mt5">
									<input type="text" id="addr" name="addr" class="type01 width_75 mobile_wide" readonly/>
								</p>
								<p class="mt5">
									<input type="text" id="addr_detail" name="addr_detail" class="type01 width_75 mobile_wide"/>
								</p>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- //tb-list01 -->
			
			<div id="list"> <!-- 검색 결과 리스트 출력 영역 --> </div>
			
			<!-- btnArea -->
			<div class="btnArea">
				<button type="button" class="lineType" onClick="CancelJoin(this);">취소</button>
				<button type="button" class="fillType" onClick="validSubmit(this);">확인</button>
			</div>
			<!-- //btnArea -->

		</div>
	</div>
	<!-- //container -->
	
	<!-- iOS에서는 position:fixed 버그가 있음, 적용하는 사이트에 맞게 position:absolute 등을 이용하여 top,left값 조정 필요 -->
	<div id="layer" style="display:none;position:fixed;overflow:hidden;z-index:1;-webkit-overflow-scrolling:touch;">
	<img src="//t1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnCloseLayer" style="cursor:pointer;position:absolute;right:-3px;top:-3px;z-index:1" onclick="closeDaumPostcode()" alt="닫기 버튼">
	</div>
</form>

<script type="text/javascript">
	// 다음 도로명 주소 찾기 
	var element_layer = document.getElementById('layer');
	
	function closeDaumPostcode() {
	    // iframe을 넣은 element를 안보이게 한다.
	    element_layer.style.display = 'none';
	}
	function execDaumPostcode() {
	    new daum.Postcode({
	        oncomplete: function(data) {
	            // 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.
	
	            // 각 주소의 노출 규칙에 따라 주소를 조합한다.
	            // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
	            var fullAddr = data.address; // 최종 주소 변수
	            var extraAddr = ''; // 조합형 주소 변수
	
	            // 기본 주소가 도로명 타입일때 조합한다.
	            if(data.addressType === 'R'){
	                //법정동명이 있을 경우 추가한다.
	                if(data.bname !== ''){
	                    extraAddr += data.bname;
	                }
	                // 건물명이 있을 경우 추가한다.
	                if(data.buildingName !== ''){
	                    extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
	                }
	                // 조합형주소의 유무에 따라 양쪽에 괄호를 추가하여 최종 주소를 만든다.
	                fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
	            }
	
	            // 우편번호와 주소 정보를 해당 필드에 넣는다.
	            document.getElementById('zipcode').value = data.zonecode; //5자리 새우편번호 사용
	            document.getElementById('addr').value = fullAddr;
	           // document.getElementById('addr_detail').value = data.addressEnglish;
	
	            // iframe을 넣은 element를 안보이게 한다.
	            // (autoClose:false 기능을 이용한다면, 아래 코드를 제거해야 화면에서 사라지지 않는다.)
	            element_layer.style.display = 'none';
	        },
	        width : '100%',
	        height : '100%',
	        maxSuggestItems : 5
	    }).embed(element_layer);
	
	    // iframe을 넣은 element를 보이게 한다.
	    element_layer.style.display = 'block';
	
	    // iframe을 넣은 element의 위치를 화면의 가운데로 이동시킨다.
	    initLayerPosition();
	}
	
	//브라우저의 크기 변경에 따라 레이어를 가운데로 이동시키고자 하실때에는
	// resize이벤트나, orientationchange이벤트를 이용하여 값이 변경될때마다 아래 함수를 실행 시켜 주시거나,
	// 직접 element_layer의 top,left값을 수정해 주시면 됩니다.
	function initLayerPosition(){
	    var width = 300; //우편번호서비스가 들어갈 element의 width
	    var height = 400; //우편번호서비스가 들어갈 element의 height
	    var borderWidth = 5; //샘플에서 사용하는 border의 두께
	
	    // 위에서 선언한 값들을 실제 element에 넣는다.
	    element_layer.style.width = width + 'px';
	    element_layer.style.height = height + 'px';
	    element_layer.style.border = borderWidth + 'px solid';
	    // 실행되는 순간의 화면 너비와 높이 값을 가져와서 중앙에 뜰 수 있도록 위치를 계산한다.
	    element_layer.style.left = (((window.innerWidth || document.documentElement.clientWidth) - width)/2 - borderWidth) + 'px';
	    element_layer.style.top = (((window.innerHeight || document.documentElement.clientHeight) - height)/2 - borderWidth) + 'px';
	}
</script>

<%@include file="/WEB-INF/view/front/pc/desian/member/include/mypage_footer.jsp" %>