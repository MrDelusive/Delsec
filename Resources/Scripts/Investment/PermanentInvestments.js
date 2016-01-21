$(document).ready(function () {

    $('#btnPermanentInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#permanentInvestments").show();
        return false;
    });

    //RENTAL INVEST
    $('#btnInvestRental').prop('disabled', false);
    $('#btnInvestRental').click(function () {
        if (money >= 500) {
            money -= 500;
            totalInvestment += 500;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investRentalBike++;
            localStorage.setItem("investRentalBike", investRentalBike);
            $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike);
            
        }
        return false;
    });

    //Real Estate
    $('#btnInvestRealEstate').prop('disabled', false);
    $('#btnInvestRealEstate').click(function () {
        if (money >= 250000) {
            money -= 250000;
            totalInvestment += 250000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investSmallProperty++;
            localStorage.setItem("investSmallProperty", investSmallProperty);

            $('#investRealEstatePopup').html("Buy Small Rental Property: $250,000 <br />Owned: " + investSmallProperty);
        }
        return false;
    });

    //Mansion
    $('#btnInvestMansion').prop('disabled', false);
    $('#btnInvestMansion').click(function () {
        if (money >= 750000) {
            money -= 750000;
            totalInvestment += 750000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investMansion++;
            localStorage.setItem("investMansion", investMansion);

            $('#investMansionPopup').html("Buy Mansion: $750,000 <br />Owned: " + investMansion);
        }
        return false;
    });

});