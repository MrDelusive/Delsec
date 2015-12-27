$(window).load(function () {

    $('#btnBuy3BitCrawler').click(function () {
        if (money >= 2) {
            money = money - 2;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            threeBitBank++;

            // update the totalChunks info
            totalChunks = totalChunks + 2;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            // update the items div.
            // * 8 / 4 where 8 = number of chunks overall and 4 = number of seconds per update. (Based on setInterval for threeBit Crawlers).
            $('#threeBitItemDisplay').show();
            $('#threeBitItemDisplay').html("Delsec3bit.exe :" + threeBitBank + " Processes Iterating through " + threeBitBank * 2 + " Chunks of data per second.<br />");
        }
        return false;
    });

    $('#btnBuy4BitCrawler').click(function () {
        if (money >= 3.95) {
            money = money - 3.95;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourBitBank++;
            totalChunks = totalChunks + 4;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#fourBitItemDisplay').show();
            $('#fourBitItemDisplay').html("Delsec4bit.exe :" + fourBitBank + " Processes Iterating through " + fourBitBank * 4 + " Chunks of data per second.<br />");            
        }
        if (fourBitBank > 3) {
            $("#email4Heading").show(1);
            if (email4Displayed == "false") {
                numUnreadEmails++;
                email4Displayed = "true";
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }

        }
        return false;
    });

    $('#btnBuy6BitCrawler').click(function () {
        if (money >= 15) {
            money = money - 15;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixBitBank++;
            totalChunks = totalChunks + 16;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#sixBitItemDisplay').show();
            $('#sixBitItemDisplay').html("Delsec6bit.exe :" + sixBitBank + " Processes Iterating through " + sixBitBank * 16 + " Chunks of data per second.<br />");
        }
        return false;
    });

    $('#btnBuyRussian6BitCrawler').click(function () {
        if (money >= 22.5) {
            money = money - 22.5;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixBitBank++;
            totalChunks = totalChunks + 16;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#russianSixBitItemDisplay').show();
            $('#russianSixBitItemDisplay').html("Russian6bit.exe :" + russianSixBitBank + " Processes Iterating through " + russianSixBitBank * 16 + " Chunks of data per second.<br />");
        }
        if (russianSixBitBank > 0) {
            $("#email3Heading").fadeIn(1);
            if (email3Displayed == "false") {
                numUnreadEmails++;
                email3Displayed = "true";
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
        return false;

    });

    $('#btnBuy8BitCrawler').click(function () {
        if (money >= 58) {
            money = money - 58;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightBitBank++;
            totalChunks = totalChunks + 64;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#eightBitItemDisplay').show();
            $('#eightBitItemDisplay').html("Delsec8bit.exe :" + eightBitBank + " Processes Iterating through " + eightBitBank * 64 + " Chunks of data per second.<br />");
        }
        return false;
    });

    $('#btnBuy12BitCrawler').click(function () {

        if (money >= 820) {
            money = money - 820;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twelveBitBank++;
            totalChunks = totalChunks + 1024;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#twelveBitItemDisplay').show();
            $('#twelveBitItemDisplay').html("Delsec12bit.exe :" + twelveBitBank + " Processes Iterating through " + twelveBitBank * 1024 + " Chunks of data per second.<br />");
            localStorage.setItem("twelveBitBankv05", twelveBitBank);
        }
        return false;
    });

    $('#btnBuy16BitCrawler').click(function () {
        if (money >= 12288) {
            money = money - 12288;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenBitBank++;
            totalChunks = totalChunks + 16384;
            $('#totalChunkDisplay').show();
            $('#totalChunkDisplay').html("Total Chunks Per Second: " + totalChunks);
            $('#sixteenBitItemDisplay').show();
            $('#sixteenBitItemDisplay').html("Delsec16bit.exe :" + sixteenBitBank + " Processes Iterating through " + sixteenBitBank * 16384 + " Chunks of data per second.<br />");
        }
        return false;
    });
})(jQuery);