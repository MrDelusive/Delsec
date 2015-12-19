//v04

$(document).ready(function () {
    // Check null values, fixes new storage items/changes
    if (localStorage.getItem("moneyv04") === null)
        localStorage.setItem("moneyv04", money);

    if (localStorage.getItem("threeBitBankv04") === null)
        localStorage.setItem("threeBitBankv04", threeBitBank);
    if (localStorage.getItem("fourBitBankv04") === null)
        localStorage.setItem("fourBitBankv04", fourBitBank);
    if (localStorage.getItem("sixBitBankv04") === null)
        localStorage.setItem("sixBitBankv04", sixBitBank);
    if (localStorage.getItem("russianSixBitBankv04") === null)
        localStorage.setItem("russianSixBitBankv04", russianSixBitBank);
    if (localStorage.getItem("eightBitBankv04") === null)
        localStorage.setItem("eightBitBankv04", eightBitBank);
    if (localStorage.getItem("twelveBitBankv04") === null)
        localStorage.setItem("twelveBitBankv04", twelveBitBank);
    if (localStorage.getItem("sixteenBitBankv04") === null)
        localStorage.setItem("sixteenBitBankv04", sixteenBitBank);

    if (localStorage.getItem("numUnreadEmailsv04") === null)
        localStorage.setItem("numUnreadEmailsv04", numUnreadEmails);

    if (localStorage.getItem("totalChunksv04") === null)
        localStorage.setItem("totalChunksv04", totalChunks);

    if (localStorage.getItem("delsecCurrentStockPricev04") === null)
        localStorage.setItem("delsecCurrentStockPricev04", delsecCurrentStockPrice);
    if (localStorage.getItem("ownedDelsecStocksv04") === null)
        localStorage.setItem("ownedDelsecStocksv04", ownedDelsecStocks);

    if (localStorage.getItem("userClassv04") === null)
        localStorage.setItem("userClassv04", userClass);           
    if (localStorage.getItem("warriorClicksv04") === null)
        localStorage.setItem("warriorClicksv04", warriorClicks);

    if (typeof (Storage) !== "undefined") {              
        money = parseFloat(localStorage.getItem("moneyv04"));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                
        threeBitBank = parseInt(localStorage.getItem("threeBitBankv04"));               
        fourBitBank = parseInt(localStorage.getItem("fourBitBankv04"));               
        sixBitBank = parseInt(localStorage.getItem("sixBitBankv04"));             
        russianSixBitBank = parseInt(localStorage.getItem("russianSixBitBankv04"));
        eightBitBank = parseInt(localStorage.getItem("eightBitBankv04"));
        twelveBitBank = parseInt(localStorage.getItem("twelveBitBankv04"));
        sixteenBitBank = parseInt(localStorage.getItem("sixteenBitBankv04"));

        numUnreadEmails = parseInt(localStorage.getItem("numUnreadEmailsv04"));        
        totalChunks = parseInt(localStorage.getItem("totalChunksv04"));
        delsecCurrentStockPrice = parseFloat(localStorage.getItem("delsecCurrentStockPricev04"));
        ownedDelsecStocks = parseInt(localStorage.getItem("ownedDelsecStocksv04"));
        userClass = localStorage.getItem("userClassv04");
        warriorClicks = parseInt(localStorage.getItem("warriorClicksv04"));

        // must do a string check because localStorage stores strings and not bools STUPID SHIT.
        email1Viewed = localStorage.getItem("email1Viewedv04");
        email2Viewed = localStorage.getItem("email2Viewedv04");
        email3Viewed = localStorage.getItem("email3Viewedv04");
        email4Viewed = localStorage.getItem("email4Viewedv04");
        emailQuickScopeDisplayed = localStorage.getItem("emailQuickScopeDisplayedv04");
        emailQuickScopeViewed = localStorage.getItem("emailQuickScopeViewedv04");      
        emailDelsecStockViewed = localStorage.getItem("emailDelsecStockViewedv04");
        emailDelsecStockDisplayed = localStorage.getItem("emailDelsecStockDisplayedv04");
            
    }
    else
        alert("no support on your browser");
    

    //// THIS SECTION SHOULD MATCH ALL GAME CONDITIONS ////

    // check for div updates on page load as well now because of localStorage
    if (money >= 1 ) {
        $("#btnShop").fadeIn(500);
        $("#btnEmails").fadeIn(500);
        $("#btnInvestments").fadeIn(500);
        $("#btnStockMarket").fadeIn(500);
        $("#btnAbilities").fadeIn(500);
    }

    if (threeBitBank > 0) 
        $('#threeBitItemDisplay').html("<br />Delsec3bit.exe :" + threeBitBank + " Processes Iterating through " + threeBitBank * 8 / 4 + " Chunks of data per second.<br />");

    if (fourBitBank > 0)
        $('#fourBitItemDisplay').html("<br />Delsec4bit.exe :" + fourBitBank + " Processes Iterating through " + fourBitBank * 4 + " Chunks of data per second.<br />");
    if (fourBitBank > 3)
        $("#email4Heading").show(1);

    if (sixBitBank > 0)
        $('#sixBitItemDisplay').html("<br />Delsec6bit.exe :" + sixBitBank + " Processes Iterating through " + sixBitBank * 16 + " Chunks of data per second.<br />");

    if (russianSixBitBank > 0) {
        $("#email3Heading").show(1);
        email3Displayed = "true";
        $('#russianSixBitItemDisplay').html("<br />Russian6bit.exe :" + russianSixBitBank + " Processes Iterating through " + russianSixBitBank * 16 + " Chunks of data per second.<br />");
    }

    if (eightBitBank > 0)
        $('#eightBitItemDisplay').html("<br />Delsec8bit.exe :" + eightBitBank + " Processes Iterating through " + eightBitBank * 64 + " Chunks of data per second.<br />");

    if (twelveBitBank > 0)
        $('#twelveBitItemDisplay').html("<br />Delsec12bit.exe :" + twelveBitBank + " Processes Iterating through " + twelveBitBank * 1024 + " Chunks of data per second.<br />");

    if (sixteenBitBank > 0)
        $('#sixteenBitItemDisplay').html("<br />Delsec16bit.exe :" + sixteenBitBank + " Processes Iterating through " + sixteenBitBank * 16384 + " Chunks of data per second.<br />");

    if (emailQuickScopeDisplayed == "true")
        $("#emailQuickScopeHeading").show(1);

    if (emailDelsecStockDisplayed == "true")
        $("#emailDelsecStockHeading").show(1);

    $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);

    $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
    $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / 10).toFixed(2));
    $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
    if (ownedDelsecStocks > 0)
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / 10))).toFixed(2));
    else
        $('#delsecSellEstimate').html('$0');


    $('#classDisplay').html("<br /><br />Class: " + userClass);
    if (userClass == "Warrior") {
        $("#btnAbilities").hide();
        $("#btnWarriorAbilities").fadeIn(500);
        $("#manualIncrementDisplay").hide();
        $("#warriorGenerate").show();
    }
    if (userClass == "Wizard") {
        $("#btnAbilities").hide();
        $("#btnWizardAbilities").fadeIn(500);
        $("#manualIncrementDisplay").hide();
        $("#autoWizardGenerate").show();
        $("#autoWizardGenerate").disableSelection();
    }
    if (userClass == "Rogue") {
        $("#btnAbilities").hide();
        $("#btnRogueAbilities").fadeIn(500);
        $("#manualIncrementDisplay").hide();
        $("#rogueGenerate").show();
    }
    if (userClass == "Healer") {
        $("#btnAbilities").hide();
        $("#btnHealerAbilities").fadeIn(500);
        $("#manualIncrementDisplay").hide();
        $("#healerGenerate").show();
    }
        
    var $window = $(window);            
    // parralax effect for each data-type background
    $('div[data-type="background"]').each(function () {
        var $bgobj = $(this);
        $(window).scroll(function () {
            var yPos = -($window.scrollTop() / $bgobj.data('speed'));
            var coords = '50% ' + yPos + 'px';
            $bgobj.css({ backgroundPosition: coords });
        });
    });
});

