$(document).ready(function () {

    $('#btnShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#delsecCrawlerShop").show();
        return false;
    });

    $('#btnDelsecCrawlerShop').click(function () {
        $(".hidden_Divs").hide();
        $("#shop").show();
        $("#delsecCrawlerShop").show();
        return false;
    });

    $('#btnBuy2BitCrawler').click(function () {
        if (money >= current2BitPrice) {
            money -= current2BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twoBitBank++;
            current2BitPrice = 2 + 2 * twoBitBank / 10;
            localStorage.setItem("twoBitBank", twoBitBank);
            totalPackets += 1;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            
            $('#btnBuy2BitCrawler').html("Buy 2 Bit Delsec Crawler (1 Packets/sec) - $" + current2BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoBitItemDisplay').html(twoBitBank + " Processes Running Through " + twoBitBank + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 1 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy3BitCrawler').click(function () {       
        if (money >= current3BitPrice) {           
            money -= current3BitPrice;
            localStorage.setItem("money", money);         
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            threeBitBank++;
            current3BitPrice = 4 + 4 * threeBitBank / 10;
            localStorage.setItem("threeBitBank", threeBitBank);
            totalPackets += 2;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy3BitCrawler').html("Buy 3 Bit Delsec Crawler (2 Packets/sec) - $" + current3BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 2 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 2 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy4BitCrawler').click(function () {      
        if (money >= current4BitPrice) {          
            money -= current4BitPrice;
            localStorage.setItem("money", money);            
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourBitBank++;
            current4BitPrice = 8 + 8 * fourBitBank / 10;
            localStorage.setItem("fourBitBank", fourBitBank);
            totalPackets += 4;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy4BitCrawler').html("Buy 4 Bit Delsec Crawler (4 Packets/sec) - $" + current4BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 4 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        if (fourBitBank > 3) {
            $("#email4Heading").show(1);
            if (email4Displayed == "false") {
                numUnreadEmails++;
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                email4Displayed = "true";
                localStorage.setItem("email4Displayed", email4Displayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
        return false;
    });

    $('#btnBuy6BitCrawler').click(function () {
        
        if (money >= current6BitPrice) {
            money -= current6BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixBitBank++;
            current6BitPrice = 32 + 32 * sixBitBank / 10;
            localStorage.setItem("sixBitBank", sixBitBank);
            totalPackets += 16;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy6BitCrawler').html("Buy 6 Bit Delsec Crawler (16 Packets/sec) - $" + current6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 16 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy8BitCrawler').click(function () {
        if (money >= current8BitPrice) {
            money -= current8BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightBitBank++;
            current8BitPrice = 128 + 128 * eightBitBank / 10;
            localStorage.setItem("eightBitBank", eightBitBank);
            totalPackets += 64;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy8BitCrawler').html("Buy 8 Bit Delsec Crawler (64 Packets/sec) - $" + current8BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 64 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy12BitCrawler').click(function () {

        if (money >= current12BitPrice) {
            money -= current12BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twelveBitBank++;
            current12BitPrice = 2056 + 2056 * twelveBitBank / 10;
            localStorage.setItem("twelveBitBank", twelveBitBank);
            totalPackets += 1024;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy12BitCrawler').html("Buy 12 Bit Delsec Crawler (1,024 Packets/sec) - $" + current12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.16 RISK/SEC");
            $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 1024 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy16BitCrawler').click(function () {
        if (money >= current16BitPrice) {
            money -= current16BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenBitBank++;
            current16BitPrice = 32896 + 32896 * sixteenBitBank / 10;
            localStorage.setItem("sixteenBitBank", sixteenBitBank);
            totalPackets += 16384;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy16BitCrawler').html("Buy 16 Bit Delsec Crawler (16,384 Packets/sec) - $" + current16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 16384 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy4ByteCrawler').click(function () {
        if (money >= current4BytePrice) {
            money -= current4BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourByteBank++;
            current4BytePrice = 65792 + 65792 * fourByteBank / 10;
            localStorage.setItem("fourByteBank", fourByteBank);
            totalPackets += 32768;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy4ByteCrawler').html("Buy 4 Byte Delsec Crawler (32,768 Packets/sec) - $" + current4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 32768 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
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
        if (money >= current8BytePrice) {
            money -= current8BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightByteBank++;
            current8BytePrice = 131584 + 131584 * eightByteBank / 10;
            localStorage.setItem("eightByteBank", eightByteBank);
            totalPackets += 65536;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy8ByteCrawler').html("Buy 8 Byte Delsec Crawler (65,536 Packets/sec) - $" + current8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 65536 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy16ByteCrawler').click(function () {
        if (money >= current16BytePrice) {
            money -= current16BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenByteBank++;
            current16BytePrice = 263168 + 263168 * sixteenByteBank / 10;
            localStorage.setItem("sixteenByteBank", sixteenByteBank);
            totalPackets += 131072;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy16ByteCrawler').html("Buy 16 Byte Delsec Crawler (131,072 Packets/sec) - $" + current16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 131072 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy32ByteCrawler').click(function () {
        if (money >= current32BytePrice) {
            money -= current32BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            thirtytwoByteBank++;
            current32BytePrice = 526336 + 526336 * thirtytwoByteBank / 10;
            localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
            totalPackets += 262144;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy32ByteCrawler').html("Buy 32 Byte Delsec Crawler (262,144 Packets/sec) - $" + current32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 262144 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy64ByteCrawler').click(function () {
        if (money >= current64BytePrice) {
            money -= current64BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixtyfourByteBank++;
            current64BytePrice = 1052672 + 1052672 * sixtyfourByteBank / 10;
            localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);
            totalPackets += 524288;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy64ByteCrawler').html("Buy 64 Byte Delsec Crawler (524,288 Packets/sec) - $" + current64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 524288 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy128ByteCrawler').click(function () {
        if (money >= current128BytePrice) {
            money -= current128BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            oneTwentyEightByteBank++;
            current128BytePrice = 2105344 + 2105344 * oneTwentyEightByteBank / 10;
            localStorage.setItem("oneTwentyEightByteBank", oneTwentyEightByteBank);
            totalPackets += 1048576;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy128ByteCrawler').html("Buy 128 Byte Delsec Crawler (1,048,576 Packets/sec) - $" + current128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            $('#oneTwentyEightByteItemDisplay').html(oneTwentyEightByteBank + " Processes Running Through " + oneTwentyEightByteBank * 1048576 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 1048576 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy256ByteCrawler').click(function () {
        if (money >= current256BytePrice) {
            money -= current256BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twoFiftySixByteBank++;
            current256BytePrice = 4210688 + 4210688 * twoFiftySixByteBank / 10;
            localStorage.setItem("twoFiftySixByteBank", twoFiftySixByteBank);
            totalPackets += 2097152;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy256ByteCrawler').html("Buy 256 Byte Delsec Crawler (~2 Million Packets/sec) - $" + current256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            $('#twoFiftySixByteItemDisplay').html(twoFiftySixByteBank + " Processes Running Through " + twoFiftySixByteBank * 2097152 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 2097152 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy512ByteCrawler').click(function () {
        if (money >= current512BytePrice) {
            money -= current512BytePrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fiveTwelveByteBank++;
            current512BytePrice = 8421376 + 8421376 * fiveTwelveByteBank / 10;
            localStorage.setItem("fiveTwelveByteBank", fiveTwelveByteBank);
            totalPackets += 4194304;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy512ByteCrawler').html("Buy 512 Byte Delsec Crawler (~4.1 Million Packets/sec) - $" + current512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            $('#fiveTwelveByteItemDisplay').html(fiveTwelveByteBank + " Processes Running Through " + fiveTwelveByteBank * 4194304 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 4194304 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy1KBCrawler').click(function () {
        if (money >= current1KBPrice) {
            money -= current1KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            oneKBBank++;
            current1KBPrice = 16842752 + 16842752 * oneKBBank / 10;
            localStorage.setItem("oneKBBank", oneKBBank);
            totalPackets += 8388608;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy1KBCrawler').html("Buy 1KB Delsec Crawler (~8.3 Million Packets/sec) - $" + current1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            $('#oneKBItemDisplay').html(oneKBBank + " Processes Running Through " + oneKBBank * 8388608 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 8388608 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy2KBCrawler').click(function () {
        if (money >= current2KBPrice) {
            money -= current2KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twoKBBank++;
            current2KBPrice = 33685504 + 33685504 * twoKBBank / 10;
            localStorage.setItem("twoKBBank", twoKBBank);
            totalPackets += 16777216;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy2KBCrawler').html("Buy 2KB Delsec Crawler (~16.7 Million Packets/sec) - $" + current2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            $('#twoKBItemDisplay').html(twoKBBank + " Processes Running Through " + twoKBBank * 16777216 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 16777216 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy4KBCrawler').click(function () {
        if (money >= current4KBPrice) {
            money -= current4KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourKBBank++;
            current4KBPrice = 67371008 + 67371008 * fourKBBank / 10;
            localStorage.setItem("fourKBBank", fourKBBank);
            totalPackets += 33554432;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy4KBCrawler').html("Buy 4KB Delsec Crawler (~33.4 Million Packets/sec) - $" + current4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            $('#fourKBItemDisplay').html(fourKBBank + " Processes Running Through " + fourKBBank * 33554432 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 33554432 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
            if (fourKBBank > 0) {
                $("#email4KBHeading").show();
                if (email4KBDisplayed == "false") {
                    numUnreadEmails++;
                    localStorage.setItem("numUnreadEmails", numUnreadEmails);
                    email4KBDisplayed = "true";
                    localStorage.setItem("email4KBDisplayed", email4KBDisplayed);
                    $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
                }
            }
        }
        return false;
    });

    $('#btnBuy8KBCrawler').click(function () {
        if (money >= current8KBPrice) {
            money -= current8KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightKBBank++;
            current8KBPrice = 134742016 + 134742016 * eightKBBank / 10;
            localStorage.setItem("eightKBBank", eightKBBank);
            totalPackets += 67108864;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy8KBCrawler').html("Buy 8KB Delsec Crawler (~67.1 Million Packets/sec) - $" + current8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            $('#eightKBItemDisplay').html(eightKBBank + " Processes Running Through " + eightKBBank * 67108864 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 67108864 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy16KBCrawler').click(function () {
        if (money >= current16KBPrice) {
            money -= current16KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenKBBank++;
            current16KBPrice = 269484032 + 269484032 * sixteenKBBank / 10;
            localStorage.setItem("sixteenKBBank", sixteenKBBank);
            totalPackets += 134217728;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy16KBCrawler').html("Buy 16KB Delsec Crawler (~134.2 Million Packets/sec) - $" + current16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            $('#sixteenKBItemDisplay').html(sixteenKBBank + " Processes Running Through " + sixteenKBBank * 134217728 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 134217728 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy32KBCrawler').click(function () {
        if (money >= current32KBPrice) {
            money -= current32KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            thirtyTwoKBBank++;
            current32KBPrice = 538968064 + 538968064 * thirtyTwoKBBank / 10;
            localStorage.setItem("thirtyTwoKBBank", thirtyTwoKBBank);
            totalPackets += 268435456;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy32KBCrawler').html("Buy 32KB Delsec Crawler (~268.4 Million Packets/sec) - $" + current32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            $('#thirtyTwoKBItemDisplay').html(thirtyTwoKBBank + " Processes Running Through " + thirtyTwoKBBank * 268435456 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 268435456 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy64KBCrawler').click(function () {
        if (money >= current64KBPrice) {
            money -= current64KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixtyFourKBBank++;
            current64KBPrice = 1077936128 + 1077936128 * sixtyFourKBBank / 10;
            localStorage.setItem("sixtyFourKBBank", sixtyFourKBBank);
            totalPackets += 536870912;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy64KBCrawler').html("Buy 64KB Delsec Crawler (~536.8 Million Packets/sec) - $" + current64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            $('#sixtyFourKBItemDisplay').html(sixtyFourKBBank + " Processes Running Through " + sixtyFourKBBank * 536870912 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 536870912 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy128KBCrawler').click(function () {
        if (money >= current128KBPrice) {
            money -= current128KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            oneTwentyEightKBBank++;
            current128KBPrice = 2155872256 + 2155872256 * oneTwentyEightKBBank / 10;
            localStorage.setItem("oneTwentyEightKBBank", oneTwentyEightKBBank);
            totalPackets += 1073741824;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy128KBCrawler').html("Buy 128KB Delsec Crawler (~1.07 Billion Packets/sec) - $" + current128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            $('#oneTwentyEightKBItemDisplay').html(oneTwentyEightKBBank + " Processes Running Through " + oneTwentyEightKBBank * 1073741824 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 1073741824 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy256KBCrawler').click(function () {
        if (money >= current256KBPrice) {
            money -= current256KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twoFiftySixKBBank++;
            current256KBPrice = 4311744512 + 4311744512 * twoFiftySixKBBank / 10;
            localStorage.setItem("twoFiftySixKBBank", twoFiftySixKBBank);
            totalPackets += 2147483648;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy256KBCrawler').html("Buy 256KB Delsec Crawler (~2.14 Billion Packets/sec) - $" + current256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            $('#twoFiftySixKBItemDisplay').html(twoFiftySixKBBank + " Processes Running Through " + twoFiftySixKBBank * 2147483648 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 2147483648 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy512KBCrawler').click(function () {
        if (money >= current512KBPrice) {
            money -= current512KBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fiveTwelveKBBank++;
            current512KBPrice = 8623489024 + 8623489024 * fiveTwelveKBBank / 10;
            localStorage.setItem("fiveTwelveKBBank", fiveTwelveKBBank);
            totalPackets += 4294967296;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy512KBCrawler').html("Buy 512KB Delsec Crawler (~4.29 Billion Packets/sec) - $" + current512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            $('#fiveTwelveKBItemDisplay').html(fiveTwelveKBBank + " Processes Running Through " + fiveTwelveKBBank * 4294967296 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 4294967296 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy1MBCrawler').click(function () {
        if (money >= current1MBPrice) {
            money -= current1MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            oneMBBank++;
            current1MBPrice = 17246978048 + 17246978048 * oneMBBank / 10;
            localStorage.setItem("oneMBBank", oneMBBank);
            totalPackets += 8589934592;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy1MBCrawler').html("Buy 1MB Delsec Crawler (~8.59 Billion Packets/sec) - $" + current1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            $('#oneMBItemDisplay').html(oneMBBank + " Processes Running Through " + oneMBBank * 8589934592 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 8589934592 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy2MBCrawler').click(function () {
        if (money >= current2MBPrice) {
            money -= current2MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            twoMBBank++;
            current2MBPrice = 34493956096 + 34493956096 * twoMBBank / 10;
            localStorage.setItem("twoMBBank", twoMBBank);
            totalPackets += 17179869184;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy2MBCrawler').html("Buy 2MB Delsec Crawler (~17.18 Billion Packets/sec) - $" + current2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            $('#twoMBItemDisplay').html(twoMBBank + " Processes Running Through " + twoMBBank * 17179869184 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 17179869184 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy4MBCrawler').click(function () {
        if (money >= current4MBPrice) {
            money -= current4MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            fourMBBank++;
            current4MBPrice = 68987912192 + 68987912192 * fourMBBank / 10;
            localStorage.setItem("fourMBBank", fourMBBank);
            totalPackets += 34359738368;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy4MBCrawler').html("Buy 4MB Delsec Crawler (~34.36 Billion Packets/sec) - $" + current4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            $('#fourMBItemDisplay').html(fourMBBank + " Processes Running Through " + fourMBBank * 34359738368 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 34359738368 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy8MBCrawler').click(function () {
        if (money >= current8MBPrice) {
            money -= current8MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            eightMBBank++;
            current8MBPrice = 137975824384 + 137975824384 * eightMBBank / 10;
            localStorage.setItem("eightMBBank", eightMBBank);
            totalPackets += 68719476736;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy8MBCrawler').html("Buy 8MB Delsec Crawler (~68.72 Billion Packets/sec) - $" + current8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
            $('#eightMBItemDisplay').html(eightMBBank + " Processes Running Through " + eightMBBank * 68719476736 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 68719476736 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

    $('#btnBuy16MBCrawler').click(function () {
        if (money >= current16MBPrice) {
            money -= current16MBPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            sixteenMBBank++;
            current16MBPrice = 275951648768 + 275951648768 * sixteenMBBank / 10;
            localStorage.setItem("sixteenMBBank", sixteenMBBank);
            totalPackets += 137438953472;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#btnBuy16MBCrawler').html("Buy 16MB Delsec Crawler (~137.44 Billion Packets/sec) - $" + current16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");
            $('#sixteenMBItemDisplay').html(sixteenMBBank + " Processes Running Through " + sixteenMBBank * 137438953472 + " Packets/Sec");
            if (delsecManipulationActive == 'true') {
                riskDetectionAmt += 137438953472 * 1.25 * superstormMultiplyer / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }
        }
        return false;
    });

});