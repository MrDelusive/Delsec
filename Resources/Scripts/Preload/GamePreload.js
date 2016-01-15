$(document).ready(function () {
    // Check for null values ($NaN)
    if (localStorage.getItem("money") === null)
        localStorage.setItem("money", money);

    if (localStorage.getItem("userClass") === null)
        localStorage.setItem("userClass", userClass);           
    if (localStorage.getItem("totalInvestment") === null)
        localStorage.setItem("totalInvestment", totalInvestment);

    if (typeof (Storage) !== "undefined") {              
        money = parseFloat(localStorage.getItem("money"));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            
        userClass = localStorage.getItem("userClass");      
        totalInvestment = parseFloat(localStorage.getItem("totalInvestment"));            
    }
    else
        alert("no support on your browser");
    
    $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $("#btnShop").fadeIn(500);
    $("#btnRiskManagement").fadeIn(500);
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


