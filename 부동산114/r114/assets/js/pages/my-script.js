// 행정동 주소 검색 레이어
$(document).on('click', '#btnSearchAddr', function(){
    $('#divSearchAddr').show();
});
$(document).on('click', '.btnSearchAddrClose', function(){
    $('#divSearchAddr').hide();
});
$(document).mouseup(function (e){
    var container = $('#divSearchAddr');
    if( container.has(e.target).length === 0){
      container.hide();
    }
});
// 상권레이어
$(document).on('click', '#ktStrBtn', function(){
    $('#strStrLayer').show();
    $('#ktAreaBtn').removeClass('btn-danger');
    $('#ktAreaBtn').addClass('btn-outline-secondary');
    $('#ktStrBtn').addClass('btn-danger');
    $('#ktStrBtn').removeClass('btn-outline-secondary');
});
$(document).on('click', '#ktAreaBtn', function(){
    $('#strStrLayer').hide();
    $('#ktAreaBtn').addClass('btn-danger');
    $('#ktAreaBtn').removeClass('btn-outline-secondary');
    $('#ktStrBtn').removeClass('btn-danger');
    $('#ktStrBtn').addClass('btn-outline-secondary');
});
// 맵버튼 레이어
$(document).on('click', '#btnMapType1', function(){
    $('#mapTypeLayer1').show();
});
$(document).on('click', '.btnMapType1Close', function(){
    $('#mapTypeLayer1').hide();
});
$(document).on('click', '#btnMapType2', function(){
    $('#mapTypeLayer2').show();
});
$(document).on('click', '.btnMapType2Close', function(){
    $('#mapTypeLayer2').hide();
});
$(document).on('click', '#mapInfo1', function(){
    $('#mapPannel1').removeClass('d-none');
    $('#mapPannel1').addClass('d-flex');
    $('#mapPannel2').removeClass('d-flex');
    $('#mapPannel2').addClass('d-none');
});
$(document).on('click', '#mapPannel1Close', function(){
    $('#mapPannel1').removeClass('d-flex');
    $('#mapPannel1').addClass('d-none');
});
$(document).on('click', '#mapSrcClose', function(){
    $('#mapSrcResult').hide();
});
$(document).on('click', '#mapInfo2', function(){
    $('#mapPannel2').removeClass('d-none');
    $('#mapPannel2').addClass('d-flex');
    $('#mapPannel1').removeClass('d-flex');
    $('#mapPannel1').addClass('d-none');
});
$(document).on('click', '#mapPannel2Close', function(){
    $('#mapPannel2').removeClass('d-flex');
    $('#mapPannel2').addClass('d-none');
});
$(document).on('click', '#btnBlock', function(){
    $('#mapBlockPanel').removeClass('d-none');
    $('#mapBlockPanel').addClass('d-flex');
});
$(document).on('click', '#mapBlockClose', function(){
    $('#mapBlockPanel').removeClass('d-flex');
    $('#mapBlockPanel').addClass('d-none');
});
// 토글 클래스
$(document).on('click', '.btn-togclass', function(){
    if($(this).hasClass("btn-danger")){
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-outline-secondary");
    } else {
        $(this).removeClass("btn-outline-secondary");
        $(this).addClass("btn-danger");
    }
});
// 토글 클래스2
$(document).on('click', '#btnFilter1', function(){
    if($(this).hasClass("btn-danger")){
        $(this).removeClass("btn-danger");
        $(this).addClass("btn-outline-secondary");
        $('#filterLayer1').hide();
        $('#filterLayer2').hide();
    } else if($(this).hasClass("btn-outline-secondary")) {
        $(this).removeClass("btn-outline-secondary");
        $(this).addClass("btn-danger");
        $('#filterLayer1').show();
        $('#filterLayer2').show();
    }
});
function srcResult () {
    if ( window.event.keyCode == 13 ) {
        $('#mapSrcResult').show();
    }
}

//대시보드 tab 스크립트 201215추가 
$(document).on('click', '.dashboard_tab_box button', function(){
    var tab_current_Num = $(this).index();
    var tab_length = $('.dashboard_tab_content').length;
    for(var i=0;i<tab_length;i++){
        if( i == tab_current_Num){
            // $('#dashboard_tab_content_'+i).css('display','block');
            $('#dashboard_tab_content_'+i).addClass('active');
        }else{
            // $('#dashboard_tab_content_'+i).css('display','none');
            $('#dashboard_tab_content_'+i).removeClass('active');
        }
    }
});

// 20.12 추가스크립트 
var map_popup_check = false;
var map_popup_item = $('.map-info-popup');
$(document).ready(function (){
    // 지도 주소 검색 함수 실행 
    var adress_num = $('.pa_list .map_search_list .list').length;
    if(adress_num > 0  ){
        address_searcher(adress_num);
    }
    // 지도 말풍선 함수 실행  
    var map_popup_num = map_popup_item.length;
    if(map_popup_num > 0){
        map_popup_stater(map_popup_num);
    }
    //대시보드버튼 함수 실행 
    var dashboard_bt_num = $('.dashboard_bt_box').length;
    if(dashboard_bt_num > 0){
        $('.dashboard_bt_box button').click(function (){
            $('.dashboard_bt_box button').removeClass('on');
            $(this).addClass('on');
        });
    }
    // 21.01.04 편의시설 추가 
    var map_plant_num = $('#map_plant_bt').length;
    if(map_plant_num > 0  ){
        var map_plant_list = $('.map_plant_list_box li').length;
        $('#map_plant_bt').click(function (){
             $('.map_plant_box').toggle();
        });
        $('.map_plant_list_box li a').click(function (e){
            e.preventDefault();
        })
        $('.map_plant_list_box li').click(function (){
            if($(this).hasClass('active') == true){
                $(this).removeClass('active');
            }else{
                $('.map_plant_list_box li').removeClass('active');
                $(this).addClass('active');
            }
            plant_sub_depth_hide();
        })

        $('.map_plant_list_box li.sub_depth_in').click(function (){
            var plant_sub_depth_position = $(this).closest('ul').index();
            if(plant_sub_depth_position==0){
               $('#plant_sub_depth_box').css('right','0') 
               $('#plant_sub_depth_box').css('left','auto') 
            }else{
                $('#plant_sub_depth_box').css('left','0') 
                $('#plant_sub_depth_box').css('right','auto') 
                
            }
            if($(this).hasClass('active') == true){
                plant_sub_depth_visible();
               
            }else{
                $('.map_plant_list_box li').removeClass('active');
                plant_sub_depth_hide();
                
            }

        })
        $('.map_plant_box').mouseleave(function (){
            $(this).hide();
        })

    }

});
// 편의시설 2뎁스 함수 
function plant_sub_depth_visible(){
    $('#plant_sub_depth_box').addClass('active')
}
function plant_sub_depth_hide(){
    $('#plant_sub_depth_box').removeClass('active')
}

// 지도 말풍선 함수 
function map_popup_stater(_Num){
    map_popup_item.find('.label').click(function (){
        var _this = $(this);
        map_popup_visible(_this);
    });

    $('.leaflet-popup-close-button').click(function (){
        map_popup_hide();
    });
    $('.leaflet-footer .btn').click(function (){
        map_popup_hide();
    });
    map_popup_item.hover(function(){
        map_popup_check = false;
    },function (){
        map_popup_check = true;
    });
    map_popup_item.focusin(function() {
        map_popup_check = false;
    });

    map_popup_item.focusout(function() {
        map_popup_check = true;
    });
    $(document).click(function (){
        if(map_popup_check){
            map_popup_hide();
        };
    });
    $(document).focusin(function (){
        if(map_popup_check){
            map_popup_hide();
        };
    });
};
function map_popup_visible(_Taget){
    $('.leaflet-popup').removeClass('on');
    _Taget.closest(map_popup_item).find('.leaflet-popup').addClass('on');
};
function map_popup_hide(){
    $('.leaflet-popup').removeClass('on');
};

// 지도 주소 검색 함수 
function address_searcher(_Num){
    var current_one_depth ;
    var _one_depth_mc = $('.pa_list .map_search_list .list')
    _one_depth_mc.click(function (){
        current_one_depth = $(this).index();
        for(var i=0;i<_Num;i++){
            _one_depth_mc.eq(i).removeClass('on');
        }
        $(this).addClass('on');
    });
    // 2뎁스 주소 이벤트
    $('.addressListForm .list .sub_address a').click(function (e){
        e.preventDefault();
    });
    $('.addressListForm .list .sub_address').click(function (e){
        var _this = $(this);
        var _parent_mc = _this.parent().parent();
        var _target_address = _this.parent().parent().find('.sub_list');
        var _address_mc =  $('.addressListForm .list')
        var _address_num = _address_mc.length;
        var current_address = _parent_mc.index();
        for(var i=0;i<_address_num;i++){
            if( i == current_address ){
                if(_this.hasClass('plus')){
                    _this.removeClass('plus').addClass('minus')
                    _target_address.css('display','block')
                }else{
                    _this.removeClass('minus').addClass('plus')
                    _target_address.css('display','none')
                }
            }else{
                _address_mc.eq(i).find('.sub_list').css('display','none');
                _address_mc.eq(i).find('.sub_address').removeClass('minus').addClass('plus');
            }
        }
        
    });
};
