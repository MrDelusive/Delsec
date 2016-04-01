$(document).ready(function () {

    $('#btnExpeditionInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#expeditionInvestments").show();
        return false;
    });

    //Mining
    $('#btnInvestMining').prop('disabled', false);
    $('#btnInvestMining').click(function () {
        if (money >= 2500) {
            miningActive = "true";
            localStorage.setItem("miningActive", miningActive);
            var timer = 60;
            $('#miningInvestResult').html("Investing: " + timer + " seconds remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#miningInvestResult').html("Investing: " + timer + " seconds remaining.");
                }
            }, 1000);
            var investAmt = 2500;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var TRITAMT = 0;
                var CANVAMT = 0;
                var PALLADAMT = 0;
                var OSMAMT = 0;
                var AUAMT = 0;

                switch (roll) {
                    case 1: //-75%
                        TRITAMT = 100;
                        if (expeditionGathererActive == 'true')
                            TRITAMT += Math.round(TRITAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TRITAMT += Math.round(TRITAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TRITAMT += Math.round(TRITAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TRITAMT += Math.round(TRITAMT * 0.5);
                        ownedTRITStocks += TRITAMT;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a cursed tomb, they get scared away. They only find a small amount of minerals. <b>RESULT: +" + TRITAMT + " TRIT.</b>");
                        break;
                    case 2: //investment - 50%   
                        TRITAMT = 100;
                        CANVAMT = 50;
                        if (expeditionGathererActive == 'true') {
                            TRITAMT += Math.round(TRITAMT * 0.1);
                            CANVAMT += Math.round(CANVAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            TRITAMT += Math.round(TRITAMT * 0.15);
                            CANVAMT += Math.round(CANVAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            TRITAMT += Math.round(TRITAMT * 0.25);
                            CANVAMT += Math.round(CANVAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            TRITAMT += Math.round(TRITAMT * 0.5);
                            CANVAMT += Math.round(CANVAMT * 0.5);
                        }
                        ownedTRITStocks += TRITAMT;
                        ownedCANVStocks += CANVAMT;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition returns nothing useful. Just a small amount of minerals. <b>RESULT: +" + TRITAMT + " TRIT +" + CANVAMT + " CANV</b>");
                        break;
                    case 3: //investment - 20%
                        PALLADAMT = 100;
                        if (expeditionGathererActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.5);
                        ownedPALLADStocks += PALLADAMT;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a few clumps of cheap materials. <b>RESULT: +" + PALLADAMT + " PALLAD</b>");
                        break;
                    case 4: //investment + 5%
                        PALLADAMT = 150;
                        TRITAMT = 100;
                        if (expeditionGathererActive == 'true') {
                            PALLADAMT += Math.round(PALLADAMT * 0.1);
                            TRITAMT += Math.round(TRITAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            PALLADAMT += Math.round(PALLADAMT * 0.15);
                            TRITAMT += Math.round(TRITAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            PALLADAMT += Math.round(PALLADAMT * 0.25);
                            TRITAMT += Math.round(TRITAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            PALLADAMT += Math.round(PALLADAMT * 0.5);
                            TRITAMT += Math.round(TRITAMT * 0.5);
                        }
                        ownedPALLADStocks += PALLADAMT;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedTRITStocks += TRITAMT;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small amount of cheap materials. <b>RESULT: +" + PALLADAMT + " PALLAD +" + TRITAMT + " TRIT</b>");
                        break;
                    case 5: //investment + 10%
                        OSMAMT = 300;
                        if (expeditionGathererActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.5);
                        ownedOSMStocks += OSMAMT;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small amount of ore. <b>RESULT: +" + OSMAMT + " OSM</b>");
                        break;
                    case 6: //investment + 20%
                        OSMAMT = 500;
                        if (expeditionGathererActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            OSMAMT += Math.round(OSMAMT * 0.5);
                        ownedOSMStocks += OSMAMT;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());                      
                        $('#miningInvestResult').html("The expedition finds an OK chunk of cheap materials. <b>RESULT: +" + OSMAMT + " OSM</b>");
                        break;
                    case 7: //investment + 30%
                        CANVAMT = 500;
                        if (expeditionGathererActive == 'true')
                            CANVAMT += Math.round(CANVAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CANVAMT += Math.round(CANVAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CANVAMT += Math.round(CANVAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CANVAMT += Math.round(CANVAMT * 0.5);
                        ownedCANVStocks += CANVAMT;
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small cluster worth a little bit. <b>RESULT: +" + CANVAMT + " CANV</b>");
                        break;
                    case 8: //investment + 50%
                        CANVAMT = 300;
                        OSMAMT = 50;
                        if (expeditionGathererActive == 'true') {
                            CANVAMT += Math.round(CANVAMT * 0.1);
                            OSMAMT += Math.round(OSMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            CANVAMT += Math.round(CANVAMT * 0.15);
                            OSMAMT += Math.round(OSMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            CANVAMT += Math.round(CANVAMT * 0.25);
                            OSMAMT += Math.round(OSMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            CANVAMT += Math.round(CANVAMT * 0.5);
                            OSMAMT += Math.round(OSMAMT * 0.5);
                        }
                        ownedCANVStocks += CANVAMT;
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedOSMStocks += OSMAMT;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a moderate amount of valuable ores. <b>RESULT: +" + CANVAMT + " CANV +" + OSMAMT + " OSM</b>");
                        break;
                    case 9: //investment + 60%
                        PALLADAMT = 220;
                        if (expeditionGathererActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PALLADAMT += Math.round(PALLADAMT * 0.5);
                        ownedPALLADStocks += PALLADAMT;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a large packet of valueable ore. <b>RESULT: +" + PALLADAMT + " PALLAD</b>");
                        break;
                    case 10: //investment + 75%
                        AUAMT = 10;
                        if (expeditionGathererActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.5);
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. They collect the valueable minerals there. <b>RESULT: +" + AUAMT + " AU</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        AUAMT = 15;
                        if (expeditionGathererActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.5);
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. Due to your special healer abilities they uncover the secret treasure room. <b>RESULT: +" + AUAMT + " AU</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                miningActive = "false";
                localStorage.setItem("miningActive", miningActive);
            }, timer * 1000);
        }
        else
            $('#miningInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Medium Mine
    $('#btnInvestMiningMedium').prop('disabled', false);
    $('#btnInvestMiningMedium').click(function () {
        if (money >= 50000) {
            miningMediumActive = "true";
            localStorage.setItem("miningMediumActive", miningMediumActive);
            var timer = 180;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#miningMediumInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#miningMediumInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 50000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var AUAMT = 0;
                var DIAMAMT = 0;
                var PLATAMT = 0;
                var FEAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        AUAMT = 40;
                        if (expeditionGathererActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.5);
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine was dry, except for scraping in some Gold. <b>RESULT: +" + AUAMT + " AU</b>");
                        break;
                    case 2: //investment - 50%                        
                        AUAMT = 40;
                        DIAMAMT = 10;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had only a small amount of resources. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 3: //investment - 20%
                        PLATAMT = 2;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a small pocket of Platinum. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 4: //investment + 5%
                        PLATAMT = 3;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a small pocket of Platinum. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 5: //investment + 10%
                        DIAMAMT = 36;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine went deep enough to collect some Diamonds. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 6: //investment + 20%
                        AUAMT = 80;
                        DIAMAMT = 26;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had some valueable materials. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 7: //investment + 30%
                        FEAMT = 1625;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 8: //investment + 50%
                        FEAMT = 1875;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 9: //investment + 60%
                        FEAMT = 2000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 10: //investment + 75%
                        DIAMAMT = 59;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a good collection of Diamonds. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        FEAMT = 2500;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningMediumInvestResult').html("The mine had a large chunk of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                miningMediumActive = "false";
                localStorage.setItem("miningMediumActive", miningMediumActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#miningMediumInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Online Data Mine
    $('#btnInvestOnlineDataMine').prop('disabled', false);
    $('#btnInvestOnlineDataMine').click(function () {
        if (money >= 100000) {
            onlineDataMineActive = "true";
            localStorage.setItem("onlineDataMineActive", onlineDataMineActive);
            var timer = 300;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#onlineDataMineInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#onlineDataMineInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 100000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var ASTORAMT = 0;
                var STUCCORAMT = 0;
                var ACEHOLDAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        ASTORAMT = 25000;
                        if (expeditionGathererActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.5);
                        ownedAstorStocks += ASTORAMT;
                        localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
                        $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
                        $('#astorOwnedStocks').html(ownedAstorStocks);
                        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects some Astor Stocks. <b>RESULT: +" + ASTORAMT + " Astor</b>");
                        break;
                    case 2: //investment - 50%              
                        STUCCORAMT = 850;
                        if (expeditionGathererActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.5);
                        ownedStuccorStocks += STUCCORAMT;
                        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
                        $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
                        $('#stuccorOwnedStocks').html(ownedStuccorStocks);
                        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects some Stuccor Stocks. <b>RESULT: +" + STUCCORAMT + " Stuccor</b>");
                        break;
                    case 3: //investment - 20%
                        ACEHOLDAMT = 250;
                        if (expeditionGathererActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.5);
                        ownedAceholdStocks += ACEHOLDAMT;
                        localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
                        $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
                        $('#aceholdOwnedStocks').html(ownedAceholdStocks);
                        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a small amount of Acehold Stocks. <b>RESULT: +" + ACEHOLDAMT + " Acehold</b>");
                        break;
                    case 4: //investment + 5%
                        ASTORAMT = 105000;
                        if (expeditionGathererActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.5);
                        ownedAstorStocks += ASTORAMT;
                        localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
                        $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
                        $('#astorOwnedStocks').html(ownedAstorStocks);
                        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a heap of Astor Stocks. <b>RESULT: +" + ASTORAMT + " Astor</b>");
                        break;
                    case 5: //investment + 10%      
                        ASTORAMT = 115000;
                        if (expeditionGathererActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ASTORAMT += Math.round(ASTORAMT * 0.5);
                        ownedAstorStocks += ASTORAMT;
                        localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
                        $('#astorOwnedStocksDisplay').html(ownedAstorStocks);
                        $('#astorOwnedStocks').html(ownedAstorStocks);
                        $('#astorSellEstimate').html('$' + (ownedAstorStocks * (astorCurrentStockPrice - astorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a heap of Astor Stocks. <b>RESULT: +" + ASTORAMT + " Astor</b>");
                        break;
                    case 6: //investment + 20%
                        STUCCORAMT = 2000;
                        if (expeditionGathererActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.5);
                        ownedStuccorStocks += STUCCORAMT;
                        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
                        $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
                        $('#stuccorOwnedStocks').html(ownedStuccorStocks);
                        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects some Stuccor Stocks. <b>RESULT: +" + STUCCORAMT + "Stuccor</b>");
                        break;
                    case 7: //investment + 30%
                        STUCCORAMT = 2500;
                        if (expeditionGathererActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.5);
                        ownedStuccorStocks += STUCCORAMT;
                        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
                        $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
                        $('#stuccorOwnedStocks').html(ownedStuccorStocks);
                        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects some Stuccor Stocks. <b>RESULT: +" + STUCCORAMT + " Stuccor</b>");
                        break;
                    case 8: //investment + 50%
                        ACEHOLDAMT = 500;
                        if (expeditionGathererActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.5);
                        ownedAceholdStocks += ACEHOLDAMT;
                        localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
                        $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
                        $('#aceholdOwnedStocks').html(ownedAceholdStocks);
                        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a moderate amount of Acehold Stocks. <b>RESULT: +" + ACEHOLDAMT + " Acehold</b>");
                        break;
                    case 9: //investment + 60%
                        ACEHOLDAMT = 600;
                        if (expeditionGathererActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            ACEHOLDAMT += Math.round(ACEHOLDAMT * 0.5);
                        ownedAceholdStocks += ACEHOLDAMT;
                        localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
                        $('#aceholdOwnedStocksDisplay').html(ownedAceholdStocks);
                        $('#aceholdOwnedStocks').html(ownedAceholdStocks);
                        $('#aceholdSellEstimate').html('$' + (ownedAceholdStocks * (aceholdCurrentStockPrice - aceholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a moderate amount of Acehold Stocks. <b>RESULT: +" + ACEHOLDAMT + " Acehold</b>");
                        break;
                    case 10: //investment + 75%
                        STUCCORAMT = 4000;
                        if (expeditionGathererActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.5);
                        ownedStuccorStocks += STUCCORAMT;
                        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
                        $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
                        $('#stuccorOwnedStocks').html(ownedStuccorStocks);
                        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a heap of Stuccor Stocks. <b>RESULT: +" + STUCCORAMT + " Stuccor</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        
                        STUCCORAMT = 5500;
                        if (expeditionGathererActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            STUCCORAMT += Math.round(STUCCORAMT * 0.5);
                        ownedStuccorStocks += STUCCORAMT;
                        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
                        $('#stuccorOwnedStocksDisplay').html(ownedStuccorStocks);
                        $('#stuccorOwnedStocks').html(ownedStuccorStocks);
                        $('#stuccorSellEstimate').html('$' + (ownedStuccorStocks * (stuccorCurrentStockPrice - stuccorCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#onlineDataMineInvestResult').html("The Data Mine collects a heap of Stuccor Stocks. <b>RESULT: +" + STUCCORAMT + " Stuccor</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                onlineDataMineActive = "false";
                localStorage.setItem("onlineDataMineActive", onlineDataMineActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#onlineDataMineInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Delsec Stock Extraction
    $('#btnInvestDelsecStockExtraction').prop('disabled', false);
    $('#btnInvestDelsecStockExtraction').click(function () {
        if (money >= 250000) {
            delsecStockExtractionActive = "true";
            localStorage.setItem("delsecStockExtractionActive", delsecStockExtractionActive);
            var timer = 360;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#delsecStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#delsecStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 250000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var DELSECAMT = 0;
                var DELHOLDAMT = 0;
                var DELCREDAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        DELSECAMT = 1;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers were well guarded this time round. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    case 2: //investment - 50%                        
                        DELSECAMT = 2;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers were well guarded this time round. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    case 3: //investment - 20%
                        DELHOLDAMT = 10;
                        if (expeditionGathererActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.5);
                        ownedDelholdStocks += DELHOLDAMT;
                        localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
                        $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
                        $('#delholdOwnedStocks').html(ownedDelholdStocks);
                        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("The Extraction targeted Delhold Systems which are more guarded. <b>RESULT: +" + DELHOLDAMT + " Delhold</b>");
                        break;
                    case 4: //investment + 5%
                        DELHOLDAMT = 15;
                        if (expeditionGathererActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.5);
                        ownedDelholdStocks += DELHOLDAMT;
                        localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
                        $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
                        $('#delholdOwnedStocks').html(ownedDelholdStocks);
                        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("The Extraction targeted Delhold Systems which are more guarded. <b>RESULT: +" + DELHOLDAMT + " Delhold</b>");
                        break;
                    case 5: //investment + 10%   
                        DELCREDAMT = 2500;
                        if (expeditionGathererActive == 'true')
                            DELCREDAMT += Math.round(DELCREDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELCREDAMT += Math.round(DELCREDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELCREDAMT += Math.round(DELCREDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELCREDAMT += Math.round(DELCREDAMT * 0.5);
                        ownedDelcredStocks += DELCREDAMT;
                        localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
                        $('#delcredOwnedStocksDisplay').html(ownedDelcredStocks);
                        $('#delcredOwnedStocks').html(ownedDelcredStocks);
                        $('#delcredSellEstimate').html('$' + (ownedDelcredStocks * (delcredCurrentStockPrice - delcredCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("The Extraction targeted Delcred Systems and gathered a chunk of Delcred stocks. <b>RESULT: +" + DELCREDAMT + " Delcred</b>");
                        break;
                    case 6: //investment + 20%
                        DELSECAMT = 2000;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers had a few vulnerabilities. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    case 7: //investment + 30%
                        DELSECAMT = 2500;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers had a few vulnerabilities. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    case 8: //investment + 50%
                        DELHOLDAMT = 1500;
                        if (expeditionGathererActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.5);
                        ownedDelholdStocks += DELHOLDAMT;
                        localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
                        $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
                        $('#delholdOwnedStocks').html(ownedDelholdStocks);
                        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("The Extraction targeted Delhold Systems and gathered a chunk of Delhold stocks. <b>RESULT: +" + DELHOLDAMT + " Delhold</b>");
                        break;
                    case 9: //investment + 60%
                        DELHOLDAMT = 2000;
                        if (expeditionGathererActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELHOLDAMT += Math.round(DELHOLDAMT * 0.5);
                        ownedDelholdStocks += DELHOLDAMT;
                        localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
                        $('#delholdOwnedStocksDisplay').html(ownedDelholdStocks);
                        $('#delholdOwnedStocks').html(ownedDelholdStocks);
                        $('#delholdSellEstimate').html('$' + (ownedDelholdStocks * (delholdCurrentStockPrice - delholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("The Extraction targeted Delhold Systems and gathered a chunk of Delhold stocks. <b>RESULT: +" + DELHOLDAMT + " Delhold</b>");
                        break;
                    case 10: //investment + 75%
                        DELSECAMT = 20000;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers were open to a full Extraction. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        DELSECAMT = 25000;
                        if (expeditionGathererActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DELSECAMT += Math.round(DELSECAMT * 0.5);
                        ownedDelsecStocks += DELSECAMT;
                        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
                        $('#delsecOwnedStocksDisplay').html(ownedDelsecStocks);
                        $('#delsecOwnedStocks').html(ownedDelsecStocks);
                        $('#delsecSellEstimate').html('$' + (ownedDelsecStocks * (delsecCurrentStockPrice - delsecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#delsecStockExtractionInvestResult').html("Delsec Data Servers were open to a full Extraction. <b>RESULT: +" + DELSECAMT + " Delsec</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                delsecStockExtractionActive = "false";
                localStorage.setItem("delsecStockExtractionActive", delsecStockExtractionActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#delsecStockExtractionInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Chimerasec Stock Extraction
    $('#btnInvestChimerasecStockExtraction').prop('disabled', false);
    $('#btnInvestChimerasecStockExtraction').click(function () {
        if (money >= 250000) {
            chimerasecStockExtractionActive = "true";
            localStorage.setItem("chimerasecStockExtractionActive", chimerasecStockExtractionActive);
            var timer = 360;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#chimerasecStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#chimerasecStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 250000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var CHIMERASECAMT = 0;
                var CHIMERAHOLDAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        CHIMERASECAMT = 10;
                        if (expeditionGathererActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerasec Data Servers were well guarded this time round. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec</b>");
                        break;
                    case 2: //investment - 50%      
                        CHIMERAHOLDAMT = 10;
                        if (expeditionGathererActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("The Extraction targeted Chimerahold Systems which are more guarded. <b>RESULT: +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    case 3: //investment - 20%
                        CHIMERASECAMT = 25;
                        if (expeditionGathererActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerasec Data Servers were somewhat guarded this time round. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec</b>");
                        break;
                    case 4: //investment + 5%
                        CHIMERAHOLDAMT = 25;
                        if (expeditionGathererActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("The Extraction targeted Chimerahold Systems which are more guarded. <b>RESULT: +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    case 5: //investment + 10%                        
                        CHIMERAHOLDAMT = 30;
                        if (expeditionGathererActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("The Extraction targeted Chimerahold Systems which are more guarded. <b>RESULT: +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    case 6: //investment + 20%
                        CHIMERASECAMT = 40;
                        if (expeditionGathererActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerasec Data Servers were open to a small Extraction. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec</b>");
                        break;
                    case 7: //investment + 30%
                        CHIMERAHOLDAMT = 40;
                        if (expeditionGathererActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerahold Data Servers were open to a small Extraction. <b>RESULT: +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    case 8: //investment + 50%
                        CHIMERASECAMT = 50;
                        if (expeditionGathererActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerasec Data Servers were open to a small Extraction. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec</b>");
                        break;
                    case 9: //investment + 60%
                        CHIMERASECAMT = 60;
                        if (expeditionGathererActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerasec Data Servers were open to a small Extraction. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec</b>");
                        break;
                    case 10: //investment + 75%
                        CHIMERAHOLDAMT = 60;
                        if (expeditionGathererActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Chimerahold Data Servers were open to a small Extraction. <b>RESULT: +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        CHIMERAHOLDAMT = 40;
                        CHIMERASECAMT = 60;
                        if (expeditionGathererActive == 'true') {
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.1);
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.15);
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.25);
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            CHIMERAHOLDAMT += Math.round(CHIMERAHOLDAMT * 0.5);
                            CHIMERASECAMT += Math.round(CHIMERASECAMT * 0.5);
                        }
                        ownedChimeraholdStocks += CHIMERAHOLDAMT;
                        ownedChimerasecStocks += CHIMERASECAMT;
                        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
                        $('#chimerasecOwnedStocksDisplay').html(ownedChimerasecStocks);
                        $('#chimerasecOwnedStocks').html(ownedChimerasecStocks);
                        $('#chimerasecSellEstimate').html('$' + (ownedChimerasecStocks * (chimerasecCurrentStockPrice - chimerasecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocksDisplay').html(ownedChimeraholdStocks);
                        $('#chimeraholdOwnedStocks').html(ownedChimeraholdStocks);
                        $('#chimeraholdSellEstimate').html('$' + (ownedChimeraholdStocks * (chimeraholdCurrentStockPrice - chimeraholdCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#chimerasecStockExtractionInvestResult').html("Both Chimera Systems were open to a small Extraction. <b>RESULT: +" + CHIMERASECAMT + " Chimerasec +" + CHIMERAHOLDAMT + " Chimerahold</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                chimerasecStockExtractionActive = "false";
                localStorage.setItem("chimerasecStockExtractionActive", chimerasecStockExtractionActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#chimerasecStockExtractionInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Russian Stock Extraction
    $('#btnInvestRussianStockExtraction').prop('disabled', false);
    $('#btnInvestRussianStockExtraction').click(function () {
        if (money >= 250000) {
            russianStockExtractionActive = "true";
            localStorage.setItem("russianStockExtractionActive", russianStockExtractionActive);
            var timer = 360;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#russianStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#russianStockExtractionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 250000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var RUSTECAMT = 0;
                var TURBORUSAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        RUSTECAMT = 500;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers are very hard to access. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    case 2: //investment - 50%    
                        TURBORUSAMT = 20;
                        if (expeditionGathererActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.5);;
                        ownedTurborusStocks += TURBORUSAMT;
                        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
                        $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
                        $('#turborusOwnedStocks').html(ownedTurborusStocks);
                        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Turbo Servers are highly secure. <b>RESULT: +" + TURBORUSAMT + " Turborus</b>");
                        break;
                    case 3: //investment - 20%
                        RUSTECAMT = 2000;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers are very hard to access. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    case 4: //investment + 5%
                        TURBORUSAMT = 55;
                        if (expeditionGathererActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.5);;
                        ownedTurborusStocks += TURBORUSAMT;
                        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
                        $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
                        $('#turborusOwnedStocks').html(ownedTurborusStocks);
                        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Turbo Servers were comprimised for a few minutes. <b>RESULT: +" + TURBORUSAMT + " Turborus</b>");
                        break;
                    case 5: //investment + 10%                        
                        RUSTECAMT = 2600;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers had a small security hole. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    case 6: //investment + 20%
                        RUSTECAMT = 2800;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers had a small security hole. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    case 7: //investment + 30%
                        RUSTECAMT = 3000;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers had a small security hole. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    case 8: //investment + 50%
                        TURBORUSAMT = 70;
                        if (expeditionGathererActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.5);
                        ownedTurborusStocks += TURBORUSAMT;
                        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
                        $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
                        $('#turborusOwnedStocks').html(ownedTurborusStocks);
                        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Turbo Servers were open to an Extraction. <b>RESULT: +" + TURBORUSAMT + " Turborus</b>");
                        break;
                    case 9: //investment + 60%
                        TURBORUSAMT = 75;
                        if (expeditionGathererActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.5);
                        ownedTurborusStocks += TURBORUSAMT;
                        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
                        $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
                        $('#turborusOwnedStocks').html(ownedTurborusStocks);
                        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Turbo Servers were open to an Extraction. <b>RESULT: +" + TURBORUSAMT + " Turborus</b>");
                        break;
                    case 10: //investment + 75%
                        TURBORUSAMT = 80;
                        if (expeditionGathererActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            TURBORUSAMT += Math.round(TURBORUSAMT * 0.5);
                        ownedTurborusStocks += TURBORUSAMT;
                        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
                        $('#turborusOwnedStocksDisplay').html(ownedTurborusStocks);
                        $('#turborusOwnedStocks').html(ownedTurborusStocks);
                        $('#turborusSellEstimate').html('$' + (ownedTurborusStocks * (turborusCurrentStockPrice - turborusCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Turbo Servers were open to an Extraction. <b>RESULT: +" + TURBORUSAMT + " Turborus</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        RUSTECAMT = 6000;
                        if (expeditionGathererActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            RUSTECAMT += Math.round(RUSTECAMT * 0.5);
                        ownedRustecStocks += RUSTECAMT;
                        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
                        $('#rustecOwnedStocksDisplay').html(ownedRustecStocks);
                        $('#rustecOwnedStocks').html(ownedRustecStocks);
                        $('#rustecSellEstimate').html('$' + (ownedRustecStocks * (rustecCurrentStockPrice - rustecCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#russianStockExtractionInvestResult').html("Rustec Servers were comprimised. <b>RESULT: +" + RUSTECAMT + " Rustec</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                russianStockExtractionActive = "false";
                localStorage.setItem("russianStockExtractionActive", russianStockExtractionActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#russianStockExtractionInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Large Mine
    $('#btnInvestMiningLarge').prop('disabled', false);
    $('#btnInvestMiningLarge').click(function () {
        if (money >= 1000000) {
            miningLargeActive = "true";
            localStorage.setItem("miningLargeActive", miningLargeActive);
            var timer = 480;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#miningLargeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#miningLargeInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 1000000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var AUAMT = 0;
                var PLATAMT = 0;
                var DIAMAMT = 0;
                var FEAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        AUAMT = 800;
                        if (expeditionGathererActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.5);
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine was dry, except for scraping in some Gold. <b>RESULT: +" + AUAMT + " AU</b>");
                        break;
                    case 2: //investment - 50%                        
                        AUAMT = 800;
                        DIAMAMT = 200;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had only a small amount of resources. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 3: //investment - 20%
                        PLATAMT = 40;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a small pocket of Platinum. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 4: //investment + 5%
                        PLATAMT = 60;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a small pocket of Platinum. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 5: //investment + 10%
                        DIAMAMT = 720;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine went deep enough to collect some Diamonds. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 6: //investment + 20%
                        AUAMT = 1600;
                        DIAMAMT = 520;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had some valueable materials. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 7: //investment + 30%
                        FEAMT = 40000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 8: //investment + 50%
                        FEAMT = 45000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 9: //investment + 60%
                        FEAMT = 50000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a decent amount of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 10: //investment + 75%
                        DIAMAMT = 1200;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a good collection of Diamonds. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        FEAMT = 60000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningLargeInvestResult').html("The mine had a large chunk of Iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                miningLargeActive = "false";
                localStorage.setItem("miningLargeActive", miningLargeActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#miningLargeInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Planetary Drill Operation
    $('#btnInvestDrill').prop('disabled', false);
    $('#btnInvestDrill').click(function () {
        if (money >= 5000000) {
            drillActive = "true";
            localStorage.setItem("drillActive", drillActive);
            var timer = 600;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#drillInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#drillInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 5000000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var AUAMT = 0;
                var DIAMAMT = 0;
                var PLATAMT = 0;
                var FEAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        AUAMT = 4000;
                        if (expeditionGathererActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            AUAMT += Math.round(AUAMT * 0.5);
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill burns out before it even breaks the crust. It collects a small amount of gold. <b>RESULT: +" + AUAMT + " AU</b>");
                        break;
                    case 2: //investment - 50%                        
                        AUAMT = 4000;
                        DIAMAMT = 1000;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill melts down in the mantle. Not before collecting a small amount of Gold and Diamonds. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 3: //investment - 20%
                        PLATAMT = 250;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill over-heats in the mantle having to come up early. Collecting a small chunk of resources. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 4: //investment + 5%
                        PLATAMT = 300;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, just barely scraping enough to pay for the operation. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 5: //investment + 10%
                        DIAMAMT = 3600;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, just barely scraping enough to pay for the operation. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 6: //investment + 20%
                        AUAMT = 8000;
                        DIAMAMT = 2600;
                        if (expeditionGathererActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.1);
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        }
                        if (expeditionCollectorActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.15);
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        }
                        if (expeditionHoarderActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.25);
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        }
                        if (expeditionAmassingActive == 'true') {
                            AUAMT += Math.round(AUAMT * 0.5);
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        }
                        ownedAUStocks += AUAMT;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, it finds enough to make a small profit. <b>RESULT: +" + AUAMT + " AU +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 7: //investment + 30%
                        FEAMT = 162500;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a decent amount of iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 8: //investment + 50%
                        FEAMT = 187500;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a high amount of iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 9: //investment + 60%
                        FEAMT = 200000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a very high amount of iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 10: //investment + 75%
                        DIAMAMT = 5850;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill uncovers a secret gas pocket where plenty of diamonds are found. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        FEAMT = 250000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill reaches the solid iron core collecting massive amounts of iron. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                drillActive = "false";
                localStorage.setItem("drillActive", drillActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#drillInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Asteroid Mining
    $('#btnInvestAsteroidMining').prop('disabled', false);
    $('#btnInvestAsteroidMining').click(function () {
        if (money >= 5000000000) {
            asteroidMiningActive = "true";
            localStorage.setItem("asteroidMiningActive", asteroidMiningActive);
            var timer = 900;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#asteroidMiningInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#asteroidMiningInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 5000000000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var FEAMT = 0;
                var PLATAMT = 0;
                var DIAMAMT = 0;

                switch (roll) {
                    case 1: //-75%   
                        FEAMT = 10000000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("Only Iron was found in the asteroid belt. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 2: //investment - 50%                        
                        FEAMT = 20000000;
                        if (expeditionGathererActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            FEAMT += Math.round(FEAMT * 0.5);
                        ownedFEStocks += FEAMT;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("Only Iron was found in the asteroid belt. <b>RESULT: +" + FEAMT + " FE</b>");
                        break;
                    case 3: //investment - 20%
                        PLATAMT = 200000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Small Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 4: //investment + 5%
                        PLATAMT = 400000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Small Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 5: //investment + 10%
                        DIAMAMT = 5000000;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Hidden Diamond Field was found floating in space. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 6: //investment + 20%
                        PLATAMT = 700000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Moderate Sized Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 7: //investment + 30%
                        PLATAMT = 800000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Moderate Sized Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 8: //investment + 50%
                        DIAMAMT = 8500000;
                        if (expeditionGathererActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            DIAMAMT += Math.round(DIAMAMT * 0.5);
                        ownedDIAMStocks += DIAMAMT;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Giant Diamond Planet was found that had recently been destroyed. <b>RESULT: +" + DIAMAMT + " DIAM</b>");
                        break;
                    case 9: //investment + 60%
                        PLATAMT = 1000000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Rich Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 10: //investment + 75%
                        PLATAMT = 1100000;
                        if (expeditionGathererActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            PLATAMT += Math.round(PLATAMT * 0.5);
                        ownedPLATStocks += PLATAMT;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#asteroidMiningInvestResult').html("A Rich Platinum Belt was mined. <b>RESULT: +" + PLATAMT + " PLAT</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        money += 15000000000;
                        $('#asteroidMiningInvestResult').html("A Giant Diamond Planet was found and sold whole. <b>RESULT: +$15,000,000,000</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                asteroidMiningActive = "false";
                localStorage.setItem("asteroidMiningActive", asteroidMiningActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#asteroidMiningInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Matter Conversion
    $('#btnInvestMatterConversion').prop('disabled', false);
    $('#btnInvestMatterConversion').click(function () {
        if (money >= 500000000000) {
            matterConversionActive = "true";
            localStorage.setItem("matterConversionActive", matterConversionActive);
            var timer = 1800;
            var minutes = Math.floor(timer / 60);
            var seconds = Math.floor(timer % 60);
            $('#matterConversionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
            setInterval(function () {
                if (timer > 1) {
                    timer--;
                    minutes = Math.floor(timer / 60);
                    seconds = Math.floor(timer % 60);
                    $('#matterConversionInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                }
            }, 1000);
            var investAmt = 500000000000;
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
                
                if (expeditionEnthusiastActive == 'true')
                    roll += 1;
                if (expeditionMasteryActive == 'true')
                    roll += 2;
                if (roll > 11)
                    roll = 11;

                var REINACCAMT = 0;
                switch (roll) {
                    case 1: //-75%  
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 2: //investment - 50%                        
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 3: //investment - 20%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 4: //investment + 5%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 5: //investment + 10%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 6: //investment + 20%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 7: //investment + 30%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 8: //investment + 50%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 9: //investment + 60%
                        REINACCAMT = 10;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter could only convert 10 units of the most Ultimate material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 10: //investment + 75%
                        REINACCAMT = 1000;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter spooled up 100% and built some of the most valueable material possible. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        REINACCAMT = 10000;
                        if (expeditionGathererActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.1);
                        if (expeditionCollectorActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.15);
                        if (expeditionHoarderActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.25);
                        if (expeditionAmassingActive == 'true')
                            REINACCAMT += Math.round(REINACCAMT * 0.5);
                        ownedReinaccStocks += REINACCAMT;
                        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
                        $('#reinaccOwnedStocksDisplay').html(ownedReinaccStocks);
                        $('#reinaccOwnedStocks').html(ownedReinaccStocks);
                        $('#reinaccSellEstimate').html('$' + (ownedReinaccStocks * (reinaccCurrentStockPrice - reinaccCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#matterConversionInvestResult').html("The matter converter went into overdrive and built a heap of the most valueable material. +" + REINACCAMT + " Reinacc</b>");
                        break;
                    default:
                        break;
                }
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);
                matterConversionActive = "false";
                localStorage.setItem("matterConversionActive", matterConversionActive);
            }, timer * 1000 + 1000);
        }
        else
            $('#matterConversionInvestResult').html("Not enough money to Invest.");
        return false;
    });
});