$(document).ready(function () {

    setInterval(function () {  
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
        if (money >= 1000) {            
            if (email1KDisplayed == "false") {
                $("#email1KHeading").show(1);
                numUnreadEmails++;
                localStorage.setItem("numUnreadEmails", numUnreadEmails);
                email1KDisplayed = "true";
                localStorage.setItem("email1KDisplayed", email1KDisplayed);
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