$(document).ready(function () {

    $('#btnEmails').click(function () {
        $(".hidden_Divs").hide();
        $("#email").show();
        return false;
    });
    $('#btnInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#shortTermInvestments").show();
        return false;
    });

    $('#btnStockMarket').click(function () {
        $(".hidden_Divs").hide();
        $("#stocks").show();

        return false;
    });
    $('#btnAbilities').click(function () {
        $(".hidden_Divs").hide();
        $("#abilities").show();

        return false;
    });

    $('#btnConsole').click(function () {
        $(".hidden_Divs").hide();
        $("#console").show();
        $('#txtSubmit').focus();
        return false;
    });

    $('#btnOptions').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        $("#backgroundThemes").show();
        return false;
    });

    $('#btnPatchNotes').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        $("#patchNotes").show();
        return false;
    });

    $('#btnThemes').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        $("#backgroundThemes").show();
        return false;
    });

    $('#btn80sDelsec').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/bg.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btn80sDelsec").css("background", "#CCC");
        currentTheme = '80sDelsec';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnDelsecCoder').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/bgCode2.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnDelsecCoder").css("background", "#CCC");
        currentTheme = 'delsecCoder';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnSpaceTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/spacemap2.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnSpaceTheme").css("background", "#CCC");
        currentTheme = 'spaceTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnOmegaTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/omegaBG.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnOmegaTheme").css("background", "#CCC");
        currentTheme = 'omegaTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnFlowerTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/flowerBG.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnFlowerTheme").css("background", "#CCC");
        currentTheme = 'flowerTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnFireworksTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/fireworksBG.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnFireworksTheme").css("background", "#CCC");
        currentTheme = 'fireworksTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnFireworks2Theme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/fireworks2BG.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnFireworks2Theme").css("background", "#CCC");
        currentTheme = 'fireworks2Theme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnMilkyTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/milkyTheme.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnMilkyTheme").css("background", "#CCC");
        currentTheme = 'milkyTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnBlackStripesTheme').click(function () {
        $('#center_Main').css("background-image", "url(Resources/Img/blackTheme.jpg)");
        $(".btnThemes").css("background", "#ededed");
        $("#btnBlackStripesTheme").css("background", "#CCC");
        currentTheme = 'blackStripesTheme';
        localStorage.setItem("currentTheme", currentTheme);
        return false;
    });

    $('#btnProgress').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        $("#gameProgress").show();
        return false;
    });

    $('#btnResetTab').click(function () {
        $(".hidden_Divs").hide();
        $("#options").show();
        $("#resetGame").show();
        return false;
    });

    $('#btnResetAll').click(function () {
        localStorage.clear();
    });
   
});