$(window).load(function () {

    // Investment formula works such that the investment price is removed at the same time as the return is given. This is to synergize with the Interest Generate function of the Healer Class Generate
    // Button. So what happens is the user clicks, it waits x amount of seconds. after x seconds subtract the INVESTMENT AMOUNT, roll 1-10(11) calculate INCREMENT, add INCREMENT to money. RESULT displayed is the
    // actual amount that goes into the account. The only time user will see their account go down is if there is a loss.

    //initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        if (money >= 2) {                    
            $('#wikiInvestResult').html("Investing...");
            var investAmt = 2;
            var increment;
            // disable button for 10s
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                money -= investAmt; // decrement the money after the cycle ends. Synergizes with Investment healer generate button.
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%      
                        increment = investAmt;
                        $('#wikiInvestResult').html("Zikipedia has been shut down. <b>RETURN: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt/2;
                        money += increment; // extra steps for use in alert
                        $('#wikiInvestResult').html("Zikipedia was hacked during your investment, you have lost half. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia lost track of your investment, you have lost 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;                      
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown far beyond anyone ever thought. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#wikiInvestResult').html("Your special Healer abilities have made your investment grow beyond any normal investment. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
            $("#emailQuickScopeHeading").show(1);
            //jQuery being a pain in the ass not storing things as bools
            if (emailQuickScopeDisplayed == "false") {
                numUnreadEmails++;
                emailQuickScopeDisplayed = "true";
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
                money -= investAmt;
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%         
                        increment = investAmt;
                        $('#twitchInvestResult').html("The streamer forgot to turn of their stream during a very private moment, and shut down. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for display use in div.
                        $('#twitchInvestResult').html("The streamer didn't release any good new content, you lose half of your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer let out some racist comments, losing many subscribers. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer hit a lucky break and has had a huge influx of subscribers. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#twitchInvestResult').html("Turns out the streamer produces some entertaining content, their subscribers have grown rapidly. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer is a professional entertainer. Subscribers have gone through the roof. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#twitchInvestResult').html("Your special Healer abilities have promoted the streamer as some kind of Movie star. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
            $('#punchInvestResult').html("Investing...");
            var investAmt = 10;
            var increment;
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                money -= investAmt;
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%   
                        increment = investAmt;
                        $('#punchInvestResult').html("You Invest in some new orange grater startup. It was a scam. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#punchInvestResult').html("You Invest in a coffee maker. It's crap. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Pineapple shredder. It has it's uses, but they didn't point out the flaws.  <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a WiFi Light. It does OK. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Bread Slicer. It does OK. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Subwoofer. The Bass is Buttery Biscuit. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Short Film. It gets quite a following. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Money Doubler. It does as described. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new Virtual Reality Device. It does really well. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new website that helps fund start-ups. They're calling it Kick-Ender. It does extremely well. <b>RESULT: +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#punchInvestResult').html("Your special Healer abilities allow you to fund a secret start-up called Illuminators. They somehow do well. It's a conspiracy. <b>RESULT: +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            }, 15000);
        }
        else
            $('#punchInvestResult').html("Not enough money to Invest.");
        return false;
    });

})(jQuery);