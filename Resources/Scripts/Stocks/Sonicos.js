$(document).ready(function () {

    $('#sonicosStockDisplayCost').html('$' + sonicosCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#sonicosCurrentPrice').html('$' + sonicosCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#sonicosStockSellPrice').html('$' + (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
    $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - (sonicosCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnBuySonicosStocks').click(function () {

        if (money >= sonicosCurrentStockPrice) {
            money -= sonicosCurrentStockPrice;
            localStorage.setItem("money", money);
            ownedSonicosStocks++;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            sonicosSpentAmt += sonicosCurrentStockPrice;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }

        return false;
    });
    $('#btnBuySonicosStocks10').click(function () {

        if (money >= sonicosCurrentStockPrice * 10) {
            money -= sonicosCurrentStockPrice * 10;
            localStorage.setItem("money", money);
            ownedSonicosStocks += 10;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            sonicosSpentAmt += sonicosCurrentStockPrice * 10;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnBuySonicosStocks100').click(function () {

        if (money >= sonicosCurrentStockPrice * 100) {
            money -= sonicosCurrentStockPrice * 100;
            localStorage.setItem("money", money);
            ownedSonicosStocks += 100;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            sonicosSpentAmt += sonicosCurrentStockPrice * 100;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnBuySonicosStocksAll').click(function () {
        var sonicosBuyAmt = Math.floor(money / sonicosCurrentStockPrice);
        if (sonicosBuyAmt >= 1) {
            money -= sonicosCurrentStockPrice * sonicosBuyAmt;
            localStorage.setItem("money", money);
            ownedSonicosStocks += sonicosBuyAmt;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            sonicosSpentAmt += sonicosCurrentStockPrice * sonicosBuyAmt;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellSonicosStocks').click(function () {
        if (ownedSonicosStocks > 0) {
            money += sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider;
            localStorage.setItem("money", money);
            var average = sonicosSpentAmt / ownedSonicosStocks;
            sonicosSpentAmt -= average;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedSonicosStocks--;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellSonicosStocks10').click(function () {
        if (ownedSonicosStocks > 9) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider) * 10;
            localStorage.setItem("money", money);
            var average = sonicosSpentAmt / ownedSonicosStocks;
            sonicosSpentAmt -= average * 10;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedSonicosStocks -= 10;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });
    $('#btnSellSonicosStocks100').click(function () {
        if (ownedSonicosStocks > 99) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider) * 100;
            localStorage.setItem("money", money);
            var average = sonicosSpentAmt / ownedSonicosStocks;
            sonicosSpentAmt -= average * 100;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedSonicosStocks -= 100;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });

    $('#btnSellSonicosStocksAll').click(function () {
        if (ownedSonicosStocks > 0) {
            money += (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider) * ownedSonicosStocks;
            localStorage.setItem("money", money);
            sonicosSpentAmt = 0;
            localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);
            $('#sonicosMoneySpent').html('$' + sonicosSpentAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ownedSonicosStocks = 0;
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            $('#sonicosOwnedStocksDisplay').html(ownedSonicosStocks);
            if (ownedSonicosStocks > 0)
                $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            else
                $('#sonicosSellEstimate').html('$0.00');
        }
        return false;
    });
});