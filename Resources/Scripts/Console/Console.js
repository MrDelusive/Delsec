// on enter pressed
$(document).keydown(function (e) {   
    if (e.which == 13) {
        $('#btnIncrement').prop('disabled', true);
        $('#btnWarriorIncrement').prop('disabled', true);
        $('#btnHealerIncrement').prop('disabled', true);
        $('#btnRogueIncrement').prop('disabled', true);

        $('#mainGameWindow').append('V:/clientData/5184828>' + $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;") + '<br />');
        var input = $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        if (input == "test")
            $('#mainGameWindow').append('Test string accepted.<br />');
        else if (input == "help")
            $('#mainGameWindow').append('Common commands<br /><br />help<br />about<br />test<br />test<br />test<br />test<br />');     
        else if (input == "about")
            $('#mainGameWindow').append('Delsec created by Luke Parisi<br />I hope you enjoy the game!');

        else if (input == "reset") {
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
            localStorage.setItem("email10KViewed", "false");
            localStorage.setItem("email10KDisplayed", "false");
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

            localStorage.setItem("warriorClicks", 0);
            return true;
        }
        else if (input == "dsfa") {
            money += 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dskfa") {
            money += 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dsdqd") {
            money += 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }




        else
            $('#mainGameWindow').append('Entry ' + input + ' is not recognised as an internal or external command.<br />');
        $('#txtSubmit').val("");
        $('#txtSubmit').focus();

        

        //keep the gameWindow always scrolled to bottom.
        $('#mainGameWindow').scrollTop($('#mainGameWindow')[0].scrollHeight);
        return false;
    }
});
// if clicked anywhere, focus the textbox
$(document).click(function () {

    $('#txtSubmit').focus();
});