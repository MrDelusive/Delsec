$(document).ready(function () {

    setInterval(function () {  
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        if (money >= 10000) {            
            if (email10KDisplayed == "false") {
                $("#email10KHeading").show(1);
                numUnreadEmails++;
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                email10KDisplayed = "true";
                localStorage.setItem("email10KDisplayed", email10KDisplayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }

        if (ownedDelsecStocks > 0) {
            $("#emailDelsecStockHeading").fadeIn(1);
            if (emailDelsecStockDisplayed == "false") {
                numUnreadEmails++;
                emailDelsecStockDisplayed = "true";
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                localStorage.setItem("emailDelsecStockDisplayed", emailDelsecStockDisplayed);
                $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
            }
        }
    }, 2000);

});