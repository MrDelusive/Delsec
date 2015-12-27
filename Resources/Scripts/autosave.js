$(window).load(function () {
    setInterval(function () {
        // This is the autosave feature. Autosave every 15 seconds, don't know how much it could lag out from faster intervals
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

            $('#lblSaveState').html("Last Autosave: " + Date($.now));
            localStorage.setItem("lastSaveState", "Last Autosave: " + Date($.now));

            if (userClass == "Warrior")
                localStorage.setItem("warriorClicksv05", warriorClicks); //remember number of clicks to calculate power of warrior generate
        }
        else {
            // Sorry! No Web Storage support..
            alert("no support on your browser");
        }
    }, 15000);
})(jQuery);