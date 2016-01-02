$(document).ready(function () {

    $('#btnBuy3BitCrawler').click(function () {
        if (money >= 2) {
            money -= 2;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            threeBitBank++;
            localStorage.setItem("threeBitBank", threeBitBank);
            totalPackets += 2;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            // * 8 / 4 where 8 = number of packets overall and 4 = number of seconds per update. (Based on setInterval for threeBit Crawlers).
            $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 2 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy4BitCrawler').click(function () {
        if (money >= 3.95) {
            money -= 3.95;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourBitBank++;
            localStorage.setItem("fourBitBank", fourBitBank);
            totalPackets += 4;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");
        }
        if (fourBitBank > 3) {
            $("#email4Heading").show(1);
            if (email4Displayed == "false") {
                numUnreadEmails++;
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                email4Displayed = "true";
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
        return false;
    });

    $('#btnBuy6BitCrawler').click(function () {
        if (money >= 15) {
            money -= 15;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixBitBank++;
            localStorage.setItem("sixBitBank", sixBitBank);
            totalPackets += 16;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian6BitCrawler').click(function () {
        if (money >= 22.5) {
            money -= 22.5;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixBitBank++;
            localStorage.setItem("russianSixBitBank", russianSixBitBank);
            totalPackets += 16;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
        }
        if (russianSixBitBank > 0) {
            $("#email3Heading").fadeIn(1);
            if (email3Displayed == "false") {
                numUnreadEmails++;              
                email3Displayed = "true";
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
        return false;

    });

    $('#btnBuy8BitCrawler').click(function () {
        if (money >= 58) {
            money -= 58;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightBitBank++;
            localStorage.setItem("eightBitBank", eightBitBank);
            totalPackets += 64;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy12BitCrawler').click(function () {

        if (money >= 820) {
            money -= 820;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twelveBitBank++;
            localStorage.setItem("twelveBitBank", twelveBitBank);
            totalPackets += 1024;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");          
        }
        return false;
    });

    $('#btnBuy16BitCrawler').click(function () {
        if (money >= 12288) {
            money -= 12288;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenBitBank++;
            localStorage.setItem("sixteenBitBank", sixteenBitBank);
            totalPackets += 16384;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy4ByteCrawler').click(function () {
        if (money >= 24248.32) {
            money -= 24248.32;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourByteBank++;
            localStorage.setItem("fourByteBank", fourByteBank);
            totalPackets += 32768;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");

            if (fourByteBank > 0) {
                $("#email4ByteHeading").fadeIn(1);
                if (email4ByteDisplayed == "false") {
                    numUnreadEmails++;
                    localStorage.setItem("numUnreadEmails", numUnreadEmails);
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
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightByteBank++;
            localStorage.setItem("eightByteBank", eightByteBank);
            totalPackets += 65536;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy16ByteCrawler').click(function () {
        if (money >= 94371.84) {
            money -= 94371.84;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenByteBank++;
            localStorage.setItem("sixteenByteBank", sixteenByteBank);
            totalPackets += 131072;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy32ByteCrawler').click(function () {
        if (money >= 186122.24) {
            money -= 186122.24;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            thirtytwoByteBank++;
            localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
            totalPackets += 262144;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuy64ByteCrawler').click(function () {
        if (money >= 367001.6) {
            money -= 367001.6;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixtyfourByteBank++;
            localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);
            totalPackets += 524288;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

})(jQuery);