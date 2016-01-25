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
        var franchiseProfit = investFranchise * 196.08; //255
        var smallPropertyProfit = investSmallProperty * 1000; //250 min
        var mediumPropertyProfit = investMediumProperty * 1836.73; //245 min
        var boatProfit = investBoat * 4508.2; // 244 min
        var beachsideProfit = investBeachside * 5967.08; // 243
        var mansionProfit = investMansion * 9375; //240 min
        var highEndProfit = investHighEnd * 21702.13; //235 min
        var skyscraperLevelProfit = investSkyscraperLevel * 42060.09; //233
        var CBDStoreProfit = investCBDStore * 95652.17; //230
        var carDealerProfit = investCarDealer * 257777.70; //225
        var supermarketProfit = investSupermarket * 774774.77; //222
        var factoryProfit = investFactory * 1909090.90; //220
        var skyscraperProfit = investSkyscraper * 4093023.26; //215
        var spacePortProfit = investSpacePort * 6976744.19; //215

        var totalProfit = generatedAmt + rentalBikeProfit + franchiseProfit + smallPropertyProfit + mediumPropertyProfit + boatProfit + beachsideProfit + mansionProfit + highEndProfit + skyscraperLevelProfit 
            + CBDStoreProfit + carDealerProfit + supermarketProfit + factoryProfit + skyscraperProfit + spacePortProfit;
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

        $('#franchiseSummary').html('x' + investFranchise + ' Fast-Food Franchise(s)');
        $('#franchiseSummaryDisplay').html('+ $' + franchiseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#smallPropertySummary').html('x' + investSmallProperty + ' Town House(s)');
        $('#smallPropertySummaryDisplay').html('+ $' + smallPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#threeBRPropertySummary').html('x' + investMediumProperty + ' 3-Bedroom House(s)');
        $('#threeBRPropertySummaryDisplay').html('+ $' + mediumPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#boatSummary').html('x' + investBoat + ' Boat(s)');
        $('#boatSummaryDisplay').html('+ $' + boatProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#beachsideSummary').html('x' + investBeachside + ' Beachside House(s)');
        $('#beachsideSummaryDisplay').html('+ $' + beachsideProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#mansionSummary').html('x' + investMansion + ' Mansion(s)');
        $('#mansionSummaryDisplay').html('+ $' + mansionProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#highEndSummary').html('x' + investHighEnd + ' High-End Apartment(s)');
        $('#highEndSummaryDisplay').html('+ $' + highEndProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#skyscraperLevelSummary').html('x' + investSkyscraperLevel + ' Skyscraper Level(s)');
        $('#skyscraperLevelSummaryDisplay').html('+ $' + skyscraperLevelProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#CBDStoreSummary').html('x' + investCBDStore + ' Skyscraper Level(s)');
        $('#CBDStoreSummaryDisplay').html('+ $' + CBDStoreProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#carDealerSummary').html('x' + investCarDealer + ' Car Dealership(s)');
        $('#carDealerSummaryDisplay').html('+ $' + carDealerProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#supermarketSummary').html('x' + investSupermarket + ' Supermarket(s)');
        $('#supermarketSummaryDisplay').html('+ $' + supermarketProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#factorySummary').html('x' + investFactory + ' Factory(ies)');
        $('#factorySummaryDisplay').html('+ $' + factoryProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#skyscraperSummary').html('x' + investSkyscraper + ' Skyscraper(s)');
        $('#skyscraperSummaryDisplay').html('+ $' + skyscraperProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#spacePortSummary').html('x' + investSpacePort + ' Space Port');
        $('#spacePortSummaryDisplay').html('+ $' + spacePortProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 60000); 
});