$(document).ready(function () {

    if (localStorage.getItem("warriorClicks") === null)
        localStorage.setItem("warriorClicks", warriorClicks);
    if (localStorage.getItem("currentComputingPower") === null)
        localStorage.setItem("currentComputingPower", currentComputingPower);
    if (localStorage.getItem("currentComputingPowerUsage") === null)
        localStorage.setItem("currentComputingPowerUsage", currentComputingPowerUsage);
    if (localStorage.getItem("efficiencyCode") === null)
        localStorage.setItem("efficiencyCode", efficiencyCode);
    if (localStorage.getItem("efficiency2Code") === null)
        localStorage.setItem("efficiency2Code", efficiency2Code);
    if (localStorage.getItem("scatterLogicCode") === null)
        localStorage.setItem("scatterLogicCode", scatterLogicCode);
    if (localStorage.getItem("autoEfficiency1Code") === null)
        localStorage.setItem("autoEfficiency1Code", autoEfficiency1Code);
    if (localStorage.getItem("autoEfficiency2Code") === null)
        localStorage.setItem("autoEfficiency2Code", autoEfficiency2Code);
    if (localStorage.getItem("expandHTMLCodeBuilt") === null)
        localStorage.setItem("expandHTMLCodeBuilt", expandHTMLCodeBuilt);

    if (typeof (Storage) !== "undefined") {

        if (userClass == "Warrior") {
            warriorClicks = parseInt(localStorage.getItem("warriorClicks"));
            currentComputingPower = parseInt(localStorage.getItem("currentComputingPower"));
            currentComputingPowerUsage = parseInt(localStorage.getItem("currentComputingPowerUsage"));
            efficiencyCode = parseFloat(localStorage.getItem("efficiencyCode"));
            efficiency2Code = parseFloat(localStorage.getItem("efficiency2Code"));
            scatterLogicCode = parseFloat(localStorage.getItem("scatterLogicCode"));
            autoEfficiency1Code = parseInt(localStorage.getItem("autoEfficiency1Code"));
            autoEfficiency2Code = parseInt(localStorage.getItem("autoEfficiency2Code"));
            expandHTMLCodeBuilt = parseInt(localStorage.getItem("expandHTMLCodeBuilt"));

            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
            $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
            $('#warriorCodeScatterLogicResult').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $('#scatterLogicBombAmt').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $('#warriorCodeAutoEfficiency1Result').html("Efficiency_1.js Auto Coders Running: " + autoEfficiency1Code + "<br />Using a total of " + (autoEfficiency1Code * 10) + "KB Computing Power.");
            $('#warriorCodeAutoEfficiency2Result').html("Efficiency_2.js Auto Coders Running: " + autoEfficiency2Code + "<br />Using a total of " + (autoEfficiency2Code * 25) + "KB Computing Power.");
            $('#warriorCodeExpandHTMLResult').html(expandHTMLCodeBuilt + " % of new HTML Data added.");

            if (autoEfficiency1Code > 0) {
                autoEfficiency1CompleteCycles = Math.floor(autoEfficiency1Code / efficiencyCodeArray.length);
                autoEfficiency1Remainder = autoEfficiency1Code % efficiencyCodeArray.length;

                if (autoEfficiency1CompleteCycles > 0) {
                    autoEfficiency1CompleteInterval = setInterval(function () {
                        efficiencyCode += autoEfficiency1CompleteCycles;
                        $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                        localStorage.setItem("efficiencyCode", efficiencyCode);

                    }, 1000);
                }
                if (autoEfficiency1Remainder > 0) {
                    autoEfficiency1Interval = setInterval(function () { // Testing performance, obviously this way is better than running 1-58 setIntervals, but not sure whether clicking the button or copying the functionality is better for performance.
                        // so for now its just clicking the button 1-58 times 
                        for (var x = 0; x < autoEfficiency1Remainder; x++) {
                            $('#btnWriteEfficiencyCode').click();
                        }
                    }, 1000);
                }
            }

            if (autoEfficiency2Code > 0) {
                autoEfficiency2CompleteCycles = Math.floor(autoEfficiency2Code / efficiency2CodeArray.length);
                autoEfficiency2Remainder = autoEfficiency2Code % efficiency2CodeArray.length;
                
                if (autoEfficiency2Remainder > 0) {
                    clearInterval(autoEfficiency2Interval); // clear previous interval
                    autoEfficiency2Interval = setInterval(function () {
                        for (var x = 0; x < autoEfficiency2Remainder; x++) {
                            $('#btnWriteEfficiency2Code').click();
                        }
                    }, 1000);
                }

                if (autoEfficiency2CompleteCycles > 0) {
                    clearInterval(autoEfficiency2CompleteInterval); // clear previous interval
                    autoEfficiency2CompleteInterval = setInterval(function () {
                        efficiency2Code += autoEfficiency2CompleteCycles;
                        $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                        localStorage.setItem("efficiency2Code", efficiency2Code);

                    }, 1000);
                }

            }



            $("#btnAbilities").hide();
            $("#btnWarriorAbilities").fadeIn(500);
            $("#btnCoding").fadeIn(500);
            $('#totalWarriorClicks').html('Total Warrior Generate Clicks: ' + warriorClicks.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $("#manualIncrementDisplay").hide();
            $("#warriorGenerate").show();

            if (expandHTMLCodeBuilt == 100) {
                $('#hiddenExpandHTML').fadeIn(1000);
                $('#expandHTMLDiv').hide();
            }

            if (currentComputingPower <= 1024)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            else if (currentComputingPower > 1024 && currentComputingPower <= 1048576)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + (currentComputingPowerUsage / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " MB / " + (currentComputingPower / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " MB");

        }
    }
    else
        alert("no support on your browser");
});