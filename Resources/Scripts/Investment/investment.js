$(window).load(function () {

    //initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        if (money >= 2) {                    
            $('#wikiInvestResult').html("Investing...");
            var investAmt = 2;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#wikiInvestResult').html("Zikipedia has been shut down. You lose your investment. <b>RETURN: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt/2;
                        money += increment; // extra steps for use in alert
                        $('#wikiInvestResult').html("Zikipedia was hacked during your investment, you have lost half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia lost track of your investment, you have lost 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;                      
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown far beyond anyone ever thought. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#wikiInvestResult').html("Your special Healer abilities have made your investment grow beyond any normal investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
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
                localStorage.setItem("emailQuickScopeDisplayedv05", emailQuickScopeDisplayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
            $('#twitchInvestResult').html("Investing...");
            var investAmt = 5;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#twitchInvestResult').html("The streamer forgot to turn of their stream during a very private moment, and shut down. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for display use in div.
                        $('#twitchInvestResult').html("The streamer didn't release any good new content, you lose half of your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer let out some racist comments, losing many subscribers. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer hit a lucky break and has had a huge influx of subscribers. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#twitchInvestResult').html("Turns out the streamer produces some entertaining content, their subscribers have grown rapidly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer is a professional entertainer. Subscribers have gone through the roof. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#twitchInvestResult').html("Your special Healer abilities have promoted the streamer as some kind of Movie star. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
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
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#punchInvestResult').html("You Invest in some new orange grater startup. It was a scam. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#punchInvestResult').html("You Invest in a coffee maker. It's crap. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Pineapple shredder. It has it's uses, but they didn't point out the flaws. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a WiFi Light. It does OK. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Bread Slicer. It does OK. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Subwoofer. The Bass is Buttery Biscuit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Short Film. It gets quite a following. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Money Doubler. It does as described. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new Virtual Reality Device. It does really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new website that helps fund start-ups. They're calling it Kick-Ender. It does extremely well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#punchInvestResult').html("Your special Healer abilities allow you to fund a secret start-up called Illuminators. They somehow do well. It's a conspiracy. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
            }, 15000);
        }
        else
            $('#punchInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GAME INVEST
    $('#btnInvestGame').prop('disabled', false);
    $('#btnInvestGame').click(function () {
        if (money >= 25) {
            $('#gameInvestResult').html("Investing...");
            var investAmt = 25;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#gameInvestResult').html("The game enters development hell, and never gets finished. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#gameInvestResult').html("The game is an absolute flop. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#gameInvestResult').html("The game gets bad reviews, even from reviewers who got payed out. You lose 20% of your investment.<b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#gameInvestResult').html("The game meets buyers expectations. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#gameInvestResult').html("The game meets buyers expectations. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#gameInvestResult').html("The game meets buyers expectations. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#gameInvestResult').html("The game does quite well. A definite 7/10 game <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#gameInvestResult').html("The game is great. It even makes top 10 on Gleam for a day. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#gameInvestResult').html("VGN - Almost perfect. Just missing fish pathing. 9/10. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#gameInvestResult').html("The game is a hit. 10 Billion copies sold on the first day alone. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#gameInvestResult').html("The web-browser clicker game Seldec you supported somehow manages to give you real money due to your special healer abilities. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
            }, 15000);
        }
        else
            $('#gameInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //POKER INVEST
    $('#btnInvestPoker').prop('disabled', false);
    $('#btnInvestPoker').click(function () {
        if (money >= 100) {
            $('#pokerInvestResult').html("Investing...");
            var investAmt = 100;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#pokerInvestResult').html("Your friend loses all the money to a bad beat, Quad Aces vs Royal Flush. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#pokerInvestResult').html("Your friend is a bad poker player and loses almost all their money. You lose half of your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend was winning most of the time but slowly lost over time. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend makes a decent overall profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend walks away with twice what they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend wins a massive hand and decides that it is enough. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend is a poker star. They know how to play. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#pokerInvestResult').html("Your healer abilities allow you to ensure the investment is 'sorted'. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
            }, 20000);
        }
        else
            $('#pokerInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //RENTAL INVEST
    $('#btnInvestRental').prop('disabled', false);
    $('#btnInvestRental').click(function () {
        if (money >= 500) {
            $('#rentalInvestResult').html("Investing...");
            var investAmt = 500;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
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
                        increment = investAmt;
                        $('#rentalInvestResult').html("The bike gets stolen. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#rentalInvestResult').html("The bike needs a lot of maintenence, and costs you more over time than you can earn from it. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#rentalInvestResult').html("The bike burns through petrol like crazy, and petrol is not cheap. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#rentalInvestResult').html("Many people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#rentalInvestResult').html("The bike is rented out mostly on weekends, where it earns you a nice sum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#rentalInvestResult').html("The bike gets rented out most days. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        $('#rentalInvestResult').html("The bike is rented out completely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        $('#rentalInvestResult').html("Due to your healer abilities, you find someone you can sell the bike to for a 1000% markup. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2));
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2));
            }, 30000);
        }
        else
            $('#rentalInvestResult').html("Not enough money to Invest.");
        return false;
    });

})(jQuery);