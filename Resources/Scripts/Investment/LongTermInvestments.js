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
            var minutes = 2;
            var seconds = 60;
            $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#goldbotInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 3;
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
            }, 120000);
        }
        else
            $('#goldbotInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GAME INVEST
    $('#btnInvestGame').prop('disabled', false);
    $('#btnInvestGame').click(function () {
        if (money >= 25) {
            var minutes = 3;
            var seconds = 60;
            $('#gameInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#gameInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#gameInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#gameInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
            }, 180000);
        }
        else
            $('#gameInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GOLD INVEST
    $('#btnInvestGold').prop('disabled', false);
    $('#btnInvestGold').click(function () {
        if (money >= 1000) {
            var minutes = 5;
            var seconds = 60;
            $('#goldInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#goldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#goldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#goldInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
            }, 300000);
        }
        else
            $('#goldInvestResult').html("Not enough money to Invest.");
        return false;
    });


    //CD INVEST
    $('#btnInvestCD').prop('disabled', false);
    $('#btnInvestCD').click(function () {
        if (money >= 25000) {
            var minutes = 10;
            var seconds = 60;
            $('#CDInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#CDInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#CDInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#CDInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
            }, 600000);
        }
        else
            $('#CDInvestResult').html("Not enough money to Invest.");
        return false;
    });

});