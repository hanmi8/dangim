<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld"%>
<%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld"%>
<%@taglib prefix="botDetect" uri="https://captcha.com/java/jsp"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html lang="ko">
<head>
	<title>이지램스(ezREMS)™ | 고객용 페이지</title>
	
	<meta charset="utf-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
	<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=0,maximum-scale=10,user-scalable=no">
	
	<link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
	<link rel="stylesheet" type="text/css" href="/resources/front/pc/desian/member/css/login.css" />
    <!-- publishing 추가-->
    <link rel="stylesheet" href="/resources/front/pc/desian/new/css/common.css" type="text/css" />
	
	<script type="text/javascript" src="/resources/common/core/3rd/jquery/jquery-1.11.3.min.js"></script>
</head>

<%@include file="/WEB-INF/view/front/pc/desian/main/include/commonJavascript.jsp" %>
<%@include file="/WEB-INF/view/front/pc/desian/main/include/cm_page_reload.jsp" %>
<%@include file="/WEB-INF/view/front/pc/desian/main/include/version.jsp" %>

<style type="text/css" >
.robot_wrap { text-align: center; }

</style>

<script type="text/javascript">
var message = '${message}';
if ( message != null && message != "" ) {
	alert(message);
}

// app 접속 시
var isFromApp = ('undefined' !== (typeof window.ReactNativeWebView));

if (isFromApp) {
	document.addEventListener('onWebViewMessage', function(evt) {
		var msg = evt.detail;

		switch (msg.cmd) {
		case 'selectAuth':
			var id = JSON.parse(msg.username),
				param = {
					userid: id.userid,
					userpw: msg.password,
					div: id.div,
					deviceid: msg.fcmToken,
					osgub: 'iOS' === msg.systemName ? '2' : '1',
					osversion: msg.systemVersion,
					uuid: msg.uniqueId
				};
			
			$.ajax({
				url: '/front/member/appActionLogin.do',
				method: 'POST',
				data: param
			}).done(function(data) {
				if ('OK' !== data.result) {
					alert(data.message || '로그인 실패');
				} else {
					var reurl = GLOBAL_SSL_URL;
	    			if ('Y' === data.ishirer || 'Y' === data.ismaster) {
	    				reurl += "/front/main/main.do";
	    			} else if ('Y' === data.ismanager) {
	    				reurl += "/manager/main/main.do";
	    			} else if ('Y' === data.islessor) {
		    			reurl += "/lessor/main/main.do";
	    			}
					
	    			location = reurl;
				}
			});
			break;
		}
	});

	ReactNativeWebView.postMessage(JSON.stringify({cmd: 'selectAuth', authenticationPrompt: {title: '로그인 보안인증'}}));
}

//사업지 선택시 
function validSubmit(f){
	event.preventDefault();
	
	var userid = $.trim($('#userid').val());
	var userpw = $.trim($('#userpw').val());
 	var captchaCode = $.trim($('#captchaCode').val());
 	
	if (userid == null || userid == ""){
		alert("아이디를 입력해주세요");
		return false;
	}
	if (userpw == null || userpw == ""){
		alert("비밀번호를 입력해주세요");
		return false;
	}

	if($("#div_captchaCode").is(":visible")) {
	 	if (captchaCode == null || captchaCode == ""){
			alert("보안문자를 입력하여 주십시오.");
			return false;
		}
	}	
/* 	
	var div = $('input[name=div]:checked').val();
	
	if($(".check_select option:selected").val()=="1"){
		$("#div").val("lessor");
	}else if($(".check_select option:selected").val()=="2"){
		$("#div").val("manager");
	}else if($(".check_select option:selected").val()=="3"){
		$("#div").val("hirer");
	} */
	
	
/* 	var f = document.Frm;
	f.action = "/front/member/actionLogin.do";
	f.submit();
	
 	
	return; */
	
	$.ajax({
		url: GLOBAL_SSL_URL+'/front/member/appActionLogin.do',
		type: 'POST',
		data:$("form[name='Frm']").serialize(),
		dataType:'json',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	      async: false,
	      cache: false,
	      beforeSend: function(xhr){ 
	            xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	            xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
	            xhr.setRequestHeader("Progma","no-cache");
	            $('.wrap-loading').removeClass('display-none');
	       },     
	      error: function(xhr, status, err) {
	    	  $('.wrap-loading').addClass('display-none');
	    	  alert(err);
	          if (xhr.status == 401) {
	            alert("401 Unauthorized");
	          } else if (xhr.status == 403) {
	            alert("403 Forbidden");
	          } else {
	            alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
	          }		        
	      },
	      success: function(data) {    	  
 	    	  console.log("data :" +data);
// 	    	  console.log("data.message :" +data.message);


				
				
	    	  $("#account").val(data.account);
	    	 if (data != null || data.result != null){
	    		if (data.result == "OK"){
	    			
	    			// app 로그인인 경우 자동로그인용 정보 저장
	    			if (isFromApp) {
	    				var paramArr = $("form[name='Frm']").serializeArray(),
		    				param = {};
		    			
		    			for (var i in paramArr) {
		    				param[paramArr[i]['name']] = paramArr[i]['value'];
		    			}
		    			
		    			param.userid = JSON.stringify({userid: param.userid, div: param.div});
		    			param.cmd = 'insertAuth';
		    			ReactNativeWebView.postMessage(JSON.stringify(param));
	    			}
	    			
	    			var reurl = $('#requesturl').val();
	    			
	    			
	    			var f = document.Frm;
	    			f.target = "_self";
	    			f.action = "/front/member/frontNewLink.do";;
	    			f.submit();
	    			
	    		}else{
	    			$('.wrap-loading').addClass('display-none');
	    			if ( data.result == "ERROR-QIESCENCE"){
	    				alert("휴면회원 상태입니다. 인증 화면으로 이동합니다");
	    				
	    				var f = document.Frm;
		    			f.target = "_self";
		    			f.action = GLOBAL_SSL_URL+"/front/member/quiescence.do";
		    			f.submit();
	    			}else{
	    				BasicCaptcha.ReloadImage();
		    			alert( data.message );
		    			if (data.account > 3 ) {
		    				$('#div_captchaCode').show();
		    			}
	    			}
	    		}
	    	 }else{
	    		 $('.wrap-loading').addClass('display-none');
	    		 
	    		 alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.!!");
	    	 }
	      }
	      
	      

	      
	      
	}); // $.ajax
	

}

jQuery(function ($){
	$('document').ready(function () {
		var account = $("#account").val();
		
		if (Number(account) > 3 ) {
			$('#div_captchaCode').show();
		}
		
	});
});



</script>




<body class="login">

<div class="loginWrap">
    <div class="loginBoxWrap">
    	<div class="loginBox">
	        <div class="left">
				<h3>No1.<br> 부동산 <br>임대/자산관리<br> 플랫폼</h3>
<%--				<div id="1pxborder"></div>--%>
				<h1>
<%--					<img src="/resources/front/pc/desian/member/img/img_login_logo.png">--%>
				</h1>
	        </div>
        
        
	        <div class="right">
				<!-- 정보 입력 영역 시작 -->
				<div id="title">로그인</div>
	
				<form name="Frm" method="post" >
					<input type="hidden" id="requesturl" name="requesturl" value="${requesturl}" />
					<input type="hidden" id="div" name="div" />
					<input type="hidden" name="account" id="account" value="${account}" />
	
		           <!-- <div class="inputBox"> 
		            
		            <div id="title_style">사용자</div>
		                <div class="custom-select">
						    <select class="check_select">
		                        <option value="0">사용자를 선택하세요</option>
		                        <option value="3" selected="selected">임차인</option>
		                        <option value="2">임대관리인</option>
		                        <option value="1">임대인</option>
						    </select>
						</div>
		                
		            </div> -->
		            
		            <div class="inputBox">
		            
		            <div id="title_style">이메일</div>
		                <input type="text" class="inputfield" id="userid" name="userid" placeholder="아이디를 입력하세요">
		                
		            </div>
		            
		            <div class="inputBox">
		            
		            <div id="title_style">패스워드</div>
		                <input type="password" class="inputfield" id="userpw" name="userpw" onkeydown="if (event.keyCode == 13){ validSubmit(this); $(this).blur();}" placeholder="패스워드를 입력하세요">
		                
		            </div>
		            
		            <!-- 정보 입력 영역 끝 -->
		            
		            <!-- 캡차 영역 시작 -->
					<div class="robot_wrap inputBox" id="div_captchaCode" style="display:none;">
						<botDetect:captcha id="BasicCaptcha" 
							userInputID="captchaCode" 
							codeLength="3" 
							codeStyle="NUMERIC"
							imageWidth="270" 
							imageStyle="GRAFFITI2"
							soundEnabled="true"
							helpLinkEnabled="false"
							additionalInlineCss="margin: auto !important;"
						/>
						<input type="text" class="inputfield" id="captchaCode" name="captchaCode" value="${basicExample.captchaCode}" onkeydown="if (event.keyCode == 13) {validSubmit(this); $(this).blur();}" tabindex="5" placeholder="위에 보이는 문자를 입력하세요" style="text-align:center;"/>
					</div>
		            <!-- 캡차 영역 끝 -->
		            
		            <!-- 로그인 버튼 영역 시작 -->
		            <div class="btn_wrap">
		              <!-- 모바일에서만 보여지는 부분 시작 -->
		               <div class="layout1">
							<div class="find_area">
		                        <a href="/front/member/join_info.do">회원가입</a>
		                        <a href="/front/member/idfind.do">아이디 찾기</a>
		                        <a href="/front/member/idfind.do">비밀번호 찾기</a>
		                    </div>
	                    	<button class="login_btn" onclick="validSubmit(this);">로그인</button>
		               </div>
		                <!-- 모바일에서만 보여지는 부분 끝 -->
		                
		               <!--태블릿 PC에서만 보여지는 부분 시작 -->
		               <div class="layout2">
		                   <div class="find_area">
		                    <div>아직 회원이 아니신가요?
		                        <a href="/front/member/join_info.do">회원가입</a></div>
		                    <div>아이디를 잊으셨나요?
		                    <a href="/front/member/idfind.do">아이디 / 비밀번호 찾기</a></div>
		                   </div>
		               <button class="login_btn" onclick="validSubmit(this);">로그인</button>
		               </div>
		                              
		               <!--태블릿 PC에서만 보여지는 부분 끝 -->
		               <p>COPYRIGHT © ZEONS</p>
		
		            </div>
				</form>            
			</div>
           
		</div>
        
    </div>
    
</div>

<script>
var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
        /*when an item is clicked, update the original select box,
        and the selected item:*/
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("same-as-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
      /*when the select box is clicked, close any other select boxes,
      and open/close the current select box:*/
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);
</script>

<div class="wrap-loading" style="display:none;">
    <div><img src="/resources/common/custom/daumeditor/images/icon/editor/loading2.png" /></div>
</div>

</body>
</html>
