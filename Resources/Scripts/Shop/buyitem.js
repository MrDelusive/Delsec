$(window).load(function () {

    $('#btnBuy3BitCrawler').click(function () {
        if (money >= 2) {
            money -= 2;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            threeBitBank++;
            totalPackets += 2;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            // * 8 / 4 where 8 = number of packets overall and 4 = number of seconds per update. (Based on setInterval for threeBit Crawlers).
            $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 2 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy4BitCrawler').click(function () {
        if (money >= 3.95) {
            money -= 3.95;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourBitBank++;
            totalPackets += 4;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");
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
            money -= 15;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixBitBank++;
            totalPackets += 16;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian6BitCrawler').click(function () {
        if (money >= 22.5) {
            money -= 22.5;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixBitBank++;
            totalPackets += 16;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
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
            money -= 58;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightBitBank++;
            totalPackets += 64;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy12BitCrawler').click(function () {

        if (money >= 820) {
            money -= 820;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twelveBitBank++;
            totalPackets += 1024;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");
            localStorage.setItem("twelveBitBank", twelveBitBank);
        }
        return false;
    });

    $('#btnBuy16BitCrawler').click(function () {
        if (money >= 12288) {
            money -= 12288;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenBitBank++;
            totalPackets += 16384;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy4ByteCrawler').click(function () {
        if (money >= 24248.32) {
            money -= 24248.32;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourByteBank++;
            totalPackets += 32768;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");

            if (fourByteBank > 0) {
                $("#email4ByteHeading").fadeIn(1);
                if (email4ByteDisplayed == "false") {
                    numUnreadEmails++;
                    email4ByteDisplayed = "true";
                    $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
                }
            }
        }
        return false;
    });

    $('#btnBuy8ByteCrawler').click(function () {
        if (money >= 47841.28) {
            money -= 47841.28;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightByteBank++;
            totalPackets += 65536;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy16ByteCrawler').click(function () {
        if (money >= 94371.84) {
            money -= 94371.84;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenByteBank++;
            totalPackets += 131072;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy32ByteCrawler').click(function () {
        if (money >= 186122.24) {
            money -= 186122.24;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            thirtytwoByteBank++;
            totalPackets += 262144;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy64ByteCrawler').click(function () {
        if (money >= 367001.6) {
            money -= 367001.6;
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixtyfourByteBank++;
            totalPackets += 524288;
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

})(jQuery);