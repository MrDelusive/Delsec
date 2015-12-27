$(window).load(function () {
    $('#btnEmail1View').click(function () {
        $("#email1").toggle();
        if (email1Viewed == "false") {
            numUnreadEmails--;
            email1Viewed = "true";
            localStorage.setItem("email1Viewedv05", email1Viewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });

    $('#btnEmail2View').click(function () {
        $("#email2").toggle();
        if (email2Viewed == "false") {
            numUnreadEmails--;
            email2Viewed = "true";
            localStorage.setItem("email2Viewedv05", email2Viewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });
    $('#btnEmail3View').click(function () {
        $("#email3").toggle();
        if (email3Viewed == "false") {
            numUnreadEmails--;
            email3Viewed = "true";
            localStorage.setItem("email3Viewedv05", email3Viewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });
    $('#btnEmail4View').click(function () {
        $("#email4").toggle();
        if (email4Viewed == "false") {
            numUnreadEmails--;
            email4Viewed = "true";
            localStorage.setItem("email4Viewedv05", email4Viewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });
    $('#btnEmailQuickScopeView').click(function () {
        $("#emailQuickScope").toggle();
        if (emailQuickScopeViewed == "false") {
            numUnreadEmails--;
            emailQuickScopeViewed = "true";
            localStorage.setItem("emailQuickScopeViewedv05", emailQuickScopeViewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });

    $('#btnEmailDelsecStockView').click(function () {
        $("#emailDelsecStock").toggle();
        if (emailDelsecStockViewed == "false") {
            numUnreadEmails--;
            emailDelsecStockViewed = "true";
            localStorage.setItem("emailDelsecStockViewedv05", emailDelsecStockViewed);
            localStorage.setItem("numUnreadEmailsv05", numUnreadEmails);
            $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        }
        return false;
    });
})(jQuery);