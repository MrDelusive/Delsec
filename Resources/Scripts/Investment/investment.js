$(window).load(function () {

    //ZIKI INVEST button was initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        if (money >= 2) {
            money -= 2;
            $('#wikiInvestResult').html("Investing...");
            var investAmt = 2;
            var increment;
            // disable button for 10s
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%                      
                        $('#wikiInvestResult').html("Zikipedia has been shut down. <b>You lose your investment.</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt/2;
                        money += increment; // extra steps for use in alert
                        $('#wikiInvestResult').html("Zikipedia was hacked during your investment, you have lost half. <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia lost track of your investment, you have lost 20% of your investment. <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;                      
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown far beyond anyone ever thought. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#wikiInvestResult').html("Your special Healer abilities have made your investment grow beyond any normal investment. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }                
            }, 10000);                     
        }
        else
            $('#wikiInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SWITCH INVEST
    $('#btnInvestTwitch').prop('disabled', false);
    $('#btnInvestTwitch').click(function () {      
        if (money >= 5) {
            money -= 5;
            $("#emailQuickScopeHeading").show(1);
            if (emailQuickScopeViewed == false) {
                numUnreadEmails++;
                emailQuickScopeDisplayed = true;
                localStorage.setItem("emailQuickScopeDisplayedv04", emailQuickScopeDisplayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
            $('#twitchInvestResult').html("Investing...");
            var investAmt = 5;
            var increment;
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%                      
                        $('#twitchInvestResult').html("The streamer forgot to turn of their stream during a very private moment, and shut down. <b>You lose your investment.</br>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#twitchInvestResult').html("The streamer didn't release any good new content, you lose half of your investment. <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer let out some racist comments, losing many subscribers. <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer hit a lucky break and has had a huge influx of subscribers. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#twitchInvestResult').html("Turns out the streamer produces some entertaining content, their subscribers have grown rapidly. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer is a professional entertainer. Subscribers have gone through the roof. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#twitchInvestResult').html("Your special Healer abilities have promoted the streamer as some kind of Movie star. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
            }, 10000);
        }
        else
            $('#twitchInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //PUNCH INVEST
    $('#btnInvestPunch').prop('disabled', false);
    $('#btnInvestPunch').click(function () {
        if (money >= 10) {
            money -= 10;
            $('#punchInvestResult').html("Investing...");
            var investAmt = 10;
            var increment;
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%                      
                        $('#punchInvestResult').html("You Invest in some new orange grater startup. It was a scam. <b>You lose your investment.</br>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#punchInvestResult').html("You Invest in a coffee maker. It's crap. <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Pineapple shredder. It has it's uses, but they didn't point out the flaws.  <b>RETURN: $" + increment.toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a WiFi Light. It does OK. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Bread Slicer. It does OK. <b>RETURN $</b>" + increment.toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Subwoofer. The Bass is Buttery Biscuit. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Short Film. It gets quite a following. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Money Doubler. It does as described. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new Virtual Reality Device. It does really well. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new website that helps fund start-ups. They're calling it Kick-Ender. It does extremely well. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#punchInvestResult').html("Your special Healer abilities allow you to fund a secret start-up called Illuminators. They somehow do well. It's a conspiracy. <b>RETURN $" + increment.toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
            }, 15000);
        }
        else
            $('#punchInvestResult').html("Not enough money to Invest.");
        return false;
    });

})(jQuery);