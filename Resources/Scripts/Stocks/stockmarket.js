$(window).load(function () {
    if (localStorage.getItem("delsecCurrentStockPricev04") === null)
        localStorage.setItem("delsecCurrentStockPricev04", delsecCurrentStockPrice);
    if (localStorage.getItem("ownedDelsecStocksv04") === null)
        localStorage.setItem("ownedDelsecStocksv04", ownedDelsecStocks);

    if (localStorage.getItem("entaqCurrentStockPricev04") === null)
        localStorage.setItem("entaqCurrentStockPricev04", entaqCurrentStockPrice);
    if (localStorage.getItem("ownedEntaqStocksv04") === null)
        localStorage.setItem("ownedEntaqStocksv04", ownedEntaqStocks);


    delsecCurrentStockPrice = parseFloat(localStorage.getItem("delsecCurrentStockPricev04"));
    entaqCurrentStockPrice = parseFloat(localStorage.getItem("entaqCurrentStockPricev04"));

    ownedDelsecStocks = parseInt(localStorage.getItem("ownedDelsecStocksv04"));
    ownedEntaqStocks = parseInt(localStorage.getItem("ownedEntaqStocksv04"));
    

    $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
    $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10).toFixed(2));
    $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
    if (ownedDelsecStocks > 0)
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / 10))).toFixed(2));
    else
        $('#delsecSellEstimate').html('$0');

    $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2));
    $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / 10).toFixed(2));
    $('#entaqOwnedStocksDisplay').html(ownedEntaqStocks);
    if (ownedEntaqStocks > 0)
        $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / 10))).toFixed(2));
    else
        $('#entaqSellEstimate').html('$0');

    //30 SECOND TICKER                
    setInterval(function () {

        // DELSEC //
        delsecIncrement = totalChunks / 500 + Math.round(100 * Math.random() / 8) / 100;
        if (delsecIncrement > 0)
            $('#delsecChange').html('UP');
        else if (delsecIncrement < 0)
            $('#delsecChange').html('DOWN');

        delsecCurrentStockPrice += delsecIncrement;
        $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10).toFixed(2));
        if (ownedDelsecStocks > 0)
            $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / 10))).toFixed(2));
        else
            $('#delsecSellEstimate').html('$0');
        localStorage.setItem("delsecCurrentStockPricev04", delsecCurrentStockPrice);        
        // DELSEC END //

        // ENTAQ //
        entaqIncrement = Math.round(100 * (Math.random() * 10 - 5) / 80) / 100;
        if (entaqIncrement > 0)
            $('#entaqChange').html('UP');
        else if (entaqIncrement < 0)
            $('#entaqChange').html('DOWN');

        entaqCurrentStockPrice += entaqIncrement;
        if (entaqCurrentStockPrice < 0)
            entaqCurrentStockPrice = 0.01;
        $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2));
        $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / 10).toFixed(2));
        if (ownedEntaqStocks > 0)
            $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / 10))).toFixed(2));
        else
            $('#entaqSellEstimate').html('$0');
        localStorage.setItem("entaqCurrentStockPricev04", entaqCurrentStockPrice);       
        // ENTAQ END //
    }, 30000);

    setInterval(function () {
        if (ownedDelsecStocks > 0) {
            $("#emailDelsecStockHeading").fadeIn(1);
            if (emailDelsecStockDisplayed == "false") {                
                numUnreadEmails++;
                emailDelsecStockDisplayed = "true";
                localStorage.setItem("emailDelsecStockDisplayedv04", emailDelsecStockDisplayed);                
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
    }, 2000);

})(jQuery);