$(document).ready(function () {

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