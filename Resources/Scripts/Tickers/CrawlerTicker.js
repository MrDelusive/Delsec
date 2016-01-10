$(document).ready(function () {
    setInterval(function () {

        if (twoBitBank > 0) {
            autoIncrement2Bit = Math.round(100 * Math.random() * 0.02) / 100;
            $('#twoBitIncrementAmtDisplay').html('+ $' + (autoIncrement2Bit * twoBitBank).toFixed(2));
            $('#twoBitIncrementAmtDisplay').show(1);
            $('#twoBitIncrementAmtDisplay').delay(1000);
            $('#twoBitIncrementAmtDisplay').fadeOut(500);
        }

        if (threeBitBank > 0) {
            // I am using Math.round as opposed to .toFixed for the increment as I need the actual value to be rounded to 2 decimals instead of just 
            // displaying the float as 2 decimals. .toFixed doesn't change the actual value of increment, so there were display and code inconsistencies.
            // i.e the money would increment by .03 but display .04.
            // The 100 * is because Math.round returns to the nearest whole number. then divide that by 100 to get the 2 decimal place actual number.                   
            autoIncrement = Math.round(100 * Math.random() * 0.04) / 100;
            $('#threeBitIncrementAmtDisplay').html('+ $' + (autoIncrement * threeBitBank).toFixed(2));
            $('#threeBitIncrementAmtDisplay').show(1);
            $('#threeBitIncrementAmtDisplay').delay(1000);
            $('#threeBitIncrementAmtDisplay').fadeOut(500);
        }

        if (fourBitBank > 0) {          
            autoIncrement2s = Math.round(100 * Math.random() * 0.08) / 100;                                       
            $('#fourBitIncrementAmtDisplay').html('+ $' + (autoIncrement2s * fourBitBank).toFixed(2));
            $('#fourBitIncrementAmtDisplay').show(1);
            $('#fourBitIncrementAmtDisplay').delay(1000);
            $('#fourBitIncrementAmtDisplay').fadeOut(500);
        }

        if (sixBitBank > 0) {
            autoIncrement6Bit = Math.round(100 * Math.random() * 0.32) / 100;
            $('#sixBitIncrementAmtDisplay').html('+ $' + (autoIncrement6Bit * sixBitBank).toFixed(2));
            $('#sixBitIncrementAmtDisplay').show(1);        
            $('#sixBitIncrementAmtDisplay').delay(1000);
            $('#sixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixBitBank > 0) {
            autoIncrementRussian6Bit = Math.round(100 * (Math.random()) * 0.32) / 100 + 0.01;
            $('#russianSixBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian6Bit * russianSixBitBank).toFixed(2));
            $('#russianSixBitIncrementAmtDisplay').show(1);
            $('#russianSixBitIncrementAmtDisplay').delay(1000);
            $('#russianSixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (eightBitBank > 0) {
            autoIncrement8Bit = Math.round(100 * Math.random() * 1.28) / 100;
            $('#eightBitIncrementAmtDisplay').html('+ $' + (autoIncrement8Bit * eightBitBank).toFixed(2));
            $('#eightBitIncrementAmtDisplay').show(1);
            $('#eightBitIncrementAmtDisplay').delay(1000);
            $('#eightBitIncrementAmtDisplay').fadeOut(500);
        }

        if (twelveBitBank > 0) {
            autoIncrement12Bit = Math.round(100 * Math.random() * 20.48) / 100;
            $('#twelveBitIncrementAmtDisplay').html('+ $' + (autoIncrement12Bit * twelveBitBank).toFixed(2));
            $('#twelveBitIncrementAmtDisplay').show(1);
            $('#twelveBitIncrementAmtDisplay').delay(1000);
            $('#twelveBitIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenBitBank > 0) {
            autoIncrement16Bit = Math.round(100 * Math.random() * 327.68) / 100;
            $('#sixteenBitIncrementAmtDisplay').html('+ $' + (autoIncrement16Bit * sixteenBitBank).toFixed(2));
            $('#sixteenBitIncrementAmtDisplay').show(1);
            $('#sixteenBitIncrementAmtDisplay').delay(1000);
            $('#sixteenBitIncrementAmtDisplay').fadeOut(500);
        }

        if (fourByteBank > 0) {
            autoIncrement4Byte = Math.round(100 * Math.random() * 655.36) / 100;
            $('#fourByteIncrementAmtDisplay').html('+ $' + (autoIncrement4Byte * fourByteBank).toFixed(2));
            $('#fourByteIncrementAmtDisplay').show(1);
            $('#fourByteIncrementAmtDisplay').delay(1000);
            $('#fourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (eightByteBank > 0) {
            autoIncrement8Byte = Math.round(100 * Math.random() * 1310.72) / 100;
            $('#eightByteIncrementAmtDisplay').html('+ $' + (autoIncrement8Byte * eightByteBank).toFixed(2));
            $('#eightByteIncrementAmtDisplay').show(1);
            $('#eightByteIncrementAmtDisplay').delay(1000);
            $('#eightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenByteBank > 0) {
            autoIncrement16Byte = Math.round(100 * Math.random() * 2621.44) / 100;
            $('#sixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrement16Byte * sixteenByteBank).toFixed(2));
            $('#sixteenByteIncrementAmtDisplay').show(1);
            $('#sixteenByteIncrementAmtDisplay').delay(1000);
            $('#sixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (thirtytwoByteBank > 0) {
            autoIncrement32Byte = Math.round(100 * Math.random() * 5242.88) / 100;
            $('#thirtytwoByteIncrementAmtDisplay').html('+ $' + (autoIncrement32Byte * thirtytwoByteBank).toFixed(2));
            $('#thirtytwoByteIncrementAmtDisplay').show(1);
            $('#thirtytwoByteIncrementAmtDisplay').delay(1000);
            $('#thirtytwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (sixtyfourByteBank > 0) {
            autoIncrement64Byte = Math.round(100 * Math.random() * 10485.76) / 100;
            $('#sixtyfourByteIncrementAmtDisplay').html('+ $' + (autoIncrement64Byte * sixtyfourByteBank).toFixed(2));
            $('#sixtyfourByteIncrementAmtDisplay').show(1);
            $('#sixtyfourByteIncrementAmtDisplay').delay(1000);
            $('#sixtyfourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (userClass == "Wizard") {
            wizardPassive = 0.01 * (
                autoIncrement2Bit * twoBitBank
                + autoIncrement * threeBitBank
                + autoIncrement2s * fourBitBank
                + autoIncrement6Bit * sixBitBank
                + autoIncrementRussian6Bit * russianSixBitBank
                + autoIncrement8Bit * eightBitBank
                + autoIncrement12Bit * twelveBitBank
                + autoIncrement16Bit * sixteenBitBank
                + autoIncrement4Byte * fourByteBank
                + autoIncrement8Byte * eightByteBank
                + autoIncrement16Byte * sixteenByteBank
                + autoIncrement32Byte * thirtytwoByteBank
                + autoIncrement64Byte * sixtyfourByteBank
                );
        }
        $('#autoWizardGenerateAmt').html("Autogenerated Additional: $" + wizardPassive.toFixed(2));

        money += autoIncrement2Bit * twoBitBank
            + autoIncrement * threeBitBank
            + autoIncrement2s * fourBitBank
            + autoIncrement6Bit * sixBitBank
            + autoIncrementRussian6Bit * russianSixBitBank
            + autoIncrement8Bit * eightBitBank
            + autoIncrement12Bit * twelveBitBank
            + autoIncrement16Bit * sixteenBitBank
            + autoIncrement4Byte * fourByteBank
            + autoIncrement8Byte * eightByteBank
            + autoIncrement16Byte * sixteenByteBank
            + autoIncrement32Byte * thirtytwoByteBank
            + autoIncrement64Byte * sixtyfourByteBank
            + wizardPassive;
        localStorage.setItem("money", money);

        $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    }, 4000);

});