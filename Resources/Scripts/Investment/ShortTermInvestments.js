$(document).ready(function () {

    //initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        if (money >= 2) {
            var timer = 10;
            $('#wikiInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#wikiInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            
            var investAmt = 2;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // - 75%      
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has been shut down. You lose 75% of your investment. <b>RETURN: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#wikiInvestResult').html("Zikipedia was hacked during your investment, you have lost half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia lost track of your investment, you have lost 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;                       
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;                      
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown from your investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has Developed new features that have sold really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#wikiInvestResult').html("Zikipedia has grown far beyond anyone ever thought. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
                        money += increment;
                        $('#wikiInvestResult').html("Your special Healer abilities have made your investment grow beyond any normal investment. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#twitchInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 5;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // - 75%         
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer forgot to turn of their stream during a very private moment, and shut down. You lose 75% of your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for display use in div.
                        $('#twitchInvestResult').html("The streamer didn't release any good new content, you lose half of your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer let out some racist comments, losing many subscribers. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer's channel has grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer hit a lucky break and has had a huge influx of subscribers. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#twitchInvestResult').html("Turns out the streamer produces some entertaining content, their subscribers have grown rapidly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#twitchInvestResult').html("The streamer is a professional entertainer. Subscribers have gone through the roof. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
                        money += increment;
                        $('#twitchInvestResult').html("Your special Healer abilities have promoted the streamer as some kind of Movie star. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#punchInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 10;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // - 75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in some new orange grater startup. It was a scam. You lose your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#punchInvestResult').html("You Invest in a coffee maker. It's crap. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Pineapple shredder. It has it's uses, but they didn't point out the flaws. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a WiFi Light. It does OK. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Bread Slicer. It does OK. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Subwoofer. The Bass is Buttery Biscuit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Short Film. It gets quite a following. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a Money Grower. It does as described. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new Virtual Reality Device. It does really well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#punchInvestResult').html("You Invest in a new website that helps fund start-ups. They're calling it Kick-Ender. It does extremely well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
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
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#websiteInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 25;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // - 75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#websiteInvestResult').html("The website is just a waste of money. You lose 75% of your investment <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#websiteInvestResult').html("The website isn't really useful. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#websiteInvestResult').html("The website has its personal uses. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
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
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#websiteInvestResult').html("You make a dating website. It can be singled out as pretty decent. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#websiteInvestResult').html("You make a social media website. You settle on headdesk.com. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#websiteInvestResult').html("You make a popular video sharing website. It gets all the views. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
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
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#pokerInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 100;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // -75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend loses most of the money to a bad beat, Quad Aces vs Royal Flush. You lose 75% of your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#pokerInvestResult').html("Your friend is a bad poker player and loses almost all their money. You lose half of your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend was winning most of the time but slowly lost over time. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend plays it safe and walks away with slightly more they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend makes a decent overall profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend walks away with almost double what they started with. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend wins a massive hand and decides that it is enough. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#pokerInvestResult').html("Your friend is a poker star. They know how to play. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
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
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#rentalInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 500;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: // -75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#rentalInvestResult').html("The bike gets stolen. You lose 75% of your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#rentalInvestResult').html("The bike needs a lot of maintenence, and costs you more over time than you can earn from it. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#rentalInvestResult').html("The bike burns through petrol like crazy, and petrol is not cheap. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#rentalInvestResult').html("A few people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#rentalInvestResult').html("Many people have been interested in renting the bike. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#rentalInvestResult').html("The bike is rented out mostly on weekends, where it earns you a nice sum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 90%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#rentalInvestResult').html("The bike gets rented out most days. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#rentalInvestResult').html("The bike is rented out completely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 200% Only possible from Healer
                        increment = investAmt * 3;
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
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#raceInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 1000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#raceInvestResult').html("The car crashes and explodes. The driver makes it out OK. You lose 75% of your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#raceInvestResult').html("The car is disqualified before the race starts. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#raceInvestResult').html("The car comes last. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 7th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 6th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#raceInvestResult').html("The car comes 5th. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#raceInvestResult').html("The car just missed the top 3. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#raceInvestResult').html("The car skims past 3rd place right at the finish line, making it into the top 3. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#raceInvestResult').html("2nd Best. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#raceInvestResult').html("The car wins the race. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
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
                localStorage.setItem("money", money);
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
                if (timer > 1) {
                    timer--;
                    $('#miningInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 2500;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a cursed tomb, they are no where to be found. You lose 75% of your investment <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#miningInvestResult').html("The expedition returns nothing useful. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a few clumps of worthless materials. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of rocks. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of ore. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small amount of gems. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a small gem cluster worth a little bit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a moderate amount of valuable ores. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#miningInvestResult').html("The expedition finds a large packet of valueable ores. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. They collect the valueable artifacts. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
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
                localStorage.setItem("money", money);
            }, 60000);
        }
        else
            $('#miningInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SOCIAL MEDIA
    $('#btnInvestSocialMedia').prop('disabled', false);
    $('#btnInvestSocialMedia').click(function () {
        if (money >= 5000) {
            var timer = 90;
            $('#socialMediaInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#socialMediaInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 5000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy doesn't work as well as you thought, no new connections. You lose 75% of your investment. <b>RESULT: -$" + (investAmt * 0.75).toFixed(2) + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#socialMediaInvestResult').html("The strategy gets you a few new connections, they seem a bit suss though. You lose half your investment. <b>RESULT: -$" + (investAmt / 2).toFixed(2) + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy gets you a couple of connections, no where near enough. You lose 20% of your investment. <b>RESULT: -$" + (investAmt / 5).toFixed(2) + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy boosts your online presence slightly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy boosts your online presence slightly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy boosts your online presence slightly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy builds a good online presence. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy markets you very well. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy builds your connection base dramatically. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#socialMediaInvestResult').html("The strategy works better than the Streisand effect. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#socialMediaInvestResult').html("You are a strategy master, and gain a massive online presence. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 90000);
        }
        else
            $('#socialMediaInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //BLUE CHIP COMPANY
    $('#btnInvestBlueChip').prop('disabled', false);
    $('#btnInvestBlueChip').click(function () {
        if (money >= 10000) {
            var timer = 120;
            $('#blueChipInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#blueChipInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 10000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#blueChipInvestResult').html("'Blue Chip' What a load of crap. The company went bust for selling cheap knockoffs. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#blueChipInvestResult').html("The company got hit with a patent troll, slowing progress. You lose half your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#blueChipInvestResult').html("The company was facing a slow season. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#blueChipInvestResult').html("Your investment in SIFA performed as expected. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#blueChipInvestResult').html("Your investment in McFC performed as expected. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#blueChipInvestResult').html("Your investment in Junebeline performed as expected. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#blueChipInvestResult').html("Your investment in Ray-Deon created a new product that sold above average. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#blueChipInvestResult').html("Your investment in N-video created a new product that sold really well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.9;
                        money += increment;
                        $('#blueChipInvestResult').html("You invest in Carrot, which hyped one of its new products, and sent sales way up. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#blueChipInvestResult').html("You invest in Edison, it is on the forefront of progress. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#blueChipInvestResult').html("You invest in Delsec, It's almost as if its programmed to do well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 120000);
        }
        else
            $('#socialMediaInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SelfImprovement
    $('#btnInvestSelfImprovement').prop('disabled', false);
    $('#btnInvestSelfImprovement').click(function () {
        if (money >= 25000) {
            var timer = 180;
            $('#selfImprovementInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#selfImprovementInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 25000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap 100 different ways. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap, 50 different ways. You lose half your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. You lose 20% of your investment.<b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. Though it makes you angry and you do something. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. Though it makes you angry and you do something. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. But you decided enough was enough and sold some stuff you didn't need. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. But you didn't accept it and made something of it. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. But you challenged the speaker and became the new speaker. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. You didn't like it and reported the company as a scam. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. It still managed to motivate you enough to make a good profit from it. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#selfImprovementInvestResult').html("The course just told you the same old crap. But you are a healer, so the rules don't apply to you. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 180000);
        }
        else
            $('#selfImprovementInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SelfImprovement2
    $('#btnInvestSelfImprovement2').prop('disabled', false);
    $('#btnInvestSelfImprovement2').click(function () {
        if (money >= 50000) {
            var timer = 180;
            $('#selfImprovement2InvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#selfImprovement2InvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 50000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("Yeah, the course wasn't really better. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#selfImprovement2InvestResult').html("The course was run by the same idiots as the other one. You lose half your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you some valueable life tips. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to use tools properly. No more expenses on tools. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to clean a room effectively. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to tie your shoes properly, more time saved. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to not be scammed. The Nigerian Prince is upset you won't be sending him $50k. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to basic. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to dance. You make a killing off your new dance career. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to program. You make an A.I that can generate you money. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#selfImprovement2InvestResult').html("The course taught you how to heal. You start a cult. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 180000);
        }
        else
            $('#selfImprovement2InvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Energy
    $('#btnInvestEnergy').prop('disabled', false);
    $('#btnInvestEnergy').click(function () {
        if (money >= 100000) {
            var timer = 240;
            $('#energyInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#energyInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 100000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
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
                    case 1: //-75%   
                        increment = investAmt * 0.25;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Rat Power. Who even thought of this? You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#energyInvestResult').html("You invest in Hamster Power. It's a little bit better than Rat Power. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Horse Power, it's a bit behind the times. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Snap Power. It's got the power. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Ranger Power. It does its job. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Max Power. It isn't really max, but it's good. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Thor Power. It can light up cities. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Zeus Power. It can light up cities. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Nuclear Power. It can really light up cities. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Double Sun Power. Watch out for the UV though. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#energyInvestResult').html("You invest in Anti-Matter Power. Extremely powerful. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
            }, 240000);
        }
        else
            $('#energyInvestResult').html("Not enough money to Invest.");
        return false;
    });

});