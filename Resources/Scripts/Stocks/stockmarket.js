$(window).load(function () {
    if (localStorage.getItem("delsecCurrentStockPricev05") === null)
        localStorage.setItem("delsecCurrentStockPricev05", delsecCurrentStockPrice);
    if (localStorage.getItem("ownedDelsecStocksv05") === null)
        localStorage.setItem("ownedDelsecStocksv05", ownedDelsecStocks);

    if (localStorage.getItem("entaqCurrentStockPricev05") === null)
        localStorage.setItem("entaqCurrentStockPricev05", entaqCurrentStockPrice);
    if (localStorage.getItem("ownedEntaqStocksv05") === null)
        localStorage.setItem("ownedEntaqStocksv05", ownedEntaqStocks);

    if (localStorage.getItem("ventexCurrentStockPricev05") === null)
        localStorage.setItem("ventexCurrentStockPricev05", ventexCurrentStockPrice);
    if (localStorage.getItem("ownedVentexStocksv05") === null)
        localStorage.setItem("ownedVentexStocksv05", ownedVentexStocks);

    if (localStorage.getItem("astorCurrentStockPricev05") === null)
        localStorage.setItem("astorCurrentStockPricev05", astorCurrentStockPrice);
    if (localStorage.getItem("ownedAstorStocksv05") === null)
        localStorage.setItem("ownedAstorStocksv05", ownedAstorStocks);

    if (localStorage.getItem("popbotCurrentStockPricev05") === null)
        localStorage.setItem("popbotCurrentStockPricev05", popbotCurrentStockPrice);
    if (localStorage.getItem("ownedPopbotStocksv05") === null)
        localStorage.setItem("ownedPopbotStocksv05", ownedPopbotStocks);

    delsecCurrentStockPrice = parseFloat(localStorage.getItem("delsecCurrentStockPricev05"));
    entaqCurrentStockPrice = parseFloat(localStorage.getItem("entaqCurrentStockPricev05"));
    ventexCurrentStockPrice = parseFloat(localStorage.getItem("ventexCurrentStockPricev05"));
    astorCurrentStockPrice = parseFloat(localStorage.getItem("astorCurrentStockPricev05"));
    popbotCurrentStockPrice = parseFloat(localStorage.getItem("popbotCurrentStockPricev05"));

    ownedDelsecStocks = parseInt(localStorage.getItem("ownedDelsecStocksv05"));
    ownedEntaqStocks = parseInt(localStorage.getItem("ownedEntaqStocksv05"));
    ownedVentexStocks = parseInt(localStorage.getItem("ownedVentexStocksv05"));
    ownedAstorStocks = parseInt(localStorage.getItem("ownedAstorStocksv05"));
    ownedPopbotStocks = parseInt(localStorage.getItem("ownedPopbotStocksv05"));

    if (userClass == "Rogue")
        sellDivider = 20;

    $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
    $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2));
    $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
    if (ownedDelsecStocks > 0)
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2));
    else
        $('#delsecSellEstimate').html('$0');

    $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2));
    $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2));
    $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
    if (ownedEntaqStocks > 0)
        $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / sellDivider))).toFixed(2));
    else
        $('#entaqSellEstimate').html('$0');

    $('#ventexStockDisplayCost').html('$' + ventexCurrentStockPrice.toFixed(2));
    $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2));
    $('#ventexOwnedStocksDisplay').html(ownedVentexStocks);
    if (ownedVentexStocks > 0)
        $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - (ventexCurrentStockPrice / sellDivider))).toFixed(2));
    else
        $('#ventexSellEstimate').html('$0');

    $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2));
    $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2));
    $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
    if (ownedAstorStocks > 0)
        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - (astorCurrentStockPrice / sellDivider))).toFixed(2));
    else
        $('#astorSellEstimate').html('$0');

    $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2));
    $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2));
    $('#popbotOwnedStocksDisplay').html(ownedPopbotStocks);
    if (ownedPopbotStocks > 0)
        $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
    else
        $('#popbotSellEstimate').html('$0');


    setInterval(function () {
        if (ownedDelsecStocks > 0) {
            $("#emailDelsecStockHeading").fadeIn(1);
            if (emailDelsecStockDisplayed == "false") {                
                numUnreadEmails++;
                emailDelsecStockDisplayed = "true";
                localStorage.setItem("emailDelsecStockDisplayedv05", emailDelsecStockDisplayed);                
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
    }, 2000);

})(jQuery);