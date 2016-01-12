$(document).ready(function () {
    var goFast = 0;
    var timer = 30;
   
    setInterval(function () {
        if (timer > 0) {
            timer--;
            $("#stockTimerDisplay").html("Next stock update in: " + timer + " sec.");
        }
    }, 1000);

    setInterval(function () {
        // DELSEC //
        delsec5thPreviousStockPrice = delsec4thPreviousStockPrice;
        delsec4thPreviousStockPrice = delsec3rdPreviousStockPrice;
        delsec3rdPreviousStockPrice = delsec2ndPreviousStockPrice;
        delsec2ndPreviousStockPrice = delsecPreviousStockPrice;
        delsecPreviousStockPrice = delsecCurrentStockPrice;

        delsecIncrement = totalPackets / (250 * delsecCurrentStockPrice) + Math.round(10 * Math.random()) / 100;
        if (delsecIncrement > 0) {
            $("#delsecChange").css("color","#24b41e");
            $("#delsecChange").html("+" + delsecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (delsecIncrement < 0) {
            $("#delsecChange").css("color", "#ce0000");
            $("#delsecChange").html(delsecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        delsecCurrentStockPrice += delsecIncrement;
        $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delsecCurrentPrice').html('$' + delsecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delsecCurrentStockPrice", delsecCurrentStockPrice);

        
        // DELSEC END //

        // ENTAQ //
        entaq5thPreviousStockPrice = entaq4thPreviousStockPrice;
        entaq4thPreviousStockPrice = entaq3rdPreviousStockPrice;
        entaq3rdPreviousStockPrice = entaq2ndPreviousStockPrice;
        entaq2ndPreviousStockPrice = entaqPreviousStockPrice;
        entaqPreviousStockPrice = entaqCurrentStockPrice;

        entaqIncrement = Math.round(20 * Math.random()) / 100 - 0.09;
        entaqCurrentStockPrice += entaqIncrement;      
          
        if (entaqCurrentStockPrice <= 0.1) {
            entaqCurrentStockPrice = 0.1;
            entaqIncrement = 0;
        }

        if (entaqIncrement > 0) {
            $("#entaqChange").css("color", "#24b41e");
            $("#entaqChange").html("+" + entaqIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (entaqIncrement < 0) {
            $("#entaqChange").css("color", "#ce0000");
            $("#entaqChange").html(entaqIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (entaqIncrement == 0) {
            $("#entaqChange").css("color", "#5ac7ff");
            $("#entaqChange").html(entaqIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }    
        $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#entaqCurrentPrice').html('$' + entaqCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("entaqCurrentStockPrice", entaqCurrentStockPrice);
      
        // ENTAQ END //

        // VENTEX //
        ventex5thPreviousStockPrice = ventex4thPreviousStockPrice;
        ventex4thPreviousStockPrice = ventex3rdPreviousStockPrice;
        ventex3rdPreviousStockPrice = ventex2ndPreviousStockPrice;
        ventex2ndPreviousStockPrice = ventexPreviousStockPrice;
        ventexPreviousStockPrice = ventexCurrentStockPrice;
       
        ventexIncrement = Math.round(20 * Math.random()) / 100 - 0.09;
        if (ventexIncrement > 0) {
            $("#ventexChange").css("color", "#24b41e");
            $("#ventexChange").html("+" + ventexIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (ventexIncrement < 0) {
            $("#ventexChange").css("color", "#ce0000");
            $("#ventexChange").html(ventexIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        ventexCurrentStockPrice += ventexIncrement;
        if (ventexCurrentStockPrice <= 0.1)
            ventexCurrentStockPrice = 0.1;
        $('#ventexStockDisplayCost').html('$' + ventexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ventexCurrentPrice').html('$' + ventexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("ventexCurrentStockPrice", ventexCurrentStockPrice);
        
        // VENTEX END //

        // ASTOR //
        astor5thPreviousStockPrice = astor4thPreviousStockPrice;
        astor4thPreviousStockPrice = astor3rdPreviousStockPrice;
        astor3rdPreviousStockPrice = astor2ndPreviousStockPrice;
        astor2ndPreviousStockPrice = astorPreviousStockPrice;
        astorPreviousStockPrice = astorCurrentStockPrice;
       
        astorIncrement = Math.round(20 * Math.random()) / 100 - 0.09;
        if (astorIncrement > 0) {
            $("#astorChange").css("color", "#24b41e");
            $("#astorChange").html("+" + astorIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (astorIncrement < 0) {
            $("#astorChange").css("color", "#ce0000");
            $("#astorChange").html(astorIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        astorCurrentStockPrice += astorIncrement;
        if (astorCurrentStockPrice <= 0.1)
            astorCurrentStockPrice = 0.1;
        $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#astorCurrentPrice').html('$' + astorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("astorCurrentStockPrice", astorCurrentStockPrice);
        
        // ASTOR END //

        // POPBOT //
        popbot5thPreviousStockPrice = popbot4thPreviousStockPrice;
        popbot4thPreviousStockPrice = popbot3rdPreviousStockPrice;
        popbot3rdPreviousStockPrice = popbot2ndPreviousStockPrice;
        popbot2ndPreviousStockPrice = popbotPreviousStockPrice;
        popbotPreviousStockPrice = popbotCurrentStockPrice;
        
        // 1 in a million chance of going up. (on getting a 555,555)
        popbotIncrement = Math.round(1000000 * Math.random());
        if (popbotIncrement == 555555) {
            popbotCurrentStockPrice += popbotIncrement;
            $("#popbotChange").css("color", "#24b41e");
            $("#popbotChange").html("+" + popbotIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }      
        $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#popbotCurrentPrice').html('$' + popbotCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("popbotCurrentStockPrice", popbotCurrentStockPrice);
        // POPBOT END //

        // pannam //
        pannam5thPreviousStockPrice = pannam4thPreviousStockPrice;
        pannam4thPreviousStockPrice = pannam3rdPreviousStockPrice;
        pannam3rdPreviousStockPrice = pannam2ndPreviousStockPrice;
        pannam2ndPreviousStockPrice = pannamPreviousStockPrice;
        pannamPreviousStockPrice = pannamCurrentStockPrice;
        
        pannamIncrement = Math.round(50 * Math.random() ) / 100 - 0.2; // average growth 0.05
        if (pannamIncrement > 0) {
            $("#pannamChange").css("color", "#24b41e");
            $("#pannamChange").html("+" + pannamIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (pannamIncrement < 0) {
            $("#pannamChange").css("color", "#ce0000");
            $("#pannamChange").html(pannamIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        pannamCurrentStockPrice += pannamIncrement;
        if (pannamCurrentStockPrice <= 0.1)
            pannamCurrentStockPrice = 0.1;
        $('#pannamStockDisplayCost').html('$' + pannamCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pannamCurrentPrice').html('$' + pannamCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("pannamCurrentStockPrice", pannamCurrentStockPrice);
        // pannam END //

        // TRIT //
        TRIT5thPreviousStockPrice = TRIT4thPreviousStockPrice;
        TRIT4thPreviousStockPrice = TRIT3rdPreviousStockPrice;
        TRIT3rdPreviousStockPrice = TRIT2ndPreviousStockPrice;
        TRIT2ndPreviousStockPrice = TRITPreviousStockPrice;
        TRITPreviousStockPrice = TRITCurrentStockPrice;

        TRITIncrement = Math.round(100 * Math.random()) / 100 - 0.5; // bigger than average jumps
        if (TRITIncrement > 0) {
            $("#TRITChange").css("color", "#24b41e");
            $("#TRITChange").html("+" + TRITIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (TRITIncrement < 0) {
            $("#TRITChange").css("color", "#ce0000");
            $("#TRITChange").html(TRITIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        TRITCurrentStockPrice += TRITIncrement;
        if (TRITCurrentStockPrice <= 0.2)
            TRITCurrentStockPrice = 0.2;
        $('#TRITStockDisplayCost').html('$' + TRITCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#TRITCurrentPrice').html('$' + TRITCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#TRITStockSellPrice').html('$' + (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("TRITCurrentStockPrice", TRITCurrentStockPrice);
        // TRIT END //

        // CANV //
        CANV5thPreviousStockPrice = CANV4thPreviousStockPrice;
        CANV4thPreviousStockPrice = CANV3rdPreviousStockPrice;
        CANV3rdPreviousStockPrice = CANV2ndPreviousStockPrice;
        CANV2ndPreviousStockPrice = CANVPreviousStockPrice;
        CANVPreviousStockPrice = CANVCurrentStockPrice;
        
        CANVIncrement = Math.round(33 * Math.random()) / 100 - 0.1; // steady increment average 2/3 of the time
        if (CANVIncrement > 0) {
            $("#CANVChange").css("color", "#24b41e");
            $("#CANVChange").html("+" + CANVIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (CANVIncrement < 0) {
            $("#CANVChange").css("color", "#ce0000");
            $("#CANVChange").html(CANVIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        CANVCurrentStockPrice += CANVIncrement;
        if (CANVCurrentStockPrice <= 0)
            CANVCurrentStockPrice = 0.01;
        $('#CANVStockDisplayCost').html('$' + CANVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#CANVCurrentPrice').html('$' + CANVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#CANVStockSellPrice').html('$' + (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("CANVCurrentStockPrice", CANVCurrentStockPrice);
        // CANV END //

        // OSM //
        OSM5thPreviousStockPrice = OSM4thPreviousStockPrice;
        OSM4thPreviousStockPrice = OSM3rdPreviousStockPrice;
        OSM3rdPreviousStockPrice = OSM2ndPreviousStockPrice;
        OSM2ndPreviousStockPrice = OSMPreviousStockPrice;
        OSMPreviousStockPrice = OSMCurrentStockPrice;

        OSMIncrement = Math.round(200 * Math.random()) / 100 - 1;
        if (OSMIncrement > 0) {
            $("#OSMChange").css("color", "#24b41e");
            $("#OSMChange").html("+" + OSMIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (OSMIncrement < 0) {
            $("#OSMChange").css("color", "#ce0000");
            $("#OSMChange").html(OSMIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        OSMCurrentStockPrice += OSMIncrement;
        if (OSMCurrentStockPrice <= 0)
            OSMCurrentStockPrice = 0.01;
        $('#OSMStockDisplayCost').html('$' + OSMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#OSMCurrentPrice').html('$' + OSMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("OSMCurrentStockPrice", OSMCurrentStockPrice);
        // OSM END //

        // PALLAD //
        PALLAD5thPreviousStockPrice = PALLAD4thPreviousStockPrice;
        PALLAD4thPreviousStockPrice = PALLAD3rdPreviousStockPrice;
        PALLAD3rdPreviousStockPrice = PALLAD2ndPreviousStockPrice;
        PALLAD2ndPreviousStockPrice = PALLADPreviousStockPrice;
        PALLADPreviousStockPrice = PALLADCurrentStockPrice;
       
        var x = 0;
        if (x < 30) { // 30 ticks (9 min) do this. this will start again each time page is loaded. :) 
            PALLADIncrement = Math.round(200 * Math.random()) / 100 - 1.25;
            x++;
        }
        else if (x >= 30) // then do this for the rest 
            PALLADIncrement = Math.round(200 * Math.random()) / 100 - 0.75;

        if (PALLADIncrement > 0) {
            $("#PALLADChange").css("color", "#24b41e");
            $("#PALLADChange").html("+" + PALLADIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (PALLADIncrement < 0) {
            $("#PALLADChange").css("color", "#ce0000");
            $("#PALLADChange").html(PALLADIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        PALLADCurrentStockPrice += PALLADIncrement;
        if (PALLADCurrentStockPrice <= 0)
            PALLADCurrentStockPrice = 0.01;
        $('#PALLADStockDisplayCost').html('$' + PALLADCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PALLADCurrentPrice').html('$' + PALLADCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PALLADStockSellPrice').html('$' + (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("PALLADCurrentStockPrice", PALLADCurrentStockPrice);
        // PALLAD END //

        // KELV //
        KELV5thPreviousStockPrice = KELV4thPreviousStockPrice;
        KELV4thPreviousStockPrice = KELV3rdPreviousStockPrice;
        KELV3rdPreviousStockPrice = KELV2ndPreviousStockPrice;
        KELV2ndPreviousStockPrice = KELVPreviousStockPrice;
        KELVPreviousStockPrice = KELVCurrentStockPrice;

        KELVIncrement = Math.round(200 * Math.random()) / 100 - 0.9; // small increment average.
        if (KELVIncrement > 0) {
            $("#KELVChange").css("color", "#24b41e");
            $("#KELVChange").html("+" + KELVIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (KELVIncrement < 0) {
            $("#KELVChange").css("color", "#ce0000");
            $("#KELVChange").html(KELVIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        KELVCurrentStockPrice += KELVIncrement;
        if (KELVCurrentStockPrice <= 0)
            KELVCurrentStockPrice = 0.01;
        $('#KELVStockDisplayCost').html('$' + KELVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#KELVCurrentPrice').html('$' + KELVCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("KELVCurrentStockPrice", KELVCurrentStockPrice);
        // KELV END //

        // stuccor //
        stuccor5thPreviousStockPrice = stuccor4thPreviousStockPrice;
        stuccor4thPreviousStockPrice = stuccor3rdPreviousStockPrice;
        stuccor3rdPreviousStockPrice = stuccor2ndPreviousStockPrice;
        stuccor2ndPreviousStockPrice = stuccorPreviousStockPrice;
        stuccorPreviousStockPrice = stuccorCurrentStockPrice;

        stuccorIncrement = Math.round(1000 * Math.random()) / 100 - 5;
        if (stuccorIncrement > 0) {
            $("#stuccorChange").css("color", "#24b41e");
            $("#stuccorChange").html("+" + stuccorIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (stuccorIncrement < 0) {
            $("#stuccorChange").css("color", "#ce0000");
            $("#stuccorChange").html(stuccorIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        stuccorCurrentStockPrice += stuccorIncrement;
        if (stuccorCurrentStockPrice <= 0)
            stuccorCurrentStockPrice = 0.01;
        $('#stuccorStockDisplayCost').html('$' + stuccorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stuccorCurrentPrice').html('$' + stuccorCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stuccorStockSellPrice').html('$' + (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("stuccorCurrentStockPrice", stuccorCurrentStockPrice);
        // stuccor END //

        // delcred //
        delcred5thPreviousStockPrice = delcred4thPreviousStockPrice;
        delcred4thPreviousStockPrice = delcred3rdPreviousStockPrice;
        delcred3rdPreviousStockPrice = delcred2ndPreviousStockPrice;
        delcred2ndPreviousStockPrice = delcredPreviousStockPrice;
        delcredPreviousStockPrice = delcredCurrentStockPrice;

        delcredIncrement = Math.round(800 * Math.random()) / 100 - 3.2;
        if (delcredIncrement > 0) {
            $("#delcredChange").css("color", "#24b41e");
            $("#delcredChange").html("+" + delcredIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (delcredIncrement < 0) {
            $("#delcredChange").css("color", "#ce0000");
            $("#delcredChange").html(delcredIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        delcredCurrentStockPrice += delcredIncrement;
        if (delcredCurrentStockPrice <= 0)
            delcredCurrentStockPrice = 0.01;
        $('#delcredStockDisplayCost').html('$' + delcredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delcredCurrentPrice').html('$' + delcredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delcredStockSellPrice').html('$' + (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delcredCurrentStockPrice", delcredCurrentStockPrice);
        // delcred END //

        // rustec //
        rustec5thPreviousStockPrice = rustec4thPreviousStockPrice;
        rustec4thPreviousStockPrice = rustec3rdPreviousStockPrice;
        rustec3rdPreviousStockPrice = rustec2ndPreviousStockPrice;
        rustec2ndPreviousStockPrice = rustecPreviousStockPrice;
        rustecPreviousStockPrice = rustecCurrentStockPrice;

        rustecIncrement = Math.round(400 * Math.random() + russianSixBitBank / 5) / 100 - 2;
        if (rustecIncrement > 0) {
            $("#rustecChange").css("color", "#24b41e");
            $("#rustecChange").html("+" + rustecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (rustecIncrement < 0) {
            $("#rustecChange").css("color", "#ce0000");
            $("#rustecChange").html(rustecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        rustecCurrentStockPrice += rustecIncrement;
        if (rustecCurrentStockPrice <= 0)
            rustecCurrentStockPrice = 0.01;
        $('#rustecStockDisplayCost').html('$' + rustecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#rustecCurrentPrice').html('$' + rustecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#rustecStockSellPrice').html('$' + (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("rustecCurrentStockPrice", rustecCurrentStockPrice);
        // rustec END //

        // exxocred //
        exxocred5thPreviousStockPrice = exxocred4thPreviousStockPrice;
        exxocred4thPreviousStockPrice = exxocred3rdPreviousStockPrice;
        exxocred3rdPreviousStockPrice = exxocred2ndPreviousStockPrice;
        exxocred2ndPreviousStockPrice = exxocredPreviousStockPrice;
        exxocredPreviousStockPrice = exxocredCurrentStockPrice;

        exxocredIncrement = Math.round(200 * Math.random()) / 100 - 1; // small adjustments
        if (exxocredIncrement > 0) {
            $("#exxocredChange").css("color", "#24b41e");
            $("#exxocredChange").html("+" + exxocredIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (exxocredIncrement < 0) {
            $("#exxocredChange").css("color", "#ce0000");
            $("#exxocredChange").html(exxocredIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        exxocredCurrentStockPrice += exxocredIncrement;
        if (exxocredCurrentStockPrice <= 0)
            exxocredCurrentStockPrice = 0.01;
        $('#exxocredStockDisplayCost').html('$' + exxocredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exxocredCurrentPrice').html('$' + exxocredCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("exxocredCurrentStockPrice", exxocredCurrentStockPrice);
        // exxocred END //

        // AU //
        AU5thPreviousStockPrice = AU4thPreviousStockPrice;
        AU4thPreviousStockPrice = AU3rdPreviousStockPrice;
        AU3rdPreviousStockPrice = AU2ndPreviousStockPrice;
        AU2ndPreviousStockPrice = AUPreviousStockPrice;
        AUPreviousStockPrice = AUCurrentStockPrice;

        AUIncrement = Math.round(2000 * Math.random()) / 100 - 9;
        if (AUIncrement > 0) {
            $("#AUChange").css("color", "#24b41e");
            $("#AUChange").html("+" + AUIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (AUIncrement < 0) {
            $("#AUChange").css("color", "#ce0000");
            $("#AUChange").html(AUIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        AUCurrentStockPrice += AUIncrement;
        if (AUCurrentStockPrice <= 0)
            AUCurrentStockPrice = 0.01;
        $('#AUStockDisplayCost').html('$' + AUCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#AUCurrentPrice').html('$' + AUCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#AUStockSellPrice').html('$' + (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("AUCurrentStockPrice", AUCurrentStockPrice);
        // AU END //

        // acehold //
        acehold5thPreviousStockPrice = acehold4thPreviousStockPrice;
        acehold4thPreviousStockPrice = acehold3rdPreviousStockPrice;
        acehold3rdPreviousStockPrice = acehold2ndPreviousStockPrice;
        acehold2ndPreviousStockPrice = aceholdPreviousStockPrice;
        aceholdPreviousStockPrice = aceholdCurrentStockPrice;

        aceholdIncrement = Math.round(2000 * Math.random()) / 100 - 7.8;
        if (aceholdIncrement > 0) {
            $("#aceholdChange").css("color", "#24b41e");
            $("#aceholdChange").html("+" + aceholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (aceholdIncrement < 0) {
            $("#aceholdChange").css("color", "#ce0000");
            $("#aceholdChange").html(aceholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        aceholdCurrentStockPrice += aceholdIncrement;
        if (aceholdCurrentStockPrice <= 0)
            aceholdCurrentStockPrice = 0.01;
        $('#aceholdStockDisplayCost').html('$' + aceholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#aceholdCurrentPrice').html('$' + aceholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#aceholdStockSellPrice').html('$' + (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("aceholdCurrentStockPrice", aceholdCurrentStockPrice);
        // acehold END //

        // delhold //
        delhold5thPreviousStockPrice = delhold4thPreviousStockPrice;
        delhold4thPreviousStockPrice = delhold3rdPreviousStockPrice;
        delhold3rdPreviousStockPrice = delhold2ndPreviousStockPrice;
        delhold2ndPreviousStockPrice = delholdPreviousStockPrice;
        delholdPreviousStockPrice = delholdCurrentStockPrice;

        delholdIncrement = Math.round(100 * (Math.random() * 50) + ownedDelsecStocks / 100 + ownedDelcredStocks / 10) / 100 - 25;
        if (delholdIncrement > 0) {
            $("#delholdChange").css("color", "#24b41e");
            $("#delholdChange").html("+" + delholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (delholdIncrement < 0) {
            $("#delholdChange").css("color", "#ce0000");
            $("#delholdChange").html(delholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        delholdCurrentStockPrice += delholdIncrement;
        if (delholdCurrentStockPrice <= 0)
            delholdCurrentStockPrice = 0.01;
        $('#delholdStockDisplayCost').html('$' + delholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delholdCurrentPrice').html('$' + delholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delholdStockSellPrice').html('$' + (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delholdCurrentStockPrice", delholdCurrentStockPrice);
        // delhold END //

        // DIAM //
        DIAM5thPreviousStockPrice = DIAM4thPreviousStockPrice;
        DIAM4thPreviousStockPrice = DIAM3rdPreviousStockPrice;
        DIAM3rdPreviousStockPrice = DIAM2ndPreviousStockPrice;
        DIAM2ndPreviousStockPrice = DIAMPreviousStockPrice;
        DIAMPreviousStockPrice = DIAMCurrentStockPrice;

        DIAMIncrement = Math.round(5000 * Math.random()) / 100 - 24;
        if (DIAMIncrement > 0) {
            $("#DIAMChange").css("color", "#24b41e");
            $("#DIAMChange").html("+" + DIAMIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (DIAMIncrement < 0) {
            $("#DIAMChange").css("color", "#ce0000");
            $("#DIAMChange").html(DIAMIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        DIAMCurrentStockPrice += DIAMIncrement;
        if (DIAMCurrentStockPrice <= 0)
            DIAMCurrentStockPrice = 0.01;
        $('#DIAMStockDisplayCost').html('$' + DIAMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#DIAMCurrentPrice').html('$' + DIAMCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#DIAMStockSellPrice').html('$' + (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("DIAMCurrentStockPrice", DIAMCurrentStockPrice);
        // DIAM END //

        // pentacc //
        pentacc5thPreviousStockPrice = pentacc4thPreviousStockPrice;
        pentacc4thPreviousStockPrice = pentacc3rdPreviousStockPrice;
        pentacc3rdPreviousStockPrice = pentacc2ndPreviousStockPrice;
        pentacc2ndPreviousStockPrice = pentaccPreviousStockPrice;
        pentaccPreviousStockPrice = pentaccCurrentStockPrice;

        pentaccIncrement = Math.round(15000 * Math.random()) / 100 - 75;
        if (pentaccIncrement > 0) {
            $("#pentaccChange").css("color", "#24b41e");
            $("#pentaccChange").html("+" + pentaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (pentaccIncrement < 0) {
            $("#pentaccChange").css("color", "#ce0000");
            $("#pentaccChange").html(pentaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        pentaccCurrentStockPrice += pentaccIncrement;
        if (pentaccCurrentStockPrice <= 100)
            pentaccCurrentStockPrice = 100.01;
        $('#pentaccStockDisplayCost').html('$' + pentaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pentaccCurrentPrice').html('$' + pentaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pentaccStockSellPrice').html('$' + (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("pentaccCurrentStockPrice", pentaccCurrentStockPrice);
        // pentacc END //

        // noodle //
        noodle5thPreviousStockPrice = noodle4thPreviousStockPrice;
        noodle4thPreviousStockPrice = noodle3rdPreviousStockPrice;
        noodle3rdPreviousStockPrice = noodle2ndPreviousStockPrice;
        noodle2ndPreviousStockPrice = noodlePreviousStockPrice;
        noodlePreviousStockPrice = noodleCurrentStockPrice;

        noodleIncrement = Math.round(20000 * Math.random()) / 100 - 75;
        if (noodleIncrement > 0) {
            $("#noodleChange").css("color", "#24b41e");
            $("#noodleChange").html("+" + noodleIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (noodleIncrement < 0) {
            $("#noodleChange").css("color", "#ce0000");
            $("#noodleChange").html(noodleIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        noodleCurrentStockPrice += noodleIncrement;
        if (noodleCurrentStockPrice <= 0)
            noodleCurrentStockPrice = 0.01;
        $('#noodleStockDisplayCost').html('$' + noodleCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#noodleCurrentPrice').html('$' + noodleCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#noodleStockSellPrice').html('$' + (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("noodleCurrentStockPrice", noodleCurrentStockPrice);
        // noodle END //

        // megahard //
        megahard5thPreviousStockPrice = megahard4thPreviousStockPrice;
        megahard4thPreviousStockPrice = megahard3rdPreviousStockPrice;
        megahard3rdPreviousStockPrice = megahard2ndPreviousStockPrice;
        megahard2ndPreviousStockPrice = megahardPreviousStockPrice;
        megahardPreviousStockPrice = megahardCurrentStockPrice;

       megahardIncrement = Math.round(40000 * Math.random()) / 100 - 185;
        if (megahardIncrement > 0) {
            $("#megahardChange").css("color", "#24b41e");
            $("#megahardChange").html("+" + megahardIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (megahardIncrement < 0) {
            $("#megahardChange").css("color", "#ce0000");
            $("#megahardChange").html(megahardIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        megahardCurrentStockPrice += megahardIncrement;
        if (megahardCurrentStockPrice <= 0)
            megahardCurrentStockPrice = 0.01;
        $('#megahardStockDisplayCost').html('$' + megahardCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#megahardCurrentPrice').html('$' + megahardCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#megahardStockSellPrice').html('$' + (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("megahardCurrentStockPrice", megahardCurrentStockPrice);
        // megahard END //

        // chimerasec //
        chimerasec5thPreviousStockPrice = chimerasec4thPreviousStockPrice;
        chimerasec4thPreviousStockPrice = chimerasec3rdPreviousStockPrice;
        chimerasec3rdPreviousStockPrice = chimerasec2ndPreviousStockPrice;
        chimerasec2ndPreviousStockPrice = chimerasecPreviousStockPrice;
        chimerasecPreviousStockPrice = chimerasecCurrentStockPrice;

        chimerasecIncrement = Math.round(40000 * Math.random()) / 100 - 200;
        if (chimerasecIncrement > 0) {
            $("#chimerasecChange").css("color", "#24b41e");
            $("#chimerasecChange").html("+" + chimerasecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (chimerasecIncrement < 0) {
            $("#chimerasecChange").css("color", "#ce0000");
            $("#chimerasecChange").html(chimerasecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        chimerasecCurrentStockPrice += chimerasecIncrement;
        if (chimerasecCurrentStockPrice <= 0)
            chimerasecCurrentStockPrice = 0.01;
        $('#chimerasecStockDisplayCost').html('$' + chimerasecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimerasecCurrentPrice').html('$' + chimerasecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimerasecStockSellPrice').html('$' + (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("chimerasecCurrentStockPrice", chimerasecCurrentStockPrice);
        // chimerasec END //

        // chimerahold //
        chimerahold5thPreviousStockPrice = chimerahold4thPreviousStockPrice;
        chimerahold4thPreviousStockPrice = chimerahold3rdPreviousStockPrice;
        chimerahold3rdPreviousStockPrice = chimerahold2ndPreviousStockPrice;
        chimerahold2ndPreviousStockPrice = chimeraholdPreviousStockPrice;
        chimeraholdPreviousStockPrice = chimeraholdCurrentStockPrice;

       chimeraholdIncrement = Math.round(40000 * Math.random()) / 100 - 200 + ownedChimerasecStocks * 10;
        if (chimeraholdIncrement > 0) {
            $("#chimeraholdChange").css("color", "#24b41e");
            $("#chimeraholdChange").html("+" + chimeraholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (chimeraholdIncrement < 0) {
            $("#chimeraholdChange").css("color", "#ce0000");
            $("#chimeraholdChange").html(chimeraholdIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        chimeraholdCurrentStockPrice += chimeraholdIncrement;
        if (chimeraholdCurrentStockPrice <= 0)
            chimeraholdCurrentStockPrice = 0.01;
        $('#chimeraholdStockDisplayCost').html('$' + chimeraholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimeraholdCurrentPrice').html('$' + chimeraholdCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimeraholdStockSellPrice').html('$' + (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("chimeraholdCurrentStockPrice", chimeraholdCurrentStockPrice);
        // chimerahold END //

        // griffonbank //
        griffonbank5thPreviousStockPrice = griffonbank4thPreviousStockPrice;
        griffonbank4thPreviousStockPrice = griffonbank3rdPreviousStockPrice;
        griffonbank3rdPreviousStockPrice = griffonbank2ndPreviousStockPrice;
        griffonbank2ndPreviousStockPrice = griffonbankPreviousStockPrice;
        griffonbankPreviousStockPrice = griffonbankCurrentStockPrice;

        griffonbankIncrement = Math.round(40000 * Math.random()) / 100 - 165;
        if (griffonbankIncrement > 0) {
            $("#griffonbankChange").css("color", "#24b41e");
            $("#griffonbankChange").html("+" + griffonbankIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (griffonbankIncrement < 0) {
            $("#griffonbankChange").css("color", "#ce0000");
            $("#griffonbankChange").html(griffonbankIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        griffonbankCurrentStockPrice += griffonbankIncrement;
        if (griffonbankCurrentStockPrice <= 0)
            griffonbankCurrentStockPrice = 0.01;
        $('#griffonbankStockDisplayCost').html('$' + griffonbankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#griffonbankCurrentPrice').html('$' + griffonbankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#griffonbankStockSellPrice').html('$' + (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("griffonbankCurrentStockPrice", griffonbankCurrentStockPrice);
        // griffonbank END //

        // turborus //
        turborus5thPreviousStockPrice = turborus4thPreviousStockPrice;
        turborus4thPreviousStockPrice = turborus3rdPreviousStockPrice;
        turborus3rdPreviousStockPrice = turborus2ndPreviousStockPrice;
        turborus2ndPreviousStockPrice = turborusPreviousStockPrice;
        turborusPreviousStockPrice = turborusCurrentStockPrice;

        turborusIncrement = Math.round(50000 * Math.random()) / 100 - 250 + ownedRustecStocks * 25;
        if (turborusIncrement > 0) {
            $("#turborusChange").css("color", "#24b41e");
            $("#turborusChange").html("+" + turborusIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (turborusIncrement < 0) {
            $("#turborusChange").css("color", "#ce0000");
            $("#turborusChange").html(turborusIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        turborusCurrentStockPrice += turborusIncrement;
        if (turborusCurrentStockPrice <= 0)
            turborusCurrentStockPrice = 0.01;
        $('#turborusStockDisplayCost').html('$' + turborusCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#turborusCurrentPrice').html('$' + turborusCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#turborusStockSellPrice').html('$' + (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("turborusCurrentStockPrice", turborusCurrentStockPrice);
        // turborus END //

        // exodmpt //
        exodmpt5thPreviousStockPrice = exodmpt4thPreviousStockPrice;
        exodmpt4thPreviousStockPrice = exodmpt3rdPreviousStockPrice;
        exodmpt3rdPreviousStockPrice = exodmpt2ndPreviousStockPrice;
        exodmpt2ndPreviousStockPrice = exodmptPreviousStockPrice;
        exodmptPreviousStockPrice = exodmptCurrentStockPrice;

        exodmptIncrement = Math.round(50000 * Math.random()) / 100 - 250 + ownedExxocredStocks * 25;
        if (exodmptIncrement > 0) {
            $("#exodmptChange").css("color", "#24b41e");
            $("#exodmptChange").html("+" + exodmptIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (exodmptIncrement < 0) {
            $("#exodmptChange").css("color", "#ce0000");
            $("#exodmptChange").html(exodmptIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        exodmptCurrentStockPrice += exodmptIncrement;
        if (exodmptCurrentStockPrice <= 0)
            exodmptCurrentStockPrice = 0.01;
        $('#exodmptStockDisplayCost').html('$' + exodmptCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exodmptCurrentPrice').html('$' + exodmptCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exodmptStockSellPrice').html('$' + (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("exodmptCurrentStockPrice", exodmptCurrentStockPrice);
        // exodmpt END //

        // ramnet //
        ramnet5thPreviousStockPrice = ramnet4thPreviousStockPrice;
        ramnet4thPreviousStockPrice = ramnet3rdPreviousStockPrice;
        ramnet3rdPreviousStockPrice = ramnet2ndPreviousStockPrice;
        ramnet2ndPreviousStockPrice = ramnetPreviousStockPrice;
        ramnetPreviousStockPrice = ramnetCurrentStockPrice;

        ramnetIncrement = Math.round(30000 * Math.random()) / 100 - 100;
        if (ramnetIncrement > 0) {
            $("#ramnetChange").css("color", "#24b41e");
            $("#ramnetChange").html("+" + ramnetIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (ramnetIncrement < 0) {
            $("#ramnetChange").css("color", "#ce0000");
            $("#ramnetChange").html(ramnetIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        ramnetCurrentStockPrice += ramnetIncrement;
        if (ramnetCurrentStockPrice <= 0)
            ramnetCurrentStockPrice = 0.01;
        $('#ramnetStockDisplayCost').html('$' + ramnetCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ramnetCurrentPrice').html('$' + ramnetCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ramnetStockSellPrice').html('$' + (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("ramnetCurrentStockPrice", ramnetCurrentStockPrice);
        // ramnet END //

        // alphacen //
        alphacen5thPreviousStockPrice = alphacen4thPreviousStockPrice;
        alphacen4thPreviousStockPrice = alphacen3rdPreviousStockPrice;
        alphacen3rdPreviousStockPrice = alphacen2ndPreviousStockPrice;
        alphacen2ndPreviousStockPrice = alphacenPreviousStockPrice;
        alphacenPreviousStockPrice = alphacenCurrentStockPrice;

        alphacenIncrement = Math.round(40000 * Math.random()) / 100 - 150;
        if (alphacenIncrement > 0) {
            $("#alphacenChange").css("color", "#24b41e");
            $("#alphacenChange").html("+" + alphacenIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (alphacenIncrement < 0) {
            $("#alphacenChange").css("color", "#ce0000");
            $("#alphacenChange").html(alphacenIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        alphacenCurrentStockPrice += alphacenIncrement;
        if (alphacenCurrentStockPrice <= 0)
            alphacenCurrentStockPrice = 0.01;
        $('#alphacenStockDisplayCost').html('$' + alphacenCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#alphacenCurrentPrice').html('$' + alphacenCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#alphacenStockSellPrice').html('$' + (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("alphacenCurrentStockPrice", alphacenCurrentStockPrice);
        // alphacen END //

        // scatter //
        scatter5thPreviousStockPrice = scatter4thPreviousStockPrice;
        scatter4thPreviousStockPrice = scatter3rdPreviousStockPrice;
        scatter3rdPreviousStockPrice = scatter2ndPreviousStockPrice;
        scatter2ndPreviousStockPrice = scatterPreviousStockPrice;
        scatterPreviousStockPrice = scatterCurrentStockPrice;

        scatterIncrement = Math.round(100 * Math.random() * scatterCurrentStockPrice / 6727) / 100; //exponent
        if (scatterIncrement > 0) {
            $("#scatterChange").css("color", "#24b41e");
            $("#scatterChange").html("+" + scatterIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        scatterCurrentStockPrice += scatterIncrement;
        if (scatterCurrentStockPrice <= 0)
            scatterCurrentStockPrice = 0.01;
        $('#scatterStockDisplayCost').html('$' + scatterCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#scatterCurrentPrice').html('$' + scatterCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#scatterStockSellPrice').html('$' + (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("scatterCurrentStockPrice", scatterCurrentStockPrice);
        // scatter END //

        // kalzex //
        kalzex5thPreviousStockPrice = kalzex4thPreviousStockPrice;
        kalzex4thPreviousStockPrice = kalzex3rdPreviousStockPrice;
        kalzex3rdPreviousStockPrice = kalzex2ndPreviousStockPrice;
        kalzex2ndPreviousStockPrice = kalzexPreviousStockPrice;
        kalzexPreviousStockPrice = kalzexCurrentStockPrice;

        kalzexIncrement = Math.round(20000 * Math.random() + ownedKalzexStocks * 10) / 100 - 100;
        if (kalzexIncrement > 0) {
            $("#kalzexChange").css("color", "#24b41e");
            $("#kalzexChange").html("+" + kalzexIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (kalzexIncrement < 0) {
            $("#kalzexChange").css("color", "#ce0000");
            $("#kalzexChange").html(kalzexIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        kalzexCurrentStockPrice += kalzexIncrement;
        if (kalzexCurrentStockPrice <= 0)
            kalzexCurrentStockPrice = 0.01;
        $('#kalzexStockDisplayCost').html('$' + kalzexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#kalzexCurrentPrice').html('$' + kalzexCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#kalzexStockSellPrice').html('$' + (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("kalzexCurrentStockPrice", kalzexCurrentStockPrice);
        // kalzex END //

        // sonicos //   
        sonicos5thPreviousStockPrice = sonicos4thPreviousStockPrice;
        sonicos4thPreviousStockPrice = sonicos3rdPreviousStockPrice;
        sonicos3rdPreviousStockPrice = sonicos2ndPreviousStockPrice;
        sonicos2ndPreviousStockPrice = sonicosPreviousStockPrice;
        sonicosPreviousStockPrice = sonicosCurrentStockPrice;

        sonicosIncrement = Math.round(40000 * Math.random()) / 100 - 200 + goFast;
        if (sonicosIncrement > 0) {
            $("#sonicosChange").css("color", "#24b41e");
            $("#sonicosChange").html("+" + sonicosIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (sonicosIncrement < 0) {
            $("#sonicosChange").css("color", "#ce0000");
            $("#sonicosChange").html(sonicosIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        sonicosCurrentStockPrice += sonicosIncrement;
        if (sonicosCurrentStockPrice <= 0)
            sonicosCurrentStockPrice = 0.01;
        $('#sonicosStockDisplayCost').html('$' + sonicosCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#sonicosCurrentPrice').html('$' + sonicosCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#sonicosStockSellPrice').html('$' + (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("sonicosCurrentStockPrice", sonicosCurrentStockPrice);
        goFast += 10;
        // sonicos END //

        // trancext //
        trancext5thPreviousStockPrice = trancext4thPreviousStockPrice;
        trancext4thPreviousStockPrice = trancext3rdPreviousStockPrice;
        trancext3rdPreviousStockPrice = trancext2ndPreviousStockPrice;
        trancext2ndPreviousStockPrice = trancextPreviousStockPrice;
        trancextPreviousStockPrice = trancextCurrentStockPrice;
       
        trancextIncrement = Math.round(70000 * Math.random()) / 100 - 185;
        if (trancextIncrement > 0) {
            $("#trancextChange").css("color", "#24b41e");
            $("#trancextChange").html("+" + trancextIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (trancextIncrement < 0) {
            $("#trancextChange").css("color", "#ce0000");
            $("#trancextChange").html(trancextIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        trancextCurrentStockPrice += trancextIncrement;
        if (trancextCurrentStockPrice <= 0)
            trancextCurrentStockPrice = 0.01;
        $('#trancextStockDisplayCost').html('$' + trancextCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#trancextCurrentPrice').html('$' + trancextCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#trancextStockSellPrice').html('$' + (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("trancextCurrentStockPrice", trancextCurrentStockPrice);
        // trancext END //

        // stklr //
        stklr5thPreviousStockPrice = stklr4thPreviousStockPrice;
        stklr4thPreviousStockPrice = stklr3rdPreviousStockPrice;
        stklr3rdPreviousStockPrice = stklr2ndPreviousStockPrice;
        stklr2ndPreviousStockPrice = stklrPreviousStockPrice;
        stklrPreviousStockPrice = stklrCurrentStockPrice;
        
        stklrIncrement = Math.round(1000 * Math.random()) / 100 - 5; // heheh
        if (stklrIncrement > 0) {
            $("#stklrChange").css("color", "#24b41e");
            $("#stklrChange").html("+" + stklrIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (stklrIncrement < 0) {
            $("#stklrChange").css("color", "#ce0000");
            $("#stklrChange").html(stklrIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        stklrCurrentStockPrice += stklrIncrement;
        if (stklrCurrentStockPrice <= 0)
            stklrCurrentStockPrice = 0.01;
        $('#stklrStockDisplayCost').html('$' + stklrCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stklrCurrentPrice').html('$' + stklrCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stklrStockSellPrice').html('$' + (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("stklrCurrentStockPrice", stklrCurrentStockPrice);
        // stklr END //

        // vipersec //
        vipersec5thPreviousStockPrice = vipersec4thPreviousStockPrice;
        vipersec4thPreviousStockPrice = vipersec3rdPreviousStockPrice;
        vipersec3rdPreviousStockPrice = vipersec2ndPreviousStockPrice;
        vipersec2ndPreviousStockPrice = vipersecPreviousStockPrice;
        vipersecPreviousStockPrice = vipersecCurrentStockPrice;
       
        vipersecIncrement = Math.round(100000 * Math.random()) / 100 - 500 + ownedCANVStocks + ownedOSMStocks + ownedPALLADStocks + ownedKELVStocks + ownedAUStocks * 5 + ownedDIAMStocks * 10 + ownedPLATStocks * 100;
        if (vipersecIncrement > 0) {
            $("#vipersecChange").css("color", "#24b41e");
            $("#vipersecChange").html("+" + vipersecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (vipersecIncrement < 0) {
            $("#vipersecChange").css("color", "#ce0000");
            $("#vipersecChange").html(vipersecIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        vipersecCurrentStockPrice += vipersecIncrement;
        if (vipersecCurrentStockPrice <= 0)
            vipersecCurrentStockPrice = 0.01;
        $('#vipersecStockDisplayCost').html('$' + vipersecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#vipersecCurrentPrice').html('$' + vipersecCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#vipersecStockSellPrice').html('$' + (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("vipersecCurrentStockPrice", vipersecCurrentStockPrice);
        // vipersec END //

        // PLAT //
        PLAT5thPreviousStockPrice = PLAT4thPreviousStockPrice;
        PLAT4thPreviousStockPrice = PLAT3rdPreviousStockPrice;
        PLAT3rdPreviousStockPrice = PLAT2ndPreviousStockPrice;
        PLAT2ndPreviousStockPrice = PLATPreviousStockPrice;
        PLATPreviousStockPrice = PLATCurrentStockPrice;
        
        PLATIncrement = Math.round(100000 * Math.random()) / 100 - 400;
        if (PLATIncrement > 0) {
            $("#PLATChange").css("color", "#24b41e");
            $("#PLATChange").html("+" + PLATIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (PLATIncrement < 0) {
            $("#PLATChange").css("color", "#ce0000");
            $("#PLATChange").html(PLATIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        PLATCurrentStockPrice += PLATIncrement;
        if (PLATCurrentStockPrice <= 0)
            PLATCurrentStockPrice = 0.01;
        $('#PLATStockDisplayCost').html('$' + PLATCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PLATCurrentPrice').html('$' + PLATCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PLATStockSellPrice').html('$' + (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("PLATCurrentStockPrice", PLATCurrentStockPrice);
        // PLAT END //

        // infone //
        infone5thPreviousStockPrice = infone4thPreviousStockPrice;
        infone4thPreviousStockPrice = infone3rdPreviousStockPrice;
        infone3rdPreviousStockPrice = infone2ndPreviousStockPrice;
        infone2ndPreviousStockPrice = infonePreviousStockPrice;
        infonePreviousStockPrice = infoneCurrentStockPrice;
      
        if(ownedStklrStocks > 0 || ownedVipersecStocks > 0 || ownedPLATStocks > 0)
            infoneIncrement = Math.round(100 * Math.random() * infoneCurrentStockPrice / 1000) / 100;
        else
            infoneIncrement = Math.round(1000 * Math.random()) / 100 - 5;

        if (infoneIncrement > 0) {
            $("#infoneChange").css("color", "#24b41e");
            $("#infoneChange").html("+" + infoneIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (infoneIncrement < 0) {
            $("#infoneChange").css("color", "#ce0000");
            $("#infoneChange").html(infoneIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        infoneCurrentStockPrice += infoneIncrement;
        if (infoneCurrentStockPrice <= 0)
            infoneCurrentStockPrice = 0.01;
        $('#infoneStockDisplayCost').html('$' + infoneCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#infoneCurrentPrice').html('$' + infoneCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#infoneStockSellPrice').html('$' + (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("infoneCurrentStockPrice", infoneCurrentStockPrice);
        // infone END //

        // extank //
        extank5thPreviousStockPrice = extank4thPreviousStockPrice;
        extank4thPreviousStockPrice = extank3rdPreviousStockPrice;
        extank3rdPreviousStockPrice = extank2ndPreviousStockPrice;
        extank2ndPreviousStockPrice = extankPreviousStockPrice;
        extankPreviousStockPrice = extankCurrentStockPrice;
     
        extankIncrement = Math.round(110000 * Math.random()) / 100 - 400;
        if (extankIncrement > 0) {
            $("#extankChange").css("color", "#24b41e");
            $("#extankChange").html("+" + extankIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (extankIncrement < 0) {
            $("#extankChange").css("color", "#ce0000");
            $("#extankChange").html(extankIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        extankCurrentStockPrice += extankIncrement;
        if (extankCurrentStockPrice <= 0)
            extankCurrentStockPrice = 0.01;
        $('#extankStockDisplayCost').html('$' + extankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#extankCurrentPrice').html('$' + extankCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#extankStockSellPrice').html('$' + (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("extankCurrentStockPrice", extankCurrentStockPrice);
        // extank END //

        // reinacc //
        reinacc5thPreviousStockPrice = reinacc4thPreviousStockPrice;
        reinacc4thPreviousStockPrice = reinacc3rdPreviousStockPrice;
        reinacc3rdPreviousStockPrice = reinacc2ndPreviousStockPrice;
        reinacc2ndPreviousStockPrice = reinaccPreviousStockPrice;
        reinaccPreviousStockPrice = reinaccCurrentStockPrice;
        
        reinaccIncrement = Math.round(100 * Math.random() * money / reinaccCurrentStockPrice * ownedDelsecStocks * 10) / 100;
        if (reinaccIncrement > 0) {
            $("#reinaccChange").css("color", "#24b41e");
            $("#reinaccChange").html("+" + reinaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        reinaccCurrentStockPrice += reinaccIncrement;
        if (reinaccCurrentStockPrice <= 0)
            reinaccCurrentStockPrice = 0.01;
        $('#reinaccStockDisplayCost').html('$' + reinaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#reinaccCurrentPrice').html('$' + reinaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#reinaccStockSellPrice').html('$' + (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("reinaccCurrentStockPrice", reinaccCurrentStockPrice);
        // reinacc END //
        timer = 30;
    }, 30000);   
});