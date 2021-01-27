// Class definition
var KTnoUiSliderGIS = function() {


    var demo1 = function() {
        // init slider
        var slider = document.getElementById('kt_nouislider_1');

        noUiSlider.create(slider, {
            start: [2018, 2020],
            connect: true,
            range: {
                'min': 2018,
                'max': 2020
            },
            pips: {
                mode: 'values',
                values: [2018, 2019, 2020],
                density: 100
            }
        });
        
    }

    return {
        // public functions
        init: function() {
            demo1();
        }
    };
}();

jQuery(document).ready(function() {
    KTnoUiSliderGIS.init();
});
