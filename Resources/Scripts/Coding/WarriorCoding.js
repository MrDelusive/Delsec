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

            if (autoEfficiency1CompleteCycles > 0) {
                clearInterval(autoEfficiency1CompleteInterval); // clear previous interval
                autoEfficiency1CompleteInterval = setInterval(function () {
                    efficiencyCode += autoEfficiency1CompleteCycles;
                    $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                    localStorage.setItem("efficiencyCode", efficiencyCode);

                }, 1000);
            }
            if (autoEfficiency1Remainder > 0) {
                clearInterval(autoEfficiency1Interval); // clear previous interval
                autoEfficiency1Interval = setInterval(function () {
                    for (var x = 0; x < autoEfficiency1Remainder; x++) {
                        $('#btnWriteEfficiencyCode').click();
                    }
                }, 1000);
            }
        }
        return false;
    });


    $('#btnWriteAutoEfficiency2Code').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteAutoEfficiency2Code').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteAutoEfficiency2Code').click(function () {
        if (autoEfficiency2CodeArrayPosition < autoEfficiency2CodeArray.length) {
            if (autoEfficiency2CodeArray[autoEfficiency2CodeArrayPosition] == '\n')
                $('#warriorCodeAutoEfficiency2').append("<br />");
            else if (autoEfficiency2CodeArray[autoEfficiency2CodeArrayPosition] == '~')
                $('#warriorCodeAutoEfficiency2').append("&nbsp;");
            else
                $('#warriorCodeAutoEfficiency2').append(autoEfficiency2CodeArray[autoEfficiency2CodeArrayPosition]);
            autoEfficiency2CodeArrayPosition++;
        }
        else {
            $('#warriorCodeAutoEfficiency2').html("");
            autoEfficiency2Code += 1;
            $('#warriorCodeAutoEfficiency2Result').html("Efficiency_2.js Auto Coders Running: " + autoEfficiency2Code + "<br />Using a total of " + (autoEfficiency2Code * 25) + "KB Computing Power.");
            currentComputingPowerUsage += 25;
            localStorage.setItem("currentComputingPowerUsage", currentComputingPowerUsage);
            localStorage.setItem("autoEfficiency2Code", autoEfficiency2Code);
            $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            autoEfficiency2CodeArrayPosition = 0;

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
        return false;
    });


    $('#btnWriteExpandHTMLCode').keydown(function (e) {
        if (e.which == 13) {
            $('#btnWriteExpandHTMLCode').prop('disabled', true);
            return false;
        }
    });
    $('#btnWriteExpandHTMLCode').click(function () {
        if (expandHTMLCodeBuilt == 25)
            expandHTMLCodeArray = "<div class='warriorRow' id='buildCSSDiv'>\n~~~~<button id='btnWriteBuildCSSCode' class='btn_StyleRed'>\n~~~~~~~~Requires 300.00 KB Computing Power Capacity\n~~~~</button>\n</div>".split("");
        if (expandHTMLCodeBuilt == 50)
            expandHTMLCodeArray = "<div class='warriorRow' id='expandBlackMarketDiv'>\n~~~~<button id='btnWriteBlackMarket' class='btn_StyleRed'>\n~~~~~~~~Requires 300.00 KB Computing Power Capacity\n~~~~</button>\n</div>".split("");
        if (expandHTMLCodeBuilt == 75)
            expandHTMLCodeArray = "<div class='warriorRow' id='expandJQuery2Div'>\n~~~~<button id='btnWriteExpandJQuery2' class='btn_StyleRed'>\n~~~~~~~~Requires 1.00 MB Computing Power Capacity\n~~~~</button>\n</div>".split("");
        if (expandHTMLCodeArrayPosition < expandHTMLCodeArray.length) {
            if (expandHTMLCodeArray[expandHTMLCodeArrayPosition] == '\n')
                $('#warriorCodeExpandHTML').append("<br />");
            else if (expandHTMLCodeArray[expandHTMLCodeArrayPosition] == '~')
                $('#warriorCodeExpandHTML').append("&nbsp;");
            else
                $('#warriorCodeExpandHTML').append(expandHTMLCodeArray[expandHTMLCodeArrayPosition]);
            expandHTMLCodeArrayPosition++;
        }
        else {
            $('#warriorCodeExpandHTML').html("");
            expandHTMLCodeBuilt += 25;
            if (expandHTMLCodeBuilt > 100)
                expandHTMLCodeBuilt = 100;
            $('#warriorCodeExpandHTMLResult').html(expandHTMLCodeBuilt + " % of new HTML Data added.");
            localStorage.setItem("expandHTMLCodeBuilt", expandHTMLCodeBuilt);
            expandHTMLCodeArrayPosition = 0;
            if (expandHTMLCodeBuilt == 100) {
                $('#hiddenExpandHTML').fadeIn(1000);
                $('#expandHTMLDiv').hide();               
            }
        }
        return false;
    });

    $('#btnWriteExpandJQueryCode').click(function () {

        return false;
    });

    $('#btnWriteBuildCSSCode').click(function () {

        return false;
    });

    $('#btnWriteExpandBlackMarketCode').click(function () {

        return false;
    });

    $('#btnWriteExpandJQuery2Code').click(function () {

        return false;
    });
    
});