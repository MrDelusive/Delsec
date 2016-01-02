$(document).ready(function () {
    $('#btnEmail1View').click(function () {
        $("#email1").toggle();
        if (email1Viewed == "false") {
            numUnreadEmails--;
            email1Viewed = "true";
            localStorage.setItem("email1Viewed", email1Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $("#btnEmail1View").html("Delsec AutoPostBot - autoGen5184828 (Viewed)");
            $("#btnEmail1View").css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail2View').click(function () {
        $("#email2").toggle();
        if (email2Viewed == "false") {
            numUnreadEmails--;
            email2Viewed = "true";
            localStorage.setItem("email2Viewed", email2Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $("#btnEmail2View").html("Delsec Team - Thank you (Viewed)");
            $("#btnEmail2View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmail3View').click(function () {
        $("#email3").toggle();
        if (email3Viewed == "false") {
            numUnreadEmails--;
            email3Viewed = "true";
            localStorage.setItem("email3Viewed", email3Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail3View').html("Tsar of Russia - Thank you (Viewed)");
            $("#btnEmail3View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmail4View').click(function () {
        $("#email4").toggle();
        if (email4Viewed == "false") {
            numUnreadEmails--;
            email4Viewed = "true";
            localStorage.setItem("email4Viewed", email4Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail4View').html("Delsec Team - Growing (Viewed)");
            $("#btnEmail4View").css("background", "#CCC");
        }
        return false;
    });
    $('#btnEmailQuickScopeView').click(function () {
        $("#emailQuickScope").toggle();
        if (emailQuickScopeViewed == "false") {
            numUnreadEmails--;
            emailQuickScopeViewed = "true";
            localStorage.setItem("emailQuickScopeViewed", emailQuickScopeViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailQuickScopeView').html("XxX420N0-SK0PZXxX - Fanks (Viewed)");
            $('#btnEmailQuickScopeView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmailDelsecStockView').click(function () {
        $("#emailDelsecStock").toggle();
        if (emailDelsecStockViewed == "false") {
            numUnreadEmails--;
            emailDelsecStockViewed = "true";
            localStorage.setItem("emailDelsecStockViewed", emailDelsecStockViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmailDelsecStockView').html("Delsec Team - Stocks (Viewed)");
            $('#btnEmailDelsecStockView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail10KView').click(function () {
        $("#email10K").toggle();
        if (email10KViewed == "false") {
            numUnreadEmails--;
            email10KViewed = "true";
            localStorage.setItem("email10KViewed", email10KViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail10KView').html("Delsec Team - $10,000 (Viewed)");
            $('#btnEmail10KView').css("background", "#CCC");
        }
        return false;
    });

    $('#btnEmail4ByteView').click(function () {
        $("#email4Byte").toggle();
        if (email4ByteViewed == "false") {
            numUnreadEmails--;
            email4ByteViewed = "true";
            localStorage.setItem("email4ByteViewed", email4ByteViewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            $('#btnEmail4ByteView').html("Delsec Team - The Byte Crawlers (Viewed)");
            $('#btnEmail4ByteView').css("background", "#CCC");
        }
        return false;
    });
})(jQuery);