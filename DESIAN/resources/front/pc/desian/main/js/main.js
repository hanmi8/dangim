$( document ).ready(function(){
	var reqData = new Object();
	
	reqData.company_code 	= frm.company_code.value;
	reqData.proj_code 		= frm.proj_code.value;
	reqData.sell_code 		= frm.sell_code.value;
	reqData.dong 			= frm.dong.value;
	reqData.floor			= frm.floor.value;
	reqData.ho 				= frm.ho.value;	
	reqData.group_cont_id 	= frm.group_cont_id.value;
	reqData.cont_id 		= frm.cont_id.value;	
	var ls_test = "";	/*0.MAIN BANNER START*/
//	setTimeout(function(){
//		mainBannerAjax();
//	}, 100);
	
	
	
	
	setTimeout(function(){
		
		var today = new Date();
		var beforeday = new Date();
		var today_month = (today.getMonth() + 1);
		var today_day = today.getDate();
		today_month = (today_month < 10) ? "0"+today_month : today_month;
		today_day = (today_day < 10) ? "0"+today_day : today_day;
		var today_date = today.getFullYear() + "-" + today_month + "-" + today_day;		
		beforeday.setDate(today.getDate()+7);
		var before_month = (beforeday.getMonth() + 1);
		var before_day = beforeday.getDate();
		before_month = (before_month < 10) ? "0"+before_month : before_month;
		before_day = (before_day < 10) ? "0"+before_day : before_day;
		var before_date = beforeday.getFullYear() + "-" + before_month + "-" + before_day;
		
//		$('#arr_target_date').datepicker();
//		$('#arr_target_date').datepicker("option", "maxDate", before_date);
		$('#arr_target_date').datepicker("option", "minDate", today_date);
		
		//계약기간 로딩바
		var contDateBar = $(".progressbar"), contDateBarLabel = $(".progress-label");		
		contDateBar.progressbar({
			value: false,
			max: dateDiff(contDateBar.data("contSt"), contDateBar.data("contEnd")),
			change: function() {
				$(".progress-label").text("잔여계약일수: " + dateDiff(new Date(), contDateBar.data("contEnd")) +"일");
			},
			complete: function() {
				$(".progress-label").text( "계약종료!" );
			}
		});
		contDateBar.progressbar("value", dateDiff(contDateBar.data("contSt"), new Date()));
		contDateBar.css("position", "relative");
		if(dateDiff(new Date(), contDateBar.data("contEnd")) <= 60){
			/*contDateBar.children(".ui-progressbar-value").css({"background" : "#ffb822"});*/
		}else{
			/*contDateBar.children(".ui-progressbar-value").css({"background" : "#3da6e4"});*/
		}
		contDateBar.children(".ui-progressbar-value").css({"border" : "1px solid #DDDDDD", "color" : "#333333", "font-weight" : "bold", "margin" : "0px"});
		contDateBar.children(".progress-label").css({"position" : "absolute", "top" : "4px", "margin-top" : "2px", "color" : "#ffff"});
		$(".pc-progressbar").children(".progress-label").css("left", "35%");
		$(".mb-progressbar").children(".progress-label").css("left", "10%");
		//재계약 신청 버튼 활성화
		if(dateDiff(new Date(), contDateBar.data("contEnd")) < 150){
			$("#cont_restart_app").show();
		}
		
	},150);
		
	/*0.MAIN BANNER END*/
	
	/*1.select box setting start*/
	setTimeout(function(){					
		var comp  = frm.company_code.value;
		var proj  = frm.proj_code.value;
		var dong  = frm.dong.value;
		var floor = frm.floor.value;
		var ho    = frm.ho.value;
		
		var sell          = frm.sell_code.value;
		var cont_id       = frm.cont_id.value;
		var group_cont_id = frm.group_cont_id.value;
		fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/contInfo_ajax.do', {'gbn' : 'cont'}, $("#selectCont"), frm.cont_id.value, "cont_id");
		fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/contInfo_ajax.do', {'gbn' : 'cont'}, $("#selectCont_mb"), frm.cont_id.value, "cont_id");
		
		/*470|18783|A|F01|104|18783|null|null|null|900001|[TEST]청년하우스|김범유|10*/
		
		

		var data      = {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id};
		if(proj == null || proj == ""){
			alert("빌딩 데이터가 없습니다. 관리자에게 문의해 주시기 바랍니다.");
		}else{
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/header_cnt_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				if (data != null && data.nonIncomeCnt != null){
					if(data.nonIncomeCnt != "0"){
						//pc
						$("#headerNonAmt").find("em").remove();
						var txt = '<em class="alertNum">'+data.nonIncomeCnt.cnt_non_income+'</em>';
						$("#headerNonAmt").append(txt);
						//mb
						$("#headerNonAmtMb").find("em").remove();
						var txt = '<em class="alertNum">'+data.nonIncomeCnt.cnt_non_income+'</em>';
						$("#headerNonAmtMb").append(txt);
					}else{
						//pc
						$("#headerNonAmt").find("em").remove();
						var txt = '<em></em>';
						$("#headerNonAmt").append(txt);
						//mb
						$("#headerNonAmtMb").find("em").remove();
						var txt = '<em></em>';
						$("#headerNonAmtMb").append(txt);
					}
				}
/*
				if (data != null && data.noticeCnt != null){
					if(data.noticeCnt != "0"){ 
						//pc
						$("#headerNoticeCnt").find("em").remove();
						var txt = '<em class="alertNum">'+data.noticeCnt+'</em>';
						$("#headerNoticeCnt").append(txt);
						//mb
						$("#headerNoticeCntMb").find("em").remove();
						var txt = '<em class="alertNum">'+data.noticeCnt+'</em>';
						$("#headerNoticeCntMb").append(txt);
					}else{
						//pc
						$("#headerNoticeCnt").find("em").remove();
						var txt = '<em></em>';
						$("#headerNoticeCnt").append(txt);
						//mb
						$("#headerNoticeCntMb").find("em").remove();
						var txt = '<em></em>';
						$("#headerNoticeCntMb").append(txt);
					}
				}
				//공지사항 new
				if (data != null && data.headerNoticeNew != null){
					if(data.headerNoticeNew != null){
						//mb
						$("#headerNoticeNew").find("p").remove();
						var txt = '<p>'+data.headerNoticeNew[0].nt_title+'</p>';
						$("#headerNoticeNew").append(txt);
					}
				}else {
					//mb
					$("#headerNoticeNew").find("p").remove();
					var txt = '<p>등록된 게시물이 없습니다.</p>';
					$("#headerNoticeNew").append(txt);
				}
*/				
			}			
		}); // $.ajax	
		}
	}, 500);
	
	/*
	$("#selectProj").change(function (event) {
		event.preventDefault();
		var comp = $("#selectProj option:selected").attr("data-option");
		var proj = $("#selectProj option:selected").val();
		fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/contInfo_ajax.do', {'gbn' : 'dong', 'as_comp' : comp, 'as_proj' : proj, 'as_dong' : '', 'as_floor' : '' }, $("#selectDong"));
		
		$('#selectDong').change(); 
	});
	$("#selectDong").change(function (event) {
		event.preventDefault();
		var comp = $("#selectProj option:selected").attr("data-option");
		var proj = $("#selectProj option:selected").val();
		var dong = $("#selectDong option:selected").val();
		fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/contInfo_ajax.do', {'gbn' : 'floor', 'as_comp' : comp, 'as_proj' : proj, 'as_dong' : dong, 'as_floor' : '' }, $("#selectFloor"));

		$('#selectFloor').change(); 
	});
	$("#selectFloor").change(function (event) {
		event.preventDefault();
		var comp  = $("#selectProj option:selected").attr("data-option");
		var proj  = $("#selectProj option:selected").val();
		var dong  = $("#selectDong option:selected").val();
		var floor = $("#selectFloor option:selected").val();
		fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/contInfo_ajax.do', {'gbn' : 'ho', 'as_comp' : comp, 'as_proj' : proj, 'as_dong' : dong, 'as_floor' : floor }, $("#selectHo"));

		$('#selectHo').change();
	});
	$("#selectHo").change(function (event) {
		event.preventDefault();
		
		var comp  = $("#selectProj option:selected").attr("data-option");
		var proj  = $("#selectProj option:selected").val();
		var dong  = $("#selectDong option:selected").val();
		var floor = $("#selectFloor option:selected").val();
		var ho    = $("#selectHo option:selected").val();
		 
		frm.company_code.value = comp;
		frm.proj_code.value    = proj;
		frm.dong.value         = dong;
		frm.floor.value        = floor;
		frm.ho.value           = ho;
		
		frm.action = GLOBAL_SSL_URL+ "/front/main/main.do";
		frm.submit();
		
	});
	*/
	
	$("#selectCont").change(function (event) {
		event.preventDefault();
		//순서 [companycode|cont_id|dong|floor|ho|group_cont_id|hp_mid|hp_post|hp_pre|projcode|projname|r_name|sellcode]
		
		//순서 [companycode,group_cont_id,dong,floor,ho,cont_id, hp_mid,hp_post,hp_pre, projcode, projname, r_name, sellcode				
		var separateData = $("#selectCont option:selected").val().split("|");		

		
		var cont_id         = separateData[0];
		var dong            = separateData[1];
		var floor           = separateData[2];
		var ho              = separateData[3];		
		var company_code 	= separateData[4];
		var proj_code		= separateData[5];
		var sell_code		= separateData[6];
		var group_cont_id   = separateData[7];
		var r_name			= separateData[8];
			
		
		frm.cont_id.value = cont_id;
		frm.dong.value = dong;
		frm.floor.value = floor;
		frm.ho.value = ho;
		frm.company_code.value = company_code;
		frm.proj_code.value = proj_code; 
		frm.sell_code.value = sell_code;
		frm.group_cont_id.value = group_cont_id;
		frm.u_name.value = r_name;
		
						
		//frm.pre_cont_id.value = pre_cont_id;
				
		frm.action = GLOBAL_SSL_URL+ "/front/main/main.do";
		frm.submit();
	});

	$("#selectCont_mb").change(function (event, a_gbn) {
		$("#selectCont").val($("#selectCont_mb").val()).change();
	});

	/*select box setting end*/
	
	
	/* remain_search change start*/
	$("#remain_search").click(function(){			
		reqData.remain_date 	= $("#arr_target_date").val().replace(/-/gi, "");						
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/remain_search_ajax.do',
			type: 'POST',
			data: reqData,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		    async: true,
		    cache: false,
		    beforeSend: function(xhr){
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
			
		    	if (data != null || data.remain_amt != null){
		    		$("#after_remain_amt").html(new Intl.NumberFormat().format(data.remain_amt) );
		    		
		    	 }
			}			
		}); // $.ajax
	});
	
	
	$("#arr_target_date").change(function(){
		$("#remain_search").click();
	});
	
	setTimeout(function(){
		$("#remain_search").click();
	}, 200);
	/* remain_search change end*/

	/*2.notice detail start*/	
	setTimeout(function(){
		var comp          	= frm.company_code.value;
		var proj          	= frm.proj_code.value;
		var sell          	= frm.sell_code.value;
		var cont_id       	= frm.cont_id.value;
		var group_cont_id 	= frm.group_cont_id.value;
		var dong 			= frm.dong.value;
		var floor			= frm.floor.value;
		var ho				= frm.ho.value;
		var user_id		  	= frm.cust_email.value;
		var bill_seq      = frm.bill_seq.value;
		
		
		if(bill_seq != null && bill_seq != ''){			
			//as-is
			//fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/levy_ym_ajax.do', {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id }, $("#levy_ym"));
			//to-be
			fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/req-userMaintenancefeesLevyym.do',
						{'as_comp' 		: comp, 
						 'as_proj' 		: proj, 
						 'as_sell' 		: sell, 
						 'as_cont' 	 	: cont_id, 
						 'as_g_cont' 	: group_cont_id, 
						 'as_dong' 		: dong,
						 'as_floor' 	: floor,
						 'as_ho' 		: ho,
						 'as_user_id' 	: user_id						 						 
						}, $("#levy_ym"));
			
			$('#levy_ym').change();
//			$('#levy_ym').trigger("change");
			//납부내역 출력 년도 SELECT BOX SET(20201126 기정도팀장 지시로 hidden처리)
			//fn_selectBoxSet( GLOBAL_SSL_URL+'/front/main/levy_ym_year_ajax.do', {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id }, $("#payment_details_date"));
		}
	}, 1000);
	
	
	$("#levy_ym").change(function (event) {
						
		reqData.levy_ym = $("#levy_ym option:selected").val();
		
					
		//에너지 사용량 비교 차트
		setChart();
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/notice_detail_ajax.do',
			type: 'POST',
			data: reqData,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				if (data != null){		
		    		$("#maintenanceTable").find("tbody").remove();
		    		$("#maintenanceTable_mobile").find("tbody").remove();
		    		var txt = "<tbody>"
					if(data.notiRentList != null && data.notiRentList.length > 0){
					
						txt  += '<tr>';						
						var count = 0
						for(var i = 0; i < data.notiRentList.length; i++){		
							txt  += '	<td>' + data.notiRentList[i].levy_name + (data.notiRentList[i].tax_yn == '0100' ? ' <span  class="check_dot" >*</span>' : '') +'</td>';						    
						    txt  += '	<td class="tar">' + new Intl.NumberFormat().format( data.notiRentList[i].total_amt) + '원</td>';
						    
						    //전체 리스트의 끝이 아니면서 항목이 3개마다 </tr>태그 추가					    
						    if((i+1) % 3 == 0 && (i+1) != data.notiRentList.length){
								txt  += '</tr>';
								//count = 0;
							}
						    //전체 리스트의 끝이면서  나머지 빈<td>태그 추가 
						    if((i+1) % 3 != 0 && (i+1) == data.notiRentList.length){
						    	var emptyAreaCount = (3 - (data.notiRentList.length % 3)) * 2;
						    	for(var z = 0; z < emptyAreaCount; z++){
									txt  += '<td></td>';
								}
						    }
						}
					};

					txt += "</tbody>"
						
					$("#maintenanceTable").append(txt);						
					$("#maintenanceTable_mobile").append(txt);
				}
			}			
		}); // $.ajax

	});
	/*notice detail end*/

	/*3.notice chart start*/
	function setChart(){
		
		var comp          = frm.company_code.value;
		var proj          = frm.proj_code.value;
		var sell          = frm.sell_code.value;
		var cont_id       = frm.cont_id.value;
		var group_cont_id = frm.group_cont_id.value;
		var user_id			= frm.cust_email.value; 

		var levy_ym   = $("#levy_ym option:selected").val();
		var data      = {'as_levy' : levy_ym, 'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id, 'as_user_id' : user_id};

		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/notice_chart_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				$("#graph_light").html("");
				$("#graph_sudo").html("");
				if (data != null){
					//전기
					$.jqplot('graph_light',	[[
												['전년동월 전기 사용량', data.notiChartList.bef_electronic_amt]
											  , ['당월 전기 사용량', data.notiChartList.electronic_amt]
											]]
					, {
						title: '전기 사용량',
						series:[{renderer:$.jqplot.BarRenderer}],
						axes: {
							xaxis: {
								renderer: $.jqplot.CategoryAxisRenderer,
								label: " "
							},
							yaxis: {
								label: "금액"
							}
						}
					});
					//수도
					$.jqplot('graph_sudo',	[[
											   ['전년동월 수도 사용량', data.notiChartList.bef_water_amt]
											  , ['당월 수도 사용량', data.notiChartList.water_amt]
						]]
					, {
						title: '수도 사용량',
						series:[{renderer:$.jqplot.BarRenderer}],
						axes: {
							xaxis: {
								renderer: $.jqplot.CategoryAxisRenderer,
								label: " "
							},
							yaxis: {
								label: "금액"
							}
						}
					});
					
				}
			}			
		}); // $.ajax
	};
	/*notice chart end*/
	

	/*4.non income list start*/
	setTimeout(function(){
		var reqData = new Object();
		
		reqData.company_code 	= frm.company_code.value;
		reqData.proj_code 		= frm.proj_code.value;
		reqData.sell_code 		= frm.sell_code.value;
		reqData.dong 			= frm.dong.value;
		reqData.floor			= frm.floor.value;
		reqData.ho 				= frm.ho.value;	
		reqData.group_cont_id 	= frm.group_cont_id.value;
		reqData.cont_id 		= frm.cont_id.value		
		reqData.remain_date 	= 	$("#levy_ym option:selected").val();
		
		
		
		if(reqData.company_code == null || reqData.company_code ==""){
			
		}else{
			
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/non_income_ajax.do',
			type: 'POST',
			data: reqData,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				
				if (data != null && data.nonIncomeList.length > 0){
					$("#nonIncomeTable").find("tbody").remove();

		    		var txt = "<tbody>";

				    for(var i=0;i<data.nonIncomeList.length;i++){
					    txt  += '<tr>';
					    txt  += '	<td>' + data.nonIncomeList[i].levy_ym_text + '</td>';
					    txt  += '	<td>' + data.nonIncomeList[i].request_div_detailname + '</td>';
					    txt  += '	<td class="tar">' + new Intl.NumberFormat().format( data.nonIncomeList[i].remain_amt) + '원</td>';
					    txt  += '	<td class="tar">' + new Intl.NumberFormat().format( data.nonIncomeList[i].arr_amt) + '원</td>';
					    txt  += '</tr>';
				    }
		    			
		    		
					txt += "</tbody>";
					$("#nonIncomeTable").append(txt);
				}
			}			
		}); // $.ajax
		}
	}, 1500);
	/*non income list end*/
	
	
	/*5.income amt list start*/
	setTimeout(function(){
		income_amt_call('1');
	}, 2000);
	/*income amt list end*/
	
	/*6.cont info start*/
	setTimeout(function(){
		var comp          	= frm.company_code.value;
		var proj          	= frm.proj_code.value;
		var sell          	= frm.sell_code.value;
		var cont_id       	= frm.cont_id.value;
		var group_cont_id 	= frm.group_cont_id.value;
		var user_id			= frm.cust_email.value; 
		
		var dong  = frm.dong.value;
		var floor = frm.floor.value;
		var ho    = frm.ho.value;
		
		
		
		var data      = {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_dong' : dong, 'as_floor' : floor, 'as_ho' : ho, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id};

		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/ho_info_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				$("#hoTable").find("tbody").remove();

	    		var txt = "<tbody>";
			    txt  += '						<tr>';
			    txt  += '							<th>건물명</th>';
			    txt  += '							<td colspan="6">' + data.contHoInfo.proj_name + '</td>';
			    txt  += '						</tr>';
			    txt  += '						<tr>';
			    txt  += '							<th>동</th>';
			    txt  += '							<th>층</th>';
			    txt  += '							<th>전용(㎡)</th>';
			    txt  += '							<th>공용(㎡)</th>';
			    txt  += '							<th>서비스(㎡)</th>';
			    txt  += '							<th>합계(㎡)</th>';
			    txt  += '						</tr>';
			    txt  += '						<tr>';
			    txt  += '							<td>' + data.contHoInfo.dong + '</td>';
			    txt  += '							<td>' + data.contHoInfo.floor + '</td>';
			    txt  += '							<td class="tar">' + data.contHoInfo.area_m2_private + '</td>';
			    txt  += '							<td class="tar">' + data.contHoInfo.area_m2_com + '</td>';
			    txt  += '							<td class="tar">' + data.contHoInfo.area_m2_service + '</td>';
			    txt  += '							<td class="tar">' + data.contHoInfo.area_m2_total + '</td>';
			    txt  += '						</tr>';
				txt += "</tbody>";
				$("#hoTable").append(txt);
				
				
				$("#hoTable_mobile").find("tbody").remove();
				
				var txt = "<tbody>";
					txt += '						<tr>';
					txt += '							<th>건물명</th>';
					txt += '							<td colspan="3">' + data.contHoInfo.proj_name + '</td>';
					txt += '						</tr>';
					txt += '						<tr>';
					txt += '							<th>No.</th>';
					txt += '							<th>동</th>';
					txt += '							<th>층</th>';
					txt += '							<th>전용(㎡)</th>';
					txt += '						</tr>';
					txt += '						<tr>';
					txt += '							<td rowspan="3" class="tac">' +  '1' + '</td>';
					txt += '							<td>' + data.contHoInfo.dong + '</td>';
					txt += '							<td>' + data.contHoInfo.floor + '</td>';
					txt += '							<td>' + data.contHoInfo.area_m2_private + '</td>';
					txt += '						</tr>';
					txt += '						<tr>';
					txt += '							<th class="line">공용(㎡)</th>';
					txt += '							<th>서비스(㎡)</th>';
					txt += '							<th>합계(㎡)</th>';
					txt += '						</tr>';
					txt += '						<tr>';
					txt += '							<td class="line">' + data.contHoInfo.area_m2_com + '</td>';
					txt += '							<td>' + data.contHoInfo.area_m2_service + '</td>';
					txt += '							<td>' + data.contHoInfo.area_m2_total + '</td>';
					txt += '						</tr>';
					txt += "</tbody>";
					$("#hoTable_mobile").append(txt);
			}			
		}); // $.ajax
		/*
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/ma_info_ajax.do',
			type: 'POST',
			data: data,
			dataType:'html',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				
				if (data != null ){
					$("#MAcount").find("tbody").remove();
					$("#MAcount").append(data);
				}
			}			
		}); 
		*/
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/ma_info_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
				console.log(data);
				if (data != null ){
					$("#MAcount").find("tbody").remove();
					$("#MAcount_mobile").find("tbody").remove();
					
					var txt = "<tbody>";
						txt += '	<tr>';
						txt += '		<th>은행명</th>';
						txt += '		<th>계좌번호</th>';
						txt += '		<th>예금주</th>';
						txt += '		<th>비고</th>';
						txt += '	</tr>';
						
					for(var i = 0; i < data.contMAInfo.length; i++){												
						txt += '	<tr>';
						txt += '		<td>' + data.contMAInfo[i].rec_bank_name + '</td>';
						txt += '		<td>' + data.contMAInfo[i].rec_deposit_no + '</td>';
						txt += '		<td>' + data.contMAInfo[i].rec_deposit_name + '</td>';
						txt += '		<td></td>';
						txt += '	</tr>';
					}
					
					txt += "</tbody>";
		    		
					$("#MAcount").append(txt);				
					$("#MAcount_mobile").append(txt);
					
				}
			}			
		}); // $.ajax
	}, 2500);
	
	/*cont info end*/
	
	
	/*7. 공지사항 s*/
	setTimeout(function(){
		notice_call_hnt('1');
		
	}, 3000);	
	/*7. 공지사항 e*/
	
	/*8. FAQ s*/
	setTimeout(function(){
		notice_call_hfa('1');
	}, 3500);	
	/*8. FAQ e*/
	
	/*9. 1:1상담 s*/
	setTimeout(function(){
		notice_call_hmw('1');
	}, 4000);	
	/*9. 1:1상담 e */
	
	
	/*1:1상담 등록*/
	$("#btn1_save").click(function(){
		
		var fm_chk = true;
		
		//제목
		if($("#nt_title").val() == ""){
			alert("제목을 입력해주세요.");
			fm_chk = false;
			return;
		}
		
		//문의내역
		if($("#nt_content").val() == ""){
			alert("문의내용을 입력해주세요.");
			fm_chk = false;
			return;
		}

		var company_code  = frm.company_code.value;
		var proj          = frm.proj_code.value;
		var sell          = frm.sell_code.value;
		var i_sNtCode = "HMW";
		var nt_title = $("#nt_title").val();
		var nt_content = $("#nt_content").val();
		var nt_cate = 20;   //20:문의
		var reply_gub = 10; //10:답변대기

		var data      = { 'company_code' : company_code
						, 'proj_code' : proj
						, 'sell_code' : sell
						, 'i_sNtCode' : i_sNtCode
						, 'nt_title' : nt_title
						, 'nt_content' : nt_content
						, 'nt_cate' :  nt_cate
						, 'reply_gub' : reply_gub
						, 'nt_company_code' : company_code};
		
		//파라미터값으로 구분,비밀번호,문의내용 보내주기.(폼으로 보내주기 )
		//체크후 다들어가지면 에이작스로 .do이동
		//컨트롤러에 save 만들어주고 인설트 태우기

		if(fm_chk){
			$.ajax({
				url: GLOBAL_SSL_URL+'/front/main/hmw_notice_save.do',
				type: 'POST',
				data: data,
				dataType:'json',
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: true,
				cache: false,
				beforeSend: function(xhr){
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
				success: function(data){ //fileInfo는 이미지 정보를 리턴하는 객체					
					alert("문의상담 등록 되었습니다.");
					//리로드 시키면서 고객지원으로 커서이동하게하기.
					location.reload();
				},
				error:function(data) {
					alert("문의등록을 할수없습니다. 문의전화 부탁드립니다.");
					
				}
			});		
		}
	});
	
	/*1:1상담취소*/
	$("#btn2_cancel").click(function(){
		
		nt_title.value = ''
	
	});
	
	/*회원탈퇴*/
	$("#del_but1").click(function(){
		var company_code       = frm.company_code.value;
		var del_checked = $(".reason:checked").val();
		var del_text   = $("#del_text").val();
		
		var data      = {'company_code' : company_code ,'del_checked' : del_checked, 'del_text' : del_text};

		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/delete_userId.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: true,
			cache: false,
			beforeSend: function(xhr){
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
			success: function(data){ //fileInfo는 이미지 정보를 리턴하는 객체
				//회원탈퇴화면으로 이동하기.
				
				$("#delUpdateHirerId").find("div").remove();
	
				    txt  = '<div class="withdraw ">';
				    txt  += '<div class="alertTxt end">';
				    txt  += '	<strong class="text03 blue">회원탈퇴가 완료되었습니다.</strong>';
				    txt  += '	<p class="text01">';
				    txt  += '		그동안 <span class="logo"><img src="/resources/images/logo_small_con.png" alt="" /></span>마이페이지를 이용해 주셔서 대단히 감사드립니다.<br />';
				    txt  += '		보다 나은 서비스 제공을 위해 최선을 다하겠습니다.';
					txt  += '	</p>';
					txt  += '</div>';
					txt  += '</div>';
  
				$("#delUpdateHirerId").append(txt);
				
				//로그아웃시키기.
				
				setTimeout(function(){
					delUpdateHirerId();
				}, 2300);	
			},
			error:function(data) {
				alert("회원탈퇴에 문제가 생겼습니다. 문의바랍니다.");
				
			}
		});		
	
	});
	
	/*회원탈퇴 취소*/
	$("#del_but2").click(function(){
		
		del_text.value = ''
	
	});
	/*재계약 신청*/
	$("#cont_restart_app").click(function(){
		if($("#cont_restart_app").data("re_sign_yn") == "Y"){
			alert("이미 신청 하셨습니다.");
			return;
		}
		if(confirm("재계약 신청 하시겠습니까?") == true){
			var comp          = frm.company_code.value;
			var proj          = frm.proj_code.value;
			var sell          = frm.sell_code.value;
			var cont_id       = frm.cont_id.value;
			
			var data      = {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cont' : cont_id};

			$.ajax({
				url: GLOBAL_SSL_URL+'/front/main/cont_restart_app.do',
				type: 'POST',
				data: data,
				dataType:'json',
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				async: false,
				cache: false,
				beforeSend: function(xhr){
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
					if(data.result == "OK"){
						alert("재계약 신청 되었습니다.");
						$("#cont_restart_app").text("재계약 신청중");
					}else{
						alert(data.message);
					}
				}			
			}); // $.ajax	
		}
	});
	
	/*납부내역 출력*/
	$("#payment_details").click(function(){
		var comp				= frm.company_code.value;
		var proj					= frm.proj_code.value;
		var sell					= frm.sell_code.value;
		var cust_code			= frm.cust_code.value;
		var cont_id				= frm.cont_id.value;
		var group_cont_id	= frm.group_cont_id.value;
		var arr_date			= $("#payment_details_date").val();
		
		var data      = {'as_comp' : comp, 'as_proj' : proj, 'as_sell' : sell, 'as_cust_cd' : cust_code, 'as_cont' : cont_id, 'as_g_cont' : group_cont_id, 'as_arr_date' : arr_date};
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/payment_details.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
				var report = "https://pms.ezrems.com/AIViewer55/report/certificate_payment.do";
				var ls_master_info = data.paymentDtlList;
				var master_info = new Object();
				master_info.master_info = ls_master_info;
				var json_master_info = JSON.stringify(master_info);		
				
				var popOptions = "width: 970px height: 800px";
				
				var ls_width = 970, ls_height = 800; 
				var ls_left = window.screenX + ((window.outerWidth - ls_width) / 2);
			    var ls_top = window.screenY +  ((window.outerHeight - ls_height) / 2);
					
			    var popOptions = "width=" + ls_width + ", height=" + ls_height + ", left=" + ls_left + ", ls_top = " + ls_top;
			    
			    var vReturn = window.open("", 'viewer', popOptions);
			    var form = document.createElement("form");
				form.setAttribute("method", "post");
				form.setAttribute("action", report); //report
				form.setAttribute("target", "viewer");
				document.body.appendChild(form);
				
				var hiddenField_master_info = document.createElement("input");
				hiddenField_master_info.setAttribute("type", "hidden");
				hiddenField_master_info.setAttribute("name", "master_info");
				hiddenField_master_info.setAttribute("value", json_master_info);
				
				var hiddenField_imgPath = document.createElement("input");
				hiddenField_imgPath.setAttribute("type", "hidden");
				hiddenField_imgPath.setAttribute("name", "imgPath");
				hiddenField_imgPath.setAttribute("value", "FileUpload/");
			    
				form.appendChild(hiddenField_master_info);	
				form.appendChild(hiddenField_imgPath);	
					
				form.submit();
								
			}			
		}); // $.ajax	
		
	});
	
	

});
	/*0.MAIN BANNER START*/
	/**
	 * 현재 위치를 알아내어 지정된 배너 출력  
	 */
//	function mainBannerAjax() {
//		var userApproval = true;
//		
//		var options = {
//				enableHighAccuracy: false, 	// 대략적인 값이라도 상관 없음: 기본값
//				maximumAge: 30000,			// 위치 정보를 강제로 재확인하기 위해 사용하기도 하는 이 값의 기본 값은 0이다.
//				timeout: 15000					// 기본값은 Infinity이므로 getCurrentPosition()은 무한정 대기한다.
//		}
//		 // geolocation 을 지원한다면 위치를 요청한다.
//		if(navigator.geolocation){
//			navigator.geolocation.getCurrentPosition(success, error, options);	
//		}
//	
//		// geolocation 요청이 실패하면 이 함수를 호출한다.
//		function error(e) {
//			// 오류 객체에는 수치 코드와 텍스트 메시지가 존재한다.
//			// 코드 값은 다음과 같다.
//			// 1: 사용자가 위치 정보를 공유 권한을 제공하지 않음.
//			// 2: 브라우저가 위치를 가져올 수 없음.
//			// 3: 타임아웃이 발생됨.
//			//alert("Geolocation 오류 "+e.code +": " + e.message);
////			alert("Geolocation 오류 "+e.code +": " + e.message);
//			userApproval = false;
//		}
//	
//		/*
//		 * 위치정보 거부 시 또는 위치정보를 가져오지 못할경우 디볼트 베너 
//		 * */
//		if(!userApproval){
//			var slider2 = $('.mobileSlide').bxSlider({
//				auto: true,
//				touchEnabled:false,
//				pager : false,
//				onSlideAfter: function() {
//					slider2.stopAuto();
//					slider2.startAuto();
//				}
//			});
//		}
//		
//		// geolocation 요청이 성공하면 이 함수가 호출된다.
//		function success(pos) {
//			if(userApproval){
//				$.ajax({
//					url: GLOBAL_SSL_URL+'/front/main/banner_list_hfa_ajax.do',
//					type: 'POST',
//					data: {'bn_latitude' : pos.coords.latitude, 'bn_longitude' : pos.coords.longitude},
//					dataType:'json',
//					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
//					async: true,
//					cache: false,
//					beforeSend: function(xhr){
//						xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
//						xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
//						xhr.setRequestHeader("Progma","no-cache");
//					},
//					complete:function(){
//						//$('#loading').fadeOut();
//						var slider2 = $('.mobileSlide').bxSlider({
//							auto: true,
//							touchEnabled:false,
//							pager : false,
//							onSlideAfter: function() {
//								slider2.stopAuto();
//								slider2.startAuto();
//							}
//						});
//					},      
//					error: function(xhr, status, err) {
//						
//						if (xhr.status == 401) {
////						alert("401 Unauthorized");
//						} else if (xhr.status == 403) {
////						alert("403 Forbidden");
//						} else {
////						alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
//						}		        
//					},
//					success: function(data) {
//						
//						if (data != null){
//							
//							$(".mobileSlide").find("li").remove();
//							var txt = '';
//							
//							if(data.mainBannerList != null && data.mainBannerList.length > 0){
//								console.log(data.mainBannerList.length);
//								for(var i=0; i<data.mainBannerList.length; i++){
//									txt += '	<li>';
//									txt += '		<a href="'+ data.mainBannerList[i].bn_pc_url +'">';
//									txt += '			<img src="'+ data.mainBannerList[i].pc_image +'" alt="'+ data.mainBannerList[i].bn_title +'" />';
//									txt += '		</a>';
//									txt += '	</li>';
//								}
//							};
//							
//							$(".mobileSlide").append(txt);
//							
//						}
//						
//					}
//					
//				}); // $.ajax
//			}
//	    }    
//	}
	
	function move_banner(url, id){
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/banner_hit_hfa_ajax.do',
			type: 'POST',
			data: {'bnIdx' : id},
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		    async: false,
		    cache: false,
		    beforeSend: function(xhr){
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
				if(url != "undefind" && url != ""){
					window.open(url, "_blank");  
				}
			}			
		}); // $.ajax
	}
	/*0.MAIN BANNER END*/
	
	/*income amt*/
	function income_amt_call(page){
		var reqData = new Object();
		
		reqData.company_code 	= frm.company_code.value;
		reqData.proj_code 		= frm.proj_code.value;
		reqData.sell_code 		= frm.sell_code.value;
		reqData.dong 			= frm.dong.value;
		reqData.floor			= frm.floor.value;
		reqData.ho 				= frm.ho.value;	
		reqData.group_cont_id 	= frm.group_cont_id.value;
		reqData.cont_id 		= frm.cont_id.value		
		reqData.remain_date 	= $("#arr_target_date").val();
					
			
		if(reqData.company_code  == null || reqData.company_code  == ""){
			
		}else{
			
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/income_amt_ajax.do',
			type: 'POST',
			data: reqData,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
				
				if (data != null && data.incomeAmtList.length > 0){
					
					$("#incomeTable").find("tbody").remove();
	
		    		var txt = "<tbody>";
	
				    for(var i=0;i<data.incomeAmtList.length;i++){
					    txt  += '<tr>';
					    txt  += '	<td>' + data.incomeAmtList[i].levy_ym_text + '</td>';
					    txt  += '	<td>' + data.incomeAmtList[i].request_div_detailname + '</td>';
					    txt  += '	<td>' + data.incomeAmtList[i].date_income_text + '</td>';
					    txt  += '	<td>' + data.incomeAmtList[i].receipt_gbnname + '</td>';
					    txt  += '	<td class="tar">' + new Intl.NumberFormat().format( data.incomeAmtList[i].income_amt) + '원</td>';
					    txt  += '</tr>';
				    }
		    			
		    		
					txt += "</tbody>";
					txt  += data.pageNav;
					$("#incomeTable").append(txt);
					
					

					$("#incomeTable_mobile").find("tbody").remove();
	
		    		txt = "<tbody>";

				    for(var i=0;i<data.incomeAmtList.length;i++){
						txt += '					<tr>';
						txt += '						<th>청구년월</th>';
						txt += '						<td colspan="3">' + data.incomeAmtList[i].levy_ym_text + '</td>';
						txt += '					</tr>';
						txt += '					<tr>';
						txt += '						<th>납부구분</th>';
						txt += '						<th>납기일자</th>';
						txt += '						<th>납부방법</th>';
						txt += '						<th>납부금액</th>';
						txt += '					</tr>';
						txt += '					<tr>';
						txt += '						<td>' + data.incomeAmtList[i].request_div_detailname + '</td>';
						txt += '						<td>' + data.incomeAmtList[i].date_income_text + '</td>';
						txt += '						<td>' + data.incomeAmtList[i].receipt_gbnname + '</td>';
						txt += '						<td>' + new Intl.NumberFormat().format( data.incomeAmtList[i].income_amt) + '원</td>';
						txt += '					</tr>';
				    }
		    		
					txt += "</tbody>";
					txt  += data.pageNav;
					$("#incomeTable_mobile").append(txt);

					
				}
			}			
		}); // $.ajax
		}
	}


    
    /*7. 공지사항  s*/
	function notice_call_hnt(page){
		var company_code      = frm.company_code.value;
		var proj      = frm.proj_code.value;
		var sell      = frm.sell_code.value;
		var i_sNtCode = "HNT";
		var levy_ym   = $("#levy_ym option:selected").val();
		var bill_seq  = $("#levy_ym option:selected").attr("data-option");
		var i_sCate   = frm.i_sCate.value;
//		var data      = {'as_levy' : levy_ym, 'as_comp' : company_code, 'as_proj' : proj, 'as_sell' : sell, 'i_sNtCode' : i_sNtCode,'as_bill_seq' : bill_seq, 'i_iNowPageNo' : page};
		var data      = {'i_sNtCode' : i_sNtCode, 'i_iNowPageNo' : page, 'i_sCate' : i_sCate};
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/notice_list_hnt_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
				
				if (data != null){
					
		    		$("#noticeHNT_iframe").find("div").remove();
		    		var txt = '<div class="if_box">'
						
					if(data.notiListHEZ != null && data.notiListHEZ.length > 0){ //N_NUM
						txt += '<div class="list_style01" >';
						
						for(var i=0; i<data.notiListHEZ.length; i++){
								txt += '	<dl>';
								txt += '		<dt onclick="list_arc(this)">';
								txt += '			<a href="#none">';
								txt += '				<span class="title" id="">'; 
								txt += '					<em>';
								if(data.notiListHEZ[i].nt_hhs_type == null){
								txt +=   '전체';
									}else if(data.notiListHEZ[i].nt_hhs_type == 1){
								txt +=	 '소식';
									}else if(data.notiListHEZ[i].nt_hhs_type == 2){
								txt +=	 '이벤트';		
									}else{
								txt +=   '전체';		
									}
								txt += '</em>'+ data.notiListHEZ[i].nt_title +'</span>';
								txt += '				<span class="date">'+ data.notiListHEZ[i].row_input_date +'</span>';
								txt += '			</a>';
								txt += '		</dt>';
								txt += '		<dd>';
								txt += '			<div class="title">';
								txt += '				<strong>'+ data.notiListHEZ[i].nt_title +'</strong>';
								txt += '			</div>';
								txt += '			<div>'+ data.notiListHEZ[i].nt_content +'</div>';
								txt += '			<span class="date">'+ data.notiListHEZ[i].row_input_date +'</span>';
								txt += '		</dd>';
								txt += '	</dl>';
						}
						
						txt += '  </div>';
						txt += data.pageNav;												
					}else {
						txt += '<div class="list_style01">';
						
						txt += '	<div><span style="font-weight:bold">등록된 게시물이 없습니다.</span></div>';
							
						txt += '	</div>';
					}
					txt += '</div>'
						
					$("#noticeHNT_iframe").append(txt);
					
					
				}
			}			
		}); // $.ajax
	}

	/*8. FAQ*/  
	function faq_sorting(args){		
		if(args =="ALL"){
			$("#frm > input[name='i_sCate']").val("%");
		}else{
			$("#frm > input[name='i_sCate']").val(args);
		}
		notice_call_hfa();
		
		var target = document.getElementById(args);
		$(".faq_cate").removeClass('on');
		$(target).addClass('on');
	}
	
    function notice_call_hfa(page){
    	var company_code      = frm.company_code.value;
		var proj      = frm.proj_code.value;
		var sell      = frm.sell_code.value;
		var i_sNtCode = "HFA";
		var i_sCate   = frm.i_sCate.value;
		
//		var data      = {'as_comp' : company_code, 'as_proj' : proj, 'as_sell' : sell, 'i_sNtCode' : i_sNtCode, 'i_iNowPageNo' : page , 'i_sCate' : i_sCate};
		var data      = {'i_sNtCode' : i_sNtCode, 'i_iNowPageNo' : page , 'i_sCate' : i_sCate, 'as_comp' : company_code};
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/notice_list_hfa_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
				

		    		$("#noticeHFA_iframe").find("div").remove(); // $$
		    		txt = '<div class="tabCont active">'
		    		txt += '<div class="faq_sorting" id="cateEventfaq">';	  
		    		
		    		txt += ' <li id="ALL" class="faq_cate on"><a href="javascript:faq_sorting(\'ALL\');">전체</a></li>';
		    		var findStr = '(';
		    		for(var i=0; i<data.faqCateList.length; i++){
		    			
	    			txt += ' <li id="'+data.faqCateList[i].code+'" class="faq_cate"><a href="javascript:faq_sorting(\''+data.faqCateList[i].code+'\');" class=';
	    			
	    			//if(data.faqCateList[i].label.indexOf(findStr) > -1 ? 
	    			//txt +=	"line2"
	    			//		: 
	    			txt +=	""
	    			//		)
	    			txt += '>';

	    				if(data.faqCateList[i].label.indexOf(findStr) > -1){
	    			        var cate = data.faqCateList[i].label
	
	    			        var cate_idx = cate.indexOf(findStr); 
	
	    			        var before = cate.substring(0, cate_idx);
	
	    			        var after = cate.substring(cate_idx);
		    			    //txt += before +'<br/>'+after; 
		    			      txt += before;
	    			  }else{
	    				  	txt += ''+ data.faqCateList[i].label +'';
	    			  }
	    			txt +=	'</a></li>';
	    			}
		    		txt += '</div>';
		    			
					if(data.notiListHEZ != null && data.notiListHEZ.length > 0){
						txt += '<div class="list_style01 faq">';
						
						
						for(var i=0; i<data.notiListHEZ.length; i++){
							txt += '		<dl>';
							txt += '			<!-- 반복 -->';
							txt += '			<dt onclick="list_arc(this)">';
							txt += '				<a href="#none">';
							txt += '					<span class="title">'+ data.notiListHEZ[i].nt_title +'</span>';
							txt += '				</a>';
							txt += '			</dt>';
							txt += '			<dd>';
							txt += '				<div class="title">';
							txt += '					<strong>'+ data.notiListHEZ[i].nt_title +'</strong>';
							txt += '				</div>';
							txt += '			<div>'+ data.notiListHEZ[i].nt_content +'</div>';
							txt += '			</dd>';
							txt += '			<!-- //반복 -->';
							txt += '		</dl>';
						}
						txt += '	</div>';	
					    
						//[s] Paging pc 
						txt  += data.pageNav;
					    //[e] Paging 
					    
					    
					    //[s] Paging mobile
					    //[e] Paging mobile
					    
					}else {
						txt += '<div class="list_style01 faq">';
						
						txt += '	<div><span style="font-weight:bold">등록된 게시물이 없습니다.</span></div>';
							
						txt += '	</div>';
					}
					txt += '	</div>';
						
					$("#noticeHFA_iframe").append(txt);
				}
			
		}); // $.ajax
		
    	
    }
    
    /*9. 1:1상담 s*/
	function notice_call_hmw(page){
		var company_code      = frm.company_code.value;
		var proj      = frm.proj_code.value;
		var sell      = frm.sell_code.value;
		var i_sNtCode = "HMW";
		var levy_ym   = $("#levy_ym option:selected").val();
		var bill_seq  = $("#levy_ym option:selected").attr("data-option");
		var i_sCate = frm.i_sCate.value;
		var data      = {'as_levy' : levy_ym, 'as_comp' : company_code, 'as_proj' : proj, 'as_sell' : sell, 'i_sNtCode' : i_sNtCode,'as_bill_seq' : bill_seq, 'i_iNowPageNo' : page};
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/main/notice_list_hmw_ajax.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
				
				if (data != null){
					
		    		$("#noticeHMW_iframe").find("div").remove();
		    		var txt = '<div>'
						
					if(data.notiListHEZ != null && data.notiListHEZ.length > 0){
						txt += '<div class="list_style01 ask">';
						
						for(var i=0; i<data.notiListHEZ.length; i++){
								txt += '	<dl>';
								txt += '		<dt onclick="list_arc(this)">';
								txt += '			<a href="#none">';
								txt += '				<span class="title" id="">'+ data.notiListHEZ[i].nt_title +'</span>';
								txt += '				<span class="date">'+ data.notiListHEZ[i].row_input_date +'</span>';
								txt += '			</a>';
								txt += '		</dt>';
								txt += '		<dd>';
								txt += '			<div class="title">';
								txt += '				<strong>'+ data.notiListHEZ[i].nt_content +'</strong>';
								txt += '			</div>';
								txt += '			<div>';
								txt += '				<span class="date">'+ data.notiListHEZ[i].row_input_date +'</span>';
								
								if(data.notiListHEZ[i].nt_reply != null){
								txt += ''			+data.notiListHEZ[i].nt_reply+'</div>';
								}
								
								txt += '		</dd>';
								txt += '	</dl>';
						}
						
						txt += '  </div>';
							
						txt  += data.pageNav;
					    
					}else {
						txt += '<div class="list_style01 ask">';
						
						txt += '	<div><span style="font-weight:bold">등록된 게시물이 없습니다.</span></div>';
							
						txt += '	</div>';
					}
					txt += '</div>'
						
					$("#noticeHMW_iframe").append(txt);
				}
			}			
		}); // $.ajax
	}
	
	/*리스트 이벤트*/
	function list_arc(args){

		var listWrap = $('.list_style01')
			, q = listWrap.find('dt')
			, a = listWrap.find('dd');
		
		trigger = $(args).find('a');
		answer  = $(args).parent().find('dd');
		if($( trigger[0]).hasClass( "active" )){
			trigger.removeClass('active');
			answer.stop().slideUp(200);
		}else{
			q.not($(args)).children('a').removeClass('active');
			trigger.addClass('active');
	
			a.not(answer).stop().slideUp(200);
			answer.stop().slideDown(200);
		}
		
	}
	
	
	//PG 버튼
	$("#calc_btn").click(function (event) {
		event.preventDefault();
		
		var order_form = document.order_form;
		if (order_form.PMid.value == "" ){
			alert("가맹점 등록이 되어 있지 않습니다");
			return;
		}
		
		var option=$("#selectoncome option:selected").val();
		
		if(option == '00'){
			alert("결제 방법을 선택해주세요.");
			return;
		} 

		var remain_amt = Number($("input[name=remain_amt]").val()); 
		if(remain_amt <= 0){
			alert("납부 하실 금액이 없습니다.!!");
			return;
		}
		
		pg_data();

		if(option=='CARD'){
			//on_card();
			on_pay('CARD');
	 	}else if(option=='BANK'){
			//on_bank();
			on_pay('BANK');
		}else if(option=='MOBILE'){
			//on_mobile();
			on_pay('MOBILE');
		}else if(option=='VBANK'){
			//on_vbank();
			on_pay('VBANK');
		} 
		/* else if(option=='NOAUTH_CARD'){
			on_noauth_card();
		} */
	});

	$("#calc_btn2").click(function (event) {
		event.preventDefault();
		
		var order_form = document.order_form;
		if (order_form.PMid.value == "" ){
			alert("가맹점 등록이 되어 있지 않습니다");
			return;
		}
		
		var option=$("#selectnocome option:selected").val();
		
		if(option == '00'){
			alert("결제 방법을 선택해주세요.");
			return;
		} 
		
		var remain_amt = Number($("input[name=remain_amt]").val()); 
		if(remain_amt <= 0){
			alert("납부 하실 금액이 없습니다.!!");
			return;
		}
		
		pg_data();
		
		if(option=='CARD'){
			//on_card();
			on_pay('CARD');
		}else if(option=='BANK'){
			//on_bank();
			on_pay('BANK');
		}else if(option=='MOBILE'){
			//on_mobile();
			on_pay('MOBILE');
		}else if(option=='VBANK'){
			//on_vbank();
			on_pay('VBANK');
		} 
		/* else if(option=='NOAUTH_CARD'){
			on_noauth_card();
		} */
	});
	
	function pg_data(){
		var company_code  = $("input[name=company_code]").val();
		var proj_code     = $("input[name=proj_code]").val();
		var sell_code     = $("input[name=sell_code]").val();
		var cust_code     = $("input[name=cust_code]").val();
		var cust_hp2      = $("input[name=cust_hp2]").val();
		var remain_amt    = $("input[name=remain_amt]").val();
		var u_name 	      = $("input[name=u_name]").val();
		var cust_email    = $("input[name=cust_email]").val();
		var cont_id       = $("input[name=cont_id]").val();
		var group_cont_id = $("input[name=group_cont_id]").val();
		var pnoti = "company_code="+company_code+",proj_code="+proj_code+",sell_code="+sell_code+",cust_code="+cust_code+",cont_id="+cont_id+",group_cont_id="+group_cont_id;

//		if(remain_amt < 0 ){
//			alert("납부 하실 금액이 없습니다.!!");
//			return;
//		}
		
		$("#order_form > input[name='PEmail']").val(cust_email);
		$("#order_form > input[name='PPhone']").val(cust_hp2);
		$("#order_form > input[name='t_PGoods']").val('미납 금액');
		$("#order_form > input[name='t_PNoti']").val(pnoti);
		$("#order_form > input[name='t_PMname']").val('이지렘스');
		$("#order_form > input[name='t_PUname']").val(u_name);
		$("#order_form > input[name='t_PBname']").val('이지렘스');
		$("#order_form > input[name='PEname']").val('ezREMS');
		$("#order_form > input[name='PVtransDt']").val('');
		//$("#order_form > input[name='PTarget']").val('');
		//$("#order_form > input[name='PMid']").val();
		$("#order_form > input[name='PAmt']").val(remain_amt);
//		$("#order_form > input[name='PAmt']").val(1000);
	}
	
	/*회원탈퇴후 로그인화면이동*/
	function delUpdateHirerId(){
		var delUpdateHirerId  = 'delUpdateHirerId';
		var data              = {'delUpdateHirerId' : delUpdateHirerId};
		
		$.ajax({
			url: GLOBAL_SSL_URL+'/front/member/actionLogout.do',
			type: 'POST',
			data: data,
			dataType:'json',
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			async: false,
			cache: false,
			beforeSend: function(xhr){
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
					 alert("회원탈퇴후 자동로그아웃 됩니다.");
					 location.href="/front/member/login.do";

				}		        
			},
			success: function(data) {
				
			}			
		}); // $.ajax
		
	}
	
	//비밀번호 변경 창..
	function pf_changePwd() {
		var url = GLOBAL_SSL_URL+ "/front/member/UserPasswordUpdtView.do";
		var modal = "<div id='findmodal'><iframe id='if_findmodal' src='" + url + "' width='100%' height='190px' scrolling='no' frameborder=0 marginwidh=0 marginheight=0></iframe></div>";
		
		$(modal).dialog({title:'비밀번호 변경', show:false, width:455, height:325, modal:true, resizable:false, 
			closeOnEscape: false,
			modal: true,
			buttons: {
				"확인": function() { $("#if_findmodal").get(0).contentWindow.pf_UpdatePwd(); },
				"취소": function() { $("#findmodal").dialog("close"); }
			},
			close:function(){
				try {
					$(this).remove(); 
				}catch(e) {}
			}
		});
	}
	
	var progressbar_time;
	
	//계약정보 체크 pyw
	$('document').ready(function (){
		progressbar_time = setTimeout(progressbar_w_checker, 2000);
	});

	function progressbar_w_checker (){
		var progressbar_box = $('.ui-progressbar').width();
		var progressbar_w = $('.ui-progressbar .ui-progressbar-value').width();
		var progressbar_Gap = Math.round(progressbar_w/(progressbar_box/100));
		if(progressbar_Gap > 90 ){
			$('.ui-progressbar .ui-progressbar-value').css('background','red')
			
		}
		/*$('.ui-progressbar .ui-progressbar-value').attr('style','background : red!important')*/
		//alert(progressbar_Gap)
		
		clearTimeout(progressbar_time);
	}

	
	function pf_logout() {
		if ('undefined' !== (typeof ReactNativeWebView)) {
			ReactNativeWebView.postMessage(JSON.stringify({cmd: 'deleteAuth'}));
		}

		location = '/front/member/actionLogout.do';
	}	
	
	