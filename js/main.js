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

        $(document).on('click', '.bron-btn', function(e) {
            e.preventDefault();
            $('#modal').show();
        })
        .on('click', '.modal-close', function(e) {
            e.preventDefault();
            $('.modal-backdrop').hide();
        });

        // bron
        $('#bron_send').on('click', function(e) {
            $(this).prop('disabled', true);
            const form = $('#bron_form');
            $.post(form.data('url'), form.serializeArray(), function(res) {
                form.html('<p>Ваша заявка принята!</p>');
                setTimeout(() => {
                    $('#modal').hide();
                }, 5000);
            });
        });

        // gb
        $('#gb-btn').on('click', function(e) {
            $('#gb_modal').show();
        });
    });
})(window, jQuery);
