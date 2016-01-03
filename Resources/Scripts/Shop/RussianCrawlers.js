$(document).ready(function () {

    $('#btnBuyRussian6BitCrawler').click(function () {
        if (money >= currentRussian6BitPrice) {
            money -= currentRussian6BitPrice;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianSixBitBank++;
            currentRussian6BitPrice = 35.20 + 35.20 * russianSixBitBank / 10;
            localStorage.setItem("russianSixBitBank", russianSixBitBank);
            totalPackets += 16;
            localStorage.setItem("totalPackets", totalPackets);
            $('#totalPacketDisplay').html("Total Packets/Sec: " + totalPackets);
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

})(jQuery);