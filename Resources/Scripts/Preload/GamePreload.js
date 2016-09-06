$(document).ready(function () {

    // prevent copy and paste on input fields working only on console atm. Which was the reason I added this any way
    $('input[type=text]').bind('copy paste', function (e) {
        e.preventDefault();
    });

    $('#loading').hide();
    // after window is loaded then show the scroll (I don't want user to be able to scroll while waiting for load)
    $('body').css("overflow", "auto");

    // Check for null values ($NaN)
    if (localStorage.getItem("money") === null)
        localStorage.setItem("money", money);

    if (localStorage.getItem("totalInvestment") === null)
        localStorage.setItem("totalInvestment", totalInvestment);
    
    if (localStorage.getItem("userClass") === null)
        localStorage.setItem("userClass", userClass);           

    if (localStorage.getItem("currentTheme") === null)
        localStorage.setItem("currentTheme", currentTheme);

    if (localStorage.getItem("healerQuadrantEarned") === null)
        localStorage.setItem("healerQuadrantEarned", healerQuadrantEarned);
    if (localStorage.getItem("wizardQuadrantEarned") === null)
        localStorage.setItem("wizardQuadrantEarned", wizardQuadrantEarned);
    if (localStorage.getItem("warriorQuadrantEarned") === null)
        localStorage.setItem("warriorQuadrantEarned", warriorQuadrantEarned);
    if (localStorage.getItem("rogueQuadrantEarned") === null)
        localStorage.setItem("rogueQuadrantEarned", rogueQuadrantEarned);

    if (typeof (Storage) !== "undefined") {              
        money = parseFloat(localStorage.getItem("money"));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            
        userClass = localStorage.getItem("userClass");
        currentTheme = localStorage.getItem("currentTheme");
        totalInvestment = parseFloat(localStorage.getItem("totalInvestment"));

        healerQuadrantEarned = localStorage.getItem("healerQuadrantEarned");
        wizardQuadrantEarned = localStorage.getItem("wizardQuadrantEarned");
        warriorQuadrantEarned = localStorage.getItem("warriorQuadrantEarned");
        rogueQuadrantEarned = localStorage.getItem("rogueQuadrantEarned");

        if (wizardQuadrantEarned == 'true')
            $('#wizardCompletedDisplay').css("background-image", "url(Resources/Img/wizardCompleted.png)");
        if (healerQuadrantEarned == 'true')
            $('#healerCompletedDisplay').css("background-image", "url(Resources/Img/healerCompleted.png)");
        if (warriorQuadrantEarned == 'true')
            $('#warriorCompletedDisplay').css("background-image", "url(Resources/Img/warriorCompleted.png)");
        if (rogueQuadrantEarned == 'true')
            $('#rogueCompletedDisplay').css("background-image", "url(Resources/Img/rogueCompleted.png)");

        if (currentTheme == '80sDelsec') {
            $('#center_Main').css("background-image", "url(Resources/Img/bg.jpg)");
            $("#btn80sDelsec").css("background", "#CCC");
        }

        else if (currentTheme == 'delsecCoder') {
            $('#center_Main').css("background-image", "url(Resources/Img/bgCode2.jpg)");
            $("#btnDelsecCoder").css("background", "#CCC");
        }

        else if (currentTheme == 'spaceTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/spacemap2.jpg)");
            $("#btnSpaceTheme").css("background", "#CCC");
        }

        else if (currentTheme == 'omegaTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/omegaBG.jpg)");
            $("#btnOmegaTheme").css("background", "#CCC");
        }

        else if (currentTheme == 'flowerTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/flowerBG.jpg)");
            $("#btnFlowerTheme").css("background", "#CCC");
        }

        else if (currentTheme == 'fireworksTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/fireworksBG.jpg)");
            $("#btnFireworksTheme").css("background", "#CCC");
        }

        else if (currentTheme == 'fireworks2Theme') {
            $('#center_Main').css("background-image", "url(Resources/Img/fireworks2BG.jpg)");
            $("#btnFireworks2Theme").css("background", "#CCC");
        }

        else if (currentTheme == 'milkyTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/milkyTheme.jpg)");
            $("#btnMilkyTheme").css("background", "#CCC");
        }
        else if (currentTheme == 'blackStripesTheme') {
            $('#center_Main').css("background-image", "url(Resources/Img/blackTheme.jpg)");
            $("#btnBlackStripesTheme").css("background", "#CCC");
        }
    }
    else
        alert("no support on your browser");
    
    $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $("#btnShop").fadeIn(500);
    $("#btnEmails").fadeIn(500);
    $("#btnInvestments").fadeIn(500);
    $("#btnStockMarket").fadeIn(500);
    $("#btnAbilities").fadeIn(500);
    $("#btnConsole").fadeIn(500);
    $("#btnOptions").fadeIn(500);  

    var $window = $(window);
    var visible = false;
    var stockVisible = false;
    $(window).scroll( function(){	
        //when title is no longer visible. Bool introduced to stop the animation triggering for every scroll event.
        if ($(this).scrollTop() > 70 && visible == false ) {
            $('#lblMoneyDisplayScroll').animate({ 'opacity': '1' }, 100);
            visible = true;
        }
        else if ($(this).scrollTop() < 70 && visible == true ) {
            $('#lblMoneyDisplayScroll').animate({ 'opacity': '0' }, 100);
            visible = false;
        }
    });   
});


