$(window).load(function () {
    $('#btnEmail1View').click(function () {
        $("#email1").toggle();
        if (email1Viewed == "false") {
            numUnreadEmails--;
            email1Viewed = "true";
            localStorage.setItem("email1Viewed", email1Viewed);
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
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
        }
        return false;
    });
})(jQuery);