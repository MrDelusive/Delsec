$(window).load(function () {

    //initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        if (money >= 2) {
            var timer = 10;
            $('#wikiInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#wikiInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            
            var investAmt = 2;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown far beyond anyone ever thought. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#wikiInvestResult').html("Your special Healer abilities have made your investment grow beyond any normal investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                localStorage.setItem("emailQuickScopeDisplayed", emailQuickScopeDisplayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
            var timer = 10;
            $('#twitchInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#twitchInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 5;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#twitchInvestResult').html("Turns out the streamer produces some entertaining content, their subscribers have grown rapidly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer is a professional entertainer. Subscribers have gone through the roof. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#twitchInvestResult').html("Your special Healer abilities have promoted the streamer as some kind of Movie star. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
            var timer = 15;
            $('#punchInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#punchInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 10;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new Virtual Reality Device. It does really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new website that helps fund start-ups. They're calling it Kick-Ender. It does extremely well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#punchInvestResult').html("Your special Healer abilities allow you to fund a secret start-up called Illuminators. They somehow do well. It's a conspiracy. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, 15000);
        }
        else
            $('#punchInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //WEBSITE INVEST
    $('#btnInvestWebsite').prop('disabled', false);
    $('#btnInvestWebsite').click(function () {
        if (money >= 25) {
            var timer = 15;
            $('#websiteInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#websiteInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 25;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                        $('#websiteInvestResult').html("The website is just a waste of money. You lose your investment <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#websiteInvestResult').html("The website isn't really useful. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#websiteInvestResult').html("The website has its personal uses. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#websiteInvestResult').html("You make a photography website which gets a bit of exposure. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#websiteInvestResult').html("You make a blog website, it gets a few comments. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#websiteInvestResult').html("You make a small .css trophy website. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#websiteInvestResult').html("You make an instructional website on how to make websites, it helps out. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#websiteInvestResult').html("You make a dating website. It can be singled out as pretty decent. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#websiteInvestResult').html("You make a social media website. You settle on headdesk.com. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#websiteInvestResult').html("You make a popular video sharing website. It gets all the views. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#websiteInvestResult').html("You make a popular news forum website. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, 15000);
        }
        else
            $('#websiteInvestResult').html("Not enough money to Invest.");
        return false;
    });



    //POKER INVEST
    $('#btnInvestPoker').prop('disabled', false);
    $('#btnInvestPoker').click(function () {
        if (money >= 100) {
            var timer = 20;
            $('#pokerInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#pokerInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 100;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend wins a massive hand and decides that it is enough. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend is a poker star. They know how to play. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#pokerInvestResult').html("Your healer abilities allow you to ensure the investment is 'sorted'. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
            var timer = 30;
            $('#rentalInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#rentalInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 500;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#rentalInvestResult').html("The bike gets rented out most days. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#rentalInvestResult').html("The bike is rented out completely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#rentalInvestResult').html("Due to your healer abilities, you find someone you can sell the bike to for a 300% markup. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, 30000);
        }
        else
            $('#rentalInvestResult').html("Not enough money to Invest.");
        return false;
    });


    //CAR RACE INVEST
    $('#btnInvestRace').prop('disabled', false);
    $('#btnInvestRace').click(function () {
        if (money >= 1000) {
            var timer = 30;
            $('#raceInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#raceInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 1000;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                        $('#raceInvestResult').html("The car crashes and explodes. The driver makes it out OK. You lose your investment. <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#raceInvestResult').html("The car is disqualified before the race starts. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#raceInvestResult').html("The car comes last. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 7th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 6th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 5th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#raceInvestResult').html("The car just missed the top 3. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#raceInvestResult').html("The car skims past 3rd place right at the finish line, making it into the top 3. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#raceInvestResult').html("2nd Best. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#raceInvestResult').html("The car wins the race. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#raceInvestResult').html("What's better than winning the race? only a healer would know. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, 30000);
        }
        else
            $('#raceInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //MINING EXPEDITION INVEST
    $('#btnInvestMining').prop('disabled', false);
    $('#btnInvestMining').click(function () {
        if (money >= 2500) {
            var timer = 60;
            $('#miningInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#miningInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 2500;
            money -= investAmt;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                        $('#miningInvestResult').html("The expedition finds a cursed tomb, they are no where to be found. You lose your investment <b>RESULT: -$" + (investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt / 2;
                        money += increment; // extra steps for use in alert
                        $('#miningInvestResult').html("The expedition returns nothing useful. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a few clumps of worthless materials. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of rocks. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of ore. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of gems. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small gem cluster worth a little bit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a moderate amount of valuable ores. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a large packet of valueable ores. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. They collect the valueable artifacts. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 300% Only possible from Healer
                        increment = investAmt * 4;
                        money += increment;
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. Due to your special healer abilities they uncover the secret treasure room. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, 60000);
        }
        else
            $('#miningInvestResult').html("Not enough money to Invest.");
        return false;
    });

})(jQuery);