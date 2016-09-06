$(document).ready(function () {

    $('#btnVipersecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#vipersecCrawlerShop").show();
        return false;
    });

    $('#btnBuyVipersec1ByteCrawler').click(function () {

        if (money >= currentVipersec1BytePrice) {
            money -= currentVipersec1BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecOneByteBank++;
            currentVipersec1BytePrice = 20560 + 20560 * vipersecOneByteBank * 0.15;
            localStorage.setItem("vipersecOneByteBank", vipersecOneByteBank);
            totalPacketsVipersec += 8192;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec1ByteCrawler').html("Buy 1 Byte Vipersec Crawler (8,192 Packets/sec) - $" + currentVipersec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecOneByteItemDisplay').html(vipersecOneByteBank + " Processes Running Through " + vipersecOneByteBank * 8192 + " Packets/Sec");
            if (vipersecOneByteBank > 0) {
                $("#emailVipersecStartHeading").show();
                if (emailVipersecStartDisplayed == "false") {
                    numUnreadEmails++;
                    localStorage.setItem("numUnreadEmails", numUnreadEmails);
                    emailVipersecStartDisplayed = "true";
                    localStorage.setItem("emailVipersecStartDisplayed", emailVipersecStartDisplayed);
                    $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
                }
            }
        }
        return false;
    });

    $('#btnBuyVipersec2ByteCrawler').click(function () {

        if (money >= currentVipersec2BytePrice) {
            money -= currentVipersec2BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTwoByteBank++;
            currentVipersec2BytePrice = 41120 + 41120 * vipersecTwoByteBank * 0.15;
            localStorage.setItem("vipersecTwoByteBank", vipersecTwoByteBank);
            totalPacketsVipersec += 16384;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec2ByteCrawler').html("Buy 2 Byte Vipersec Crawler (16,384 Packets/sec) - $" + currentVipersec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#vipersecTwoByteItemDisplay').html(vipersecTwoByteBank + " Processes Running Through " + vipersecTwoByteBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec4ByteCrawler').click(function () {

        if (money >= currentVipersec4BytePrice) {
            money -= currentVipersec4BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFourByteBank++;
            currentVipersec4BytePrice = 82240 + 82240 * vipersecFourByteBank * 0.15;
            localStorage.setItem("vipersecFourByteBank", vipersecFourByteBank);
            totalPacketsVipersec += 32768;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec4ByteCrawler').html("Buy 4 Byte Vipersec Crawler (32,768 Packets/sec) - $" + currentVipersec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            $('#vipersecFourByteItemDisplay').html(vipersecFourByteBank + " Processes Running Through " + vipersecFourByteBank * 32768 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec8ByteCrawler').click(function () {

        if (money >= currentVipersec8BytePrice) {
            money -= currentVipersec8BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecEightByteBank++;
            currentVipersec8BytePrice = 164480 + 164480 * vipersecEightByteBank * 0.15;
            localStorage.setItem("vipersecEightByteBank", vipersecEightByteBank);
            totalPacketsVipersec += 65536;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec8ByteCrawler').html("Buy 8 Byte Vipersec Crawler (65,536 Packets/sec) - $" + currentVipersec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            $('#vipersecEightByteItemDisplay').html(vipersecEightByteBank + " Processes Running Through " + vipersecEightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec16ByteCrawler').click(function () {

        if (money >= currentVipersec16BytePrice) {
            money -= currentVipersec16BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecSixteenByteBank++;
            currentVipersec16BytePrice = 328960 + 328960 * vipersecSixteenByteBank * 0.15;
            localStorage.setItem("vipersecSixteenByteBank", vipersecSixteenByteBank);
            totalPacketsVipersec += 131072;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec16ByteCrawler').html("Buy 16 Byte Vipersec Crawler (131,072 Packets/sec) - $" + currentVipersec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            $('#vipersecSixteenByteItemDisplay').html(vipersecSixteenByteBank + " Processes Running Through " + vipersecSixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec32ByteCrawler').click(function () {

        if (money >= currentVipersec32BytePrice) {
            money -= currentVipersec32BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecThirtyTwoByteBank++;
            currentVipersec32BytePrice = 657920 + 657920 * vipersecThirtyTwoByteBank * 0.15;
            localStorage.setItem("vipersecThirtyTwoByteBank", vipersecThirtyTwoByteBank);
            totalPacketsVipersec += 262144;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec32ByteCrawler').html("Buy 32 Byte Vipersec Crawler (262,144 Packets/sec) - $" + currentVipersec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            $('#vipersecThirtyTwoByteItemDisplay').html(vipersecThirtyTwoByteBank + " Processes Running Through " + vipersecThirtyTwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec64ByteCrawler').click(function () {
        if (money >= currentVipersec64BytePrice) {
            money -= currentVipersec64BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecSixtyFourByteBank++;
            currentVipersec64BytePrice = 1315840 + 1315840 * vipersecSixtyFourByteBank * 0.15;
            localStorage.setItem("vipersecSixtyFourByteBank", vipersecSixtyFourByteBank);
            totalPacketsVipersec += 524288;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec64ByteCrawler').html("Buy 64 Byte Vipersec Crawler (524,288 Packets/sec) - $" + currentVipersec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            $('#vipersecSixtyFourByteItemDisplay').html(vipersecSixtyFourByteBank + " Processes Running Through " + vipersecSixtyFourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec128ByteCrawler').click(function () {
        if (money >= currentVipersec128BytePrice) {
            money -= currentVipersec128BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecOneTwentyEightByteBank++;
            currentVipersec128BytePrice = 2631680 + 2631680 * vipersecOneTwentyEightByteBank * 0.15;
            localStorage.setItem("vipersecOneTwentyEightByteBank", vipersecOneTwentyEightByteBank);
            totalPacketsVipersec += 1048576;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec128ByteCrawler').html("Buy 128 Byte Vipersec Crawler (1,048,576 Packets/sec) - $" + currentVipersec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            $('#vipersecOneTwentyEightByteItemDisplay').html(vipersecOneTwentyEightByteBank + " Processes Running Through " + vipersecOneTwentyEightByteBank * 1048576 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec256ByteCrawler').click(function () {
        if (money >= currentVipersec256BytePrice) {
            money -= currentVipersec256BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTwoFiftySixByteBank++;
            currentVipersec256BytePrice = 5263360 + 5263360 * vipersecTwoFiftySixByteBank * 0.15;
            localStorage.setItem("vipersecTwoFiftySixByteBank", vipersecTwoFiftySixByteBank);
            totalPacketsVipersec += 2097152;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec256ByteCrawler').html("Buy 256 Byte Vipersec Crawler (~2 Million Packets/sec) - $" + currentVipersec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            $('#vipersecTwoFiftySixByteItemDisplay').html(vipersecTwoFiftySixByteBank + " Processes Running Through " + vipersecTwoFiftySixByteBank * 2097152 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec512ByteCrawler').click(function () {
        if (money >= currentVipersec512BytePrice) {
            money -= currentVipersec512BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFiveTwelveByteBank++;
            currentVipersec512BytePrice = 10526720 + 10526720 * vipersecFiveTwelveByteBank * 0.15;
            localStorage.setItem("vipersecFiveTwelveByteBank", vipersecFiveTwelveByteBank);
            totalPacketsVipersec += 4194304;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec512ByteCrawler').html("Buy 512 Byte Vipersec Crawler (~4.1 Million Packets/sec) - $" + currentVipersec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            $('#vipersecFiveTwelveByteItemDisplay').html(vipersecFiveTwelveByteBank + " Processes Running Through " + vipersecFiveTwelveByteBank * 4194304 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec1KBCrawler').click(function () {
        if (money >= currentVipersec1KBPrice) {
            money -= currentVipersec1KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecOneKBBank++;
            currentVipersec1KBPrice = 21053440 + 21053440 * vipersecOneKBBank * 0.15;
            localStorage.setItem("vipersecOneKBBank", vipersecOneKBBank);
            totalPacketsVipersec += 8388608;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec1KBCrawler').html("Buy 1KB Vipersec Crawler (~8.3 Million Packets/sec) - $" + currentVipersec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            $('#vipersecOneKBItemDisplay').html(vipersecOneKBBank + " Processes Running Through " + vipersecOneKBBank * 8388608 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec2KBCrawler').click(function () {
        if (money >= currentVipersec2KBPrice) {
            money -= currentVipersec2KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTwoKBBank++;
            currentVipersec2KBPrice = 42106880 + 42106880 * vipersecTwoKBBank * 0.15;
            localStorage.setItem("vipersecTwoKBBank", vipersecTwoKBBank);
            totalPacketsVipersec += 16777216;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec2KBCrawler').html("Buy 2KB Vipersec Crawler (~16.7 Million Packets/sec) - $" + currentVipersec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            $('#vipersecTwoKBItemDisplay').html(vipersecTwoKBBank + " Processes Running Through " + vipersecTwoKBBank * 16777216 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec4KBCrawler').click(function () {
        if (money >= currentVipersec4KBPrice) {
            money -= currentVipersec4KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFourKBBank++;
            currentVipersec4KBPrice = 84213760 + 84213760 * vipersecFourKBBank * 0.15;
            localStorage.setItem("vipersecFourKBBank", vipersecFourKBBank);
            totalPacketsVipersec += 33554432;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec4KBCrawler').html("Buy 4KB Vipersec Crawler (~33.4 Million Packets/sec) - $" + currentVipersec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            $('#vipersecFourKBItemDisplay').html(vipersecFourKBBank + " Processes Running Through " + vipersecFourKBBank * 33554432 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec8KBCrawler').click(function () {
        if (money >= currentVipersec8KBPrice) {
            money -= currentVipersec8KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecEightKBBank++;
            currentVipersec8KBPrice = 168427520 + 168427520 * vipersecEightKBBank * 0.15;
            localStorage.setItem("vipersecEightKBBank", vipersecEightKBBank);
            totalPacketsVipersec += 67108864;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec8KBCrawler').html("Buy 8KB Vipersec Crawler (~67.1 Million Packets/sec) - $" + currentVipersec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            $('#vipersecEightKBItemDisplay').html(vipersecEightKBBank + " Processes Running Through " + vipersecEightKBBank * 67108864 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec16KBCrawler').click(function () {
        if (money >= currentVipersec16KBPrice) {
            money -= currentVipersec16KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecSixteenKBBank++;
            currentVipersec16KBPrice = 336855040 + 336855040 * vipersecSixteenKBBank * 0.15;
            localStorage.setItem("vipersecSixteenKBBank", vipersecSixteenKBBank);
            totalPacketsVipersec += 134217728;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec16KBCrawler').html("Buy 16KB Vipersec Crawler (~134.2 Million Packets/sec) - $" + currentVipersec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            $('#vipersecSixteenKBItemDisplay').html(vipersecSixteenKBBank + " Processes Running Through " + vipersecSixteenKBBank * 134217728 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec32KBCrawler').click(function () {
        if (money >= currentVipersec32KBPrice) {
            money -= currentVipersec32KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecThirtyTwoKBBank++;
            currentVipersec32KBPrice = 673710080 + 673710080 * vipersecThirtyTwoKBBank * 0.15;
            localStorage.setItem("vipersecThirtyTwoKBBank", vipersecThirtyTwoKBBank);
            totalPacketsVipersec += 268435456;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec32KBCrawler').html("Buy 32KB Vipersec Crawler (~268.4 Million Packets/sec) - $" + currentVipersec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            $('#vipersecThirtyTwoKBItemDisplay').html(vipersecThirtyTwoKBBank + " Processes Running Through " + vipersecThirtyTwoKBBank * 268435456 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec64KBCrawler').click(function () {
        if (money >= currentVipersec64KBPrice) {
            money -= currentVipersec64KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecSixtyFourKBBank++;
            currentVipersec64KBPrice = 1347420160 + 1347420160 * vipersecSixtyFourKBBank * 0.15;
            localStorage.setItem("vipersecSixtyFourKBBank", vipersecSixtyFourKBBank);
            totalPacketsVipersec += 536870912;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec64KBCrawler').html("Buy 64KB Vipersec Crawler (~536.8 Million Packets/sec) - $" + currentVipersec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            $('#vipersecSixtyFourKBItemDisplay').html(vipersecSixtyFourKBBank + " Processes Running Through " + vipersecSixtyFourKBBank * 536870912 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec128KBCrawler').click(function () {
        if (money >= currentVipersec128KBPrice) {
            money -= currentVipersec128KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecOneTwentyEightKBBank++;
            currentVipersec128KBPrice = 2694840320 + 2694840320 * vipersecOneTwentyEightKBBank * 0.15;
            localStorage.setItem("vipersecOneTwentyEightKBBank", vipersecOneTwentyEightKBBank);
            totalPacketsVipersec += 1073741824;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec128KBCrawler').html("Buy 128KB Vipersec Crawler (~1.07 Billion Packets/sec) - $" + currentVipersec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            $('#vipersecOneTwentyEightKBItemDisplay').html(vipersecOneTwentyEightKBBank + " Processes Running Through " + vipersecOneTwentyEightKBBank * 1073741824 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec256KBCrawler').click(function () {
        if (money >= currentVipersec256KBPrice) {
            money -= currentVipersec256KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTwoFiftySixKBBank++;
            currentVipersec256KBPrice = 5389680640 + 5389680640 * vipersecTwoFiftySixKBBank * 0.15;
            localStorage.setItem("vipersecTwoFiftySixKBBank", vipersecTwoFiftySixKBBank);
            totalPacketsVipersec += 2147483648;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec256KBCrawler').html("Buy 256KB Vipersec Crawler (~2.14 Billion Packets/sec) - $" + currentVipersec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            $('#vipersecTwoFiftySixKBItemDisplay').html(vipersecTwoFiftySixKBBank + " Processes Running Through " + vipersecTwoFiftySixKBBank * 2147483648 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec512KBCrawler').click(function () {
        if (money >= currentVipersec512KBPrice) {
            money -= currentVipersec512KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFiveTwelveKBBank++;
            currentVipersec512KBPrice = 10779361280 + 10779361280 * vipersecFiveTwelveKBBank * 0.15;
            localStorage.setItem("vipersecFiveTwelveKBBank", vipersecFiveTwelveKBBank);
            totalPacketsVipersec += 4294967296;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec512KBCrawler').html("Buy 512KB Vipersec Crawler (~4.29 Billion Packets/sec) - $" + currentVipersec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            $('#vipersecFiveTwelveKBItemDisplay').html(vipersecFiveTwelveKBBank + " Processes Running Through " + vipersecFiveTwelveKBBank * 4294967296 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec1MBCrawler').click(function () {
        if (money >= currentVipersec1MBPrice) {
            money -= currentVipersec1MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecOneMBBank++;
            currentVipersec1MBPrice = 21558722560 + 21558722560 * vipersecOneMBBank * 0.15;
            localStorage.setItem("vipersecOneMBBank", vipersecOneMBBank);
            totalPacketsVipersec += 8589934592;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec1MBCrawler').html("Buy 1MB Vipersec Crawler (~8.59 Billion Packets/sec) - $" + currentVipersec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            $('#vipersecOneMBItemDisplay').html(vipersecOneMBBank + " Processes Running Through " + vipersecOneMBBank * 8589934592 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec2MBCrawler').click(function () {
        if (money >= currentVipersec2MBPrice) {
            money -= currentVipersec2MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTwoMBBank++;
            currentVipersec2MBPrice = 43117445120 + 43117445120 * vipersecTwoMBBank * 0.15;
            localStorage.setItem("vipersecTwoMBBank", vipersecTwoMBBank);
            totalPacketsVipersec += 17179869184;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec2MBCrawler').html("Buy 2MB Vipersec Crawler (~17.18 Billion Packets/sec) - $" + currentVipersec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            $('#vipersecTwoMBItemDisplay').html(vipersecTwoMBBank + " Processes Running Through " + vipersecTwoMBBank * 17179869184 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec4MBCrawler').click(function () {
        if (money >= currentVipersec4MBPrice) {
            money -= currentVipersec4MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFourMBBank++;
            currentVipersec4MBPrice = 86234890240 + 86234890240 * vipersecFourMBBank * 0.15;
            localStorage.setItem("vipersecFourMBBank", vipersecFourMBBank);
            totalPacketsVipersec += 34359738368;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec4MBCrawler').html("Buy 4MB Vipersec Crawler (~34.36 Billion Packets/sec) - $" + currentVipersec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            $('#vipersecFourMBItemDisplay').html(vipersecFourMBBank + " Processes Running Through " + vipersecFourMBBank * 34359738368 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec8MBCrawler').click(function () {
        if (money >= currentVipersec8MBPrice) {
            money -= currentVipersec8MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecEightMBBank++;
            currentVipersec8MBPrice = 172469780480 + 172469780480 * vipersecEightMBBank * 0.15;
            localStorage.setItem("vipersecEightMBBank", vipersecEightMBBank);
            totalPacketsVipersec += 68719476736;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec8MBCrawler').html("Buy 8MB Vipersec Crawler (~68.72 Billion Packets/sec) - $" + currentVipersec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            $('#vipersecEightMBItemDisplay').html(vipersecEightMBBank + " Processes Running Through " + vipersecEightMBBank * 68719476736 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyVipersec16MBCrawler').click(function () {
        if (money >= currentVipersec16MBPrice) {
            money -= currentVipersec16MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecSixteenMBBank++;
            currentVipersec16MBPrice = 344939560960 + 344939560960 * vipersecSixteenMBBank * 0.15;
            localStorage.setItem("vipersecSixteenMBBank", vipersecSixteenMBBank);
            totalPacketsVipersec += 137438953472;
            localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
            $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyVipersec16MBCrawler').html("Buy 16MB Vipersec Crawler (~137.44 Billion Packets/sec) - $" + currentVipersec16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
            $('#vipersecSixteenMBItemDisplay').html(vipersecSixteenMBBank + " Processes Running Through " + vipersecSixteenMBBank * 137438953472 + " Packets/Sec");
        }
        return false;
    });

});

