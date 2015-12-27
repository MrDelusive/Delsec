//v05
$(document).ready(function () {
    // Check null values, fixes new storage items/changes
    if (localStorage.getItem("moneyv05") === null)
        localStorage.setItem("moneyv05", money);

    if (localStorage.getItem("threeBitBankv05") === null)
        localStorage.setItem("threeBitBankv05", threeBitBank);
    if (localStorage.getItem("fourBitBankv05") === null)
        localStorage.setItem("fourBitBankv05", fourBitBank);
    if (localStorage.getItem("sixBitBankv05") === null)
        localStorage.setItem("sixBitBankv05", sixBitBank);
    if (localStorage.getItem("russianSixBitBankv05") === null)
        localStorage.setItem("russianSixBitBankv05", russianSixBitBank);
    if (localStorage.getItem("eightBitBankv05") === null)
        localStorage.setItem("eightBitBankv05", eightBitBank);
    if (localStorage.getItem("twelveBitBankv05") === null)
        localStorage.setItem("twelveBitBankv05", twelveBitBank);
    if (localStorage.getItem("sixteenBitBankv05") === null)
        localStorage.setItem("sixteenBitBankv05", sixteenBitBank);

    if (localStorage.getItem("numUnreadEmailsv05") === null)
        localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);

    if (localStorage.getItem("totalChunksv05") === null)
        localStorage.setItem("totalChunksv05", totalChunks);
   

    if (localStorage.getItem("userClassv05") === null)
        localStorage.setItem("userClassv05", userClass);           
    if (localStorage.getItem("warriorClicksv05") === null)
        localStorage.setItem("warriorClicksv05", warriorClicks);

    if (localStorage.getItem("lastSaveState") === null)
        localStorage.setItem("lastSaveState", "No Saves.");

    if (typeof (Storage) !== "undefined") {              
        money = parseFloat(localStorage.getItem("moneyv05"));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblSaveState').html(localStorage.getItem("lastSaveState"));
                
        threeBitBank = parseInt(localStorage.getItem("threeBitBankv05"));               
        fourBitBank = parseInt(localStorage.getItem("fourBitBankv05"));               
        sixBitBank = parseInt(localStorage.getItem("sixBitBankv05"));             
        russianSixBitBank = parseInt(localStorage.getItem("russianSixBitBankv05"));
        eightBitBank = parseInt(localStorage.getItem("eightBitBankv05"));
        twelveBitBank = parseInt(localStorage.getItem("twelveBitBankv05"));
        sixteenBitBank = parseInt(localStorage.getItem("sixteenBitBankv05"));
       
        totalChunks = parseInt(localStorage.getItem("totalChunksv05"));
        
        userClass = localStorage.getItem("userClassv05");
        warriorClicks = parseInt(localStorage.getItem("warriorClicksv05"));

        // must do a string check because localStorage stores strings and not bools STUPID SHIT.
        email1Viewed = localStorage.getItem("email1Viewedv05");
        email2Viewed = localStorage.getItem("email2Viewedv05");
        email3Viewed = localStorage.getItem("email3Viewedv05");
        email4Viewed = localStorage.getItem("email4Viewedv05");
        emailQuickScopeDisplayed = localStorage.getItem("emailQuickScopeDisplayedv05");
        emailQuickScopeViewed = localStorage.getItem("emailQuickScopeViewedv05");      
        emailDelsecStockViewed = localStorage.getItem("emailDelsecStockViewedv05");
        emailDelsecStockDisplayed = localStorage.getItem("emailDelsecStockDisplayedv05");
        
        numUnreadEmails = parseInt(localStorage.getItem("numUnreadEmailsv05"));
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
    }
    else
        alert("no support on your browser");
    //// THIS SECTION SHOULD MATCH ALL GAME CONDITIONS ////

    // check for div updates on page load as well now because of localStorage

    $("#btnShop").fadeIn(500);
    $("#btnEmails").fadeIn(500);
    $("#btnInvestments").fadeIn(500);
    $("#btnStockMarket").fadeIn(500);
    $("#btnAbilities").fadeIn(500);
    $("#btnConsole").fadeIn(500);


    if (threeBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#threeBitItemDisplay').show();
        $('#threeBitItemDisplay').html("Delsec3bit.exe :" + threeBitBank + " Processes Iterating through " + threeBitBank * 8 / 4 + " Chunks of data per second.<br />");
    }

    if (fourBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#fourBitItemDisplay').show();
        $('#fourBitItemDisplay').html("Delsec4bit.exe :" + fourBitBank + " Processes Iterating through " + fourBitBank * 4 + " Chunks of data per second.<br />");
    }
    if (fourBitBank > 3)
        $("#email4Heading").show(1);

    if (sixBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#sixBitItemDisplay').show();
        $('#sixBitItemDisplay').html("Delsec6bit.exe :" + sixBitBank + " Processes Iterating through " + sixBitBank * 16 + " Chunks of data per second.<br />");
    }

    if (russianSixBitBank > 0) {
        $("#email3Heading").show(1);
        email3Displayed = "true";
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#russianSixBitItemDisplay').show();
        $('#russianSixBitItemDisplay').html("Russian6bit.exe :" + russianSixBitBank + " Processes Iterating through " + russianSixBitBank * 16 + " Chunks of data per second.<br />");
    }

    if (eightBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#eightBitItemDisplay').show();
        $('#eightBitItemDisplay').html("Delsec8bit.exe :" + eightBitBank + " Processes Iterating through " + eightBitBank * 64 + " Chunks of data per second.<br />");
    }

    if (twelveBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#twelveBitItemDisplay').show();
        $('#twelveBitItemDisplay').html("Delsec12bit.exe :" + twelveBitBank + " Processes Iterating through " + twelveBitBank * 1024 + " Chunks of data per second.<br />");
    }

    if (sixteenBitBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#sixteenBitItemDisplay').show();
        $('#sixteenBitItemDisplay').html("Delsec16bit.exe :" + sixteenBitBank + " Processes Iterating through " + sixteenBitBank * 16384 + " Chunks of data per second.<br />");
    }

    if (emailQuickScopeDisplayed == "true")
        $("#emailQuickScopeHeading").show(1);

    if (emailDelsecStockDisplayed == "true")
        $("#emailDelsecStockHeading").show(1);

    $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);


    $('#classDisplay').html("<br /><br />Class: " + userClass);
    if (userClass == "Warrior") {
        $("#btnAbilities").hide();
        $("#btnWarriorAbilities").fadeIn(500);
        $("#btnPowerGenerators").fadeIn(500);
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
        sellDivider = 20; // Sell price only 5% lower if rogue.
    }
    if (userClass == "Healer") {
        $("#btnAbilities").hide();
        $("#btnHealerAbilities").fadeIn(500);
        $("#manualIncrementDisplay").hide();
        $("#healerGenerate").show();
    }
       

    var $window = $(window);

    var visible = false;
    $(window).scroll( function(){
	
        //when title is no longer visible. Bool introduced to stop the animation triggering for every scroll event.
        if ($(this).scrollTop() > 100 && visible == false ) {
            $('#lblMoneyDisplayScroll').animate({ 'opacity': '1' }, 100);
            visible = true;
        }
        else if ($(this).scrollTop() < 100 && visible == true ) {
            $('#lblMoneyDisplayScroll').animate({ 'opacity': '0' }, 100);
            visible = false;
        }
    });
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

