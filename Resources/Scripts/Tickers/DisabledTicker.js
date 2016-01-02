$(document).ready(function () {

    setInterval(function () {
        $('#btnIncrement').prop('disabled', false);
        $('#btnWarriorIncrement').prop('disabled', false);
        $('#btnHealerIncrement').prop('disabled', false);
        $('#btnRogueIncrement').prop('disabled', false);

        $('#btnBuy3BitCrawler').prop('disabled', true);
        $('#btnBuy4BitCrawler').prop('disabled', true);
        $('#btnBuy6BitCrawler').prop('disabled', true);
        $('#btnBuyRussian6BitCrawler').prop('disabled', true);
        $('#btnBuy8BitCrawler').prop('disabled', true);
        $('#btnBuy12BitCrawler').prop('disabled', true);
        $('#btnBuy16BitCrawler').prop('disabled', true);
        $('#btnBuy4ByteCrawler').prop('disabled', true);
        $('#btnBuy8ByteCrawler').prop('disabled', true);
        $('#btnBuy16ByteCrawler').prop('disabled', true);
        $('#btnBuy32ByteCrawler').prop('disabled', true);
        $('#btnBuy64ByteCrawler').prop('disabled', true);

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
        if (money >= 24248.32)
            $('#btnBuy4ByteCrawler').prop('disabled', false);
        if (money >= 47841.28)
            $('#btnBuy8ByteCrawler').prop('disabled', false);
        if (money >= 94371.84)
            $('#btnBuy16ByteCrawler').prop('disabled', false);
        if (money >= 186122.24)
            $('#btnBuy32ByteCrawler').prop('disabled', false);
        if (money >= 367001.6)
            $('#btnBuy64ByteCrawler').prop('disabled', false);
    }, 1000);

})(jQuery);