$(document).ready(function () {

    if (localStorage.getItem("numUnreadEmails") === null)
        localStorage.setItem("numUnreadEmails", numUnreadEmails);

    if (localStorage.getItem("email1Viewed") === null)
        localStorage.setItem("email1Viewed", email1Viewed);

    if (localStorage.getItem("email2Viewed") === null)
        localStorage.setItem("email2Viewed", email2Viewed);

    if (localStorage.getItem("email3Displayed") === null)
        localStorage.setItem("email3Displayed", email3Displayed);
    if (localStorage.getItem("email3Viewed") === null)
        localStorage.setItem("email3Viewed", email3Viewed);

    if (localStorage.getItem("email4Displayed") === null)
        localStorage.setItem("email4Displayed", email4Displayed);
    if (localStorage.getItem("email4Viewed") === null)
        localStorage.setItem("email4Viewed", email4Viewed);

    if (localStorage.getItem("emailQuickScopeDisplayed") === null)
        localStorage.setItem("emailQuickScopeDisplayed", emailQuickScopeDisplayed);
    if (localStorage.getItem("emailQuickScopeViewed") === null)
        localStorage.setItem("emailQuickScopeViewed", emailQuickScopeViewed);

    if (localStorage.getItem("emailDelsecStockDisplayed") === null)
        localStorage.setItem("emailDelsecStockDisplayed", emailDelsecStockDisplayed);
    if (localStorage.getItem("emailDelsecStockViewed") === null)
        localStorage.setItem("emailDelsecStockViewed", emailDelsecStockViewed);

    if (localStorage.getItem("email1KDisplayed") === null)
        localStorage.setItem("email1KDisplayed", email1KDisplayed);
    if (localStorage.getItem("email1KViewed") === null)
        localStorage.setItem("email1KViewed", email1KViewed);

    if (localStorage.getItem("email4ByteViewed") === null)
        localStorage.setItem("email4ByteViewed", email4ByteViewed);

    if (localStorage.getItem("emailWarriorViewed") === null)
        localStorage.setItem("emailWarriorViewed", emailWarriorViewed);
    if (localStorage.getItem("emailWarriorDisplayed") === null)
        localStorage.setItem("emailWarriorDisplayed", emailWarriorDisplayed);

    if (localStorage.getItem("emailWizardViewed") === null)
        localStorage.setItem("emailWizardViewed", emailWizardViewed);
    if (localStorage.getItem("emailWizardDisplayed") === null)
        localStorage.setItem("emailWizardDisplayed", emailWizardDisplayed);

    if (localStorage.getItem("emailHealerViewed") === null)
        localStorage.setItem("emailHealerViewed", emailHealerViewed);
    if (localStorage.getItem("emailHealerDisplayed") === null)
        localStorage.setItem("emailHealerDisplayed", emailHealerDisplayed);

    if (localStorage.getItem("emailRogueViewed") === null)
        localStorage.setItem("emailRogueViewed", emailRogueViewed);
    if (localStorage.getItem("emailRogueDisplayed") === null)
        localStorage.setItem("emailRogueDisplayed", emailRogueDisplayed);

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

        email1KViewed = localStorage.getItem("email1KViewed");
        email1KDisplayed = localStorage.getItem("email1KDisplayed");

        email4ByteViewed = localStorage.getItem("email4ByteViewed");

        emailWarriorViewed = localStorage.getItem("emailWarriorViewed");
        emailWarriorDisplayed = localStorage.getItem("emailWarriorDisplayed");

        emailWizardViewed = localStorage.getItem("emailWizardViewed");
        emailWizardDisplayed = localStorage.getItem("emailWizardDisplayed");

        emailHealerViewed = localStorage.getItem("emailHealerViewed");
        emailHealerDisplayed = localStorage.getItem("emailHealerDisplayed");

        emailRogueViewed = localStorage.getItem("emailRogueViewed");
        emailRogueDisplayed = localStorage.getItem("emailRogueDisplayed");

        numUnreadEmails = parseInt(localStorage.getItem("numUnreadEmails"));
        $("#btnEmails").html("Emails (" + numUnreadEmails + ") New");
    }
    else
        alert("no support on your browser");


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

    if (emailQuickScopeDisplayed == "true")
        $("#emailQuickScopeHeading").show(1);
    if (emailQuickScopeViewed == "true") {
        $('#btnEmailQuickScopeView').html("XxX420N0-SK0PZXxX - Fanks (Viewed)");
        $('#btnEmailQuickScopeView').css("background", "#CCC");
    }

    if (emailDelsecStockDisplayed == "true")
        $("#emailDelsecStockHeading").show(1);
    if (emailDelsecStockViewed == "true") {
        $('#btnEmailDelsecStockView').html("Delsec Team - Stocks (Viewed)");
        $('#btnEmailDelsecStockView').css("background", "#CCC");
    }

    if (email1KDisplayed == "true")
        $("#email1KHeading").show(1);
    if (email1KViewed == "true") {
        $('#btnEmail1KView').html("Delsec Team - $1,000 (Viewed)");
        $('#btnEmail1KView').css("background", "#CCC");
    }

    if (email4ByteViewed == "true") {
        $('#btnEmail4ByteView').html("Delsec Team - The Byte Crawlers (Viewed)");
        $('#btnEmail4ByteView').css("background", "#CCC");
    }

    // For older version
    if (userClass == "Warrior" && emailWarriorDisplayed == "false") {
        $("#emailWarriorHeading").show(1);
        emailWarriorDisplayed = "true";
        numUnreadEmails++;
    }
    // using the bool because eventually want to allow multiple classes.
    if (emailWarriorDisplayed == "true")
        $("#emailWarriorHeading").show(1);
    if (emailWarriorViewed == "true") {
        $('#btnEmailWarriorView').html("Mr. Delusive - Warrior (Viewed)");
        $('#btnEmailWarriorView').css("background", "#CCC");
    }

    if (userClass == "Wizard" && emailWizardDisplayed == "false") {
        $("#emailWizardHeading").show(1);
        emailWizardDisplayed = "true";
        numUnreadEmails++;
    }
    if (emailWizardDisplayed == "true")
        $("#emailWizardHeading").show(1);
    if (emailWizardViewed == "true") {
        $('#btnEmailWizardView').html("Mr. Delusive - Wizard (Viewed)");
        $('#btnEmailWizardView').css("background", "#CCC");
    }

    if (userClass == "Healer" && emailHealerDisplayed == "false") {
        $("#emailHealerHeading").show(1);
        emailHealerDisplayed = "true";
        numUnreadEmails++;
    }
    if (emailHealerDisplayed == "true")
        $("#emailHealerHeading").show(1);
    if (emailHealerViewed == "true") {
        $('#btnEmailHealerView').html("Mr. Delusive - Healer (Viewed)");
        $('#btnEmailHealerView').css("background", "#CCC");
    }

    if (userClass == "Rogue" && emailRogueDisplayed == "false") {
        $("#emailRogueHeading").show(1);
        emailRogueDisplayed = "true";
        numUnreadEmails++;
    }
    if (emailRogueDisplayed == "true")
        $("#emailRogueHeading").show(1);
    if (emailRogueViewed == "true") {
        $('#btnEmailRogueView').html("Mr. Delusive - Rogue (Viewed)");
        $('#btnEmailRogueView').css("background", "#CCC");
    }
});