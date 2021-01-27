'use strict';
// Class definition

var KTDatatableNotice = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":9,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":8,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":7,"Status":3,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":6,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":5,"Status":4,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":4,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":3,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":2,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":1,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"}]');

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
                title: '',
                sortable: false,
                width: 20,
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'Status',
                title: '분류',
                width: 100,
                // callback function support for column rendering
                template: function(row) {
                    var status = {
                        1: {
                            'title': '공지',
                            'class': ''
                        },
                        2: {
                            'title': '안내',
                            'class': ''
                        },
                        3: {
                            'title': '업데이트',
                            'class': ''
                        },
                        4: {
                            'title': '이벤트',
                            'class': ''
                        },
                    };
                    return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                },
                textAlign: 'center',
            }, {
                field: 'Subject',
                title: '제목',
                class: 'w-100',
                template: function(row) {
                    return '<a href="setting/noticeView.html">' + row.Subject  + '</a>';
                },
            }, {
                field: 'RegDate',
                title: '등록일시',
                type: 'date',
                width: 100,
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }],
        });

        $('#kt_datatable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });
        
        $('#kt_datatable_search_status').selectpicker();

    };


    return {
        // Public functions
        init: function() {
            // init dmeo
            demo();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableNotice.init();
});
