$(document).ready(function () {

    var timer = 60;
    $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
    setInterval(function () {
        if (timer > 1) {
            timer--;
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
        }
        else {
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
            timer = 60;
        }
    }, 1000);
    // investments should take ~4 hours to pay themselves off. Because I want Investments to be the long term option, without worrying about risk

    setInterval(function () {      
        var generatedAmt = totalInvestment / 200;
        var rentalBikeProfit = investRentalBike * 15;
        var smallPropertyProfit = investSmallProperty * 1000; //250 min
        var mediumPropertyProfit = investMediumProperty * 1836.73; //245 min
        var boatProfit = investBoat * 4508.2; // 244 min
        var mansionProfit = investMansion * 9375; //240 min

        var totalProfit = generatedAmt + rentalBikeProfit + smallPropertyProfit + mediumPropertyProfit + boatProfit + mansionProfit;
        money += totalProfit;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("money", money);

        $('#healerGenerateAmt').html('Auto Interest Generated: $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#generatorSummary').html('Auto Interest Generated' );
        $('#generatorSummaryDisplay').html('+ $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#rentalBikeSummary').html('x' + investRentalBike + ' Rental Bike(s)');
        $('#rentalBikeSummaryDisplay').html('+ $' + rentalBikeProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#smallPropertySummary').html('x' + investSmallProperty + ' Town House(s)');
        $('#smallPropertySummaryDisplay').html('+ $' + smallPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#threeBRPropertySummary').html('x' + investMediumProperty + ' 3-Bedroom House(s)');
        $('#threeBRPropertySummaryDisplay').html('+ $' + mediumPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#boatSummary').html('x' + investBoat + ' Boat(s)');
        $('#boatSummaryDisplay').html('+ $' + boatProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#mansionSummary').html('x' + investMansion + ' Mansion(s)');
        $('#mansionSummaryDisplay').html('+ $' + mansionProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 60000);

    

});