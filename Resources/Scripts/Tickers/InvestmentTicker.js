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
        var generatedAmt = totalInvestment / 600; //600 min to pay off money spent / 10h
        var rentalBikeProfit = investRentalBike * 15; //33.33 min
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
        var spaceStationProfit = investSpaceStation * 13953488.37; //215
        var satelliteProfit = investSatellite * 21028037.38; //214
        var moonBaseProfit = investMoonBase * 32863849.77; //213
        var offworldBaseProfit = investOffworldBase * 71090047.39; //211
        var storageYardProfit = investStorageYard * 9523809.52; //210
        var asteroidColonyProfit = investAsteroidColony * 153846153.85 //208
        var freespaceStationProfit = investFreespaceStation * 312195121.95 //205
        var dysonSphereProfit = investDysonSphere * 5000000000; //200

        var totalProfit = generatedAmt + rentalBikeProfit + franchiseProfit + smallPropertyProfit + mediumPropertyProfit + boatProfit + beachsideProfit + mansionProfit + highEndProfit + skyscraperLevelProfit 
            + CBDStoreProfit + carDealerProfit + supermarketProfit + factoryProfit + skyscraperProfit + spacePortProfit + spaceStationProfit + satelliteProfit + moonBaseProfit + offworldBaseProfit + storageYardProfit
            + asteroidColonyProfit + freespaceStationProfit + dysonSphereProfit;
        money += totalProfit;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("money", money);

        $('#healerGenerateAmt').html('Auto Interest Generated: $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
       
        $('#generatorSummaryDisplay').html('+ $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#rentalBikeSummaryDisplay').html('+ $' + rentalBikeProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#franchiseSummaryDisplay').html('+ $' + franchiseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#smallPropertySummaryDisplay').html('+ $' + smallPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#threeBRPropertySummaryDisplay').html('+ $' + mediumPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#boatSummaryDisplay').html('+ $' + boatProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#beachsideSummaryDisplay').html('+ $' + beachsideProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#mansionSummaryDisplay').html('+ $' + mansionProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#highEndSummaryDisplay').html('+ $' + highEndProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#skyscraperLevelSummaryDisplay').html('+ $' + skyscraperLevelProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#CBDStoreSummaryDisplay').html('+ $' + CBDStoreProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#carDealerSummaryDisplay').html('+ $' + carDealerProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#supermarketSummaryDisplay').html('+ $' + supermarketProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#factorySummaryDisplay').html('+ $' + factoryProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#skyscraperSummaryDisplay').html('+ $' + skyscraperProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#spacePortSummaryDisplay').html('+ $' + spacePortProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#spaceStationSummaryDisplay').html('+ $' + spaceStationProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#satelliteSummaryDisplay').html('+ $' + satelliteProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#moonBaseSummaryDisplay').html('+ $' + moonBaseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#offworldBaseSummaryDisplay').html('+ $' + offworldBaseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#storageYardSummaryDisplay').html('+ $' + storageYardProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#asteroidColonySummaryDisplay').html('+ $' + asteroidColonyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#freespaceStationSummaryDisplay').html('+ $' + freespaceStationProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#dysonSphereSummaryDisplay').html('+ $' + dysonSphereProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 60000); 
});