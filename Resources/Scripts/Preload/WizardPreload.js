$(document).ready(function () {
    if (typeof (Storage) !== "undefined") {

        $('#btnRussianCrawlerShop').prop('disabled', true);
        $('#btnVipersecCrawlerShop').prop('disabled', true);
        $('#btnChimerasecCrawlerShop').prop('disabled', true);
        $('#btnGriffonbankCrawlerShop').prop('disabled', true);

        if (userClass == "Wizard") {
            $("#btnAbilities").hide();
            $("#btnWizardAbilities").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#autoWizardGenerate").show();
            $("#autoWizardGenerate").disableSelection();
            $('#btnRussianCrawlerShop').prop('disabled', false);
            $('#btnVipersecCrawlerShop').prop('disabled', false);
            $('#btnChimerasecCrawlerShop').prop('disabled', false);
            $('#btnGriffonbankCrawlerShop').prop('disabled', false);
        }
    }
    else
        alert("no support on your browser");
});