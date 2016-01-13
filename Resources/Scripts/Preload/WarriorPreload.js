$(document).ready(function () {

    if (localStorage.getItem("warriorClicks") === null)
        localStorage.setItem("warriorClicks", warriorClicks);
    if (localStorage.getItem("efficiencyCode") === null)
        localStorage.setItem("efficiencyCode", efficiencyCode);

    if (typeof (Storage) !== "undefined") {

        if (userClass == "Warrior") {
            warriorClicks = parseInt(localStorage.getItem("warriorClicks"));
            efficiencyCode = parseFloat(localStorage.getItem("efficiencyCode"));
            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost in Efficiency. ");
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