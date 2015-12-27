$(window).load(function () {

    setInterval(function () {
        $('#btnBuy3BitCrawler').prop('disabled', true);
        $('#btnBuy4BitCrawler').prop('disabled', true);
        $('#btnBuy6BitCrawler').prop('disabled', true);
        $('#btnBuyRussian6BitCrawler').prop('disabled', true);
        $('#btnBuy8BitCrawler').prop('disabled', true);
        $('#btnBuy12BitCrawler').prop('disabled', true);
        $('#btnBuy16BitCrawler').prop('disabled', true);
        if (money >= 2)
            $('#btnBuy3BitCrawler').prop('disabled', false);
        if( money >= 3.95)
            $('#btnBuy4BitCrawler').prop('disabled', false);
        if (money >= 15)
            $('#btnBuy6BitCrawler').prop('disabled', false);
        if (money >= 22.5)
            $('#btnBuyRussian6BitCrawler').prop('disabled', false);
        if (money >= 58)
            $('#btnBuy8BitCrawler').prop('disabled', false);
        if (money >= 820)
            $('#btnBuy12BitCrawler').prop('disabled', false);
        if (money >= 12288)
            $('#btnBuy16BitCrawler').prop('disabled', false);
    }, 1000);

})(jQuery);