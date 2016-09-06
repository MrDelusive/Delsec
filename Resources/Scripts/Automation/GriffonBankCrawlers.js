$(document).ready(function () {

    $('#btnGriffonbankCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#griffonbankCrawlerShop").show();
        return false;
    });

    $('#btnBuyGriffonBank1ByteCrawler').click(function () {

        if (money >= currentGriffonBank1BytePrice) {
            money -= currentGriffonBank1BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankOneByteBank++;
            currentGriffonBank1BytePrice = 19737.6 + 19737.6 * griffonBankOneByteBank * 0.15;
            localStorage.setItem("griffonBankOneByteBank", griffonBankOneByteBank);
            totalPacketsGriffonBank += 8192;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank1ByteCrawler').html("Buy 1 Byte Griffon Bank Crawler (8,192 Packets/sec) - $" + currentGriffonBank1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            $('#griffonBankOneByteItemDisplay').html(griffonBankOneByteBank + " Processes Running Through " + griffonBankOneByteBank * 8192 + " Packets/Sec");
            if (griffonBankOneByteBank > 0) {
                $("#emailGriffonbankStartHeading").show();
                if (emailGriffonbankStartDisplayed == "false") {
                    numUnreadEmails++;
                    localStorage.setItem("numUnreadEmails", numUnreadEmails);
                    emailGriffonbankStartDisplayed = "true";
                    localStorage.setItem("emailGriffonbankStartDisplayed", emailGriffonbankStartDisplayed);
                    $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
                }
            }
        }
        return false;
    });

    $('#btnBuyGriffonBank2ByteCrawler').click(function () {

        if (money >= currentGriffonBank2BytePrice) {
            money -= currentGriffonBank2BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankTwoByteBank++;
            currentGriffonBank2BytePrice = 39475.2 + 39475.2 * griffonBankTwoByteBank * 0.15;
            localStorage.setItem("griffonBankTwoByteBank", griffonBankTwoByteBank);
            totalPacketsGriffonBank += 16384;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank2ByteCrawler').html("Buy 2 Byte Griffon Bank Crawler (16,384 Packets/sec) - $" + currentGriffonBank2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            $('#griffonBankTwoByteItemDisplay').html(griffonBankTwoByteBank + " Processes Running Through " + griffonBankTwoByteBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank4ByteCrawler').click(function () {

        if (money >= currentGriffonBank4BytePrice) {
            money -= currentGriffonBank4BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankFourByteBank++;
            currentGriffonBank4BytePrice = 78950.4 + 78950.4 * griffonBankFourByteBank * 0.15;
            localStorage.setItem("griffonBankFourByteBank", griffonBankFourByteBank);
            totalPacketsGriffonBank += 32768;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank4ByteCrawler').html("Buy 4 Byte Griffon Bank Crawler (32,768 Packets/sec) - $" + currentGriffonBank4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            $('#griffonBankFourByteItemDisplay').html(griffonBankFourByteBank + " Processes Running Through " + griffonBankFourByteBank * 32768 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank8ByteCrawler').click(function () {

        if (money >= currentGriffonBank8BytePrice) {
            money -= currentGriffonBank8BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankEightByteBank++;
            currentGriffonBank8BytePrice = 157900.8 + 157900.8 * griffonBankEightByteBank * 0.15;
            localStorage.setItem("griffonBankEightByteBank", griffonBankEightByteBank);
            totalPacketsGriffonBank += 65536;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank8ByteCrawler').html("Buy 8 Byte Griffon Bank Crawler (65,536 Packets/sec) - $" + currentGriffonBank8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            $('#griffonBankEightByteItemDisplay').html(griffonBankEightByteBank + " Processes Running Through " + griffonBankEightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank16ByteCrawler').click(function () {

        if (money >= currentGriffonBank16BytePrice) {
            money -= currentGriffonBank16BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankSixteenByteBank++;
            currentGriffonBank16BytePrice = 315801.6 + 315801.6 * griffonBankSixteenByteBank * 0.15;
            localStorage.setItem("griffonBankSixteenByteBank", griffonBankSixteenByteBank);
            totalPacketsGriffonBank += 131072;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank16ByteCrawler').html("Buy 16 Byte Griffon Bank Crawler (131,072 Packets/sec) - $" + currentGriffonBank16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            $('#griffonBankSixteenByteItemDisplay').html(griffonBankSixteenByteBank + " Processes Running Through " + griffonBankSixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank32ByteCrawler').click(function () {

        if (money >= currentGriffonBank32BytePrice) {
            money -= currentGriffonBank32BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankThirtyTwoByteBank++;
            currentGriffonBank32BytePrice = 631603.2 + 631603.2 * griffonBankThirtyTwoByteBank * 0.15;
            localStorage.setItem("griffonBankThirtyTwoByteBank", griffonBankThirtyTwoByteBank);
            totalPacketsGriffonBank += 262144;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank32ByteCrawler').html("Buy 32 Byte Griffon Bank Crawler (262,144 Packets/sec) - $" + currentGriffonBank32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            $('#griffonBankThirtyTwoByteItemDisplay').html(griffonBankThirtyTwoByteBank + " Processes Running Through " + griffonBankThirtyTwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank64ByteCrawler').click(function () {
        if (money >= currentGriffonBank64BytePrice) {
            money -= currentGriffonBank64BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankSixtyFourByteBank++;
            currentGriffonBank64BytePrice = 1263206.4 + 1263206.4 * griffonBankSixtyFourByteBank * 0.15;
            localStorage.setItem("griffonBankSixtyFourByteBank", griffonBankSixtyFourByteBank);
            totalPacketsGriffonBank += 524288;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank64ByteCrawler').html("Buy 64 Byte Griffon Bank Crawler (524,288 Packets/sec) - $" + currentGriffonBank64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            $('#griffonBankSixtyFourByteItemDisplay').html(griffonBankSixtyFourByteBank + " Processes Running Through " + griffonBankSixtyFourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank128ByteCrawler').click(function () {
        if (money >= currentGriffonBank128BytePrice) {
            money -= currentGriffonBank128BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankOneTwentyEightByteBank++;
            currentGriffonBank128BytePrice = 2526412.8 + 2526412.8 * griffonBankOneTwentyEightByteBank * 0.15;
            localStorage.setItem("griffonBankOneTwentyEightByteBank", griffonBankOneTwentyEightByteBank);
            totalPacketsGriffonBank += 1048576;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank128ByteCrawler').html("Buy 128 Byte Griffon Bank Crawler (1,048,576 Packets/sec) - $" + currentGriffonBank128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            $('#griffonBankOneTwentyEightByteItemDisplay').html(griffonBankOneTwentyEightByteBank + " Processes Running Through " + griffonBankOneTwentyEightByteBank * 1048576 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank256ByteCrawler').click(function () {
        if (money >= currentGriffonBank256BytePrice) {
            money -= currentGriffonBank256BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankTwoFiftySixByteBank++;
            currentGriffonBank256BytePrice = 5052825.6 + 5052825.6 * griffonBankTwoFiftySixByteBank * 0.15;
            localStorage.setItem("griffonBankTwoFiftySixByteBank", griffonBankTwoFiftySixByteBank);
            totalPacketsGriffonBank += 2097152;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank256ByteCrawler').html("Buy 256 Byte Griffon Bank Crawler (~2 Million Packets/sec) - $" + currentGriffonBank256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            $('#griffonBankTwoFiftySixByteItemDisplay').html(griffonBankTwoFiftySixByteBank + " Processes Running Through " + griffonBankTwoFiftySixByteBank * 2097152 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank512ByteCrawler').click(function () {
        if (money >= currentGriffonBank512BytePrice) {
            money -= currentGriffonBank512BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankFiveTwelveByteBank++;
            currentGriffonBank512BytePrice = 10105651.2 + 10105651.2 * griffonBankFiveTwelveByteBank * 0.15;
            localStorage.setItem("griffonBankFiveTwelveByteBank", griffonBankFiveTwelveByteBank);
            totalPacketsGriffonBank += 4194304;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank512ByteCrawler').html("Buy 512 Byte Griffon Bank Crawler (~4.1 Million Packets/sec) - $" + currentGriffonBank512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            $('#griffonBankFiveTwelveByteItemDisplay').html(griffonBankFiveTwelveByteBank + " Processes Running Through " + griffonBankFiveTwelveByteBank * 4194304 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank1KBCrawler').click(function () {
        if (money >= currentGriffonBank1KBPrice) {
            money -= currentGriffonBank1KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankOneKBBank++;
            currentGriffonBank1KBPrice = 20211302.4 + 20211302.4 * griffonBankOneKBBank * 0.15;
            localStorage.setItem("griffonBankOneKBBank", griffonBankOneKBBank);
            totalPacketsGriffonBank += 8388608;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank1KBCrawler').html("Buy 1KB Griffon Bank Crawler (~8.3 Million Packets/sec) - $" + currentGriffonBank1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            $('#griffonBankOneKBItemDisplay').html(griffonBankOneKBBank + " Processes Running Through " + griffonBankOneKBBank * 8388608 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank2KBCrawler').click(function () {
        if (money >= currentGriffonBank2KBPrice) {
            money -= currentGriffonBank2KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankTwoKBBank++;
            currentGriffonBank2KBPrice = 40422604.8 + 40422604.8 * griffonBankTwoKBBank * 0.15;
            localStorage.setItem("griffonBankTwoKBBank", griffonBankTwoKBBank);
            totalPacketsGriffonBank += 16777216;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank2KBCrawler').html("Buy 2KB Griffon Bank Crawler (~16.7 Million Packets/sec) - $" + currentGriffonBank2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            $('#griffonBankTwoKBItemDisplay').html(griffonBankTwoKBBank + " Processes Running Through " + griffonBankTwoKBBank * 16777216 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank4KBCrawler').click(function () {
        if (money >= currentGriffonBank4KBPrice) {
            money -= currentGriffonBank4KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankFourKBBank++;
            currentGriffonBank4KBPrice = 80845209.6 + 80845209.6 * griffonBankFourKBBank * 0.15;
            localStorage.setItem("griffonBankFourKBBank", griffonBankFourKBBank);
            totalPacketsGriffonBank += 33554432;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank4KBCrawler').html("Buy 4KB Griffon Bank Crawler (~33.4 Million Packets/sec) - $" + currentGriffonBank4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            $('#griffonBankFourKBItemDisplay').html(griffonBankFourKBBank + " Processes Running Through " + griffonBankFourKBBank * 33554432 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank8KBCrawler').click(function () {
        if (money >= currentGriffonBank8KBPrice) {
            money -= currentGriffonBank8KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankEightKBBank++;
            currentGriffonBank8KBPrice = 161690419.2 + 161690419.2 * griffonBankEightKBBank * 0.15;
            localStorage.setItem("griffonBankEightKBBank", griffonBankEightKBBank);
            totalPacketsGriffonBank += 67108864;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank8KBCrawler').html("Buy 8KB Griffon Bank Crawler (~67.1 Million Packets/sec) - $" + currentGriffonBank8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            $('#griffonBankEightKBItemDisplay').html(griffonBankEightKBBank + " Processes Running Through " + griffonBankEightKBBank * 67108864 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank16KBCrawler').click(function () {
        if (money >= currentGriffonBank16KBPrice) {
            money -= currentGriffonBank16KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankSixteenKBBank++;
            currentGriffonBank16KBPrice = 323380838.4 + 323380838.4 * griffonBankSixteenKBBank * 0.15;
            localStorage.setItem("griffonBankSixteenKBBank", griffonBankSixteenKBBank);
            totalPacketsGriffonBank += 134217728;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank16KBCrawler').html("Buy 16KB Griffon Bank Crawler (~134.2 Million Packets/sec) - $" + currentGriffonBank16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            $('#griffonBankSixteenKBItemDisplay').html(griffonBankSixteenKBBank + " Processes Running Through " + griffonBankSixteenKBBank * 134217728 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank32KBCrawler').click(function () {
        if (money >= currentGriffonBank32KBPrice) {
            money -= currentGriffonBank32KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankThirtyTwoKBBank++;
            currentGriffonBank32KBPrice = 646761676.8 + 646761676.8 * griffonBankThirtyTwoKBBank * 0.15;
            localStorage.setItem("griffonBankThirtyTwoKBBank", griffonBankThirtyTwoKBBank);
            totalPacketsGriffonBank += 268435456;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank32KBCrawler').html("Buy 32KB Griffon Bank Crawler (~268.4 Million Packets/sec) - $" + currentGriffonBank32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            $('#griffonBankThirtyTwoKBItemDisplay').html(griffonBankThirtyTwoKBBank + " Processes Running Through " + griffonBankThirtyTwoKBBank * 268435456 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank64KBCrawler').click(function () {
        if (money >= currentGriffonBank64KBPrice) {
            money -= currentGriffonBank64KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankSixtyFourKBBank++;
            currentGriffonBank64KBPrice = 1293523353.6 + 1293523353.6 * griffonBankSixtyFourKBBank * 0.15;
            localStorage.setItem("griffonBankSixtyFourKBBank", griffonBankSixtyFourKBBank);
            totalPacketsGriffonBank += 536870912;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank64KBCrawler').html("Buy 64KB Griffon Bank Crawler (~536.8 Million Packets/sec) - $" + currentGriffonBank64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            $('#griffonBankSixtyFourKBItemDisplay').html(griffonBankSixtyFourKBBank + " Processes Running Through " + griffonBankSixtyFourKBBank * 536870912 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank128KBCrawler').click(function () {
        if (money >= currentGriffonBank128KBPrice) {
            money -= currentGriffonBank128KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankOneTwentyEightKBBank++;
            currentGriffonBank128KBPrice = 2587046707.2 + 2587046707.2 * griffonBankOneTwentyEightKBBank * 0.15;
            localStorage.setItem("griffonBankOneTwentyEightKBBank", griffonBankOneTwentyEightKBBank);
            totalPacketsGriffonBank += 1073741824;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank128KBCrawler').html("Buy 128KB Griffon Bank Crawler (~1.07 Billion Packets/sec) - $" + currentGriffonBank128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            $('#griffonBankOneTwentyEightKBItemDisplay').html(griffonBankOneTwentyEightKBBank + " Processes Running Through " + griffonBankOneTwentyEightKBBank * 1073741824 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank256KBCrawler').click(function () {
        if (money >= currentGriffonBank256KBPrice) {
            money -= currentGriffonBank256KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankTwoFiftySixKBBank++;
            currentGriffonBank256KBPrice = 5174093414.4 + 5174093414.4 * griffonBankTwoFiftySixKBBank * 0.15;
            localStorage.setItem("griffonBankTwoFiftySixKBBank", griffonBankTwoFiftySixKBBank);
            totalPacketsGriffonBank += 2147483648;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank256KBCrawler').html("Buy 256KB Griffon Bank Crawler (~2.14 Billion Packets/sec) - $" + currentGriffonBank256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            $('#griffonBankTwoFiftySixKBItemDisplay').html(griffonBankTwoFiftySixKBBank + " Processes Running Through " + griffonBankTwoFiftySixKBBank * 2147483648 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank512KBCrawler').click(function () {
        if (money >= currentGriffonBank512KBPrice) {
            money -= currentGriffonBank512KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankFiveTwelveKBBank++;
            currentGriffonBank512KBPrice = 10348186828.8 + 10348186828.8 * griffonBankFiveTwelveKBBank * 0.15;
            localStorage.setItem("griffonBankFiveTwelveKBBank", griffonBankFiveTwelveKBBank);
            totalPacketsGriffonBank += 4294967296;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank512KBCrawler').html("Buy 512KB Griffon Bank Crawler (~4.29 Billion Packets/sec) - $" + currentGriffonBank512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            $('#griffonBankFiveTwelveKBItemDisplay').html(griffonBankFiveTwelveKBBank + " Processes Running Through " + griffonBankFiveTwelveKBBank * 4294967296 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank1MBCrawler').click(function () {
        if (money >= currentGriffonBank1MBPrice) {
            money -= currentGriffonBank1MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankOneMBBank++;
            currentGriffonBank1MBPrice = 20696373657.6 + 20696373657.6 * griffonBankOneMBBank * 0.15;
            localStorage.setItem("griffonBankOneMBBank", griffonBankOneMBBank);
            totalPacketsGriffonBank += 8589934592;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank1MBCrawler').html("Buy 1MB Griffon Bank Crawler (~8.59 Billion Packets/sec) - $" + currentGriffonBank1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            $('#griffonBankOneMBItemDisplay').html(griffonBankOneMBBank + " Processes Running Through " + griffonBankOneMBBank * 8589934592 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank2MBCrawler').click(function () {
        if (money >= currentGriffonBank2MBPrice) {
            money -= currentGriffonBank2MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankTwoMBBank++;
            currentGriffonBank2MBPrice = 41392747315.2 + 41392747315.2 * griffonBankTwoMBBank * 0.15;
            localStorage.setItem("griffonBankTwoMBBank", griffonBankTwoMBBank);
            totalPacketsGriffonBank += 17179869184;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank2MBCrawler').html("Buy 2MB Griffon Bank Crawler (~17.18 Billion Packets/sec) - $" + currentGriffonBank2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            $('#griffonBankTwoMBItemDisplay').html(griffonBankTwoMBBank + " Processes Running Through " + griffonBankTwoMBBank * 17179869184 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank4MBCrawler').click(function () {
        if (money >= currentGriffonBank4MBPrice) {
            money -= currentGriffonBank4MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankFourMBBank++;
            currentGriffonBank4MBPrice = 82785494630.4 + 82785494630.4 * griffonBankFourMBBank * 0.15;
            localStorage.setItem("griffonBankFourMBBank", griffonBankFourMBBank);
            totalPacketsGriffonBank += 34359738368;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank4MBCrawler').html("Buy 4MB Griffon Bank Crawler (~34.36 Billion Packets/sec) - $" + currentGriffonBank4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
            $('#griffonBankFourMBItemDisplay').html(griffonBankFourMBBank + " Processes Running Through " + griffonBankFourMBBank * 34359738368 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank8MBCrawler').click(function () {
        if (money >= currentGriffonBank8MBPrice) {
            money -= currentGriffonBank8MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankEightMBBank++;
            currentGriffonBank8MBPrice = 165570989260.8 + 165570989260.8 * griffonBankEightMBBank * 0.15;
            localStorage.setItem("griffonBankEightMBBank", griffonBankEightMBBank);
            totalPacketsGriffonBank += 68719476736;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank8MBCrawler').html("Buy 8MB Griffon Bank Crawler (~68.72 Billion Packets/sec) - $" + currentGriffonBank8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");
            $('#griffonBankEightMBItemDisplay').html(griffonBankEightMBBank + " Processes Running Through " + griffonBankEightMBBank * 68719476736 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyGriffonBank16MBCrawler').click(function () {
        if (money >= currentGriffonBank16MBPrice) {
            money -= currentGriffonBank16MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBankSixteenMBBank++;
            currentGriffonBank16MBPrice = 331141978521.6 + 331141978521.6 * griffonBankSixteenMBBank * 0.15;
            localStorage.setItem("griffonBankSixteenMBBank", griffonBankSixteenMBBank);
            totalPacketsGriffonBank += 137438953472;
            localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
            $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyGriffonBank16MBCrawler').html("Buy 16MB Griffon Bank Crawler (~137.44 Billion Packets/sec) - $" + currentGriffonBank16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,368,709.12 RISK/SEC");
            $('#griffonBankSixteenMBItemDisplay').html(griffonBankSixteenMBBank + " Processes Running Through " + griffonBankSixteenMBBank * 137438953472 + " Packets/Sec");
        }
        return false;
    });
});