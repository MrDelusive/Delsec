$(document).ready(function () {

    if (localStorage.getItem("investRentalBike") === null)
        localStorage.setItem("investRentalBike", investRentalBike);
    if (localStorage.getItem("investSmallProperty") === null)
        localStorage.setItem("investSmallProperty", investSmallProperty);
    if (localStorage.getItem("investMediumProperty") === null)
        localStorage.setItem("investMediumProperty", investMediumProperty);
    if (localStorage.getItem("investBoat") === null)
        localStorage.setItem("investBoat", investBoat);
    if (localStorage.getItem("investMansion") === null)
        localStorage.setItem("investMansion", investMansion);

    if (typeof (Storage) !== "undefined") {
        if (userClass == "Healer") {
            investRentalBike = localStorage.getItem("investRentalBike");
            investSmallProperty = localStorage.getItem("investSmallProperty");
            investMediumProperty = localStorage.getItem("investMediumProperty");
            investBoat = localStorage.getItem("investBoat");
            investMansion = localStorage.getItem("investMansion");                   
        }

        $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike + "/200");
        $('#investRealEstatePopup').html("Buy Rental Town House: $250,000 <br />Owned: " + investSmallProperty + "/50");
        $('#invest3BRPopup').html("Buy 3 Bedroom Rental House: $450,000 <br />Owned: " + investMediumProperty + "/50");
        $('#investBoatPopup').html("Buy Rental Boat: $1,100,000 <br />Owned: " + investBoat + "/100");
        $('#investMansionPopup').html("Buy Mansion: $2,250,000 <br />Owned: " + investMansion + "/10");
    }
    else
        alert("no support on your browser");


});