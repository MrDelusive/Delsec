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

        
        localStorage.setItem("ownedDelsecStocksv05", 0);
        localStorage.setItem("ownedEntaqStocksv05", 0);
        localStorage.setItem("ownedVentexStocksv05", 0);
        localStorage.setItem("ownedAstorStocksv05", 0);
        localStorage.setItem("ownedPopbotStocksv05", 0);
        localStorage.setItem("ownedPannamStocksv05", 0);
        localStorage.setItem("ownedTRITStocksv05", 0);
        localStorage.setItem("ownedCANVStocksv05", 0);
        localStorage.setItem("ownedOSMStocksv05", 0);
        localStorage.setItem("ownedPALLADStocksv05", 0);
        localStorage.setItem("ownedKELVStocksv05", 0);
        localStorage.setItem("ownedStuccorStocksv05", 0);
        localStorage.setItem("ownedDelcredStocksv05", 0);
        localStorage.setItem("ownedRustecStocksv05", 0);
        localStorage.setItem("ownedExxocredStocksv05", 0);
        localStorage.setItem("ownedAUStocksv05", 0);
        localStorage.setItem("ownedAceholdStocksv05", 0);
        localStorage.setItem("ownedDelholdStocksv05", 0);
        localStorage.setItem("ownedDIAMStocksv05", 0);
        localStorage.setItem("ownedPentaccStocksv05", 0);
        localStorage.setItem("ownedNoodleStocksv05", 0);
        localStorage.setItem("ownedMegahardStocksv05", 0);
        localStorage.setItem("ownedChimerasecStocksv05", 0);
        localStorage.setItem("ownedChimeraholdStocksv05", 0);
        localStorage.setItem("ownedGriffonbankStocksv05", 0);
        localStorage.setItem("ownedTurborusStocksv05", 0);
        localStorage.setItem("ownedExodmptStocksv05", 0);
        localStorage.setItem("ownedRamnetStocksv05", 0);
        localStorage.setItem("ownedAlphacenStocksv05", 0);
        localStorage.setItem("ownedScatterStocksv05", 0);
        localStorage.setItem("ownedKalzexStocksv05", 0);
        localStorage.setItem("ownedSonicosStocksv05", 0);
        localStorage.setItem("ownedTrancextStocksv05", 0);
        localStorage.setItem("ownedStklrStocksv05", 0);
        localStorage.setItem("ownedVipersecStocksv05", 0);
        localStorage.setItem("ownedPLATStocksv05", 0);
        localStorage.setItem("ownedInfoneStocksv05", 0);
        localStorage.setItem("ownedExtankStocksv05", 0);
        localStorage.setItem("ownedReinaccStocksv05", 0);

        localStorage.setItem("delsecCurrentStockPricev05", 2.20);
        localStorage.setItem("entaqCurrentStockPricev05", 0.27);       
        localStorage.setItem("ventexCurrentStockPricev05", 1.54);
        localStorage.setItem("astorCurrentStockPricev05", 0.95);       
        localStorage.setItem("popbotCurrentStockPricev05", 0.01);
        localStorage.setItem("pannamCurrentStockPricev05", 4.82);
        localStorage.setItem("TRITCurrentStockPricev05", 5.86);
        localStorage.setItem("CANVCurrentStockPricev05", 8.72);
        localStorage.setItem("OSMCurrentStockPricev05", 11.26);
        localStorage.setItem("PALLADCurrentStockPricev05", 15.77);
        localStorage.setItem("KELVCurrentStockPricev05", 23.11);
        localStorage.setItem("stuccorCurrentStockPricev05", 58.98);
        localStorage.setItem("delcredCurrentStockPricev05", 97.85);
        localStorage.setItem("rustecCurrentStockPricev05", 115.33);
        localStorage.setItem("exxocredCurrentStockPricev05", 126.88);
        localStorage.setItem("AUCurrentStockPricev05", 257.23);
        localStorage.setItem("aceholdCurrentStockPricev05", 340.01);
        localStorage.setItem("delholdCurrentStockPricev05", 582.94);
        localStorage.setItem("DIAMCurrentStockPricev05", 1196.77);
        localStorage.setItem("pentaccCurrentStockPricev05", 1206.65);
        localStorage.setItem("noodleCurrentStockPricev05", 1572.63);
        localStorage.setItem("megahardCurrentStockPricev05", 2322.17);
        localStorage.setItem("chimerasecCurrentStockPricev05", 3703.29);
        localStorage.setItem("chimeraholdCurrentStockPricev05", 3908.06);
        localStorage.setItem("griffonbankCurrentStockPricev05", 4817.25);
        localStorage.setItem("turborusCurrentStockPricev05", 5176.99);
        localStorage.setItem("exodmptCurrentStockPricev05", 5911.76);
        localStorage.setItem("ramnetCurrentStockPricev05", 6427.11);
        localStorage.setItem("alphacenCurrentStockPricev05", 6662.88);
        localStorage.setItem("scatterCurrentStockPricev05", 6727.27);
        localStorage.setItem("kalzexCurrentStockPricev05", 7111.11);
        localStorage.setItem("sonicosCurrentStockPricev05", 7421.86);
        localStorage.setItem("trancextCurrentStockPricev05", 7512.81);
        localStorage.setItem("stklrCurrentStockPricev05", 7700.97);
        localStorage.setItem("vipersecCurrentStockPricev05", 10801.91);
        localStorage.setItem("PLATCurrentStockPricev05", 11721.88);
        localStorage.setItem("infoneCurrentStockPricev05", 12821.88);
        localStorage.setItem("extankCurrentStockPricev05", 13532.15);
        localStorage.setItem("reinaccCurrentStockPricev05", 15234.04);

        localStorage.setItem("lastSaveState", "No saves.");
        return true;
    });

    $('#save').click(function () {
        if (typeof (Storage) !== "undefined") {
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

            localStorage.setItem("ownedDelsecStocksv05", ownedDelsecStocks);
            localStorage.setItem("ownedEntaqStocksv05", ownedEntaqStocks);
            localStorage.setItem("ownedVentexStocksv05", ownedVentexStocks);
            localStorage.setItem("ownedAstorStocksv05", ownedAstorStocks);
            localStorage.setItem("ownedPopbotStocksv05", ownedPopbotStocks);
            localStorage.setItem("ownedPannamStocksv05", ownedPannamStocks);
            localStorage.setItem("ownedTRITStocksv05", ownedTRITStocks);
            localStorage.setItem("ownedCANVStocksv05", ownedCANVStocks);
            localStorage.setItem("ownedOSMStocksv05", ownedOSMStocks);
            localStorage.setItem("ownedPALLADStocksv05", ownedPALLADStocks);
            localStorage.setItem("ownedKELVStocksv05", ownedKELVStocks);
            localStorage.setItem("ownedStuccorStocksv05", ownedStuccorStocks);
            localStorage.setItem("ownedDelcredStocksv05", ownedDelcredStocks);
            localStorage.setItem("ownedRustecStocksv05", ownedRustecStocks);
            localStorage.setItem("ownedExxocredStocksv05", ownedExxocredStocks);
            localStorage.setItem("ownedAUStocksv05", ownedAUStocks);
            localStorage.setItem("ownedAceholdStocksv05", ownedAceholdStocks);
            localStorage.setItem("ownedDelholdStocksv05", ownedDelholdStocks);
            localStorage.setItem("ownedDIAMStocksv05", ownedDIAMStocks);
            localStorage.setItem("ownedPentaccStocksv05", ownedPentaccStocks);
            localStorage.setItem("ownedNoodleStocksv05", ownedNoodleStocks);
            localStorage.setItem("ownedMegahardStocksv05", ownedMegahardStocks);
            localStorage.setItem("ownedChimerasecStocksv05", ownedChimerasecStocks);
            localStorage.setItem("ownedChimeraholdStocksv05", ownedChimeraholdStocks);
            localStorage.setItem("ownedGriffonbankStocksv05", ownedGriffonbankStocks);
            localStorage.setItem("ownedTurborusStocksv05", ownedTurborusStocks);
            localStorage.setItem("ownedExodmptStocksv05", ownedExodmptStocks);
            localStorage.setItem("ownedRamnetStocksv05", ownedRamnetStocks);
            localStorage.setItem("ownedAlphacenStocksv05", ownedAlphacenStocks);
            localStorage.setItem("ownedScatterStocksv05", ownedScatterStocks);
            localStorage.setItem("ownedKalzexStocksv05", ownedKalzexStocks);
            localStorage.setItem("ownedSonicosStocksv05", ownedSonicosStocks);
            localStorage.setItem("ownedTrancextStocksv05", ownedTrancextStocks);
            localStorage.setItem("ownedStklrStocksv05", ownedStklrStocks);
            localStorage.setItem("ownedVipersecStocksv05", ownedVipersecStocks);
            localStorage.setItem("ownedPLATStocksv05", ownedPLATStocks);
            localStorage.setItem("ownedInfoneStocksv05", ownedInfoneStocks);
            localStorage.setItem("ownedExtankStocksv05", ownedExtankStocks);
            localStorage.setItem("ownedReinaccStocksv05", ownedReinaccStocks);

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
            // update sell div price to display new 5% reduction
            $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2));
            $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - (astorCurrentStockPrice / sellDivider))).toFixed(2));
            $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - (entaqCurrentStockPrice / sellDivider))).toFixed(2));
            $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - (ventexCurrentStockPrice / sellDivider))).toFixed(2));
            $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));

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