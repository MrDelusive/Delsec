$(document).ready(function () {

    var timer = 60;
    if (productionLineActive == "true")
        timer = 30;
    $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
    generatorHealerTickerInterval = setInterval(function () {
        if (timer > 1) {
            timer--;
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
        }
        else {
            timer--; // for display
            $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
            timer = 60;
            if (productionLineActive == "true")
                timer = 30;
        }
    }, 1000);
    // investments should take ~4 hours to pay themselves off. Because I want Investments to be the long term option, without worrying about risk

    generatorHealerInterval = setInterval(function () {
        var generatedAmt = totalInvestment / 600; //600 min to pay off money spent / 10h
        if (generatorInvestorActive == 'true')
            generatedAmt += totalInvestment / 600;
        if (generatorProfessionalActive == 'true')
            generatedAmt += totalInvestment / 300;
        if (generatorInsanityActive == 'true')
            generatedAmt += totalInvestment / 200;


            rentalBikeProfit = investRentalBike * 15; //33.33 min
            franchiseProfit = investFranchise * 196.08; //255
            smallPropertyProfit = investSmallProperty * 1000; //250 min
            mediumPropertyProfit = investMediumProperty * 1836.73; //245 min
            boatProfit = investBoat * 4508.2; // 244 min
            beachsideProfit = investBeachside * 5967.08; // 243
            mansionProfit = investMansion * 9375; //240 min
            highEndProfit = investHighEnd * 21702.13; //235 min
            skyscraperLevelProfit = investSkyscraperLevel * 42060.09; //233
            CBDStoreProfit = investCBDStore * 95652.17; //230
            carDealerProfit = investCarDealer * 257777.70; //225
            supermarketProfit = investSupermarket * 774774.77; //222
            factoryProfit = investFactory * 1909090.90; //220
            skyscraperProfit = investSkyscraper * 4093023.26; //215
            spacePortProfit = investSpacePort * 6976744.19; //215
            spaceStationProfit = investSpaceStation * 13953488.37; //215
            satelliteProfit = investSatellite * 21028037.38; //214
            moonBaseProfit = investMoonBase * 32863849.77; //213
            offworldBaseProfit = investOffworldBase * 71090047.39; //211
            storageYardProfit = investStorageYard * 9523809.52; //210
            asteroidColonyProfit = investAsteroidColony * 153846153.85; //208
            freespaceStationProfit = investFreespaceStation * 213333333.33; //300
            universalEnergyGeneratedTick = investDysonSphere * 4000 ;
            

            
        
        totalProfit = generatedAmt + rentalBikeProfit + franchiseProfit + smallPropertyProfit + mediumPropertyProfit + boatProfit + beachsideProfit + mansionProfit + highEndProfit + skyscraperLevelProfit 
            + CBDStoreProfit + carDealerProfit + supermarketProfit + factoryProfit + skyscraperProfit + spacePortProfit + spaceStationProfit + satelliteProfit + moonBaseProfit + offworldBaseProfit + storageYardProfit
            + asteroidColonyProfit + freespaceStationProfit;
        universalEnergyGenerated += universalEnergyGeneratedTick;
        if (universalEnergyGenerated > ENERGYMAX)
            universalEnergyGenerated = ENERGYMAX;
        if (universalEnergyGenerated == ENERGYMAX) {          
            $('#healerCompletedDisplay').css("background-image", "url(Resources/Img/healerCompleted.png)");
            healerQuadrantEarned = 'true';
            localStorage.setItem("healerQuadrantEarned", healerQuadrantEarned);
            $('#center_Main').hide();
            $('#healerVictorySplash').show();
        }
        localStorage.setItem("universalEnergyGenerated", universalEnergyGenerated);
        $('#energyDisplayAmt').html((universalEnergyGenerated / ENERGYMAX * 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "% Completed");

        if (permanentInterestActive == 'true') {
            abilitiesBoostProfit += totalProfit * 0.02;
            $('#abilitiesBoostSummary').show(1);
            $('#abilitiesBoostSummaryDisplay').show(1);
            $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
        }
        if (permanentProfiteerActive == 'true') {
            abilitiesBoostProfit += totalProfit * 0.03;
            $('#abilitiesBoostSummary').show(1);
            $('#abilitiesBoostSummaryDisplay').show(1);
            $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
        }
        if (permanentOverpowerActive == 'true') {
            abilitiesBoostProfit += totalProfit * 0.05;
            $('#abilitiesBoostSummary').show(1);
            $('#abilitiesBoostSummaryDisplay').show(1);
            $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
        }
        totalProfit += abilitiesBoostProfit;

        money += totalProfit + abilitiesBoostProfit;
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
        $('#dysonSphereSummaryDisplay').html('+ ' + universalEnergyGeneratedTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Energy");
        $('#abilitiesBoostSummaryDisplay').html('+ $' + abilitiesBoostProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

        $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, timer * 1000); 
});