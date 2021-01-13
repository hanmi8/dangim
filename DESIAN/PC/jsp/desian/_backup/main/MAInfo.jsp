<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ taglib prefix="CmTagLib" uri="/WEB-INF/taglib/CmTagLib.tld"%>
<%@ taglib prefix="cfn" uri="/WEB-INF/taglib/CmFunction.tld"%>


								<tr>
									<th>은행명</th>
									<th>계좌번호</th>
									<th>예금주</th>
									<th>비고</th>
								</tr>
								<c:forEach items="${contMAInfo}" varStatus="status" var="result">
									<tr>
										<td>${result.rec_bank_name}</td>
										<td>${result.rec_deposit_no}</td>
										<td>${result.rec_deposit_name}</td>
										<td></td>
									</tr>
								</c:forEach>
