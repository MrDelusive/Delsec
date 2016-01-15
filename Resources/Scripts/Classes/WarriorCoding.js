$(document).ready(function () {

    // 76 chars * 5 times user clicks 380 times before getting to efficiency2
    var efficiencyCodeArray = "float warriorGenerateAmtBoost = 0.24;\n\nincrement += warriorGenerateAmtBoost;".split("");
    var efficiencyCodeArrayPosition = 0;
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
            efficiencyCode += 1;
            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost in Efficiency. ");
            localStorage.setItem("efficiencyCode", efficiencyCode);
            efficiencyCodeArrayPosition = 0;
        }
        return false;
    });

    // 123 * 10 = 1230 
    var efficiency2CodeArray = "float warriorGenerateAmtNewBoost = 0.24;\n\nincrement += warriorGenerateAmtNewBoost;\nincrement += warriorGenerateAmtNewBoost;".split("");
    var efficiency2CodeArrayPosition = 0;
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
            $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost in Efficiency. ");
            localStorage.setItem("efficiency2Code", efficiency2Code);
            efficiency2CodeArrayPosition = 0;
        }
        return false;
    });
    
    // 111 * 20 = 2200
    var scatterLogicCodeArray = "public void scatterLogic {\n~~~~for (int x=0; x<pi.length; x++) {\n~~~~~~~~delsecGameLogic.Number[x]=NaN;\n~~~~}\n}".split("");
    var scatterLogicCodeArrayPosition = 0;
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

    
});