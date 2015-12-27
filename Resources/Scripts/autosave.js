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