$(document).ready(function () {

    if (localStorage.getItem("wikiActive") === null)
        localStorage.setItem("wikiActive", wikiActive);
    if (localStorage.getItem("twitchActive") === null)
        localStorage.setItem("twitchActive", twitchActive);
    if (localStorage.getItem("punchActive") === null)
        localStorage.setItem("punchActive", punchActive);
    if (localStorage.getItem("websiteActive") === null)
        localStorage.setItem("websiteActive", websiteActive);
    if (localStorage.getItem("pokerActive") === null)
        localStorage.setItem("pokerActive", pokerActive);
    if (localStorage.getItem("raceActive") === null)
        localStorage.setItem("raceActive", raceActive);
    if (localStorage.getItem("socialMediaActive") === null)
        localStorage.setItem("socialMediaActive", socialMediaActive);
    if (localStorage.getItem("blueChipActive") === null)
        localStorage.setItem("blueChipActive", blueChipActive);
    if (localStorage.getItem("selfImprovementActive") === null)
        localStorage.setItem("selfImprovementActive", selfImprovementActive);
    if (localStorage.getItem("selfImprovement2Active") === null)
        localStorage.setItem("selfImprovement2Active", selfImprovement2Active);
    if (localStorage.getItem("energyActive") === null)
        localStorage.setItem("energyActive", energyActive);
    if (localStorage.getItem("superHeroActive") === null)
        localStorage.setItem("superHeroActive", superHeroActive);
    if (localStorage.getItem("movieActive") === null)
        localStorage.setItem("movieActive", movieActive);
    if (localStorage.getItem("experimentalActive") === null)
        localStorage.setItem("experimentalActive", experimentalActive);
    if (localStorage.getItem("timeTravelActive") === null)
        localStorage.setItem("timeTravelActive", timeTravelActive);
    if (localStorage.getItem("mysteryActive") === null)
        localStorage.setItem("mysteryActive", mysteryActive);

    if (localStorage.getItem("goldbotActive") === null)
        localStorage.setItem("goldbotActive", goldbotActive);
    if (localStorage.getItem("gameActive") === null)
        localStorage.setItem("gameActive", gameActive);
    if (localStorage.getItem("goldActive") === null)
        localStorage.setItem("goldActive", goldActive);
    if (localStorage.getItem("CDActive") === null)
        localStorage.setItem("CDActive", CDActive);


    if (localStorage.getItem("investRentalBike") === null)
        localStorage.setItem("investRentalBike", investRentalBike);
    if (localStorage.getItem("investFranchise") === null)
        localStorage.setItem("investFranchise", investFranchise);
    if (localStorage.getItem("investSmallProperty") === null)
        localStorage.setItem("investSmallProperty", investSmallProperty);
    if (localStorage.getItem("investMediumProperty") === null)
        localStorage.setItem("investMediumProperty", investMediumProperty);
    if (localStorage.getItem("investBoat") === null)
        localStorage.setItem("investBoat", investBoat);
    if (localStorage.getItem("investBeachside") === null)
        localStorage.setItem("investBeachside", investBeachside);
    if (localStorage.getItem("investMansion") === null)
        localStorage.setItem("investMansion", investMansion);
    if (localStorage.getItem("investHighEnd") === null)
        localStorage.setItem("investHighEnd", investHighEnd);
    if (localStorage.getItem("investSkyscraperLevel") === null)
        localStorage.setItem("investSkyscraperLevel", investSkyscraperLevel);
    if (localStorage.getItem("investCBDStore") === null)
        localStorage.setItem("investCBDStore", investCBDStore);
    if (localStorage.getItem("investCarDealer") === null)
        localStorage.setItem("investCarDealer", investCarDealer);
    if (localStorage.getItem("investSupermarket") === null)
        localStorage.setItem("investSupermarket", investSupermarket);
    if (localStorage.getItem("investFactory") === null)
        localStorage.setItem("investFactory", investFactory);
    if (localStorage.getItem("investSkyscraper") === null)
        localStorage.setItem("investSkyscraper", investSkyscraper);
    if (localStorage.getItem("investSpacePort") === null)
        localStorage.setItem("investSpacePort", investSpacePort);


    if (typeof (Storage) !== "undefined") {

        wikiActive = localStorage.getItem("wikiActive");
        twitchActive = localStorage.getItem("twitchActive")
        punchActive = localStorage.getItem("punchActive");
        websiteActive = localStorage.getItem("websiteActive")
        pokerActive = localStorage.getItem("pokerActive");
        raceActive = localStorage.getItem("raceActive");
        socialMediaActive = localStorage.getItem("socialMediaActive");
        blueChipActive = localStorage.getItem("blueChipActive")
        selfImprovementActive = localStorage.getItem("selfImprovementActive");
        selfImprovement2Active = localStorage.getItem("selfImprovement2Active")
        energyActive = localStorage.getItem("energyActive");
        superHeroActive = localStorage.getItem("superHeroActive")
        movieActive = localStorage.getItem("movieActive");
        experimentalActive = localStorage.getItem("experimentalActive");
        timeTravelActive = localStorage.getItem("timeTravelActive");
        mysteryActive = localStorage.getItem("mysteryActive");

        goldbotActive = localStorage.getItem("goldbotActive");
        gameActive = localStorage.getItem("gameActive");
        goldActive = localStorage.getItem("goldActive");
        CDActive = localStorage.getItem("CDActive");

        // If it was still active during reset, refund the player.
        if (wikiActive == "true") {
            wikiActive = "false";
            localStorage.setItem("wikiActive", wikiActive);
            money += 2;
            totalInvestment -= 2;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (twitchActive == "true") {
            twitchActive = "false";
            localStorage.setItem("twitchActive", twitchActive);
            money += 5;
            totalInvestment -= 5;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (punchActive == "true") {
            punchActive = "false";
            localStorage.setItem("punchActive", punchActive);
            money += 10;
            totalInvestment -= 10;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (websiteActive == "true") {
            websiteActive = "false";
            localStorage.setItem("websiteActive", websiteActive);
            money += 25;
            totalInvestment -= 25;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (pokerActive == "true") {
            pokerActive = "false";
            localStorage.setItem("pokerActive", pokerActive);
            money += 100;
            totalInvestment -= 100;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (raceActive == "true") {
            raceActive = "false";
            localStorage.setItem("raceActive", raceActive);
            money += 1000;
            totalInvestment -= 1000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (socialMediaActive == "true") {
            socialMediaActive = "false";
            localStorage.setItem("socialMediaActive", socialMediaActive);
            money += 5000;
            totalInvestment -= 5000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (blueChipActive == "true") {
            blueChipActive = "false";
            localStorage.setItem("blueChipActive", blueChipActive);
            money += 10000;
            totalInvestment -= 10000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (selfImprovementActive == "true") {
            selfImprovementActive = "false";
            localStorage.setItem("selfImprovementActive", selfImprovementActive);
            money += 25000;
            totalInvestment -= 25000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (selfImprovement2Active == "true") {
            selfImprovement2Active = "false";
            localStorage.setItem("selfImprovement2Active", selfImprovement2Active);
            money += 50000;
            totalInvestment -= 50000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (energyActive == "true") {
            energyActive = "false";
            localStorage.setItem("energyActive", energyActive);
            money += 100000;
            totalInvestment -= 100000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (superHeroActive == "true") {
            superHeroActive = "false";
            localStorage.setItem("superHeroActive", superHeroActive);
            money += 2000000;
            totalInvestment -= 2000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (movieActive == "true") {
            movieActive = "false";
            localStorage.setItem("movieActive", movieActive);
            money += 10000000;
            totalInvestment -= 10000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (experimentalActive == "true") {
            experimentalActive = "false";
            localStorage.setItem("experimentalActive", experimentalActive);
            money += 50000000;
            totalInvestment -= 50000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (timeTravelActive == "true") {
            timeTravelActive = "false";
            localStorage.setItem("timeTravelActive", timeTravelActive);
            money += 250000000;
            totalInvestment -= 250000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (mysteryActive == "true") {
            mysteryActive = "false";
            localStorage.setItem("mysteryActive", mysteryActive);
            money += 1000000000;
            totalInvestment -= 1000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        //LONG TERM
        if (goldbotActive == "true") {
            goldbotActive = "false";
            localStorage.setItem("goldbotActive", goldbotActive);
            money += 3;
            totalInvestment -= 3;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (gameActive == "true") {
            gameActive = "false";
            localStorage.setItem("gameActive", gameActive);
            money += 25;
            totalInvestment -= 25;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (goldActive == "true") {
            goldActive = "false";
            localStorage.setItem("goldActive", goldActive);
            money += 1000;
            totalInvestment -= 1000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        
        if (CDActive == "true") {
            CDActive = "false";
            localStorage.setItem("CDActive", CDActive);
            money += 25000;
            totalInvestment -= 25000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (userClass == "Healer") {

            investRentalBike = localStorage.getItem("investRentalBike");
            investFranchise = localStorage.getItem("investFranchise");
            investSmallProperty = localStorage.getItem("investSmallProperty");
            investMediumProperty = localStorage.getItem("investMediumProperty");
            investBoat = localStorage.getItem("investBoat");
            investBeachside = localStorage.getItem("investBeachside");
            investMansion = localStorage.getItem("investMansion");
            investHighEnd = localStorage.getItem("investHighEnd");
            investSkyscraperLevel = localStorage.getItem("investSkyscraperLevel"); 
            investCBDStore = localStorage.getItem("investCBDStore");
            investCarDealer = localStorage.getItem("investCarDealer");
            investSupermarket = localStorage.getItem("investSupermarket");
            investFactory = localStorage.getItem("investFactory");
            investSkyscraper = localStorage.getItem("investSkyscraper");
            investSpacePort = localStorage.getItem("investSpacePort");
        }

        $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike + "/" + investRentalBikeMax);
        $('#investFranchisePopup').html("Buy Fast-Food Franchise: $50,000 <br />Owned: " + investFranchise + "/" + investFranchiseMax);
        $('#investRealEstatePopup').html("Buy Rental Town House: $250,000 <br />Owned: " + investSmallProperty + "/" + investSmallPropertyMax);
        $('#invest3BRPopup').html("Buy 3 Bedroom Rental House: $450,000 <br />Owned: " + investMediumProperty + "/" + investMediumPropertyMax);
        $('#investBoatPopup').html("Buy Rental Boat: $1,100,000 <br />Owned: " + investBoat + "/" + investBoatMax);
        $('#investBeachsidePopup').html("Buy Beachside Property: $1,450,000 <br />Owned: " + investBeachside + "/" + investBeachsideMax);
        $('#investMansionPopup').html("Buy Mansion: $2,250,000 <br />Owned: " + investMansion + "/" + investMansionMax);
        $('#investHighEndPopup').html("Buy High-End Apartment: $5,100,000 <br />Owned: " + investHighEnd + "/" + investHighEndMax);
        $('#investSkyscraperLevelPopup').html("Buy Skyscaper Level: $9,800,000 <br />Owned: " + investSkyscraperLevel + "/" + investSkyscraperLevelMax);
        $('#investCBDStorePopup').html("Buy CBD Store: $22,000,000 <br />Owned: " + investCBDStore + "/" + investCBDStoreMax);
        $('#investCarDealerPopup').html("Buy Car Dealership: $58,000,000 <br />Owned: " + investCarDealer + "/" + investCarDealerMax);
        $('#investSupermarketPopup').html("Buy Supermarket: $172,000,000 <br />Owned: " + investSupermarket + "/" + investSupermarketMax);
        $('#investFactoryPopup').html("Buy Factory: $420,000,000 <br />Owned: " + investFactory + "/" + investFactoryMax);
        $('#investSkyscraperPopup').html("Buy Skyscraper: $880,000,000 <br />Owned: " + investSkyscraper + "/" + investSkyscraperMax);
        $('#investSpacePortPopup').html("Buy Space Port: $1,500,000,000 <br />Owned: " + investSpacePort + "/" + investSpacePortMax);
    }
    else
        alert("no support on your browser");


});