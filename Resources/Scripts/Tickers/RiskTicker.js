$(document).ready(function () {

    var nminutes = Math.floor(necroTimer / 60);
    var nseconds = Math.floor(necroTimer % 60);
    var iminutes = Math.floor(ironCurtainTimer / 60);
    var iseconds = Math.floor(ironCurtainTimer % 60);
    var dminutes = Math.floor(delsecTechGodTimer / 60);
    var dseconds = Math.floor(delsecTechGodTimer % 60);

    nlastUpdate = new Date().getTime(); // initial cooldown timer for necro
    ilastUpdate = new Date().getTime(); // initial cooldown timer for iron curtain
    dlastUpdate = new Date().getTime(); // initial cooldown timer for delsec tech god
    $('#necroTimerDisplay').html(nminutes + ":0" + nseconds);

    setInterval(function () {
        vipersecTotalRiskCalc = vipersecFourByteBank * 0.32
                + vipersecEightByteBank * 0.64
                + vipersecSixteenByteBank * 1.28
                + vipersecThirtyTwoByteBank * 2.56
                + vipersecSixtyFourByteBank * 5.12
                + vipersecOneTwentyEightByteBank * 10.24
                + vipersecTwoFiftySixByteBank * 20.48
                + vipersecFiveTwelveByteBank * 40.96
                + vipersecOneKBBank * 81.92
                + vipersecTwoKBBank * 163.84
                + vipersecFourKBBank * 327.68
                + vipersecEightKBBank * 655.36
                + vipersecSixteenKBBank * 1310.72
                + vipersecThirtyTwoKBBank * 2621.44
                + vipersecSixtyFourKBBank * 5242.88
                + vipersecOneTwentyEightKBBank * 10485.76
                + vipersecTwoFiftySixKBBank * 20971.52
                + vipersecFiveTwelveKBBank * 41943.04
                + vipersecOneMBBank * 83886.08
                + vipersecTwoMBBank * 167772.16
                + vipersecFourMBBank * 335544.32
                + vipersecEightMBBank * 671088.64
                + vipersecSixteenMBBank * 1342177.28;

        russianTotalRiskCalc = russianTwelveBitBank * 0.24
                    + russianSixteenBitBank * 0.48
                    + russianFourByteBank * 0.96
                    + russianEightByteBank * 1.92
                    + russianSixteenByteBank * 3.84
                    + russianThirtyTwoByteBank * 7.68
                    + russianSixtyFourByteBank * 15.36
                    + russianOneTwentyEightByteBank * 30.72
                    + russianTwoFiftySixByteBank * 61.44
                    + russianFiveTwelveByteBank * 122.88
                    + russianOneKBBank * 245.76
                    + russianTwoKBBank * 491.52
                    + russianFourKBBank * 983.04
                    + russianEightKBBank * 1966.08
                    + russianSixteenKBBank * 3932.16
                    + russianThirtyTwoKBBank * 7864.32
                    + russianSixtyFourKBBank * 15728.64
                    + russianOneTwentyEightKBBank * 31457.28
                    + russianTwoFiftySixKBBank * 62914.56
                    + russianFiveTwelveKBBank * 125829.12
                    + russianOneMBBank * 251658.24
                    + russianTwoMBBank * 503316.48
                    + russianFourMBBank * 1006632.96
                    + russianEightMBBank * 2013265.92
                    + russianSixteenMBBank * 4026531.84;
        if (ironCurtainRunning == 'true')
            russianTotalRiskCalc = 0;

        if (vipersecReflectionFieldActive == 'true')
            vipersecReflectionFieldAmt = vipersecTotalRiskCalc * 0.1;      
        if (vipersecFaderActive == 'true')
            vipersecFaderAmt = vipersecTotalRiskCalc * 0.25;
        if (vipersecStealthFieldActive == 'true')
            vipersecStealthFieldAmt = vipersecTotalRiskCalc * 0.30;
        if (vipersecInvisibilityActive == 'true')
            vipersecInvisibilityAmt = vipersecTotalRiskCalc * 0.35;
        if (vipersecTimeReversalActive == 'true')
            vipersecTimeReversalAmt = vipersecTotalRiskCalc * 0.5;


        vipersecTotalRiskCalc -= vipersecReflectionFieldAmt + vipersecFaderAmt + vipersecStealthFieldAmt + vipersecInvisibilityAmt + vipersecTimeReversalAmt; // possibly negative.

        if (necromancerRunning == 'false') {
            // RISK CALCULATION //
            riskTick = twelveBitBank * 0.16
                    + sixteenBitBank * 0.32
                    + fourByteBank * 0.64
                    + eightByteBank * 1.28
                    + sixteenByteBank * 2.56
                    + thirtytwoByteBank * 5.12
                    + sixtyfourByteBank * 10.24
                    + oneTwentyEightByteBank * 20.48
                    + twoFiftySixByteBank * 40.96
                    + fiveTwelveByteBank * 81.92
                    + oneKBBank * 163.84
                    + twoKBBank * 327.68
                    + fourKBBank * 655.36
                    + eightKBBank * 1310.72
                    + sixteenKBBank * 2621.44
                    + thirtyTwoKBBank * 5242.88
                    + sixtyFourKBBank * 10485.76
                    + oneTwentyEightKBBank * 20971.52
                    + twoFiftySixKBBank * 41943.04
                    + fiveTwelveKBBank * 83886.08
                    + oneMBBank * 167772.16
                    + twoMBBank * 335544.32
                    + fourMBBank * 671088.64
                    + eightMBBank * 1342177.28
                    + sixteenMBBank * 2684354.56

                    + russianTotalRiskCalc

                    + vipersecTotalRiskCalc

                    + chimerasecOneByteBank * 0.16
                    + chimerasecTwoByteBank * 0.32
                    + chimerasecFourByteBank * 0.64
                    + chimerasecEightByteBank * 1.28
                    + chimerasecSixteenByteBank * 2.56
                    + chimerasecThirtyTwoByteBank * 5.12
                    + chimerasecSixtyFourByteBank * 10.24
                    + chimerasecOneTwentyEightByteBank * 20.48
                    + chimerasecTwoFiftySixByteBank * 40.96
                    + chimerasecFiveTwelveByteBank * 81.92
                    + chimerasecOneKBBank * 163.84
                    + chimerasecTwoKBBank * 327.68
                    + chimerasecFourKBBank * 655.36
                    + chimerasecEightKBBank * 1310.72
                    + chimerasecSixteenKBBank * 2621.44
                    + chimerasecThirtyTwoKBBank * 5242.88
                    + chimerasecSixtyFourKBBank * 10485.76
                    + chimerasecOneTwentyEightKBBank * 20971.52
                    + chimerasecTwoFiftySixKBBank * 41943.04
                    + chimerasecFiveTwelveKBBank * 83886.08
                    + chimerasecOneMBBank * 167772.16
                    + chimerasecTwoMBBank * 335544.32
                    + chimerasecFourMBBank * 671088.64
                    + chimerasecEightMBBank * 1342177.28
                    + chimerasecSixteenMBBank * 2684354.56

                    + griffonBankOneByteBank * 0.32
                    + griffonBankTwoByteBank * 0.64
                    + griffonBankFourByteBank * 1.28
                    + griffonBankEightByteBank * 2.56
                    + griffonBankSixteenByteBank * 5.12
                    + griffonBankThirtyTwoByteBank * 10.24
                    + griffonBankSixtyFourByteBank * 20.48
                    + griffonBankOneTwentyEightByteBank * 40.96
                    + griffonBankTwoFiftySixByteBank * 81.92
                    + griffonBankFiveTwelveByteBank * 163.84
                    + griffonBankOneKBBank * 327.68
                    + griffonBankTwoKBBank * 655.36
                    + griffonBankFourKBBank * 1310.72
                    + griffonBankEightKBBank * 2621.44
                    + griffonBankSixteenKBBank * 5242.88
                    + griffonBankThirtyTwoKBBank * 10485.76
                    + griffonBankSixtyFourKBBank * 20971.52
                    + griffonBankOneTwentyEightKBBank * 41943.04
                    + griffonBankTwoFiftySixKBBank * 83886.08
                    + griffonBankFiveTwelveKBBank * 167772.16
                    + griffonBankOneMBBank * 335544.32
                    + griffonBankTwoMBBank * 671088.64
                    + griffonBankFourMBBank * 1342177.28
                    + griffonBankEightMBBank * 2684354.56
                    + griffonBankSixteenMBBank * 5368709.12

                    - riskClearedTargets * riskClearedTargetAmtIncrement
            ;
        }
        else if (necromancerRunning == 'true')
            riskTick = 0;
        
        if (riskTick < 0 && vipersecTimeReversalActive == 'false') // only revert to 0 if time reversal isnt learnt.
            riskTick = 0;
        totalRisk += riskTick;

        if (totalRisk < 0)
            totalRisk = 0; // if time reversal gets it to 0 again.

        
        //100%
        if (totalRisk >= riskDetectionAmt) {
            $('#riskTraced').html("The FDI have frozen your crawler profits. You need to clear your name.");
            $('#riskTraced').css("background", "#ae2737");
            $('#playerAddress').html("21 Hump Street");
            $('#playerStatus').html("ACCOUNT FROZEN");
        }
        //90%
        else if (totalRisk >= riskDetectionAmt * 0.9) {
            $('#riskTraced').html("The FDI have found your address and are on their way.");
            $('#riskTraced').css("background", "#8c0515");
            $('#playerAddress').html("21 Hump Street");
            $('#playerStatus').html("PENDING ARREST");
        }
        //75%
        else if (totalRisk >= riskDetectionAmt * 0.75) {
            $('#riskTraced').html("The FDI are close to finding your address.");
            $('#riskTraced').css("background", "#6a0515");
            $('#playerStatus').html("DANGEROUS");
        }
        //10%
        else if (totalRisk >= riskDetectionAmt * 0.1) {
            $('#riskTraced').html("The FDI has started tracing you.");
            $('#riskTraced').css("background", "#480515");
            $('#playerStatus').html("TRACING");
        }
        else if (totalRisk >= riskDetectionAmt * 0.01) {
            $('#riskTraced').html("The FDI has detected unusual activities from your crawlers, and have begun efforts to start tracking you down.");
            $('#riskTraced').css("background", "#260515");
            $('#playerStatus').html("QUESTIONABLE");
        }
        else if (totalRisk == 0 && vipersecTimeReversalActive == 'true' && riskTick < 0) {
            $('#riskTraced').html("Someone is reversing the trace. FDI is confused.");
            $('#riskTraced').css("background", "#04a303");
            $('#playerStatus').html("TIME DILATING");
        }
        else {
            $('#riskTraced').html("You are not being traced.");
            $('#riskTraced').css("background", "#040515");
            $('#playerStatus').html("CLEAN");            
        }
        
        if (riskFreeWorldActive == 'true') {
            totalRisk = 0;
            riskTick = 0;
            $('#riskTraced').html("FDI No longer have the ability to trace you.");
            $('#riskTraced').css("background", "#04a303");
            $('#playerStatus').html("2RISKI4FDI");
        }


        localStorage.setItem("totalRisk", totalRisk);
        $('#totalRiskDisplay').html("Total Risk: " + totalRisk.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " at " + riskTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec.");
        
       

        if (necromancerActive == 'true') {
              
            var thisUpdate = new Date().getTime();
            var diff = thisUpdate - nlastUpdate;
            if (necroTimer > 0) {
                necroTimer -= Math.round(diff / 1000);
                nlastUpdate = thisUpdate;
                nminutes = Math.floor(necroTimer / 60);
                nseconds = Math.floor(necroTimer % 60);                
                if (nseconds < 10)
                    $('#necroTimerDisplay').html(nminutes + ":0" + nseconds);
                else
                    $('#necroTimerDisplay').html(nminutes + ":" + nseconds);
            }
            else 
                $('#necroTimerDisplay').html("READY");
        }

        if (ironCurtainActive == 'true') {

            var ithisUpdate = new Date().getTime();
            var idiff = ithisUpdate - ilastUpdate;
            if (ironCurtainTimer > 0) {
                ironCurtainTimer -= Math.round(idiff / 1000);
                ilastUpdate = ithisUpdate;
                iminutes = Math.floor(ironCurtainTimer / 60);
                iseconds = Math.floor(ironCurtainTimer % 60);
                if (iseconds < 10)
                    $('#ironCurtainTimerDisplay').html(iminutes + ":0" + iseconds);
                else
                    $('#ironCurtainTimerDisplay').html(iminutes + ":" + iseconds);
            }
            else
                $('#ironCurtainTimerDisplay').html("READY");
        }

        if (delsecTechGodActive == 'true') {

            var dthisUpdate = new Date().getTime();
            var ddiff = dthisUpdate - dlastUpdate;
            if (delsecTechGodTimer > 0) {
                delsecTechGodTimer -= Math.round(ddiff / 1000);
                dlastUpdate = dthisUpdate;
                dminutes = Math.floor(delsecTechGodTimer / 60);
                dseconds = Math.floor(delsecTechGodTimer % 60);
                if (dseconds < 10)
                    $('#delsecTechGodTimerDisplay').html(dminutes + ":0" + dseconds);
                else
                    $('#delsecTechGodTimerDisplay').html(dminutes + ":" + dseconds);
            }
            else
                $('#delsecTechGodTimerDisplay').html("READY");
        }

    }, 1000);
});