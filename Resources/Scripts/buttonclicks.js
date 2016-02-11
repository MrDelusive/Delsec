$(document).ready(function () {

    $('#btnShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#delsecCrawlerShop").show();
        return false;
    });

    $('#btnDelsecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#delsecCrawlerShop").show();
        return false;
    });
    $('#btnRussianCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#russianCrawlerShop").show();
        return false;
    });
    $('#btnVipersecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#vipersecCrawlerShop").show();
        return false;
    });
    $('#btnChimerasecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#chimerasecCrawlerShop").show();
        return false;
    });
    $('#btnGriffonbankCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#griffonbankCrawlerShop").show();
        return false;
    });
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

    $('#btnWarriorItemsTab').click(function () {
        $(".hidden_Divs").hide();
        $("#warriorCoding").show();
        $("#warriorItemsTab").show();
        return false;
    });


    $('#btnEmails').click(function () {
        $(".hidden_Divs").hide();
        $("#email").show();
        return false;
    });
    $('#btnInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#shortTermInvestments").show();
        return false;
    });

    $('#btnStockMarket').click(function () {
        $(".hidden_Divs").hide();
        $("#stocks").show();

        return false;
    });
    $('#btnAbilities').click(function () {
        $(".hidden_Divs").hide();
        $("#abilities").show();

        return false;
    });

    $('#btnConsole').click(function () {
        $(".hidden_Divs").hide();
        $("#console").show();
        $('#txtSubmit').focus();
        return false;
    });

    $('#btnOptions').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        return false;
    });

    $('#btnResetAll').click(function () {
        localStorage.clear();
    });

    $('#btnResetClass').click(function () {
        localStorage.setItem("userClass", "None");
        return true;
    });

    // The class selection buttons
    $('#btnWarriorAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Warrior";
            localStorage.setItem("userClass", userClass);
            
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailWarriorHeading").show(1);

            // just if the user keeps resetting their class.
            if (emailWarriorDisplayed == "false")
                numUnreadEmails++;
            emailWarriorDisplayed = "true";
            
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailWarriorDisplayed", emailWarriorDisplayed);

            $('#warriorAbilities').delay(500);
            $('#btnWarriorAbilities').delay(500);
            $("#warriorGenerate").delay(500);
            $("#btnCoding").delay(500);

            $('#warriorAbilities').fadeIn(500);
            $('#btnWarriorAbilities').fadeIn(500);
            $("#btnPowerGenerators").fadeIn(500);
            $("#warriorGenerate").fadeIn(500);
            $("#btnCoding").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;        
    });

    $('#btnWizardAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Wizard";
            localStorage.setItem("userClass", userClass);

            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailWizardHeading").show(1);
            if (emailWizardDisplayed == "false")
                numUnreadEmails++;
            emailWizardDisplayed = "true";
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailWizardDisplayed", emailWizardDisplayed);

            $('#wizardAbilities').delay(500);
            $('#btnWizardAbilities').delay(500);
            $("#autoWizardGenerate").delay(500);

            $('#wizardAbilities').fadeIn(500);
            $('#btnWizardAbilities').fadeIn(500);
            $("#autoWizardGenerate").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            $('#btnRussianCrawlerShop').prop('disabled', false);
            $('#btnVipersecCrawlerShop').prop('disabled', false);
            $('#btnChimerasecCrawlerShop').prop('disabled', false);
            $('#btnGriffonbankCrawlerShop').prop('disabled', false);
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnRogueAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Rogue";
            localStorage.setItem("userClass", userClass);
            sellDivider = 20;
       
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailRogueHeading").show(1);
            if (emailRogueDisplayed == "false")
                numUnreadEmails++;
            emailRogueDisplayed = "true";
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailRogueDisplayed", emailRogueDisplayed);

            $('#rogueAbilities').delay(500);
            $('#btnRogueAbilities').delay(500);
            $("#rogueGenerate").delay(500);

            $('#rogueAbilities').fadeIn(500);
            $('#btnRogueAbilities').fadeIn(500);
            $("#rogueGenerate").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            // update sell div price to display new 5% reduction
            $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2));
            $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - (astorCurrentStockPrice / sellDivider))).toFixed(2));
            $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / sellDivider))).toFixed(2));
            $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - (ventexCurrentStockPrice / sellDivider))).toFixed(2));
            $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));

        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnHealerAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Healer";
            localStorage.setItem("userClass", userClass);
            
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailHealerHeading").show(1);
            if (emailHealerDisplayed == "false")
                numUnreadEmails++;
            emailHealerDisplayed = "true";
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailHealerDisplayed", emailHealerDisplayed);

            $('#healerAbilities').delay(500);
            $('#btnHealerAbilities').delay(500);
            $("#healerGenerate").delay(500);

            $('#healerAbilities').fadeIn(500);
            $('#btnHealerAbilities').fadeIn(500);
            $("#healerGenerate").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            $('#btnLongTermInvestments').prop('disabled', false);
            $('#btnExpeditionInvestments').prop('disabled', false);
            $('#btnPermanentInvestments').prop('disabled', false);
            $('#btnSummaryInvestments').prop('disabled', false);
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    // The ability tree buttons
    $('#btnWarriorAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#warriorAbilities').show();
        return false;
    });
    $('#btnWizardAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#wizardAbilities').show();
        return false;
    });
    $('#btnRogueAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#rogueAbilities').show();
        return false;
    });
    $('#btnHealerAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#healerAbilities').show();
        return false;
    });

});