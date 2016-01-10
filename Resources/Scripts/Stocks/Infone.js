$(document).ready(function () {

    $('#infoneStockDisplayCost').html('$' + infoneCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#infoneCurrentPrice').html('$' + infoneCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#infoneStockSellPrice').html('$' + (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
    $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - (infoneCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyInfoneStocks').click(function () {

        if (money >= infoneCurrentStockPrice) {
            money -= infoneCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedInfoneStocks++;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            infoneSpentAmt += infoneCurrentStockPrice;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyInfoneStocks10').click(function () {

        if (money >= infoneCurrentStockPrice * 10) {
            money -= infoneCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedInfoneStocks += 10;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            infoneSpentAmt += infoneCurrentStockPrice * 10;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyInfoneStocks100').click(function () {

        if (money >= infoneCurrentStockPrice * 100) {
            money -= infoneCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedInfoneStocks += 100;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            infoneSpentAmt += infoneCurrentStockPrice * 100;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyInfoneStocksAll').click(function () {
        var infoneBuyAmt = Math.floor(money / infoneCurrentStockPrice);
        if (infoneBuyAmt >= 1) {
            money -= infoneCurrentStockPrice * infoneBuyAmt;
            localStorage.setItem("money", money);
            ownedInfoneStocks += infoneBuyAmt;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            infoneSpentAmt += infoneCurrentStockPrice * infoneBuyAmt;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellInfoneStocks').click(function () {
        if (ownedInfoneStocks > 0) {
            money += infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = infoneSpentAmt / ownedInfoneStocks;
            infoneSpentAmt -= average;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedInfoneStocks--;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellInfoneStocks10').click(function () {
        if (ownedInfoneStocks > 9) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = infoneSpentAmt / ownedInfoneStocks;
            infoneSpentAmt -= average * 10;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedInfoneStocks -= 10;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellInfoneStocks100').click(function () {
        if (ownedInfoneStocks > 99) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = infoneSpentAmt / ownedInfoneStocks;
            infoneSpentAmt -= average * 100;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedInfoneStocks -= 100;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellInfoneStocksAll').click(function () {
        if (ownedInfoneStocks > 0) {
            money += (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider) * ownedInfoneStocks;
            localStorage.setItem("money", money);
            infoneSpentAmt = 0;
            localStorage.setItem("infoneSpentAmt", infoneSpentAmt);
            $('#infoneMoneySpent').html('$' + infoneSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedInfoneStocks = 0;
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            $('#infoneOwnedStocksDisplay').html(ownedInfoneStocks);
            $('#infoneOwnedStocks').html(ownedInfoneStocks);
            if (ownedInfoneStocks > 0)
                $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#infoneSellEstimate').html('$0.00');
        }
        return false;
    });
});