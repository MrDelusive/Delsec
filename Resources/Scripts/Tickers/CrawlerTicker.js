$(document).ready(function () {

    setInterval(function () {
        // DELSEC //
        if (twoBitBank > 0) {
            autoIncrement2Bit = Math.round(100 * Math.random() * 0.02) / 100;
            $('#twoBitIncrementAmtDisplay').html('+ $' + (autoIncrement2Bit * twoBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
            $('#threeBitIncrementAmtDisplay').html('+ $' + (autoIncrement * threeBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#threeBitIncrementAmtDisplay').show(1);
            $('#threeBitIncrementAmtDisplay').delay(1000);
            $('#threeBitIncrementAmtDisplay').fadeOut(500);
        }

        if (fourBitBank > 0) {          
            autoIncrement2s = Math.round(100 * Math.random() * 0.08) / 100;                                       
            $('#fourBitIncrementAmtDisplay').html('+ $' + (autoIncrement2s * fourBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourBitIncrementAmtDisplay').show(1);
            $('#fourBitIncrementAmtDisplay').delay(1000);
            $('#fourBitIncrementAmtDisplay').fadeOut(500);
        }

        if (sixBitBank > 0) {
            autoIncrement6Bit = Math.round(100 * Math.random() * 0.32) / 100;
            $('#sixBitIncrementAmtDisplay').html('+ $' + (autoIncrement6Bit * sixBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixBitIncrementAmtDisplay').show(1);        
            $('#sixBitIncrementAmtDisplay').delay(1000);
            $('#sixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (eightBitBank > 0) {
            autoIncrement8Bit = Math.round(100 * Math.random() * 1.28) / 100;
            $('#eightBitIncrementAmtDisplay').html('+ $' + (autoIncrement8Bit * eightBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightBitIncrementAmtDisplay').show(1);
            $('#eightBitIncrementAmtDisplay').delay(1000);
            $('#eightBitIncrementAmtDisplay').fadeOut(500);
        }

        if (twelveBitBank > 0) {
            autoIncrement12Bit = Math.round(100 * Math.random() * 20.48) / 100;
            $('#twelveBitIncrementAmtDisplay').html('+ $' + (autoIncrement12Bit * twelveBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twelveBitIncrementAmtDisplay').show(1);
            $('#twelveBitIncrementAmtDisplay').delay(1000);
            $('#twelveBitIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenBitBank > 0) {
            autoIncrement16Bit = Math.round(100 * Math.random() * 327.68) / 100;

            $('#sixteenBitIncrementAmtDisplay').html('+ $' + (autoIncrement16Bit * sixteenBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenBitIncrementAmtDisplay').show(1);
            $('#sixteenBitIncrementAmtDisplay').delay(1000);
            $('#sixteenBitIncrementAmtDisplay').fadeOut(500);
        }

        if (fourByteBank > 0) {
            autoIncrement4Byte = Math.round(100 * Math.random() * 655.36) / 100;
            $('#fourByteIncrementAmtDisplay').html('+ $' + (autoIncrement4Byte * fourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourByteIncrementAmtDisplay').show(1);
            $('#fourByteIncrementAmtDisplay').delay(1000);
            $('#fourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (eightByteBank > 0) {
            autoIncrement8Byte = Math.round(100 * Math.random() * 1310.72) / 100;
            $('#eightByteIncrementAmtDisplay').html('+ $' + (autoIncrement8Byte * eightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightByteIncrementAmtDisplay').show(1);
            $('#eightByteIncrementAmtDisplay').delay(1000);
            $('#eightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenByteBank > 0) {
            autoIncrement16Byte = Math.round(100 * Math.random() * 2621.44) / 100;
            $('#sixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrement16Byte * sixteenByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenByteIncrementAmtDisplay').show(1);
            $('#sixteenByteIncrementAmtDisplay').delay(1000);
            $('#sixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (thirtytwoByteBank > 0) {
            autoIncrement32Byte = Math.round(100 * Math.random() * 5242.88) / 100;
            $('#thirtytwoByteIncrementAmtDisplay').html('+ $' + (autoIncrement32Byte * thirtytwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#thirtytwoByteIncrementAmtDisplay').show(1);
            $('#thirtytwoByteIncrementAmtDisplay').delay(1000);
            $('#thirtytwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (sixtyfourByteBank > 0) {
            autoIncrement64Byte = Math.round(100 * Math.random() * 10485.76) / 100;
            $('#sixtyfourByteIncrementAmtDisplay').html('+ $' + (autoIncrement64Byte * sixtyfourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixtyfourByteIncrementAmtDisplay').show(1);
            $('#sixtyfourByteIncrementAmtDisplay').delay(1000);
            $('#sixtyfourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (oneTwentyEightByteBank > 0) {
            autoIncrement128Byte = Math.round(100 * Math.random() * 20971.52) / 100;
            $('#oneTwentyEightByteIncrementAmtDisplay').html('+ $' + (autoIncrement128Byte * oneTwentyEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#oneTwentyEightByteIncrementAmtDisplay').show(1);
            $('#oneTwentyEightByteIncrementAmtDisplay').delay(1000);
            $('#oneTwentyEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (twoFiftySixByteBank > 0) {
            autoIncrement256Byte = Math.round(100 * Math.random() * 41943.04) / 100;
            $('#twoFiftySixByteIncrementAmtDisplay').html('+ $' + (autoIncrement256Byte * twoFiftySixByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoFiftySixByteIncrementAmtDisplay').show(1);
            $('#twoFiftySixByteIncrementAmtDisplay').delay(1000);
            $('#twoFiftySixByteIncrementAmtDisplay').fadeOut(500);
        }

        if (fiveTwelveByteBank > 0) {
            autoIncrement512Byte = Math.round(100 * Math.random() * 83886.08) / 100;
            $('#fiveTwelveByteIncrementAmtDisplay').html('+ $' + (autoIncrement512Byte * fiveTwelveByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fiveTwelveByteIncrementAmtDisplay').show(1);
            $('#fiveTwelveByteIncrementAmtDisplay').delay(1000);
            $('#fiveTwelveByteIncrementAmtDisplay').fadeOut(500);
        }

        if (oneKBBank > 0) {
            autoIncrement1KB = Math.round(100 * Math.random() * 167772.16) / 100;
            $('#oneKBIncrementAmtDisplay').html('+ $' + (autoIncrement1KB * oneKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#oneKBIncrementAmtDisplay').show(1);
            $('#oneKBIncrementAmtDisplay').delay(1000);
            $('#oneKBIncrementAmtDisplay').fadeOut(500);
        }

        if (twoKBBank > 0) {
            autoIncrement2KB = Math.round(100 * Math.random() * 335544.32) / 100;
            $('#twoKBIncrementAmtDisplay').html('+ $' + (autoIncrement2KB * twoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoKBIncrementAmtDisplay').show(1);
            $('#twoKBIncrementAmtDisplay').delay(1000);
            $('#twoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (fourKBBank > 0) {
            autoIncrement4KB = Math.round(100 * Math.random() * 335544.32) / 100;
            $('#fourKBIncrementAmtDisplay').html('+ $' + (autoIncrement4KB * fourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourKBIncrementAmtDisplay').show(1);
            $('#fourKBIncrementAmtDisplay').delay(1000);
            $('#fourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (eightKBBank > 0) {
            autoIncrement8KB = Math.round(100 * Math.random() * 671088.64) / 100;
            $('#eightKBIncrementAmtDisplay').html('+ $' + (autoIncrement8KB * eightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightKBIncrementAmtDisplay').show(1);
            $('#eightKBIncrementAmtDisplay').delay(1000);
            $('#eightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenKBBank > 0) {
            autoIncrement16KB = Math.round(100 * Math.random() * 1342177.28) / 100;
            $('#sixteenKBIncrementAmtDisplay').html('+ $' + (autoIncrement16KB * sixteenKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenKBIncrementAmtDisplay').show(1);
            $('#sixteenKBIncrementAmtDisplay').delay(1000);
            $('#sixteenKBIncrementAmtDisplay').fadeOut(500);
        }

        if (thirtyTwoKBBank > 0) {
            autoIncrement32KB = Math.round(100 * Math.random() * 2684354.56) / 100;
            $('#thirtyTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrement32KB * thirtyTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#thirtyTwoKBIncrementAmtDisplay').show(1);
            $('#thirtyTwoKBIncrementAmtDisplay').delay(1000);
            $('#thirtyTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (sixtyFourKBBank > 0) {
            autoIncrement64KB = Math.round(100 * Math.random() * 5368709.12) / 100;
            $('#sixtyFourKBIncrementAmtDisplay').html('+ $' + (autoIncrement64KB * sixtyFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixtyFourKBIncrementAmtDisplay').show(1);
            $('#sixtyFourKBIncrementAmtDisplay').delay(1000);
            $('#sixtyFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (oneTwentyEightKBBank > 0) {
            autoIncrement128KB = Math.round(100 * Math.random() * 10737418.24) / 100;
            $('#oneTwentyEightKBIncrementAmtDisplay').html('+ $' + (autoIncrement128KB * oneTwentyEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#oneTwentyEightKBIncrementAmtDisplay').show(1);
            $('#oneTwentyEightKBIncrementAmtDisplay').delay(1000);
            $('#oneTwentyEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (twoFiftySixKBBank > 0) {
            autoIncrement256KB = Math.round(100 * Math.random() * 21474836.48) / 100;
            $('#twoFiftySixKBIncrementAmtDisplay').html('+ $' + (autoIncrement256KB * twoFiftySixKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoFiftySixKBIncrementAmtDisplay').show(1);
            $('#twoFiftySixKBIncrementAmtDisplay').delay(1000);
            $('#twoFiftySixKBIncrementAmtDisplay').fadeOut(500);
        }

        if (fiveTwelveKBBank > 0) {
            autoIncrement512KB = Math.round(100 * Math.random() * 42949672.96) / 100;
            $('#fiveTwelveKBIncrementAmtDisplay').html('+ $' + (autoIncrement512KB * fiveTwelveKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fiveTwelveKBIncrementAmtDisplay').show(1);
            $('#fiveTwelveKBIncrementAmtDisplay').delay(1000);
            $('#fiveTwelveKBIncrementAmtDisplay').fadeOut(500);
        }

        if (oneMBBank > 0) {
            autoIncrement1MB = Math.round(100 * Math.random() * 85899345.92) / 100;
            $('#oneMBIncrementAmtDisplay').html('+ $' + (autoIncrement1MB * oneMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#oneMBIncrementAmtDisplay').show(1);
            $('#oneMBIncrementAmtDisplay').delay(1000);
            $('#oneMBIncrementAmtDisplay').fadeOut(500);
        }

        if (twoMBBank > 0) {
            autoIncrement2MB = Math.round(100 * Math.random() * 171798691.84) / 100;
            $('#twoMBIncrementAmtDisplay').html('+ $' + (autoIncrement2MB * twoMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoMBIncrementAmtDisplay').show(1);
            $('#twoMBIncrementAmtDisplay').delay(1000);
            $('#twoMBIncrementAmtDisplay').fadeOut(500);
        }

        if (fourMBBank > 0) {
            autoIncrement4MB = Math.round(100 * Math.random() * 343597383.68) / 100;
            $('#fourMBIncrementAmtDisplay').html('+ $' + (autoIncrement4MB * fourMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourMBIncrementAmtDisplay').show(1);
            $('#fourMBIncrementAmtDisplay').delay(1000);
            $('#fourMBIncrementAmtDisplay').fadeOut(500);
        }

        if (eightMBBank > 0) {
            autoIncrement8MB = Math.round(100 * Math.random() * 687194767.36) / 100;
            $('#eightMBIncrementAmtDisplay').html('+ $' + (autoIncrement8MB * eightMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightMBIncrementAmtDisplay').show(1);
            $('#eightMBIncrementAmtDisplay').delay(1000);
            $('#eightMBIncrementAmtDisplay').fadeOut(500);
        }

        if (sixteenMBBank > 0) {
            autoIncrement16MB = Math.round(100 * Math.random() * 1374389534.72) / 100;
            $('#sixteenMBIncrementAmtDisplay').html('+ $' + (autoIncrement16MB * sixteenMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenMBIncrementAmtDisplay').show(1);
            $('#sixteenMBIncrementAmtDisplay').delay(1000);
            $('#sixteenMBIncrementAmtDisplay').fadeOut(500);
        }

        // //

        // RUSTEC //

        if (russianSixBitBank > 0) {
            autoIncrementRussian6Bit = (Math.round(100 * (Math.random()) * 0.32) / 100) * 1.16;
            $('#russianSixBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian6Bit * russianSixBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixBitIncrementAmtDisplay').show(1);
            $('#russianSixBitIncrementAmtDisplay').delay(1000);
            $('#russianSixBitIncrementAmtDisplay').fadeOut(500);
        }

        if (russianTwelveBitBank > 0) {
            autoIncrementRussian12Bit = (Math.round(100 * Math.random() * 20.48) / 100) * 1.16;
            $('#russianTwelveBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian12Bit * russianTwelveBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianTwelveBitIncrementAmtDisplay').show(1);
            $('#russianTwelveBitIncrementAmtDisplay').delay(1000);
            $('#russianTwelveBitIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixteenBitBank > 0) {
            autoIncrementRussian16Bit = (Math.round(100 * Math.random() * 327.68) / 100) * 1.16;
            $('#russianSixteenBitIncrementAmtDisplay').html('+ $' + (autoIncrementRussian16Bit * russianSixteenBitBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixteenBitIncrementAmtDisplay').show(1);
            $('#russianSixteenBitIncrementAmtDisplay').delay(1000);
            $('#russianSixteenBitIncrementAmtDisplay').fadeOut(500);
        }

        if (russianFourByteBank > 0) {
            autoIncrementRussian4Byte = (Math.round(100 * Math.random() * 655.36) / 100) * 1.16;
            $('#russianFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian4Byte * russianFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianFourByteIncrementAmtDisplay').show(1);
            $('#russianFourByteIncrementAmtDisplay').delay(1000);
            $('#russianFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianEightByteBank > 0) {
            autoIncrementRussian8Byte = (Math.round(100 * Math.random() * 1310.72) / 100) * 1.16;
            $('#russianEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian8Byte * russianEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianEightByteIncrementAmtDisplay').show(1);
            $('#russianEightByteIncrementAmtDisplay').delay(1000);
            $('#russianEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixteenByteBank > 0) {
            autoIncrementRussian16Byte = (Math.round(100 * Math.random() * 2621.44) / 100) * 1.16;
            $('#russianSixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian16Byte * russianSixteenByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixteenByteIncrementAmtDisplay').show(1);
            $('#russianSixteenByteIncrementAmtDisplay').delay(1000);
            $('#russianSixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianThirtyTwoByteBank > 0) {
            autoIncrementRussian32Byte = (Math.round(100 * Math.random() * 5242.88) / 100) * 1.16;
            $('#russianThirtyTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian32Byte * russianThirtyTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianThirtyTwoByteIncrementAmtDisplay').show(1);
            $('#russianThirtyTwoByteIncrementAmtDisplay').delay(1000);
            $('#russianThirtyTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixtyFourByteBank > 0) {
            autoIncrementRussian64Byte = (Math.round(100 * Math.random() * 10485.76) / 100) * 1.16;
            $('#russianSixtyFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian64Byte * russianSixtyFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixtyFourByteIncrementAmtDisplay').show(1);
            $('#russianSixtyFourByteIncrementAmtDisplay').delay(1000);
            $('#russianSixtyFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianOneTwentyEightByteBank > 0) {
            autoIncrementRussian128Byte = (Math.round(100 * Math.random() * 20971.52) / 100) * 1.16;
            $('#russianOneTwentyEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian128Byte * russianOneTwentyEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianOneTwentyEightByteIncrementAmtDisplay').show(1);
            $('#russianOneTwentyEightByteIncrementAmtDisplay').delay(1000);
            $('#russianOneTwentyEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianTwoFiftySixByteBank > 0) {
            autoIncrementRussian256Byte = (Math.round(100 * Math.random() * 41943.04) / 100) * 1.16;
            $('#russianTwoFiftySixByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian256Byte * russianTwoFiftySixByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianTwoFiftySixByteIncrementAmtDisplay').show(1);
            $('#russianTwoFiftySixByteIncrementAmtDisplay').delay(1000);
            $('#russianTwoFiftySixByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianFiveTwelveByteBank > 0) {
            autoIncrementRussian512Byte = (Math.round(100 * Math.random() * 83886.08) / 100) * 1.16;
            $('#russianFiveTwelveByteIncrementAmtDisplay').html('+ $' + (autoIncrementRussian512Byte * russianFiveTwelveByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianFiveTwelveByteIncrementAmtDisplay').show(1);
            $('#russianFiveTwelveByteIncrementAmtDisplay').delay(1000);
            $('#russianFiveTwelveByteIncrementAmtDisplay').fadeOut(500);
        }

        if (russianOneKBBank > 0) {
            autoIncrementRussian1KB = (Math.round(100 * Math.random() * 167772.16) / 100) * 1.16;
            $('#russianOneKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian1KB * russianOneKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianOneKBIncrementAmtDisplay').show(1);
            $('#russianOneKBIncrementAmtDisplay').delay(1000);
            $('#russianOneKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianTwoKBBank > 0) {
            autoIncrementRussian2KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 1.16;
            $('#russianTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian2KB * russianTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianTwoKBIncrementAmtDisplay').show(1);
            $('#russianTwoKBIncrementAmtDisplay').delay(1000);
            $('#russianTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianFourKBBank > 0) {
            autoIncrementRussian4KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 1.16;
            $('#russianFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian4KB * russianFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianFourKBIncrementAmtDisplay').show(1);
            $('#russianFourKBIncrementAmtDisplay').delay(1000);
            $('#russianFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianEightKBBank > 0) {
            autoIncrementRussian8KB = (Math.round(100 * Math.random() * 671088.64) / 100) * 1.16;
            $('#russianEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian8KB * russianEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianEightKBIncrementAmtDisplay').show(1);
            $('#russianEightKBIncrementAmtDisplay').delay(1000);
            $('#russianEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixteenKBBank > 0) {
            autoIncrementRussian16KB = (Math.round(100 * Math.random() * 1342177.28) / 100) * 1.16;
            $('#russianSixteenKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian16KB * russianSixteenKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixteenKBIncrementAmtDisplay').show(1);
            $('#russianSixteenKBIncrementAmtDisplay').delay(1000);
            $('#russianSixteenKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianThirtyTwoKBBank > 0) {
            autoIncrementRussian32KB = (Math.round(100 * Math.random() * 2684354.56) / 100) * 1.16;
            $('#russianThirtyTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian32KB * russianThirtyTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianThirtyTwoKBIncrementAmtDisplay').show(1);
            $('#russianThirtyTwoKBIncrementAmtDisplay').delay(1000);
            $('#russianThirtyTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixtyFourKBBank > 0) {
            autoIncrementRussian64KB = (Math.round(100 * Math.random() * 5368709.12) / 100) * 1.16;
            $('#russianSixtyFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian64KB * russianSixtyFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixtyFourKBIncrementAmtDisplay').show(1);
            $('#russianSixtyFourKBIncrementAmtDisplay').delay(1000);
            $('#russianSixtyFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianOneTwentyEightKBBank > 0) {
            autoIncrementRussian128KB = (Math.round(100 * Math.random() * 10737418.24) / 100) * 1.16;
            $('#russianOneTwentyEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian128KB * russianOneTwentyEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianOneTwentyEightKBIncrementAmtDisplay').show(1);
            $('#russianOneTwentyEightKBIncrementAmtDisplay').delay(1000);
            $('#russianOneTwentyEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianTwoFiftySixKBBank > 0) {
            autoIncrementRussian256KB = (Math.round(100 * Math.random() * 21474836.48) / 100) * 1.16;
            $('#russianTwoFiftySixKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian256KB * russianTwoFiftySixKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianTwoFiftySixKBIncrementAmtDisplay').show(1);
            $('#russianTwoFiftySixKBIncrementAmtDisplay').delay(1000);
            $('#russianTwoFiftySixKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianFiveTwelveKBBank > 0) {
            autoIncrementRussian512KB = (Math.round(100 * Math.random() * 42949672.96) / 100) * 1.16;
            $('#russianFiveTwelveKBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian512KB * russianFiveTwelveKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianFiveTwelveKBIncrementAmtDisplay').show(1);
            $('#russianFiveTwelveKBIncrementAmtDisplay').delay(1000);
            $('#russianFiveTwelveKBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianOneMBBank > 0) {
            autoIncrementRussian1MB = (Math.round(100 * Math.random() * 85899345.92) / 100) * 1.16;
            $('#russianOneMBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian1MB * russianOneMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianOneMBIncrementAmtDisplay').show(1);
            $('#russianOneMBIncrementAmtDisplay').delay(1000);
            $('#russianOneMBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianTwoMBBank > 0) {
            autoIncrementRussian2MB = (Math.round(100 * Math.random() * 171798691.84) / 100) * 1.16;
            $('#russianTwoMBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian2MB * russianTwoMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianTwoMBIncrementAmtDisplay').show(1);
            $('#russianTwoMBIncrementAmtDisplay').delay(1000);
            $('#russianTwoMBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianFourMBBank > 0) {
            autoIncrementRussian4MB = (Math.round(100 * Math.random() * 343597383.68) / 100) * 1.16;
            $('#russianFourMBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian4MB * russianFourMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianFourMBIncrementAmtDisplay').show(1);
            $('#russianFourMBIncrementAmtDisplay').delay(1000);
            $('#russianFourMBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianEightMBBank > 0) {
            autoIncrementRussian8MB = (Math.round(100 * Math.random() * 687194767.36) / 100) * 1.16;
            $('#russianEightMBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian8MB * russianEightMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianEightMBIncrementAmtDisplay').show(1);
            $('#russianEightMBIncrementAmtDisplay').delay(1000);
            $('#russianEightMBIncrementAmtDisplay').fadeOut(500);
        }

        if (russianSixteenMBBank > 0) {
            autoIncrementRussian16MB = (Math.round(100 * Math.random() * 1374389534.72) / 100) * 1.16;
            $('#russianSixteenMBIncrementAmtDisplay').html('+ $' + (autoIncrementRussian16MB * russianSixteenMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixteenMBIncrementAmtDisplay').show(1);
            $('#russianSixteenMBIncrementAmtDisplay').delay(1000);
            $('#russianSixteenMBIncrementAmtDisplay').fadeOut(500);
        }

        //viper
        if (vipersecOneByteBank > 0) {
            autoIncrementVipersec1Byte = (Math.round(100 * Math.random() * 163.84) / 100);
            $('#vipersecOneByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec1Byte * vipersecOneByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneByteIncrementAmtDisplay').show(1);
            $('#vipersecOneByteIncrementAmtDisplay').delay(1000);
            $('#vipersecOneByteIncrementAmtDisplay').fadeOut(500);
        }
        if (vipersecTwoByteBank > 0) {
            autoIncrementVipersec2Byte = (Math.round(100 * Math.random() * 327.68) / 100);
            $('#vipersecTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec2Byte * vipersecTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoByteIncrementAmtDisplay').show(1);
            $('#vipersecTwoByteIncrementAmtDisplay').delay(1000);
            $('#vipersecTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecFourByteBank > 0) {
            autoIncrementVipersec4Byte = (Math.round(100 * Math.random() * 655.36) / 100);
            $('#vipersecFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec4Byte * vipersecFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecFourByteIncrementAmtDisplay').show(1);
            $('#vipersecFourByteIncrementAmtDisplay').delay(1000);
            $('#vipersecFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecEightByteBank > 0) {
            autoIncrementVipersec8Byte = (Math.round(100 * Math.random() * 1310.72) / 100);
            $('#vipersecEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec8Byte * vipersecEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecEightByteIncrementAmtDisplay').show(1);
            $('#vipersecEightByteIncrementAmtDisplay').delay(1000);
            $('#vipersecEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecSixteenByteBank > 0) {
            autoIncrementVipersec16Byte = (Math.round(100 * Math.random() * 2621.44) / 100);
            $('#vipersecSixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec16Byte * vipersecSixteenByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecSixteenByteIncrementAmtDisplay').show(1);
            $('#vipersecSixteenByteIncrementAmtDisplay').delay(1000);
            $('#vipersecSixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecThirtyTwoByteBank > 0) {
            autoIncrementVipersec32Byte = (Math.round(100 * Math.random() * 5242.88) / 100);
            $('#vipersecThirtyTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec32Byte * vipersecThirtyTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecThirtyTwoByteIncrementAmtDisplay').show(1);
            $('#vipersecThirtyTwoByteIncrementAmtDisplay').delay(1000);
            $('#vipersecThirtyTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecSixtyFourByteBank > 0) {
            autoIncrementVipersec64Byte = (Math.round(100 * Math.random() * 10485.76) / 100);
            $('#vipersecSixtyFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec64Byte * vipersecSixtyFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecSixtyFourByteIncrementAmtDisplay').show(1);
            $('#vipersecSixtyFourByteIncrementAmtDisplay').delay(1000);
            $('#vipersecSixtyFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecOneTwentyEightByteBank > 0) {
            autoIncrementVipersec128Byte = (Math.round(100 * Math.random() * 20971.52) / 100);
            $('#vipersecOneTwentyEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec128Byte * vipersecOneTwentyEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneTwentyEightByteIncrementAmtDisplay').show(1);
            $('#vipersecOneTwentyEightByteIncrementAmtDisplay').delay(1000);
            $('#vipersecOneTwentyEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecTwoFiftySixByteBank > 0) {
            autoIncrementVipersec256Byte = (Math.round(100 * Math.random() * 41943.04) / 100);
            $('#vipersecTwoFiftySixByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec256Byte * vipersecTwoFiftySixByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoFiftySixByteIncrementAmtDisplay').show(1);
            $('#vipersecTwoFiftySixByteIncrementAmtDisplay').delay(1000);
            $('#vipersecTwoFiftySixByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecFiveTwelveByteBank > 0) {
            autoIncrementVipersec512Byte = (Math.round(100 * Math.random() * 83886.08) / 100);
            $('#vipersecFiveTwelveByteIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec512Byte * vipersecFiveTwelveByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecFiveTwelveByteIncrementAmtDisplay').show(1);
            $('#vipersecFiveTwelveByteIncrementAmtDisplay').delay(1000);
            $('#vipersecFiveTwelveByteIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecOneKBBank > 0) {
            autoIncrementVipersec1KB = (Math.round(100 * Math.random() * 167772.16) / 100);
            $('#vipersecOneKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec1KB * vipersecOneKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneKBIncrementAmtDisplay').show(1);
            $('#vipersecOneKBIncrementAmtDisplay').delay(1000);
            $('#vipersecOneKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecTwoKBBank > 0) {
            autoIncrementVipersec2KB = (Math.round(100 * Math.random() * 335544.32) / 100);
            $('#vipersecTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec2KB * vipersecTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoKBIncrementAmtDisplay').show(1);
            $('#vipersecTwoKBIncrementAmtDisplay').delay(1000);
            $('#vipersecTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecFourKBBank > 0) {
            autoIncrementVipersec4KB = (Math.round(100 * Math.random() * 335544.32) / 100);
            $('#vipersecFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec4KB * vipersecFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecFourKBIncrementAmtDisplay').show(1);
            $('#vipersecFourKBIncrementAmtDisplay').delay(1000);
            $('#vipersecFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecEightKBBank > 0) {
            autoIncrementVipersec8KB = (Math.round(100 * Math.random() * 671088.64) / 100);
            $('#vipersecEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec8KB * vipersecEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecEightKBIncrementAmtDisplay').show(1);
            $('#vipersecEightKBIncrementAmtDisplay').delay(1000);
            $('#vipersecEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecSixteenKBBank > 0) {
            autoIncrementVipersec16KB = (Math.round(100 * Math.random() * 1342177.28) / 100);
            $('#vipersecSixteenKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec16KB * vipersecSixteenKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecSixteenKBIncrementAmtDisplay').show(1);
            $('#vipersecSixteenKBIncrementAmtDisplay').delay(1000);
            $('#vipersecSixteenKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecThirtyTwoKBBank > 0) {
            autoIncrementVipersec32KB = (Math.round(100 * Math.random() * 2684354.56) / 100);
            $('#vipersecThirtyTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec32KB * vipersecThirtyTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecThirtyTwoKBIncrementAmtDisplay').show(1);
            $('#vipersecThirtyTwoKBIncrementAmtDisplay').delay(1000);
            $('#vipersecThirtyTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecSixtyFourKBBank > 0) {
            autoIncrementVipersec64KB = (Math.round(100 * Math.random() * 5368709.12) / 100);
            $('#vipersecSixtyFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec64KB * vipersecSixtyFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecSixtyFourKBIncrementAmtDisplay').show(1);
            $('#vipersecSixtyFourKBIncrementAmtDisplay').delay(1000);
            $('#vipersecSixtyFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecOneTwentyEightKBBank > 0) {
            autoIncrementVipersec128KB = (Math.round(100 * Math.random() * 10737418.24) / 100);
            $('#vipersecOneTwentyEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec128KB * vipersecOneTwentyEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneTwentyEightKBIncrementAmtDisplay').show(1);
            $('#vipersecOneTwentyEightKBIncrementAmtDisplay').delay(1000);
            $('#vipersecOneTwentyEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecTwoFiftySixKBBank > 0) {
            autoIncrementVipersec256KB = (Math.round(100 * Math.random() * 21474836.48) / 100);
            $('#vipersecTwoFiftySixKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec256KB * vipersecTwoFiftySixKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoFiftySixKBIncrementAmtDisplay').show(1);
            $('#vipersecTwoFiftySixKBIncrementAmtDisplay').delay(1000);
            $('#vipersecTwoFiftySixKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecFiveTwelveKBBank > 0) {
            autoIncrementVipersec512KB = (Math.round(100 * Math.random() * 42949672.96) / 100);
            $('#vipersecFiveTwelveKBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec512KB * vipersecFiveTwelveKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecFiveTwelveKBIncrementAmtDisplay').show(1);
            $('#vipersecFiveTwelveKBIncrementAmtDisplay').delay(1000);
            $('#vipersecFiveTwelveKBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecOneMBBank > 0) {
            autoIncrementVipersec1MB = (Math.round(100 * Math.random() * 85899345.92) / 100);
            $('#vipersecOneMBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec1MB * vipersecOneMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneMBIncrementAmtDisplay').show(1);
            $('#vipersecOneMBIncrementAmtDisplay').delay(1000);
            $('#vipersecOneMBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecTwoMBBank > 0) {
            autoIncrementVipersec2MB = (Math.round(100 * Math.random() * 171798691.84) / 100);
            $('#vipersecTwoMBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec2MB * vipersecTwoMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoMBIncrementAmtDisplay').show(1);
            $('#vipersecTwoMBIncrementAmtDisplay').delay(1000);
            $('#vipersecTwoMBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecFourMBBank > 0) {
            autoIncrementVipersec4MB = (Math.round(100 * Math.random() * 343597383.68) / 100);
            $('#vipersecFourMBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec4MB * vipersecFourMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecFourMBIncrementAmtDisplay').show(1);
            $('#vipersecFourMBIncrementAmtDisplay').delay(1000);
            $('#vipersecFourMBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecEightMBBank > 0) {
            autoIncrementVipersec8MB = (Math.round(100 * Math.random() * 687194767.36) / 100);
            $('#vipersecEightMBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec8MB * vipersecEightMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecEightMBIncrementAmtDisplay').show(1);
            $('#vipersecEightMBIncrementAmtDisplay').delay(1000);
            $('#vipersecEightMBIncrementAmtDisplay').fadeOut(500);
        }

        if (vipersecSixteenMBBank > 0) {
            autoIncrementVipersec16MB = (Math.round(100 * Math.random() * 1374389534.72) / 100);
            $('#vipersecSixteenMBIncrementAmtDisplay').html('+ $' + (autoIncrementVipersec16MB * vipersecSixteenMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecSixteenMBIncrementAmtDisplay').show(1);
            $('#vipersecSixteenMBIncrementAmtDisplay').delay(1000);
            $('#vipersecSixteenMBIncrementAmtDisplay').fadeOut(500);
        }

        //chimera
        if (chimerasecOneByteBank > 0) {
            autoIncrementChimerasec1Byte = (Math.round(100 * Math.random() * 163.84) / 100) * 0.64;
            $('#chimerasecOneByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec1Byte * chimerasecOneByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOneByteIncrementAmtDisplay').show(1);
            $('#chimerasecOneByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecOneByteIncrementAmtDisplay').fadeOut(500);
        }
        if (chimerasecTwoByteBank > 0) {
            autoIncrementChimerasec2Byte = (Math.round(100 * Math.random() * 327.68) / 100) * 0.64;
            $('#chimerasecTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec2Byte * chimerasecTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecTwoByteIncrementAmtDisplay').show(1);
            $('#chimerasecTwoByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecFourByteBank > 0) {
            autoIncrementChimerasec4Byte = (Math.round(100 * Math.random() * 655.36) / 100) * 0.64;
            $('#chimerasecFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec4Byte * chimerasecFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecFourByteIncrementAmtDisplay').show(1);
            $('#chimerasecFourByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecEightByteBank > 0) {
            autoIncrementChimerasec8Byte = (Math.round(100 * Math.random() * 1310.72) / 100) * 0.64;
            $('#chimerasecEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec8Byte * chimerasecEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecEightByteIncrementAmtDisplay').show(1);
            $('#chimerasecEightByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecSixteenByteBank > 0) {
            autoIncrementChimerasec16Byte = (Math.round(100 * Math.random() * 2621.44) / 100) * 0.64;
            $('#chimerasecSixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec16Byte * chimerasecSixteenByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecSixteenByteIncrementAmtDisplay').show(1);
            $('#chimerasecSixteenByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecSixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecThirtyTwoByteBank > 0) {
            autoIncrementChimerasec32Byte = (Math.round(100 * Math.random() * 5242.88) / 100) * 0.64;
            $('#chimerasecThirtyTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec32Byte * chimerasecThirtyTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecThirtyTwoByteIncrementAmtDisplay').show(1);
            $('#chimerasecThirtyTwoByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecThirtyTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecSixtyFourByteBank > 0) {
            autoIncrementChimerasec64Byte = (Math.round(100 * Math.random() * 10485.76) / 100) * 0.64;
            $('#chimerasecSixtyFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec64Byte * chimerasecSixtyFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecSixtyFourByteIncrementAmtDisplay').show(1);
            $('#chimerasecSixtyFourByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecSixtyFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecOneTwentyEightByteBank > 0) {
            autoIncrementChimerasec128Byte = (Math.round(100 * Math.random() * 20971.52) / 100) * 0.64;
            $('#chimerasecOneTwentyEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec128Byte * chimerasecOneTwentyEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOneTwentyEightByteIncrementAmtDisplay').show(1);
            $('#chimerasecOneTwentyEightByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecOneTwentyEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecTwoFiftySixByteBank > 0) {
            autoIncrementChimerasec256Byte = (Math.round(100 * Math.random() * 41943.04) / 100) * 0.64;
            $('#chimerasecTwoFiftySixByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec256Byte * chimerasecTwoFiftySixByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecTwoFiftySixByteIncrementAmtDisplay').show(1);
            $('#chimerasecTwoFiftySixByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecTwoFiftySixByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecFiveTwelveByteBank > 0) {
            autoIncrementChimerasec512Byte = (Math.round(100 * Math.random() * 83886.08) / 100) * 0.64;
            $('#chimerasecFiveTwelveByteIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec512Byte * chimerasecFiveTwelveByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecFiveTwelveByteIncrementAmtDisplay').show(1);
            $('#chimerasecFiveTwelveByteIncrementAmtDisplay').delay(1000);
            $('#chimerasecFiveTwelveByteIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecOneKBBank > 0) {
            autoIncrementChimerasec1KB = (Math.round(100 * Math.random() * 167772.16) / 100) * 0.64;
            $('#chimerasecOneKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec1KB * chimerasecOneKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOneKBIncrementAmtDisplay').show(1);
            $('#chimerasecOneKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecOneKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecTwoKBBank > 0) {
            autoIncrementChimerasec2KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 0.64;
            $('#chimerasecTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec2KB * chimerasecTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecTwoKBIncrementAmtDisplay').show(1);
            $('#chimerasecTwoKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecFourKBBank > 0) {
            autoIncrementChimerasec4KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 0.64;
            $('#chimerasecFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec4KB * chimerasecFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecFourKBIncrementAmtDisplay').show(1);
            $('#chimerasecFourKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecEightKBBank > 0) {
            autoIncrementChimerasec8KB = (Math.round(100 * Math.random() * 671088.64) / 100) * 0.64;
            $('#chimerasecEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec8KB * chimerasecEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecEightKBIncrementAmtDisplay').show(1);
            $('#chimerasecEightKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecSixteenKBBank > 0) {
            autoIncrementChimerasec16KB = (Math.round(100 * Math.random() * 1342177.28) / 100) * 0.64;
            $('#chimerasecSixteenKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec16KB * chimerasecSixteenKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecSixteenKBIncrementAmtDisplay').show(1);
            $('#chimerasecSixteenKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecSixteenKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecThirtyTwoKBBank > 0) {
            autoIncrementChimerasec32KB = (Math.round(100 * Math.random() * 2684354.56) / 100) * 0.64;
            $('#chimerasecThirtyTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec32KB * chimerasecThirtyTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecThirtyTwoKBIncrementAmtDisplay').show(1);
            $('#chimerasecThirtyTwoKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecThirtyTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecSixtyFourKBBank > 0) {
            autoIncrementChimerasec64KB = (Math.round(100 * Math.random() * 5368709.12) / 100) * 0.64;
            $('#chimerasecSixtyFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec64KB * chimerasecSixtyFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecSixtyFourKBIncrementAmtDisplay').show(1);
            $('#chimerasecSixtyFourKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecSixtyFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecOneTwentyEightKBBank > 0) {
            autoIncrementChimerasec128KB = (Math.round(100 * Math.random() * 10737418.24) / 100) * 0.64;
            $('#chimerasecOneTwentyEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec128KB * chimerasecOneTwentyEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOneTwentyEightKBIncrementAmtDisplay').show(1);
            $('#chimerasecOneTwentyEightKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecOneTwentyEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecTwoFiftySixKBBank > 0) {
            autoIncrementChimerasec256KB = (Math.round(100 * Math.random() * 21474836.48) / 100) * 0.64;
            $('#chimerasecTwoFiftySixKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec256KB * chimerasecTwoFiftySixKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecTwoFiftySixKBIncrementAmtDisplay').show(1);
            $('#chimerasecTwoFiftySixKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecTwoFiftySixKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecFiveTwelveKBBank > 0) {
            autoIncrementChimerasec512KB = (Math.round(100 * Math.random() * 42949672.96) / 100) * 0.64;
            $('#chimerasecFiveTwelveKBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec512KB * chimerasecFiveTwelveKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecFiveTwelveKBIncrementAmtDisplay').show(1);
            $('#chimerasecFiveTwelveKBIncrementAmtDisplay').delay(1000);
            $('#chimerasecFiveTwelveKBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecOneMBBank > 0) {
            autoIncrementChimerasec1MB = (Math.round(100 * Math.random() * 85899345.92) / 100) * 0.64;
            $('#chimerasecOneMBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec1MB * chimerasecOneMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecOneMBIncrementAmtDisplay').show(1);
            $('#chimerasecOneMBIncrementAmtDisplay').delay(1000);
            $('#chimerasecOneMBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecTwoMBBank > 0) {
            autoIncrementChimerasec2MB = (Math.round(100 * Math.random() * 171798691.84) / 100) * 0.64;
            $('#chimerasecTwoMBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec2MB * chimerasecTwoMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecTwoMBIncrementAmtDisplay').show(1);
            $('#chimerasecTwoMBIncrementAmtDisplay').delay(1000);
            $('#chimerasecTwoMBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecFourMBBank > 0) {
            autoIncrementChimerasec4MB = (Math.round(100 * Math.random() * 343597383.68) / 100) * 0.64;
            $('#chimerasecFourMBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec4MB * chimerasecFourMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecFourMBIncrementAmtDisplay').show(1);
            $('#chimerasecFourMBIncrementAmtDisplay').delay(1000);
            $('#chimerasecFourMBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecEightMBBank > 0) {
            autoIncrementChimerasec8MB = (Math.round(100 * Math.random() * 687194767.36) / 100) * 0.64;
            $('#chimerasecEightMBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec8MB * chimerasecEightMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecEightMBIncrementAmtDisplay').show(1);
            $('#chimerasecEightMBIncrementAmtDisplay').delay(1000);
            $('#chimerasecEightMBIncrementAmtDisplay').fadeOut(500);
        }

        if (chimerasecSixteenMBBank > 0) {
            autoIncrementChimerasec16MB = (Math.round(100 * Math.random() * 1374389534.72) / 100) * 0.64;
            $('#chimerasecSixteenMBIncrementAmtDisplay').html('+ $' + (autoIncrementChimerasec16MB * chimerasecSixteenMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#chimerasecSixteenMBIncrementAmtDisplay').show(1);
            $('#chimerasecSixteenMBIncrementAmtDisplay').delay(1000);
            $('#chimerasecSixteenMBIncrementAmtDisplay').fadeOut(500);
        }

        //griffon
        if (griffonBankOneByteBank > 0) {
            autoIncrementGriffonBank1Byte = (Math.round(100 * Math.random() * 163.84) / 100) * 1.32;
            $('#griffonBankOneByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank1Byte * griffonBankOneByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankOneByteIncrementAmtDisplay').show(1);
            $('#griffonBankOneByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankOneByteIncrementAmtDisplay').fadeOut(500);
        }
        if (griffonBankTwoByteBank > 0) {
            autoIncrementGriffonBank2Byte = (Math.round(100 * Math.random() * 327.68) / 100) * 1.32;
            $('#griffonBankTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank2Byte * griffonBankTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankTwoByteIncrementAmtDisplay').show(1);
            $('#griffonBankTwoByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankFourByteBank > 0) {
            autoIncrementGriffonBank4Byte = (Math.round(100 * Math.random() * 655.36) / 100) * 1.32;
            $('#griffonBankFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank4Byte * griffonBankFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankFourByteIncrementAmtDisplay').show(1);
            $('#griffonBankFourByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankEightByteBank > 0) {
            autoIncrementGriffonBank8Byte = (Math.round(100 * Math.random() * 1310.72) / 100) * 1.32;
            $('#griffonBankEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank8Byte * griffonBankEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankEightByteIncrementAmtDisplay').show(1);
            $('#griffonBankEightByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankSixteenByteBank > 0) {
            autoIncrementGriffonBank16Byte = (Math.round(100 * Math.random() * 2621.44) / 100) * 1.32;
            $('#griffonBankSixteenByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank16Byte * griffonBankSixteenByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankSixteenByteIncrementAmtDisplay').show(1);
            $('#griffonBankSixteenByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankSixteenByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankThirtyTwoByteBank > 0) {
            autoIncrementGriffonBank32Byte = (Math.round(100 * Math.random() * 5242.88) / 100) * 1.32;
            $('#griffonBankThirtyTwoByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank32Byte * griffonBankThirtyTwoByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankThirtyTwoByteIncrementAmtDisplay').show(1);
            $('#griffonBankThirtyTwoByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankThirtyTwoByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankSixtyFourByteBank > 0) {
            autoIncrementGriffonBank64Byte = (Math.round(100 * Math.random() * 10485.76) / 100) * 1.32;
            $('#griffonBankSixtyFourByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank64Byte * griffonBankSixtyFourByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankSixtyFourByteIncrementAmtDisplay').show(1);
            $('#griffonBankSixtyFourByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankSixtyFourByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankOneTwentyEightByteBank > 0) {
            autoIncrementGriffonBank128Byte = (Math.round(100 * Math.random() * 20971.52) / 100) * 1.32;
            $('#griffonBankOneTwentyEightByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank128Byte * griffonBankOneTwentyEightByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankOneTwentyEightByteIncrementAmtDisplay').show(1);
            $('#griffonBankOneTwentyEightByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankOneTwentyEightByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankTwoFiftySixByteBank > 0) {
            autoIncrementGriffonBank256Byte = (Math.round(100 * Math.random() * 41943.04) / 100) * 1.32;
            $('#griffonBankTwoFiftySixByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank256Byte * griffonBankTwoFiftySixByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankTwoFiftySixByteIncrementAmtDisplay').show(1);
            $('#griffonBankTwoFiftySixByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankTwoFiftySixByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankFiveTwelveByteBank > 0) {
            autoIncrementGriffonBank512Byte = (Math.round(100 * Math.random() * 83886.08) / 100) * 1.32;
            $('#griffonBankFiveTwelveByteIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank512Byte * griffonBankFiveTwelveByteBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankFiveTwelveByteIncrementAmtDisplay').show(1);
            $('#griffonBankFiveTwelveByteIncrementAmtDisplay').delay(1000);
            $('#griffonBankFiveTwelveByteIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankOneKBBank > 0) {
            autoIncrementGriffonBank1KB = (Math.round(100 * Math.random() * 167772.16) / 100) * 1.32;
            $('#griffonBankOneKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank1KB * griffonBankOneKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankOneKBIncrementAmtDisplay').show(1);
            $('#griffonBankOneKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankOneKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankTwoKBBank > 0) {
            autoIncrementGriffonBank2KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 1.32;
            $('#griffonBankTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank2KB * griffonBankTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankTwoKBIncrementAmtDisplay').show(1);
            $('#griffonBankTwoKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankFourKBBank > 0) {
            autoIncrementGriffonBank4KB = (Math.round(100 * Math.random() * 335544.32) / 100) * 1.32;
            $('#griffonBankFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank4KB * griffonBankFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankFourKBIncrementAmtDisplay').show(1);
            $('#griffonBankFourKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankEightKBBank > 0) {
            autoIncrementGriffonBank8KB = (Math.round(100 * Math.random() * 671088.64) / 100) * 1.32;
            $('#griffonBankEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank8KB * griffonBankEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankEightKBIncrementAmtDisplay').show(1);
            $('#griffonBankEightKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankSixteenKBBank > 0) {
            autoIncrementGriffonBank16KB = (Math.round(100 * Math.random() * 1342177.28) / 100) * 1.32;
            $('#griffonBankSixteenKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank16KB * griffonBankSixteenKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankSixteenKBIncrementAmtDisplay').show(1);
            $('#griffonBankSixteenKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankSixteenKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankThirtyTwoKBBank > 0) {
            autoIncrementGriffonBank32KB = (Math.round(100 * Math.random() * 2684354.56) / 100) * 1.32;
            $('#griffonBankThirtyTwoKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank32KB * griffonBankThirtyTwoKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankThirtyTwoKBIncrementAmtDisplay').show(1);
            $('#griffonBankThirtyTwoKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankThirtyTwoKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankSixtyFourKBBank > 0) {
            autoIncrementGriffonBank64KB = (Math.round(100 * Math.random() * 5368709.12) / 100) * 1.32;
            $('#griffonBankSixtyFourKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank64KB * griffonBankSixtyFourKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankSixtyFourKBIncrementAmtDisplay').show(1);
            $('#griffonBankSixtyFourKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankSixtyFourKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankOneTwentyEightKBBank > 0) {
            autoIncrementGriffonBank128KB = (Math.round(100 * Math.random() * 10737418.24) / 100) * 1.32;
            $('#griffonBankOneTwentyEightKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank128KB * griffonBankOneTwentyEightKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankOneTwentyEightKBIncrementAmtDisplay').show(1);
            $('#griffonBankOneTwentyEightKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankOneTwentyEightKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankTwoFiftySixKBBank > 0) {
            autoIncrementGriffonBank256KB = (Math.round(100 * Math.random() * 21474836.48) / 100) * 1.32;
            $('#griffonBankTwoFiftySixKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank256KB * griffonBankTwoFiftySixKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankTwoFiftySixKBIncrementAmtDisplay').show(1);
            $('#griffonBankTwoFiftySixKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankTwoFiftySixKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankFiveTwelveKBBank > 0) {
            autoIncrementGriffonBank512KB = (Math.round(100 * Math.random() * 42949672.96) / 100) * 1.32;
            $('#griffonBankFiveTwelveKBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank512KB * griffonBankFiveTwelveKBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankFiveTwelveKBIncrementAmtDisplay').show(1);
            $('#griffonBankFiveTwelveKBIncrementAmtDisplay').delay(1000);
            $('#griffonBankFiveTwelveKBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankOneMBBank > 0) {
            autoIncrementGriffonBank1MB = (Math.round(100 * Math.random() * 85899345.92) / 100) * 1.32;
            $('#griffonBankOneMBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank1MB * griffonBankOneMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankOneMBIncrementAmtDisplay').show(1);
            $('#griffonBankOneMBIncrementAmtDisplay').delay(1000);
            $('#griffonBankOneMBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankTwoMBBank > 0) {
            autoIncrementGriffonBank2MB = (Math.round(100 * Math.random() * 171798691.84) / 100) * 1.32;
            $('#griffonBankTwoMBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank2MB * griffonBankTwoMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankTwoMBIncrementAmtDisplay').show(1);
            $('#griffonBankTwoMBIncrementAmtDisplay').delay(1000);
            $('#griffonBankTwoMBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankFourMBBank > 0) {
            autoIncrementGriffonBank4MB = (Math.round(100 * Math.random() * 343597383.68) / 100) * 1.32;
            $('#griffonBankFourMBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank4MB * griffonBankFourMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankFourMBIncrementAmtDisplay').show(1);
            $('#griffonBankFourMBIncrementAmtDisplay').delay(1000);
            $('#griffonBankFourMBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankEightMBBank > 0) {
            autoIncrementGriffonBank8MB = (Math.round(100 * Math.random() * 687194767.36) / 100) * 1.32;
            $('#griffonBankEightMBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank8MB * griffonBankEightMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankEightMBIncrementAmtDisplay').show(1);
            $('#griffonBankEightMBIncrementAmtDisplay').delay(1000);
            $('#griffonBankEightMBIncrementAmtDisplay').fadeOut(500);
        }

        if (griffonBankSixteenMBBank > 0) {
            autoIncrementGriffonBank16MB = (Math.round(100 * Math.random() * 1374389534.72) / 100) * 1.32;
            $('#griffonBankSixteenMBIncrementAmtDisplay').html('+ $' + (autoIncrementGriffonBank16MB * griffonBankSixteenMBBank).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#griffonBankSixteenMBIncrementAmtDisplay').show(1);
            $('#griffonBankSixteenMBIncrementAmtDisplay').delay(1000);
            $('#griffonBankSixteenMBIncrementAmtDisplay').fadeOut(500);
        }
        
        autoIncrementTotalDelsec = autoIncrement2Bit * twoBitBank
            + autoIncrement * threeBitBank
            + autoIncrement2s * fourBitBank
            + autoIncrement6Bit * sixBitBank
            + autoIncrement8Bit * eightBitBank
            + autoIncrement12Bit * twelveBitBank
            + autoIncrement16Bit * sixteenBitBank
            + autoIncrement4Byte * fourByteBank
            + autoIncrement8Byte * eightByteBank
            + autoIncrement16Byte * sixteenByteBank
            + autoIncrement32Byte * thirtytwoByteBank
            + autoIncrement64Byte * sixtyfourByteBank
            + autoIncrement128Byte * oneTwentyEightByteBank
            + autoIncrement256Byte * twoFiftySixByteBank
            + autoIncrement512Byte * fiveTwelveByteBank
            + autoIncrement1KB * oneKBBank
            + autoIncrement2KB * twoKBBank
            + autoIncrement4KB * fourKBBank
            + autoIncrement8KB * eightKBBank
            + autoIncrement16KB * sixteenKBBank
            + autoIncrement32KB * thirtyTwoKBBank
            + autoIncrement64KB * sixtyFourKBBank
            + autoIncrement128KB * oneTwentyEightKBBank
            + autoIncrement256KB * twoFiftySixKBBank
            + autoIncrement512KB * fiveTwelveKBBank
            + autoIncrement1MB * oneMBBank
            + autoIncrement2MB * twoMBBank
            + autoIncrement4MB * fourMBBank
            + autoIncrement8MB * eightMBBank
            + autoIncrement16MB * sixteenMBBank;

        autoIncrementTotalRussian = autoIncrementRussian6Bit * russianSixBitBank
            + autoIncrementRussian12Bit * russianTwelveBitBank
            + autoIncrementRussian16Bit * russianSixteenBitBank
            + autoIncrementRussian4Byte * russianFourByteBank
            + autoIncrementRussian8Byte * russianEightByteBank
            + autoIncrementRussian16Byte * russianSixteenByteBank
            + autoIncrementRussian32Byte * russianThirtyTwoByteBank
            + autoIncrementRussian64Byte * russianSixtyFourByteBank
            + autoIncrementRussian128Byte * russianOneTwentyEightByteBank
            + autoIncrementRussian256Byte * russianTwoFiftySixByteBank
            + autoIncrementRussian512Byte * russianFiveTwelveByteBank
            + autoIncrementRussian1KB * russianOneKBBank
            + autoIncrementRussian2KB * russianTwoKBBank
            + autoIncrementRussian4KB * russianFourKBBank
            + autoIncrementRussian8KB * russianEightKBBank
            + autoIncrementRussian16KB * russianSixteenKBBank
            + autoIncrementRussian32KB * russianThirtyTwoKBBank
            + autoIncrementRussian64KB * russianSixtyFourKBBank
            + autoIncrementRussian128KB * russianOneTwentyEightKBBank
            + autoIncrementRussian256KB * russianTwoFiftySixKBBank
            + autoIncrementRussian512KB * russianFiveTwelveKBBank
            + autoIncrementRussian1MB * russianOneMBBank
            + autoIncrementRussian2MB * russianTwoMBBank
            + autoIncrementRussian4MB * russianFourMBBank
            + autoIncrementRussian8MB * russianEightMBBank
            + autoIncrementRussian16MB * russianSixteenMBBank;

        autoIncrementTotalVipersec = autoIncrementVipersec1Byte * vipersecOneByteBank
            + autoIncrementVipersec2Byte * vipersecTwoByteBank
            + autoIncrementVipersec4Byte * vipersecFourByteBank
            + autoIncrementVipersec8Byte * vipersecEightByteBank
            + autoIncrementVipersec16Byte * vipersecSixteenByteBank
            + autoIncrementVipersec32Byte * vipersecThirtyTwoByteBank
            + autoIncrementVipersec64Byte * vipersecSixtyFourByteBank
            + autoIncrementVipersec128Byte * vipersecOneTwentyEightByteBank
            + autoIncrementVipersec256Byte * vipersecTwoFiftySixByteBank
            + autoIncrementVipersec512Byte * vipersecFiveTwelveByteBank
            + autoIncrementVipersec1KB * vipersecOneKBBank
            + autoIncrementVipersec2KB * vipersecTwoKBBank
            + autoIncrementVipersec4KB * vipersecFourKBBank
            + autoIncrementVipersec8KB * vipersecEightKBBank
            + autoIncrementVipersec16KB * vipersecSixteenKBBank
            + autoIncrementVipersec32KB * vipersecThirtyTwoKBBank
            + autoIncrementVipersec64KB * vipersecSixtyFourKBBank
            + autoIncrementVipersec128KB * vipersecOneTwentyEightKBBank
            + autoIncrementVipersec256KB * vipersecTwoFiftySixKBBank
            + autoIncrementVipersec512KB * vipersecFiveTwelveKBBank
            + autoIncrementVipersec1MB * vipersecOneMBBank
            + autoIncrementVipersec2MB * vipersecTwoMBBank
            + autoIncrementVipersec4MB * vipersecFourMBBank
            + autoIncrementVipersec8MB * vipersecEightMBBank
            + autoIncrementVipersec16MB * vipersecSixteenMBBank;

        autoIncrementTotalChimerasec = autoIncrementChimerasec1Byte * chimerasecOneByteBank
            + autoIncrementChimerasec2Byte * chimerasecTwoByteBank
            + autoIncrementChimerasec4Byte * chimerasecFourByteBank
            + autoIncrementChimerasec8Byte * chimerasecEightByteBank
            + autoIncrementChimerasec16Byte * chimerasecSixteenByteBank
            + autoIncrementChimerasec32Byte * chimerasecThirtyTwoByteBank
            + autoIncrementChimerasec64Byte * chimerasecSixtyFourByteBank
            + autoIncrementChimerasec128Byte * chimerasecOneTwentyEightByteBank
            + autoIncrementChimerasec256Byte * chimerasecTwoFiftySixByteBank
            + autoIncrementChimerasec512Byte * chimerasecFiveTwelveByteBank
            + autoIncrementChimerasec1KB * chimerasecOneKBBank
            + autoIncrementChimerasec2KB * chimerasecTwoKBBank
            + autoIncrementChimerasec4KB * chimerasecFourKBBank
            + autoIncrementChimerasec8KB * chimerasecEightKBBank
            + autoIncrementChimerasec16KB * chimerasecSixteenKBBank
            + autoIncrementChimerasec32KB * chimerasecThirtyTwoKBBank
            + autoIncrementChimerasec64KB * chimerasecSixtyFourKBBank
            + autoIncrementChimerasec128KB * chimerasecOneTwentyEightKBBank
            + autoIncrementChimerasec256KB * chimerasecTwoFiftySixKBBank
            + autoIncrementChimerasec512KB * chimerasecFiveTwelveKBBank
            + autoIncrementChimerasec1MB * chimerasecOneMBBank
            + autoIncrementChimerasec2MB * chimerasecTwoMBBank
            + autoIncrementChimerasec4MB * chimerasecFourMBBank
            + autoIncrementChimerasec8MB * chimerasecEightMBBank
            + autoIncrementChimerasec16MB * chimerasecSixteenMBBank;

        autoIncrementTotalGriffonBank = autoIncrementGriffonBank1Byte * griffonBankOneByteBank
            + autoIncrementGriffonBank2Byte * griffonBankTwoByteBank
            + autoIncrementGriffonBank4Byte * griffonBankFourByteBank
            + autoIncrementGriffonBank8Byte * griffonBankEightByteBank
            + autoIncrementGriffonBank16Byte * griffonBankSixteenByteBank
            + autoIncrementGriffonBank32Byte * griffonBankThirtyTwoByteBank
            + autoIncrementGriffonBank64Byte * griffonBankSixtyFourByteBank
            + autoIncrementGriffonBank128Byte * griffonBankOneTwentyEightByteBank
            + autoIncrementGriffonBank256Byte * griffonBankTwoFiftySixByteBank
            + autoIncrementGriffonBank512Byte * griffonBankFiveTwelveByteBank
            + autoIncrementGriffonBank1KB * griffonBankOneKBBank
            + autoIncrementGriffonBank2KB * griffonBankTwoKBBank
            + autoIncrementGriffonBank4KB * griffonBankFourKBBank
            + autoIncrementGriffonBank8KB * griffonBankEightKBBank
            + autoIncrementGriffonBank16KB * griffonBankSixteenKBBank
            + autoIncrementGriffonBank32KB * griffonBankThirtyTwoKBBank
            + autoIncrementGriffonBank64KB * griffonBankSixtyFourKBBank
            + autoIncrementGriffonBank128KB * griffonBankOneTwentyEightKBBank
            + autoIncrementGriffonBank256KB * griffonBankTwoFiftySixKBBank
            + autoIncrementGriffonBank512KB * griffonBankFiveTwelveKBBank
            + autoIncrementGriffonBank1MB * griffonBankOneMBBank
            + autoIncrementGriffonBank2MB * griffonBankTwoMBBank
            + autoIncrementGriffonBank4MB * griffonBankFourMBBank
            + autoIncrementGriffonBank8MB * griffonBankEightMBBank
            + autoIncrementGriffonBank16MB * griffonBankSixteenMBBank;


        if (delsecZapperActive == 'true') { //doing the long way as i need to display the amounts in bonus segment
            delsecZapperIncrement = autoIncrementTotalDelsec * 0.05;
            $('#delsecZapperBonus').show(1);
            $('#delsecZapperBonus').delay(1000);
            $('#delsecZapperBonus').fadeOut(500);
            $('#delsecZapperBonus').html("+$" + delsecZapperIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (delsecChargerActive == 'true') {
            delsecChargerIncrement = autoIncrementTotalDelsec * 0.1;
            $('#delsecChargerBonus').show(1);
            $('#delsecChargerBonus').delay(1000);
            $('#delsecChargerBonus').fadeOut(500);
            $('#delsecChargerBonus').html("+$" + delsecChargerIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
       
        if (russianZapperActive == 'true') {
            russianZapperIncrement = autoIncrementTotalRussian * 0.05;
            $('#russianZapperBonus').show(1);
            $('#russianZapperBonus').delay(1000);
            $('#russianZapperBonus').fadeOut(500);
            $('#russianZapperBonus').html("+$" + russianZapperIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        if (russianPowerAmplificationActive == 'true') {
            russianPowerAmplificationIncrement = autoIncrementTotalRussian * 0.1;
            $('#russianPowerAmplificationBonus').show(1);
            $('#russianPowerAmplificationBonus').delay(1000);
            $('#russianPowerAmplificationBonus').fadeOut(500);
            $('#russianPowerAmplificationBonus').html("+$" + russianPowerAmplificationIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        if (vipersecReflectionFieldActive == 'true') {
            $('#vipersecReflectionFieldBonus').show();
            $('#vipersecReflectionFieldBonus').html("-" + vipersecReflectionFieldAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec");
        }
        
        if (griffonZapperActive == 'true') {
            griffonZapperIncrement = autoIncrementTotalGriffonBank * 0.05;
            $('#griffonZapperBonus').show(1);
            $('#griffonZapperBonus').delay(1000);
            $('#griffonZapperBonus').fadeOut(500);
            $('#griffonZapperBonus').html("+$" + griffonZapperIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        if (griffonBloodLustActive == 'true') {
            griffonBloodLustIncrement = autoIncrementTotalGriffonBank * 0.25;
            $('#griffonBloodLustBonus').show(1);
            $('#griffonBloodLustBonus').delay(1000);
            $('#griffonBloodLustBonus').fadeOut(500);
            $('#griffonBloodLustBonus').html("+$" + griffonBloodLustIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (vipersecFaderActive == 'true') {
            $('#vipersecFaderBonus').show();
            $('#vipersecFaderBonus').html("-" + vipersecFaderAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec");
        }

        if (vipersecStealthFieldActive == 'true') {
            $('#vipersecStealthFieldBonus').show();
            $('#vipersecStealthFieldBonus').html("-" + vipersecStealthFieldAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec");
        }

        if (vipersecInvisibilityActive == 'true') {
            $('#vipersecInvisibilityBonus').show();
            $('#vipersecInvisibilityBonus').html("-" + vipersecInvisibilityAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec");
        }

        if (delsecSuperstormActive == 'true') { //SEPERATING PROFITS AND PACKETS. PACKETS SPLIT SO IT DISPLAYS AFTER THE CALC. PROFITS GET CALCULATED HERE
            delsecSuperstormBonusProfits = autoIncrementTotalDelsec;
            $('#delsecSuperstormIncomeBonus').show(1);
            $('#delsecSuperstormIncomeBonus').delay(1000);
            $('#delsecSuperstormIncomeBonus').fadeOut(500);
            $('#delsecSuperstormIncomeBonus').html("+$" + delsecSuperstormBonusProfits.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (chaosWizardActive == 'true') {
            chaosWizardBonusProfits = (autoIncrementTotalDelsec + autoIncrementTotalRussian + autoIncrementTotalVipersec + autoIncrementTotalChimerasec + autoIncrementTotalGriffonBank) * 0.25;
            $('#chaosWizardBonus').show(1);
            $('#chaosWizardBonus').delay(1000);
            $('#chaosWizardBonus').fadeOut(500);
            $('#chaosWizardBonus').html("+$" + chaosWizardBonusProfits.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (vipersecTimeReversalActive == 'true') {
            $('#vipersecTimeReversalBonus').show();
            $('#vipersecTimeReversalBonus').html("-" + vipersecTimeReversalAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec");
        }

        if (redArmyConscriptionActive == 'true') {
            redArmyConscriptionIncrement = autoIncrementTotalRussian * 2;
            $('#redArmyConscriptionBonus').show(1);
            $('#redArmyConscriptionBonus').delay(1000);
            $('#redArmyConscriptionBonus').fadeOut(500);
            $('#redArmyConscriptionBonus').html("+$" + redArmyConscriptionIncrement.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (ironCurtainRunning == 'true') {
            ironCurtainBonusProfits = (autoIncrementTotalRussian + russianZapperIncrement + russianPowerAmplificationIncrement + redArmyConscriptionIncrement) * 3;
            $('#ironCurtainBonus').show(1);
            $('#ironCurtainBonus').delay(1000);
            $('#ironCurtainBonus').fadeOut(500);
            $('#ironCurtainBonus').html("+$" + ironCurtainBonusProfits.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else
            ironCurtainBonusProfits = 0;

        if (totalRisk > riskDetectionAmt) {
            $('#twoBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#threeBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fourBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#eightBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#twelveBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixteenBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#eightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixteenByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#thirtytwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixtyfourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#oneTwentyEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#twoFiftySixByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fiveTwelveByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#oneKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#twoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#eightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixteenKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#thirtyTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixtyFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#oneTwentyEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#twoFiftySixKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fiveTwelveKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#oneMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#twoMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#fourMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#eightMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#sixteenMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');

            $('#russianSixBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianTwelveBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixteenBitIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixteenByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianThirtyTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixtyFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianOneTwentyEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianTwoFiftySixByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianFiveTwelveByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianOneKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixteenKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianThirtyTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixtyFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianOneTwentyEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianTwoFiftySixKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianFiveTwelveKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianOneMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianTwoMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianFourMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianEightMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#russianSixteenMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');

            $('#vipersecOneByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecSixteenByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecThirtyTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecSixtyFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecOneTwentyEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecTwoFiftySixByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecFiveTwelveByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecOneKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecSixteenKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecThirtyTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecSixtyFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecOneTwentyEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecTwoFiftySixKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecFiveTwelveKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecOneMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecTwoMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecFourMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecEightMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#vipersecSixteenMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');

            $('#chimerasecOneByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecSixteenByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecThirtyTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecSixtyFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecOneTwentyEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecTwoFiftySixByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecFiveTwelveByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecOneKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecSixteenKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecThirtyTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecSixtyFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecOneTwentyEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecTwoFiftySixKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecFiveTwelveKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecOneMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecTwoMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecFourMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecEightMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#chimerasecSixteenMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');

            $('#griffonBankOneByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankSixteenByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankThirtyTwoByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankSixtyFourByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankOneTwentyEightByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankTwoFiftySixByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankFiveTwelveByteIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankOneKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankSixteenKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankThirtyTwoKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankSixtyFourKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankOneTwentyEightKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankTwoFiftySixKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankFiveTwelveKBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankOneMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankTwoMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankFourMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankEightMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');
            $('#griffonBankSixteenMBIncrementAmtDisplay').html('INCOME SUSPENDED BY FDI');

            $('#delsecZapperBonus').html('INCOME SUSPENDED BY FDI');
            $('#russianZapperBonus').html('INCOME SUSPENDED BY FDI');
            $('#griffonZapperBonus').html('INCOME SUSPENDED BY FDI');
            $('#delsecChargerBonus').html('INCOME SUSPENDED BY FDI');
            $('#russianPowerAmplificationBonus').html('INCOME SUSPENDED BY FDI');
            $('#griffonBloodLustBonus').html('INCOME SUSPENDED BY FDI');
            $('#delsecSuperstormIncomeBonus').html('INCOME SUSPENDED BY FDI');
            $('#chaosWizardBonus').html('INCOME SUSPENDED BY FDI');
            $('#redArmyConscriptionBonus').html('INCOME SUSPENDED BY FDI');
        }       
        var currentRemainingFreePackets = globalPackets;
        var currentPacketTick = (totalPackets + totalPacketsRussian + totalPacketsVipersec + totalPacketsChimerasec + totalPacketsGriffonBank)
        globalPackets -= currentPacketTick;
        if (globalPackets < 0) {
            totalPackets = totalPackets * (currentRemainingFreePackets / currentPacketTick);
            totalPacketsRussian = totalPacketsRussian * (currentRemainingFreePackets / currentPacketTick);
            totalPacketsVipersec = totalPacketsVipersec * (currentRemainingFreePackets / currentPacketTick);
            totalPacketsChimerasec = totalPacketsChimerasec * (currentRemainingFreePackets / currentPacketTick);
            totalPacketsGriffonBank = totalPacketsGriffonBank * (currentRemainingFreePackets / currentPacketTick);
            globalPackets = 0;
            
        }
        if (globalPackets == 0) {
            $('#wizardCompletedDisplay').css("background-image", "url(Resources/Img/wizardCompleted.png)");
            wizardQuadrantEarned = 'true';
            localStorage.setItem("wizardQuadrantEarned", wizardQuadrantEarned);
            // NO COMPANY VICTORY
            if (delsecPercentage < 30 && russianPercentage < 30 && vipersecPercentage < 30 && chimerasecPercentage < 30 && griffonBankPercentage < 30) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#noControlVictorySplash').show();
            }
            // DELSEC VICTORY
            else if (globalDelsecPackets > globalRussianPackets && globalDelsecPackets > globalVipersecPackets && globalDelsecPackets > globalChimerasecPackets && globalDelsecPackets > globalGriffonBankPackets) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#delsecVictorySplash').show();
            }
                // RUSSIAN VICTORY
            else if (globalRussianPackets > globalDelsecPackets && globalRussianPackets > globalVipersecPackets && globalRussianPackets > globalChimerasecPackets && globalRussianPackets > globalGriffonBankPackets) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#russianVictorySplash').show();
            }
                // VIPERSEC VICTORY
            else if (globalVipersecPackets > globalRussianPackets && globalVipersecPackets > globalDelsecPackets && globalVipersecPackets > globalChimerasecPackets && globalVipersecPackets > globalGriffonBankPackets) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#vipersecVictorySplash').show();
            }
                // CHIMERASEC VICTORY
            else if (globalChimerasecPackets > globalRussianPackets && globalChimerasecPackets > globalDelsecPackets && globalChimerasecPackets > globalVipersecPackets && globalChimerasecPackets > globalGriffonBankPackets) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#chimerasecVictorySplash').show();
            }
                // GRIFFONBANK VICTORY
            else if (globalGriffonBankPackets > globalRussianPackets && globalGriffonBankPackets > globalDelsecPackets && globalGriffonBankPackets > globalVipersecPackets && globalGriffonBankPackets > globalChimerasecPackets) {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#griffonbankVictorySplash').show();
            }

                // if 2 companies have exactly the same amt when global reaches 0, rare case.
            else {
                $('#center_Main').hide();
                $('#wizardVictorySplash').show();
                $('#rareVictorySplash').show();
            }
        }
        if (delsecManipulationActive == 'true') {
            bonusDelsecPackets = totalPackets * 0.25; // So i can display it on the bonuses section.

        }
        if (delsecTechGodRunning == 'true')
            delsecTechGodMultiplyer = 120;
        else
            delsecTechGodMultiplyer = 1;
        

        globalDelsecPackets += (totalPackets + bonusDelsecPackets + delsecSuperstormBonusPackets) * delsecTechGodMultiplyer;
        globalRussianPackets += totalPacketsRussian;
        globalVipersecPackets += totalPacketsVipersec;
        globalChimerasecPackets += totalPacketsChimerasec;
        globalGriffonBankPackets += totalPacketsGriffonBank;

        localStorage.setItem("globalDelsecPackets", globalDelsecPackets);
        localStorage.setItem("globalRussianPackets", globalRussianPackets);
        localStorage.setItem("globalVipersecPackets", globalVipersecPackets);
        localStorage.setItem("globalChimerasecPackets", globalChimerasecPackets);
        localStorage.setItem("globalGriffonBankPackets", globalGriffonBankPackets);
        if (globalPackets > 1000000000000000000)
            $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000000000) + (" Quintillion<br />Free Packets Remain.</h2>"));
        else if (globalPackets > 1000000000000000)
            $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000000) + (" Quadrillion<br />Free Packets Remain.</h2>"));
        else if (globalPackets > 1000000000000)
            $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000) + (" Trillion<br />Free Packets Remain.</h2>"));
        else if (globalPackets > 1000000000)
            $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000) + (" Billion<br />Free Packets Remain.</h2>"));
        else
            $('#globalPacketsDisplay').html("<h2>" + globalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + ("<br />Free Packets Remain.</h2>"));

        $('#delsecGlobalControl').html(globalDelsecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
        $('#russianGlobalControl').html(globalRussianPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
        $('#vipersecGlobalControl').html(globalVipersecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
        $('#chimerasecGlobalControl').html(globalChimerasecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
        $('#griffonBankGlobalControl').html(globalGriffonBankPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
        localStorage.setItem("globalPackets", globalPackets);

        delsecPercentage = globalDelsecPackets / GLOBALPACKETMAX * 100;
        russianPercentage = globalRussianPackets / GLOBALPACKETMAX * 100;
        vipersecPercentage = globalVipersecPackets / GLOBALPACKETMAX * 100;
        chimerasecPercentage = globalChimerasecPackets / GLOBALPACKETMAX * 100;
        griffonBankPercentage = globalGriffonBankPackets / GLOBALPACKETMAX * 100;

        $('#delsecPercentage').html(delsecPercentage.toFixed(4) + "%");
        $('#russianPercentage').html(russianPercentage.toFixed(4) + "%");
        $('#vipersecPercentage').html(vipersecPercentage.toFixed(4) + "%");
        $('#chimerasecPercentage').html(chimerasecPercentage.toFixed(4) + "%");
        $('#griffonBankPercentage').html(griffonBankPercentage.toFixed(4) + "%");
        // //
        if (totalRisk < riskDetectionAmt) {
            if (userClass == "Wizard") //PASSIVE DOESNT INCLUDE BONUSES
                wizardPassive = 0.01 * (autoIncrementTotalDelsec + autoIncrementTotalRussian + autoIncrementTotalVipersec + autoIncrementTotalChimerasec + autoIncrementTotalGriffonBank) + 0.32; // Added a base amount of 32 cents
            $('#autoWizardGenerateAmt').html("Autogenerated Additional: $" + wizardPassive.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            money +=
                (autoIncrementTotalDelsec + delsecZapperIncrement + delsecChargerIncrement + delsecSuperstormBonusProfits) * delsecTechGodMultiplyer

                + autoIncrementTotalRussian + ironCurtainBonusProfits
                + russianZapperIncrement + russianPowerAmplificationIncrement + redArmyConscriptionIncrement

                + autoIncrementTotalVipersec

                + autoIncrementTotalChimerasec              

                + autoIncrementTotalGriffonBank
                + griffonZapperIncrement + griffonBloodLustIncrement

                + chaosWizardBonusProfits
                + wizardPassive;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (packetSummonerActive == 'true') {
            packetSummonerAmt = (totalPackets + totalPacketsRussian + totalPacketsVipersec + totalPacketsChimerasec + totalPacketsGriffonBank + bonusDelsecPackets) / 1000;

            money += packetSummonerAmt;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#packetSummonerBonus').show(1);
            $('#packetSummonerBonus').delay(1000);
            $('#packetSummonerBonus').fadeOut(500);
            $('#packetSummonerBonus').html("+$" + packetSummonerAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        if (delsecManipulationActive == 'true') {
            $('#delsecManipulationBonus').show(1);
            $('#delsecManipulationBonus').delay(1000);
            $('#delsecManipulationBonus').fadeOut(500);
            $('#delsecManipulationBonus').html("+" + bonusDelsecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Delsec Packets");
        }

        if (delsecSuperstormActive == 'true') { //SEPERATING PROFITS AND PACKETS. PACKETS SPLIT SO IT DISPLAYS AFTER THE CALC.
            $('#delsecSuperstormPacketBonus').show(1);
            $('#delsecSuperstormPacketBonus').delay(1000);
            $('#delsecSuperstormPacketBonus').fadeOut(500);
            $('#delsecSuperstormPacketBonus').html("+" + delsecSuperstormBonusPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Delsec Packets");
        }
    }, 4000);

});