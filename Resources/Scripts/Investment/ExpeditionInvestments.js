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
                //if (userClass == "Healer")
                //    roll += 1;
                switch (roll) {
                    case 1: //-75%   
                        ownedTRITStocks += 100;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a cursed tomb, they get scared away. They only find a small amount of minerals. <b>RESULT: +100 TRIT.</b>");
                        break;
                    case 2: //investment - 50%                        
                        ownedTRITStocks += 100;
                        ownedCANVStocks += 50;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition returns nothing useful. Just a small amount of minerals. <b>RESULT: +100 TRIT +50 CANV</b>");
                        break;
                    case 3: //investment - 20%
                        ownedPALLADStocks += 100;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a few clumps of cheap materials. <b>RESULT: +100 PALLAD</b>");
                        break;
                    case 4: //investment + 5%
                        ownedPALLADStocks += 150;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedTRITStocks += 100;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small amount of cheap materials. <b>RESULT: +150 PALLAD + 100 TRIT</b>");
                        break;
                    case 5: //investment + 10%
                        ownedOSMStocks += 300;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small amount of ore. <b>RESULT: +300 OSM</b>");
                        break;
                    case 6: //investment + 20%
                        ownedOSMStocks += 100;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedTRITStocks += 100;
                        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
                        $('#TRITOwnedStocksDisplay').html(ownedTRITStocks);
                        $('#TRITOwnedStocks').html(ownedTRITStocks);
                        $('#TRITSellEstimate').html('$' + (ownedTRITStocks * (TRITCurrentStockPrice - TRITCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedPALLADStocks += 50;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds an OK chunk of cheap materials. <b>RESULT: +100 OSM +200 TRIT +50 PALLAD</b>");
                        break;
                    case 7: //investment + 30%
                        ownedCANVStocks += 300;
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a small cluster worth a little bit. <b>RESULT: +300 CANV</b>");
                        break;
                    case 8: //investment + 50%
                        ownedCANVStocks += 300;
                        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
                        $('#CANVOwnedStocksDisplay').html(ownedCANVStocks);
                        $('#CANVOwnedStocks').html(ownedCANVStocks);
                        $('#CANVSellEstimate').html('$' + (ownedCANVStocks * (CANVCurrentStockPrice - CANVCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedOSMStocks += 50;
                        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
                        $('#OSMOwnedStocksDisplay').html(ownedOSMStocks);
                        $('#OSMOwnedStocks').html(ownedOSMStocks);
                        $('#OSMSellEstimate').html('$' + (ownedOSMStocks * (OSMCurrentStockPrice - OSMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a moderate amount of valuable ores. <b>RESULT: +300 CANV +50 OSM</b>");
                        break;
                    case 9: //investment + 60%
                        ownedPALLADStocks += 220;
                        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
                        $('#PALLADOwnedStocksDisplay').html(ownedPALLADStocks);
                        $('#PALLADOwnedStocks').html(ownedPALLADStocks);
                        $('#PALLADSellEstimate').html('$' + (ownedPALLADStocks * (PALLADCurrentStockPrice - PALLADCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition finds a large packet of valueable ore. <b>RESULT: +220 PALLAD</b>");
                        break;
                    case 10: //investment + 75%
                        ownedAUStocks += 10;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. They collect the valueable minerals there. <b>RESULT: +10 AU</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        ownedAUStocks += 15;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#miningInvestResult').html("The expedition comes across an ancient ruin. Due to your special healer abilities they uncover the secret treasure room. <b>RESULT: +15 AU</b>");
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
            }, 60000);
        }
        else
            $('#miningInvestResult').html("Not enough money to Invest.");
        return false;
    });

    //Planetary Drill Operation
    $('#btnInvestDrill').prop('disabled', false);
    $('#btnInvestDrill').click(function () {
        if (money >= 5000000) {
            drillActive = "true";
            localStorage.setItem("drillActive", drillActive);
            var minutes = 10;
            var seconds = 60;
            $('#drillInvestResult').html("Investing: " + minutes + " Minute(s) remaining.");
            if (minutes > 0) {
                minutes--;
                setInterval(function () {
                    // Fix for chrome bug.
                    if (seconds > 0 && minutes > 0) {
                        seconds--;
                        $('#drillInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }                   
                        // Chrome Bug fix
                    else if (seconds > 1) {
                        seconds--;
                        $('#drillInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                    else if (minutes > 0) {
                        minutes--;
                        seconds = 59;
                        $('#drillInvestResult').html("Investing: " + minutes + " Minute(s), " + seconds + " Second(s) remaining.");
                    }
                }, 1000);
            }
            var investAmt = 5000000;
            money -= investAmt;
            totalInvestment += investAmt;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
                //if (userClass == "Healer")
                //    roll += 1;
                switch (roll) {
                    case 1: //-75%   
                        ownedAUStocks += 4000;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill burns out before it even breaks the crust. It collects a small amount of gold. <b>RESULT: +4000 AU</b>");
                        break;
                    case 2: //investment - 50%                        
                        ownedAUStocks += 4000;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += 1000;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill melts down in the mantle. Not before collecting a small amount of Gold and Diamonds. <b>RESULT: +4000 Au +1000 DIAM</b>");
                        break;
                    case 3: //investment - 20%
                        ownedPLATStocks += 250;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill over-heats in the mantle having to come up early. Collecting a small chunk of resources. <b>RESULT: +250 PLAT</b>");
                        break;
                    case 4: //investment + 5%
                        ownedPLATStocks += 300;
                        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
                        $('#PLATOwnedStocksDisplay').html(ownedPLATStocks);
                        $('#PLATOwnedStocks').html(ownedPLATStocks);
                        $('#PLATSellEstimate').html('$' + (ownedPLATStocks * (PLATCurrentStockPrice - PLATCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, just barely scraping enough to pay for the operation. <b>RESULT: +300 PLAT</b>");
                        break;
                    case 5: //investment + 10%
                        ownedDIAMStocks += 3600;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, just barely scraping enough to pay for the operation. <b>RESULT: +3600 DIAM</b>");
                        break;
                    case 6: //investment + 20%
                        ownedAUStocks += 8000;
                        localStorage.setItem("ownedAUStocks", ownedAUStocks);
                        $('#AUOwnedStocksDisplay').html(ownedAUStocks);
                        $('#AUOwnedStocks').html(ownedAUStocks);
                        $('#AUSellEstimate').html('$' + (ownedAUStocks * (AUCurrentStockPrice - AUCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        ownedDIAMStocks += 2600;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill functions but you don't manage to find much, it finds enough to make a small profit. <b>RESULT: +8000 AU +2600 DIAM</b>");
                        break;
                    case 7: //investment + 30%
                        ownedFEStocks += 162500;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a decent amount of iron. <b>RESULT: +162,500 FE</b>");
                        break;
                    case 8: //investment + 50%
                        ownedFEStocks += 187500;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a high amount of iron. <b>RESULT: +187,500 FE</b>");
                        break;
                    case 9: //investment + 60%
                        ownedFEStocks += 200000;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill gets to the liquid iron core where it was able to collect a very high amount of iron. <b>RESULT: +200,000 FE</b>");
                        break;
                    case 10: //investment + 75%
                        ownedDIAMStocks += 5850;
                        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
                        $('#DIAMOwnedStocksDisplay').html(ownedDIAMStocks);
                        $('#DIAMOwnedStocks').html(ownedDIAMStocks);
                        $('#DIAMSellEstimate').html('$' + (ownedDIAMStocks * (DIAMCurrentStockPrice - DIAMCurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill uncovers a secret gas pocket where plenty of diamonds are found. <b>RESULT: +5850 DIAM</b>");
                        break;
                    case 11: //investment + 100% Only possible from Healer
                        ownedFEStocks += 250000;
                        localStorage.setItem("ownedFEStocks", ownedFEStocks);
                        $('#FEOwnedStocksDisplay').html(ownedFEStocks);
                        $('#FEOwnedStocks').html(ownedFEStocks);
                        $('#FESellEstimate').html('$' + (ownedFEStocks * (FECurrentStockPrice - FECurrentStockPrice / sellDivider)).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                        $('#drillInvestResult').html("The drill reaches the solid iron core collecting massive amounts of iron. <b>RESULT: +250,000 FE</b>");
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
            }, 601000);
        }
        else
            $('#drillInvestResult').html("Not enough money to Invest.");
        return false;
    });

});