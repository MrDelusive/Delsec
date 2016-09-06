$(document).ready(function () {

    $('#btnChimerasecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#chimerasecCrawlerShop").show();
        return false;
    });

    $('#btnBuyChimerasec1ByteCrawler').click(function () {

        if (money >= currentChimerasec1BytePrice) {
            money -= currentChimerasec1BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecOneByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec1BytePrice = 10280 / chimerasecMassProductionDivider + 10280 / chimerasecMassProductionDivider * chimerasecOneByteBank * 0.02;
            else
                currentChimerasec1BytePrice = 10280 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecOneByteBank", chimerasecOneByteBank);
            totalPacketsChimerasec += 8192;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec1ByteCrawler').html("Buy 1 Byte Chimerasec Crawler (8,192 Packets/sec) - $" + currentChimerasec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.16 RISK/SEC");
            $('#chimerasecOneByteItemDisplay').html(chimerasecOneByteBank + " Processes Running Through " + chimerasecOneByteBank * 8192 + " Packets/Sec");
            if (chimerasecOneByteBank > 0) {
                $("#emailChimerasecStartHeading").show();
                if (emailChimerasecStartDisplayed == "false") {
                    numUnreadEmails++;
                    localStorage.setItem("numUnreadEmails", numUnreadEmails);
                    emailChimerasecStartDisplayed = "true";
                    localStorage.setItem("emailChimerasecStartDisplayed", emailChimerasecStartDisplayed);
                    $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
                }
            }
        }
        return false;
    });

    $('#btnBuyChimerasec2ByteCrawler').click(function () {

        if (money >= currentChimerasec2BytePrice) {
            money -= currentChimerasec2BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecTwoByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec2BytePrice = 20560 / chimerasecMassProductionDivider + 20560 / chimerasecMassProductionDivider * chimerasecTwoByteBank * 0.02;
            else
                currentChimerasec2BytePrice = 20560 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecTwoByteBank", chimerasecTwoByteBank);
            totalPacketsChimerasec += 16384;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec2ByteCrawler').html("Buy 2 Byte Chimerasec Crawler (16,384 Packets/sec) - $" + currentChimerasec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            $('#chimerasecTwoByteItemDisplay').html(chimerasecTwoByteBank + " Processes Running Through " + chimerasecTwoByteBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec4ByteCrawler').click(function () {

        if (money >= currentChimerasec4BytePrice) {
            money -= currentChimerasec4BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecFourByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec4BytePrice = 41120 / chimerasecMassProductionDivider + 41120 / chimerasecMassProductionDivider * chimerasecFourByteBank * 0.02;
            else
                currentChimerasec4BytePrice = 41120 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecFourByteBank", chimerasecFourByteBank);
            totalPacketsChimerasec += 32768;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec4ByteCrawler').html("Buy 4 Byte Chimerasec Crawler (32,768 Packets/sec) - $" + currentChimerasec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            $('#chimerasecFourByteItemDisplay').html(chimerasecFourByteBank + " Processes Running Through " + chimerasecFourByteBank * 32768 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec8ByteCrawler').click(function () {

        if (money >= currentChimerasec8BytePrice) {
            money -= currentChimerasec8BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecEightByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec8BytePrice = 82240 / chimerasecMassProductionDivider + 82240 / chimerasecMassProductionDivider * chimerasecEightByteBank * 0.02;
            else
                currentChimerasec8BytePrice = 82240 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecEightByteBank", chimerasecEightByteBank);
            totalPacketsChimerasec += 65536;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec8ByteCrawler').html("Buy 8 Byte Chimerasec Crawler (65,536 Packets/sec) - $" + currentChimerasec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            $('#chimerasecEightByteItemDisplay').html(chimerasecEightByteBank + " Processes Running Through " + chimerasecEightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec16ByteCrawler').click(function () {

        if (money >= currentChimerasec16BytePrice) {
            money -= currentChimerasec16BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecSixteenByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec16BytePrice = 164480 / chimerasecMassProductionDivider + 164480 / chimerasecMassProductionDivider * chimerasecSixteenByteBank * 0.02;
            else
                currentChimerasec16BytePrice = 164480 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecSixteenByteBank", chimerasecSixteenByteBank);
            totalPacketsChimerasec += 131072;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec16ByteCrawler').html("Buy 16 Byte Chimerasec Crawler (131,072 Packets/sec) - $" + currentChimerasec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            $('#chimerasecSixteenByteItemDisplay').html(chimerasecSixteenByteBank + " Processes Running Through " + chimerasecSixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec32ByteCrawler').click(function () {

        if (money >= currentChimerasec32BytePrice) {
            money -= currentChimerasec32BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecThirtyTwoByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec32BytePrice = 328960 / chimerasecMassProductionDivider + 328960 / chimerasecMassProductionDivider * chimerasecThirtyTwoByteBank * 0.02;
            else
                currentChimerasec32BytePrice = 328960 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecThirtyTwoByteBank", chimerasecThirtyTwoByteBank);
            totalPacketsChimerasec += 262144;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec32ByteCrawler').html("Buy 32 Byte Chimerasec Crawler (262,144 Packets/sec) - $" + currentChimerasec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            $('#chimerasecThirtyTwoByteItemDisplay').html(chimerasecThirtyTwoByteBank + " Processes Running Through " + chimerasecThirtyTwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec64ByteCrawler').click(function () {
        if (money >= currentChimerasec64BytePrice) {
            money -= currentChimerasec64BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecSixtyFourByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec64BytePrice = 657920 / chimerasecMassProductionDivider + 657920 / chimerasecMassProductionDivider * chimerasecSixtyFourByteBank * 0.02;
            else
                currentChimerasec64BytePrice = 657920 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecSixtyFourByteBank", chimerasecSixtyFourByteBank);
            totalPacketsChimerasec += 524288;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec64ByteCrawler').html("Buy 64 Byte Chimerasec Crawler (524,288 Packets/sec) - $" + currentChimerasec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            $('#chimerasecSixtyFourByteItemDisplay').html(chimerasecSixtyFourByteBank + " Processes Running Through " + chimerasecSixtyFourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec128ByteCrawler').click(function () {
        if (money >= currentChimerasec128BytePrice) {
            money -= currentChimerasec128BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecOneTwentyEightByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec128BytePrice = 1315840 / chimerasecMassProductionDivider + 1315840 / chimerasecMassProductionDivider * chimerasecOneTwentyEightByteBank * 0.02;
            else
                currentChimerasec128BytePrice = 1315840 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecOneTwentyEightByteBank", chimerasecOneTwentyEightByteBank);
            totalPacketsChimerasec += 1048576;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec128ByteCrawler').html("Buy 128 Byte Chimerasec Crawler (1,048,576 Packets/sec) - $" + currentChimerasec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            $('#chimerasecOneTwentyEightByteItemDisplay').html(chimerasecOneTwentyEightByteBank + " Processes Running Through " + chimerasecOneTwentyEightByteBank * 1048576 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec256ByteCrawler').click(function () {
        if (money >= currentChimerasec256BytePrice) {
            money -= currentChimerasec256BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecTwoFiftySixByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec256BytePrice = 2631680 / chimerasecMassProductionDivider + 2631680 / chimerasecMassProductionDivider * chimerasecTwoFiftySixByteBank * 0.02;
            else
                currentChimerasec256BytePrice = 2631680 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecTwoFiftySixByteBank", chimerasecTwoFiftySixByteBank);
            totalPacketsChimerasec += 2097152;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec256ByteCrawler').html("Buy 256 Byte Chimerasec Crawler (~2 Million Packets/sec) - $" + currentChimerasec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            $('#chimerasecTwoFiftySixByteItemDisplay').html(chimerasecTwoFiftySixByteBank + " Processes Running Through " + chimerasecTwoFiftySixByteBank * 2097152 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec512ByteCrawler').click(function () {
        if (money >= currentChimerasec512BytePrice) {
            money -= currentChimerasec512BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecFiveTwelveByteBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec512BytePrice = 5263360 / chimerasecMassProductionDivider + 5263360 / chimerasecMassProductionDivider * chimerasecFiveTwelveByteBank * 0.02;
            else
                currentChimerasec512BytePrice = 5263360 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecFiveTwelveByteBank", chimerasecFiveTwelveByteBank);
            totalPacketsChimerasec += 4194304;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec512ByteCrawler').html("Buy 512 Byte Chimerasec Crawler (~4.1 Million Packets/sec) - $" + currentChimerasec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            $('#chimerasecFiveTwelveByteItemDisplay').html(chimerasecFiveTwelveByteBank + " Processes Running Through " + chimerasecFiveTwelveByteBank * 4194304 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec1KBCrawler').click(function () {
        if (money >= currentChimerasec1KBPrice) {
            money -= currentChimerasec1KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecOneKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec1KBPrice = 10526720 / chimerasecMassProductionDivider + 10526720 / chimerasecMassProductionDivider * chimerasecOneKBBank * 0.02;
            else
                currentChimerasec1KBPrice = 10526720 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecOneKBBank", chimerasecOneKBBank);
            totalPacketsChimerasec += 8388608;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec1KBCrawler').html("Buy 1KB Chimerasec Crawler (~8.3 Million Packets/sec) - $" + currentChimerasec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            $('#chimerasecOneKBItemDisplay').html(chimerasecOneKBBank + " Processes Running Through " + chimerasecOneKBBank * 8388608 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec2KBCrawler').click(function () {
        if (money >= currentChimerasec2KBPrice) {
            money -= currentChimerasec2KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecTwoKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec2KBPrice = 21053440 / chimerasecMassProductionDivider + 21053440 / chimerasecMassProductionDivider * chimerasecTwoKBBank * 0.02;
            else
                currentChimerasec2KBPrice = 21053440 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecTwoKBBank", chimerasecTwoKBBank);
            totalPacketsChimerasec += 16777216;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec2KBCrawler').html("Buy 2KB Chimerasec Crawler (~16.7 Million Packets/sec) - $" + currentChimerasec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            $('#chimerasecTwoKBItemDisplay').html(chimerasecTwoKBBank + " Processes Running Through " + chimerasecTwoKBBank * 16777216 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec4KBCrawler').click(function () {
        if (money >= currentChimerasec4KBPrice) {
            money -= currentChimerasec4KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecFourKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec4KBPrice = 42106880 / chimerasecMassProductionDivider + 42106880 / chimerasecMassProductionDivider * chimerasecFourKBBank * 0.02;
            else
                currentChimerasec4KBPrice = 42106880 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecFourKBBank", chimerasecFourKBBank);
            totalPacketsChimerasec += 33554432;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec4KBCrawler').html("Buy 4KB Chimerasec Crawler (~33.4 Million Packets/sec) - $" + currentChimerasec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            $('#chimerasecFourKBItemDisplay').html(chimerasecFourKBBank + " Processes Running Through " + chimerasecFourKBBank * 33554432 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec8KBCrawler').click(function () {
        if (money >= currentChimerasec8KBPrice) {
            money -= currentChimerasec8KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecEightKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec8KBPrice = 84213760 / chimerasecMassProductionDivider + 84213760 / chimerasecMassProductionDivider * chimerasecEightKBBank * 0.02;
            else
                currentChimerasec8KBPrice = 84213760 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecEightKBBank", chimerasecEightKBBank);
            totalPacketsChimerasec += 67108864;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec8KBCrawler').html("Buy 8KB Chimerasec Crawler (~67.1 Million Packets/sec) - $" + currentChimerasec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            $('#chimerasecEightKBItemDisplay').html(chimerasecEightKBBank + " Processes Running Through " + chimerasecEightKBBank * 67108864 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec16KBCrawler').click(function () {
        if (money >= currentChimerasec16KBPrice) {
            money -= currentChimerasec16KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecSixteenKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec16KBPrice = 168427520 / chimerasecMassProductionDivider + 168427520 / chimerasecMassProductionDivider * chimerasecSixteenKBBank * 0.02;
            else
                currentChimerasec16KBPrice = 168427520 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecSixteenKBBank", chimerasecSixteenKBBank);
            totalPacketsChimerasec += 134217728;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec16KBCrawler').html("Buy 16KB Chimerasec Crawler (~134.2 Million Packets/sec) - $" + currentChimerasec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            $('#chimerasecSixteenKBItemDisplay').html(chimerasecSixteenKBBank + " Processes Running Through " + chimerasecSixteenKBBank * 134217728 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec32KBCrawler').click(function () {
        if (money >= currentChimerasec32KBPrice) {
            money -= currentChimerasec32KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecThirtyTwoKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec32KBPrice = 336855040 / chimerasecMassProductionDivider + 336855040 / chimerasecMassProductionDivider * chimerasecThirtyTwoKBBank * 0.02;
            else
                currentChimerasec32KBPrice = 336855040 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecThirtyTwoKBBank", chimerasecThirtyTwoKBBank);
            totalPacketsChimerasec += 268435456;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec32KBCrawler').html("Buy 32KB Chimerasec Crawler (~268.4 Million Packets/sec) - $" + currentChimerasec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            $('#chimerasecThirtyTwoKBItemDisplay').html(chimerasecThirtyTwoKBBank + " Processes Running Through " + chimerasecThirtyTwoKBBank * 268435456 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec64KBCrawler').click(function () {
        if (money >= currentChimerasec64KBPrice) {
            money -= currentChimerasec64KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecSixtyFourKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec64KBPrice = 673710080 / chimerasecMassProductionDivider + 673710080 / chimerasecMassProductionDivider * chimerasecSixtyFourKBBank * 0.02;
            else
                currentChimerasec64KBPrice = 673710080 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecSixtyFourKBBank", chimerasecSixtyFourKBBank);
            totalPacketsChimerasec += 536870912;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec64KBCrawler').html("Buy 64KB Chimerasec Crawler (~536.8 Million Packets/sec) - $" + currentChimerasec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            $('#chimerasecSixtyFourKBItemDisplay').html(chimerasecSixtyFourKBBank + " Processes Running Through " + chimerasecSixtyFourKBBank * 536870912 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec128KBCrawler').click(function () {
        if (money >= currentChimerasec128KBPrice) {
            money -= currentChimerasec128KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecOneTwentyEightKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec128KBPrice = 1347420160 / chimerasecMassProductionDivider + 1347420160 / chimerasecMassProductionDivider * chimerasecOneTwentyEightKBBank * 0.02;
            else
                currentChimerasec128KBPrice = 1347420160 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecOneTwentyEightKBBank", chimerasecOneTwentyEightKBBank);
            totalPacketsChimerasec += 1073741824;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec128KBCrawler').html("Buy 128KB Chimerasec Crawler (~1.07 Billion Packets/sec) - $" + currentChimerasec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            $('#chimerasecOneTwentyEightKBItemDisplay').html(chimerasecOneTwentyEightKBBank + " Processes Running Through " + chimerasecOneTwentyEightKBBank * 1073741824 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec256KBCrawler').click(function () {
        if (money >= currentChimerasec256KBPrice) {
            money -= currentChimerasec256KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecTwoFiftySixKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec256KBPrice = 2694840320 / chimerasecMassProductionDivider + 2694840320 / chimerasecMassProductionDivider * chimerasecTwoFiftySixKBBank * 0.02;
            else
                currentChimerasec256KBPrice = 2694840320 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecTwoFiftySixKBBank", chimerasecTwoFiftySixKBBank);
            totalPacketsChimerasec += 2147483648;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec256KBCrawler').html("Buy 256KB Chimerasec Crawler (~2.14 Billion Packets/sec) - $" + currentChimerasec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            $('#chimerasecTwoFiftySixKBItemDisplay').html(chimerasecTwoFiftySixKBBank + " Processes Running Through " + chimerasecTwoFiftySixKBBank * 2147483648 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec512KBCrawler').click(function () {
        if (money >= currentChimerasec512KBPrice) {
            money -= currentChimerasec512KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecFiveTwelveKBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec512KBPrice = 5389680640 / chimerasecMassProductionDivider + 5389680640 / chimerasecMassProductionDivider * chimerasecFiveTwelveKBBank * 0.02;
            else
                currentChimerasec512KBPrice = 5389680640 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecFiveTwelveKBBank", chimerasecFiveTwelveKBBank);
            totalPacketsChimerasec += 4294967296;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec512KBCrawler').html("Buy 512KB Chimerasec Crawler (~4.29 Billion Packets/sec) - $" + currentChimerasec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            $('#chimerasecFiveTwelveKBItemDisplay').html(chimerasecFiveTwelveKBBank + " Processes Running Through " + chimerasecFiveTwelveKBBank * 4294967296 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec1MBCrawler').click(function () {
        if (money >= currentChimerasec1MBPrice) {
            money -= currentChimerasec1MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecOneMBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec1MBPrice = 10779361280 / chimerasecMassProductionDivider + 10779361280 / chimerasecMassProductionDivider * chimerasecOneMBBank * 0.02;
            else
                currentChimerasec1MBPrice = 10779361280 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecOneMBBank", chimerasecOneMBBank);
            totalPacketsChimerasec += 8589934592;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec1MBCrawler').html("Buy 1MB Chimerasec Crawler (~8.59 Billion Packets/sec) - $" + currentChimerasec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            $('#chimerasecOneMBItemDisplay').html(chimerasecOneMBBank + " Processes Running Through " + chimerasecOneMBBank * 8589934592 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec2MBCrawler').click(function () {
        if (money >= currentChimerasec2MBPrice) {
            money -= currentChimerasec2MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecTwoMBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec2MBPrice = 21558722560 / chimerasecMassProductionDivider + 21558722560 / chimerasecMassProductionDivider * chimerasecTwoMBBank * 0.02;
            else
                currentChimerasec2MBPrice = 21558722560 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecTwoMBBank", chimerasecTwoMBBank);
            totalPacketsChimerasec += 17179869184;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec2MBCrawler').html("Buy 2MB Chimerasec Crawler (~17.18 Billion Packets/sec) - $" + currentChimerasec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            $('#chimerasecTwoMBItemDisplay').html(chimerasecTwoMBBank + " Processes Running Through " + chimerasecTwoMBBank * 17179869184 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec4MBCrawler').click(function () {
        if (money >= currentChimerasec4MBPrice) {
            money -= currentChimerasec4MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecFourMBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec4MBPrice = 43117445120 / chimerasecMassProductionDivider + 43117445120 / chimerasecMassProductionDivider * chimerasecFourMBBank * 0.02;
            else
                currentChimerasec4MBPrice = 43117445120 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecFourMBBank", chimerasecFourMBBank);
            totalPacketsChimerasec += 34359738368;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec4MBCrawler').html("Buy 4MB Chimerasec Crawler (~34.36 Billion Packets/sec) - $" + currentChimerasec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            $('#chimerasecFourMBItemDisplay').html(chimerasecFourMBBank + " Processes Running Through " + chimerasecFourMBBank * 34359738368 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec8MBCrawler').click(function () {
        if (money >= currentChimerasec8MBPrice) {
            money -= currentChimerasec8MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecEightMBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec8MBPrice = 86234890240 / chimerasecMassProductionDivider + 86234890240 / chimerasecMassProductionDivider * chimerasecEightMBBank * 0.02;
            else
                currentChimerasec8MBPrice = 86234890240 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecEightMBBank", chimerasecEightMBBank);
            totalPacketsChimerasec += 68719476736;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec8MBCrawler').html("Buy 8MB Chimerasec Crawler (~68.72 Billion Packets/sec) - $" + currentChimerasec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
            $('#chimerasecEightMBItemDisplay').html(chimerasecEightMBBank + " Processes Running Through " + chimerasecEightMBBank * 68719476736 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyChimerasec16MBCrawler').click(function () {
        if (money >= currentChimerasec16MBPrice) {
            money -= currentChimerasec16MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecSixteenMBBank++;
            if (chimerasecGrowthBenderActive == "false")
                currentChimerasec16MBPrice = 172469780480 / chimerasecMassProductionDivider + 172469780480 / chimerasecMassProductionDivider * chimerasecSixteenMBBank * 0.02;
            else
                currentChimerasec16MBPrice = 172469780480 / chimerasecMassProductionDivider;
            localStorage.setItem("chimerasecSixteenMBBank", chimerasecSixteenMBBank);
            totalPacketsChimerasec += 137438953472;
            localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
            $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyChimerasec16MBCrawler').html("Buy 16MB Chimerasec Crawler (~137.44 Billion Packets/sec) - $" + currentChimerasec16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");
            $('#chimerasecSixteenMBItemDisplay').html(chimerasecSixteenMBBank + " Processes Running Through " + chimerasecSixteenMBBank * 137438953472 + " Packets/Sec");
        }
        return false;
    });

});