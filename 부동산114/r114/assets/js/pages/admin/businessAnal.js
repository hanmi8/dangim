'use strict';
// Class definition

var KTDatatableBusinessAnal = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":9,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":8,"Status":3,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":7,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":6,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":5,"Status":3,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":4,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":3,"Status":2,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":2,"Status":3,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"},\n' +
            '{"RecordID":1,"Status":1,"Subject":"샘플 상권분석입니다.","RegDate":"2020.10.10"}]');

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
                            'title': '분기',
                            'class': ''
                        },
                        2: {
                            'title': '반기',
                            'class': ''
                        },
                        3: {
                            'title': '년간',
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
                    return '<a href="admin/businessAnalView.html">' + row.Subject  + '</a>';
                },
            }, {
                field: 'RegDate',
                title: '등록일시',
                type: 'date',
                width: 145,
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }, {
                field: 'Actions',
                title: '관리',
                sortable: false,
                width: 125,
                textAlign: 'center',
                template: function() {
                    return '\
							<div>\
                                <a href="admin/businessAnalWrite.html" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details">\
                                    <i class="flaticon2-pen"></i>\
                                </a>\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" title="Delete">\
                                    <i class="flaticon2-trash"></i>\
                                </a>\
                            </div>\
						';
                },
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
    KTDatatableBusinessAnal.init();
});
