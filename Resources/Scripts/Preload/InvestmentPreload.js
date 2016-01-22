$(document).ready(function () {

    if (localStorage.getItem("investRentalBike") === null)
        localStorage.setItem("investRentalBike", investRentalBike);
    if (localStorage.getItem("investSmallProperty") === null)
        localStorage.setItem("investSmallProperty", investSmallProperty);
    if (localStorage.getItem("investMansion") === null)
        localStorage.setItem("investMansion", investMansion);

    if (typeof (Storage) !== "undefined") {
        if (userClass == "Healer") {

            investRentalBike = localStorage.getItem("investRentalBike");
            investSmallProperty = localStorage.getItem("investSmallProperty");
            investMansion = localStorage.getItem("investMansion");

            $('#investRentalPopup').html("Buy Rental Bike: $500 <br />Owned: " + investRentalBike);
            $('#investRealEstatePopup').html("Buy Small Rental Property: $250,000 <br />Owned: " + investSmallProperty);
            $('#investMansionPopup').html("Buy Mansion: $750,000 <br />Owned: " + investMansion);
           
        }
    }
    else
        alert("no support on your browser");


});