$(window).load(function () {

    $('#btnShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();

        return false;
    });
    $('#btnPowerGenerators').click(function () {
        $(".hidden_Divs").hide();
        $("#powerGenerators").show();

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

    $('#btnConsole').click(function () {
        $(".hidden_Divs").hide();
        $("#console").show();
        $('#txtSubmit').focus();
        return false;
    });

    $('#resetClass').click(function () {
        userClass = "None";
        localStorage.setItem("userClassv05", userClass);
        return true;
    });
    $('#resetAll').click(function () {
        localStorage.setItem("userClassv05", "None");
        localStorage.setItem("moneyv05", 0);
        localStorage.setItem("threeBitBankv05", 0);
        localStorage.setItem("fourBitBankv05", 0);
        localStorage.setItem("sixBitBankv05", 0);
        localStorage.setItem("russianSixBitBankv05", 0);
        localStorage.setItem("eightBitBankv05", 0);
        localStorage.setItem("twelveBitBankv05", 0);
        localStorage.setItem("sixteenBitBankv05", 0);       
        localStorage.setItem("totalChunksv05", 0);

        localStorage.setItem("numUnreadEmailsv05", 2);
        localStorage.setItem("email1Viewedv05", "false");
        localStorage.setItem("email2Viewedv05", "false");
        localStorage.setItem("email3Viewedv05", "false");
        localStorage.setItem("email3Displayedv05", "false");
        localStorage.setItem("email4Viewedv05", "false");
        localStorage.setItem("email4Displayedv05", "false");
        localStorage.setItem("emailQuickScopeViewedv05", "false");
        localStorage.setItem("emailQuickScopeDisplayedv05", "false");
        localStorage.setItem("emailDelsecStockViewedv05", "false");
        localStorage.setItem("emailDelsecStockDisplayedv05", "false");

        localStorage.setItem("delsecCurrentStockPricev05", 2.20);
        localStorage.setItem("ownedDelsecStocksv05", 0);

        localStorage.setItem("entaqCurrentStockPricev05", 0.27);
        localStorage.setItem("ownedEntaqStocksv05", 0);

        localStorage.setItem("ventexCurrentStockPricev05", 1.54);
        localStorage.setItem("ownedVentexStocksv05", 0);

        localStorage.setItem("astorCurrentStockPricev05", 0.95);
        localStorage.setItem("ownedAstorStocksv05", 0);

        localStorage.setItem("popbotCurrentStockPricev05", 0.01);
        localStorage.setItem("ownedPopbotStocksv05", 0);
        localStorage.setItem("lastSaveState", "No saves.");
        return true;
    });

    $('#save').click(function () {
        if (typeof (Storage) !== "undefined") {
            // Code for localStorage/sessionStorage.
            localStorage.setItem("moneyv05", money);
            localStorage.setItem("threeBitBankv05", threeBitBank);
            localStorage.setItem("fourBitBankv05", fourBitBank);
            localStorage.setItem("sixBitBankv05", sixBitBank);
            localStorage.setItem("russianSixBitBankv05", russianSixBitBank);
            localStorage.setItem("eightBitBankv05", eightBitBank);
            localStorage.setItem("twelveBitBankv05", twelveBitBank);
            localStorage.setItem("sixteenBitBankv05", sixteenBitBank);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            localStorage.setItem("totalChunksv05", totalChunks);

            localStorage.setItem("delsecCurrentStockPricev05", delsecCurrentStockPrice);
            localStorage.setItem("ownedDelsecStocksv05", ownedDelsecStocks);

            localStorage.setItem("entaqCurrentStockPricev05", entaqCurrentStockPrice);
            localStorage.setItem("ownedEntaqStocksv05", ownedEntaqStocks);

            localStorage.setItem("ventexCurrentStockPricev05", ventexCurrentStockPrice);
            localStorage.setItem("ownedVentexStocksv05", ownedVentexStocks);

            localStorage.setItem("astorCurrentStockPricev05", astorCurrentStockPrice);
            localStorage.setItem("ownedAstorStocksv05", ownedAstorStocks);

            localStorage.setItem("popbotCurrentStockPricev05", popbotCurrentStockPrice);
            localStorage.setItem("ownedPopbotStocksv05", ownedPopbotStocks);
            if (userClass == "Warrior")
                localStorage.setItem("warriorClicksv05", warriorClicks); //remember number of clicks to calculate power of warrior generate
        }
        else {
            // Sorry! No Web Storage support..
            alert("no support on your browser");
        }
        $('#lblSaveState').html("Last Saved: " + Date($.now));
        localStorage.setItem("lastSaveState", "Last Saved: " + Date($.now));

        return false;
    });

    // The class selection buttons
    $('#btnWarriorAbility').click(function () {
        if (money >= 10000 && userClass == "None") {
            userClass = "Warrior";
            localStorage.setItem("userClassv05", userClass);
            
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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
        if (money >= 10000 && userClass == "None") {
            userClass = "Wizard";
            localStorage.setItem("userClassv05", userClass);

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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
        if (money >= 10000 && userClass == "None") {
            userClass = "Rogue";
            localStorage.setItem("userClassv05", userClass);
            sellDivider = 20;

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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
        if (money >= 10000 && userClass == "None") {
            userClass = "Healer";
            localStorage.setItem("userClassv05", userClass);
            
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
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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