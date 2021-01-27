// Class definition
var KTAccountSelect2 = function() {

    var demos = function() {
        $('#kt_select2_1_modal').select2({
            placeholder: "법인명을 선택해주세요",
            allowClear: true
        });
        $('#kt_select2_2_modal').select2({
            placeholder: "법인명을 선택해주세요",
            allowClear: true
        });
    }


    // Public functions
    return {
        init: function() {
            demos();
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    KTAccountSelect2.init();
});
