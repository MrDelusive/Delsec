$(document).ready(function () {

    if (localStorage.getItem("warriorClicks") === null)
        localStorage.setItem("warriorClicks", warriorClicks);
    if (localStorage.getItem("efficiencyCode") === null)
        localStorage.setItem("efficiencyCode", efficiencyCode);
    if (localStorage.getItem("efficiency2Code") === null)
        localStorage.setItem("efficiency2Code", efficiency2Code);
    if (localStorage.getItem("scatterLogicCode") === null)
        localStorage.setItem("scatterLogicCode", scatterLogicCode);

    if (typeof (Storage) !== "undefined") {

        if (userClass == "Warrior") {
            warriorClicks = parseInt(localStorage.getItem("warriorClicks"));
            efficiencyCode = parseFloat(localStorage.getItem("efficiencyCode"));
            efficiency2Code = parseFloat(localStorage.getItem("efficiency2Code"));
            scatterLogicCode = parseFloat(localStorage.getItem("scatterLogicCode"));

            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost in Efficiency. ");
            $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost in Efficiency. ");
            $('#warriorCodeScatterLogicResult').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $('#scatterLogicBombAmt').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $("#btnAbilities").hide();
            $("#btnWarriorAbilities").fadeIn(500);
            $("#btnCoding").fadeIn(500);
            $('#totalWarriorClicks').html('Total Warrior Generate Clicks: ' + warriorClicks);
            $("#manualIncrementDisplay").hide();
            $("#warriorGenerate").show();
        }
    }
    else
        alert("no support on your browser");
});