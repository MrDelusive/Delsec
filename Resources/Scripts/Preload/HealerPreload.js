$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {
        $('#btnLongTermInvestments').prop('disabled', true);
        $('#btnPermanentInvestments').prop('disabled', true);
        $('#btnExpeditionInvestments').prop('disabled', true);
        $('#btnSummaryInvestments').prop('disabled', true);
        if (userClass == "Healer") {           
            $("#btnAbilities").hide();
            $("#btnHealerAbilities").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#healerGenerate").show();
            $('#btnLongTermInvestments').prop('disabled', false);
            $('#btnPermanentInvestments').prop('disabled', false);
            $('#btnExpeditionInvestments').prop('disabled', false);
            $('#btnSummaryInvestments').prop('disabled', false);
        }
    }
    else
        alert("no support on your browser");
});