$(window).load(function () {
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
        delsecIncrement = totalChunks / 5000 + Math.round(100 * Math.random() / 10) / 100;
        if (delsecIncrement > 0)
            $("#delsecChangeImg").attr("src", "Resources/Img/up.png");
        else if (delsecIncrement < 0)
            $("#delsecChangeImg").attr("src", "Resources/Img/down.png");

        delsecCurrentStockPrice += delsecIncrement;
        $('#delsecStockDisplayCost').html('$' + delsecCurrentStockPrice.toFixed(2));
        $('#delsecStockSellPrice').html('$' + (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider).toFixed(2));
        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - (delsecCurrentStockPrice / sellDivider))).toFixed(2));
        localStorage.setItem("delsecCurrentStockPrice", delsecCurrentStockPrice);
        // DELSEC END //

        // ENTAQ //
        entaqIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
        if (entaqIncrement > 0)
            $("#entaqChangeImg").attr("src", "Resources/Img/up.png");
        else if (entaqIncrement < 0)
            $("#entaqChangeImg").attr("src", "Resources/Img/down.png");

        entaqCurrentStockPrice += entaqIncrement;
        if (entaqCurrentStockPrice <= 0.1)
            entaqCurrentStockPrice = 0.1;
        $('#entaqStockDisplayCost').html('$' + entaqCurrentStockPrice.toFixed(2));
        $('#entaqStockSellPrice').html('$' + (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider).toFixed(2));
        $('#entaqSellEstimate').html('$' + (ownedEntaqStocks * (entaqCurrentStockPrice - entaqCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("entaqCurrentStockPrice", entaqCurrentStockPrice);
        // ENTAQ END //

        // VENTEX //
        ventexIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
        if (ventexIncrement > 0)
            $("#ventexChangeImg").attr("src", "Resources/Img/up.png");
        else if (ventexIncrement < 0)
            $("#ventexChangeImg").attr("src", "Resources/Img/down.png");

        ventexCurrentStockPrice += ventexIncrement;
        if (ventexCurrentStockPrice <= 0.1)
            ventexCurrentStockPrice = 0.1;
        $('#ventexStockDisplayCost').html('$' + ventexCurrentStockPrice.toFixed(2));
        $('#ventexStockSellPrice').html('$' + (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider).toFixed(2));
        $('#ventexSellEstimate').html('$' + (ownedVentexStocks * (ventexCurrentStockPrice - ventexCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("ventexCurrentStockPrice", ventexCurrentStockPrice);
        // VENTEX END //

        // ASTOR //
        astorIncrement = Math.round(100 * Math.random() * 0.2) / 100 - 0.1;
        if (astorIncrement > 0)
            $("#astorChangeImg").attr("src", "Resources/Img/up.png");
        else if (astorIncrement < 0)
            $("#astorChangeImg").attr("src", "Resources/Img/down.png");

        astorCurrentStockPrice += astorIncrement;
        if (astorCurrentStockPrice <= 0.1)
            astorCurrentStockPrice = 0.1;
        $('#astorStockDisplayCost').html('$' + astorCurrentStockPrice.toFixed(2));
        $('#astorStockSellPrice').html('$' + (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider).toFixed(2));
        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("astorCurrentStockPrice", astorCurrentStockPrice);
        // ASTOR END //

        // POPBOT //
        // 1 in a million chance of going up. (on getting a 555,555)
        popbotIncrement = Math.round(1000000 * Math.random());
        if (popbotIncrement == 555555) {
            popbotCurrentStockPrice += popbotIncrement;
            $("#popbotChangeImg").attr("src", "Resources/Img/up.png");
        }      
        $('#popbotStockDisplayCost').html('$' + popbotCurrentStockPrice.toFixed(2));
        $('#popbotStockSellPrice').html('$' + (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider).toFixed(2));
        $('#popbotSellEstimate').html('$' + (ownedPopbotStocks * (popbotCurrentStockPrice - popbotCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("popbotCurrentStockPrice", popbotCurrentStockPrice);
        // POPBOT END //

        // pannam //
        pannamIncrement = Math.round(100 * Math.random() / 2) / 100 - 0.20; // average growth 0.05
        if (pannamIncrement > 0)
            $("#pannamChangeImg").attr("src", "Resources/Img/up.png");
        else if (pannamIncrement < 0)
            $("#pannamChangeImg").attr("src", "Resources/Img/down.png");

        pannamCurrentStockPrice += pannamIncrement;
        if (pannamCurrentStockPrice <= 0.1)
            pannamCurrentStockPrice = 0.1;
        $('#pannamStockDisplayCost').html('$' + pannamCurrentStockPrice.toFixed(2));
        $('#pannamStockSellPrice').html('$' + (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider).toFixed(2));
        $('#pannamSellEstimate').html('$' + (ownedPannamStocks * (pannamCurrentStockPrice - pannamCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("pannamCurrentStockPrice", pannamCurrentStockPrice);
        // pannam END //

        // TRIT //
        TRITIncrement = Math.round(100 * Math.random()) / 100 - 0.5; // bigger than average jumps
        if (TRITIncrement > 0)
            $("#TRITChangeImg").attr("src", "Resources/Img/up.png");
        else if (TRITIncrement < 0)
            $("#TRITChangeImg").attr("src", "Resources/Img/down.png");

        TRITCurrentStockPrice += TRITIncrement;
        if (TRITCurrentStockPrice <= 0.2)
            TRITCurrentStockPrice = 0.2;
        $('#TRITStockDisplayCost').html('$' + TRITCurrentStockPrice.toFixed(2));
        $('#TRITStockSellPrice').html('$' + (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider).toFixed(2));
        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("TRITCurrentStockPrice", TRITCurrentStockPrice);
        // TRIT END //

        // CANV //
        CANVIncrement = Math.round(100 * Math.random() * 0.3) / 100 - 0.1; // steady increment average 2/3 of the time
        if (CANVIncrement > 0)
            $("#CANVChangeImg").attr("src", "Resources/Img/up.png");
        else if (CANVIncrement < 0)
            $("#CANVChangeImg").attr("src", "Resources/Img/down.png");

        CANVCurrentStockPrice += CANVIncrement;
        if (CANVCurrentStockPrice <= 0)
            CANVCurrentStockPrice = 0.01;
        $('#CANVStockDisplayCost').html('$' + CANVCurrentStockPrice.toFixed(2));
        $('#CANVStockSellPrice').html('$' + (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider).toFixed(2));
        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("CANVCurrentStockPrice", CANVCurrentStockPrice);
        // CANV END //

        // OSM //
        OSMIncrement = Math.round(100 * Math.random() * 2) / 100 - 1;
        if (OSMIncrement > 0)
            $("#OSMChangeImg").attr("src", "Resources/Img/up.png");
        else if (OSMIncrement < 0)
            $("#OSMChangeImg").attr("src", "Resources/Img/down.png");

        OSMCurrentStockPrice += OSMIncrement;
        if (OSMCurrentStockPrice <= 0)
            OSMCurrentStockPrice = 0.01;
        $('#OSMStockDisplayCost').html('$' + OSMCurrentStockPrice.toFixed(2));
        $('#OSMStockSellPrice').html('$' + (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider).toFixed(2));
        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2));
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

        if (PALLADIncrement > 0)
            $("#PALLADChangeImg").attr("src", "Resources/Img/up.png");
        else if (PALLADIncrement < 0)
            $("#PALLADChangeImg").attr("src", "Resources/Img/down.png");

        PALLADCurrentStockPrice += PALLADIncrement;
        if (PALLADCurrentStockPrice <= 0)
            PALLADCurrentStockPrice = 0.01;
        $('#PALLADStockDisplayCost').html('$' + PALLADCurrentStockPrice.toFixed(2));
        $('#PALLADStockSellPrice').html('$' + (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider).toFixed(2));
        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("PALLADCurrentStockPrice", PALLADCurrentStockPrice);
        // PALLAD END //

        // KELV //
        KELVIncrement = Math.round(100 * Math.random() * 2) / 100 - 0.9; // small increment average.
        if (KELVIncrement > 0)
            $("#KELVChangeImg").attr("src", "Resources/Img/up.png");
        else if (KELVIncrement < 0)
            $("#KELVChangeImg").attr("src", "Resources/Img/down.png");

        KELVCurrentStockPrice += KELVIncrement;
        if (KELVCurrentStockPrice <= 0)
            KELVCurrentStockPrice = 0.01;
        $('#KELVStockDisplayCost').html('$' + KELVCurrentStockPrice.toFixed(2));
        $('#KELVStockSellPrice').html('$' + (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider).toFixed(2));
        $('#KELVSellEstimate').html('$' + (ownedKELVStocks * (KELVCurrentStockPrice - KELVCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("KELVCurrentStockPrice", KELVCurrentStockPrice);
        // KELV END //

        // stuccor //
        stuccorIncrement = Math.round(100 * Math.random() * 10) / 100 - 5;
        if (stuccorIncrement > 0)
            $("#stuccorChangeImg").attr("src", "Resources/Img/up.png");
        else if (stuccorIncrement < 0)
            $("#stuccorChangeImg").attr("src", "Resources/Img/down.png");

        stuccorCurrentStockPrice += stuccorIncrement;
        if (stuccorCurrentStockPrice <= 0)
            stuccorCurrentStockPrice = 0.01;
        $('#stuccorStockDisplayCost').html('$' + stuccorCurrentStockPrice.toFixed(2));
        $('#stuccorStockSellPrice').html('$' + (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider).toFixed(2));
        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("stuccorCurrentStockPrice", stuccorCurrentStockPrice);
        // stuccor END //

        // delcred //
        delcredIncrement = Math.round(100 * Math.random() * 8) / 100 - 3.2;
        if (delcredIncrement > 0)
            $("#delcredChangeImg").attr("src", "Resources/Img/up.png");
        else if (delcredIncrement < 0)
            $("#delcredChangeImg").attr("src", "Resources/Img/down.png");

        delcredCurrentStockPrice += delcredIncrement;
        if (delcredCurrentStockPrice <= 0)
            delcredCurrentStockPrice = 0.01;
        $('#delcredStockDisplayCost').html('$' + delcredCurrentStockPrice.toFixed(2));
        $('#delcredStockSellPrice').html('$' + (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider).toFixed(2));
        $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("delcredCurrentStockPrice", delcredCurrentStockPrice);
        // delcred END //

        // rustec //
        rustecIncrement = Math.round(100 * Math.random() * 4 + russianSixBitBank / 5) / 100 - 2;
        if (rustecIncrement > 0)
            $("#rustecChangeImg").attr("src", "Resources/Img/up.png");
        else if (rustecIncrement < 0)
            $("#rustecChangeImg").attr("src", "Resources/Img/down.png");

        rustecCurrentStockPrice += rustecIncrement;
        if (rustecCurrentStockPrice <= 0)
            rustecCurrentStockPrice = 0.01;
        $('#rustecStockDisplayCost').html('$' + rustecCurrentStockPrice.toFixed(2));
        $('#rustecStockSellPrice').html('$' + (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider).toFixed(2));
        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("rustecCurrentStockPrice", rustecCurrentStockPrice);
        // rustec END //

        // exxocred //
        exxocredIncrement = Math.round(100 * Math.random() * 2) / 100 - 1; // small adjustments
        if (exxocredIncrement > 0)
            $("#exxocredChangeImg").attr("src", "Resources/Img/up.png");
        else if (exxocredIncrement < 0)
            $("#exxocredChangeImg").attr("src", "Resources/Img/down.png");

        exxocredCurrentStockPrice += exxocredIncrement;
        if (exxocredCurrentStockPrice <= 0)
            exxocredCurrentStockPrice = 0.01;
        $('#exxocredStockDisplayCost').html('$' + exxocredCurrentStockPrice.toFixed(2));
        $('#exxocredStockSellPrice').html('$' + (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider).toFixed(2));
        $('#exxocredSellEstimate').html('$' + (ownedExxocredStocks * (exxocredCurrentStockPrice - exxocredCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("exxocredCurrentStockPrice", exxocredCurrentStockPrice);
        // exxocred END //

        // AU //
        AUIncrement = Math.round(100 * Math.random() * 20) / 100 - 9;
        if (AUIncrement > 0)
            $("#AUChangeImg").attr("src", "Resources/Img/up.png");
        else if (AUIncrement < 0)
            $("#AUChangeImg").attr("src", "Resources/Img/down.png");

        AUCurrentStockPrice += AUIncrement;
        if (AUCurrentStockPrice <= 0)
            AUCurrentStockPrice = 0.01;
        $('#AUStockDisplayCost').html('$' + AUCurrentStockPrice.toFixed(2));
        $('#AUStockSellPrice').html('$' + (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider).toFixed(2));
        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("AUCurrentStockPrice", AUCurrentStockPrice);
        // AU END //

        // acehold //
        aceholdIncrement = Math.round(100 * Math.random() * 20) / 100 - 7.8;
        if (aceholdIncrement > 0)
            $("#aceholdChangeImg").attr("src", "Resources/Img/up.png");
        else if (aceholdIncrement < 0)
            $("#aceholdChangeImg").attr("src", "Resources/Img/down.png");

        aceholdCurrentStockPrice += aceholdIncrement;
        if (aceholdCurrentStockPrice <= 0)
            aceholdCurrentStockPrice = 0.01;
        $('#aceholdStockDisplayCost').html('$' + aceholdCurrentStockPrice.toFixed(2));
        $('#aceholdStockSellPrice').html('$' + (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider).toFixed(2));
        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("aceholdCurrentStockPrice", aceholdCurrentStockPrice);
        // acehold END //

        // delhold //
        delholdIncrement = Math.round(100 * (Math.random() * 50) + ownedDelsecStocks / 100 + ownedDelcredStocks / 10) / 100 - 25;
        if (delholdIncrement > 0)
            $("#delholdChangeImg").attr("src", "Resources/Img/up.png");
        else if (delholdIncrement < 0)
            $("#delholdChangeImg").attr("src", "Resources/Img/down.png");

        delholdCurrentStockPrice += delholdIncrement;
        if (delholdCurrentStockPrice <= 0)
            delholdCurrentStockPrice = 0.01;
        $('#delholdStockDisplayCost').html('$' + delholdCurrentStockPrice.toFixed(2));
        $('#delholdStockSellPrice').html('$' + (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider).toFixed(2));
        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("delholdCurrentStockPrice", delholdCurrentStockPrice);
        // delhold END //

        // DIAM //
        DIAMIncrement = Math.round(100 * Math.random() * 50) / 100 - 24;
        if (DIAMIncrement > 0)
            $("#DIAMChangeImg").attr("src", "Resources/Img/up.png");
        else if (DIAMIncrement < 0)
            $("#DIAMChangeImg").attr("src", "Resources/Img/down.png");

        DIAMCurrentStockPrice += DIAMIncrement;
        if (DIAMCurrentStockPrice <= 0)
            DIAMCurrentStockPrice = 0.01;
        $('#DIAMStockDisplayCost').html('$' + DIAMCurrentStockPrice.toFixed(2));
        $('#DIAMStockSellPrice').html('$' + (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider).toFixed(2));
        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("DIAMCurrentStockPrice", DIAMCurrentStockPrice);
        // DIAM END //

        // pentacc //
        pentaccIncrement = Math.round(100 * Math.random() * 150) / 100 - 75;
        if (pentaccIncrement > 0)
            $("#pentaccChangeImg").attr("src", "Resources/Img/up.png");
        else if (pentaccIncrement < 0)
            $("#pentaccChangeImg").attr("src", "Resources/Img/down.png");

        pentaccCurrentStockPrice += pentaccIncrement;
        if (pentaccCurrentStockPrice <= 0)
            pentaccCurrentStockPrice = 0.01;
        $('#pentaccStockDisplayCost').html('$' + pentaccCurrentStockPrice.toFixed(2));
        $('#pentaccStockSellPrice').html('$' + (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider).toFixed(2));
        $('#pentaccSellEstimate').html('$' + (ownedPentaccStocks * (pentaccCurrentStockPrice - pentaccCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("pentaccCurrentStockPrice", pentaccCurrentStockPrice);
        // pentacc END //

        // noodle //
        noodleIncrement = Math.round(100 * Math.random() * 200) / 100 - 75;
        if (noodleIncrement > 0)
            $("#noodleChangeImg").attr("src", "Resources/Img/up.png");
        else if (noodleIncrement < 0)
            $("#noodleChangeImg").attr("src", "Resources/Img/down.png");

        noodleCurrentStockPrice += noodleIncrement;
        if (noodleCurrentStockPrice <= 0)
            noodleCurrentStockPrice = 0.01;
        $('#noodleStockDisplayCost').html('$' + noodleCurrentStockPrice.toFixed(2));
        $('#noodleStockSellPrice').html('$' + (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider).toFixed(2));
        $('#noodleSellEstimate').html('$' + (ownedNoodleStocks * (noodleCurrentStockPrice - noodleCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("noodleCurrentStockPrice", noodleCurrentStockPrice);
        // noodle END //

        // megahard //
        megahardIncrement = Math.round(100 * Math.random() * 400) / 100 - 185;
        if (megahardIncrement > 0)
            $("#megahardChangeImg").attr("src", "Resources/Img/up.png");
        else if (megahardIncrement < 0)
            $("#megahardChangeImg").attr("src", "Resources/Img/down.png");

        megahardCurrentStockPrice += megahardIncrement;
        if (megahardCurrentStockPrice <= 0)
            megahardCurrentStockPrice = 0.01;
        $('#megahardStockDisplayCost').html('$' + megahardCurrentStockPrice.toFixed(2));
        $('#megahardStockSellPrice').html('$' + (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider).toFixed(2));
        $('#megahardSellEstimate').html('$' + (ownedMegahardStocks * (megahardCurrentStockPrice - megahardCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("megahardCurrentStockPrice", megahardCurrentStockPrice);
        // megahard END //

        // chimerasec //
        chimerasecIncrement = Math.round(100 * Math.random() * 400) / 100 - 200;
        if (chimerasecIncrement > 0)
            $("#chimerasecChangeImg").attr("src", "Resources/Img/up.png");
        else if (chimerasecIncrement < 0)
            $("#chimerasecChangeImg").attr("src", "Resources/Img/down.png");

        chimerasecCurrentStockPrice += chimerasecIncrement;
        if (chimerasecCurrentStockPrice <= 0)
            chimerasecCurrentStockPrice = 0.01;
        $('#chimerasecStockDisplayCost').html('$' + chimerasecCurrentStockPrice.toFixed(2));
        $('#chimerasecStockSellPrice').html('$' + (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider).toFixed(2));
        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("chimerasecCurrentStockPrice", chimerasecCurrentStockPrice);
        // chimerasec END //

        // chimerahold //
        chimeraholdIncrement = Math.round(100 * Math.random() * 400) / 100 - 200 + ownedChimerasecStocks * 10;
        if (chimeraholdIncrement > 0)
            $("#chimeraholdChangeImg").attr("src", "Resources/Img/up.png");
        else if (chimeraholdIncrement < 0)
            $("#chimeraholdChangeImg").attr("src", "Resources/Img/down.png");

        chimeraholdCurrentStockPrice += chimeraholdIncrement;
        if (chimeraholdCurrentStockPrice <= 0)
            chimeraholdCurrentStockPrice = 0.01;
        $('#chimeraholdStockDisplayCost').html('$' + chimeraholdCurrentStockPrice.toFixed(2));
        $('#chimeraholdStockSellPrice').html('$' + (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider).toFixed(2));
        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("chimeraholdCurrentStockPrice", chimeraholdCurrentStockPrice);
        // chimerahold END //

        // griffonbank //
        griffonbankIncrement = Math.round(100 * Math.random() * 400) / 100 - 165;
        if (griffonbankIncrement > 0)
            $("#griffonbankChangeImg").attr("src", "Resources/Img/up.png");
        else if (griffonbankIncrement < 0)
            $("#griffonbankChangeImg").attr("src", "Resources/Img/down.png");

        griffonbankCurrentStockPrice += griffonbankIncrement;
        if (griffonbankCurrentStockPrice <= 0)
            griffonbankCurrentStockPrice = 0.01;
        $('#griffonbankStockDisplayCost').html('$' + griffonbankCurrentStockPrice.toFixed(2));
        $('#griffonbankStockSellPrice').html('$' + (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider).toFixed(2));
        $('#griffonbankSellEstimate').html('$' + (ownedGriffonbankStocks * (griffonbankCurrentStockPrice - griffonbankCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("griffonbankCurrentStockPrice", griffonbankCurrentStockPrice);
        // griffonbank END //

        // turborus //
        turborusIncrement = Math.round(100 * Math.random() * 500) / 100 - 250 + ownedRustecStocks * 25;
        if (turborusIncrement > 0)
            $("#turborusChangeImg").attr("src", "Resources/Img/up.png");
        else if (turborusIncrement < 0)
            $("#turborusChangeImg").attr("src", "Resources/Img/down.png");

        turborusCurrentStockPrice += turborusIncrement;
        if (turborusCurrentStockPrice <= 0)
            turborusCurrentStockPrice = 0.01;
        $('#turborusStockDisplayCost').html('$' + turborusCurrentStockPrice.toFixed(2));
        $('#turborusStockSellPrice').html('$' + (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider).toFixed(2));
        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("turborusCurrentStockPrice", turborusCurrentStockPrice);
        // turborus END //

        // exodmpt //
        exodmptIncrement = Math.round(100 * Math.random() * 500) / 100 - 250 + ownedExxocredStocks * 25;
        if (exodmptIncrement > 0)
            $("#exodmptChangeImg").attr("src", "Resources/Img/up.png");
        else if (exodmptIncrement < 0)
            $("#exodmptChangeImg").attr("src", "Resources/Img/down.png");

        exodmptCurrentStockPrice += exodmptIncrement;
        if (exodmptCurrentStockPrice <= 0)
            exodmptCurrentStockPrice = 0.01;
        $('#exodmptStockDisplayCost').html('$' + exodmptCurrentStockPrice.toFixed(2));
        $('#exodmptStockSellPrice').html('$' + (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider).toFixed(2));
        $('#exodmptSellEstimate').html('$' + (ownedExodmptStocks * (exodmptCurrentStockPrice - exodmptCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("exodmptCurrentStockPrice", exodmptCurrentStockPrice);
        // exodmpt END //

        // ramnet //
        ramnetIncrement = Math.round(100 * Math.random() * 300) / 100 - 100;
        if (ramnetIncrement > 0)
            $("#ramnetChangeImg").attr("src", "Resources/Img/up.png");
        else if (ramnetIncrement < 0)
            $("#ramnetChangeImg").attr("src", "Resources/Img/down.png");

        ramnetCurrentStockPrice += ramnetIncrement;
        if (ramnetCurrentStockPrice <= 0)
            ramnetCurrentStockPrice = 0.01;
        $('#ramnetStockDisplayCost').html('$' + ramnetCurrentStockPrice.toFixed(2));
        $('#ramnetStockSellPrice').html('$' + (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider).toFixed(2));
        $('#ramnetSellEstimate').html('$' + (ownedRamnetStocks * (ramnetCurrentStockPrice - ramnetCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("ramnetCurrentStockPrice", ramnetCurrentStockPrice);
        // ramnet END //

        // alphacen //
        alphacenIncrement = Math.round(100 * Math.random() * 400) / 100 - 150;
        if (alphacenIncrement > 0)
            $("#alphacenChangeImg").attr("src", "Resources/Img/up.png");
        else if (alphacenIncrement < 0)
            $("#alphacenChangeImg").attr("src", "Resources/Img/down.png");

        alphacenCurrentStockPrice += alphacenIncrement;
        if (alphacenCurrentStockPrice <= 0)
            alphacenCurrentStockPrice = 0.01;
        $('#alphacenStockDisplayCost').html('$' + alphacenCurrentStockPrice.toFixed(2));
        $('#alphacenStockSellPrice').html('$' + (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider).toFixed(2));
        $('#alphacenSellEstimate').html('$' + (ownedAlphacenStocks * (alphacenCurrentStockPrice - alphacenCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("alphacenCurrentStockPrice", alphacenCurrentStockPrice);
        // alphacen END //

        // scatter //
        scatterIncrement = Math.round(100 * Math.random() * scatterCurrentStockPrice / 6727) / 100; //exponent
        if (scatterIncrement > 0)
            $("#scatterChangeImg").attr("src", "Resources/Img/up.png");

        scatterCurrentStockPrice += scatterIncrement;
        if (scatterCurrentStockPrice <= 0)
            scatterCurrentStockPrice = 0.01;
        $('#scatterStockDisplayCost').html('$' + scatterCurrentStockPrice.toFixed(2));
        $('#scatterStockSellPrice').html('$' + (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider).toFixed(2));
        $('#scatterSellEstimate').html('$' + (ownedScatterStocks * (scatterCurrentStockPrice - scatterCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("scatterCurrentStockPrice", scatterCurrentStockPrice);
        // scatter END //

        // kalzex //
        kalzexIncrement = Math.round(100 * Math.random() * 200 + ownedKalzexStocks * 10) / 100 - 100;
        if (kalzexIncrement > 0)
            $("#kalzexChangeImg").attr("src", "Resources/Img/up.png");
        else if (kalzexIncrement < 0)
            $("#kalzexChangeImg").attr("src", "Resources/Img/down.png");

        kalzexCurrentStockPrice += kalzexIncrement;
        if (kalzexCurrentStockPrice <= 0)
            kalzexCurrentStockPrice = 0.01;
        $('#kalzexStockDisplayCost').html('$' + kalzexCurrentStockPrice.toFixed(2));
        $('#kalzexStockSellPrice').html('$' + (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider).toFixed(2));
        $('#kalzexSellEstimate').html('$' + (ownedKalzexStocks * (kalzexCurrentStockPrice - kalzexCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("kalzexCurrentStockPrice", kalzexCurrentStockPrice);
        // kalzex END //

        // sonicos //       
        sonicosIncrement = Math.round(100 * Math.random() * 400) / 100 - 200 + goFast;
        if (sonicosIncrement > 0)
            $("#sonicosChangeImg").attr("src", "Resources/Img/up.png");
        else if (sonicosIncrement < 0)
            $("#sonicosChangeImg").attr("src", "Resources/Img/down.png");

        sonicosCurrentStockPrice += sonicosIncrement;
        if (sonicosCurrentStockPrice <= 0)
            sonicosCurrentStockPrice = 0.01;
        $('#sonicosStockDisplayCost').html('$' + sonicosCurrentStockPrice.toFixed(2));
        $('#sonicosStockSellPrice').html('$' + (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider).toFixed(2));
        $('#sonicosSellEstimate').html('$' + (ownedSonicosStocks * (sonicosCurrentStockPrice - sonicosCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("sonicosCurrentStockPrice", sonicosCurrentStockPrice);
        goFast += 10;
        // sonicos END //

        // trancext //
        trancextIncrement = Math.round(100 * Math.random() * 700) / 100 - 185;
        if (trancextIncrement > 0)
            $("#trancextChangeImg").attr("src", "Resources/Img/up.png");
        else if (trancextIncrement < 0)
            $("#trancextChangeImg").attr("src", "Resources/Img/down.png");

        trancextCurrentStockPrice += trancextIncrement;
        if (trancextCurrentStockPrice <= 0)
            trancextCurrentStockPrice = 0.01;
        $('#trancextStockDisplayCost').html('$' + trancextCurrentStockPrice.toFixed(2));
        $('#trancextStockSellPrice').html('$' + (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider).toFixed(2));
        $('#trancextSellEstimate').html('$' + (ownedTrancextStocks * (trancextCurrentStockPrice - trancextCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("trancextCurrentStockPrice", trancextCurrentStockPrice);
        // trancext END //

        // stklr //
        stklrIncrement = Math.round(100 * Math.random() * 10) / 100 - 5; // heheh
        if (stklrIncrement > 0)
            $("#stklrChangeImg").attr("src", "Resources/Img/up.png");
        else if (stklrIncrement < 0)
            $("#stklrChangeImg").attr("src", "Resources/Img/down.png");

        stklrCurrentStockPrice += stklrIncrement;
        if (stklrCurrentStockPrice <= 0)
            stklrCurrentStockPrice = 0.01;
        $('#stklrStockDisplayCost').html('$' + stklrCurrentStockPrice.toFixed(2));
        $('#stklrStockSellPrice').html('$' + (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider).toFixed(2));
        $('#stklrSellEstimate').html('$' + (ownedStklrStocks * (stklrCurrentStockPrice - stklrCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("stklrCurrentStockPrice", stklrCurrentStockPrice);
        // stklr END //

        // vipersec //
        vipersecIncrement = Math.round(100 * Math.random() * 1000) / 100 - 500 + ownedCANVStocks + ownedOSMStocks + ownedPALLADStocks + ownedKELVStocks + ownedAUStocks * 5 + ownedDIAMStocks * 10 + ownedPLATStocks * 100;
        if (vipersecIncrement > 0)
            $("#vipersecChangeImg").attr("src", "Resources/Img/up.png");
        else if (vipersecIncrement < 0)
            $("#vipersecChangeImg").attr("src", "Resources/Img/down.png");

        vipersecCurrentStockPrice += vipersecIncrement;
        if (vipersecCurrentStockPrice <= 0)
            vipersecCurrentStockPrice = 0.01;
        $('#vipersecStockDisplayCost').html('$' + vipersecCurrentStockPrice.toFixed(2));
        $('#vipersecStockSellPrice').html('$' + (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider).toFixed(2));
        $('#vipersecSellEstimate').html('$' + (ownedVipersecStocks * (vipersecCurrentStockPrice - vipersecCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("vipersecCurrentStockPrice", vipersecCurrentStockPrice);
        // vipersec END //

        // PLAT //
        PLATIncrement = Math.round(100 * Math.random() * 1000) / 100 - 400;
        if (PLATIncrement > 0)
            $("#PLATChangeImg").attr("src", "Resources/Img/up.png");
        else if (PLATIncrement < 0)
            $("#PLATChangeImg").attr("src", "Resources/Img/down.png");

        PLATCurrentStockPrice += PLATIncrement;
        if (PLATCurrentStockPrice <= 0)
            PLATCurrentStockPrice = 0.01;
        $('#PLATStockDisplayCost').html('$' + PLATCurrentStockPrice.toFixed(2));
        $('#PLATStockSellPrice').html('$' + (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider).toFixed(2));
        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("PLATCurrentStockPrice", PLATCurrentStockPrice);
        // PLAT END //

        // infone //
        if(ownedStklrStocks > 0 || ownedVipersecStocks > 0 || ownedPLATStocks > 0)
            infoneIncrement = Math.round(100 * Math.random() * infoneCurrentStockPrice / 1000) / 100;
        else
            infoneIncrement = Math.round(100 * Math.random() * 10) / 100 - 5;

        if (infoneIncrement > 0)
            $("#infoneChangeImg").attr("src", "Resources/Img/up.png");
        else if (infoneIncrement < 0)
            $("#infoneChangeImg").attr("src", "Resources/Img/down.png");

        infoneCurrentStockPrice += infoneIncrement;
        if (infoneCurrentStockPrice <= 0)
            infoneCurrentStockPrice = 0.01;
        $('#infoneStockDisplayCost').html('$' + infoneCurrentStockPrice.toFixed(2));
        $('#infoneStockSellPrice').html('$' + (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider).toFixed(2));
        $('#infoneSellEstimate').html('$' + (ownedInfoneStocks * (infoneCurrentStockPrice - infoneCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("infoneCurrentStockPrice", infoneCurrentStockPrice);
        // infone END //

        // extank //
        extankIncrement = Math.round(100 * Math.random() * 1100) / 100 - 400;
        if (extankIncrement > 0)
            $("#extankChangeImg").attr("src", "Resources/Img/up.png");
        else if (extankIncrement < 0)
            $("#extankChangeImg").attr("src", "Resources/Img/down.png");

        extankCurrentStockPrice += extankIncrement;
        if (extankCurrentStockPrice <= 0)
            extankCurrentStockPrice = 0.01;
        $('#extankStockDisplayCost').html('$' + extankCurrentStockPrice.toFixed(2));
        $('#extankStockSellPrice').html('$' + (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider).toFixed(2));
        $('#extankSellEstimate').html('$' + (ownedExtankStocks * (extankCurrentStockPrice - extankCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("extankCurrentStockPrice", extankCurrentStockPrice);
        // extank END //

        // reinacc //
        reinaccIncrement = Math.round(100 * Math.random() * money / reinaccCurrentStockPrice * ownedDelsecStocks * 10) / 100;
        if (reinaccIncrement > 0)
            $("#reinaccChangeImg").attr("src", "Resources/Img/up.png");

        reinaccCurrentStockPrice += reinaccIncrement;
        if (reinaccCurrentStockPrice <= 0)
            reinaccCurrentStockPrice = 0.01;
        $('#reinaccStockDisplayCost').html('$' + reinaccCurrentStockPrice.toFixed(2));
        $('#reinaccStockSellPrice').html('$' + (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider).toFixed(2));
        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2));
        localStorage.setItem("reinaccCurrentStockPrice", reinaccCurrentStockPrice);
        // reinacc END //
        timer = 30;
    }, 30000);   

})(jQuery);