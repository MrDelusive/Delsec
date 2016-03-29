$(document).ready(function () {

    $('#btnSummaryInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#summaryInvestments").show();
        $('#totalSummary').show(1);
        $('#totalSummaryDisplay').show(1);
        $('#generatorSummary').show(1);
        $('#generatorSummary').html('Auto Interest Generated');
        $('#generatorSummaryDisplay').show(1);
        return false;
    });

});