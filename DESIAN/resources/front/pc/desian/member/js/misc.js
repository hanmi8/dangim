// 아이디 유효성 확인 ##################################################
/*
	0: 정상
	1: 아이디는 [min]~[max]자의 영문, 숫자만 사용 할 수 있습니다.
*/
function checkInvalidId(id, min, max) {
	if (!/^[a-zA-Z0-9_]+$/.test(id)) return 1;
	if (typeof(min) != 'undefined' && id.length < min) return 1;
	if (typeof(max) != 'undefined' && id.length > max) return 1;

	return 0;
}

// 비밀번호 유효성 확인 ##################################################
/*
	0: 정상
	1: 비밀번호는 아이디와 동일하게 사용할 수 없습니다.
	2: 비밀번호는 영문 대/소문자, 숫자를 조합하여 [min]~[max]자리로 해주세요.
*/
function checkInvalidPw(id, pw, min, max) {
	var id = id || '';

	// 아이디와 동일 확인
	if (id == pw) return 1;

	// 영문/숫자 조합(한글제외) 및 자리수 확인
	if (!/^(?=.*[0-9])(?=.*[a-zA-Z])(?!.*[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).*$/.test(pw)) return 2;
	if (typeof(min) != 'undefined' && pw.length < min) return 2;
	if (typeof(max) != 'undefined' && pw.length > max) return 2;

	var SamePass_0 = 0; //동일문자 카운트
	var SamePass_1 = 0; //연속성(+) 카운드
	var SamePass_2 = 0; //연속성(-) 카운드
	
	for(var i=0; i < pw.length; i++) {
		var chr_pass_0 = pw.charAt(i);
		var chr_pass_1 = pw.charAt(i+1);
     
		//동일문자 카운트
		if(chr_pass_0 == chr_pass_1) {
			SamePass_0 = SamePass_0 + 1
		}
     
		var chr_pass_2 = pw.charAt(i+2);

		//연속성(+) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == 1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == 1) {
			SamePass_1 = SamePass_1 + 1
		}
     
		//연속성(-) 카운드
		if(chr_pass_0.charCodeAt(0) - chr_pass_1.charCodeAt(0) == -1 && chr_pass_1.charCodeAt(0) - chr_pass_2.charCodeAt(0) == -1) {
			SamePass_2 = SamePass_2 + 1
		}		
	}
	
	if(SamePass_0 > 1) return 3;
	if(SamePass_1 > 1 || SamePass_2 > 1 ) return 4;
	
	
	return 0;
}

// 이메일 확인 ##################################################
function checkEmail(email) {
	if (email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) != -1) {
		return true;
	}
	else {
		return false;
	}
}
function checkEmailInputShort(object) {
	var $obj = $(object); 
		
	$obj.val( $obj.val().replace(/[^a-zA-Z0-9\.\_\-]/gi,'') );
}
function checkEmailInput(object) {
	var $obj = $(object); 
	
	$obj.val( $obj.val().replace(/[^a-zA-Z0-9\.\_\-@]/gi,'') );
}

// URL 확인 ##################################################
function checkUrl(url) {
	if (new RegExp('^(http|https)\:\/\/').test(url.toLowerCase())) {
		return true;
	}
	else {
		return false;
	}
}
function checkNumber(nu) {
	if (!/^[0-9+]*$/.test(nu)) return 1;
	return 0;
}


// 주민등록번호 유효성 체크 ##################################################
function checkResNo(objResNo1, objResNo2) {
	var i;

	if (objResNo1.value.stripspace() == "" || objResNo2.value.stripspace() == "") return false;

	var total = 0;
	var key = new Array(2,3,4,5,6,7,8,9,2,3,4,5);
	var resNo = objResNo1.value + objResNo2.value;

	if (resNo.length == 13) {
		for (i=0; i<12; i++) {
			total = total + (parseInt(resNo.charAt(i), 10) * key[i]);
		}
		var result = (11 - (total % 11)) % 10;

		if (parseInt(resNo.charAt(12), 10) != result) {
			alert ("유효한 주민등록번호가 아닙니다.");
			objResNo1.value = "";
			objResNo2.value = "";
			objResNo1.focus();
			return false;
		}
		else {
			return true;
		}
	}
	else if (objResNo1.value.stripspace().length != 6) {
		alert("주민등록번호 앞자리는 6자리입니다. 다시 입력하세요.");
		objResNo1.value = "";
		objResNo1.focus();
		return false;
	}
	else if (objResNo2.value.stripspace().length != 7) {
		alert("주민등록번호 뒷자리는 7자리입니다. 다시 입력하세요.");
		objResNo2.value = "";
		objResNo2.focus();
		return false;
	}
}

// 법인등록번호 유효성 체크 ##################################################
function checkComNo(objComNo1, objComNo2) {
	var i;

	if (objComNo1.value.stripspace() == "" || objComNo2.value.stripspace() == "") return false;

	var key = new Array(1,2,1,2,1,2,1,2,1,2,1,2);
	var comNo = objComNo1.value + objComNo2.value;
	var total = 0;
	var result = 0;
	
	if (comNo.length == 13) {
		for (var i=0; i<12; i++) {
			var no = parseInt(comNo.charAt(i), 10) * key[i];
			if (no >= 10) {
				total += no % 10;
			}
			else {
				total += no;
			}
		}
		result = total % 10;
	
		if (result > 0) {
			result = 10 - result;
		}
		else {
			result = 0;
		}
		
		if (parseInt(comNo.charAt(12), 10) != result) {
			alert ("유효한 법인등록번호가 아닙니다.");
			objComNo1.value = "";
			objComNo2.value = "";
			objComNo1.focus();
			return false;
		}
		else {
			return true;
		}
	}
	else if (objComNo1.value.stripspace().length != 6) {
		alert("법인등록번호 앞자리는 6자리입니다. 다시 입력하세요.");
		objComNo1.value = "";
		objComNo1.focus();
		return false;
	}
	else if (objComNo2.value.stripspace().length != 7) {
		alert("법인등록번호 뒷자리는 7자리입니다. 다시 입력하세요.");
		objComNo2.value = "";
		objComNo2.focus();
		return false;
	}
}

// 사업자번호 유효성 체크 ##################################################
function checkBizNo(objBizNo1, objBizNo2, objBizNo3) {
	var i, rule = "137137135";
	var step1, step2, step3, step4, step5, step6, step7;

	var bizNo = objBizNo1.value + objBizNo2.value + objBizNo3.value; // 사업자번호 10자리

	step1 = 0; // 초기화

	for (i=0; i<7; i++) {
		step1 = step1 + (bizNo.substring(i, i+1) * rule.substring(i, i+1));
	}

	step2 = step1 % 10;
	step3 = (bizNo.substring(7, 8) * rule.substring(7, 8))% 10;
	step4 = bizNo.substring(8, 9) * rule.substring(8, 9);
	step5 = Math.round(step4 / 10 - 0.5);
	step6 = step4 - (step5 * 10);
	step7 = (10 - ((step2 + step3 + step5 + step6) % 10)) % 10;

	if (bizNo.substring(9, 10) != step7) {
		alert ("유효한 사업자등록번호가 아닙니다.");
		objBizNo1.value = "";
		objBizNo2.value = "";
		objBizNo3.value = "";
		objBizNo1.focus();
		return false;
	}
	else {
		return true;
	}
}

// 숫자 증감 처리 ##################################################
function controlNum(obj, target) {
	var target = (target.nodeType==1) ? target : document.getElementById(target);
	var value = target.value.toString().toNumeric();
	var maxlength = target.getAttribute('maxlength');
	var min = target.getAttribute('min');

	if (!target.disabled) {
		maxlength = (maxlength || 0).toString().toNumeric();

		var adjust = obj.getAttribute('adjust');

		if (adjust == '-') --value;
		else ++value;
		
		if (maxlength > 0 && value.toString().length > maxlength) {
			--value;
		}
		if (min != null && value < min.toNumeric()) {
			value = min.toNumeric();
		}

		target.value = value;
	}
}

// 로그인 ##################################################
function gotoLogin(mode) {
	if (typeof (mode) == 'undefined' || mode == "") {
		location.href = "/front/member/login.do?redirect="+escape(document.URL);
	} else {
		location.href = "/" + mode + "/front/member/login.do?redirect="+escape(document.URL);
	}

}

function uploadReturn(mode) {
	eval("var infoObj=" + uinfo);
	//ReturnFileUploadValue(infoObj);
	
	
/*	업로드한 jsp 또는 js 에서 넣어서 활용한다.
	function x_FileUploaded(ReturnValue) {
		if(ReturnValue==null){
			return;
		}
		
		var streFileNm = ReturnValue[0].streFileNm;
		var orignlFileNm = ReturnValue[0].orignlFileNm;
		var fileStreCours = ReturnValue[0].fileStreCours;
		var fileExtsn = ReturnValue[0].fileExtsn;
		
	}*/
	
}