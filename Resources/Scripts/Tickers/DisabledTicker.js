$(document).ready(function () {

    setInterval(function () {
        //CRAWLERS
        $('#btnIncrement').prop('disabled', false);
        $('#btnWarriorIncrement').prop('disabled', false);
        $('#btnHealerIncrement').prop('disabled', false);
        $('#btnRogueIncrement').prop('disabled', false);

        $('#btnBuy2BitCrawler').prop('disabled', true);
        $('#btnBuy3BitCrawler').prop('disabled', true);
        $('#btnBuy4BitCrawler').prop('disabled', true);
        $('#btnBuy6BitCrawler').prop('disabled', true);
        $('#btnBuyRussian6BitCrawler').prop('disabled', true);
        $('#btnBuy8BitCrawler').prop('disabled', true);
        $('#btnBuy12BitCrawler').prop('disabled', true);
        $('#btnBuy16BitCrawler').prop('disabled', true);
        $('#btnBuy4ByteCrawler').prop('disabled', true);
        $('#btnBuy8ByteCrawler').prop('disabled', true);
        $('#btnBuy16ByteCrawler').prop('disabled', true);
        $('#btnBuy32ByteCrawler').prop('disabled', true);
        $('#btnBuy64ByteCrawler').prop('disabled', true);

        if (money >= current2BitPrice)
            $('#btnBuy2BitCrawler').prop('disabled', false);
        if (money >= current3BitPrice)
            $('#btnBuy3BitCrawler').prop('disabled', false);
        if (money >= current4BitPrice)
            $('#btnBuy4BitCrawler').prop('disabled', false);
        if (money >= current6BitPrice)
            $('#btnBuy6BitCrawler').prop('disabled', false);
        if (money >= currentRussian6BitPrice)
            $('#btnBuyRussian6BitCrawler').prop('disabled', false);
        if (money >= current8BitPrice)
            $('#btnBuy8BitCrawler').prop('disabled', false);
        if (money >= current12BitPrice)
            $('#btnBuy12BitCrawler').prop('disabled', false);
        if (money >= current16BitPrice)
            $('#btnBuy16BitCrawler').prop('disabled', false);
        if (money >= current4BytePrice)
            $('#btnBuy4ByteCrawler').prop('disabled', false);
        if (money >= current8BytePrice)
            $('#btnBuy8ByteCrawler').prop('disabled', false);
        if (money >= current16BytePrice)
            $('#btnBuy16ByteCrawler').prop('disabled', false);
        if (money >= current32BytePrice)
            $('#btnBuy32ByteCrawler').prop('disabled', false);
        if (money >= current64BytePrice)
            $('#btnBuy64ByteCrawler').prop('disabled', false);

        // INVESTMENTS //
        $('#btnInvestRental').prop('disabled', true);
        if (money >= 500 && investRentalBike < investRentalBikeMax)
            $('#btnInvestRental').prop('disabled', false);

        $('#btnInvestFranchise').prop('disabled', true);
        if (money >= 50000 && investFranchise < investFranchiseMax)
            $('#btnInvestFranchise').prop('disabled', false);

        $('#btnInvestRealEstate').prop('disabled', true);
        if (money >= 250000 && investSmallProperty < investSmallPropertyMax)
            $('#btnInvestRealEstate').prop('disabled', false);

        $('#btnInvest3BR').prop('disabled', true);
        if (money >= 450000 && investMediumProperty < investMediumPropertyMax)
            $('#btnInvest3BR').prop('disabled', false);

        $('#btnInvestBoat').prop('disabled', true);
        if (money >= 1100000 && investBoat < investBoatMax)
            $('#btnInvestBoat').prop('disabled', false);

        $('#btnInvestBeachside').prop('disabled', true);
        if (money >= 1450000 && investBeachside < investBeachsideMax)
            $('#btnInvestBeachside').prop('disabled', false);

        $('#btnInvestMansion').prop('disabled', true);
        if (money >= 2250000 && investMansion < investMansionMax)
            $('#btnInvestMansion').prop('disabled', false);

        $('#btnInvestHighEnd').prop('disabled', true);
        if (money >= 5100000 && investHighEnd < investHighEndMax)
            $('#btnInvestHighEnd').prop('disabled', false);

        $('#btnInvestSkyscraperLevel').prop('disabled', true);
        if (money >= 9800000 && investSkyscraperLevel < investSkyscraperLevelMax)
            $('#btnInvestSkyscraperLevel').prop('disabled', false);

        $('#btnInvestCBDStore').prop('disabled', true);
        if (money >= 22000000 && investCBDStore < investCBDStoreMax)
            $('#btnInvestCBDStore').prop('disabled', false);

        $('#btnInvestCarDealer').prop('disabled', true);
        if (money >= 58000000 && investCarDealer < investCarDealerMax)
            $('#btnInvestCarDealer').prop('disabled', false);

        $('#btnInvestSupermarket').prop('disabled', true);
        if (money >= 172000000 && investSupermarket < investSupermarketMax)
            $('#btnInvestSupermarket').prop('disabled', false);

        $('#btnInvestFactory').prop('disabled', true);
        if (money >= 420000000 && investFactory < investFactoryMax)
            $('#btnInvestFactory').prop('disabled', false);

        $('#btnInvestSkyscraper').prop('disabled', true);
        if (money >= 880000000 && investSkyscraper < investSkyscraperMax)
            $('#btnInvestSkyscraper').prop('disabled', false);

        $('#btnInvestSpacePort').prop('disabled', true);
        if (money >= 1500000000 && investSpacePort < investSpacePortMax)
            $('#btnInvestSpacePort').prop('disabled', false);

        $('#btnInvestSpaceStation').prop('disabled', true);
        if (money >= 3000000000 && investSpaceStation < investSpaceStationMax)
            $('#btnInvestSpaceStation').prop('disabled', false);

        $('#btnInvestSatellite').prop('disabled', true);
        if (money >= 4500000000 && investSatellite < investSatelliteMax)
            $('#btnInvestSatellite').prop('disabled', false);

        $('#btnInvestMoonBase').prop('disabled', true);
        if (money >= 7000000000 && investMoonBase < investMoonBaseMax)
            $('#btnInvestMoonBase').prop('disabled', false);

        $('#btnInvestOffworldBase').prop('disabled', true);
        if (money >= 15000000000 && investOffworldBase < investOffworldBaseMax)
            $('#btnInvestOffworldBase').prop('disabled', false);

        $('#btnInvestStorageYard').prop('disabled', true);
        if (money >= 20000000000 && investStorageYard < investStorageYardMax)
            $('#btnInvestStorageYard').prop('disabled', false);

        $('#btnInvestAsteroidColony').prop('disabled', true);
        if (money >= 32000000000 && investAsteroidColony < investAsteroidColonyMax)
            $('#btnInvestAsteroidColony').prop('disabled', false);

        $('#btnInvestFreespaceStation').prop('disabled', true);
        if (money >= 64000000000 && investFreespaceStation < investFreespaceStationMax)
            $('#btnInvestFreespaceStation').prop('disabled', false);

        $('#btnInvestDysonSphere').prop('disabled', true);
        if (money >= 1000000000000 && investDysonSphere < investDysonSphereMax)
            $('#btnInvestDysonSphere').prop('disabled', false);


        // WARRIOR CODE //
        $('#btnWriteEfficiency2Code').prop('disabled', true);
        if (efficiencyCode >= 5)
            $('#btnWriteEfficiency2Code').prop('disabled', false);

        $('#btnWriteScatterLogicCode').prop('disabled', true);
        if (efficiency2Code >= 10)
            $('#btnWriteScatterLogicCode').prop('disabled', false);

        $('#btnScatterLogicBomb').prop('disabled', true);
        if(scatterLogicCode > 0)
            $('#btnScatterLogicBomb').prop('disabled', false);
    }, 1000);

});