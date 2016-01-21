$(document).ready(function () {

    $('#btnSummaryInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#summaryInvestments").show();
        return false;
    });

});