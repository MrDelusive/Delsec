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
        if (money >= 500 && investRentalBike < investRentalBikeMax) {
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
            $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike + "/" + investRentalBikeMax);
            
        }
        return false;
    });

    //Franchise
    $('#btnInvestFranchise').prop('disabled', false);
    $('#btnInvestFranchise').click(function () {
        if (money >= 50000 && investFranchise < investFranchiseMax) {
            money -= 50000;
            totalInvestment += 50000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investFranchise++;
            localStorage.setItem("investFranchise", investFranchise);

            $('#investFranchisePopup').html("Buy Fast-Food Franchise: $50,000 <br />Owned: " + investFranchise + "/" + investFranchiseMax);
        }
        return false;
    });

    //Town House
    $('#btnInvestRealEstate').prop('disabled', false);
    $('#btnInvestRealEstate').click(function () {
        if (money >= 250000 && investSmallProperty < investSmallPropertyMax) {
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

            $('#investRealEstatePopup').html("Buy Rental Town House: $250,000 <br />Owned: " + investSmallProperty + "/" + investSmallPropertyMax);
        }
        return false;
    });

    //3BR
    $('#btnInvest3BR').prop('disabled', false);
    $('#btnInvest3BR').click(function () {
        if (money >= 450000 && investMediumProperty < investMediumPropertyMax) {
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

            $('#invest3BRPopup').html("Buy 3 Bedroom Rental House: $450,000 <br />Owned: " + investMediumProperty + "/" + investMediumPropertyMax);
        }
        return false;
    });

    //Boat
    $('#btnInvestBoat').prop('disabled', false);
    $('#btnInvestBoat').click(function () {
        if (money >= 1100000 && investBoat < investBoatMax) {
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

            $('#investBoatPopup').html("Buy Rental Boat: $1,100,000 <br />Owned: " + investBoat + "/" + investBoatMax);
        }
        return false;
    });

    //Beachside
    $('#btnInvestBeachside').prop('disabled', false);
    $('#btnInvestBeachside').click(function () {
        if (money >= 1450000 && investBeachside < investBeachsideMax) {
            money -= 1450000;
            totalInvestment += 1450000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investBeachside++;
            localStorage.setItem("investBeachside", investBeachside);

            $('#investBeachsidePopup').html("Buy Beachside Property: $1,450,000 <br />Owned: " + investBeachside + "/" + investBeachsideMax);
        }
        return false;
    });

    //Mansion
    $('#btnInvestMansion').prop('disabled', false);
    $('#btnInvestMansion').click(function () {
        if (money >= 2250000 && investMansion < investMansionMax) {
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

            $('#investMansionPopup').html("Buy Mansion: $2,250,000 <br />Owned: " + investMansion + "/" + investMansionMax);
        }
        return false;
    });

    //HighEnd
    $('#btnInvestHighEnd').prop('disabled', false);
    $('#btnInvestHighEnd').click(function () {
        if (money >= 5100000 && investHighEnd < investHighEndMax) {
            money -= 5100000;
            totalInvestment += 5100000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investHighEnd++;
            localStorage.setItem("investHighEnd", investHighEnd);

            $('#investHighEndPopup').html("Buy High-End Apartment: $5,100,000 <br />Owned: " + investHighEnd + "/" + investHighEndMax);
        }
        return false;
    });

    //skyscraperLevel
    $('#btnInvestSkyscraperLevel').prop('disabled', false);
    $('#btnInvestSkyscraperLevel').click(function () {
        if (money >= 9800000 && investSkyscraperLevel < investSkyscraperLevelMax) {
            money -= 9800000;
            totalInvestment += 9800000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investSkyscraperLevel++;
            localStorage.setItem("investSkyscraperLevel", investSkyscraperLevel);

            $('#investSkyscraperLevelPopup').html("Buy Skyscaper Level: $9,800,000 <br />Owned: " + investSkyscraperLevel + "/" + investSkyscraperLevelMax);
        }
        return false;
    });

    //CBDStore
    $('#btnInvestCBDStore').prop('disabled', false);
    $('#btnInvestCBDStore').click(function () {
        if (money >= 22000000 && investCBDStore < investCBDStoreMax) {
            money -= 22000000;
            totalInvestment += 22000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investCBDStore++;
            localStorage.setItem("investCBDStore", investCBDStore);

            $('#investCBDStorePopup').html("Buy CBD Store: $22,000,000 <br />Owned: " + investCBDStore + "/" + investCBDStoreMax);
        }
        return false;
    });

    //CarDealer
    $('#btnInvestCarDealer').prop('disabled', false);
    $('#btnInvestCarDealer').click(function () {
        if (money >= 58000000 && investCarDealer < investCarDealerMax) {
            money -= 58000000;
            totalInvestment += 58000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investCarDealer++;
            localStorage.setItem("investCarDealer", investCarDealer);

            $('#investCarDealerPopup').html("Buy Car Dealership: $58,000,000 <br />Owned: " + investCarDealer + "/" + investCarDealerMax);
        }
        return false;
    });

    //Supermarket
    $('#btnInvestSupermarket').prop('disabled', false);
    $('#btnInvestSupermarket').click(function () {
        if (money >= 172000000 && investCarDealer < investCarDealerMax) {
            money -= 172000000;
            totalInvestment += 172000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investSupermarket++;
            localStorage.setItem("investSupermarket", investSupermarket);

            $('#investSupermarketPopup').html("Buy Supermarket: $172,000,000 <br />Owned: " + investSupermarket + "/" + investSupermarketMax);
        }
        return false;
    });

    //Factory
    $('#btnInvestFactory').prop('disabled', false);
    $('#btnInvestFactory').click(function () {
        if (money >= 420000000 && investFactory < investFactoryMax) {
            money -= 420000000;
            totalInvestment += 420000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investFactory++;
            localStorage.setItem("investFactory", investFactory);

            $('#investFactoryPopup').html("Buy Factory: $420,000,000 <br />Owned: " + investFactory + "/" + investFactoryMax);
        }
        return false;
    });

    //Skyscraper
    $('#btnInvestSkyscraper').prop('disabled', false);
    $('#btnInvestSkyscraper').click(function () {
        if (money >= 880000000 && investSkyscraper < investSkyscraperMax) {
            money -= 880000000;
            totalInvestment += 880000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investSkyscraper++;
            localStorage.setItem("investSkyscraper", investSkyscraper);

            $('#investSkyscraperPopup').html("Buy Skyscraper: $880,000,000 <br />Owned: " + investSkyscraper + "/" + investSkyscraperMax);
        }
        return false;
    });

    //SpacePort
    $('#btnInvestSpacePort').prop('disabled', false);
    $('#btnInvestSpacePort').click(function () {
        if (money >= 1500000000 && investSpacePort < investSpacePortMax) {
            money -= 1500000000;
            totalInvestment += 1500000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
            investSpacePort++;
            localStorage.setItem("investSpacePort", investSpacePort);

            $('#investSpacePortPopup').html("Buy Space Port: $1,500,000,000 <br />Owned: " + investSpacePort + "/" + investSpacePortMax);
        }
        return false;
    });
});