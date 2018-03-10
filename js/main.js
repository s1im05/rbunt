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

        // feedback
        $('#gb_send').on('click', function(e){
            $('#gb_errors').html('');
            $('#gb_send').prop('disabled', true);
            const form = $('#bron_form');
            $.post('?send', form.serialize(), (res) => {
                if (res === true) {
                    location.href = '?s=1';
                } else if (res && res.length) {
                    $('#gb_send').prop('disabled', false);
                    let jqKaptcha = $('#gb_kaptcha'), src = jqKaptcha.attr('src');
                    jqKaptcha.attr('src', src.substr(0, src.indexOf('r=') + 2) + new Date().getTime());
                    for (let mes of res) {
                        $('#gb_errors').append(`<p>${mes}</p>`);
                    }
                }
            });
        });
    });
})(window, jQuery);
