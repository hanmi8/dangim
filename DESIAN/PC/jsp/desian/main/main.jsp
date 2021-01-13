<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://www.springframework.org/security/tags" prefix="sec"%>

<jsp:include page="/WEB-INF/view/front/pc/desian/main/include/header_${projMenu.menu_type}.jsp" flush="false"></jsp:include>
<jsp:include page="/WEB-INF/view/common/custom/exts/settlebank/PG_main.jsp" flush="false"></jsp:include>
<!-- %@include file="/WEB-INF/view/front/pc/desian/main/include/header_1.jsp" % -->
<!-- %@include file="/WEB-INF/view/common/custom/exts/settlebank/PG_main.jsp" % -->

<form name="frm" id="frm" method="post" action="#">
	<input type="hidden" name="company_code"   value="${contractInfo.company_code}"/>
	<input type="hidden" name="proj_code"      value="${contractInfo.proj_code}"/>
	<input type="hidden" name="sell_code"      value="${contractInfo.sell_code}"/>
	<input type="hidden" name="dong"           value="${contractInfo.dong}"/>
	<input type="hidden" name="floor"          value="${contractInfo.floor}">
	<input type="hidden" name="ho"             value="${contractInfo.ho}"/>
	<input type="hidden" name="cont_id"        value="${contractInfo.cont_id}"/>
	<input type="hidden" name="group_cont_id"  value="${contractInfo.group_cont_id}"/>
	<input type="hidden" name="bill_seq"       value="${contractInfo.bill_seq}"/>
	<input type="hidden" name="cust_hp2"       value="${contractInfo.cust_hp2}"/>
	<input type="hidden" name="remain_amt"     value="${contractInfo.remain_amt}"/>
	<input type="hidden" name="u_name"         value="${reqVo.userNm}"/>
	<input type="hidden" name="cust_email"     value="${contractInfo.cust_email}"/>
	<input type="hidden" name="cust_code"      value="${contractInfo.cust_code}"/>
	<input type="hidden" name="i_sReturnUrl"   value="${reqVo.pageUrl}"/>
	<input type="hidden" name="i_sReturnParam" value="${reqVo.pageParam}"/>
	<input type="hidden" name="i_sCate" 	   value="%"/>
	<input type="hidden" name="userid"         value="${reqVo.s_userId}"/>
	<input type="hidden" name="pre_cont_id"    value="${reqVo.pre_cont_id}"/>
</form>

<!-- container 영역-->
	<div class="container contain">

		<!-- 청구서 section -->
		<div class="section section01 start_section" >
		
	
		<!-- pc 배너 -->
		 <div class="bannerArea" style="display:none;">
			<div class="bannerWrap">
				<div class="pcInner">		
					<ul class="pcSlide" style="visibility: hidden;">
						<c:if test="${!empty mainBannerList }">
							<c:forEach items="${mainBannerList}" varStatus="status" var="result">
								<li><a href="javascript:move_banner('${result.bn_mobile_url}', '${result.bn_idx }');"><img src="${result.pc_image }" alt="${result.bn_title}" /></a></li>
							</c:forEach>
						</c:if>
					</ul>
				</div>			
			</div>		
		</div>
	
		<!-- //pc 배너 -->	
		
		<!-- mobile 배너 -->
		<div class="bannerWrap">
			<div class="mbileInner">		
				<ul class="mobileSlide" style="visibility: hidden;">
					<c:if test="${!empty mainBannerList }">
						<c:forEach items="${mainBannerList}" varStatus="status" var="result">
							<li><a href="javascript:move_banner('${result.bn_mobile_url}', '${result.bn_idx }');"><img src="${result.mobile_image }" alt="${result.bn_title}" /></a></li>
						</c:forEach>
					</c:if>
				</ul>
			</div>			
		</div>

		${SERVER_TYPE}
		<!-- //mobile 배너 -->	
			<h3 class="sec_title">청구서</h3>
			<!-- cashInfo -->
			<div class="cashInfo" style="margin-top: 20px;">
				<div class="clearBox">
					<div class="l_box">
						
						<p class="payTxt">당월 납부하실 금액입니다</p>
						<table class="table_type01">
							<caption></caption>
							<colgroup>
								<col />
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th>납기 내</th>
									<td><strong class="won"><fmt:formatNumber value="${contractInfo.unpaid_amt}" type="number"/></strong> 원</td>
								</tr>
								<tr>
									<th>납부 예정일</th>
									<td>
										<p class="date"><input type="text" value="${contractInfo.date_after}" class="cal_input" id="arr_target_date"/></p>
										<button type="button" class="search_btn" id="remain_search">검색</button>
									</td>
								</tr>
								<tr>
									<th>납기 후</th>
									<td><strong class="won" id="after_remain_amt"><fmt:formatNumber value="${contractInfo.unpaid_arr_amt}" type="number"/></strong> 원</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="r_box">
						<div class="bulType">
							<p class="text01 red">
								<c:choose>
									<c:when test="${contractInfo.receipt_gbn eq '0200' or contractInfo.receipt_gbn eq '0300'}">
										<span class="bul">*</span> 고객님은 자동납부 처리됩니다. 별도로 납부하지 않으셔도 됩니다.
									</c:when>
									<c:otherwise>
										&nbsp;
									</c:otherwise>
								</c:choose>
							</p>
							<p class="text01">
								<c:choose>
									<c:when test="${contractInfo.receipt_gbn eq '0200'}">
										<span class="bul">*</span> 자동납부 : CMS |  신청일자 : ${contractInfo.receipt_date}
									</c:when>
									<c:when test="${contractInfo.receipt_gbn eq '0300'}">
										<span class="bul">*</span> 자동납부 : 신용카드  |  신청일자 : ${contractInfo.receipt_date}
									</c:when>
									<c:otherwise>
										&nbsp;
									</c:otherwise>
								</c:choose>
							</p>
						</div>
						<table class="table_type02">
							<caption></caption>
							<colgroup>
								<col  width="30%"/>
								<col />
							</colgroup>
							<tbody>
								<tr>
									<th>계약기간</th>
									<td>
										<span class="block">${contractInfo.date_cont_start} ~ ${contractInfo.date_cont_end}</span>
										
										<button type="button" class="btn_type" id="cont_restart_app" style="display: none;" data-re_sign_yn="${contractInfo.re_sign_yn}">${contractInfo.re_sign_yn == 'Y' ? '재계약 신청중' : '재계약 신청' }</button>
									</td>
								</tr>
								<tr>
									<th>가상계좌</th>
									<td> ${contractInfo.bank_name}  ${contractInfo.deposit_no}</td>
								</tr>
								<tr>
									<th class="">미납금액</th>
									<td class="red point_text_style_24"><strong class="result"><fmt:formatNumber value="${contractInfo.remain_amt}" type="number"/> 원</strong></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				
				<div class="bulType">
					<p class="noti_text">세금계산서 담당자 : ${contractInfo.buy_tax_emp_name}</p>
					<p class="noti_text">전자세금계산서와 계산서는 요청하신 이메일로 발송되며, 익일 국세청으로 전송됩니다.<br />
						재전송을 원하시면 국세청 홈텍스 <a href="http://www.hometax.go.kr" target="_blank" class="blue">(www.hometax.go.kr)</a> 에서 출력하시기 바랍니다.
					</p>
					
				</div>

				<div class="wideBtn">
					
					<div class="selectBox selType01 big_select">
						<select class="selectCus" id="selectoncome">
							<option value="00">결제 방법 선택</option>
							<option value="CARD">신용카드</option>
							<option value="BANK">계좌이체</option>
							<option value="MOBILE">휴대폰</option>
							<option value="VBANK">가상계좌</option>
						</select>
					</div>
					<button type="button" class="btn" id="calc_btn">결제하기</button>
				
				</div>
			</div>
			<!-- //cashInfo -->
			<div class="clearBox margin_top_sm sub_title_box" >
				<div class="l_box">
					<h4 class="h4_title">청구서 세부내역</h4>
				</div>
				<!-- r_box -->
				<div class="r_box">
					<span class="txt">부과년월</span>
					<div class="selectBox selType01">
						<select class="selectCus" id="levy_ym">
							<option value="${contractInfo.levy_ym}" data-option="${contractInfo.bill_seq}">${contractInfo.levy_ym_text}</option>
						</select>
					</div>
					<!-- <button type="button" class="search_btn">검색</button> -->
				</div>
			</div>
			<!-- //r_box -->
			<!-- tb-list01 pc -->
			<div class="tb-list01 pc">
				<table id="maintenanceTable" class="table-horizontal">
					<colgroup>
						<col width="16.66%">
						<col width="16.66%">
						<col width="16.66%">
						<col width="16.66%">
						<col width="16.66%">
						<col width="*">
					</colgroup>
				</table>
				<div class="sm_notice_text" ><span>VAT 포함금액 입니다.</span>
				</div>
			</div>
			<!-- //tb-list01 -->

			<!-- tb-list01 mobile -->
			<div class="tb-list01 mobile">
					<table id="maintenanceTable_mobile" class="table-vertical">
						<colgroup>
							<col width="50%">
							<col width="*">
						</colgroup>
					</table>
			</div>
			<!-- //tb-list01 -->
			<div class="sub_title_box margin_top_min">
				<h4 class="h4_title ">에너지 사용량 비교 (전기, 수도)</h4>
			</div>
			
			<div class="energy_graph cf">
				<div class="graph whiteBox" id="graph_light"></div>
				<div class="graph whiteBox" id="graph_sudo"></div>
			</div>
		</div>
		<!-- //section -->

		<!-- 미납내역 section -->
		<div class="section section02">
			<h3 class="sec_title">미납내역</h3>
			
			<!-- tb-list01 -->
			<div class="tb-list01 pc">
				<table id="nonIncomeTable">
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
					</colgroup>
					<thead>
						<tr>
							<th>청구년월</th>
							<th>청구구분</th>
							<th>청구금액</th>
							<th>연체료</th>
						</tr>
					</thead>
				</table>
			</div>
			
			<!-- tb-list01 mobile -->
			<div class="tb-list01 mobile" style="border-top: 0px; margin-top: -20px;">
				<table id="nonIncomeTable_mobile" class="table-horizontal paidList" style="margin-top: -10px;">
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
					</colgroup>
					<tbody>
					</tbody>
				</table>
			</div>
			<!-- //tb-list01 -->

			<div class="wideBtn">
				<div class="selectBox selType01 big_select">
					<select class="selectCus" id="selectnocome">
						<option value="00">결제 방법 선택</option>
						<option value="CARD">신용카드</option>
						<option value="BANK">계좌이체</option>
						<option value="MOBILE">휴대폰</option>
						<option value="VBANK">가상계좌</option>
					</select>
				</div>
				<button type="button" class="btn" id="calc_btn2">미납금액 결제하기</button>
			</div>				
				
		</div>
		<!-- //section -->

		<!-- 납부내역 section -->
		<div class="section section03">
			<h3 class="sec_title">납부내역</h3>
			
			<!-- //searchInfo -->

			<div class="if_box"> <!-- iframe 영역 -->
				<!-- tb-list01 pc -->
				<div class="tb-list01 pc">
					<table id="incomeTable">
						<caption></caption>
						<colgroup>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
							<col width="20%"/>
						</colgroup>
						<thead>
							<tr>
								<th>청구년월</th>
								<th>납부구분</th>
								<th>납기일자</th>
								<th>납부방법</th>
								<th>납부금액</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
				<!-- //tb-list01 -->

				<!-- tb-list01 mobile -->
				<div class="tb-list01 mobile" style="border-top: 0px; margin-top: -20px;">
					<table id="incomeTable_mobile" class="table-horizontal paidList" style="margin-top: -10px;">
						<caption></caption>
						<colgroup>
							<col width="25%"/>
							<col width="25%"/>
							<col width="25%"/>
							<col width="25%"/>
						</colgroup>
						<tbody>
						</tbody>
					</table>
				</div>
			</div>
		</div>
		<!-- //section -->

		<!-- 납부방법 변경 section -->
		<div class="section section04">
			<h3 class="sec_title">납부방법 변경</h3>
			<p class="text01"><strong>* 현재 이용중인 납부방법입니다.</strong></p>
			<!-- tb-list01 pc -->
			<div class="tb-list01 pc">
				<table class="table-vertical">
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
						<col width="25%"/>
					</colgroup>
					<tbody>
					
						<c:choose>
							<c:when test="${contractInfo.receipt_gbn eq '0200'}">
								<tr>
									<th>이용중인 납부방법</th>
									<td>CMS 자동납부</td>
									<th>납부 기준인</th>
									<td>${contractInfo.payer_name}</td>
								</tr>
								<tr>
									<th>납부은행</th>
									<td>${contractInfo.rec_bank_code}</td>
									<th>계좌번호</th>
									<td>${contractInfo.rec_deposit_no}</td>
								</tr>
							</c:when>
							<c:when test="${contractInfo.receipt_gbn eq '0300'}">
								<tr>
									<th>이용중인 납부방법</th>
									<td>신용카드 자동납부</td>
									<th>납부 기준인</th>
									<td>${contractInfo.payer_name}</td>
								</tr>
								<tr>
									<th>신용카드</th>
<%-- 									<td>${contractInfo.rec_card_comp_code}</td> --%>
									<td>BC카드</td>
									<th>카드번호</th>
									<td>${contractInfo.rec_card_no}</td>
								</tr>
							</c:when>
							<c:otherwise>
								<tr>
									<th>이용중인 납부방법</th>
									<td>가상계좌</td>
									<th>예금주</th>
									<td></td>
								</tr>
								<tr>
									<th>납부은행</th>
									<td>${contractInfo.bank_name}</td>
									<th>계좌번호</th>
									<td>${contractInfo.deposit_no}</td>
								</tr>
							</c:otherwise>
						</c:choose>
					</tbody>
				</table>
			</div>
			<!-- //tb-list01 -->

			<!-- tb-list01 mobile -->
			<div class="tb-list01 mobile">
				<table class="table-vertical">
					<caption></caption>
					<colgroup>
						<col width="40%"/>
						<col width="60%"/>
					</colgroup>
					<tbody>
						<c:choose>
							<c:when test="${contractInfo.receipt_gbn eq '0200'}">
								<tr>
									<th>이용중인 납부방법</th>
									<td>CMS 자동납부</td>
								</tr>
								<tr>
									<th>납부 기준인</th>
									<td>${contractInfo.payer_name}</td>
								</tr>
								<tr>
									<th>납부은행</th>
									<td>${contractInfo.rec_bank_code}</td>
								</tr>
								<tr>
									<th>계좌번호</th>
									<td>${contractInfo.rec_deposit_no}</td>
								</tr>
							</c:when>
							<c:when test="${contractInfo.receipt_gbn eq '0300'}">
								<tr>
									<th>이용중인 납부방법</th>
									<td>신용카드 자동납부</td>
								</tr>
								<tr>
									<th>납부 기준인</th>
									<td>${contractInfo.payer_name}</td>
								</tr>
								<tr>
									<th>신용카드</th>
									<td>${contractInfo.rec_card_comp_code}</td>
								</tr>
								<tr>
									<th>카드번호</th>
									<td>${contractInfo.rec_card_no}</td>
								</tr>
							</c:when>
							<c:otherwise>
								<tr>
									<th>이용중인 납부방법</th>
									<td>가상계좌</td>
								</tr>
								<tr>
									<th>예금주</th>
									<td></td>
								</tr>
								<tr>
									<th>납부은행</th>
									<td>${contractInfo.bank_name}</td>
								</tr>
								<tr>
									<th>계좌번호</th>
									<td>${contractInfo.deposit_no}</td>
								</tr>
							</c:otherwise>
						</c:choose>
						
					</tbody>
				</table>
			</div> 
			<!-- //tb-list01 -->

			<!-- tabWrap -->
			<div class="tabWrap share_4">
				<!-- tabBtn -->
				<div class="tabBtn">
					<a href="#none" class="active">납부방법 변경안내</a>
					<a href="#none">신용카드 자동납부</a>
					<a href="#none">자동 CMS</a>
				</div>
				<!-- //tabBtn -->

				<!-- tabCont - 납부방법 변경안내 -->
				<div class="tabCont active" >
					<!-- tb-list02 pc -->
					<div class="tb-list02 pc">
						<table>
							<caption></caption>
							<colgroup>
								<col width="25%"/>
								<col/>
							</colgroup>
							<tbody>
								<tr>
									<th>이용중인 납부방법</th>
									<td>
										<div class="method_icon">
											<span class="icon method_icon01">은행계좌</span>
											<span class="icon method_icon02">신용카드</span>
											<span class="icon method_icon03">자동CMS</span>
										</div>
										<p class="noti_text">계약 명의자의 계좌 또는 신용카드로만 변경 가능합니다.</p>
									</td>
								</tr>
								<tr>
									<th>납부방법 변경 신청 시<br>필요한 구비서류</th>
									<td class="parag">
										명의자 납부 시: 납부자(예금자)가 서명한 동의서 원본<br>
										납부자 납부 시: 납부자(예금자)가 서명한 신청서 원본

										<p class="noti_text">공통: 납부자(예금주) 신분증, 명의자 신분증</p>
									</td>
								</tr>
								<tr>
									<th>납부 변경 가능일</th>
									<td>
										동일한 납부 방법으로 변경 시: 납부정보 및 납기일을 변경 시, 당월 적용 됩니다.<br>
										<p class="noti_text">
											변경 요청 시점이 은행, 카드사로 당원 납부요청이 지난 후에는 변경한 납부 방법이 다음달로 예약<br>
										</p>
										<p class="noti_text">
											다른 납부 방법으로 변경 시: 납부정보 및 납기일을 변경 시, 다음달 적용됩니다.
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //tb-list02 -->

					<!-- tb-list02 mobile -->
					<div class="tb-list02 mobile">
						<table class="table-vertical">
							<caption></caption>
							<colgroup>
								<col/>
							</colgroup>
							<tbody>
								<tr>
									<th>이용중인 납부방법</th>
								</tr>
								<tr>
									<td>
										<div class="method_icon">
											<span class="icon method_icon01">은행계좌</span>
											<span class="icon method_icon02">신용카드</span>
											<span class="icon method_icon03">자동CMS</span>
										</div>
										<p class="text01">* 계약 명의자의 계좌 또는 신용카드로만 변경 가능합니다.</p>
									</td>
								</tr>
								<tr>
									<th>납부방법 변경 신청 시 필요한 구비서류</th>
								</tr>
								<tr>
									<td>
										명의자 납부 시: 납부자(예금자)가 서명한 동의서 원본<br>
										납부자 납부 시: 납부자(예금자)가 서명한 신청서 원본

										<p class="text01">* 공통: 납부자(예금주) 신분증, 명의자 신분증</p>
									</td>
								</tr>
								<tr>
									<th>납부 변경 가능일</th>
								</tr>
								<tr>
									<td>
										동일한 납부 방법으로 변경 시: 납부정보 및 납기일을 변경 시, 당월 적용 됩니다.<br>
										<p class="text01">
											* 변경 요청 시점이 은행, 카드사로 당원 납부요청이 지난 후에는 변경한 납부 방법이 다음달로 예약<br>
											* 다른 납부 방법으로 변경 시: 납부정보 및 납기일을 변경 시, 다음달 적용됩니다.
										</p>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<!-- //tb-list02 -->
				</div>
				<!-- //tabCont -->

				<!-- tabCont - 신용카드 자동납부 -->
				<div class="tabCont">
					<div class="border_box">
						<p class="text02">
							신용카드 자동이체를 신청하실 수 있는 신청서입니다.<br>
							인쇄 또는 다운로드 버튼을 클릭하셔서 신청서를 작성하신 후, 임대료/관리비를 편리하게 자동이체 하실 수 있습니다.
						</p>

						<div class="wayInfo mobile">
							<p class="tit">카드 자동이체 신청서</p>
							<p class="txt">임대료/관리비 신용카드 자동이체를 신청하실 수 있습니다.</p>

							<div class="btn">
								<button type="button" class="print"><span>인쇄</span></button>
								<button type="button" class="download"><span>다운로드</span></button>
							</div>
						</div>
					</div>
				</div>
				<!-- //tabCont -->

				<!-- tabCont - 자동 CMS -->
				<div class="tabCont">
					<div class="border_box">
						<p class="text02">
							CMS 자동이체를 신청하실 수 있는 신청서입니다.<br>
							인쇄 또는 다운로드 버튼을 클릭하셔서 신청서를 작성하신 후, 임대료/관리비를 편리하게 자동이체 하실 수 있습니다.
						</p>

						<div class="wayInfo">
							<p class="tit">CMS 자동이체 신청서</p>
							<p class="txt">임대료/관리비 출금이체 거래를 신청하실 수 있습니다.</p>

							<div class="btn">
								<button type="button" class="show">바로보기</button>
								<button type="button" class="download"><span>다운로드</span></button>
								<button type="button" class="cms"><span>CMS 신청하기</span></button>
							</div>
						</div>
					</div>
				</div>
				<!-- //tabCont -->
			</div>
			<!-- //tabWrap -->
		</div>
		<!-- //section -->

		<!-- 주거편의 서비스 section -->
		<div class="section section09">
			<h3 class="sec_title">주거편의 서비스</h3>
			<h4 class="h4_title">서비스</h4>
			<dv class="none_content_box"></dv>
		</div>
		
		<!-- 주거편의 서비스 section -->
		<div class="section section10">
			<h3 class="sec_title">공용시설 예약</h3>
			<h4 class="h4_title">시설예약</h4>
			<dv class="none_content_box"></dv>
		</div>

		<!-- 계약정보 section -->
		<div class="section section05">
			<h3 class="sec_title">계약정보</h3>
			<!-- searchInfo -->
		<!-- 	<div class="searchInfo clearBox">
				l_box
				<div class="l_box">
					selectBox
					<div class="selectBox selType01">
						<select class="selectCus">
							<option value="">빌딩</option>
							<option value="">빌딩</option>
						</select>
					</div>
					//selectBox
					<div class="selectBox selType01">
						<select class="selectCus">
							<option value="">동</option>
							<option value="">동</option>
						</select>
					</div>
					<div class="selectBox selType01">
						<select class="selectCus">
							<option value="">층</option>
							<option value="">층</option>
						</select>
					</div>
					<div class="selectBox selType01">
						<select class="selectCus">
							<option value="">호</option>
							<option value="">호</option>
						</select>
					</div>
				</div>
				//l_box
			</div> -->
			<!-- //searchInfo -->

	<div class="sub_title_box margin_top_min first">
			<h4 class="h4_title">계약기간</h4>
			<!-- tb-list00 pc -->
			<div class="tb-list01 pc">
				<table>
					<caption></caption>
					<colgroup>
						<col width="30%;"/>
						<col /> 
					</colgroup>
					<tbody>
						<tr>
							<%-- <th>${contractInfo.date_cont_start} ~ ${contractInfo.date_cont_end}</th>
							<td>그래프영역</td> --%>
							<th style="font-size: 17px; text-align: center;"><span>${contractInfo.date_cont_start} ~ ${contractInfo.date_cont_end}</span></th>
							<td>
								<div class="progressbar pc-progressbar" data-cont-st="${contractInfo.date_cont_start}" data-cont-end="${contractInfo.date_cont_end}"><div class="progress-label">Loading...</div></div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<!-- //tb-list00 -->

			<!-- tb-list00 mobile -->
			<div class="tb-list01 mobile">
				<table class="table-contract">
					<caption></caption>
					<colgroup>
						<col width="40%;"/>
						<col />
					</colgroup>
					<tbody>
						<tr>
							<th style="font-size: 13px; text-align: center;"><i>${contractInfo.date_cont_start} ~ </i><i>${contractInfo.date_cont_end}</i></th>
							<td>
								<div class="progressbar mb-progressbar" data-cont-st="${contractInfo.date_cont_start}" data-cont-end="${contractInfo.date_cont_end}"><div class="progress-label">Loading...</div></div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>
			<!-- //tb-list00 -->

		<div class="sub_title_box margin_top_min">
			<h4 class="h4_title">계약호실</h4>
			<!-- tb-list01 pc -->
			<div class="tb-list01 pc" style="border-top: 0px;">
					<table id="hoTable">
						<caption></caption>
						<colgroup>
							<col width="25%"/>
							<col width="25%"/>
							<col width="25%"/>
							<col width="*"/>
						</colgroup>
					</table>

			</div>
			<!-- //tb-list01 -->
			<article>
			<!-- tb-list01 mobile -->
			<div class="tb-list01 mobile">
					<table id="hoTable_mobile" class="table-horizontal">
						<caption></caption>
						<colgroup>
						<col width="*">
						<col width="25%">
						<col width="25%">
						<col width="25%">
						</colgroup>
					</table>
			</div>
		</article>
	</div>

			<!-- //tb-list01 -->

	<div class="sub_title_box margin_top_min">
			<c:choose>
				<c:when test="${!empty contractInfo.deposit_no }">
					<h4 class="h4_title" >가상계좌</h4>
					<!-- tb-list01 pc -->
					<div class="tb-list01 pc">
					<table>
						<caption></caption>
						<colgroup>
							<col width="25%"/>
							<col width="*"/>
							<col width="25%"/>
						</colgroup>
						<tbody>
							<tr>
								<th>은행명</th>
								<th>가상계좌번호</th>
								<th>비고</th>
							</tr>
							<tr>
								<td>${contractInfo.bank_name}</td>
								<td>${contractInfo.deposit_no}</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				<p class="text01 mt15">※ 가상계좌가 있으실 경우 반드시 가상계좌에 입금해주시기 바랍니다.</p>
			</div>
			</c:when>
			</c:choose>
			<!-- //tb-list01 -->

			<!-- tb-list01 mobile -->
			<c:choose>
				<c:when test="${!empty contractInfo.deposit_no }">
			<div class="tb-list01 mobile">
					<table class="table-vertical">
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="*"/>
					</colgroup>
					<tbody>
						<tr>
							<th>은행명</th>
							<td>${contractInfo.bank_name}</td>
						</tr>
						<tr>
							<th>가상계좌번호</th>
							<td>${contractInfo.deposit_no}</td>
						</tr>
						<tr>
							<th>비고</th>
							<td></td>
						</tr>
					</tbody>
				</table>
				<p class="text01 mt15">※ 가상계좌가 있으실 경우 반드시 가상계좌에 입금해주시기 바랍니다.</p>
			</div>
			</c:when>
			</c:choose>
	</div>
			<!-- //tb-list01 -->
<%-- 
			<c:choose>
				<c:when test="${empty contractInfo.deposit_no }">
 --%>
	<div class="sub_title_box margin_top_min">
					<h4 class="h4_title">납부계좌</h4>
					<!-- tb-list01 pc -->
					<div class="tb-list01 pc">
						<table id="MAcount">
							<caption></caption>
							<colgroup>
								<col width="25%"/>
								<col width="*"/>
								<col width="15%"/>
								<col width="25%"/>
							</colgroup>
							<tbody>
								<tr>
									<th>은행명</th>
									<th>계좌번호</th>
									<th>예금주</th>
									<th>비고</th>
								</tr>
								<tr>
									<td>국민은행</td>
									<td>123-25-1213323</td>
									<td>㈜제온스</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
<%-- 				</c:when>
			</c:choose> --%>
			
			<!-- //tb-list01 -->

			<!-- tb-list01 mobile -->
			<div class="tb-list01 mobile">
				<table id="MAcount_mobile">
					<caption></caption>
					<colgroup>
						<col width="25%"/>
						<col width="*" />
					</colgroup>
					<tbody>
						<tr>
							<th>No.</th>
							<td>21</td>
						</tr>
						<tr>
							<th>은행명</th>
							<td>국민은행</td>
						</tr>
						<tr>
							<th>계좌번호</th>
							<td>123-25-1213323</td>
						</tr>
						<tr>
							<th>예금주</th>
							<td>㈜제온스</td>
						</tr>
						<tr>
							<th>비고</th>
							<td></td>
						</tr>
					</tbody>
				</table>
			</div>
			</div>
			<!-- //tb-list01 -->

			<p class="text01 mt15">※ 입금 시 입금자명에 계약자명이나 동층호실 정보를 입력해 주세요.</p>
		</div>
		<!-- //section -->

		<!-- 공지사항 section -->
		<div class="section section06">
			<h3 class="sec_title">공지사항</h3>
			<%--
			<div class="searchInfo clearBox">
				<!-- l_box -->
				<div class="l_box">
					<!-- selectBox -->
					<div class="selectBox selType01">
						<select class="selectCus">
							<option value="">빌딩</option>
							<option value="">빌딩</option>
						</select>
					</div>
					
				</div>
			</div>--%>
			
			<div class="if_box" id="noticeHNT_iframe"> <!-- iframe 영역 -->
				<!-- faqList -->
				<div class="list_style01">
					<dl>
						<!-- 반복 -->
						<dt>
							<a href="#none">
								<span class="title">
									<em></em>
								</span>
								<span class="date"></span>
							</a>
						</dt>
						<dd>
							<div class="title">
								<strong></strong>
							</div>
							<div>
								
							</div>
							<span class="date"></span>
						</dd>
						<!-- //반복 -->
					</dl>
				</div>
				<!-- //faqList -->

				<!--[s] Paging pc -->
				<div class="paging pc">
					<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_first.png" alt="맨처음" /></a>
					<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_prev.png" alt="이전" /></a>
					<span class="num">
						<a href="#none" class="on">1</a><!-- 선택된 페이지 //-->		
					</span>
					<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_next.png" alt="다음" /></a>
					<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_last.png" alt="맨끝" /></a>
				</div>
				<!--[e] Paging -->


			</div>
				
		</div>
		<!-- //section -->

<!-- 고객지원 section -->
		<div class="section section07" >
			<h3 class="sec_title">고객지원</h3>

			<div class="tabWrap share_4 if_box"> <!-- iframe 영역 -->
				<!-- tabBtn -->
				<div class="tabBtn">
					<a href="#none" class="active">FAQ</a>
					<a href="#none">1:1상담</a>
					<a href="#none" >회원탈퇴</a>
				</div>
				<!-- //tabBtn -->

				<!-- tabCont - FAQ -->
				<div class="tabCont active" id="noticeHFA_iframe">
					<!-- cusTab -->
					<div class="faq_sorting" id="cateEventfaq">
						<li id="ALL" class="on"><a href="javascript:;">전체</a></li>
						<li id="1001" class=""><a href="javascript:;">입주 중</a></li>
						<li id="1002" class=""><a href="javascript:;">ICT</a></li>
						<li id="1003" class=""><a href="javascript:;">부대시설</a></li>
						<li id="1004" class="" ><a href="javascript:;">컨시어지</a></li>
						<li id="1005" class=""><a href="javascript:;" class="line">제휴서비스</a></li>
						<li id="1006" class=""><a href="javascript:;">전용카드</a></li>
						<li id="1007" class=""><a href="javascript:;" class="line">자동이체</a></li>
						<li><a href="#">&nbsp;</a></li>
					</div>
					<!-- //cusTab -->

					<!-- faqList -->
						<div class="list_style01 faq" >
							<dl>
								<!-- 반복 -->
								<dt>
									<a href="#none">
										<span class="title"></span>
									</a>
								</dt>
								<dd>
									<div class="title">
										<strong></strong>
									</div>
									<div>
										
									</div>
								</dd>
								<!-- //반복 -->
							</dl>
						</div>
						<!-- //faqList -->
	
						<!--[s] Paging pc -->
						<div class="paging pc">
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_first.png" alt="맨처음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_prev.png" alt="이전" /></a>
							<span class="num">
								<a href="#none" class="on">1</a><!-- 선택된 페이지 //-->
							</span>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_next.png" alt="다음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_last.png" alt="맨끝" /></a>
						</div>
						<!--[e] Paging -->
	
						<!--[s] Paging mobile -->
						<div class="paging mobile">
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_first.png" alt="맨처음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_prev.png" alt="이전" /></a>
							<span class="num">
								<a href="#none" class="on">1</a><!-- 선택된 페이지 //-->
							</span>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_next.png" alt="다음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_last.png" alt="맨끝" /></a>
						</div>
					
					<!--[e] Paging -->
				</div>

				<!-- tabCont - 1:1상담 -->
				<div class="tabCont">
				<%--
					<div class="searchInfo clearBox">
						<!-- l_box -->
						<div class="l_box">
							<!-- selectBox -->
							<div class="selectBox selType01">
								<select class="selectCus">
									<option value="">빌딩</option>
									<option value="">빌딩</option>
								</select>
							</div>
							
						</div>
					</div>--%>
					
					<div class="">
						<div class="tb-list01 service_2_table">
							<table class="table-vertical">
								<caption></caption>
								<colgroup>
									<col width="30%">
									<col width="*">
								</colgroup>
								<tbody>
									
									<tr>
										<th>제목<span class="red">*</span> </th>
										<td class="" >
											<input type="text" id="nt_title" name="nt_title"/>
										</td>
										
									</tr>
									
									<tr>
										<th>문의내용<span class="red">*</span> </th>
										<td class="" >
											<textarea name="nt_content" id="nt_content" cols="30" rows="10"></textarea>
										</td>
										
									</tr>
								</tbody>
							</table>
						</div>
					
					    <!-- <div class="write_ar">
							<div class="title"><span>제목 *</span></div>
							<div class="wrform_ti">
								<input type="text" id="nt_title" name="nt_title"/>
							</div>
						</div>
						<div class="write_ar">
							<div class="title"><span>문의내용 *</span></div>
							<div class="wrform">
								<textarea name="nt_content" id="nt_content" cols="30" rows="10"></textarea>
							</div>
						</div> -->
						
						<div class="btnArea ">
							<button type="button" class="lineType" id="btn2_cancel">취소</button>
							<button type="button" class="fillType" id="btn1_save">등록</button>
						</div>
						
					</div>

					<h4 class="h4_title">상담내역</h4>
					<!-- faqList -->
					<div id="noticeHMW_iframe">
						<div class="list_style01 ask" >
							<dl>
								<!-- 반복 -->
								<dt>
									<a href="#none">
										<span class="title"></span>
										<span class="date"></span>
									</a>
								</dt>
								<dd>
									<div class="title">
										<strong></strong>
									</div>
									<div>
										<span class="date">2017-03-05</span>
										
									</div>
								</dd>
								<!-- //반복 -->
							</dl>
						</div>
						<!-- //faqList -->
	
						<!--[s] Paging pc -->
						<div class="paging pc">
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_first.png" alt="맨처음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_prev.png" alt="이전" /></a>
							<span class="num">
								<a href="#none" class="on">1</a><!-- 선택된 페이지 //-->
							</span>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_next.png" alt="다음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_last.png" alt="맨끝" /></a>
						</div>
						<!--[e] Paging -->
	
						<!--[s] Paging mobile -->
						<div class="paging mobile">
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_first.png" alt="맨처음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_prev.png" alt="이전" /></a>
							<span class="num">
								<a href="#none" class="on">1</a><!-- 선택된 페이지 //-->
							</span>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_next.png" alt="다음" /></a>
							<a href="#none" class="btn"><img src="/resources/front/pc/desian/main/img/pg_last.png" alt="맨끝" /></a>
						</div>
					</div>
					<!--[e] Paging -->
				</div>

				<!-- tabCont - 회원탈퇴 -->
					 <div class="tabCont " >
						<div class="withdraw" id="delUpdateHirerId">
							<div class="alertTxt">
								<strong class="text03">회원탈퇴 신청에 앞서 아래의 사항을 반드시 확인하시기 바랍니다. </strong>
								<p class="text01">
									1. 회원탈퇴를 신청하시면 현재 로그인 된 아이디는 즉시 탈퇴 처리 되며, 재사용 및 복구가 불가 하오니 신중하게 선택해 주세요.<br>
									2. 회원탈퇴 시 마이페이지를 통한 각종 자료 조회 등의 서비스를 받으실 수 없게 됩니다. 
								</p>
							</div>
							<div class="survey">
								<p class="text01">
									<strong>
										그 동안
										<span class="logo">
<%--											<img src="/resources/front/pc/desian/main/img/ezrems_logo_b.svg" alt="" />--%>
										</span>
										의 서비스를 이용해 주셔서 감사 드립니다.<br>
										회원님의 탈퇴하시는 사유를 파악하여 보다 좋은 서비스를 만들고자 하오니, 탈퇴 사유를 남겨주시면 감사하겠습니다. 
									</strong>
								</p>
								
								<div class="sel_reason">
									<p>
										<span class="input_radio">
											<input type="radio" id="reason01" title="계약 종료" class="reason" value="계약 종료" name="reason"> 
											<label for="reason01">계약 종료</label>
										</span>
									</p>
									<p>
										<span class="input_radio">
											<input type="radio" id="reason02" title="자주 이용하지 않음" class="reason" value="자주 이용하지 않음" name="reason">
											<label for="reason02">자주 이용하지 않음</label>
										</span>
									</p>
									<p>
										<span class="input_radio">
											<input type="radio" id="reason03" title="정보 부족" class="reason" value="정보 부족" name="reason">
											<label for="reason03">정보 부족</label>
										</span>
									</p>
									<p>
										<span class="input_radio">
											<input type="radio" id="reason04" title="기타" class="reason" value="기타" name="reason" checked >
											<label for="reason04">기타</label>
										</span>
									</p>
									<div class="else_box">
										<textarea name="del_text" id="del_text" cols="30" rows="10"></textarea>
									</div>
								</div>
							</div>
						</div>
	
						<div class="btnArea section08">
							<button type="button" class="lineType" id="del_but2">취소</button>
							<button type="button" class="fillType" id="del_but1">회원탈퇴</button>
						</div> 
						
						<!-- 회원탈퇴 성공화면 -->
						 <!-- <div class="withdraw ">
							<div class="alertTxt end">
								<strong class="text03 blue">회원탈퇴가 완료되었습니다.</strong>
								<p class="text01">
									그동안 <span class="logo"><img src="/resources/front/pc/desian/main/img/logo_small_con.png" alt="" /></span>마이페이지를 이용해 주셔서 대단히 감사드립니다.<br>
									보다 나은 서비스 제공을 위해 최선을 다하겠습니다.
								</p>
							</div>
						</div>  -->
					
					 </div> 
					
					<br/>
			</div>
		</div>
		<!-- //section -->
		<div class="section">
			<p class="icoCustom bottom_big_bt"><a href="javascript:alert('서비스 준비중입니다');"><i class="xi-call"></i>고객센터 전화 걸기</a></p>
		</div>
	</div>
	<!-- //container 영역 -->
	
	
<%@include file="/WEB-INF/view/front/pc/desian/main/include/footer.jsp" %>


<script type="text/javascript" src="/resources/front/pc/desian/main/js/main.js?v=20200525"></script>