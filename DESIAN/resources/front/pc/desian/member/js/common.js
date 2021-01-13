if (navigator.userAgent.toLowerCase().indexOf('msie') != -1) {
	try { document.execCommand('BackgroundImageCache', false, true); } catch(e) {}
}

// Trim 함수 ##################################################
// Ex) str = "    테 스트   ".trim(); => str = "테 스트";
String.prototype.trim = function() {
	return this.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,'');
}

// 문자열 공백제거 함수 ##################################################
// Ex) str = "    테 스   트   ".stripspace(); => str = "테스트";
String.prototype.stripspace = function() {
	return this.replace(/ /g, '');
}

// 전체 문자열 바꾸기 함수 ##################################################
// Ex) str = "a테스트bcd테스트efg".replaceAll("테스트", ""); => str = "abcdefg";
String.prototype.replaceAll = function(a, b) {
	var s = this;
	if (navigator.userAgent.toLowerCase().indexOf('msie') != -1)
		return s.replace(new RegExp(a, 'gi'), b);
	else
		return s.split(a).join(b);
}

// 숫자변환 함수 ##################################################
// Ex) str = "a테스트bcd테스트efg".replaceAll("테스트", ""); => str = "abcdefg";
String.prototype.toNumeric = function() {
	var s = this;
	s = (typeof s == 'undefined' ? '0' : s.toString().replace(/,/g, ''));
	if (isNaN(s) || s.replace(/ /g, '') == '') return 0;
	else	return parseFloat(s);
}





// 객체 ##################################################
function _e(id) {
	return document.getElementById(id);
}

// 객체 스타일 ##################################################
function _es(id) {
	return document.getElementById(id).style;
}

// 하위(TagName) 객체 ##################################################
function _ee(id, name) {
	var parent = (typeof (id) == 'string' ? document.getElementById(id) : id);
	if (parent) return parent.getElementsByTagName(name);
	else return [];
}

// 부모 객체 ##################################################
function _pe(obj, name, css) {
	var result = null;

	var parent = obj.parentNode;
	while (parent) {
		if (parent.tagName.toLowerCase() == name && (!css || parent.className == css)) {
			result = parent;
			break;
		}
		parent = parent.parentNode;
	}

	return result;
}

// 이벤트 추가 ##################################################
function addEvent(obj, type, listener) {
	if (window.addEventListener) obj.addEventListener(type, listener, false);
	else obj.attachEvent('on'+type, listener);
}

// 이벤트 추가 ##################################################
function removeEvent(obj, type, listener) {
	if (window.removeEventListener) obj.removeEventListener(type, listener, false);
	else obj.detachEvent('on'+type, listener);
}

// 키 관련 함수 ##################################################
function blockKey(e) {
	var e = window.event || e;
	if (window.event) {
		e.returnValue = false;
	}
	else {
		if (e.which != 8) e.preventDefault(); // 8 : Back Space
	}
}

function blockEnter(e) {
	var e = window.event || e;
	if (window.event) {
		if (e.keyCode == 13) e.returnValue = false;
	}
	else {
		if (e.which == 13) e.preventDefault();
	}
}

function blockNotNumber(e) {
	var e = window.event || e;
	if (window.event) {
		if (e.keyCode < 48 || e.keyCode > 57) e.returnValue = false;
	}
	else {
		if (e.which != 8 && (e.which < 48 || e.which > 57)) e.preventDefault(); // 8 : Back Space
	}
}

function telNumber(e) {
	var e = window.event || e;
	
	//alert(e.keyCode);
	if (window.event) {
		if (e.keyCode < 48 || e.keyCode > 57)  //키보드 상단 숫자
		{
			if (e.keyCode < 96 || e.keyCode > 105)  //키보드 오른쪽 숫자
			{				
				if (e.keyCode == 189 || e.keyCode == 109 || e.keyCode == 8)  // - 기호
				{

				}
				else
				{
					e.returnValue = false;
				}
			}
		}
	}
	else {
		//alert("11");
		if (e.which != 8 && (e.which < 48 || e.which > 57)) e.preventDefault(); // 8 : Back Space
	}
}

function onEnter(e, callBack) {
	var e = window.event || e;
	var keyCode = (window.event ? e.keyCode : e.which);
	if (keyCode == 13) {
		if (window.event) {
			e.returnValue = false;
		}
		else {
			e.preventDefault();
		}
		callBack();
	}
}

// 브라우져 정보 ##################################################
function getBrowser() {
	var ua = navigator.userAgent.toLowerCase();

	var match = [] ||
		/(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		/(trident)(?:.*rv:([\w.]+))?/.exec(ua) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) 
	;

	var browser = {};

	if (match[1]) {
		browser[match[1]] = true;
		browser.version = parseFloat(match[2]);
	}

	if (browser.chrome) {
		browser.webkit = true;
	}
	else if (browser.webkit) {
		browser.safari = true;
	}
	else if (browser.trident && browser.version) {
		browser.msie = true;
	}

	return browser;
}

// 브라우져 정보 ##################################################
function getBrowser() {
	var ua = navigator.userAgent.toLowerCase();

	var match = [] ||
		/(chrome)[ \/]([\w.]+)/.exec( ua ) ||
		/(webkit)[ \/]([\w.]+)/.exec( ua ) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
		/(msie) ([\w.]+)/.exec( ua ) ||
		/(trident)(?:.*rv:([\w.]+))?/.exec(ua) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) 
	;

	var browser = {};

	if (match[1]) {
		browser[match[1]] = true;
		browser.version = parseFloat(match[2]);
	}

	if (browser.chrome) {
		browser.webkit = true;
	}
	else if (browser.webkit) {
		browser.safari = true;
	}
	else if (browser.trident && browser.version) {
		browser.msie = true;
	}

	return browser;
}

// 객체 Offset 가져오기 ##################################################
function getOffset(obj) {
	var _x = 0, _y = 0;

	while (obj && obj.tagName.toLowerCase() != 'body' && !isNaN(obj.offsetLeft) && !isNaN(obj.offsetTop)) {
		_x += obj.offsetLeft - obj.scrollLeft;
		_y += obj.offsetTop - obj.scrollTop;
		obj = obj.offsetParent;
	}

	return { left: _x, top: _y };
}





// 팝업 ##################################################
function openPopup(theURL, winName, width, height, remFeatures) {
	var features = '';
	if (typeof winName == 'undefined') winName = '';
	if (typeof width != 'undefined') features += (features ? ',' : '')+'width='+width;
	if (typeof height != 'undefined') features += (features ? ',' : '')+'height='+height;
	if (typeof remFeatures != 'undefined') features += (features ? ',' : '')+remFeatures;
	if (features.indexOf('status') < 0) features += ',status=yes';
	if (features.indexOf('scrollbars') < 0) features += ',scrollbars=no';

	var popup = window.open(theURL, winName, features);
	popup.focus();

	return popup;
}

// 팝업 - 팝업창 화면중앙 오픈 ##################################################
function openPopupCenter(theURL, winName, width, height, remFeatures) {
	var left = (screen.width/2) - (width/2);
	var top = (screen.availHeight/2) - (height/2);
	var features = 'left='+left+',top='+top+',width='+width+',height='+height;
	if (typeof winName == 'undefined') winName = '';
	if (typeof remFeatures != 'undefined') features += ','+remFeatures;
	if (features.indexOf('status') < 0) features += ',status=yes';
	if (features.indexOf('scrollbars') < 0) features += ',scrollbars=no';

	var popup = window.open(theURL, winName, features);
	popup.focus();

	return popup;
}

// 모달 ##################################################
function MM_openModal(theURL, obj, features) {
	window.showModalDialog(theURL, obj, features);
}

// 즐겨찾기 추가 ##################################################
// 예) <a href="javascript:;" onClick="addFavorites('홈페이지', 'http://www.homepage.com'); return false;">즐겨찾기 등록</a>
function addFavorites(title, url) {
	if (window.sidebar && window.sidebar.addPanel) { // Firefox
		window.sidebar.addPanel(title, url, '');
	}
	else if (window.opera && window.print) { // Opera
		var obj = document.createElement('a');
		obj.setAttribute('href',url);
		obj.setAttribute('title',title);
		obj.setAttribute('rel','sidebar');
		obj.click();
	}
	else if (document.all) { // Internet Explorer
		window.external.AddFavorite(url, title);
	}
	else{
		alert("이용하시는 웹 브라우저에서는 지원되지 않는 기능입니다.\n\nCtrl+D 키를 누르시면 즐겨찾기에 추가하실 수 있습니다.");
		return true;
	}
}

// 시작페이지 설정 ##################################################
// 예) <a href="javascript:;" onClick="setStartPage(this, 'http://www.homepage.com'); return false;">시작페이지로</a>
function setStartPage(obj, url) {
	if (document.all && window.external) { // IE
		obj.style.behavior = 'url(#default#homepage)';
		obj.setHomePage(url);
	}
	else { // Firefox, Opera, Safari ...
		alert("이용하시는 웹 브라우저에서는 지원되지 않는 기능입니다.");
		return true;
    }
}

// 페이지 이동 ##################################################
function gotoUrl(url) {
	if (url.stripspace() != '') {
		location.href = url;
	}
}

// 페이지 최상단으로 ##################################################
function goTop() {
	window.scrollTo(0, 0);
}





// IFRAME RESIZE 함수 ##################################################
function resizeFrame(frameWindow, params) {
	if (!frameWindow.name) return false;

	var frameElement = document.getElementById(frameWindow.name);

	var frameDoc = null;
	if (frameElement.contentDocument) frameDoc = frameElement.contentDocument;
	else if (frameElement.contentWindow) frameDoc = frameElement.contentWindow.document;
	else frameDoc = frameElement.document;

	if (frameElement.style.display == 'none') frameElement.style.display = '';

	var frameBody = (frameDoc.documentElement || frameDoc.body);

	var resizeWidth = frameBody.scrollWidth;
	var resizeHeight = frameBody.scrollHeight;

	var minWidth = minHeight = 0;
	var maxWidth = maxHeight = 0;
	var fixWidth = fixHeight = 0;

	if (params) {
		if (params.wrap) {
			resizeWidth = params.wrap.offsetWidth;
			resizeHeight = params.wrap.offsetHeight;
		}

		minWidth = (params.minWidth ? parseInt(params.minWidth, 10) : 0);
		minHeight = (params.minHeight ? parseInt(params.minHeight, 10) : 0);
		maxWidth = (params.maxWidth ? parseInt(params.maxWidth, 10) : 0);
		maxHeight = (params.maxHeight ? parseInt(params.maxHeight, 10) : 0);
		fixWidth = (params.fixWidth ? parseInt(params.fixWidth, 10) : 0);
		fixHeight = (params.fixHeight ? parseInt(params.fixHeight, 10) : 0);
	}

	if (minWidth > 0 && resizeWidth < minWidth) resizeWidth = minWidth;			// 최소 폭
	if (minHeight > 0 && resizeHeight < minHeight) resizeHeight = minHeight;		// 최소 높이
	if (maxWidth > 0 && resizeWidth > maxWidth) resizeWidth = maxWidth;			// 최소 폭
	if (maxHeight > 0 && resizeHeight > maxHeight) resizeHeight = maxHeight;		// 최소 높이

	if (fixWidth > 0) resizeWidth = fixWidth;		// 고정 폭
	if (fixHeight > 0) resizeHeight = fixHeight;	// 고정 높이

	if (fixWidth > -1) frameElement.style.width = resizeWidth + 'px';
	if (fixHeight > -1) frameElement.style.height = resizeHeight + 'px';
}





// 공백 확인 ##################################################
function isEmpty(obj) {
	
	if (obj == null){
		return true;
	}else{
		return (obj.value.stripspace()=='' ? true : false);
	}
}

function isEmptyVar(obj) {
	
	if (obj == null){
		return true;
	}else{
		return (obj.stripspace()=='' ? true : false);
	}
}

// 배열 확인 ##################################################
function isArray(obj) {
	try {
		return /^\s?function Array()/.test(obj.constructor.toString());
	}
	catch(e) {
		return false;
	}
}

// 숫자 확인 ##################################################
function isNumeric(value) {
	var compare = value;
	if (isNaN(compare) || value.replace(/ /g, '') == '') compare = '0';
	return (value==compare ? true : false);
}

// 날자 확인 ################################################## checkDate
function isDate(value,type){
	var result = null;
	
	if(type == null || type == 'YYYY-MM-DD'){
		var arr = value.split('-');
		if (arr.length != 3 ) return false;
	
		var year = arr[0];
		var month = arr[1];
		var day = arr[2];
		var date = new Date(year+'/'+month+'/'+day+' 8:0:0');
	
		if (isNaN(date)) return false;
	
		result = ((date.getFullYear().toString() == year) && (date.getMonth() == parseInt(month, 10) - 1) && (date.getDate() == parseInt(day, 10)) ? true : false);
	}else if(type != null && type == 'YYYYMMDD'){
		if(value.length != 8) return false;
		
		var year = value.substring(0,4);
		var month = value.substring(4,6);
		var day = value.substring(6,8);

		var date = new Date(year+'/'+month+'/'+day+' 8:0:0');
		if (isNaN(date)) return false;
		
		result = ((date.getFullYear().toString() == year) && (date.getMonth() == parseInt(month, 10) - 1) && (date.getDate() == parseInt(day, 10)) ? true : false);
	}
	
	return result;
}

// 영문 포함 확인 ##################################################
function isExistEng(value) {
	return /[a-zA-Z]/.test(value);
}

// 숫자 포함 확인 ##################################################
function isExistNum(value) {
	return /[0-9]/.test(value);
}

// 한글 포함 확인 ##################################################
function isExistKor(value) {
	return /[ㄱ-ㅎ가-힣]/.test(value);
}





// 체크박스 전체선택 ##################################################
function checkCbAll(cbList, checked) {
	if (cbList) {
		if (typeof(cbList.length) == 'undefined') {
			if (!cbList.disabled) cbList.checked = checked;
		}
		else {
			for (var i=0; i<cbList.length; i++) {
				if (cbList[i].type.toUpperCase() == 'CHECKBOX') {
					if (cbList[i].value.stripspace() != '' && !cbList[i].disabled) {
						cbList[i].checked = checked;
					}
				}
			}
		}
	}
}

// Radio(CheckBox) 설정값 가져오기 ##################################################
function getRadio(obj) {
	var value = '';

	if (obj) {
		if (typeof(obj.length) == 'undefined') {
			if (obj.checked) {
				value = obj.value;
			}
		}
		else {
			for (var i=0; i<obj.length; i++) {
				if (obj[i].checked) {
					value = obj[i].value;
					break;
				}
			}
		}
	}
	return value;
}

// Radio 설정하기 ##################################################
function setRadio(obj, value) {
	if (obj) {
		if (typeof(obj.length) == 'undefined') {
			if (obj.value == value) {
				obj.checked = true;
			}
		}
		else {
			for (var i=0; i<obj.length; i++) {
				if (obj[i].value == value) {
					obj[i].checked = true;
					break;
				}
			}
		}
	}
}

// Radio Disabled 설정하기 ##################################################
function setRadioDisabled(obj, value, disabled) {
	if (obj) {
		if (typeof(obj.length) == 'undefined') {
			if (obj.value == value) {
				obj.disabled = disabled;
			}
		}
		else {
			for (var i=0; i<obj.length; i++) {
				if (obj[i].value == value) {
					obj[i].disabled = disabled;
					break;
				}
			}
		}
	}
}

// Form Disabled 전체 설정하기 ##################################################
function setRadioDisabledAll(obj, disabled) {
	var i;

	if (obj) {
		if (typeof(obj.length) == 'undefined') {
			obj.disabled = disabled;
		}
		else {
			for (var i=0; i<obj.length; i++) {
				obj[i].disabled = disabled;
			}
		}
	}
}

// Select 설정값 가져오기 ##################################################
function getSelect(obj) {
	var value = '';
	var idx = obj.selectedIndex;

	if (idx >= 0){
		value = obj.options[idx].value;
	}

	return value;
}

// Select Index 가져오기 ##################################################
function getSelectIndex(obj, value) {
	var index = -1;

	var nodes = obj.childNodes;
	for (var i=0; i<nodes.length; i++) {
		if (nodes[i].value.toString() == value.toString()) {
			index = i;
			break;
		}
	}

	return index;
}

// Select Optgroup 추가 ##################################################
function addSelectGroup(obj, text) {
	var optgroup = document.createElement('optgroup');
	optgroup.label = text;
	obj.appendChild(optgroup);
	return optgroup;
}

// Select Option 추가 ##################################################
function addSelectOption(obj, text, value) {
	if (typeof (value) == 'undefined') value = '';

	var option = document.createElement('option');
	option.innerHTML = text;
	option.value = value;
	obj.appendChild(option);
	return option;
}

// Select Option 삭제 ##################################################
function removeSelectOption(obj, index) {
	obj.remove(index);
}

// Select Option 전체삭제 ##################################################
function removeSelectOptionAll(obj) {
	var nodes = obj.childNodes;
	for (var i=nodes.length-1; i>=0; i--) {
		obj.removeChild(nodes[i]);
	}
}

// Input 추가 ##################################################
function addInput(f, type, name, value) {
	var input = document.createElement('input');
	input.type = type;
	input.name = name;
	input.value = value;
	f.appendChild(input);
}

// Input 제거 ##################################################
function removeInput(f, type, name, target) {
	var index = 0;
	if (typeof (target) == 'undefined') target = -1;

	var inputs = f.getElementsByTagName('input');
	if (inputs) {
		for (var i=inputs.length-1; i>=0; i--) {
			if (inputs[i].type == type && inputs[i].name == name) ++index;
		}
		for (var i=inputs.length-1; i>=0; i--) {
			if (inputs[i].type == type && inputs[i].name == name) {
				--index;
				if (target < 0) f.removeChild(inputs[i]);
				else if (index == target) {
					f.removeChild(inputs[i]);
					break;
				}
			}
		}
	}
}

// 입력 문자길이 확인후 다음항목으로 포커스 옮기기 ##################################################
function goNextFocus(obj, limit, next) {
	if (obj.value.stripspace().length >= limit){
		next.focus();
	}
}





// 영문/숫자 혼용 확인 ##################################################
function checkMixEngNum(value) {
	return (isExistEng(value) && isExistNum(value) ? true : false);
}

// 특수문자 확인 ##################################################
function checkSpecialChar(value) {
	var schr = '`~!@#$%^&*_+=|\\[]{}:;,<.>/?\'"';
	for (var i=0; i<schr.length; i++) {
		if (value.indexOf(schr.substr(i, 1)) != -1) return true;
	}
	return false;
}

// 텍스트 길이 확인 (일반) ##################################################
function checkTextLen(obj, limit) {
	if (obj.value.length > limit){
		alert('1~'+limit+'자까지 입력이 가능합니다.');
		obj.value = obj.value.substring(0, limit);
		obj.focus();
		return false;
	}
	return true;
}

// 텍스트 길이 확인 (Byte) ##################################################
function checkTextLenByte(obj, limit) {
	var bytes = 0;
	var value = obj.value;

	for (var i=0; i<value.length; i++) {
		++bytes;
		if ((value.charCodeAt(i) < 0) || (value.charCodeAt(i) > 127)) ++bytes;

		if (bytes > limit) {
			alert('1~'+(limit / 2)+'자의 한글, 또는 2~'+limit+'자의 영문, 숫자, 문장기호로 입력이 가능합니다.');
			obj.value = value.substring(0, i);
			obj.focus();
			return false;
		}
	}
	return true;
}

// 텍스트 Byte 길이 가져오기 ##################################################
function getTextByte(value) {
	var bytes = 0;

	for (var i=0; i<value.length; i++) {
		if (escape(value.charAt(i)).length >= 4) {
			bytes += 2;
		}
		else if (escape(value.charAt(i)) != '%0D') {
			++bytes;
		}
	}

	return bytes;
}

// 한글 분리 ##################################################
function splitKor(chr) {
	var kors = new Array();
	kors[0] = 'ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ'; // 19 초성
	kors[1] = 'ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ'; //21 중성
	kors[2] = ' ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ'; //28 종성

	var result = new Array();
	
	for (var i=0; i<chr.length; i++) {
		var ca = chr.charCodeAt(i);
		var hc1 = ca - 0xAC00;
		var hc2 = hc1 % 588;

		var chc = new Array();
		chc[0] = parseInt(hc1 / 588); // 초
		chc[1] = parseInt(hc2 / 28); // 중
		chc[2] = hc2 % 28; // 종

		for (var s=0; s<chc.length; s++) {
			result.push(kors[s].charAt(chc[s]).replace(/ /g, ''));
		}
	}
	return result;
}

// 한글 조사 판별 ##################################################
function getPostChar(value, p1, p2) { // 은/는, 이/가, 을/를, 과/와
	if (!value) return;
	var a = splitKor(value[value.length-1]);
	return (a[a.length-1].trim()?p1:p2);
}

// 파일명 확인 ##################################################
function checkFileName(obj) {
	var result = false;

	if (obj.value.stripspace() != '') {
		var fidx = obj.value.lastIndexOf('\\')+1;
		var filename = obj.value.substr(fidx, obj.value.length);
		result = isExistKor(filename);
	}

	if (result) {
		alert('파일명을 반드시 영문 또는 숫자로 해주세요.');
		obj.focus();
		return false;
	}
	return true;
}

// 파일 확장자 ##################################################
function getFileExt(value) {
	if (value != '') {
		var fidx = value.lastIndexOf('\\')+1;
		var filename = value.substr(fidx, value.length);
		var eidx = filename.lastIndexOf('.')+1;

		return filename.substr(eidx, filename.length);
	}
}

// 파일확장자 확인 ##################################################
function checkFileExt(obj, exts, errMsg) {
	var arrExt = exts.toLowerCase().split(',');
	var result = false;

	if (obj.value.stripspace() != '') {
		var ext = getFileExt(obj.value).toLowerCase();

		for (var i=0; i<arrExt.length; i++) {
			if (arrExt[i].trim() == ext) result = true;
		}
	}

	if (!result) {
		alert(errMsg);
		obj.focus();
		return false;
	}
	return true;
}





// 내림 ##################################################
// num: 대상 숫자, p: 대상 자리수
function setFloor(num, p) {
	if (!p) p = 0;
	return Math.floor(num * Math.pow(10, p)) / Math.pow(10, p);
}

// 반올림 ##################################################
// num: 대상 숫자, p: 대상 자리수
function setRound(num, p) {
	if (!p) p = 0;
	return Math.round(num * Math.pow(10, p)) / Math.pow(10, p);
}

// 올림 ##################################################
// num: 대상 숫자, p: 대상 자리수
function setCeil(num, p) {
	if (!p) p = 0;
	return Math.ceil(num * Math.pow(10, p)) / Math.pow(10, p);
}

// 숫자 문자열에서 문자열 제거 ##################################################
function stripCharFromNum(value, dec) {
	var result = '';
	for (var i=0; i<value.length; i++) {
		var chr = value.charAt(i);
		switch (chr) {
			case '-':
				if (i == 0) result += '-';
			break;
			case '.':
				if (dec && result.indexOf('.') < 0) result += '.';
			break;
			default:
				if ('1234567890'.indexOf(chr) > -1) result += chr;
		}
	}
	return result;
}

// 콤마(,) 제거 ##################################################
function stripComma(num) {
    return num.replace(/,/g, '');
}

// 숫자 3자리수마다 콤마(,) 찍기 ##################################################
function formatComma(num, p) {
	if (!p) p = 0;  //소숫점 이하 자리수
	var re = /(-?\d+)(\d{3}[,.])/;

	var nums = num.toString().toNumeric().toString().split('.');
	nums[0] += '.';

    while (re.test(nums[0])) {
        nums[0] = nums[0].replace(re, '$1,$2');
    }

	if (nums.length > 1) {
		if (nums[1].length > p) {
			nums[1] = nums[1].substr(0, p);
		}
		return nums.join('');
	}
	else return nums[0].split('.')[0];
}

// 강제 소수점 이하 0채우기 ##################################################
// num: 대상 숫자, p: 출력을 원하는 소수점자리수
function setRoundZero(num, p) {
	var nums = stripComma(num.toString()).split('.');

	if (nums.length <= 1) {
		num = nums[0]+'.';
		for (var i=0; i<p; i++) {
			num += '0';
		}
	}
	else num = setRound(num, p);

	return num;
}

// 소수점 이하 자리수 확인 ##################################################
// num: 대상 숫자, p: 희망 소수점 이하자리수
function checkRound(num, p) {
	var nums = num.toString().toNumeric().toString().split('.');
	if (nums.length > 1 && nums[1].length > p) return false;
	else return true;
}

// 숫자 문자열에서 '0' 시작문자 제거 ##################################################
function removePreZero(num) {
	if (num == '0') return num;

	for (var i=0; i<num.length; i++) {
		if (num.substr(i,1) != '0') break;
	}

	return num.substr(i, num.length-i);
}

// 숫자(INT)입력 확인 ##################################################
function onlyInt(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == '') return false;

	if (!/^-?[\d]+$/.test(num)) {
		num = stripCharFromNum(num, 0);
		obj.blur(); obj.focus();
	}
	num = stripCharFromNum(num, 0);

	obj.value = num;
}

// 숫자(FLOAT)입력 확인 ##################################################
function onlyFloat(obj, p) {
	if (obj.disabled) return false;
	if (!p) p = 0;  //소숫점 이하 자리수

	var num = obj.value.stripspace();
	if (num == '') return false;

	if (!/^-?[\d\.]+$/.test(num)) {
		num = stripCharFromNum(num, 1);
		obj.blur(); obj.focus();
	}
	var nums = stripCharFromNum(num, 1).split('.');

	obj.value = (nums.length>1 ? nums[0]+'.'+(p ? nums[1].substr(0, p) : nums[1]) : nums[0]);
}

// 통화형태로 변환 ##################################################
function toCurrency(obj) {
	if (obj.disabled) return false;

	var num = obj.value.stripspace();
	if (num == '') return false;

	if (!/^-?[\d]+$/.test(stripComma(num))) {
		num = stripCharFromNum(num, 0);
		obj.blur(); obj.focus();
	}

	obj.value = formatComma(removePreZero(stripCharFromNum(stripComma(num), 0)));
}

// 날짜 더하기
function date_add(sDate, nDays, gbn) {
    var yy = parseInt(sDate.substr(0, 4));
    var mm = parseInt(sDate.substr(5, 2));
    var dd = parseInt(sDate.substr(8));
    d = new Date(yy, mm - 1, dd + nDays);
    	
    if(gbn == '1w'){
    	d = new Date(yy, mm - 1, dd + nDays);
    }else if(gbn == '1m'){
    	d = new Date(yy, mm - 1 + nDays, dd);
    }else if(gbn == '3m'){
    	d = new Date(yy, mm - 1 + nDays, dd);
    }else { // 일반적인 일자 더하는 부분(공통)
    	d = new Date(yy, mm - 1, dd + nDays);
    }
    
    yy = d.getFullYear();
    mm = d.getMonth() + 1; mm = (mm < 10) ? '0' + mm : mm;
    dd = d.getDate(); dd = (dd < 10) ? '0' + dd : dd;
    
    return '' + yy + '-' +  mm  + '-' + dd;
}

//입주단지
function fn_projCode(targetObj, subTargetObj, companyCode, selectedVal, sellCodeSelectedVal){
	
	$.ajax({
		url: '/common/getProjCodeList.do',
		type: 'POST',
		data:{company_code : companyCode},
		dataType:'json',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	    async: false,
	    cache: false,
	    beforeSend: function(xhr){
			//$('#loading').show().fadeIn('fast');
	    	  
			xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	        xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
			xhr.setRequestHeader("Progma","no-cache");
		},
		complete:function(){
			//$('#loading').fadeOut();
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
		
	    	if (data != null || data.projCodeList != null){
	    		var projCodeList = eval(data.projCodeList);
	    		targetObj.find("option").remove();
	    		targetObj.append("<option value=''> 선 택 </option>");
	    		for(var i=0; i<projCodeList.length; i++){		    			    
	    			
	    			if(selectedVal == projCodeList[i].proj_code){
	    				targetObj.append("<option value='"+projCodeList[i].proj_code+"' selected>"+projCodeList[i].proj_name+"</option>");
	    				fn_sellCode(subTargetObj, projCodeList[i].proj_code, sellCodeSelectedVal)
	    			}else{
	    				targetObj.append("<option value='"+projCodeList[i].proj_code+"'>"+projCodeList[i].proj_name+"</option>");	
	    			}
					
	    		};
	    	 }
		}			
	}); // $.ajax
}

// 입주 유형
function fn_sellCode(targetObj, projCode, sellCodeSelectedVal){

	$.ajax({
		url: '/common/getSellCodeList.do',
		type: 'POST',
		data:{proj_code : projCode},
		dataType:'json',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	    async: false,
	    cache: false,
	    beforeSend: function(xhr){
			//$('#loading').show().fadeIn('fast');
	    	  
			xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	        xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
			xhr.setRequestHeader("Progma","no-cache");
		},
		complete:function(){
			//$('#loading').fadeOut();
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
	    	if (data != null || data.SellList != null){
	    		var sellcodeList = eval(data.SellList);
	    		targetObj.find("option").remove();
	    		targetObj.append("<option value=''> 선 택 </option>");
	    		for(var i=0; i<sellcodeList.length; i++){		    			    
	    			
	    			if(sellCodeSelectedVal == sellcodeList[i].sell_code){
	    				targetObj.append("<option value='"+sellcodeList[i].sell_code+"' selected>"+sellcodeList[i].sell_name+"</option>");
	    			}else{
	    				targetObj.append("<option value='"+sellcodeList[i].sell_code+"'>"+sellcodeList[i].sell_name+"</option>");	
	    			}
	    			
	    		};
	    	 }else{
	    		targetObj.find("option").remove();
	    		targetObj.append("<option value=''> 선 택 </option>");
	    	 }
		}			
	}); // $.ajax
}

/*
 * 
 * 사용자 단지명, 단지 유형 SELECT BOX SET 
 * targetUrl   : controller url
 * param       : 넘길 파라미터
 * targetObj   : 변경 될 obj
 * selectedVal : 기본 선택값
 * option      : select > option 에  data-option attr 에 추가할 대상.
 * */
function fn_selectBoxSet(targetUrl, param, targetObj, selectedVal, option){		
	$.ajax({
		url: targetUrl,
		type: 'POST',
		data: param,
		dataType:'json',
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	    async: false,
	    cache: false,
	    beforeSend: function(xhr){
			//$('#loading').show().fadeIn('fast');
	    	  
			xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	        xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
			xhr.setRequestHeader("Progma","no-cache");
		},
		complete:function(){
			//$('#loading').fadeOut();
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
			
	    	if (data != null || data.resultList != null){
	    		var resultList = eval(data.resultList);
	    		var cont_id = "";	    		
	    		targetObj.find("option").remove();
	    		for(var i=0; i<resultList.length; i++){		    			    
	    			var opt = "";
	    			if(option != null && option != ''){
	    				opt = 'data-option="' + resultList[i][option] + '"';
	    			};
	    			
	    			//계약정보 select 태그의 value값이 합쳐져서 넘어오므로 option값이 cont_id 일경우 split해서 첫번째값(cont_id)추출
	    			if(option == "cont_id"){
	    				cont_id = resultList[i].select_code.split("|")[0];	    				
	    			}
	    			
	    			
	    			if(( selectedVal == null && i == 0 ) || selectedVal == (option == "cont_id" ? cont_id : resultList[i].select_code)){
	    				targetObj.append("<option value='"+resultList[i].select_code+"'  selected " + opt + ">"+resultList[i].select_name+"</option>");
	    				// span Text 변경
	    				targetObj.next().children("span").html(resultList[i].select_name);
	    			}else{
	    				targetObj.append("<option value='"+resultList[i].select_code+"' " + opt + ">"+resultList[i].select_name+"</option>");	
	    			}
	    		
					
	    		};
	    	 }
		}			
	}); // $.ajax
}

//두개의 날짜를 비교하여 차이를 알려준다.
function dateDiff(_date1, _date2) {
    var diffDate_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var diffDate_2 = _date2 instanceof Date ? _date2 : new Date(_date2);
 
    diffDate_1 = new Date(diffDate_1.getFullYear(), diffDate_1.getMonth()+1, diffDate_1.getDate());
    diffDate_2 = new Date(diffDate_2.getFullYear(), diffDate_2.getMonth()+1, diffDate_2.getDate());
 
    var diff = Math.abs(diffDate_2.getTime() - diffDate_1.getTime());
    diff = Math.ceil(diff / (1000 * 3600 * 24));
 
    return diff;
}



