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
        localStorage.setItem("userClass", userClass);
        return true;
    });
    $('#resetAll').click(function () {
        localStorage.setItem("userClass", "None");
        localStorage.setItem("money", 0);
        localStorage.setItem("threeBitBank", 0);
        localStorage.setItem("fourBitBank", 0);
        localStorage.setItem("sixBitBank", 0);
        localStorage.setItem("russianSixBitBank", 0);
        localStorage.setItem("eightBitBank", 0);
        localStorage.setItem("twelveBitBank", 0);
        localStorage.setItem("sixteenBitBank", 0);
        localStorage.setItem("fourByteBank", 0);
        localStorage.setItem("eightByteBank", 0);
        localStorage.setItem("sixteenByteBank", 0);
        localStorage.setItem("thirtytwoByteBank", 0);
        localStorage.setItem("sixtyfourByteBank", 0);

        localStorage.setItem("totalPackets", 0);

        localStorage.setItem("numUnreadEmails", 2);
        localStorage.setItem("email1Viewed", "false");
        localStorage.setItem("email2Viewed", "false");
        localStorage.setItem("email3Viewed", "false");
        localStorage.setItem("email3Displayed", "false");
        localStorage.setItem("email4Viewed", "false");
        localStorage.setItem("email4Displayed", "false");
        localStorage.setItem("emailQuickScopeViewed", "false");
        localStorage.setItem("emailQuickScopeDisplayed", "false");
        localStorage.setItem("emailDelsecStockViewed", "false");
        localStorage.setItem("emailDelsecStockDisplayed", "false");
        localStorage.setItem("email4ByteViewed", "false");
        localStorage.setItem("email4ByteDisplayed", "false");

        
        localStorage.setItem("ownedDelsecStocks", 0);
        localStorage.setItem("ownedEntaqStocks", 0);
        localStorage.setItem("ownedVentexStocks", 0);
        localStorage.setItem("ownedAstorStocks", 0);
        localStorage.setItem("ownedPopbotStocks", 0);
        localStorage.setItem("ownedPannamStocks", 0);
        localStorage.setItem("ownedTRITStocks", 0);
        localStorage.setItem("ownedCANVStocks", 0);
        localStorage.setItem("ownedOSMStocks", 0);
        localStorage.setItem("ownedPALLADStocks", 0);
        localStorage.setItem("ownedKELVStocks", 0);
        localStorage.setItem("ownedStuccorStocks", 0);
        localStorage.setItem("ownedDelcredStocks", 0);
        localStorage.setItem("ownedRustecStocks", 0);
        localStorage.setItem("ownedExxocredStocks", 0);
        localStorage.setItem("ownedAUStocks", 0);
        localStorage.setItem("ownedAceholdStocks", 0);
        localStorage.setItem("ownedDelholdStocks", 0);
        localStorage.setItem("ownedDIAMStocks", 0);
        localStorage.setItem("ownedPentaccStocks", 0);
        localStorage.setItem("ownedNoodleStocks", 0);
        localStorage.setItem("ownedMegahardStocks", 0);
        localStorage.setItem("ownedChimerasecStocks", 0);
        localStorage.setItem("ownedChimeraholdStocks", 0);
        localStorage.setItem("ownedGriffonbankStocks", 0);
        localStorage.setItem("ownedTurborusStocks", 0);
        localStorage.setItem("ownedExodmptStocks", 0);
        localStorage.setItem("ownedRamnetStocks", 0);
        localStorage.setItem("ownedAlphacenStocks", 0);
        localStorage.setItem("ownedScatterStocks", 0);
        localStorage.setItem("ownedKalzexStocks", 0);
        localStorage.setItem("ownedSonicosStocks", 0);
        localStorage.setItem("ownedTrancextStocks", 0);
        localStorage.setItem("ownedStklrStocks", 0);
        localStorage.setItem("ownedVipersecStocks", 0);
        localStorage.setItem("ownedPLATStocks", 0);
        localStorage.setItem("ownedInfoneStocks", 0);
        localStorage.setItem("ownedExtankStocks", 0);
        localStorage.setItem("ownedReinaccStocks", 0);

        localStorage.setItem("delsecCurrentStockPrice", 2.20);
        localStorage.setItem("entaqCurrentStockPrice", 0.57);       
        localStorage.setItem("ventexCurrentStockPrice", 1.54);
        localStorage.setItem("astorCurrentStockPrice", 0.95);       
        localStorage.setItem("popbotCurrentStockPrice", 0.01);
        localStorage.setItem("pannamCurrentStockPrice", 4.82);
        localStorage.setItem("TRITCurrentStockPrice", 5.86);
        localStorage.setItem("CANVCurrentStockPrice", 8.72);
        localStorage.setItem("OSMCurrentStockPrice", 11.26);
        localStorage.setItem("PALLADCurrentStockPrice", 15.77);
        localStorage.setItem("KELVCurrentStockPrice", 23.11);
        localStorage.setItem("stuccorCurrentStockPrice", 58.98);
        localStorage.setItem("delcredCurrentStockPrice", 97.85);
        localStorage.setItem("rustecCurrentStockPrice", 115.33);
        localStorage.setItem("exxocredCurrentStockPrice", 126.88);
        localStorage.setItem("AUCurrentStockPrice", 257.23);
        localStorage.setItem("aceholdCurrentStockPrice", 340.01);
        localStorage.setItem("delholdCurrentStockPrice", 582.94);
        localStorage.setItem("DIAMCurrentStockPrice", 1196.77);
        localStorage.setItem("pentaccCurrentStockPrice", 1206.65);
        localStorage.setItem("noodleCurrentStockPrice", 1572.63);
        localStorage.setItem("megahardCurrentStockPrice", 2322.17);
        localStorage.setItem("chimerasecCurrentStockPrice", 3703.29);
        localStorage.setItem("chimeraholdCurrentStockPrice", 3908.06);
        localStorage.setItem("griffonbankCurrentStockPrice", 4817.25);
        localStorage.setItem("turborusCurrentStockPrice", 5176.99);
        localStorage.setItem("exodmptCurrentStockPrice", 5911.76);
        localStorage.setItem("ramnetCurrentStockPrice", 6427.11);
        localStorage.setItem("alphacenCurrentStockPrice", 6662.88);
        localStorage.setItem("scatterCurrentStockPrice", 6727.27);
        localStorage.setItem("kalzexCurrentStockPrice", 7111.11);
        localStorage.setItem("sonicosCurrentStockPrice", 7421.86);
        localStorage.setItem("trancextCurrentStockPrice", 7512.81);
        localStorage.setItem("stklrCurrentStockPrice", 7700.97);
        localStorage.setItem("vipersecCurrentStockPrice", 10801.91);
        localStorage.setItem("PLATCurrentStockPrice", 11721.88);
        localStorage.setItem("infoneCurrentStockPrice", 12821.88);
        localStorage.setItem("extankCurrentStockPrice", 13532.15);
        localStorage.setItem("reinaccCurrentStockPrice", 15234.04);

        localStorage.setItem("lastSaveState", "No saves.");
        return true;
    });

    $('#save').click(function () {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem("money", money);
            localStorage.setItem("threeBitBank", threeBitBank);
            localStorage.setItem("fourBitBank", fourBitBank);
            localStorage.setItem("sixBitBank", sixBitBank);
            localStorage.setItem("russianSixBitBank", russianSixBitBank);
            localStorage.setItem("eightBitBank", eightBitBank);
            localStorage.setItem("twelveBitBank", twelveBitBank);
            localStorage.setItem("sixteenBitBank", sixteenBitBank);
            localStorage.setItem("fourByteBank", fourByteBank);
            localStorage.setItem("eightByteBank", eightByteBank);
            localStorage.setItem("sixteenByteBank", sixteenByteBank);
            localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
            localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);

            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("totalPackets", totalPackets);

            localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
            localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
            localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
            localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
            localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
            localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
            localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
            localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
            localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
            localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
            localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
            localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
            localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
            localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
            localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
            localStorage.setItem("ownedAUStocks", ownedAUStocks);
            localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
            localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
            localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
            localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
            localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
            localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
            localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
            localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
            localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
            localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
            localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
            localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
            localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
            localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
            localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
            localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
            localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
            localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
            localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
            localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
            localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
            localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
            localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);

            if (userClass == "Warrior")
                localStorage.setItem("warriorClicks", warriorClicks); //remember number of clicks to calculate power of warrior generate
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
            localStorage.setItem("userClass", userClass);
            
            $('#classDisplay').html("<br /><br />Class: " + userClass);
            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);
            ;
            $('#warriorAbilities').delay(500);
            $('#btnWarriorAbilities').delay(500);
            $("#warriorGenerate").delay(500);
            $("#btnPowerGenerators").delay(500);

            $('#warriorAbilities').fadeIn(500);
            $('#btnWarriorAbilities').fadeIn(500);
            $("#btnPowerGenerators").fadeIn(500);
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
            localStorage.setItem("userClass", userClass);

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
            localStorage.setItem("userClass", userClass);
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
            localStorage.setItem("userClass", userClass);
            
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