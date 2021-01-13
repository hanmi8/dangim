function CurrentPlace(type, place){
	/**
	** type : 타입
	** place : 공간
	** text : 공간명
	**/
	//alert(type+'/'+place+'['+text+']');

/*
	type = type.toUpperCase();

	var current = $('.currentPlace'),
		showtext = type+'타입 '+text+'입니다.';

	$('.place-group .btn').removeClass('active');
	$('.place-group .place'+place).addClass('active');
	current.html(showtext);
*/

	if(ismobile){
		//alert(type+'/'+place);
		placeSwitchMatch(type);
		MatchPoint(type,place);
	}else{
		menuPlace(type,place);
	}
	
	$type = type;
	$place = place;
	
	getPlace();

}


function playPicat(type, place){
	
	$type = type;
	$place = place;

	var picat = $('#picat');

	picat.show();

	embedpano({swf:"./module/picatPlayer.swf", target:"cms", html5:"auto", wmode:"transparent", vars:$commons, passQueryParameters:true});

}

function playMobilePicat(type, place)
{
	$type = type;
	$place = place;

	var picat = $('#picat');

	picat.show();

	embedpano({swf:"./module/picatPlayer.swf", target:"cms", html5:"always", wmode:"transparent", vars:$commons, passQueryParameters:true});

}


function closeWindowVR(){

}

function picat(){
	var picat = document.getElementById("krpanoSWFObject");

	return picat;
}

function getPlaceName(){

}

function getType(){
	picat().set('currentType',$type);
}
function getPlace(){
	picat().set('currentPlace',$place);

	//장소명세팅	
	for(var i=0; i<$TypeList[$type].length; i++){
		var id = $TypeList[$type][i].id,
			idx = $TypeList[$type][i].idx,
			wait = $TypeList[$type][i].wait,
			name = $TypeList[$type][i].name;

		picat().set('placeID'+id,id);
		picat().set('placeName'+id,name);
		picat().set('placeIdx'+id,idx);
		picat().set('placeWait'+id,wait);
	}

}