$(document).ready(function () {

    $('#btnRussianCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#russianCrawlerShop").show();
        return false;
    });

    $('#btnBuyRussian6BitCrawler').click(function () {
        if (money >= currentRussian6BitPrice) {
            money -= currentRussian6BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixBitBank++;
            currentRussian6BitPrice = (35.20 + 35.20 * russianSixBitBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixBitBank", russianSixBitBank);
            totalPacketsRussian += 16;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian6BitCrawler').html("Buy 6 Bit Russian Tech Crawler (16 Packets/sec) - $" + currentRussian6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
        }
        if (russianSixBitBank > 0) {
            $("#email3Heading").fadeIn(1);
            if (email3Displayed == "false") {
                numUnreadEmails++;
                email3Displayed = "true";
                localStorage.setItem("email3Displayed", email3Displayed);
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
        return false;
    });

    $('#btnBuyRussian12BitCrawler').click(function () {

        if (money >= currentRussian12BitPrice) {
            money -= currentRussian12BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianTwelveBitBank++;
            currentRussian12BitPrice = (2261.6 + 2261.6 * russianTwelveBitBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianTwelveBitBank", russianTwelveBitBank);
            totalPacketsRussian += 1024;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian12BitCrawler').html("Buy 12 Bit Russian Tech Crawler (1,024 Packets/sec) - $" + currentRussian12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.24 RISK/SEC");
            $('#russianTwelveBitItemDisplay').html(russianTwelveBitBank + " Processes Running Through " + russianTwelveBitBank * 1024 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian16BitCrawler').click(function () {

        if (money >= currentRussian16BitPrice) {
            money -= currentRussian16BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixteenBitBank++;
            currentRussian16BitPrice = (36185.6 + 36185.6 * russianSixteenBitBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixteenBitBank", russianSixteenBitBank);
            totalPacketsRussian += 16384;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian16BitCrawler').html("Buy 16 Bit Russian Tech Crawler (16,384 Packets/sec) - $" + currentRussian16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.48 RISK/SEC");
            $('#russianSixteenBitItemDisplay').html(russianSixteenBitBank + " Processes Running Through " + russianSixteenBitBank * 16384 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian4ByteCrawler').click(function () {

        if (money >= currentRussian4BytePrice) {
            money -= currentRussian4BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianFourByteBank++;
            currentRussian4BytePrice = (72371.2 + 72371.2 * russianFourByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianFourByteBank", russianFourByteBank);
            totalPacketsRussian += 32768;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian4ByteCrawler').html("Buy 4 Byte Russian Tech Crawler (32,768 Packets/sec) - $" + currentRussian4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.96 RISK/SEC");
            $('#russianFourByteItemDisplay').html(russianFourByteBank + " Processes Running Through " + russianFourByteBank * 32768 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian8ByteCrawler').click(function () {

        if (money >= currentRussian8BytePrice) {
            money -= currentRussian8BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianEightByteBank++;
            currentRussian8BytePrice = (144742.4 + 144742.4 * russianEightByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianEightByteBank", russianEightByteBank);
            totalPacketsRussian += 65536;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian8ByteCrawler').html("Buy 8 Byte Russian Tech Crawler (65,536 Packets/sec) - $" + currentRussian8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.92 RISK/SEC");
            $('#russianEightByteItemDisplay').html(russianEightByteBank + " Processes Running Through " + russianEightByteBank * 65536 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian16ByteCrawler').click(function () {

        if (money >= currentRussian16BytePrice) {
            money -= currentRussian16BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixteenByteBank++;
            currentRussian16BytePrice = (289484.8 + 289484.8 * russianSixteenByteBank / 10) / redArmyConscriptionDivider;       
            localStorage.setItem("russianSixteenByteBank", russianSixteenByteBank);
            totalPacketsRussian += 131072;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian16ByteCrawler').html("Buy 16 Byte Russian Tech Crawler (131,072 Packets/sec) - $" + currentRussian16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3.84 RISK/SEC");
            $('#russianSixteenByteItemDisplay').html(russianSixteenByteBank + " Processes Running Through " + russianSixteenByteBank * 131072 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian32ByteCrawler').click(function () {

        if (money >= currentRussian32BytePrice) {
            money -= currentRussian32BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianThirtyTwoByteBank++;
            currentRussian32BytePrice = (578969.6 + 578969.6 * russianThirtyTwoByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianThirtyTwoByteBank", russianThirtyTwoByteBank);
            totalPacketsRussian += 262144;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian32ByteCrawler').html("Buy 32 Byte Russian Tech Crawler (262,144 Packets/sec) - $" + currentRussian32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7.68 RISK/SEC");
            $('#russianThirtyTwoByteItemDisplay').html(russianThirtyTwoByteBank + " Processes Running Through " + russianThirtyTwoByteBank * 262144 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian64ByteCrawler').click(function () {
        if (money >= currentRussian64BytePrice) {
            money -= currentRussian64BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixtyFourByteBank++;
            currentRussian64BytePrice = (1157939.2 + 1157939.2 * russianSixtyFourByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixtyFourByteBank", russianSixtyFourByteBank);
            totalPacketsRussian += 524288;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian64ByteCrawler').html("Buy 64 Byte Russian Tech Crawler (524,288 Packets/sec) - $" + currentRussian64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15.36 RISK/SEC");
            $('#russianSixtyFourByteItemDisplay').html(russianSixtyFourByteBank + " Processes Running Through " + russianSixtyFourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian128ByteCrawler').click(function () {
        if (money >= currentRussian128BytePrice) {
            money -= currentRussian128BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianOneTwentyEightByteBank++;
            currentRussian128BytePrice = (2315878.4 + 2315878.4 * russianOneTwentyEightByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianOneTwentyEightByteBank", russianOneTwentyEightByteBank);
            totalPacketsRussian += 1048576;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian128ByteCrawler').html("Buy 128 Byte Russian Tech Crawler (1,048,576 Packets/sec) - $" + currentRussian128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+30.72 RISK/SEC");
            $('#russianOneTwentyEightByteItemDisplay').html(russianOneTwentyEightByteBank + " Processes Running Through " + russianOneTwentyEightByteBank * 1048576 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian256ByteCrawler').click(function () {
        if (money >= currentRussian256BytePrice) {
            money -= currentRussian256BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianTwoFiftySixByteBank++;
            currentRussian256BytePrice = (4631756.8 + 4631756.8 * russianTwoFiftySixByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianTwoFiftySixByteBank", russianTwoFiftySixByteBank);
            totalPacketsRussian += 2097152;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian256ByteCrawler').html("Buy 256 Byte Russian Tech Crawler (~2 Million Packets/sec) - $" + currentRussian256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+61.44 RISK/SEC");
            $('#russianTwoFiftySixByteItemDisplay').html(russianTwoFiftySixByteBank + " Processes Running Through " + russianTwoFiftySixByteBank * 2097152 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian512ByteCrawler').click(function () {
        if (money >= currentRussian512BytePrice) {
            money -= currentRussian512BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianFiveTwelveByteBank++;
            currentRussian512BytePrice = (9263513.6 + 9263513.6 * russianFiveTwelveByteBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianFiveTwelveByteBank", russianFiveTwelveByteBank);
            totalPacketsRussian += 4194304;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian512ByteCrawler').html("Buy 512 Byte Russian Tech Crawler (~4.1 Million Packets/sec) - $" + currentRussian512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+122.88 RISK/SEC");
            $('#russianFiveTwelveByteItemDisplay').html(russianFiveTwelveByteBank + " Processes Running Through " + russianFiveTwelveByteBank * 4194304 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian1KBCrawler').click(function () {
        if (money >= currentRussian1KBPrice) {
            money -= currentRussian1KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianOneKBBank++;
            currentRussian1KBPrice = (18527027.2 + 18527027.2 * russianOneKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianOneKBBank", russianOneKBBank);
            totalPacketsRussian += 8388608;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian1KBCrawler').html("Buy 1KB Russian Tech Crawler (~8.3 Million Packets/sec) - $" + currentRussian1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+245.76 RISK/SEC");
            $('#russianOneKBItemDisplay').html(russianOneKBBank + " Processes Running Through " + russianOneKBBank * 8388608 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian2KBCrawler').click(function () {
        if (money >= currentRussian2KBPrice) {
            money -= currentRussian2KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianTwoKBBank++;
            currentRussian2KBPrice = (37054054.4 + 37054054.4 * russianTwoKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianTwoKBBank", russianTwoKBBank);
            totalPacketsRussian += 16777216;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian2KBCrawler').html("Buy 2KB Russian Tech Crawler (~16.7 Million Packets/sec) - $" + currentRussian2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+491.52 RISK/SEC");
            $('#russianTwoKBItemDisplay').html(russianTwoKBBank + " Processes Running Through " + russianTwoKBBank * 16777216 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian4KBCrawler').click(function () {
        if (money >= currentRussian4KBPrice) {
            money -= currentRussian4KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianFourKBBank++;
            currentRussian4KBPrice = (74108108.8 + 74108108.8 * russianFourKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianFourKBBank", russianFourKBBank);
            totalPacketsRussian += 33554432;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian4KBCrawler').html("Buy 4KB Russian Tech Crawler (~33.4 Million Packets/sec) - $" + currentRussian4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+983.04 RISK/SEC");
            $('#russianFourKBItemDisplay').html(russianFourKBBank + " Processes Running Through " + russianFourKBBank * 33554432 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian8KBCrawler').click(function () {
        if (money >= currentRussian8KBPrice) {
            money -= currentRussian8KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianEightKBBank++;
            currentRussian8KBPrice = (148216217.6 + 148216217.6 * russianEightKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianEightKBBank", russianEightKBBank);
            totalPacketsRussian += 67108864;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian8KBCrawler').html("Buy 8KB Russian Tech Crawler (~67.1 Million Packets/sec) - $" + currentRussian8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,966.08 RISK/SEC");
            $('#russianEightKBItemDisplay').html(russianEightKBBank + " Processes Running Through " + russianEightKBBank * 67108864 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian16KBCrawler').click(function () {
        if (money >= currentRussian16KBPrice) {
            money -= currentRussian16KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixteenKBBank++;
            currentRussian16KBPrice = (296432435.2 + 296432435.2 * russianSixteenKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixteenKBBank", russianSixteenKBBank);
            totalPacketsRussian += 134217728;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian16KBCrawler').html("Buy 16KB Russian Tech Crawler (~134.2 Million Packets/sec) - $" + currentRussian16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3,932.16 RISK/SEC");
            $('#russianSixteenKBItemDisplay').html(russianSixteenKBBank + " Processes Running Through " + russianSixteenKBBank * 134217728 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian32KBCrawler').click(function () {
        if (money >= currentRussian32KBPrice) {
            money -= currentRussian32KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianThirtyTwoKBBank++;
            currentRussian32KBPrice = (592864870.4 + 592864870.4 * russianThirtyTwoKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianThirtyTwoKBBank", russianThirtyTwoKBBank);
            totalPacketsRussian += 268435456;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian32KBCrawler').html("Buy 32KB Russian Tech Crawler (~268.4 Million Packets/sec) - $" + currentRussian32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7,864.32 RISK/SEC");
            $('#russianThirtyTwoKBItemDisplay').html(russianThirtyTwoKBBank + " Processes Running Through " + russianThirtyTwoKBBank * 268435456 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian64KBCrawler').click(function () {
        if (money >= currentRussian64KBPrice) {
            money -= currentRussian64KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixtyFourKBBank++;
            currentRussian64KBPrice = (1185729740.8 + 1185729740.8 * russianSixtyFourKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixtyFourKBBank", russianSixtyFourKBBank);
            totalPacketsRussian += 536870912;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian64KBCrawler').html("Buy 64KB Russian Tech Crawler (~536.8 Million Packets/sec) - $" + currentRussian64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15,728.64 RISK/SEC");
            $('#russianSixtyFourKBItemDisplay').html(russianSixtyFourKBBank + " Processes Running Through " + russianSixtyFourKBBank * 536870912 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian128KBCrawler').click(function () {
        if (money >= currentRussian128KBPrice) {
            money -= currentRussian128KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianOneTwentyEightKBBank++;
            currentRussian128KBPrice = (2371459481.6 + 2371459481.6 * russianOneTwentyEightKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianOneTwentyEightKBBank", russianOneTwentyEightKBBank);
            totalPacketsRussian += 1073741824;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian128KBCrawler').html("Buy 128KB Russian Tech Crawler (~1.07 Billion Packets/sec) - $" + currentRussian128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+31,457.28 RISK/SEC");
            $('#russianOneTwentyEightKBItemDisplay').html(russianOneTwentyEightKBBank + " Processes Running Through " + russianOneTwentyEightKBBank * 1073741824 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian256KBCrawler').click(function () {
        if (money >= currentRussian256KBPrice) {
            money -= currentRussian256KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianTwoFiftySixKBBank++;
            currentRussian256KBPrice = (4742918963.2 + 4742918963.2 * russianTwoFiftySixKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianTwoFiftySixKBBank", russianTwoFiftySixKBBank);
            totalPacketsRussian += 2147483648;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian256KBCrawler').html("Buy 256KB Russian Tech Crawler (~2.14 Billion Packets/sec) - $" + currentRussian256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+62,914.56 RISK/SEC");
            $('#russianTwoFiftySixKBItemDisplay').html(russianTwoFiftySixKBBank + " Processes Running Through " + russianTwoFiftySixKBBank * 2147483648 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian512KBCrawler').click(function () {
        if (money >= currentRussian512KBPrice) {
            money -= currentRussian512KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianFiveTwelveKBBank++;
            currentRussian512KBPrice = (9485837926.4 + 9485837926.4 * russianFiveTwelveKBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianFiveTwelveKBBank", russianFiveTwelveKBBank);
            totalPacketsRussian += 4294967296;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian512KBCrawler').html("Buy 512KB Russian Tech Crawler (~4.29 Billion Packets/sec) - $" + currentRussian512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+125,829.12 RISK/SEC");
            $('#russianFiveTwelveKBItemDisplay').html(russianFiveTwelveKBBank + " Processes Running Through " + russianFiveTwelveKBBank * 4294967296 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian1MBCrawler').click(function () {
        if (money >= currentRussian1MBPrice) {
            money -= currentRussian1MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianOneMBBank++;
            currentRussian1MBPrice = (18971675852.8 + 18971675852.8 * russianOneMBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianOneMBBank", russianOneMBBank);
            totalPacketsRussian += 8589934592;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian1MBCrawler').html("Buy 1MB Russian Tech Crawler (~8.59 Billion Packets/sec) - $" + currentRussian1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+251,658.24 RISK/SEC");
            $('#russianOneMBItemDisplay').html(russianOneMBBank + " Processes Running Through " + russianOneMBBank * 8589934592 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian2MBCrawler').click(function () {
        if (money >= currentRussian2MBPrice) {
            money -= currentRussian2MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianTwoMBBank++;
            currentRussian2MBPrice = (37943351705.6 + 37943351705.6 * russianTwoMBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianTwoMBBank", russianTwoMBBank);
            totalPacketsRussian += 17179869184;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian2MBCrawler').html("Buy 2MB Russian Tech Crawler (~17.18 Billion Packets/sec) - $" + currentRussian2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+503,316.48 RISK/SEC");
            $('#russianTwoMBItemDisplay').html(russianTwoMBBank + " Processes Running Through " + russianTwoMBBank * 17179869184 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian4MBCrawler').click(function () {
        if (money >= currentRussian4MBPrice) {
            money -= currentRussian4MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianFourMBBank++;
            currentRussian4MBPrice = (75886703411.2 + 75886703411.2 * russianFourMBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianFourMBBank", russianFourMBBank);
            totalPacketsRussian += 34359738368;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian4MBCrawler').html("Buy 4MB Russian Tech Crawler (~34.36 Billion Packets/sec) - $" + currentRussian4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,006,632.96 RISK/SEC");
            $('#russianFourMBItemDisplay').html(russianFourMBBank + " Processes Running Through " + russianFourMBBank * 34359738368 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian8MBCrawler').click(function () {
        if (money >= currentRussian8MBPrice) {
            money -= currentRussian8MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianEightMBBank++;
            currentRussian8MBPrice = (151773406822.4 + 151773406822.4 * russianEightMBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianEightMBBank", russianEightMBBank);
            totalPacketsRussian += 68719476736;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian8MBCrawler').html("Buy 8MB Russian Tech Crawler (~68.72 Billion Packets/sec) - $" + currentRussian8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,013,265.92 RISK/SEC");
            $('#russianEightMBItemDisplay').html(russianEightMBBank + " Processes Running Through " + russianEightMBBank * 68719476736 + " Packets/Sec");
        }
        return false;
    });

    $('#btnBuyRussian16MBCrawler').click(function () {
        if (money >= currentRussian16MBPrice) {
            money -= currentRussian16MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixteenMBBank++;
            currentRussian16MBPrice = (303546813644.8 + 303546813644.8 * russianSixteenMBBank / 10) / redArmyConscriptionDivider;
            localStorage.setItem("russianSixteenMBBank", russianSixteenMBBank);
            totalPacketsRussian += 137438953472;
            localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
            $('#totalPacketDisplayRussian').html("Total Russian Tech Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuyRussian16MBCrawler').html("Buy 16MB Russian Tech Crawler (~137.44 Billion Packets/sec) - $" + currentRussian16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+4,026,531.84 RISK/SEC");
            $('#russianSixteenMBItemDisplay').html(russianSixteenMBBank + " Processes Running Through " + russianSixteenMBBank * 137438953472 + " Packets/Sec");
        }
        return false;
    });

});