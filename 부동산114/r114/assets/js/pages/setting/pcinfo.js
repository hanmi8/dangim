'use strict';
// Class definition

var KTDatatablePCInfo = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        // 201215 수정 
        // var dataJSONArray = JSON.parse('[{"RecordID":10,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":9,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":8,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":2,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":7,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":6,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":5,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":4,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":3,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":2,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        //     '{"RecordID":1,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"}]');
        var dataJSONArray = JSON.parse('[{"Number":10,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":9,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":8,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":2,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":7,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":6,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":5,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":4,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":3,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":2,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"},\n' +
        '{"Number":1,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","RegDate":"2020-10-13 오전 11:38:01","Status":1,"DelID":"aa","DelDate":"2020-10-23 오후 4:02:11"}]');

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
            columns: [
            //     {
            //     field: 'RecordID',
            //     title: '#',
            //     sortable: false,
            //     width: 20,
            //     type: 'number',
            //     selector: {
            //         class: ''
            //     },
            //     textAlign: 'center',
            // }, 
            {
                field: 'Number',
                title: 'No',
                width: 40,
                textAlign: 'center',
            },
            {
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
            }, {
                field: 'Status',
                width: 80,
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
            }, {
                field: 'Actions',
                title: '접속정보',
                sortable: false,
                width: 125,
                textAlign: 'center',
                template: function(row) {
                    return '\
                            <button data-record-id="' + row.RecordID + '" class="btn btn-sm btn-clean" data-toggle="modal" data-target="#kt_datatable_modal" title="View records">\
                                <i class="flaticon2-document"></i> 접속정보보기\
                            </button>';
                },
            }],
        });

        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });
        
        $('#kt_datatable_search_status').selectpicker();
        
    };

    var initDatatableModal = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":9,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":8,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":2,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":7,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":6,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":5,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":4,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":3,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":2,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"},\n' +
            '{"RecordID":1,"UserID":"mabs","UserName":"박선종","IP":"211.11.11.12","Status":1,"Date":"2020-10-23 오후 4:02:11"}]');

        var modal = $('#kt_datatable_modal');

        var datatable = $('#kt_datatable_2').KTDatatable({
            // datasource definition
            data: {
                type: 'local',
                source: dataJSONArray,
                pageSize: 10,
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

    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
            initDatatableModal()
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatablePCInfo.init();
});
