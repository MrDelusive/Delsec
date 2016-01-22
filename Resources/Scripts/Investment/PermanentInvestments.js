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
        if (money >= 500 && investRentalBike < 200) {
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
            $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike + "/200");
            
        }
        return false;
    });

    //Town House
    $('#btnInvestRealEstate').prop('disabled', false);
    $('#btnInvestRealEstate').click(function () {
        if (money >= 250000 && investSmallProperty < 50) {
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

            $('#investRealEstatePopup').html("Buy Rental Town House: $250,000 <br />Owned: " + investSmallProperty + "/50");
        }
        return false;
    });

    //3BR
    $('#btnInvest3BR').prop('disabled', false);
    $('#btnInvest3BR').click(function () {
        if (money >= 450000 && investMediumProperty < 50) {
            money -= 450000;
            totalInvestment += 450000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investMediumProperty++;
            localStorage.setItem("investMediumProperty", investMediumProperty);

            $('#invest3BRPopup').html("Buy 3 Bedroom Rental House: $450,000 <br />Owned: " + investMediumProperty + "/50");
        }
        return false;
    });

    //Boat
    $('#btnInvestBoat').prop('disabled', false);
    $('#btnInvestBoat').click(function () {
        if (money >= 1100000 && investBoat < 100) {
            money -= 1100000;
            totalInvestment += 1100000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investBoat++;
            localStorage.setItem("investBoat", investBoat);

            $('#investBoatPopup').html("Buy Rental Boat: $1,100,000 <br />Owned: " + investBoat + "/100");
        }
        return false;
    });

    //Mansion
    $('#btnInvestMansion').prop('disabled', false);
    $('#btnInvestMansion').click(function () {
        if (money >= 2250000 && investMansion < 10) {
            money -= 2250000;
            totalInvestment += 2250000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investMansion++;
            localStorage.setItem("investMansion", investMansion);

            $('#investMansionPopup').html("Buy Mansion: $2,250,000 <br />Owned: " + investMansion + "/10");
        }
        return false;
    });

});