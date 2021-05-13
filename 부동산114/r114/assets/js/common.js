$(function () {
    scrollHorizon();
    // fixed();
    var tabEl = document.querySelectorAll('a[data-bs-toggle="tab"]')
    tabEl.forEach(function(e){
        e.addEventListener('shown.bs.tab', function (event) {
            event.target // newly activated tab
            event.relatedTarget // previous active tab
            var cardBodyTarget = $($(event.target).attr('data-bs-target')).children('.card-body')
            fixed(cardBodyTarget)
        })
    })

    $('a').click(function(e){
        if($(e.target).attr('href') === '#' || $(e.target).parents().attr('href') === '#'){
            e.preventDefault();
        }
    })
    // 검색옵션 folding
    $('.nav-link').click(function(){
        if(!$(this).parents().hasClass('nav-tabs-second')){
            $('.detailSearch').hide();
        }
    })
    $('.searchOption').click(function(){
        $(this).children('i').toggleClass('fa-chevron-down fa-chevron-up');
        $(this).parents('.tab-pane').find('.detailSearch').slideToggle(200);
        $('.card-body').toggleClass('overflow-hidden');
        $('.fixedWrap').toggleClass('large');
    })
    $('.detailSearch-close').click(function(){
        $('.detailSearch').slideUp(200);
        $('.card-body').removeClass('overflow-hidden');
        $('.fixedWrap').removeClass('large')
    });

    $('.card-body').css('height',$(window).height() - $('.card-body').offset().top - 20);
    $(window).resize(function(){
        $('.card-body').css('height',$(window).height() - $('.card-body').offset().top - 20);
    });

    // fixed
    // function fixed(target) {
    //     $(target).scrollTop()
    //     var cardBody = document.querySelectorAll('.card-body');
    //     // scroll reset
    //     $(target).scrollTop(0);
    //     if(!target){  // target 설정이 되지 않았을 경우
    //         target = cardBody[0]
    //     }
    //     // title
    //     var section = [];
    //     var $_contentDiv = $(target).find('.detailContent').children('div');
    //     $_contentDiv.each(function(i, e) {
    //         section[i] = {
    //             from: e.offsetTop,
    //             to: i+1 == $_contentDiv.length ? 9999 : $_contentDiv[i+1].offsetTop,
    //             title: $(e).find('h3').html(),
    //             tableHeader: $(e).find('.table-header').clone(),
    //         };
    //     });
    //
    //     var fixedWrapTop = $(target).find('.fixedWrap').position().top;
    //     var fixedWrapHeight = $(target).find('.fixedWrap').outerHeight();
    //     var tableHeaderWrapHeight = $(target).find('.tableHeaderWrap').outerHeight();
    //
    //     var idx = 0;
    //
    //     $(target).scroll(function(){
    //         var cardBodyScrollTop = $(target).scrollTop();
    //         // fixedWrap
    //         if(cardBodyScrollTop > fixedWrapTop){
    //             $(target).find('.fixedWrap').addClass('on');
    //             $(target).find('.fixedWrap').css('top', $(this).offset().top + 1);
    //             $(target).find('.fixedWrap').next('div').css('margin-top',180)
    //         }else{
    //             $(target).find('.fixedWrap').removeClass('on');
    //             $(target).find('.fixedWrap').next('div').css('margin-top','')
    //             $(target).find('.fixedWrap').removeClass('large')
    //         }
    //
    //         section.forEach(function(e){
    //             if(e.from < (cardBodyScrollTop+fixedWrapHeight) && (cardBodyScrollTop+fixedWrapHeight) < e.to ) {
    //                 $(target).find('.tableHeaderWrap').html(e.tableHeader)
    //             }
    //             if(e.from < (cardBodyScrollTop+fixedWrapHeight-tableHeaderWrapHeight) && (cardBodyScrollTop+fixedWrapHeight-tableHeaderWrapHeight) < e.to ) {
    //                 $(target).find('.changeTitle').html(e.title);
    //             }
    //         })
    //         console.log('fixedWrapTop : ' + fixedWrapTop)
    //         console.log('fixedWrapHeight : ' + fixedWrapHeight)
    //     })
    // }

    function scrollHorizon() {
        var scrollHorizon = $('.scrollHorizon').width();
        $('.shoppingTypeList').each(function(){
            var shoppingTypeWidth = $(this).children('li').length * 110;
            $('.shoppingTypeList').css('width', shoppingTypeWidth + 'px');
            var pos = 0;
            $('.scrollHorizonWrap').children('a').click(function(){
                if($(this).hasClass('right')) {
                    if(pos > scrollHorizon - shoppingTypeWidth){
                        pos -= 110;
                        $('.shoppingTypeList').animate({'left' : pos + 'px'}, 200);
                    }
                }else if($(this).hasClass('left')){
                    if(pos < 0){
                        pos += 110;
                        $('.shoppingTypeList').animate({'left': pos + 'px'},200);
                    }
                }
            })
        })

    }

    // area btn
    $('.area-btn').click(function(){
        $(this).parent('.btnWrap-group').children('button').removeClass('btn-outline-danger');
        $(this).parent('.btnWrap-group').children('button').addClass('btn-outline-darklight');
        $(this).removeClass('btn-outline-darklight');
        $(this).addClass('btn-outline-danger');
        var areaID = $(this).attr('data-target');
        $(this).parents('.form-group').find('.area-wrap').hide();
        $(areaID).show();
    })

    // 사용자로그분석 toggle-btn

    // tab
    $('.dashboard').find('.nav-link').click(function(){
        $(this).parents('.nav').find('.nav-link').removeClass('active')
        $(this).addClass('active');
        var tabID = $(this).attr('data-bs-target');

        if($(this).parents().hasClass('navTabs')){
            $(this).parents('.navTabs').next('.tab-content').children('.tab-pane').removeClass('show active');
        }else{
            $(this).parents('.nav').next('.tab-content').children('.tab-pane').removeClass('show active');
            $(tabID).addClass('show active');
        }
    })


});
