$(window).load(function () {
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

    if (localStorage.getItem("totalPackets") === null)
        localStorage.setItem("totalPackets", totalPackets);
   

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
       
        totalPackets = parseInt(localStorage.getItem("totalPackets"));
        
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


    if (threeBitBank > 0) 
        $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 8 / 4 + " Packets/Sec");  

    if (fourBitBank > 0) 
        $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");
    
    if (fourBitBank > 3)
        $("#email4Heading").show(1);

    if (sixBitBank > 0) 
        $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");
    

    if (russianSixBitBank > 0) {
        $("#email3Heading").show(1);
        email3Displayed = "true";
        $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
    }

    if (eightBitBank > 0) 
        $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");    

    if (twelveBitBank > 0) 
        $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");
    
    if (sixteenBitBank > 0) 
        $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");    

    if (fourByteBank > 0) {
        $("#email4ByteHeading").show(1);
        email4ByteDisplayed = "true";
        $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");
    }

    if (eightByteBank > 0) 
        $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");   

    if (sixteenByteBank > 0) 
        $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");

    if (thirtytwoByteBank > 0) 
        $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");

    if (sixtyfourByteBank > 0) 
        $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");   

    if (emailQuickScopeDisplayed == "true")
        $("#emailQuickScopeHeading").show(1);

    if (emailDelsecStockDisplayed == "true")
        $("#emailDelsecStockHeading").show(1);

    if (email1Viewed == "true") {
        $("#btnEmail1View").html("Delsec AutoPostBot - autoGen5184828 (Viewed)");
        $("#btnEmail1View").css("background", "#CCC");
    }

    if (email2Viewed == "true") {
        $("#btnEmail2View").html("Delsec Team - Thank you (Viewed)");
        $("#btnEmail2View").css("background", "#CCC");
    }

    if (email3Viewed == "true") {
        $('#btnEmail3View').html("Tsar of Russia - Thank you (Viewed)");
        $("#btnEmail3View").css("background", "#CCC");
    }

    if (email4Viewed == "true") {
        $('#btnEmail4View').html("Delsec Team - Growing (Viewed)");
        $("#btnEmail4View").css("background", "#CCC");
    }

    if (emailQuickScopeViewed == "true") {
        $('#btnEmailQuickScopeView').html("XxX420N0-SK0PZXxX - Fanks (Viewed)");
        $('#btnEmailQuickScopeView').css("background", "#CCC");
    }

    if (emailDelsecStockViewed == "true") {
        $('#btnEmailDelsecStockView').html("Delsec Team - Stocks (Viewed)");
        $('#btnEmailDelsecStockView').css("background", "#CCC");
    }

    if (email4ByteViewed == "true") {
        $('#btnEmail4ByteView').html("Delsec Team - The Byte Crawlers (Viewed)");
        $('#btnEmail4ByteView').css("background", "#CCC");
    }

    $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);


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

