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

    setInterval(function () {      
        var generatedAmt = totalInvestment / 200;
        var rentalBikeProfit = investRentalBike * 15;
        var smallPropertyProfit = investSmallProperty * 5000;
        var mansionProfit = investMansion * 15500;

        var totalProfit = generatedAmt + rentalBikeProfit + smallPropertyProfit + mansionProfit;
        money += totalProfit;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("money", money);

        $('#healerGenerateAmt').html('Generated Additional: $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#generatorSummary').html('Auto Interest Generated' );
        $('#generatorSummaryDisplay').html('+ $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#rentalBikeSummary').html('x' + investRentalBike + ' Rental Bike(s)');
        $('#rentalBikeSummaryDisplay').html('+ $' + rentalBikeProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#smallPropertySummary').html('x' + investSmallProperty + ' Small Property(ies)');
        $('#smallPropertySummaryDisplay').html('+ $' + smallPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#mansionSummary').html('x' + investMansion + ' Mansion(s)');
        $('#mansionSummaryDisplay').html('+ $' + mansionProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 60000);

    

});