$(document).ready(function () {

    setInterval(function () {
        //CRAWLERS
        $('#btnIncrement').prop('disabled', false);
        $('#btnWarriorIncrement').prop('disabled', false);
        $('#btnHealerIncrement').prop('disabled', false);
        $('#btnRogueIncrement').prop('disabled', false);

        $('#btnBuy2BitCrawler').prop('disabled', true);
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

        if (money >= current2BitPrice)
            $('#btnBuy2BitCrawler').prop('disabled', false);
        if (money >= current3BitPrice)
            $('#btnBuy3BitCrawler').prop('disabled', false);
        if (money >= current4BitPrice)
            $('#btnBuy4BitCrawler').prop('disabled', false);
        if (money >= current6BitPrice)
            $('#btnBuy6BitCrawler').prop('disabled', false);
        if (money >= currentRussian6BitPrice)
            $('#btnBuyRussian6BitCrawler').prop('disabled', false);
        if (money >= current8BitPrice)
            $('#btnBuy8BitCrawler').prop('disabled', false);
        if (money >= current12BitPrice)
            $('#btnBuy12BitCrawler').prop('disabled', false);
        if (money >= current16BitPrice)
            $('#btnBuy16BitCrawler').prop('disabled', false);
        if (money >= current4BytePrice)
            $('#btnBuy4ByteCrawler').prop('disabled', false);
        if (money >= current8BytePrice)
            $('#btnBuy8ByteCrawler').prop('disabled', false);
        if (money >= current16BytePrice)
            $('#btnBuy16ByteCrawler').prop('disabled', false);
        if (money >= current32BytePrice)
            $('#btnBuy32ByteCrawler').prop('disabled', false);
        if (money >= current64BytePrice)
            $('#btnBuy64ByteCrawler').prop('disabled', false);

        // INVESTMENTS //
        $('#btnInvestRental').prop('disabled', true);
        if (money >= 500)
            $('#btnInvestRental').prop('disabled', false);

        $('#btnInvestRealEstate').prop('disabled', true);
        if (money >= 250000)
            $('#btnInvestRealEstate').prop('disabled', false);

        $('#btnInvestMansion').prop('disabled', true);
        if (money >= 750000)
            $('#btnInvestMansion').prop('disabled', false);

        // WARRIOR CODE //
        $('#btnWriteEfficiency2Code').prop('disabled', true);
        if (efficiencyCode >= 5)
            $('#btnWriteEfficiency2Code').prop('disabled', false);

        $('#btnWriteScatterLogicCode').prop('disabled', true);
        if (efficiency2Code >= 10)
            $('#btnWriteScatterLogicCode').prop('disabled', false);

        $('#btnScatterLogicBomb').prop('disabled', true);
        if(scatterLogicCode > 0)
            $('#btnScatterLogicBomb').prop('disabled', false);
    }, 1000);

});