$(document).ready(function () {
    $('#btnWarriorHeader').click(function () {
        return false;
    });

    $('#btnWarriorAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Warrior";
            localStorage.setItem("userClass", userClass);

            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailWarriorHeading").show(1);

            // just if the user keeps resetting their class.
            if (emailWarriorDisplayed == "false")
                numUnreadEmails++;
            emailWarriorDisplayed = "true";

            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailWarriorDisplayed", emailWarriorDisplayed);

            $('#warriorAbilities').delay(500);
            $('#btnWarriorAbilities').delay(500);
            $("#warriorGenerate").delay(500);
            $("#btnCoding").delay(500);

            $('#warriorAbilities').fadeIn(500);
            $('#btnWarriorAbilities').fadeIn(500);
            $("#btnPowerGenerators").fadeIn(500);
            $("#warriorGenerate").fadeIn(500);
            $("#btnCoding").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnWarriorAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#warriorAbilities').show();
        return false;
    });

    $('#btnWarriorLevel1-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel1-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel1-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel2-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel2-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel2-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel3-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel3-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel3-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel4-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel4-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel4-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel5-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel5-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel5-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel6-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel6-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel6-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel7-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel7-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel7-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel8-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel8-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel8-3').click(function () {
        return false;
    });
    $('#btnWarriorLevel9-1').click(function () {
        return false;
    });
    $('#btnWarriorLevel9-2').click(function () {
        return false;
    });
    $('#btnWarriorLevel9-3').click(function () {
        return false;
    });

    $('#btnResetWarriorSkillPoints').click(function () {
        alert("Abilities Reset.");
        return true;
    });
});