var comm = {
	ready: function(a) {
	
	}, 
	ajax_callback: function(action_url, frm_name, callback) {
		var frm = $("form[name='"+frm_name+"']");
		frm.ajaxForm({
			url: action_url,
			dataType:'json',
			beforeSend: function(xhr){ 
				BlockUI();
	            xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
	            xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
	            xhr.setRequestHeader("Progma","no-cache");
	            
		    },     
		    complete: function(){
		    	if(typeof(UnblockUI) != "undefined" ) UnblockUI();
		    },
		    error: function(xhr, status, err) {
		    	//myApp.hideIndicator();
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
	    			eval(callback)(data);
	    		}else{
	    			if ( data.result == "ERROR-QIESCENCE"){
	    				alert("휴면회원 상태입니다. 홈페이지에서 인증을 먼저 해주세요.");
	    				
	    			/*	var f = document.Frm;
		    			f.target = "_self";
		    			f.action = "https://";
		    			f.submit();*/
	    				
	    			}else{
		    			//BasicCaptcha.ReloadImage();
		    			alert( data.message );
	    			}
	    		} 
	    	 }else{
	    		 alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.!!");
	    	 }
		   }			
		}); // $.ajax
		frm.submit();
	},
	ajax_param_callback: function(action_url, data_param, callback) {
		$.ajax({
			url: action_url,
			type: 'POST',
			data: data_param,
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
				eval(callback)(data);
			}			
		}); // $.ajax
	},
	ajax_callback_html: function(action_url, frm_name, divObj, callback) {
		
		$.ajax({
			url: action_url,
			type: 'POST',
			data:$("form[name='"+frm_name+"']").serialize(),
			dataType:'html',
		      async: false,
		      cache: false,
		      beforeSend: function(xhr){ 
		            xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"); 
		            xhr.setRequestHeader("Cache-Control","no-store, no-cache, must-revalidate");
		            xhr.setRequestHeader("Progma","no-cache");
//		            myApp.showIndicator();
		       },     
		      error: function(xhr, status, err) {
//		    	  myApp.hideIndicator();
		          if (xhr.status == 401) {
		            alert("401 Unauthorized");
		          } else if (xhr.status == 403) {
		            alert("403 Forbidden");
		          } else {
		            alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.");
		          }		        
		      },
		      success: function(data) { 
//		    	  myApp.hideIndicator();
		    	 if (data != null || data != undefined || dadta != undefined){
		    		 var d = $("#"+divObj);
		    		 d.html(data);
		    		 
		    		 if (callback != undefined)
		    			 eval(callback)(data);
		    	 }else{
		    		 alert("예외가 발생했습니다. 관리자에게 문의해 주시기 바랍니다.!!");
		    	 }
		      }			
		}); // $.ajax
	}
};

function UnblockUI() {
    $.unblockUI();
}
function BlockUI() {
    $.blockUI({ message: '<div class="tp-loader spinner3" style="display: block;"><div class="dot1"></div><div class="dot2"></div><div class="bounce1" style="background-color: black;"></div><div class="bounce2" style="background-color: black;"></div><div class="bounce3" style="background-color: black;"></div></div>' });
}
