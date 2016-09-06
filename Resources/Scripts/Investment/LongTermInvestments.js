$(document).ready(function () {

    $('#btnLongTermInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#longTermInvestments").show();
        return false;
    });
    //GOLDBOT INVEST
    $('#btnInvestGoldbot').prop('disabled', false);
    $('#btnInvestGoldbot').click(function () {
        if (money >= 3) {
            goldbotActive = "true";
            localStorage.setItem("goldbotActive", goldbotActive);
            var timerDefault = 120;
            var timer = 120;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var goldbotInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 3;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is buggy, it spends most of its time running against walls.<b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt  * 1.2;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is a knockoff, it still does what it's meant to, a small amount of the time. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is made by some high school kid who hasn't put much thought into it. So gets a small sum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is below average. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is decent. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is made by someone who knows the game. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot does it's job nicely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is very efficient. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot plays the game better than the players. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot knows all the exploits. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#goldbotInvestResult').html("The special bot can hack the game. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                goldbotActive = "false";
                localStorage.setItem("goldbotActive", goldbotActive);
                clearInterval(goldbotInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#goldbotInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GAME INVEST
    $('#btnInvestGame').prop('disabled', false);
    $('#btnInvestGame').click(function () {
        if (money >= 25) {
            gameActive = "true";
            localStorage.setItem("gameActive", gameActive);
            var timerDefault = 180;
            var timer = 180;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#gameInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var gameInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#gameInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#gameInvestResult').html("The game is bad and gets bad reviews. Doesn't earn much. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#gameInvestResult').html("The game was poorly developed. Doesn't earn much. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#gameInvestResult').html("The game gets average reviews, doesn't bring anything new. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#gameInvestResult').html("The game gets average reviews, doesn't bring anything new. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#gameInvestResult').html("The game is good enough to get a decent amount of sales. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#gameInvestResult').html("The game is well rounded. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#gameInvestResult').html("The game gets a solid following. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#gameInvestResult').html("The game is well developed and people enjoy it. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#gameInvestResult').html("The game does really well, people demanding a sequel. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#gameInvestResult').html("The game is a hit, and wins game of the year. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#gameInvestResult').html("The game sets a whole new standard for gaming. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                gameActive = "false";
                localStorage.setItem("gameActive", gameActive);
                clearInterval(gameInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#gameInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GRANDCHILD INVEST
    $('#btnInvestGrandchild').prop('disabled', false);
    $('#btnInvestGrandchild').click(function () {
        if (money >= 500) {
            grandchildActive = "true";
            localStorage.setItem("grandchildActive", grandchildActive);
            var timerDefault = 240;
            var timer = 240;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var grandchildInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 500;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on candy, but at least the sugar rush gave them an edge. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on toys. Luckily it teaches them valueable skills for the future. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on video games. It trains their young minds to absorb information like crazy. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on a new bike. They grow up to be big and strong. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on a bunch of kids sciency stuff. They make all sorts of little gadgets. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on a business development plan for youngsters. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on a programming course for ages 5-10. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on an acting course for kids. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is spent on a world domination for dummies book. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is invested for the long term. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#grandchildInvestResult').html("The money is put towards a scholarship for gifted minds. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                grandchildActive = "false";
                localStorage.setItem("grandchildActive", grandchildActive);
                clearInterval(grandchildInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#grandchildInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GOLD INVEST
    $('#btnInvestGold').prop('disabled', false);
    $('#btnInvestGold').click(function () {
        if (money >= 1000) {
            goldActive = "true";
            localStorage.setItem("goldActive", goldActive);
            var timerDefault = 300;
            var timer = 300;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#goldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var goldInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#goldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#goldInvestResult').html("The gold isn't of really good quality. Doesn't earn much. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#goldInvestResult').html("The gold isn't of really good quality. Doesn't earn much. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#goldInvestResult').html("The gold was sold at a lower price than should have. Only makes a small profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#goldInvestResult').html("Gold hasn't seen much price growth in the past 5 minutes. Only makes a small profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#goldInvestResult').html("Gold prices have grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#goldInvestResult').html("Gold prices have grown. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#goldInvestResult').html("Gold prices have grown higher than expected. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#goldInvestResult').html("Gold prices have grown higher than expected. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#goldInvestResult').html("A massive gold heist gone bad sent tonnes of gold missing. Gold prices have gone up dramatically. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#goldInvestResult').html("Gold is the new Platinum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#goldInvestResult').html("It was found that Gold had healing properties. Sends the prices way up. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                goldActive = "false";
                localStorage.setItem("goldActive", goldActive);
                clearInterval(goldInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#goldInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //LIFE INSURANCE INVEST
    $('#btnInvestLife').prop('disabled', false);
    $('#btnInvestLife').click(function () {
        if (money >= 2500) {
            lifeActive = "true";
            localStorage.setItem("lifeActive", lifeActive);
            var timerDefault = 360;
            var timer = 360;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var lifeInterval = setInterval(function () {

                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 2500;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 10% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 20% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 30% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 40% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 50% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 60% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 75% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 100% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 125% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur really ded. Walk away with 150% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#lifeInvestResult').html("Turns out ur ded. Walk away with 200% profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                lifeActive = "false";
                localStorage.setItem("lifeActive", lifeActive);
                clearInterval(lifeInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#lifeInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SWEDISH TRUST FUND
    $('#btnInvestSwedish').prop('disabled', false);
    $('#btnInvestSwedish').click(function () {

        if (money >= 10000) {
            swedishActive = "true";
            localStorage.setItem("swedishActive", swedishActive);
            var timerDefault = 480;
            var timer = 480;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var swedishInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds only earn a small amount. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds only earn a small amount. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds aren't as good as Swiss Funds. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds aren't as good as Swiss Funds. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#swedishInvestResult').html("Maybe Swedish Funds are as good as Swiss Funds? <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#swedishInvestResult').html("Maybe Swedish Funds are as good as Swiss Funds? <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds are better than Swiss Funds. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds are better than Swiss Funds. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#swedishInvestResult').html("A Swede Profit. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#swedishInvestResult').html("Swedish Funds? Did you mean Swiss Funds? Ah well, Swedish funds are even better. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#swedishInvestResult').html("I hear sweden is nice to visit this time of year. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                swedishActive = "false";
                localStorage.setItem("swedishActive", swedishActive);
                clearInterval(swedishInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#swedishInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //CD INVEST
    $('#btnInvestCD').prop('disabled', false);
    $('#btnInvestCD').click(function () {

        if (money >= 25000) {
            CDActive = "true";
            localStorage.setItem("CDActive", CDActive);
            var timerDefault = 600;
            var timer = 600;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#CDInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var CDInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#CDInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account is standard. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account is standard. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account plays nicely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account plays nicely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account sends music to your ears. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account sends music to your ears. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account boosts the bass of your investment. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account grows rapidly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account performs superbly. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account sets a new standard in CD Fidelity. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#CDInvestResult').html("The CD Account goes up to 11. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                CDActive = "false";
                localStorage.setItem("CDActive", CDActive);
                clearInterval(CDInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#CDInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //OFFSHORE VARIABLE
    $('#btnInvestOffshore').prop('disabled', false);
    $('#btnInvestOffshore').click(function () {

        if (money >= 100000) {
            offshoreActive = "true";
            localStorage.setItem("offshoreActive", offshoreActive);
            var timerDefault = 900;
            var timer = 900;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var offshoreInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a weak interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a weak interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a small interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a moderate interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a moderate interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a high end interest growth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits a high end interest growth. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits all the right interests ;). <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#offshoreInvestResult').html("The variable account hits all the right interests ;). <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#offshoreInvestResult').html("Variable? More like high-interest-heat-seeking. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#offshoreInvestResult').html("Only a hacker would find all the best interest rates. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                offsureActive = "false";
                localStorage.setItem("offsureActive", offsureActive);
                clearInterval(offshoreInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#offshoreInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //DEEP SEA MISSION
    $('#btnInvestDeepSea').prop('disabled', false);
    $('#btnInvestDeepSea').click(function () {

        if (money >= 500000) {
            deepSeaActive = "true";
            localStorage.setItem("deepSeaActive", deepSeaActive);
            var timerDefault = 1200;
            var timer = 1200;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var deepSeaInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 500000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a whole lot of salt. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back some rare coral. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a shark. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a treasure chest full of valuables from a lost ship wreckage. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a rare cache of highly sought after coins. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a rare creature from the depths. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a ship wreckage with them. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back a rare gem never found on earth. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back an ancient structure from the city of .. Atlant .. a. Still worth something though. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back an ancient structure from the lost city of .. Atlant .. is. Yes from the mythical city. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#deepSeaInvestResult').html("The mission brings back rare herbal plants which can cure all disease. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                deepSeaActive = "false";
                localStorage.setItem("deepSeaActive", deepSeaActive);
                clearInterval(deepSeaInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#deepSeaInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SECURE RISKY GOODS TRANSFER
    $('#btnInvestSecure').prop('disabled', false);
    $('#btnInvestSecure').click(function () {

        if (money >= 2500000) {
            secureActive = "true";
            localStorage.setItem("secureActive", secureActive);
            var timerDefault = 1500;
            var timer = 1500;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#secureInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var secureInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#secureInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 2500000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#secureInvestResult').html("The tranfer was intercepted by the FDI. After some negotiating, you still proceeded with the transfer. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#secureInvestResult').html("The transfer was almost a bust when one of the 'clients' had a mental break down, and nearly comprimised everything. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#secureInvestResult').html("The transfer went successful, but you were forced to accept a slightly less profitable deal. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#secureInvestResult').html("The buyer never turned up. Turns out he was a secret agent. Luckily for you another buyer came along. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#secureInvestResult').html("The transfer went as expected. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#secureInvestResult').html("The transfer went slightly better than you thought it would. How? They dropped one of the bags when they left. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#secureInvestResult').html("The transfer went smoothly, and you got a marriage proposal. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#secureInvestResult').html("The buyer got arrested after the deal, and the goods were returned back to you. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#secureInvestResult').html("The buyer forgot what they negotiated with you, and payed you much more than you were expecting. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#secureInvestResult').html("The buyer was a well known politician, he payed you a little extra to keep it quiet. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#secureInvestResult').html("The goods were pharmaceutical goods which just so happened to get a massive markup in the time of the deal. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                secureActive = "false";
                localStorage.setItem("secureActive", secureActive);
                clearInterval(secureInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#secureInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //BANK OVERFLOW
    $('#btnInvestOverflow').prop('disabled', false);
    $('#btnInvestOverflow').click(function () {

        if (money >= 10000000) {
            overflowActive = "true";
            localStorage.setItem("overflowActive", overflowActive);
            var timerDefault = 1800;
            var timer = 1800;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var overflowInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#overflowInvestResult').html("Overflow.exe was found before it could generate a large sum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#overflowInvestResult').html("The bank became aware of the overflow attack, and abruptly rolled back their data. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#overflowInvestResult').html("(percent)nBufferOverflow.AddressRelocation Reports: System Anomaly in $D$2ARRAYINDEX4. CONTINUE. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#overflowInvestResult').html("Overflow.exe -'bankAcct+$FsA8123np15FC' -f <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#overflowInvestResult').html("SYSTEM: Heap Overflow Found in ACCCCCCCCCCCCCCCCCCCCCCCCCCCC....&ERROR&  <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#overflowInvestResult').html("for(int x=0;x<Pi.Length;x++)(ARRAY[x].WRITE(Pi.Length)); <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#overflowInvestResult').html("Overflow.exe -'int a=a' <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#overflowInvestResult').html("SYSTEM: HANDLE ERROR - void x(){x()}; Please write to www.stackoverflow.com for a solution. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#overflowInvestResult').html("SYSTEM: RUNNING IISWORMINDEXINGSERVICE.EXE IS MAKING ME TYPE IN ALL CAPS.  <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#overflowInvestResult').html("SYSTEM: NullPointerException.exe reports a NullPointerException at EXCEPTION:*NULL. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#overflowInvestResult').html("SYSTEM: x$D reports access violation in healerworm.bat. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                overflowActive = "false";
                localStorage.setItem("overflowActive", overflowActive);
                clearInterval(overflowInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#overflowInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //ARMS DEAL
    $('#btnInvestArmsDeal').prop('disabled', false);
    $('#btnInvestArmsDeal').click(function () {

        if (money >= 60000000) {
            armsDealActive = "true";
            localStorage.setItem("armsDealActive", armsDealActive);
            var timerDefault = 2400;
            var timer = 2400;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#armsDealInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var armsDealInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#armsDealInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 60000000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a small militia. Lets hope they are fighting for a good cause, or maybe fighting a commando, who knows. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a group of reb.. Freedom Fighters. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a group of Mercenaries. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a Small Government, too bad they use martial law on their country. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a Commando. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a group of Fighters who are fighting some invisible alien. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a rag-tag team of .. Dispensibles? <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a small team of 5 fighting off a horde of aliens. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a future guy in a trench-coat and some leather bound chick. Knee who? I heard they went by JC and Anna Na..something. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a guy in a green suit of armor. Said something about Demons.. or Aliens.. Can't remember. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#armsDealInvestResult').html("You supplied a bunch of guns that don't kill people, instead they heal people. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                armsDealActive = "false";
                localStorage.setItem("armsDealActive", armsDealActive);
                clearInterval(armsDealInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#armsDealInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //NUCLEAR MATERIAL TRANSPORT
    $('#btnInvestNuclear').prop('disabled', false);
    $('#btnInvestNuclear').click(function () {

        if (money >= 350000000) {
            nuclearActive = "true";
            localStorage.setItem("nuclearActive", nuclearActive);
            var timerDefault = 3000;
            var timer = 3000;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#nuclearInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var nuclearInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#nuclearInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 350000000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#nuclearInvestResult').html("You transported a nuclear weapon far away from a war-torn country. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#nuclearInvestResult').html("While you were transporting a nuclear weapon, the truck got hijacked, luckily they sent it to the same place you were supposed to. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#nuclearInvestResult').html("You assemble a small team of driving entusiasts to steal and transport a nuclear weapon from a criminal. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#nuclearInvestResult').html("You assemble some Rapid and Angry individuals to steal and transport a nuclear weapon from a criminal. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport a bunch of Nu-Clear Pimple Removal Cream to a enthusiastic buyer. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport a dozen nuclear weapons in the complete opposite direction of North-Korea. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport precious nuclear materials to some supervillain fighting a Captain. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport Nuclear powered cores to a Super Man. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport a large bunch of nuclear weapons directly toward the sun. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#nuclearInvestResult').html("You convert the nuclear weapons you are transporting into a small reactor. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#nuclearInvestResult').html("You transport a nuclear device that can reverse radiation poisoning. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                nuclearActive = "false";
                localStorage.setItem("nuclearActive", nuclearActive);
                clearInterval(nuclearInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#nuclearInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //CITY RELOCATION
    $('#btnInvestRelocation').prop('disabled', false);
    $('#btnInvestRelocation').click(function () {

        if (money >= 1000000000) {
            relocationActive = "true";
            localStorage.setItem("relocationActive", relocationActive);
            var timerDefault = 3600;
            var timer = 3600;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#relocationInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var relocationInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#relocationInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city underground. It's pretty dark. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city underground. They rename it Ember. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city into the ocean. It floats, for now. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city away from an active volcano. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city away from a faulty line of tectonic plates. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city onto its own paradise island. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city under the ocean, appropriately renamed to Rapture. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city into the sky. Wasn't that what Ultron wanted to do? <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city into space. It defies gravity, for now. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city into a more affordable area. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#relocationInvestResult').html("You move a city into a vast open desert. Somehow that makes you rich. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                relocationActive = "false";
                localStorage.setItem("relocationActive", relocationActive);
                clearInterval(relocationInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#relocationInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //ORBITAL DEFENCE NETWORK
    $('#btnInvestOrbital').prop('disabled', false);
    $('#btnInvestOrbital').click(function () {

        if (money >= 7000000000) {
            orbitalActive = "true";
            localStorage.setItem("orbitalActive", orbitalActive);
            var timerDefault = 4500;
            var timer = 4500;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#orbitalInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var orbitalInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#orbitalInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 7000000000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a crappy Defence Network which stops small meteors and missles. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a crappy Defence Network which stops small meteors and missles. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a net around the planet. It works. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a radio network transmitting some of the worst music ever. It works. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up us the bomb. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a vast network of warning signs around the planet. It deters many unwanted visitors. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a giant picture of OPs mother. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a giant sling shot around the planet, flinging back any thing that comes this way. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a Force field network around the planet. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a laser targetting array, it destroys anything that is a threat. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#orbitalInvestResult').html("You set up a tractor beam network, it collects anything that comes close to the planet. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                orbitalActive = "false";
                localStorage.setItem("orbitalActive", orbitalActive);
                clearInterval(orbitalInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#orbitalInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //DEEP SPACE VOYAGE
    $('#btnInvestVoyage').prop('disabled', false);
    $('#btnInvestVoyage').click(function () {

        if (money >= 20000000000) {
            voyageActive = "true";
            localStorage.setItem("voyageActive", voyageActive);
            var timerDefault = 5400;
            var timer = 5400;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#voyageInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var voyageInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#voyageInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 20000000000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage gets Lost in Space for 10 years. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage intercepts many new planets and makes some discoveries. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage makes many new alien friends and some alien enemies. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage finds many Earth-like planets which enable humanity to spread. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage charts so much new space it creates a guide to the galaxy. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage intercept an advanced alien race called the ZORG and steal some of their technology. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage intercepts a black hole where it gets stuck in time, luckily Hercules is on board to save the crew in the future. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage sets up 9 Deep Space Bases to continouously monitor that sector of space. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage collects important data from our galaxy's centre. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage went extremely well due to an on board engineer inventing Warp 10. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#voyageInvestResult').html("The voyage sets up a network of warp gates connecting far sectors of space together. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                voyageActive = "false";
                localStorage.setItem("voyageActive", voyageActive);
                clearInterval(voyageInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#voyageInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //WORLD CONSTRUCTION
    $('#btnInvestWorld').prop('disabled', false);
    $('#btnInvestWorld').click(function () {

        if (money >= 150000000000) {
            worldActive = "true";
            localStorage.setItem("worldActive", worldActive);
            var timerDefault = 7200;
            var timer = 7200;
            if (longTermEfficiencyActive == 'true')
                timer -= timerDefault * 0.25;
            if (captainLongTermActive == 'true')
                timer -= timerDefault * 0.25;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);

            var lastUpdate = new Date().getTime();
            $('#worldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            var worldInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                if (timer > 1) {
                    timer -= Math.round(diff / 1000);
                    lastUpdate = thisUpdate;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#worldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 150000000000;
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

                if (longTermEnthusiastActive == 'true')
                    roll += 1;
                if (longTermPlanningActive == 'true')
                    roll += 1;
                if (longTermStrategyActive == 'true')
                    roll += 1;
                if (longTermExponentialsActive == 'true')
                    roll += 1;
                if (longTermContinuationActive == 'true')
                    roll += 1;
                if (captainLongTermActive == 'true')
                    roll += 5;
                if (roll > 11)
                    roll = 11;

                switch (roll) {
                    case 1: //10%
                        increment = investAmt * 1.1;
                        money += increment;
                        $('#worldInvestResult').html("You build a small moon. It is good enough to set up a monitoring base on. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 2: //20%                     
                        increment = investAmt * 1.2;
                        money += increment;
                        $('#worldInvestResult').html("You build a volatile planet, It can be used to study how Earth was in its early stages. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 3: //30%
                        increment = investAmt * 1.3;
                        money += increment;
                        $('#worldInvestResult').html("You build a small Earth-like planet 1/4 the size of Earth, great to spread the population out. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 4: //40%
                        increment = investAmt * 1.4;
                        money += increment;
                        $('#worldInvestResult').html("You build a Mars-like planet which costs a bit to terraform, but is able to support life. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 5: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#worldInvestResult').html("You build a completely synthetic planet made entirely of solid metals, It is perfect to set up a robot colony on. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 6: //60%
                        increment = investAmt * 1.6;
                        money += increment;
                        $('#worldInvestResult').html("You build a large moon base which can be used as a weapon. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 7: //75%
                        increment = investAmt * 1.75;
                        money += increment;
                        $('#worldInvestResult').html("You build a large gas planet which can be used to supply Earth with natural resources. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 8: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#worldInvestResult').html("You build a Large Super-Earth planet, granting the population plenty of land space. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 9: //125%
                        increment = investAmt * 2.25;
                        money += increment;
                        $('#worldInvestResult').html("You build a planet made entirely out of diamond. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 10: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#worldInvestResult').html("You build an inverted planet so massive it has a radius equal to the distance from Earth to the Sun. <b>RESULT: Investment +$"
                            + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    case 11: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#worldInvestResult').html("You build a planet that makes everyone immortal while they are on it. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                worldActive = "false";
                localStorage.setItem("worldActive", worldActive);
                clearInterval(worldInterval);
            }, timer * 1000 + 1000);
        }
        else
            $('#worldInvestResult').html("Not enough money to Invest.");
        return false;
    });
});