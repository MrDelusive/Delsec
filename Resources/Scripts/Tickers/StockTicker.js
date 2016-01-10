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
        delsecIncrement = totalPackets / (250 * delsecCurrentStockPrice) + Math.round(100 * Math.random() / 10) / 100;
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
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delsecCurrentStockPrice", delsecCurrentStockPrice);
        // DELSEC END //

        // ENTAQ //
        entaqIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
        entaqCurrentStockPrice += entaqIncrement;
        if (entaqCurrentStockPrice <= 0.1) 
            entaqCurrentStockPrice = 0.1;
             
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
        $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("entaqCurrentStockPrice", entaqCurrentStockPrice);
        // ENTAQ END //

        // VENTEX //
        ventexIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
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
        $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("ventexCurrentStockPrice", ventexCurrentStockPrice);
        // VENTEX END //

        // ASTOR //
        astorIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
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
        $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("astorCurrentStockPrice", astorCurrentStockPrice);
        // ASTOR END //

        // POPBOT //
        // 1 in a million chance of going up. (on getting a 555,555)
        popbotIncrement = Math.round(1000000 * Math.random());
        if (popbotIncrement == 555555) {
            popbotCurrentStockPrice += popbotIncrement;
            $("#popbotChange").css("color", "#24b41e");
            $("#popbotChange").html("+" + popbotIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }      
        $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("popbotCurrentStockPrice", popbotCurrentStockPrice);
        // POPBOT END //

        // pannam //
        pannamIncrement = Math.round(100 * Math.random() / 2) / 100 - 0.20; // average growth 0.05
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
        $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("pannamCurrentStockPrice", pannamCurrentStockPrice);
        // pannam END //

        // TRIT //
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
        $('#TRITStockSellPrice').html('$' + (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("TRITCurrentStockPrice", TRITCurrentStockPrice);
        // TRIT END //

        // CANV //
        CANVIncrement = Math.round(100 * Math.random() * 0.3) / 100 - 0.1; // steady increment average 2/3 of the time
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
        $('#CANVStockSellPrice').html('$' + (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("CANVCurrentStockPrice", CANVCurrentStockPrice);
        // CANV END //

        // OSM //
        OSMIncrement = Math.round(100 * Math.random() * 2) / 100 - 1;
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
        $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("OSMCurrentStockPrice", OSMCurrentStockPrice);
        // OSM END //

        // PALLAD //
        var x = 0;
        if (x < 30) { // 30 ticks (9 min) do this. this will start again each time page is loaded. :) 
            PALLADIncrement = Math.round(100 * Math.random() * 2 - 1.25) / 100;
            x++;
        }
        else if (x >= 30) // then do this for the rest 
            PALLADIncrement = Math.round(100 * Math.random() * 2) / 100 - 0.75;

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
        $('#PALLADStockSellPrice').html('$' + (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("PALLADCurrentStockPrice", PALLADCurrentStockPrice);
        // PALLAD END //

        // KELV //
        KELVIncrement = Math.round(100 * Math.random() * 2) / 100 - 0.9; // small increment average.
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
        $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("KELVCurrentStockPrice", KELVCurrentStockPrice);
        // KELV END //

        // stuccor //
        stuccorIncrement = Math.round(100 * Math.random() * 10) / 100 - 5;
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
        $('#stuccorStockSellPrice').html('$' + (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("stuccorCurrentStockPrice", stuccorCurrentStockPrice);
        // stuccor END //

        // delcred //
        delcredIncrement = Math.round(100 * Math.random() * 8) / 100 - 3.2;
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
        $('#delcredStockSellPrice').html('$' + (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delcredCurrentStockPrice", delcredCurrentStockPrice);
        // delcred END //

        // rustec //
        rustecIncrement = Math.round(100 * Math.random() * 4 + russianSixBitBank / 5) / 100 - 2;
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
        $('#rustecStockSellPrice').html('$' + (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("rustecCurrentStockPrice", rustecCurrentStockPrice);
        // rustec END //

        // exxocred //
        exxocredIncrement = Math.round(100 * Math.random() * 2) / 100 - 1; // small adjustments
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
        $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("exxocredCurrentStockPrice", exxocredCurrentStockPrice);
        // exxocred END //

        // AU //
        AUIncrement = Math.round(100 * Math.random() * 20) / 100 - 9;
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
        $('#AUStockSellPrice').html('$' + (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("AUCurrentStockPrice", AUCurrentStockPrice);
        // AU END //

        // acehold //
        aceholdIncrement = Math.round(100 * Math.random() * 20) / 100 - 7.8;
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
        $('#aceholdStockSellPrice').html('$' + (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("aceholdCurrentStockPrice", aceholdCurrentStockPrice);
        // acehold END //

        // delhold //
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
        $('#delholdStockSellPrice').html('$' + (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("delholdCurrentStockPrice", delholdCurrentStockPrice);
        // delhold END //

        // DIAM //
        DIAMIncrement = Math.round(100 * Math.random() * 50) / 100 - 24;
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
        $('#DIAMStockSellPrice').html('$' + (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("DIAMCurrentStockPrice", DIAMCurrentStockPrice);
        // DIAM END //

        // pentacc //
        pentaccIncrement = Math.round(100 * Math.random() * 150) / 100 - 75;
        if (pentaccIncrement > 0) {
            $("#pentaccChange").css("color", "#24b41e");
            $("#pentaccChange").html("+" + pentaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (pentaccIncrement < 0) {
            $("#pentaccChange").css("color", "#ce0000");
            $("#pentaccChange").html(pentaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        pentaccCurrentStockPrice += pentaccIncrement;
        if (pentaccCurrentStockPrice <= 0)
            pentaccCurrentStockPrice = 0.01;
        $('#pentaccStockDisplayCost').html('$' + pentaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pentaccStockSellPrice').html('$' + (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("pentaccCurrentStockPrice", pentaccCurrentStockPrice);
        // pentacc END //

        // noodle //
        noodleIncrement = Math.round(100 * Math.random() * 200) / 100 - 75;
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
        $('#noodleStockSellPrice').html('$' + (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("noodleCurrentStockPrice", noodleCurrentStockPrice);
        // noodle END //

        // megahard //
        megahardIncrement = Math.round(100 * Math.random() * 400) / 100 - 185;
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
        $('#megahardStockSellPrice').html('$' + (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("megahardCurrentStockPrice", megahardCurrentStockPrice);
        // megahard END //

        // chimerasec //
        chimerasecIncrement = Math.round(100 * Math.random() * 400) / 100 - 200;
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
        $('#chimerasecStockSellPrice').html('$' + (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("chimerasecCurrentStockPrice", chimerasecCurrentStockPrice);
        // chimerasec END //

        // chimerahold //
        chimeraholdIncrement = Math.round(100 * Math.random() * 400) / 100 - 200 + ownedChimerasecStocks * 10;
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
        $('#chimeraholdStockSellPrice').html('$' + (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("chimeraholdCurrentStockPrice", chimeraholdCurrentStockPrice);
        // chimerahold END //

        // griffonbank //
        griffonbankIncrement = Math.round(100 * Math.random() * 400) / 100 - 165;
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
        $('#griffonbankStockSellPrice').html('$' + (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("griffonbankCurrentStockPrice", griffonbankCurrentStockPrice);
        // griffonbank END //

        // turborus //
        turborusIncrement = Math.round(100 * Math.random() * 500) / 100 - 250 + ownedRustecStocks * 25;
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
        $('#turborusStockSellPrice').html('$' + (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("turborusCurrentStockPrice", turborusCurrentStockPrice);
        // turborus END //

        // exodmpt //
        exodmptIncrement = Math.round(100 * Math.random() * 500) / 100 - 250 + ownedExxocredStocks * 25;
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
        $('#exodmptStockSellPrice').html('$' + (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("exodmptCurrentStockPrice", exodmptCurrentStockPrice);
        // exodmpt END //

        // ramnet //
        ramnetIncrement = Math.round(100 * Math.random() * 300) / 100 - 100;
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
        $('#ramnetStockSellPrice').html('$' + (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("ramnetCurrentStockPrice", ramnetCurrentStockPrice);
        // ramnet END //

        // alphacen //
        alphacenIncrement = Math.round(100 * Math.random() * 400) / 100 - 150;
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
        $('#alphacenStockSellPrice').html('$' + (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("alphacenCurrentStockPrice", alphacenCurrentStockPrice);
        // alphacen END //

        // scatter //
        scatterIncrement = Math.round(100 * Math.random() * scatterCurrentStockPrice / 6727) / 100; //exponent
        if (scatterIncrement > 0) {
            $("#scatterChange").css("color", "#24b41e");
            $("#scatterChange").html("+" + scatterIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        scatterCurrentStockPrice += scatterIncrement;
        if (scatterCurrentStockPrice <= 0)
            scatterCurrentStockPrice = 0.01;
        $('#scatterStockDisplayCost').html('$' + scatterCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#scatterStockSellPrice').html('$' + (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("scatterCurrentStockPrice", scatterCurrentStockPrice);
        // scatter END //

        // kalzex //
        kalzexIncrement = Math.round(100 * Math.random() * 200 + ownedKalzexStocks * 10) / 100 - 100;
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
        $('#kalzexStockSellPrice').html('$' + (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("kalzexCurrentStockPrice", kalzexCurrentStockPrice);
        // kalzex END //

        // sonicos //       
        sonicosIncrement = Math.round(100 * Math.random() * 400) / 100 - 200 + goFast;
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
        $('#sonicosStockSellPrice').html('$' + (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("sonicosCurrentStockPrice", sonicosCurrentStockPrice);
        goFast += 10;
        // sonicos END //

        // trancext //
        trancextIncrement = Math.round(100 * Math.random() * 700) / 100 - 185;
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
        $('#trancextStockSellPrice').html('$' + (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("trancextCurrentStockPrice", trancextCurrentStockPrice);
        // trancext END //

        // stklr //
        stklrIncrement = Math.round(100 * Math.random() * 10) / 100 - 5; // heheh
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
        $('#stklrStockSellPrice').html('$' + (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("stklrCurrentStockPrice", stklrCurrentStockPrice);
        // stklr END //

        // vipersec //
        vipersecIncrement = Math.round(100 * Math.random() * 1000) / 100 - 500 + ownedCANVStocks + ownedOSMStocks + ownedPALLADStocks + ownedKELVStocks + ownedAUStocks * 5 + ownedDIAMStocks * 10 + ownedPLATStocks * 100;
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
        $('#vipersecStockSellPrice').html('$' + (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("vipersecCurrentStockPrice", vipersecCurrentStockPrice);
        // vipersec END //

        // PLAT //
        PLATIncrement = Math.round(100 * Math.random() * 1000) / 100 - 400;
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
        $('#PLATStockSellPrice').html('$' + (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("PLATCurrentStockPrice", PLATCurrentStockPrice);
        // PLAT END //

        // infone //
        if(ownedStklrStocks > 0 || ownedVipersecStocks > 0 || ownedPLATStocks > 0)
            infoneIncrement = Math.round(100 * Math.random() * infoneCurrentStockPrice / 1000) / 100;
        else
            infoneIncrement = Math.round(100 * Math.random() * 10) / 100 - 5;

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
        $('#infoneStockSellPrice').html('$' + (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("infoneCurrentStockPrice", infoneCurrentStockPrice);
        // infone END //

        // extank //
        extankIncrement = Math.round(100 * Math.random() * 1100) / 100 - 400;
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
        $('#extankStockSellPrice').html('$' + (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("extankCurrentStockPrice", extankCurrentStockPrice);
        // extank END //

        // reinacc //
        reinaccIncrement = Math.round(100 * Math.random() * money / reinaccCurrentStockPrice * ownedDelsecStocks * 10) / 100;
        if (reinaccIncrement > 0) {
            $("#reinaccChange").css("color", "#24b41e");
            $("#reinaccChange").html("+" + reinaccIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        reinaccCurrentStockPrice += reinaccIncrement;
        if (reinaccCurrentStockPrice <= 0)
            reinaccCurrentStockPrice = 0.01;
        $('#reinaccStockDisplayCost').html('$' + reinaccCurrentStockPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#reinaccStockSellPrice').html('$' + (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        localStorage.setItem("reinaccCurrentStockPrice", reinaccCurrentStockPrice);
        // reinacc END //
        timer = 30;
    }, 30000);   
});