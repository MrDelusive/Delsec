$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {

        if (userClass == "Rogue") {
            $("#btnAbilities").hide();
            $("#btnRogueAbilities").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#rogueGenerate").show();
            sellDivider = 20; // Sell price only 5% lower if rogue.
        }
    }
    else
        alert("no support on your browser");
});