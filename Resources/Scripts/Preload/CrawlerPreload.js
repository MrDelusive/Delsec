$(document).ready(function () {

    if (localStorage.getItem("totalPackets") === null)
        localStorage.setItem("totalPackets", totalPackets);
    if (localStorage.getItem("totalRisk") === null)
        localStorage.setItem("totalRisk", totalRisk);

    if (localStorage.getItem("twoBitBank") === null)
        localStorage.setItem("twoBitBank", twoBitBank);
    if (localStorage.getItem("threeBitBank") === null)
        localStorage.setItem("threeBitBank", threeBitBank);
    if (localStorage.getItem("fourBitBank") === null)
        localStorage.setItem("fourBitBank", fourBitBank);
    if (localStorage.getItem("sixBitBank") === null)
        localStorage.setItem("sixBitBank", sixBitBank);
    if (localStorage.getItem("russianSixBitBank") === null)
        localStorage.setItem("russianSixBitBank", russianSixBitBank);
    if (localStorage.getItem("eightBitBank") === null)
        localStorage.setItem("eightBitBank", eightBitBank);
    if (localStorage.getItem("twelveBitBank") === null)
        localStorage.setItem("twelveBitBank", twelveBitBank);
    if (localStorage.getItem("sixteenBitBank") === null)
        localStorage.setItem("sixteenBitBank", sixteenBitBank);
    if (localStorage.getItem("fourByteBank") === null)
        localStorage.setItem("fourByteBank", fourByteBank);
    if (localStorage.getItem("eightByteBank") === null)
        localStorage.setItem("eightByteBank", eightByteBank);
    if (localStorage.getItem("sixteenByteBank") === null)
        localStorage.setItem("sixteenByteBank", sixteenByteBank);
    if (localStorage.getItem("thirtytwoByteBank") === null)
        localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
    if (localStorage.getItem("sixtyfourByteBank") === null)
        localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);

    if (typeof (Storage) !== "undefined") {
        totalPackets = parseInt(localStorage.getItem("totalPackets"));
        totalRisk = parseInt(localStorage.getItem("totalRisk"));

        twoBitBank = parseInt(localStorage.getItem("twoBitBank"));
        threeBitBank = parseInt(localStorage.getItem("threeBitBank"));
        fourBitBank = parseInt(localStorage.getItem("fourBitBank"));
        sixBitBank = parseInt(localStorage.getItem("sixBitBank"));       
        eightBitBank = parseInt(localStorage.getItem("eightBitBank"));
        twelveBitBank = parseInt(localStorage.getItem("twelveBitBank"));
        sixteenBitBank = parseInt(localStorage.getItem("sixteenBitBank"));
        fourByteBank = parseInt(localStorage.getItem("fourByteBank"));
        eightByteBank = parseInt(localStorage.getItem("eightByteBank"));
        sixteenByteBank = parseInt(localStorage.getItem("sixteenByteBank"));
        thirtytwoByteBank = parseInt(localStorage.getItem("thirtytwoByteBank"));
        sixtyfourByteBank = parseInt(localStorage.getItem("sixtyfourByteBank"));

        russianSixBitBank = parseInt(localStorage.getItem("russianSixBitBank"));
    }
    else
        alert("no support on your browser");

    $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
    $('#totalRiskDisplay').html("Total Risk: " + totalRisk.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " at " + riskTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec.");

    current2BitPrice = 2 + 2 * twoBitBank / 10;
    $('#btnBuy2BitCrawler').html("Buy 2 Bit Delsec Crawler (1 Packets/sec) - $" + current2BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current3BitPrice = 4 + 4 * threeBitBank / 10;
    $('#btnBuy3BitCrawler').html("Buy 3 Bit Delsec Crawler (2 Packets/sec) - $" + current3BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current4BitPrice = 8 + 8 * fourBitBank / 10;
    $('#btnBuy4BitCrawler').html("Buy 4 Bit Delsec Crawler (4 Packets/sec) - $" + current4BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current6BitPrice = 32 + 32 * sixBitBank / 10;
    $('#btnBuy6BitCrawler').html("Buy 6 Bit Delsec Crawler (16 Packets/sec) - $" + current6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current8BitPrice = 128 + 128 * eightBitBank / 10;
    $('#btnBuy8BitCrawler').html("Buy 8 Bit Delsec Crawler (64 Packets/sec) - $" + current8BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current12BitPrice = 2056 + 2056 * twelveBitBank / 10;
    $('#btnBuy12BitCrawler').html("Buy 12 Bit Delsec Crawler (1,024 Packets/sec) - $" + current12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1 RISK/SEC");
    current16BitPrice = 32896 + 32896 * twelveBitBank / 10;
    $('#btnBuy16BitCrawler').html("Buy 16 Bit Delsec Crawler (16,384 Packets/sec) - $" + current16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2 RISK/SEC");
    current4BytePrice = 65792 + 65792 * fourByteBank / 10;
    $('#btnBuy4ByteCrawler').html("Buy 4 Byte Delsec Crawler (32,768 Packets/sec) - $" + current4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+4 RISK/SEC");
    current8BytePrice = 131584 + 131584 * eightByteBank / 10;
    $('#btnBuy8ByteCrawler').html("Buy 8 Byte Delsec Crawler (65,536 Packets/sec) - $" + current8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+16 RISK/SEC");
    current16BytePrice = 263168 + 263168 * sixteenByteBank / 10;
    $('#btnBuy16ByteCrawler').html("Buy 16 Byte Delsec Crawler (131,072 Packets/sec) - $" + current16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+64 RISK/SEC");
    current32BytePrice = 526336 + 526336 * thirtytwoByteBank / 10;
    $('#btnBuy32ByteCrawler').html("Buy 32 Byte Delsec Crawler (262,144 Packets/sec) - $" + current32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+256 RISK/SEC");
    current64BytePrice = 1052672 + 1052672 * sixtyfourByteBank / 10;
    $('#btnBuy64ByteCrawler').html("Buy 64 Byte Delsec Crawler (524,288 Packets/sec) - $" + current64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1024 RISK/SEC");

    currentRussian6BitPrice = 35.20 + 35.20 * russianSixBitBank / 10;
    $('#btnBuyRussian6BitCrawler').html("Buy 6 Bit Russian Tech Crawler (16 Packets/sec) - $" + currentRussian6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    if (twoBitBank > 0)
        $('#twoBitItemDisplay').html(twoBitBank + " Processes Running Through " + twoBitBank + " Packets/Sec");

    if (threeBitBank > 0)
        $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 8 / 4 + " Packets/Sec");

    if (fourBitBank > 0)
        $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");

    if (fourBitBank > 3)
        $("#email4Heading").show(1);

    if (sixBitBank > 0)
        $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");


    if (russianSixBitBank > 0) {
        $("#email3Heading").show(1);
        email3Displayed = "true";
        $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
    }

    if (eightBitBank > 0)
        $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");

    if (twelveBitBank > 0)
        $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");

    if (sixteenBitBank > 0)
        $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");

    if (fourByteBank > 0) {
        $("#email4ByteHeading").show(1);
        email4ByteDisplayed = "true";
        $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");
    }

    if (eightByteBank > 0)
        $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");

    if (sixteenByteBank > 0)
        $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");

    if (thirtytwoByteBank > 0)
        $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");

    if (sixtyfourByteBank > 0)
        $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");


});