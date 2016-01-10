$(document).ready(function () {

    $('#AUStockDisplayCost').html('$' + AUCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#AUCurrentPrice').html('$' + AUCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#AUStockSellPrice').html('$' + (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#AUOwnedStocksDisplay').html(ownedAUStocks);
    $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - (AUCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuyAUStocks').click(function () {

        if (money >= AUCurrentStockPrice) {
            money -= AUCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedAUStocks++;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            AUSpentAmt += AUCurrentStockPrice;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuyAUStocks10').click(function () {

        if (money >= AUCurrentStockPrice * 10) {
            money -= AUCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedAUStocks += 10;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            AUSpentAmt += AUCurrentStockPrice * 10;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuyAUStocks100').click(function () {

        if (money >= AUCurrentStockPrice * 100) {
            money -= AUCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedAUStocks += 100;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            AUSpentAmt += AUCurrentStockPrice * 100;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuyAUStocksAll').click(function () {
        var AUBuyAmt = Math.floor(money / AUCurrentStockPrice);
        if (AUBuyAmt >= 1) {
            money -= AUCurrentStockPrice * AUBuyAmt;
            localStorage.setItem("money", money);
            ownedAUStocks += AUBuyAmt;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            AUSpentAmt += AUCurrentStockPrice * AUBuyAmt;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAUStocks').click(function () {
        if (ownedAUStocks > 0) {
            money += AUCurrentStockPrice - AUCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = AUSpentAmt / ownedAUStocks;
            AUSpentAmt -= average;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAUStocks--;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAUStocks10').click(function () {
        if (ownedAUStocks > 9) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = AUSpentAmt / ownedAUStocks;
            AUSpentAmt -= average * 10;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAUStocks -= 10;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellAUStocks100').click(function () {
        if (ownedAUStocks > 99) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = AUSpentAmt / ownedAUStocks;
            AUSpentAmt -= average * 100;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAUStocks -= 100;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellAUStocksAll').click(function () {
        if (ownedAUStocks > 0) {
            money += (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider) * ownedAUStocks;
            localStorage.setItem("money", money);
            AUSpentAmt = 0;
            localStorage.setItem("AUSpentAmt", AUSpentAmt);
            $('#AUMoneySpent').html('$' + AUSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedAUStocks = 0;
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            $('#AUOwnedStocksDisplay').html(ownedAUStocks);
            $('#AUOwnedStocks').html(ownedAUStocks);
            if (ownedAUStocks > 0)
                $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#AUSellEstimate').html('$0.00');
        }
        return false;
    });
});