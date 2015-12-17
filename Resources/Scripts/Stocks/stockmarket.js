$(window).load(function () {

    //30 SECOND TICKER                
    setInterval(function () {

        //DELSEC STOCKS always on the rise
        delsecIncrement = totalChunks / 500 + Math.round(100 * Math.random() / 8) / 100;
        if (delsecIncrement > 0)
            $('#delsecChange').html('UP');
        else if (delsecIncrement < 0)
            $('#delsecChange').html('DOWN');

        delsecCurrentStockPrice = delsecCurrentStockPrice + delsecIncrement;
        $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10).toFixed(2));
        if (ownedDelsecStocks > 0)
            $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / 10))).toFixed(2));
        else
            $('#delsecSellEstimate').html('$0');
        
        //ENTAQ

    }, 30000);

})(jQuery);