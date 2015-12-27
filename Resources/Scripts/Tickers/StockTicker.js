$(window).load(function () {
   
    setInterval(function () {
        // DELSEC //
        delsecIncrement = totalChunks / 500 + Math.round(100 * Math.random() / 10) / 100;
        if (delsecIncrement > 0)
            $("#delsecChangeImg").attr("src", "Resources/Img/up.png");
        else if (delsecIncrement < 0)
            $("#delsecChangeImg").attr("src", "Resources/Img/down.png");

        delsecCurrentStockPrice += delsecIncrement;
        $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2));
        if (ownedDelsecStocks > 0)
            $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2));
        else
            $('#delsecSellEstimate').html('$0');
        localStorage.setItem("delsecCurrentStockPricev05", delsecCurrentStockPrice);
        // DELSEC END //

        // ENTAQ //
        entaqIncrement = Math.round(100 * (Math.random() * 10 - 5) / 80) / 100;
        if (entaqIncrement > 0)
            $("#entaqChangeImg").attr("src", "Resources/Img/up.png");
        else if (entaqIncrement < 0)
            $("#entaqChangeImg").attr("src", "Resources/Img/down.png");

        entaqCurrentStockPrice += entaqIncrement;
        if (entaqCurrentStockPrice <= 0)
            entaqCurrentStockPrice = 0.01;
        $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2));
        $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2));
        if (ownedEntaqStocks > 0)
            $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2));
        else
            $('#entaqSellEstimate').html('$0');

        localStorage.setItem("entaqCurrentStockPricev05", entaqCurrentStockPrice);
        // ENTAQ END //

        // VENTEX //
        ventexIncrement = Math.round(100 * (Math.random() * 20 - 10) / 100) / 100;
        if (ventexIncrement > 0)
            $("#ventexChangeImg").attr("src", "Resources/Img/up.png");
        else if (ventexIncrement < 0)
            $("#ventexChangeImg").attr("src", "Resources/Img/down.png");

        ventexCurrentStockPrice += ventexIncrement;
        if (ventexCurrentStockPrice <= 0)
            ventexCurrentStockPrice = 0.01;
        $('#ventexStockDisplayCost').html('$' + ventexCurrentStockPrice.toFixed(2));
        $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2));
        if (ownedVentexStocks > 0)
            $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
        else
            $('#ventexSellEstimate').html('$0');

        localStorage.setItem("ventexCurrentStockPricev05", ventexCurrentStockPrice);
        // VENTEX END //

        // ASTOR //
        astorIncrement = Math.round(100 * (Math.random() * 20 - 10) / 100) / 100;
        if (astorIncrement > 0)
            $("#astorChangeImg").attr("src", "Resources/Img/up.png");
        else if (astorIncrement < 0)
            $("#astorChangeImg").attr("src", "Resources/Img/down.png");

        astorCurrentStockPrice += astorIncrement;
        if (astorCurrentStockPrice <= 0)
            astorCurrentStockPrice = 0.01;
        $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2));
        $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2));
        if (ownedAstorStocks > 0)
            $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
        else
            $('#astorSellEstimate').html('$0');

        localStorage.setItem("astorCurrentStockPricev05", astorCurrentStockPrice);
        // ASTOR END //

        // POPBOT //
        // 1 in a million chance of going up.
        popbotIncrement = Math.round(1000000 * Math.random());

        if (popbotIncrement > 0)
            $("#popbotChangeImg").attr("src", "Resources/Img/up.png");
        else if (popbotIncrement < 0)
            $("#popbotChangeImg").attr("src", "Resources/Img/down.png");
        // if the rndm gen is 555,555 then the price will go up. 1 in a million.
        if (popbotIncrement == 555555)
            popbotCurrentStockPrice += popbotIncrement;

        $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2));
        $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2));
        if (ownedPopbotStocks > 0)
            $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
        else
            $('#popbotSellEstimate').html('$0');

        localStorage.setItem("popbotCurrentStockPricev05", popbotCurrentStockPrice);
        // POPBOT END //
    }, 30000);

})(jQuery);