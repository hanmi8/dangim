'use strict';
// Class definition

var KTDatatableCorporation = function() {
    // Private functions

    // demo initializer
    var demo = function() {
        var dataJSONArray = JSON.parse('[{"RecordID":10,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":9,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":8,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":7,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":6,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":5,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":4,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":3,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":2,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"},\n' +
            '{"RecordID":1,"CorName":"(유)고플린","CorNum":"000-00-0000","CorType":"건설","CorType2":"시공사","CorType3":"영업","UserName":"홍길동","Tel":"010-1234-1234","Date":"2020-10-23","Date":"2020-05-08"}]');

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
                field: 'CorNum',
                title: '사업자등록증',
                textAlign: 'center',
            }, {
                field: 'CorType',
                title: '법인구분',
                textAlign: 'center',
            }, {
                field: 'CorType2',
                title: '법인구분',
                textAlign: 'center',
            }, {
                field: 'CorType3',
                title: '법인구분',
                type: 'number',
                textAlign: 'center',
            }, {
                field: 'UserName',
                title: '담당자',
                textAlign: 'center',
            }, {
                field: 'Tel',
                title: '담당자연락처',
                textAlign: 'center',
            }, {
                field: 'Date',
                title: '등록일',
                type: 'date',
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
                                <a href="admin/corporationMod.html" class="btn btn-sm btn-clean btn-icon mr-2" title="Edit details" >\
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
    KTDatatableCorporation.init();
});
