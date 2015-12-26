$(window).load(function () {
    setInterval(function () {
        // This is the autosave feature. Autosave every 15 seconds, don't know how much it could lag out from faster intervals
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
            
            localStorage.setItem("ownedDelsecStocksv04", ownedDelsecStocks);
            localStorage.setItem("ownedEntaqStocksv04", ownedEntaqStocks);
            localStorage.setItem("ownedVentexStocksv04", ownedVentexStocks);
            localStorage.setItem("ownedAstorStocksv04", ownedAstorStocks);
            localStorage.setItem("ownedPopbotStocksv04", ownedPopbotStocks);
            $('#lblSaveState').html("Last Autosave: " + Date($.now));
            localStorage.setItem("lastSaveState", "Last Autosave: " + Date($.now));

            if (userClass == "Warrior")
                localStorage.setItem("warriorClicksv04", warriorClicks); //remember number of clicks to calculate power of warrior generate
        }
        else {
            // Sorry! No Web Storage support..
            alert("no support on your browser");
        }
    }, 15000);
})(jQuery);