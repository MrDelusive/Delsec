$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        $('#btnLongTermInvestments').prop('disabled', true);
        if (userClass == "Healer") {           
            $("#btnAbilities").hide();
            $("#btnHealerAbilities").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#healerGenerate").show();
            $('#btnLongTermInvestments').prop('disabled', false);
        }
    }
    else
        alert("no support on your browser");
});