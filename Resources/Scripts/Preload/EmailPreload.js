$(document).ready(function () {

    if (localStorage.getItem("numUnreadEmails") === null)
        localStorage.setItem("numUnreadEmails", numUnreadEmails);

    if (localStorage.getItem("email3Displayed") === null)
        localStorage.setItem("email3Displayed", email3Displayed);

    if (localStorage.getItem("email4Displayed") === null)
        localStorage.setItem("email4Displayed", email4Displayed);

    if (localStorage.getItem("email10KDisplayed") === null)
        localStorage.setItem("email10KDisplayed", email10KDisplayed);

    if (localStorage.getItem("email10KViewed") === null)
        localStorage.setItem("email10KViewed", email10KViewed);

    if (typeof (Storage) !== "undefined") {
        // must do a string check because localStorage stores strings and not bools STUPID SHIT.
        email1Viewed = localStorage.getItem("email1Viewed");
        email2Viewed = localStorage.getItem("email2Viewed");
        email3Viewed = localStorage.getItem("email3Viewed");
        email3Displayed = localStorage.getItem("email3Displayed");
        email4Viewed = localStorage.getItem("email4Viewed");
        email4Displayed = localStorage.getItem("email4Displayed");
        emailQuickScopeDisplayed = localStorage.getItem("emailQuickScopeDisplayed");
        emailQuickScopeViewed = localStorage.getItem("emailQuickScopeViewed");
        emailDelsecStockViewed = localStorage.getItem("emailDelsecStockViewed");
        emailDelsecStockDisplayed = localStorage.getItem("emailDelsecStockDisplayed");
        email10KViewed = localStorage.getItem("email10KViewed");
        email10KDisplayed = localStorage.getItem("email10KDisplayed");
        email4ByteViewed = localStorage.getItem("email4ByteViewed");

        numUnreadEmails = parseInt(localStorage.getItem("numUnreadEmails"));
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
    }
    else
        alert("no support on your browser");


    if (emailQuickScopeDisplayed == "true")
        $("#emailQuickScopeHeading").show(1);

    if (emailDelsecStockDisplayed == "true")
        $("#emailDelsecStockHeading").show(1);

    if (email10KDisplayed == "true")
        $("#email10KHeading").show(1);

    if (email1Viewed == "true") {
        $("#btnEmail1View").html("Delsec AutoPostBot - autoGen5184828 (Viewed)");
        $("#btnEmail1View").css("background", "#CCC");
    }

    if (email2Viewed == "true") {
        $("#btnEmail2View").html("Delsec Team - Thank you (Viewed)");
        $("#btnEmail2View").css("background", "#CCC");
    }

    if (email3Viewed == "true") {
        $('#btnEmail3View').html("Tsar of Russia - Thank you (Viewed)");
        $("#btnEmail3View").css("background", "#CCC");
    }

    if (email4Viewed == "true") {
        $('#btnEmail4View').html("Delsec Team - Growing (Viewed)");
        $("#btnEmail4View").css("background", "#CCC");
    }

    if (emailQuickScopeViewed == "true") {
        $('#btnEmailQuickScopeView').html("XxX420N0-SK0PZXxX - Fanks (Viewed)");
        $('#btnEmailQuickScopeView').css("background", "#CCC");
    }

    if (emailDelsecStockViewed == "true") {
        $('#btnEmailDelsecStockView').html("Delsec Team - Stocks (Viewed)");
        $('#btnEmailDelsecStockView').css("background", "#CCC");
    }

    if (email10KViewed == "true") {
        $('#btnEmail10KView').html("Delsec Team - $10,000 (Viewed)");
        $('#btnEmail10KView').css("background", "#CCC");
    }

    if (email4ByteViewed == "true") {
        $('#btnEmail4ByteView').html("Delsec Team - The Byte Crawlers (Viewed)");
        $('#btnEmail4ByteView').css("background", "#CCC");
    }
});