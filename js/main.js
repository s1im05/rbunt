import '../css/bootstrap.css';
import '../css/styles.scss';

import '../node_modules/jquery/dist/jquery'
import '../node_modules/bootstrap/dist/js/bootstrap'

((w, $, u) => {
    $(function (){
        const resize = () => {
            $('.img-zoomable').each(function(){
                $(this).height($(this).width());
            });
            $('#xs-menu').hide();
        };
        $(w).on('resize', resize).trigger('resize');

        $('#xs-menu-toggle').on('tap click', function(e) {
            e.preventDefault();
            $('#xs-menu').toggle();
        });
    });
})(window, jQuery);
