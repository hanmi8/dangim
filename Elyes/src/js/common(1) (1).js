var ismobile = false,
	$type,$place,
	$TypeList = [],
	$is,
	$isMobileData,
	menu_time,
	timer,
	$setup,
	$autodrive,
	$driveList = [],
	$narration,
	$move,
	$info,
	$display,
	settings = [],
	captions = [],
	displayList = [],
	movelist,
	$commons = [],
	$success = [];


getParameter = function(name)
{
	search=location.search;
	if(!search)
	{
		return false;
	}
	search=search.split("?");
	data=search[1].split("=");
	if(search[1].indexOf(name)==(-1) || data[0]!=name)
	{
		return false;
	}
	if(search[1].indexOf("&")==(-1))
	{
		data=search[1].split("=");
		return data[1];
	}
	else
	{
		data=search[1].split("&");
		for(i=0;i<=data.length-1;i++)
		{
			l_data=data[i].split("=");
			if(l_data[0]==name)
			{
				return l_data[1];
				break;
			}
			else continue;
		}
	}
}

var getParam = function(key){
	var _parammap = {};
	document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
		function decode(s) {
			return decodeURIComponent(s.split("+").join(" "));
		}

		_parammap[decode(arguments[1])] = decode(arguments[2]);
	});

	return _parammap[key];
};

function CMSLoad(mode){
	//$TypeList[titleID]

	if(!$type) $type = 'type1';
	if(!$place) $place = 'place1';

	if(mode == "mobile")
	{
		playMobilePicat($type,$place);
		return;
	}
	
	playPicat($type, $place);

}

// init

function init(){
	PlaceSet();
	snsActive();
}

function afterModuleProc()
{
	if(ismobile == true)
	{
		CMSLoad('mobile');
		ActiveLoader();
	}
	else
	{
		CMSLoad();
		startEvent();
	}
	firstSet();
}


function firstSet()
{
	$('#popup').find('li').click(selectedPopup)
	$('#popup .close').click(hidePopup);
	$('#list').find('ul').find('li').click(fastMove);
}

function PlaceSet()
{
	//setup
	$.ajax(
	{
		type:"GET",
		url:"./xml/setup.xml",
		cache:false,
		dataType:"xml",
		success:function(setup)
		{
			$success['setup'] = true;
			$setup = $(setup);
			$options = $setup.find('options');
			//option
			$options.find('set').each(function(){
				settings[$(this).attr('id')] = $(this).find('value').text();
				$commons['option^'+$(this).attr('id')] = $(this).find('value').text();
				if($(this).attr('id') == 'bgm')
				{
					$commons['bgm^url'] = $(this).attr('url');
				}

				if($(this).attr('id') == 'auto_drive')
				{
					if(Number($(this).find('value')) == 1)
					{
						$commons['drive_enable'] = 'Y';
					}

					$commons['driveMode'] = $(this).attr('mode');
				}
			});

			if(getParameter('autodrive'))
			{
				$commons['option^auto_drive'] = getParameter('autodrive');
				$commons['drive_enable'] = 'Y';
			}

			$.ajax({
			   type:"GET",
			   url:"./xml/place.xml",
			   cache:false,
			   dataType:"xml",
			   success:function(data){
					
					$success['place'] = true;

					var nav = $('#gnb .typeGroup');

					$is = $(data);
					$isMobileData = $(data);

					var siteName = $(data).find('site').text();

					if(siteName) $('.cms-name').html(siteName);


					$(data).find('type-list').find('type').each(function(i){
						var title = $(this).find('title').text(),
							place = $(this).find('place-list').find('place'),
							tid = $(this).attr('id'),
							split_mode = $(this).attr('split'),
							split_name = $(this).attr('splitName');

						addTypeGui(tid,title,i,split_mode,split_name);

						var placeList = [];

						place.each(function(n){
							var placeID = $(this).attr('id'),
								placeIdx = $(this).attr('idx'),
								placeWait = $(this).attr('wait'),
								placeName = $(this).find('name').text(),
								placeStartPosition = $(this).find('view').text().split(','),
								firstNode = $(this).attr('firstNode'),
								viewX = 0,
								viewY = 0,
								viewF = settings['fov'],
								floor = $(this).attr('floor'),
								placeIntro = $(this).attr('intro');

							if(placeWait != 'Y')
							{
								$driveList.push(tid+','+placeID);
							}

							addPlaceGui(tid,placeID,placeName,placeWait,n,floor,split_mode);

							switch (placeStartPosition.length)
							{
								case 1: viewX = placeStartPosition[0];
										break;
								case 2: viewX = placeStartPosition[0];
										viewY = placeStartPosition[1];
										break;
								case 3: viewX = placeStartPosition[0];
										viewY = placeStartPosition[1];
										viewF = placeStartPosition[2];
										break;
							}

							var autoPlaceIdx;

							$(data).find('placeIdx').find('idx').each(function(){
								var target = $(this).text(),
									idx = $(this).attr('id');

								if(target == placeName)
								{
									autoPlaceIdx = idx;
									return false;
								}
							});

							if(!autoPlaceIdx)
							{
								//alert(''+placeName+' is Not Method.')
							}
							else
							{
								placeIdx = autoPlaceIdx;
							}

							$commons[tid+'^'+placeID+'_Name'] = placeName;
							$commons[tid+'^'+placeID+'_Idx'] = autoPlaceIdx;
							$commons[tid+'^'+placeID+'_Wait'] = placeWait;
							$commons[tid+'^'+placeID+'_placeFirstNode'] = firstNode;
							$commons[tid+'^'+placeID+'_StartPositionX'] = viewX;
							$commons[tid+'^'+placeID+'_StartPositionY'] = viewY;
							$commons[tid+'^'+placeID+'_StartPositionF'] = viewF;
							$commons[tid+'^'+placeID+'_intro'] = placeIntro;
							$commons[tid+'_count'] = n + 1;
							$commons[tid+'_dp' + n] = placeID;
							$commons[tid+'_idx' + n] = autoPlaceIdx;
							
							var hoverText = '으로';

							if(firstNode == 'Y')
							{
								$commons['currentType'] = tid;
								$commons['currentPlace'] = placeID;
							}
							switch(placeName)
							{
								case '거실': hoverText = '로'; break;
								case '주방': hoverText = '으로'; break;
								case '주방/식당': hoverText = '으로'; break;
								case '안방': hoverText = '으로'; break;
								case '침실1': hoverText = '로'; break;
								case '침실2': hoverText = '로'; break;
								case '침실3': hoverText = '로'; break;
								case '알파룸': hoverText = '으로'; break;
								case '드레스룸': hoverText = '으로'; break;
								case '공용욕실': hoverText = '로'; break;
								case '부부욕실': hoverText = '로'; break;
								case '현관': hoverText = '으로'; break;
								case '팬트리': hoverText = '로'; break;
								case '서재': hoverText = '로'; break;
								default: hoverText = '으로'; break;
							}

							hoverText = placeName + hoverText +' 이동합니다.';

							$commons[tid+'^'+placeID+'_hover'] = hoverText;

							if(firstNode == 'Y')
							{
								$type = $(this).closest('type').attr('id');
								$place = placeID;
							}

							placeList.push(
							{
								id:placeID,
								idx:placeIdx,
								name:placeName,
								wait:placeWait
							});

						});

						var titleID = $(this).attr('id');
						$TypeList[titleID] = placeList;
						$TypeList.length ++;

					});

					//move
					$.ajax({
						type:"GET",
						url:"./xml/move.xml",
						dataType:"xml",
						cache:false,
						success:function(move)
						{
							$move = $(move);

							var list = [];

							$move.find('type').each(function(){
								var type = $(this),
									tid = type.attr('id');

							
								list[tid] = [];

								type.find('place').each(function(){
									var place = $(this),
										pid = place.attr('id'),
										moveList = [];
									var optionAction = '';

									list[tid][pid] = [];

									$(this).find('move').each(function(){
										var attrs = $(this).get(0).attributes;
										var option = '"type":"'+tid+'","place":"'+pid+'",';

										for (var i=0; i<attrs.length; i++)
										{
											option += '"'+attrs[i].nodeName+'":"'+attrs[i].nodeValue+'",';
										}

										option = '{' + option.replace(/,$/,'') + '}';

										eval('var optionVal = '+option+';');

										optionAction += moveCode(optionVal);

										list[tid][pid].push(optionVal);
									});
									
									list[tid][pid]['action'] = optionAction;
									list[tid].length++;
								});
								//movelist[tid]
								list.length++;
								
							});

							movelist = list;

						//display
						$.ajax({
							type:"GET",
							url:"./xml/display.xml",
							dataType:"xml",
							cache:false,
							success:function(dp)
							{
								$display = $(dp);
								var dpList = [];

								$display.find('type').each(function()
								{
									var $t = $(this),
										tid = $t.attr('id'),
										$place = $t.find('place');

									dpList[tid] = [];
									dpList.length++;

									$place.each(function()
									{
										var $p = $(this),
											pid = $p.attr('id'),
											$dps = $p.find('dp');
										var dpAction = '';

										dpList[tid].length++;
										dpList[tid][pid] = [];
										dpList[tid][pid]['list'] = '';

										$dps.each(function(i)
										{
											var $dp = $(this);
											var option = {};

											option.num = i + 1;
											option.name = 'dpi_'+ option.num;
											option.ath = $dp.attr('ath');
											option.atv = $dp.attr('atv');

											dpAction += displayCode(option);

											dpList[tid][pid]['list'] += option.name+',';

											dpList[tid][pid].push(option);
										});
										dpList[tid][pid]['list'] = dpList[tid][pid]['list'].replace(/,$/,'');
										dpList[tid][pid]['action'] = dpAction;
									});
									
								});
								//displayCode

								displayList = dpList;
								
								afterModuleProc();
							}
						});
						}
					});
					//move
			   }
		   });
		}
	//setup
	});
}

function getMoveHotspot(type,place)
{
	if(typeof(movelist[type][place]['action']) == 'string')
	{
		picat().call(movelist[type][place]['action']);
	}

	getDpHotspot(type,place);
}

function getDpHotspot(type,place)
{
	if(typeof(displayList[type][place]['action']) == 'string')
	{
		picat().call(displayList[type][place]['action']);
	}
}

function displayCode(option)
{

	var dpc = 'createDpHotspot('+option.num+','+option.ath+','+option.atv+');';

	return dpc;
}

function moveCode(option)
{

	var move = 'createMoveHotspot('+option.type+','+option.place+','+option.next+','+option.ath+','+option.atv+');';

	return move;
}


function log(text){
	$('#log').find('textarea').append(text+'<br/>');
}


function snsActive(){
	$('#facebook').click(snsOrder);
	$('#twitter').click(snsOrder);
}

function snsOrder(){
	var title = $('title').text(),
		path = location.href.replace(/(new|index)\.html/,'');
		img = path+'pano/type1/place1.tiles/thumb.jpg',
		url = location.href,
		summary = 'test',
		s_url = '',
		sns = $(this).attr('id');

	switch (sns)
	{
		case 'facebook': s_url = "http://www.facebook.com/sharer.php?s=100&p[url]="+encodeURIComponent(url)+"&p[title]="+encodeURIComponent(title)+"&p[summary]="+encodeURIComponent(summary)+"&p[images][0]="+encodeURIComponent(img); break;
		case 'twitter': s_url = 'https://twitter.com/share?text='+encodeURIComponent(title)+'&url='+encodeURIComponent(url); break;
	}

	if(s_url){
		window.open(s_url, "sns", 'top=200,left=200,width=800,height=500,resizable=yes,scrollbars=yes');
	}	

}

function AdControl(mode)
{
	var $header = $('#header');
	if(mode == 'true')
	{
		//$header.fadeOut(200);
	}
	else
	{
		//$header.fadeIn(200);
	}
}


var currentNum,
	nextNum,
	nextType,
	nextPlace;

function toDrive()
{
	// nextType
	// nextPlace
	checkNextDrive();

	picat().call('PlaceChange('+nextType+', '+nextPlace+');');
	setTimeout(function()
	{
		autoDrive(nextType,nextPlace);
	},1000);
}

function checkNextDrive()
{
	for (var i = 0; i<$driveList.length; i++)
	{
		var driveSplit = $driveList[i].split(','),
			driveType = driveSplit[0],
			drivePlace = driveSplit[1];

		if(driveType == $type && $place == drivePlace)
		{
			currentNum = i;

			if(i == Number($driveList.length-1))
			{
				nextNum = 0;
			}
			else
			{
				nextNum = i+1;
			}

			var driveNext = $driveList[nextNum].split(',');
			nextType = driveNext[0];
			nextPlace = driveNext[1];
		}
	}
}

function autoDrive(type,place,repeat)
{
	return;
	if($commons['driveMode'] == 'auto')
	{
		picat().set('autorate','true');
		picat().call('AutoDriveRate();');
	}
	else
	{
		var $autoDrive = $autodrive.find('autodrive-list'),
			drive,
			firstType,
			firstPlace;

		$autoDrive.find('type').each(function()
		{
			if($(this).attr('id') == type)
			{
				$(this).find('drive').each(function(n)
				{
					if(n == 0)
					{
						firstType = type;
						firstPlace = $(this).attr('id');
					}
					if($(this).attr('id') == place)
					{
						drive = $(this).text().replace(/[\n]|[\s]/igm,'');
						return false;
					}
				});
				return false;
			}
		});

		picat().call('drive_is_enable()');

		if(!drive)
		{
			picat().call('panoLoader('+firstType+','+firstPlace+')');
			autoDrive(firstType,firstPlace);
			return;
		}
		picat().set('autorotate.enabled',true);
		picat().call(drive);
	}
}

function checkLoader(html5,type,place,current)
{
	var drive_enable = picat().get('control.usercontrol');
	if(drive_enable == 'off')
	{
		return;
	}

	if(html5 == 'true')
	{
		var mapTagUrl = 'xml/img/map/tag/m/'+picat().get(type+'^'+current+'_Idx')+'.png',
			mapTagUrl2 = 'xml/img/map/tag/m/'+picat().get(type+'^'+place+'_Idx')+'_over.png',
			currentPlace = 'map_'+current,
			target = 'map_'+place;

		picat().set('layer['+currentPlace+'].url', mapTagUrl);
		picat().set('layer['+currentPlace+'].scale', '0.7');
		picat().set('layer['+currentPlace+'].zorder', '502');
		picat().set('layer['+currentPlace+'].enabled', 'true');

		picat().set('layer['+target+'].url', mapTagUrl2);
		picat().set('layer['+target+'].scale', '1');
		picat().set('layer['+target+'].zorder', '505');
		picat().set('layer['+target+'].enabled', 'false');

	}

	picat().call('mapLoader('+type+','+place+')');
}

var autoDriveFirst;

function afterdisplayContent(type,place)
{
	return;
	if(!autoDriveFirst)
	{
		autoDriveFirst = true;
		if(picat().get('option^auto_drive') == 1)
		{
			picat().call('currentDrive('+type+','+place+');');
		}
		else
		{
			picat().call('drive_not_enable');
		}
	}
}


function panoLoader(type,place)
{
	if(picat().get('drive_enable') == 'Y')
	{
		picat().call('offDrive()');

		setTimeout(function(){
			picat().call('currentDrive('+type+','+place+')');
		},2000);
	}

	picat().set('control.usercontrol','all');
	picat().call('offDrive()');
	picat().call('panoLoader('+type+','+place+')');

}

function hideISO()
{

}

function newWinMov(html)
{
	var width=960;
	var height=540;
	var posx=(screen.width-width)/2;
	var posy=(screen.height-height)/2;

	var position="width="+width+",height="+height+",top="+posy+",left="+posx+",resizable=0,status=0,scrollbars=no,toolbar=no,location=no,directories=no";

	var url = html;
	//var url = "http://www.youtube.com/embed/"+id+"?autoplay=1";

	//var vrPopup = window.open(url,"MovieLoader",position);
	if(id != 'null' || !id || id == ""){
	  var vrPopup = window.open(url,"MovieLoader");
		  vrPopup.focus();
	}
}

var firstCheck = false,
	checkOut = false,
	changeViewCurrent = 0;

function checkAutoInfoView(hlook,vlook)
{
}

function checkSoundEvent(t,p)
{
}

function fastMove()
{
	if(!picat()) return;
	var target = $(this),
		link = target.attr('data-link'),
		html = target.attr('data-html');
	picat().call('looktohotspot('+link+',100,smooth(720,-720,720))');
}

function listToggle()
{
	var list = $('#list');

	if(list.css('right').replace('px','') == 0)
	{
		list.animate({right:-280},{duration:400,queue:false});
	}
	else
	{
		list.animate({right:0},{duration:400,queue:false});
	}
}

function mapTolgge()
{
	$('#map').slideToggle(400);
}

var popup_url,
	popup_visible = 0,
	popup;

function checkHtml(id,path)
{
	var uri = './files/html/'+$place+'/'+id+'/'+path+'.html';
	
	popup_url = './files/html/'+$place+'/'+id+'/';


	$.ajax({
		type:"GET",
		url: uri,
		dataType:"html",
		success:function(data){
			$('#popup').find('.'+path).show();
			popup_visible ++;
		},
		error:function(x,e,i)
		{
			$('#popup').find('.'+path).hide();
		}
	});
}

function detailView(content)
{
	if(popup == true) return;

	popup = true;

	var pops = {};

	pops['pop1'] = checkHtml(content,'introduce');
	pops['pop2'] = checkHtml(content,'characteristics');
	pops['pop3'] = checkHtml(content,'specification');
	pops['pop4'] = checkHtml(content,'apply_equipment');
	pops['pop5'] = checkHtml(content,'gallery');
	pops['pop6'] = checkHtml(content,'video');
	pops['pop7'] = checkHtml(content,'certification');

	$('#popup').find('.subject').removeClass('selected');

	$('#popup').find('li:first-child').find('.subject').addClass('selected');

	$('#popup').find('li').each(function(){
		$(this).find('.subject').addClass('selected');
		var className = $(this).attr('class'),
			iframe = '<iframe class="pop_iframe" src="'+popup_url+className+'.html" scrolling="auto" frameborder="0"></iframe>';
		$('#popup').find('.dummy').html(iframe);
		return false;
	});

	setTimeout(function(){
		if(popup_visible == 0)
		{
			alert('준비중입니다.');
			popup = false;
			return;
		}
		$('#popup').fadeIn(200);
	},200);
	
}

function selectedPopup()
{
	$('#popup').find('.subject').removeClass('selected');
	$(this).find('.subject').addClass('selected');

	var className = $(this).attr('class');

	var iframe = '<iframe class="pop_iframe" src="'+popup_url+className+'.html" scrolling="auto" frameborder="0"></iframe>';
	$('#popup').find('.dummy').html(iframe);
}
function hidePopup()
{
	popup_visible = 0;
	$('#popup').fadeOut(400);
	$('#popup').find('.dummy').html('');
	popup = false;
}


function parentDelete(n)
{
	picat().call('removelayer('+n+')');
}

function moveToPlace(t,p)
{
	picat().call('moveToNext('+t+','+p+')');
}