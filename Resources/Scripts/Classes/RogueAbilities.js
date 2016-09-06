$(document).ready(function () {
    $('#btnRogueHeader').click(function () {
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

    $('#btnRogueAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#rogueAbilities').show();
        return false;
    });

    $('#btnRogueLevel1-1').click(function () {
        return false;
    });
    $('#btnRogueLevel1-2').click(function () {
        return false;
    });
    $('#btnRogueLevel1-3').click(function () {
        return false;
    });
    $('#btnRogueLevel2-1').click(function () {
        return false;
    });
    $('#btnRogueLevel2-2').click(function () {
        return false;
    });
    $('#btnRogueLevel2-3').click(function () {
        return false;
    });
    $('#btnRogueLevel3-1').click(function () {
        return false;
    });
    $('#btnRogueLevel3-2').click(function () {
        return false;
    });
    $('#btnRogueLevel3-3').click(function () {
        return false;
    });
    $('#btnRogueLevel4-1').click(function () {
        return false;
    });
    $('#btnRogueLevel4-2').click(function () {
        return false;
    });
    $('#btnRogueLevel4-3').click(function () {
        return false;
    });
    $('#btnRogueLevel5-1').click(function () {
        return false;
    });
    $('#btnRogueLevel5-2').click(function () {
        return false;
    });
    $('#btnRogueLevel5-3').click(function () {
        return false;
    });
    $('#btnRogueLevel6-1').click(function () {
        return false;
    });
    $('#btnRogueLevel6-2').click(function () {
        return false;
    });
    $('#btnRogueLevel6-3').click(function () {
        return false;
    });
    $('#btnRogueLevel7-1').click(function () {
        return false;
    });
    $('#btnRogueLevel7-2').click(function () {
        return false;
    });
    $('#btnRogueLevel7-3').click(function () {
        return false;
    });
    $('#btnRogueLevel8-1').click(function () {
        return false;
    });
    $('#btnRogueLevel8-2').click(function () {
        return false;
    });
    $('#btnRogueLevel8-3').click(function () {
        return false;
    });
    $('#btnRogueLevel9-1').click(function () {
        return false;
    });
    $('#btnRogueLevel9-2').click(function () {
        return false;
    });
    $('#btnRogueLevel9-3').click(function () {
        return false;
    });

    $('#btnResetRogueSkillPoints').click(function () {
        alert("Abilities Reset.");
        return true;
    });
});