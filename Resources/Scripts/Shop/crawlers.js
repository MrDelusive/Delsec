$(window).load(function () { 
    //15 SECOND TICKER                
    

    //4 SEC TICKER
    setInterval(function () {
        // increment money every 4 seconds (4000 ms) by number of cards bought multiplied by a random increment (rdms between 0.00 - 0.08)
        if (threeBitBank > 0) {
            // I am using Math.round as opposed to .toFixed for the increment as I need the actual value to be rounded to 2 decimals instead of just 
            // displaying the float as 2 decimals. .toFixed doesn't change the actual value of increment, so there were display and code inconsistencies.
            // i.e the money would increment by .03 but display .04.
            // The 100 * is because Math.round returns to the nearest whole number. then divide that by 100 to get the 2 decimal place actual number.                   
            autoIncrement = Math.round(100 * Math.random() / 12.5) / 100; // 0.08 max every 4s tick
            // displays the increment amt for a second.
            $('#threeBitIncrementAmtDisplay').html('+ $' + (autoIncrement * threeBitBank).toFixed(2));
            $('#threeBitIncrementAmtDisplay').fadeIn(1);
            $('#threeBitIncrementAmtDisplay').delay(1000);
            $('#threeBitIncrementAmtDisplay').fadeOut(1000);
            //$('#incrementAmtDisplay').hide("slide", 10, { direction: 'right' });
        }

        money = money + autoIncrement * threeBitBank;
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
    }, 4000);

    //2 SEC TICKER
    setInterval(function () {      
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");

        if (fourBitBank > 0) {
            // I am using Math.round as opposed to .toFixed for the increment as I need the actual value to be rounded to 2 decimals instead of just 
            // displaying the float as 2 decimals. .toFixed doesn't change the actual value of increment, so there were display and code inconsistencies.
            // i.e the money would increment by .03 but display .04.
            // The 100 * is because Math.round returns to the nearest whole number. then divide that by 100 to get the 2 decimal place actual number.                   
            autoIncrement2s = Math.round(100 * Math.random() / 12.5) / 100; // 0.08 max every 2s tick                                        
            $('#fourBitIncrementAmtDisplay').html('+ $' + (autoIncrement2s * fourBitBank).toFixed(2));
            $('#fourBitIncrementAmtDisplay').fadeIn(1);
            $('#fourBitIncrementAmtDisplay').delay(500);
            $('#fourBitIncrementAmtDisplay').fadeOut(500);
        }

        if (sixBitBank > 0) {
            autoIncrement6Bit = Math.round(100 * Math.random() / 3.125) / 100; // 0.32 max every 2s tick
            $('#sixBitIncrementAmtDisplay').html('+ $' + (autoIncrement6Bit * sixBitBank).toFixed(2));
            $('#sixBitIncrementAmtDisplay').fadeIn(1);
            $('#sixBitIncrementAmtDisplay').delay(500);
            $('#sixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixBitBank > 0) {
            autoIncrementRussian6Bit = Math.round(100 * (Math.random() + 0.01) / 3.125) / 100; // 0.01 - 0.33 max every 2s tick
            $('#russianSixBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian6Bit * russianSixBitBank).toFixed(2));
            $('#russianSixBitIncrementAmtDisplay').fadeIn(1);
            $('#russianSixBitIncrementAmtDisplay').delay(500);
            $('#russianSixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (eightBitBank > 0) {
            autoIncrement8Bit = Math.round(100 * Math.random() * 1.28) / 100; // 1.28 max every 2s tick
            $('#eightBitIncrementAmtDisplay').html('+ $' + (autoIncrement8Bit * eightBitBank).toFixed(2));
            $('#eightBitIncrementAmtDisplay').fadeIn(1);
            $('#eightBitIncrementAmtDisplay').delay(500);
            $('#eightBitIncrementAmtDisplay').fadeOut(500);
        }
        
        money = money + autoIncrement2s * fourBitBank + autoIncrement6Bit * sixBitBank + autoIncrementRussian6Bit * russianSixBitBank + autoIncrement8Bit
            * eightBitBank + wizardPassive;       
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
    }, 2000);

    //1 SEC TICKER
    setInterval(function () {
        if (twelveBitBank > 0) {
            autoIncrement12Bit = Math.round(100 * Math.random() * 10.24) / 100; // 10.24 max every 1s tick
            $('#twelveBitIncrementAmtDisplay').html('+ $' + (autoIncrement12Bit * twelveBitBank).toFixed(2));
            $('#twelveBitIncrementAmtDisplay').fadeIn(1);
            $('#twelveBitIncrementAmtDisplay').delay(400);
            $('#twelveBitIncrementAmtDisplay').fadeOut(100);
        }

        if (sixteenBitBank > 0) {
            autoIncrement16Bit = Math.round(100 * Math.random() * 163.84) / 100;
            $('#sixteenBitIncrementAmtDisplay').html('+ $' + (autoIncrement16Bit * sixteenBitBank).toFixed(2));
            $('#sixteenBitIncrementAmtDisplay').fadeIn(1);
            $('#sixteenBitIncrementAmtDisplay').delay(400);
            $('#sixteenBitIncrementAmtDisplay').fadeOut(100);
        }
        if (userClass == "Wizard") {
            wizardPassive = 0.1 * (autoIncrement * threeBitBank + autoIncrement2s * fourBitBank + autoIncrement6Bit * sixBitBank + autoIncrementRussian6Bit * russianSixBitBank + autoIncrement8Bit
            * eightBitBank + autoIncrement12Bit * twelveBitBank + autoIncrement16Bit * sixteenBitBank);
        }
        money += autoIncrement12Bit * twelveBitBank + autoIncrement16Bit * sixteenBitBank + wizardPassive;
        $('#autoWizardGenerateAmt').html("Autogenerated Additional: $" + wizardPassive.toFixed(2));
        $('#lblMoneyDisplay').html('$' + money.toFixed(2));
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2));
    }, 1000);
})(jQuery);