$(document).ready(function(){
	
	//Only 숫자입력
	function onlyNum(){
		$(".number_only").keyup(function(event){
			if (!(event.keyCode >=37 && event.keyCode<=40)) {
				var inputVal = $(this).val();
				$(this).val(inputVal.replace(/[^0-9]/gi,''));
			}
		});
	}
	
	
	
});