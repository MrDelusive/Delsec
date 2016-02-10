$(document).ready(function () {

    $('#btnShortTermInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#shortTermInvestments").show();
        return false;
    });

    //initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);
    $('#btnInvestWiki').click(function () {
        wikiActive = "true";
        localStorage.setItem("wikiActive", wikiActive);
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
            localStorage.setItem("money", money);
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
                wikiActive = "false";
                localStorage.setItem("wikiActive", wikiActive);
            }, 10000);                     
        }
        else
            $('#wikiInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SWITCH INVEST
    $('#btnInvestTwitch').prop('disabled', false);
    $('#btnInvestTwitch').click(function () {
        twitchActive = "true";
        localStorage.setItem("twitchActive", twitchActive);
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
            localStorage.setItem("money", money);
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
                twitchActive = "false";
                localStorage.setItem("twitchActive", twitchActive);
            }, 10000);
        }
        else
            $('#twitchInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //PUNCH INVEST
    $('#btnInvestPunch').prop('disabled', false);
    $('#btnInvestPunch').click(function () {
        punchActive = "true";
        localStorage.setItem("punchActive", punchActive);
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
            localStorage.setItem("money", money);
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
                punchActive = "false";
                localStorage.setItem("punchActive", punchActive);
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
            websiteActive = "true";
            localStorage.setItem("websiteActive", websiteActive);
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
            localStorage.setItem("money", money);
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
                websiteActive = "false";
                localStorage.setItem("websiteActive", websiteActive);
            }, 15000);
        }
        else
            $('#websiteInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //POKER INVEST
    $('#btnInvestPoker').prop('disabled', false);
    $('#btnInvestPoker').click(function () {
        pokerActive = "true";
        localStorage.setItem("pokerActive", pokerActive);
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
            localStorage.setItem("money", money);
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
                pokerActive = "false";
                localStorage.setItem("pokerActive", pokerActive);
            }, 20000);
        }
        else
            $('#pokerInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //CAR RACE INVEST
    $('#btnInvestRace').prop('disabled', false);
    $('#btnInvestRace').click(function () {
        raceActive = "true";
        localStorage.setItem("raceActive", raceActive);
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
            localStorage.setItem("money", money);
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
                raceActive = "false";
                localStorage.setItem("raceActive", raceActive);
            }, 30000);
        }
        else
            $('#raceInvestResult').html("Not enough money to Invest.");
        return false;
    });
    
    //SOCIAL MEDIA
    $('#btnInvestSocialMedia').prop('disabled', false);
    $('#btnInvestSocialMedia').click(function () {
        socialMediaActive = "true";
        localStorage.setItem("socialMediaActive", socialMediaActive);
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
            localStorage.setItem("money", money);
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
                socialMediaActive = "false";
                localStorage.setItem("socialMediaActive", socialMediaActive);
            }, 90000);
        }
        else
            $('#socialMediaInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //BLUE CHIP COMPANY , from here cycle takes 1 extra second cause of chrome not displaying the result after 0min0sec tick, it does it before.
    $('#btnInvestBlueChip').prop('disabled', false);
    $('#btnInvestBlueChip').click(function () {
        blueChipActive = "true";
        localStorage.setItem("blueChipActive", blueChipActive);
        if (money >= 10000) {
            var minutes = 2;
            var seconds = 60;
            $('#blueChipInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#blueChipInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#blueChipInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#blueChipInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 10000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                blueChipActive = "false";
                localStorage.setItem("blueChipActive", blueChipActive);
            }, 120000);
        }
        else
            $('#blueChipInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SelfImprovement
    $('#btnInvestSelfImprovement').prop('disabled', false);
    $('#btnInvestSelfImprovement').click(function () {
        selfImprovementActive = "true";
        localStorage.setItem("selfImprovementActive", selfImprovementActive);
        if (money >= 25000) {          
            var minutes = 3;
            var seconds = 60;
            $('#selfImprovementInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#selfImprovementInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#selfImprovementInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if(minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#selfImprovementInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 25000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                selfImprovementActive = "false";
                localStorage.setItem("selfImprovementActive", selfImprovementActive);
            }, 181000);
        }
        else
            $('#selfImprovementInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SelfImprovement2
    $('#btnInvestSelfImprovement2').prop('disabled', false);
    $('#btnInvestSelfImprovement2').click(function () {
        selfImprovement2Active = "true";
        localStorage.setItem("selfImprovement2Active", selfImprovement2Active);
        if (money >= 50000) {
            var minutes = 3;
            var seconds = 60;
            $('#selfImprovement2InvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#selfImprovement2InvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#selfImprovement2InvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#selfImprovement2InvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 50000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                selfImprovement2Active = "false";
                localStorage.setItem("selfImprovement2Active", selfImprovement2Active);
            }, 181000);
        }
        else
            $('#selfImprovement2InvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Energy
    $('#btnInvestEnergy').prop('disabled', false);
    $('#btnInvestEnergy').click(function () {
        energyActive = "true";
        localStorage.setItem("energyActive", energyActive);
        if (money >= 100000) {
            var minutes = 4;
            var seconds = 60;
            $('#energyInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#energyInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#energyInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#energyInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 100000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                energyActive = "false";
                localStorage.setItem("energyActive", energyActive);
            }, 241000);
        }
        else
            $('#energyInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Super hero Builder
    $('#btnInvestSuperHero').prop('disabled', false);
    $('#btnInvestSuperHero').click(function () {
        superHeroActive = "true";
        localStorage.setItem("superHeroActive", superHeroActive);
        if (money >= 2000000) {
            var minutes = 8;
            var seconds = 60;
            $('#superHeroInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#superHeroInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#superHeroInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#superHeroInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 2000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                        $('#superHeroInvestResult').html("Your Super Hero gets crap powers, all they can do is tell you if a door is open or not. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#superHeroInvestResult').html("Your Super Hero gets some useless powers, they can use them to clean your car though so not an entire loss. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero's Power is to be a really good worker. Not an entire loss. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can shoot darts from their palms. They become a professional dart player. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can clean any item they touch. They become a champion cleaner. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can grow plants. They get a good Gardening business going. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can zap things with the power of a tazer. They use it in questionable ways. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can go invisible. Casino's report a lot of money missing. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero can fly. They become a professional flying company. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero has Ultra High Intellect. They use it to influence the stock market in your favour. (No not the games stock market). <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#superHeroInvestResult').html("Your Super Hero has Healing powers. They can cure cancer. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                superHeroActive = "false";
                localStorage.setItem("superHeroActive", superHeroActive);
            }, 481000);
        }
        else
            $('#superHeroInvestResult').html("Not enough money to Invest.");
        return false;
    });

    // Movie
    $('#btnInvestMovie').prop('disabled', false);
    $('#btnInvestMovie').click(function () {
        movieActive = "true";
        localStorage.setItem("movieActive", movieActive);
        if (money >= 10000000) {
            var minutes = 15;
            var seconds = 60;
            $('#movieInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#movieInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#movieInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#movieInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 10000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                        $('#movieInvestResult').html("You invest in Chickendemic - A movie about killer chickens. It flops hard. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#movieInvestResult').html("You invest in the second in the series of Gnoll, it doesn't live up to expectations. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#movieInvestResult').html("You invest in The B Room - A movie about a special room. It doesn't make much, but becomes a cult classic. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#movieInvestResult').html("You invest in Fast - A movie about a truck that can't stop. It does OK. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#movieInvestResult').html("You invest in False Truths - An action movie. It does OK. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#movieInvestResult').html("You invest in You've got Letters - A romantic comedy. It does OK. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#movieInvestResult').html("You invest in Teenage Modified Samurai Seals - It does well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#movieInvestResult').html("You invest in The Eliminator - An Action Sci-Fi about a robot from the future. It does well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#movieInvestResult').html("You invest in Injection - A Sci-Fi about entering dreams. It does really well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#movieInvestResult').html("You invest in The Grid - A Sci-Fi about robots using humans as batteries. It does really well. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#movieInvestResult').html("You invest in an Unnamed movie about Fighters who can come back to life. It breaks records. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                movieActive = "false";
                localStorage.setItem("movieActive", movieActive);
            }, 901000);
        }
        else
            $('#movieInvestResult').html("Not enough money to Invest.");
        return false;
    });

    // Experimental Technology
    $('#btnInvestExperimental').prop('disabled', false);
    $('#btnInvestExperimental').click(function () {
        experimentalActive = "true";
        localStorage.setItem("experimentalActive", experimentalActive);
        if (money >= 50000000) {
            var minutes = 15;
            var seconds = 60;
            $('#experimentalInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#experimentalInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#experimentalInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#experimentalInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 50000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                        $('#experimentalInvestResult').html("You invest in a Brain-Washer. It cleans brains, it doesn't manipulate people. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#experimentalInvestResult').html("You invest in a Mouse Enlarger. The mice still behave exactly the same. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a Sound Cancelation Device. It only works in a line the size of the device. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a Pneumatic Transport System. It is a good alternative <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in an alternate for Global Communication. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a cheap House Builder. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a Force Field System. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in Quantum Computing. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in Anti-Matter fueled Transport. It earns quite a bit. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a Universal Constructor. It can build anything. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#experimentalInvestResult').html("You invest in a Respawner. It can respawn anyone who dies. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                experimentalActive = "false";
                localStorage.setItem("experimentalActive", experimentalActive);
            }, 901000);
        }
        else
            $('#experimentalInvestResult').html("Not enough money to Invest.");
        return false;
    });

    // Time Travel Trip
    $('#btnInvestTimeTravel').prop('disabled', false);
    $('#btnInvestTimeTravel').click(function () {
        timeTravelActive = "true";
        localStorage.setItem("timeTravelActive", timeTravelActive);
        if (money >= 250000000) {
            var minutes = 15;
            var seconds = 60;
            $('#timeTravelInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#timeTravelInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#timeTravelInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#timeTravelInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 250000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                        $('#timeTravelInvestResult').html("You go to the far past, when dinosaurs were around. You almost get eaten on arrival, and quickly get back to the present. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#timeTravelInvestResult').html("You go to the far future, when the Sun has turned into a black hole and Earth is long gone. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back 1000 years. You forget to adjust for the Earths position in time and appear in space, you luck out with a small asteroid nearby and haul it back. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back a few days and convince yourself not to waste money on a time travel trip. You also give yourself all the money in your wallet. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go forward a few days. 'Future you' hands you the money you spent on the trip plus a small amount more. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back to 1999 and invent a company before it gets invented. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go forward to 2045. Some Advanced AI greets you and generates a chunk of money out of thin air for you to bring back. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back in time by 1 minute, and go on the same trip as the you-from-1-minute-earlier. Who also goes back in time by 1 minute, until you build an army of you to take over the world. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back to 1930 with Shia Le Beouf and use Shia to inspire Hitler to stay on course as an artist. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go back a few years and invest in BitCoin. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#timeTravelInvestResult').html("You go forward in time to bring back future tech, allowing for technology to develop more rapidly. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                timeTravelActive  = "false";
                localStorage.setItem("timeTravelActive", timeTravelActive);
            }, 901000);
        }
        else
            $('#timeTravelInvestResult').html("Not enough money to Invest.");
        return false;
    });

    // Mystery Fund
    $('#btnInvestMystery').prop('disabled', false);
    $('#btnInvestMystery').click(function () {
        mysteryActive = "true";
        localStorage.setItem("mysteryActive", mysteryActive);
        if (money >= 1000000000) {
            var minutes = 15;
            var seconds = 60;
            $('#mysteryInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#mysteryInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#mysteryInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#mysteryInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 1000000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);
            localStorage.setItem("money", money);
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
                        $('#mysteryInvestResult').html("You put the money in the Illuminati's Fund. They take most of your money. You lose 75% of your investment. <b>RESULT: -$"
                            + (investAmt * 0.75).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt * 0.5;
                        money += increment; // extra steps for use in alert
                        $('#mysteryInvestResult').html("You put the money in a Villain's secret world domination fund. You lose half of your investment. <b>RESULT: -$"
                            + (investAmt / 2).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //investment - 20%
                        increment = investAmt * 0.8;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a Pyramid Scheme Fund. You lose 20% of your investment. <b>RESULT: -$"
                            + (investAmt / 5).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //investment + 5%
                        increment = investAmt * 1.05;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a Swiss Cheese Bank Account Fund for Cheese-Enthusiasts. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //investment + 10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money toward a Mysterious Stranger. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //investment + 20%
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a fund for Extraordinary Gentlemen. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //investment + 30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in an Escher Fund. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //investment + 50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a Quantum Physics Fund. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //investment + 60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a Shadow Council Fund. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //investment + 75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a 4f5229b88134e2cf443200d81b5bf5f5 Fund. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        increment = investAmt * 2;
                        money += increment;
                        $('#mysteryInvestResult').html("You put the money in a Healer Fund. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                mysteryActive = "false";
                localStorage.setItem("mysteryActive", mysteryActive);
            }, 901000);
        }
        else
            $('#mysteryInvestResult').html("Not enough money to Invest.");
        return false;
    });

});