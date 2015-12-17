$(window).load(function () {

    $('#btnBuy3BitCrawler').click(function () {
        if (money >= 2) {
            money = money - 2;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            threeBitBank++;

            // update the totalChunks info
            totalChunks = totalChunks + 2;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            // update the items div.
            // * 8 / 4 where 8 = number of chunks overall and 4 = number of seconds per update. (Based on setInterval for threeBit Crawlers).
            $('#threeBitItemDisplay').html("<br />Delsec3bit.exe :" + threeBitBank + " Processes Iterating through " + threeBitBank * 2 + " Chunks of data per second.<br />");
        }

        // check if reached appropriate number, then show the hidden div.
        if (threeBitBank >= 1) {
            $("#btnEmails").fadeIn(1000);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }

        if (threeBitBank >= 2)
            $("#fourBitDisplay").show("slide", 1000, { direction: 'left' });

        return false;
    });

    $('#btnBuy4BitCrawler').click(function () {
        if (money >= 3.95) {
            money = money - 3.95;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            fourBitBank++;
            totalChunks = totalChunks + 4;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            // update the items div.
            // * 8 / 4 where 16 = number of chunks overall and 4 = number of seconds per update.
            $('#fourBitItemDisplay').html("<br />Delsec4bit.exe :" + fourBitBank + " Processes Iterating through " + fourBitBank * 4 + " Chunks of data per second.<br />");
        }

        if (fourBitBank > 3) {
            $("#sixBitDisplay").show("slide", 1000, { direction: 'left' });
            $("#email4Heading").show(1);
            if (email4Displayed == false) {
                numUnreadEmails++;
                email4Displayed = true;
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }

        }
        return false;
    });

    $('#btnBuy6BitCrawler').click(function () {

        if (money >= 15) {
            money = money - 15;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            sixBitBank++;
            totalChunks = totalChunks + 16;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            // update the items div.
            // * 8 / 4 where 16 = number of chunks overall and 4 = number of seconds per update.
            $('#sixBitItemDisplay').html("<br />Delsec6bit.exe :" + sixBitBank + " Processes Iterating through " + sixBitBank * 16 + " Chunks of data per second.<br />");
        }

        // check if reached appropriate number, then show the hidden div.
        if (sixBitBank > 3) {
            $("#russianSixBitDisplay").show("slide", 1000, { direction: 'left' });
            $("#eightBitDisplay").show("slide", 1000, { direction: 'left' });
        }
        return false;

    });

    $('#btnBuyRussian6BitCrawler').click(function () {

        if (money >= 22.5) {
            money = money - 22.5;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            russianSixBitBank++;
            totalChunks = totalChunks + 16;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            // update the items div.
            // * 8 / 4 where 16 = number of chunks overall and 4 = number of seconds per update.
            $('#russianSixBitItemDisplay').html("<br />Russian6bit.exe :" + russianSixBitBank + " Processes Iterating through " + russianSixBitBank * 16 + " Chunks of data per second.<br />");
        }
        if (russianSixBitBank > 0) {
            $("#email3Heading").fadeIn(1);
            if (email3Displayed == false) {
                numUnreadEmails++;
                email3Displayed = true;
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }

        return false;

    });

    $('#btnBuy8BitCrawler').click(function () {

        if (money >= 58) {
            money = money - 58;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            eightBitBank++;
            totalChunks = totalChunks + 64;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            $('#eightBitItemDisplay').html("<br />Delsec8bit.exe :" + eightBitBank + " Processes Iterating through " + eightBitBank * 64 + " Chunks of data per second.<br />");
        }
        if (eightBitBank > 3) {
            $("#twelveBitDisplay").show("slide", 1000, { direction: 'left' });
        }
        return false;

    });

    $('#btnBuy12BitCrawler').click(function () {

        if (money >= 820) {
            money = money - 820;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            twelveBitBank++;
            totalChunks = totalChunks + 1024;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            $('#twelveBitItemDisplay').html("<br />Delsec12bit.exe :" + twelveBitBank + " Processes Iterating through " + twelveBitBank * 1024 + " Chunks of data per second.<br />");
            localStorage.setItem("twelveBitBankv04", twelveBitBank);
        }
        if (twelveBitBank > 3) {
            $("#sixteenBitDisplay").show("slide", 1000, { direction: 'left' });
        }
        return false;

    });

    $('#btnBuy16BitCrawler').click(function () {

        if (money >= 12288) {
            money = money - 12288;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2));
            sixteenBitBank++;
            totalChunks = totalChunks + 16384;
            $('#totalChunkDisplay').html("<br />Total Chunks Per Second: " + totalChunks);
            $('#sixteenBitItemDisplay').html("<br />Delsec16bit.exe :" + sixteenBitBank + " Processes Iterating through " + sixteenBitBank * 16384 + " Chunks of data per second.<br />");
        }
        return false;

    });
})(jQuery);