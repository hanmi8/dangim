var placeOverTime;
/*
				<div class="gnb type1 active">
					<div class="title" onclick="typeChanger('type1')">A/B Type</div>
					<div class="place">
						<dl>
							<dd class="active 1living1" onclick="PlaceGo('1living1')">거실</dd>
						</dl>					
					</div>
				</div>
*/

function addTypeGui(tid,title,i,split_mode,split_name)
{
	var active = '',
		first = ' first';

	if(i < 1)
	{
		active = ' active';
	}

	var nav = $('#pri-nav'),
		code = '<div id="'+tid+'" class="gnb type1'+active+'"><div class="title">'+title.replace(/([0-9]+)(.+)?/,'$1㎡$2')+'</div></div>';

	nav.append(code);
	$('#'+tid).append('<div class="place'+first+'"><dl class="placeGroup"></dl></div>');


	$('#'+tid+' .title').click(function(){
		var tplace;

		$('#'+tid).find('.placess').each(function()
		{
			if($(this).attr('data-wait') != 'Y')
			{
				tplace = $(this).attr('data-placeId');

				return false;
			}

		});

		if(!tplace) return alert('준비중입니다.');

		panoLoader(tid,tplace);
	});
}

function addPlaceGui(tid,placeID,placeName,placeWait,n,floor,split_mode)
{
	var placeWait = '';
	if(placeWait == 'Y')
	{
		placeWait = 'data-wait="Y"';
	}

	var limenu = '<dd class="placess '+placeID+'" data-placeId="'+placeID+'"'+placeWait+'>'+placeName+'</dd>';


	$('#'+tid).find('.placeGroup').append(limenu);


	$('#'+tid).find('.placeGroup').find('.'+placeID).click(function(){
		if(placeWait == 'Y'){
			alert('준비중입니다.');
		}else{
			panoLoader(tid,placeID);
		}
	});
}

function MatchTypePlace(type,place)
{
	currentType = type;
	currentPlace = place;
	$type = type,
	$place = place;

	menuPlace(type,place);
	
	checkDisplayList(type,place);
}

function checkDisplayList(t,p)
{
	var target = $display.find('type[id='+t+']').find('place[id='+p+']');
	var container = $('#display').find('.list');

	container.html('');

	target.find('dp').each(function(i)
	{
		var num = i+1;

		var item = $('<div class="list-item">'+
						'<div class="item-group">'+
							'<div class="item-no">'+num+'</div>'+
							'<div class="item-desc">'+$(this).text()+'</div>'+
						'</div>'+
					'</div>');

		item.on('click',function(){
			picat().call('showDps('+num+')');
		});
		item.appendTo(container);
	});

	if($('#display').is(':visible'))
	{
		displayVisible(1);
	}
}

function displayVisible(mode)
{
	if(!mode) mode = 0;

	if(typeof(displayList[$type][$place]['list']) == 'string')
	{
		var item = displayList[$type][$place]['list'].split(',');

		for(var i=0; i<item.length; i++)
		{
			picat().call('tween(hotspot['+item[i]+'].alpha,'+mode+',0.5);');
		}
	}
}

function startEvent()
{
	$('.placearea .useinfo').click(switchUserInfo);
	$('.placearea .iso').click(switchMap);
	$('.placearea .display').click(switchDisplay);
}

function switchUserInfo(mode)
{

	var t = $('.placearea .useinfo');

	var check = t.attr('class').match(/active/);

	if(mode == 'close')
	{
		check = true;
	}


	if(!check)
	{
		switchMap('close');
		picat().call('userInfoView(true)');
		t.addClass('active');
	}
	else
	{
		picat().call('userInfoView(false)');
		t.removeClass('active');
	}
}

function switchMap(mode)
{
	var t = $('.placearea .iso');
	
	var check = t.attr('class').match(/active/);
	if(mode == 'close')
	{
		check = true;
	}
	if(!check)
	{
		if($type == 'type4')
		{
			alert('평면도가 없습니다.');
			return;
		}
		t.addClass('active');
		switchUserInfo('close');
		picat().call('mapSwitch(true)');

	}
	else
	{
		t.removeClass('active');
		picat().call('mapSwitch(false)');
	}
}

function switchDisplay()
{
	if($commons['option^display'] != 1)
	{
		alert('준비중입니다.');
		return false;
	}

	var t = $('.placearea .display'),
		target = $('#display');

	var check = target.is(':visible');

	if(!check)
	{
		t.addClass('active');
		target.slideDown(400);
		displayVisible(1);
		
	}
	else
	{
		t.removeClass('active');
		target.slideUp(400);
		displayVisible(0);
	}
}

function closeMap()
{
	var t = $('.placearea .iso');
	t.removeClass('active');
}

function menuPlace(type, place)
{
	var nav = $('#pri-nav'),
		typeText,
		placeText;

	nav.find('.gnb').removeClass('active');

	nav.find('.gnb').each(function()
	{
		if($(this).attr('id') == type)
		{
			$(this).addClass('active');
			typeText = $(this).find('.name').text();
			return false;
		}
	});

	//#gnb .typeGroup .type.current,
	$('.placeGroup').find('.placess').removeClass('active');
	$('#'+type+' .placeGroup').find('.'+place).addClass('active');
}

function captionView()
{
	$('#captionView').animate({bottom:'-50px'},{duration:400});
	$('#caption').animate({bottom:'10px'},{duration:400,complete:function(){
		picat().set('currentSound','Y');
		picat().call('playCaptionSound()');
	}});
}
function captionClose()
{

	$('#captionView').animate({bottom:'10px'},{duration:400});
	$('#caption').animate({bottom:'-50px'},{duration:400,complete:function(){
		picat().set('currentSound','N');
		picat().call('stopCaptionSound()');
	}});
}

function checkCaption(mode)
{
	if(mode == 'Y')
	{
		$('#captionView').fadeIn(400);
		$('#caption').fadeIn(400);
	}
	else
	{
		$('#captionView').fadeOut(400);
		$('#caption').fadeOut(400);
	}
}

function captionText(type,id)
{
	var caption = $('#caption').find('.text');
	$narration.find('caption-list').find('type').each(function()
	{
		if($(this).attr('id') == type)
		{
			$(this).find('caption').each(function()
			{
				if($(this).attr('id') == id)
				{
					var text = $(this).text().replace(/^[\n]/,'').replace(/[\n]$/,'').replace('\n','<br/>');
					caption.html(text);
					return false;
				}
			});

			return false;
		}
	});
}
