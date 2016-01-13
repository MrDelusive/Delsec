$(document).ready(function () {
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

});