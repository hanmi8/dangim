'use strict';
// Class definition

var KTDatatableAccount = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":9,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":8,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":2,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":7,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"신규계약","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":6,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":5,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"사용중","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":4,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":3,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":2,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"},\n' +
            '{"RecordID":1,"CorName":"(유)고플린","CorID":"goplan","UserName":"박서준","Log":1,"Date":"2020-10-23","EndDate":"2020-05-08","StartDate":"2019-01-01","Status":"만료","Total":3,"Now":1,"Type":"테스트사용","Group":"회원1","Auth":"일반데이터복사가능"}]');

        var datatable = $('#kt_datatable').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                items: {
                    info: false,
                }
            },

            search: {
                input: $('#kt_datatable_search_query'),
                key: 'generalSearch'
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                selector: {
                    class: ''
                },
                textAlign: 'center',
            }, {
                field: 'CorName',
                title: '법인명',
                textAlign: 'center',
            }, {
                field: 'CorID',
                title: '아이디',
                textAlign: 'center',
            }, {
                field: 'UserName',
                title: '이름',
                textAlign: 'center',
            }, {
                field: 'Log',
                title: '총로그인',
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'Date',
                title: '최근접속일',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }, {
                field: 'EndDate',
                title: '서비스종료일',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }, {
                field: 'StartDate',
                title: '최초등록일',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }, {
                field: 'Status',
                title: '사용여부',
                textAlign: 'center',
            }, {
                field: 'Total',
                title: '전체',
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'Now',
                title: '현재',
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'Type',
                title: '계약구분',
                textAlign: 'center',
            }, {
                field: 'Group',
                title: '그룹',
                textAlign: 'center',
            }, {
                field: 'Auth',
                title: '기능권한',
                textAlign: 'center',
            }],
        });
        
        $('#kt_datatable_search_status').selectpicker();
        
    };

    var initDatatableModal = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":9,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":8,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":2,"Date":"2020-10-23"},\n' +
            '{"RecordID":7,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":6,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":5,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":4,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":3,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":2,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"},\n' +
            '{"RecordID":1,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23"}]');

        
        var modal = $('#kt_datatable_modal');

        var datatable = $('#kt_datatable_3').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 5,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 400, // datatable's body's fixed height
                minHeight: 400,
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                items: {
                    info: false,
                }
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'UserID',
                title: '아이디',
                textAlign: 'center',
            }, {
                field: 'UserName',
                title: '사용자명',
                textAlign: 'center',
            }, {
                field: 'IP',
                title: 'IP',
                textAlign: 'center',
            }, {
                field: 'Status',
                title: '로그인/아웃',
                textAlign: 'center',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': '로그인',
                            'class': ''
                        },
                        2: {
                            'title': '로그아웃',
                            'class': ''
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
            }, {
                field: 'Date',
                title: '발생일시',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }]
        });

        // fix datatable layout after modal shown
        datatable.hide();

        var alreadyReloaded = false;
        modal.on('shown.bs.modal', function() {
            if (!alreadyReloaded) {
                var modalContent = $(this).find('.modal-content');
                datatable.spinnerCallback(true, modalContent);

                datatable.reload();

                datatable.on('datatable-on-layout-updated', function() {
                    datatable.show();
                    datatable.spinnerCallback(false, modalContent);
                    datatable.redraw();
                });

                alreadyReloaded = true;
            }
        });
    };

    var initDatatableModal2 = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":9,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":8,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":2,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":7,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":6,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":5,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":4,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":3,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":2,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"},\n' +
            '{"RecordID":1,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13","Status":1,"DelID":"aa","DelDate":"2020-10-23"}]');

        
        var modal = $('#kt_datatable_modal');

        var datatable = $('#kt_datatable_2').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 5,
            },

            // layout definition
            layout: {
                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
                // height: 450, // datatable's body's fixed height
                footer: false, // display/hide footer
            },

            // column sorting
            sortable: true,

            pagination: true,

            toolbar: {
                items: {
                    info: false,
                }
            },

            // columns definition
            columns: [{
                field: 'RecordID',
                title: '#',
                sortable: false,
                width: 20,
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'UserID',
                title: '아이디',
                textAlign: 'center',
            }, {
                field: 'UserName',
                title: '사용자명',
                textAlign: 'center',
            }, {
                field: 'IP',
                title: 'IP',
                textAlign: 'center',
            }, {
                field: 'RegDate',
                title: '등록일시',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }, {
                field: 'Status',
                title: '사용여부',
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': '사용',
                            'class': ''
                        },
                        2: {
                            'title': '삭제',
                            'class': ' label-light-danger'
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
                textAlign: 'center',
            }, {
                field: 'DelID',
                title: '삭제사용자',
                textAlign: 'center',
            }, {
                field: 'DelDate',
                title: '삭제일시',
                type: 'date',
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }],
        });

        // fix datatable layout after modal shown
        datatable.hide();

        var alreadyReloaded = false;
        modal.on('shown.bs.modal', function() {
            if (!alreadyReloaded) {
                var modalContent = $(this).find('.modal-content');
                datatable.spinnerCallback(true, modalContent);

                datatable.reload();

                datatable.on('datatable-on-layout-updated', function() {
                    datatable.show();
                    datatable.spinnerCallback(false, modalContent);
                    datatable.redraw();
                });

                alreadyReloaded = true;
            }
        });
        
    };

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
            initDatatableModal();
            initDatatableModal2();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableAccount.init();
});
