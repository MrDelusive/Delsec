$(window).load(function () {
    //button was initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);


    $('#btnInvestWiki').click(function () {

        if (money >= 2) {
            money -= 2;
            // disable button for 10s
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                alert("done");
            }, 10000);
                       

        }
        return false;
    });    
})(jQuery);