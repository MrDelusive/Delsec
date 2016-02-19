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
        goldbotActive = "true";
        localStorage.setItem("goldbotActive", goldbotActive);
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 120000);
        }
        else
            $('#goldbotInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GAME INVEST
    $('#btnInvestGame').prop('disabled', false);
    $('#btnInvestGame').click(function () {
        gameActive = "true";
        localStorage.setItem("gameActive", gameActive);
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 180000);
        }
        else
            $('#gameInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GRANDCHILD INVEST
    $('#btnInvestGrandchild').prop('disabled', false);
    $('#btnInvestGrandchild').click(function () {
        grandchildActive = "true";
        localStorage.setItem("grandchildActive", grandchildActive);
        if (money >= 500) {
            var minutes = 4;
            var seconds = 60;
            $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#grandchildInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 240000);
        }
        else
            $('#grandchildInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //GOLD INVEST
    $('#btnInvestGold').prop('disabled', false);
    $('#btnInvestGold').click(function () {
        goldActive = "true";
        localStorage.setItem("goldActive", goldActive);
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 300000);
        }
        else
            $('#goldInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //LIFE INSURANCE INVEST
    $('#btnInvestLife').prop('disabled', false);
    $('#btnInvestLife').click(function () {
        lifeActive = "true";
        localStorage.setItem("lifeActive", lifeActive);
        if (money >= 2500) {
            var minutes = 6;
            var seconds = 60;
            $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#lifeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 360000);
        }
        else
            $('#lifeInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SWEDISH TRUST FUND
    $('#btnInvestSwedish').prop('disabled', false);
    $('#btnInvestSwedish').click(function () {
        swedishActive = "true";
        localStorage.setItem("swedishActive", swedishActive);
        if (money >= 10000) {
            var minutes = 8;
            var seconds = 60;
            $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#swedishInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 480000);
        }
        else
            $('#swedishInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //CD INVEST
    $('#btnInvestCD').prop('disabled', false);
    $('#btnInvestCD').click(function () {
        CDActive = "true";
        localStorage.setItem("CDActive", CDActive);
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 600000);
        }
        else
            $('#CDInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //OFFSHORE VARIABLE
    $('#btnInvestOffshore').prop('disabled', false);
    $('#btnInvestOffshore').click(function () {
        offshoreActive = "true";
        localStorage.setItem("offshoreActive", offshoreActive);
        if (money >= 100000) {
            var minutes = 15;
            var seconds = 60;
            $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#offshoreInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 900000);
        }
        else
            $('#offshoreInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //DEEP SEA MISSION
    $('#btnInvestDeepSea').prop('disabled', false);
    $('#btnInvestDeepSea').click(function () {
        deepSeaActive = "true";
        localStorage.setItem("deepSeaActive", deepSeaActive);
        if (money >= 500000) {
            var minutes = 20;
            var seconds = 60;
            $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#deepSeaInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 1200000);
        }
        else
            $('#deepSeaInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //SECURE RISKY GOODS TRANSFER
    $('#btnInvestSecure').prop('disabled', false);
    $('#btnInvestSecure').click(function () {
        secureActive = "true";
        localStorage.setItem("secureActive", secureActive);
        if (money >= 2500000) {
            var minutes = 25;
            var seconds = 60;
            $('#secureInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#secureInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#secureInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#secureInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 1500000);
        }
        else
            $('#secureInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //BANK OVERFLOW
    $('#btnInvestOverflow').prop('disabled', false);
    $('#btnInvestOverflow').click(function () {
        overflowActive = "true";
        localStorage.setItem("overflowActive", overflowActive);
        if (money >= 10000000) {
            var minutes = 30;
            var seconds = 60;
            $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#overflowInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
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
                //if (userClass == "Healer")
                //    roll += 1;
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
            }, 1800000);
        }
        else
            $('#overflowInvestResult').html("Not enough money to Invest.");
        return false;
    });

});