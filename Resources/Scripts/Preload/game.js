//
$(document).ready(function () {
    // Check null values, fixes new storage items/changes
    if (localStorage.getItem("money") === null)
        localStorage.setItem("money", money);

    if (localStorage.getItem("threeBitBank") === null)
        localStorage.setItem("threeBitBank", threeBitBank);
    if (localStorage.getItem("fourBitBank") === null)
        localStorage.setItem("fourBitBank", fourBitBank);
    if (localStorage.getItem("sixBitBank") === null)
        localStorage.setItem("sixBitBank", sixBitBank);
    if (localStorage.getItem("russianSixBitBank") === null)
        localStorage.setItem("russianSixBitBank", russianSixBitBank);
    if (localStorage.getItem("eightBitBank") === null)
        localStorage.setItem("eightBitBank", eightBitBank);
    if (localStorage.getItem("twelveBitBank") === null)
        localStorage.setItem("twelveBitBank", twelveBitBank);
    if (localStorage.getItem("sixteenBitBank") === null)
        localStorage.setItem("sixteenBitBank", sixteenBitBank);
    if (localStorage.getItem("fourByteBank") === null)
        localStorage.setItem("fourByteBank", fourByteBank);
    if (localStorage.getItem("eightByteBank") === null)
        localStorage.setItem("eightByteBank", eightByteBank);
    if (localStorage.getItem("sixteenByteBank") === null)
        localStorage.setItem("sixteenByteBank", sixteenByteBank);
    if (localStorage.getItem("thirtytwoByteBank") === null)
        localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
    if (localStorage.getItem("sixtyfourByteBank") === null)
        localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);

    if (localStorage.getItem("numUnreadEmails") === null)
        localStorage.setItem("numUnreadEmails", numUnreadEmails);

    if (localStorage.getItem("totalChunks") === null)
        localStorage.setItem("totalChunks", totalChunks);
   

    if (localStorage.getItem("userClass") === null)
        localStorage.setItem("userClass", userClass);           
    if (localStorage.getItem("warriorClicks") === null)
        localStorage.setItem("warriorClicks", warriorClicks);

    if (localStorage.getItem("lastSaveState") === null)
        localStorage.setItem("lastSaveState", "No Saves.");

    if (typeof (Storage) !== "undefined") {              
        money = parseFloat(localStorage.getItem("money"));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblSaveState').html(localStorage.getItem("lastSaveState"));
                
        threeBitBank = parseInt(localStorage.getItem("threeBitBank"));               
        fourBitBank = parseInt(localStorage.getItem("fourBitBank"));               
        sixBitBank = parseInt(localStorage.getItem("sixBitBank"));             
        russianSixBitBank = parseInt(localStorage.getItem("russianSixBitBank"));
        eightBitBank = parseInt(localStorage.getItem("eightBitBank"));
        twelveBitBank = parseInt(localStorage.getItem("twelveBitBank"));
        sixteenBitBank = parseInt(localStorage.getItem("sixteenBitBank"));
        fourByteBank = parseInt(localStorage.getItem("fourByteBank"));
        eightByteBank = parseInt(localStorage.getItem("eightByteBank"));
        sixteenByteBank = parseInt(localStorage.getItem("sixteenByteBank"));
        thirtytwoByteBank = parseInt(localStorage.getItem("thirtytwoByteBank"));
        sixtyfourByteBank = parseInt(localStorage.getItem("sixtyfourByteBank"));
       
        totalChunks = parseInt(localStorage.getItem("totalChunks"));
        
        userClass = localStorage.getItem("userClass");
        warriorClicks = parseInt(localStorage.getItem("warriorClicks"));

        // must do a string check because localStorage stores strings and not bools STUPID SHIT.
        email1Viewed = localStorage.getItem("email1Viewed");
        email2Viewed = localStorage.getItem("email2Viewed");
        email3Viewed = localStorage.getItem("email3Viewed");
        email4Viewed = localStorage.getItem("email4Viewed");
        emailQuickScopeDisplayed = localStorage.getItem("emailQuickScopeDisplayed");
        emailQuickScopeViewed = localStorage.getItem("emailQuickScopeViewed");      
        emailDelsecStockViewed = localStorage.getItem("emailDelsecStockViewed");
        emailDelsecStockDisplayed = localStorage.getItem("emailDelsecStockDisplayed");
        email4ByteViewed = localStorage.getItem("email4ByteViewed");
        
        numUnreadEmails = parseInt(localStorage.getItem("numUnreadEmails"));
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

    if (fourByteBank > 0) {
        $("#email4ByteHeading").show(1);
        email4ByteDisplayed = "true";
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#fourByteItemDisplay').show();
        $('#fourByteItemDisplay').html("Delsec4byte.exe :" + fourByteBank + " Processes Iterating through " + fourByteBank * 32768 + " Chunks of data per second.<br />");
    }

    if (eightByteBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#eightByteItemDisplay').show();
        $('#eightByteItemDisplay').html("Delsec8Byte.exe :" + eightByteBank + " Processes Iterating through " + eightByteBank * 65536 + " Chunks of data per second.<br />");
    }

    if (sixteenByteBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#sixteenByteItemDisplay').show();
        $('#sixteenByteItemDisplay').html("Delsec16Byte.exe :" + sixteenByteBank + " Processes Iterating through " + sixteenByteBank * 131072 + " Chunks of data per second.<br />");
    }

    if (thirtytwoByteBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#thirtytwoByteItemDisplay').show();
        $('#thirtytwoByteItemDisplay').html("Delsec32Byte.exe :" + thirtytwoByteBank + " Processes Iterating through " + thirtytwoByteBank * 262144 + " Chunks of data per second.<br />");
    }

    if (sixtyfourByteBank > 0) {
        $('#totalChunkDisplay').show();
        $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
        $('#sixtyfourByteItemDisplay').show();
        $('#sixtyfourByteItemDisplay').html("Delsec64Byte.exe :" + sixtyfourByteBank + " Processes Iterating through " + sixtyfourByteBank * 524288 + " Chunks of data per second.<br />");
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

