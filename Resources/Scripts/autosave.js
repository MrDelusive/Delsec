$(window).load(function () {
    setInterval(function () {
        // This is the autosave feature. Autosave every 15 seconds, don't know how much it could lag out from faster intervals
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
            localStorage.setItem("totalChunks", totalChunks);
            
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

            $('#lblSaveState').html("Last Autosave: " + Date($.now));
            localStorage.setItem("lastSaveState", "Last Autosave: " + Date($.now));

            if (userClass == "Warrior")
                localStorage.setItem("warriorClicks", warriorClicks); //remember number of clicks to calculate power of warrior generate
        }
        else {
            // Sorry! No Web Storage support..
            alert("no support on your browser");
        }
    }, 15000);
})(jQuery);