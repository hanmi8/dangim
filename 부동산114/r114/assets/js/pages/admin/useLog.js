'use strict';
// Class definition

var KTDatatableUserLog = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":9,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":8,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":7,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":6,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":5,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":4,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":3,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":2,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"},\n' +
            '{"RecordID":1,"IP":"222.222.222.222","Browser":"Chrome","OS":"windows","Device":"PC","RegDate":"2020.10.10"}]');

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
                field: 'IP',
                title: 'IP',
                textAlign: 'center',
            }, {
                field: 'Browser',
                title: '브라우저',
                width: 145,
                textAlign: 'center',
            }, {
                field: 'OS',
                title: 'OS',
                width: 145,
                textAlign: 'center',
            }, {
                field: 'Device',
                title: '접속기기',
                width: 145,
                textAlign: 'center',
            }, {
                field: 'RegDate',
                title: '등록일시',
                type: 'date',
                width: 145,
                format: 'YYYY-MM-DD',
                textAlign: 'center',
            }],
        });

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
    KTDatatableUserLog.init();
});
