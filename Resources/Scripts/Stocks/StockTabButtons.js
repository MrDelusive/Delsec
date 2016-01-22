$(document).ready(function () {

    var options = {
        series: {
            lines: { show: true, color: "#1a1aff" },
            points: { show: true }
        },
        xaxis: {
            min: 1,
            max: 6,
            show: false
        },
        yaxis: {
            color: "#ffffff"
        },
        grid: {
            backgroundColor: "#00001a",
            tickColor: "#000099"
        }
    }

    $('#btnDelsecStocks').click(function () {
        $(".stockDisplay").hide();
        $("#delsecStockDisplay").show();
        var d1 = [[1, delsec5thPreviousStockPrice], [2, delsec4thPreviousStockPrice], [3, delsec3rdPreviousStockPrice], [4, delsec2ndPreviousStockPrice], [5, delsecPreviousStockPrice], [6, delsecCurrentStockPrice]];
        $.plot($("#delsecHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnEntaqStocks').click(function () {
        $(".stockDisplay").hide();
        $("#entaqStockDisplay").show();
        var d1 = [[1, entaq5thPreviousStockPrice], [2, entaq4thPreviousStockPrice], [3, entaq3rdPreviousStockPrice], [4, entaq2ndPreviousStockPrice], [5, entaqPreviousStockPrice], [6, entaqCurrentStockPrice]];
        $.plot($("#entaqHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnVentexStocks').click(function () {
        $(".stockDisplay").hide();
        $("#ventexStockDisplay").show();
        var d1 = [[1, ventex5thPreviousStockPrice], [2, ventex4thPreviousStockPrice], [3, ventex3rdPreviousStockPrice], [4, ventex2ndPreviousStockPrice], [5, ventexPreviousStockPrice], [6, ventexCurrentStockPrice]];
        $.plot($("#ventexHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnAstorStocks').click(function () {
        $(".stockDisplay").hide();
        $("#astorStockDisplay").show();
        var d1 = [[1, astor5thPreviousStockPrice], [2, astor4thPreviousStockPrice], [3, astor3rdPreviousStockPrice], [4, astor2ndPreviousStockPrice], [5, astorPreviousStockPrice], [6, astorCurrentStockPrice]];
        $.plot($("#astorHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnPopbotStocks').click(function () {
        $(".stockDisplay").hide();
        $("#popbotStockDisplay").show();
        var d1 = [[1, popbot5thPreviousStockPrice], [2, popbot4thPreviousStockPrice], [3, popbot3rdPreviousStockPrice], [4, popbot2ndPreviousStockPrice], [5, popbotPreviousStockPrice], [6, popbotCurrentStockPrice]];
        $.plot($("#popbotHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnPannamStocks').click(function () {
        $(".stockDisplay").hide();
        $("#pannamStockDisplay").show();
        var d1 = [[1, pannam5thPreviousStockPrice], [2, pannam4thPreviousStockPrice], [3, pannam3rdPreviousStockPrice], [4, pannam2ndPreviousStockPrice], [5, pannamPreviousStockPrice], [6, pannamCurrentStockPrice]];
        $.plot($("#pannamHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnTRITStocks').click(function () {
        $(".stockDisplay").hide();
        $("#TRITStockDisplay").show();
        var d1 = [[1, TRIT5thPreviousStockPrice], [2, TRIT4thPreviousStockPrice], [3, TRIT3rdPreviousStockPrice], [4, TRIT2ndPreviousStockPrice], [5, TRITPreviousStockPrice], [6, TRITCurrentStockPrice]];
        $.plot($("#TRITHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnCANVStocks').click(function () {
        $(".stockDisplay").hide();
        $("#CANVStockDisplay").show();
        var d1 = [[1, CANV5thPreviousStockPrice], [2, CANV4thPreviousStockPrice], [3, CANV3rdPreviousStockPrice], [4, CANV2ndPreviousStockPrice], [5, CANVPreviousStockPrice], [6, CANVCurrentStockPrice]];
        $.plot($("#CANVHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnOSMStocks').click(function () {
        $(".stockDisplay").hide();
        $("#OSMStockDisplay").show();
        var d1 = [[1, OSM5thPreviousStockPrice], [2, OSM4thPreviousStockPrice], [3, OSM3rdPreviousStockPrice], [4, OSM2ndPreviousStockPrice], [5, OSMPreviousStockPrice], [6, OSMCurrentStockPrice]];
        $.plot($("#OSMHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnPALLADStocks').click(function () {
        $(".stockDisplay").hide();
        $("#PALLADStockDisplay").show();
        var d1 = [[1, PALLAD5thPreviousStockPrice], [2, PALLAD4thPreviousStockPrice], [3, PALLAD3rdPreviousStockPrice], [4, PALLAD2ndPreviousStockPrice], [5, PALLADPreviousStockPrice], [6, PALLADCurrentStockPrice]];
        $.plot($("#PALLADHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnKELVStocks').click(function () {
        $(".stockDisplay").hide();
        $("#KELVStockDisplay").show();
        var d1 = [[1, KELV5thPreviousStockPrice], [2, KELV4thPreviousStockPrice], [3, KELV3rdPreviousStockPrice], [4, KELV2ndPreviousStockPrice], [5, KELVPreviousStockPrice], [6, KELVCurrentStockPrice]];
        $.plot($("#KELVHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnStuccorStocks').click(function () {
        $(".stockDisplay").hide();
        $("#stuccorStockDisplay").show();
        var d1 = [[1, stuccor5thPreviousStockPrice], [2, stuccor4thPreviousStockPrice], [3, stuccor3rdPreviousStockPrice], [4, stuccor2ndPreviousStockPrice], [5, stuccorPreviousStockPrice], [6, stuccorCurrentStockPrice]];
        $.plot($("#stuccorHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnFEStocks').click(function () {
        $(".stockDisplay").hide();
        $("#FEStockDisplay").show();
        var d1 = [[1, FE5thPreviousStockPrice], [2, FE4thPreviousStockPrice], [3, FE3rdPreviousStockPrice], [4, FE2ndPreviousStockPrice], [5, FEPreviousStockPrice], [6, FECurrentStockPrice]];
        $.plot($("#FEHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnDelcredStocks').click(function () {
        $(".stockDisplay").hide();
        $("#delcredStockDisplay").show();
        var d1 = [[1, delcred5thPreviousStockPrice], [2, delcred4thPreviousStockPrice], [3, delcred3rdPreviousStockPrice], [4, delcred2ndPreviousStockPrice], [5, delcredPreviousStockPrice], [6, delcredCurrentStockPrice]];
        $.plot($("#delcredHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnRustecStocks').click(function () {
        $(".stockDisplay").hide();
        $("#rustecStockDisplay").show();
        var d1 = [[1, rustec5thPreviousStockPrice], [2, rustec4thPreviousStockPrice], [3, rustec3rdPreviousStockPrice], [4, rustec2ndPreviousStockPrice], [5, rustecPreviousStockPrice], [6, rustecCurrentStockPrice]];
        $.plot($("#rustecHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnExxocredStocks').click(function () {
        $(".stockDisplay").hide();
        $("#exxocredStockDisplay").show();
        var d1 = [[1, exxocred5thPreviousStockPrice], [2, exxocred4thPreviousStockPrice], [3, exxocred3rdPreviousStockPrice], [4, exxocred2ndPreviousStockPrice], [5, exxocredPreviousStockPrice], [6, exxocredCurrentStockPrice]];
        $.plot($("#exxocredHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnAUStocks').click(function () {
        $(".stockDisplay").hide();
        $("#AUStockDisplay").show();
        var d1 = [[1, AU5thPreviousStockPrice], [2, AU4thPreviousStockPrice], [3, AU3rdPreviousStockPrice], [4, AU2ndPreviousStockPrice], [5, AUPreviousStockPrice], [6, AUCurrentStockPrice]];
        $.plot($("#AUHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnAceholdStocks').click(function () {
        $(".stockDisplay").hide();
        $("#aceholdStockDisplay").show();
        var d1 = [[1, acehold5thPreviousStockPrice], [2, acehold4thPreviousStockPrice], [3, acehold3rdPreviousStockPrice], [4, acehold2ndPreviousStockPrice], [5, aceholdPreviousStockPrice], [6, aceholdCurrentStockPrice]];
        $.plot($("#aceholdHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnDelholdStocks').click(function () {
        $(".stockDisplay").hide();
        $("#delholdStockDisplay").show();
        var d1 = [[1, delhold5thPreviousStockPrice], [2, delhold4thPreviousStockPrice], [3, delhold3rdPreviousStockPrice], [4, delhold2ndPreviousStockPrice], [5, delholdPreviousStockPrice], [6, delholdCurrentStockPrice]];
        $.plot($("#delholdHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnDIAMStocks').click(function () {
        $(".stockDisplay").hide();
        $("#DIAMStockDisplay").show();
        var d1 = [[1, DIAM5thPreviousStockPrice], [2, DIAM4thPreviousStockPrice], [3, DIAM3rdPreviousStockPrice], [4, DIAM2ndPreviousStockPrice], [5, DIAMPreviousStockPrice], [6, DIAMCurrentStockPrice]];
        $.plot($("#DIAMHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnPentaccStocks').click(function () {
        $(".stockDisplay").hide();
        $("#pentaccStockDisplay").show();
        var d1 = [[1, pentacc5thPreviousStockPrice], [2, pentacc4thPreviousStockPrice], [3, pentacc3rdPreviousStockPrice], [4, pentacc2ndPreviousStockPrice], [5, pentaccPreviousStockPrice], [6, pentaccCurrentStockPrice]];
        $.plot($("#pentaccHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnNoodleStocks').click(function () {
        $(".stockDisplay").hide();
        $("#noodleStockDisplay").show();
        var d1 = [[1, noodle5thPreviousStockPrice], [2, noodle4thPreviousStockPrice], [3, noodle3rdPreviousStockPrice], [4, noodle2ndPreviousStockPrice], [5, noodlePreviousStockPrice], [6, noodleCurrentStockPrice]];
        $.plot($("#noodleHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnMegahardStocks').click(function () {
        $(".stockDisplay").hide();
        $("#megahardStockDisplay").show();
        var d1 = [[1, megahard5thPreviousStockPrice], [2, megahard4thPreviousStockPrice], [3, megahard3rdPreviousStockPrice], [4, megahard2ndPreviousStockPrice], [5, megahardPreviousStockPrice], [6, megahardCurrentStockPrice]];
        $.plot($("#megahardHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnChimerasecStocks').click(function () {
        $(".stockDisplay").hide();
        $("#chimerasecStockDisplay").show();
        var d1 = [[1, chimerasec5thPreviousStockPrice], [2, chimerasec4thPreviousStockPrice], [3, chimerasec3rdPreviousStockPrice], [4, chimerasec2ndPreviousStockPrice], [5, chimerasecPreviousStockPrice], [6, chimerasecCurrentStockPrice]];
        $.plot($("#chimerasecHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnChimeraholdStocks').click(function () {
        $(".stockDisplay").hide();
        $("#chimeraholdStockDisplay").show();
        var d1 = [[1, chimerahold5thPreviousStockPrice], [2, chimerahold4thPreviousStockPrice], [3, chimerahold3rdPreviousStockPrice], [4, chimerahold2ndPreviousStockPrice], [5, chimeraholdPreviousStockPrice], [6, chimeraholdCurrentStockPrice]];
        $.plot($("#chimeraholdHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnGriffonbankStocks').click(function () {
        $(".stockDisplay").hide();
        $("#griffonbankStockDisplay").show();
        var d1 = [[1, griffonbank5thPreviousStockPrice], [2, griffonbank4thPreviousStockPrice], [3, griffonbank3rdPreviousStockPrice], [4, griffonbank2ndPreviousStockPrice], [5, griffonbankPreviousStockPrice], [6, griffonbankCurrentStockPrice]];
        $.plot($("#griffonbankHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnTurborusStocks').click(function () {
        $(".stockDisplay").hide();
        $("#turborusStockDisplay").show();
        var d1 = [[1, turborus5thPreviousStockPrice], [2, turborus4thPreviousStockPrice], [3, turborus3rdPreviousStockPrice], [4, turborus2ndPreviousStockPrice], [5, turborusPreviousStockPrice], [6, turborusCurrentStockPrice]];
        $.plot($("#turborusHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnExodmptStocks').click(function () {
        $(".stockDisplay").hide();
        $("#exodmptStockDisplay").show();
        var d1 = [[1, exodmpt5thPreviousStockPrice], [2, exodmpt4thPreviousStockPrice], [3, exodmpt3rdPreviousStockPrice], [4, exodmpt2ndPreviousStockPrice], [5, exodmptPreviousStockPrice], [6, exodmptCurrentStockPrice]];
        $.plot($("#exodmptHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnRamnetStocks').click(function () {
        $(".stockDisplay").hide();
        $("#ramnetStockDisplay").show();
        var d1 = [[1, ramnet5thPreviousStockPrice], [2, ramnet4thPreviousStockPrice], [3, ramnet3rdPreviousStockPrice], [4, ramnet2ndPreviousStockPrice], [5, ramnetPreviousStockPrice], [6, ramnetCurrentStockPrice]];
        $.plot($("#ramnetHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnAlphacenStocks').click(function () {
        $(".stockDisplay").hide();
        $("#alphacenStockDisplay").show();
        var d1 = [[1, alphacen5thPreviousStockPrice], [2, alphacen4thPreviousStockPrice], [3, alphacen3rdPreviousStockPrice], [4, alphacen2ndPreviousStockPrice], [5, alphacenPreviousStockPrice], [6, alphacenCurrentStockPrice]];
        $.plot($("#alphacenHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnScatterStocks').click(function () {
        $(".stockDisplay").hide();
        $("#scatterStockDisplay").show();
        var d1 = [[1, scatter5thPreviousStockPrice], [2, scatter4thPreviousStockPrice], [3, scatter3rdPreviousStockPrice], [4, scatter2ndPreviousStockPrice], [5, scatterPreviousStockPrice], [6, scatterCurrentStockPrice]];
        $.plot($("#scatterHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnKalzexStocks').click(function () {
        $(".stockDisplay").hide();
        $("#kalzexStockDisplay").show();
        var d1 = [[1, kalzex5thPreviousStockPrice], [2, kalzex4thPreviousStockPrice], [3, kalzex3rdPreviousStockPrice], [4, kalzex2ndPreviousStockPrice], [5, kalzexPreviousStockPrice], [6, kalzexCurrentStockPrice]];
        $.plot($("#kalzexHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnSonicosStocks').click(function () {
        $(".stockDisplay").hide();
        $("#sonicosStockDisplay").show();
        var d1 = [[1, sonicos5thPreviousStockPrice], [2, sonicos4thPreviousStockPrice], [3, sonicos3rdPreviousStockPrice], [4, sonicos2ndPreviousStockPrice], [5, sonicosPreviousStockPrice], [6, sonicosCurrentStockPrice]];
        $.plot($("#sonicosHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnTrancextStocks').click(function () {
        $(".stockDisplay").hide();
        $("#trancextStockDisplay").show();
        var d1 = [[1, trancext5thPreviousStockPrice], [2, trancext4thPreviousStockPrice], [3, trancext3rdPreviousStockPrice], [4, trancext2ndPreviousStockPrice], [5, trancextPreviousStockPrice], [6, trancextCurrentStockPrice]];
        $.plot($("#trancextHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnStklrStocks').click(function () {
        $(".stockDisplay").hide();
        $("#stklrStockDisplay").show();
        var d1 = [[1, stklr5thPreviousStockPrice], [2, stklr4thPreviousStockPrice], [3, stklr3rdPreviousStockPrice], [4, stklr2ndPreviousStockPrice], [5, stklrPreviousStockPrice], [6, stklrCurrentStockPrice]];
        $.plot($("#stklrHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnVipersecStocks').click(function () {
        $(".stockDisplay").hide();
        $("#vipersecStockDisplay").show();
        var d1 = [[1, vipersec5thPreviousStockPrice], [2, vipersec4thPreviousStockPrice], [3, vipersec3rdPreviousStockPrice], [4, vipersec2ndPreviousStockPrice], [5, vipersecPreviousStockPrice], [6, vipersecCurrentStockPrice]];
        $.plot($("#vipersecHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnPLATStocks').click(function () {
        $(".stockDisplay").hide();
        $("#PLATStockDisplay").show();
        var d1 = [[1, PLAT5thPreviousStockPrice], [2, PLAT4thPreviousStockPrice], [3, PLAT3rdPreviousStockPrice], [4, PLAT2ndPreviousStockPrice], [5, PLATPreviousStockPrice], [6, PLATCurrentStockPrice]];
        $.plot($("#PLATHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnInfoneStocks').click(function () {
        $(".stockDisplay").hide();
        $("#infoneStockDisplay").show();
        var d1 = [[1, infone5thPreviousStockPrice], [2, infone4thPreviousStockPrice], [3, infone3rdPreviousStockPrice], [4, infone2ndPreviousStockPrice], [5, infonePreviousStockPrice], [6, infoneCurrentStockPrice]];
        $.plot($("#infoneHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnExtankStocks').click(function () {
        $(".stockDisplay").hide();
        $("#extankStockDisplay").show();
        var d1 = [[1, extank5thPreviousStockPrice], [2, extank4thPreviousStockPrice], [3, extank3rdPreviousStockPrice], [4, extank2ndPreviousStockPrice], [5, extankPreviousStockPrice], [6, extankCurrentStockPrice]];
        $.plot($("#extankHistoryDisplay"), [d1], options);
        return false;
    });

    $('#btnReinaccStocks').click(function () {
        $(".stockDisplay").hide();
        $("#reinaccStockDisplay").show();
        var d1 = [[1, reinacc5thPreviousStockPrice], [2, reinacc4thPreviousStockPrice], [3, reinacc3rdPreviousStockPrice], [4, reinacc2ndPreviousStockPrice], [5, reinaccPreviousStockPrice], [6, reinaccCurrentStockPrice]];
        $.plot($("#reinaccHistoryDisplay"), [d1], options);
        return false;
    });
});