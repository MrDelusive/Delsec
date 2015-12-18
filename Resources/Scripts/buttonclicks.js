$(window).load(function () {

    $('#btnShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();

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

    $('#cheat').click(function () {
        money += 300;
        return false;
    });
    $('#resetClass').click(function () {
        userClass = "None";
        localStorage.setItem("userClassv04", userClass);
        return true;
    });
    $('#resetAll').click(function () {
        localStorage.setItem("userClassv04", "None");
        localStorage.setItem("moneyv04", 0);
        localStorage.setItem("threeBitBankv04", 0);
        localStorage.setItem("fourBitBankv04", 0);
        localStorage.setItem("sixBitBankv04", 0);
        localStorage.setItem("russianSixBitBankv04", 0);
        localStorage.setItem("eightBitBankv04", 0);
        localStorage.setItem("twelveBitBankv04", 0);
        localStorage.setItem("sixteenBitBankv04", 0);
        localStorage.setItem("numUnreadEmailsv04", 2);
        localStorage.setItem("totalChunksv04", 0);
        localStorage.setItem("email1Viewedv04", "false");
        localStorage.setItem("email2Viewedv04", "false");
        localStorage.setItem("email3Viewedv04", "false");
        localStorage.setItem("email4Viewedv04", "false");
        localStorage.setItem("emailQuickScopeViewedv04", "false");
        localStorage.setItem("emailQuickScopeDisplayedv04", "false");
        localStorage.setItem("delsecCurrentStockPricev04", 2.20);
        localStorage.setItem("ownedDelsecStocksv04", 0);
        return true;
    });

    $('#save').click(function () {
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            localStorage.setItem("moneyv04", money);
            localStorage.setItem("threeBitBankv04", threeBitBank);
            localStorage.setItem("fourBitBankv04", fourBitBank);
            localStorage.setItem("sixBitBankv04", sixBitBank);
            localStorage.setItem("russianSixBitBankv04", russianSixBitBank);
            localStorage.setItem("eightBitBankv04", eightBitBank);
            localStorage.setItem("twelveBitBankv04", twelveBitBank);
            localStorage.setItem("sixteenBitBankv04", sixteenBitBank);
            localStorage.setItem("numUnreadEmailsv04", numUnreadEmails);
            localStorage.setItem("totalChunksv04", totalChunks);
            localStorage.setItem("delsecCurrentStockPricev04", delsecCurrentStockPrice);
            localStorage.setItem("ownedDelsecStocksv04", ownedDelsecStocks);
            if (userClass == "Warrior")
                localStorage.setItem("warriorClicksv04", warriorClicks); //remember number of clicks to calculate power of warrior generate
        }
        else {
            // Sorry! No Web Storage support..
            alert("no support on your browser");
        }
    });

    // The class selection buttons
    $('#btnWarriorAbility').click(function () {
        if (money >= 10000) {
            userClass = "Warrior";
            localStorage.setItem("userClassv04", userClass);
            $('#classDisplay').html("<br /><br />Class: " + userClass);
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);
            ;
            $('#warriorAbilities').delay(500);
            $('#btnWarriorAbilities').delay(500);
            $("#warriorGenerate").delay(500);

            $('#warriorAbilities').fadeIn(500);
            $('#btnWarriorAbilities').fadeIn(500);
            $("#warriorGenerate").fadeIn(500);
            money -= 10000;
        }
        else {
            $('#abilityErrorHeading').html("Need at least $10,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;        
    });

    $('#btnWizardAbility').click(function () {
        if (money >= 10000) {
            userClass = "Wizard";
            localStorage.setItem("userClassv04", userClass);
            $('#classDisplay').html("<br /><br />Class: " + userClass);
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $('#wizardAbilities').delay(500);
            $('#btnWizardAbilities').delay(500);
            $("#autoWizardGenerate").delay(500);

            $('#wizardAbilities').fadeIn(500);
            $('#btnWizardAbilities').fadeIn(500);
            $("#autoWizardGenerate").fadeIn(500);
            money -= 10000;
        }
        else {
            $('#abilityErrorHeading').html("Need at least $10,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnRogueAbility').click(function () {
        if (money >= 10000) {
            userClass = "Rogue";
            localStorage.setItem("userClassv04", userClass);
            $('#classDisplay').html("<br /><br />Class: " + userClass);
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $('#rogueAbilities').delay(500);
            $('#btnRogueAbilities').delay(500);
            $("#rogueGenerate").delay(500);

            $('#rogueAbilities').fadeIn(500);
            $('#btnRogueAbilities').fadeIn(500);
            $("#rogueGenerate").fadeIn(500);
            money -= 10000;
        }
        else {
            $('#abilityErrorHeading').html("Need at least $10,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnHealerAbility').click(function () {
        if (money >= 10000) {
            userClass = "Healer";
            localStorage.setItem("userClassv04", userClass);
            $('#classDisplay').html("<br /><br />Class: " + userClass);
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $('#healerAbilities').delay(500);
            $('#btnHealerAbilities').delay(500);
            $("#healerGenerate").delay(500);

            $('#healerAbilities').fadeIn(500);
            $('#btnHealerAbilities').fadeIn(500);
            $("#healerGenerate").fadeIn(500);
            money -= 10000;
        }
        else {
            $('#abilityErrorHeading').html("Need at least $10,000");
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

})(jQuery);