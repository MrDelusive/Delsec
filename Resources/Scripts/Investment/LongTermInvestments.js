$(document).ready(function () {

    //GOLDBOT INVEST
    $('#btnInvestGoldbot').prop('disabled', false);
    $('#btnInvestGoldbot').click(function () {
        if (money >= 3) {
            var timer = 120;
            $('#goldbotInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#goldbotInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 3;
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
                    case 3: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is made by some high school kid who hasn't put much thought into it. So gets a small sum. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //80%
                        increment = investAmt * 1.8;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is below average. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is decent. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is made by someone who knows the game. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot does it's job nicely. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //250%
                        increment = investAmt * 3.5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot is very efficient. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //300%
                        increment = investAmt * 4;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot plays the game better than the players. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //400%
                        increment = investAmt * 5;
                        money += increment;
                        $('#goldbotInvestResult').html("The bot knows all the exploits. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //600%
                        increment = investAmt * 7;
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
            var timer = 180;
            $('#gameInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 0) {
                    timer--;
                    $('#gameInvestResult').html("Investing: " + timer + " seconds remaining.");
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
                    case 3: //50%
                        increment = investAmt * 1.5;
                        money += increment;
                        $('#gameInvestResult').html("The game gets average reviews, doesn't bring anything new. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 4: //80%
                        increment = investAmt * 1.8;
                        money += increment;
                        $('#gameInvestResult').html("The game gets average reviews, doesn't bring anything new. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 5: //100%
                        increment = investAmt * 2;
                        money += increment;
                        $('#gameInvestResult').html("The game is good enough to get a decent amount of sales. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 6: //150%
                        increment = investAmt * 2.5;
                        money += increment;
                        $('#gameInvestResult').html("The game is well rounded. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 7: //200%
                        increment = investAmt * 3;
                        money += increment;
                        $('#gameInvestResult').html("The game gets a solid following. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 8: //250%
                        increment = investAmt * 3.5;
                        money += increment;
                        $('#gameInvestResult').html("The game is well developed and people enjoy it. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 9: //300%
                        increment = investAmt * 4;
                        money += increment;
                        $('#gameInvestResult').html("The game does really well, people demanding a sequel. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 10: //400%
                        increment = investAmt * 5;
                        money += increment;
                        $('#gameInvestResult').html("The game is a hit, and wins game of the year. <b>RESULT: Investment +$" + (increment - investAmt).toFixed(2) + "</b>");
                        break;
                    case 11: //600%
                        increment = investAmt * 7;
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
            }, 15000);
        }
        else
            $('#gameInvestResult').html("Not enough money to Invest.");
        return false;
    });

})(jQuery);