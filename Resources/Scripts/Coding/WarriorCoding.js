$(document).ready(function () {

    $('#btnCoding').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorCodeTab").show();
        return false;
    });

    $('#btnWarriorCodeTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorCodeTab").show();
        return false;
    });

    $('#btnWarriorCodeHTMLTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorCodeHTMLTab").show();
        return false;
    });

    $('#btnWarriorConsoleCommandsTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorConsoleCommandsTab").show();
        return false;
    });

    $('#btnWarriorItemsTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorItemsTab").show();
        return false;
    });

    $('#btnWarriorBlackMarketTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorBlackMarketTab").show();
        return false;
    });

    $('#btnWriteEfficiencyCode').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteEfficiencyCode').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteEfficiencyCode').click(function () {
        if (efficiencyCodeArrayPosition < efficiencyCodeArray.length) {
            if (efficiencyCodeArray[efficiencyCodeArrayPosition] == '\n')
                $('#warriorCodeEfficiency1').append("<br />");
            else
                $('#warriorCodeEfficiency1').append(efficiencyCodeArray[efficiencyCodeArrayPosition]);
            efficiencyCodeArrayPosition++;
        }
        else {
            $('#warriorCodeEfficiency1').html("");
            efficiencyCode += 1; // Doing this way for display purposes.
            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
            localStorage.setItem("efficiencyCode", efficiencyCode);
            efficiencyCodeArrayPosition = 0;
        }
        return false;
    });

    $('#btnWriteEfficiency2Code').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteEfficiency2Code').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteEfficiency2Code').click(function () {
        if (efficiency2CodeArrayPosition < efficiency2CodeArray.length) {
            if (efficiency2CodeArray[efficiency2CodeArrayPosition] == '\n')
                $('#warriorCodeEfficiency2').append("<br />");
            else
                $('#warriorCodeEfficiency2').append(efficiency2CodeArray[efficiency2CodeArrayPosition]);
            efficiency2CodeArrayPosition++;
        }
        else {
            $('#warriorCodeEfficiency2').html("");
            efficiency2Code += 1;
            $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
            localStorage.setItem("efficiency2Code", efficiency2Code);
            efficiency2CodeArrayPosition = 0;
        }
        return false;
    });
    
    $('#btnWriteScatterLogicCode').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteScatterLogicCode').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteScatterLogicCode').click(function () {
        if (scatterLogicCodeArrayPosition < scatterLogicCodeArray.length) {
            if (scatterLogicCodeArray[scatterLogicCodeArrayPosition] == '\n')
                $('#warriorCodeScatterLogic').append("<br />");
            else if (scatterLogicCodeArray[scatterLogicCodeArrayPosition] == '~')
                $('#warriorCodeScatterLogic').append("&nbsp;");
            else
                $('#warriorCodeScatterLogic').append(scatterLogicCodeArray[scatterLogicCodeArrayPosition]);
            scatterLogicCodeArrayPosition++;
        }
        else {
            $('#warriorCodeScatterLogic').html("");
            scatterLogicCode++;
            $('#warriorCodeScatterLogicResult').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            $('#scatterLogicBombAmt').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
            localStorage.setItem("scatterLogicCode", scatterLogicCode);
            scatterLogicCodeArrayPosition = 0;
        }
        return false;
    });

    $('#btnWriteAutoEfficiency1Code').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteAutoEfficiency1Code').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteAutoEfficiency1Code').click(function () {
        if (autoEfficiency1CodeArrayPosition < autoEfficiency1CodeArray.length) {
            if (autoEfficiency1CodeArray[autoEfficiency1CodeArrayPosition] == '\n')
                $('#warriorCodeAutoEfficiency1').append("<br />");
            else if (autoEfficiency1CodeArray[autoEfficiency1CodeArrayPosition] == '~')
                $('#warriorCodeAutoEfficiency1').append("&nbsp;");
            else
                $('#warriorCodeAutoEfficiency1').append(autoEfficiency1CodeArray[autoEfficiency1CodeArrayPosition]);
            autoEfficiency1CodeArrayPosition++;
        }
        else {
            $('#warriorCodeAutoEfficiency1').html("");
            autoEfficiency1Code += 1;
            $('#warriorCodeAutoEfficiency1Result').html("Efficiency_1.js Auto Coders Running: " + autoEfficiency1Code + "<br />Using a total of " + (autoEfficiency1Code * 10) + "KB Computing Power.");
            currentComputingPowerUsage += 10;
            localStorage.setItem("currentComputingPowerUsage", currentComputingPowerUsage);
            localStorage.setItem("autoEfficiency1Code", autoEfficiency1Code);
            $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            autoEfficiency1CodeArrayPosition = 0;
            
            autoEfficiency1CompleteCycles = Math.floor(autoEfficiency1Code / efficiencyCodeArray.length);
            autoEfficiency1Remainder = autoEfficiency1Code % efficiencyCodeArray.length;
            if (autoEfficiency1Remainder > 0) {
                clearInterval(autoEfficiency1Interval); // clear previous interval
                autoEfficiency1Interval = setInterval(function () { 
                    for (var x = 0; x < autoEfficiency1Remainder; x++) {
                        $('#btnWriteEfficiencyCode').click();
                    }
                }, 1000);
            }
            if (autoEfficiency1CompleteCycles > 0) {
                clearInterval(autoEfficiency1CompleteInterval); // clear previous interval
                autoEfficiency1CompleteInterval = setInterval(function () {
                    efficiencyCode += autoEfficiency1CompleteCycles;
                    $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                    localStorage.setItem("efficiencyCode", efficiencyCode);

                }, 1000);
            }
        }
        return false;
    });

    
});