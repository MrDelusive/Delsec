$(document).ready(function () {


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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy2BitCrawler').html("Buy 2 Bit Delsec Crawler (1 Packets/sec) - $" + current2BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twoBitItemDisplay').html(twoBitBank + " Processes Running Through " + twoBitBank + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy3BitCrawler').html("Buy 3 Bit Delsec Crawler (2 Packets/sec) - $" + current3BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 2 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy4BitCrawler').html("Buy 4 Bit Delsec Crawler (4 Packets/sec) - $" + current4BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy6BitCrawler').html("Buy 6 Bit Delsec Crawler (16 Packets/sec) - $" + current6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy8BitCrawler').html("Buy 8 Bit Delsec Crawler (64 Packets/sec) - $" + current8BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy12BitCrawler').html("Buy 12 Bit Delsec Crawler (1,024 Packets/sec) - $" + current12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy16BitCrawler').html("Buy 16 Bit Delsec Crawler (16,384 Packets/sec) - $" + current16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy4ByteCrawler').html("Buy 4 Byte Delsec Crawler (32,768 Packets/sec) - $" + current4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy8ByteCrawler').html("Buy 8 Byte Delsec Crawler (65,536 Packets/sec) - $" + current8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy16ByteCrawler').html("Buy 16 Byte Delsec Crawler (131,072 Packets/sec) - $" + current16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy32ByteCrawler').html("Buy 32 Byte Delsec Crawler (262,144 Packets/sec) - $" + current32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");
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
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
            $('#btnBuy64ByteCrawler').html("Buy 64 Byte Delsec Crawler (524,288 Packets/sec) - $" + current64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");
        }
        return false;
    });

})(jQuery);