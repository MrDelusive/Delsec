$(document).ready(function () {
    $('#btnHealerHeader').click(function () {
        return false;
    });

    $('#btnHealerAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Healer";
            localStorage.setItem("userClass", userClass);

            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailHealerHeading").show(1);
            if (emailHealerDisplayed == "false")
                numUnreadEmails++;
            emailHealerDisplayed = "true";
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailHealerDisplayed", emailHealerDisplayed);

            $('#healerAbilities').delay(500);
            $('#btnHealerAbilities').delay(500);
            $("#healerGenerate").delay(500);

            $('#healerAbilities').fadeIn(500);
            $('#btnHealerAbilities').fadeIn(500);
            $("#healerGenerate").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            $('#btnLongTermInvestments').prop('disabled', false);
            $('#btnExpeditionInvestments').prop('disabled', false);
            $('#btnPermanentInvestments').prop('disabled', false);
            $('#btnSummaryInvestments').prop('disabled', false);

            $('#btnInvestSocialMedia').prop('disabled', false);
            $('#btnInvestSocialMedia').html('Invest $5,000 In a Social Media Strategy - Default 90 sec CD');
            $('#btnInvestBlueChip').prop('disabled', false);
            $('#btnInvestBlueChip').html('Invest $10,000 In a Blue Chip Company - Default 2 min CD');
            $('#btnInvestSelfImprovement').prop('disabled', false);
            $('#btnInvestSelfImprovement').html('Invest $25,000 In a Self Improvement Course - Default 3 min CD');
            $('#btnInvestSelfImprovement2').prop('disabled', false);
            $('#btnInvestSelfImprovement2').html('Invest $50,000 In a Better Self Improvement Course - Default 3 min CD');
            $('#btnInvestEnergy').prop('disabled', false);
            $('#btnInvestEnergy').html('Invest $100,000 In Energy - Default 4 min CD');
            $('#btnInvestSuperHero').prop('disabled', false);
            $('#btnInvestSuperHero').html('Invest $2 Million In A Super Hero Builder - Default 8 min CD');
            $('#btnInvestMovie').prop('disabled', false);
            $('#btnInvestMovie').html('Invest $10 Million In a Movie - Default 15 min CD');
            $('#btnInvestExperimental').prop('disabled', false);
            $('#btnInvestExperimental').html('Invest $50 Million In an Experimental Technology - Default 15 min CD');
            $('#btnInvestTimeTravel').prop('disabled', false);
            $('#btnInvestTimeTravel').html('Invest $250 Million In a Time Travel Trip - Default 15 min CD');
            $('#btnInvestMystery').prop('disabled', false);
            $('#btnInvestMystery').html('Invest $1 Billion In a Mystery Fund - Default 15 min CD');
            $('#btnInvestMoon').prop('disabled', false);
            $('#btnInvestMoon').html('Invest $2.25 Billion In a Manned Moon Mission - Default 15 min CD');
            $('#btnInvestMars').prop('disabled', false);
            $('#btnInvestMars').html('Invest $5 Billion In a Manned Mars Mission - Default 15 min CD');
            $('#btnInvestUniversalMission').prop('disabled', false);
            $('#btnInvestUniversalMission').html('Invest $25 Billion In a Universal Mission - Default 15 min CD');

            

            $('#btnLongTermInvestments').html("Long Term");
            $('#btnExpeditionInvestments').html("Expeditions");
            $('#btnPermanentInvestments').html("Permanent");
            $('#btnSummaryInvestments').html("Income Summary");
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnHealerAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#healerAbilities').show();
        return false;
    });

    // +1 Short Term Roll (SHORT TERM ENTHUSIAST)
    $('#btnHealerLevel1-1').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermEnthusiastActive = 'true';
            localStorage.setItem("shortTermEnthusiastActive", shortTermEnthusiastActive);

            $('#healerLevel1Abilities').hide(1);
            $('#shortTermEnthusiastAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel1-2').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermEnthusiastActive = 'true';
            localStorage.setItem("longTermEnthusiastActive", longTermEnthusiastActive);

            $('#healerLevel1Abilities').hide(1);
            $('#longTermEnthusiastAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel1-3').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionEnthusiastActive = 'true';
            localStorage.setItem("expeditionEnthusiastActive", expeditionEnthusiastActive);

            $('#healerLevel1Abilities').hide(1);
            $('#expeditionEnthusiastAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel2-1').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermUnderstandingActive = 'true';
            localStorage.setItem("shortTermUnderstandingActive", shortTermUnderstandingActive);

            $('#healerLevel2Abilities').hide(1);
            $('#shortTermUnderstandingAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel2-2').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermPlanningActive = 'true';
            localStorage.setItem("longTermPlanningActive", longTermPlanningActive);

            $('#healerLevel2Abilities').hide(1);
            $('#longTermPlanningAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel2-3').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionGathererActive = 'true';
            localStorage.setItem("expeditionGathererActive", expeditionGathererActive);

            $('#healerLevel2Abilities').hide(1);
            $('#expeditionGathererAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel3-1').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermEfficiencyActive = 'true';
            localStorage.setItem("shortTermEfficiencyActive", shortTermEfficiencyActive);

            $('#healerLevel3Abilities').hide(1);
            $('#shortTermEfficiencyAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel3-2').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermStrategyActive = 'true';
            localStorage.setItem("longTermStrategyActive", longTermStrategyActive);

            $('#healerLevel3Abilities').hide(1);
            $('#longTermStrategyAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel3-3').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionCollectorActive = 'true';
            localStorage.setItem("expeditionCollectorActive", expeditionCollectorActive);

            $('#healerLevel3Abilities').hide(1);
            $('#expeditionCollectorAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel4-1').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermEfficiency2Active = 'true';
            localStorage.setItem("shortTermEfficiency2Active", shortTermEfficiency2Active);

            $('#healerLevel4Abilities').hide(1);
            $('#shortTermEfficiency2Ability').show(1);
        }
        return false;
    });
    $('#btnHealerLevel4-2').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermExponentialsActive = 'true';
            localStorage.setItem("longTermExponentialsActive", longTermExponentialsActive);

            $('#healerLevel4Abilities').hide(1);
            $('#longTermExponentialsAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel4-3').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            generatorInvestorActive = 'true';
            localStorage.setItem("generatorInvestorActive", generatorInvestorActive);

            $('#healerLevel4Abilities').hide(1);
            $('#generatorInvestorAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel5-1').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermPlanningActive = 'true';
            localStorage.setItem("shortTermPlanningActive", shortTermPlanningActive);

            $('#healerLevel5Abilities').hide(1);
            $('#shortTermPlanningAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel5-2').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionHoarderActive = 'true';
            localStorage.setItem("expeditionHoarderActive", expeditionHoarderActive);

            $('#healerLevel5Abilities').hide(1);
            $('#expeditionHoarderAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel5-3').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            generatorProfessionalActive = 'true';
            localStorage.setItem("generatorProfessionalActive", generatorProfessionalActive);

            $('#healerLevel5Abilities').hide(1);
            $('#generatorProfessionalAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel6-1').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionMasteryActive = 'true';
            localStorage.setItem("expeditionMasteryActive", expeditionMasteryActive);

            $('#healerLevel6Abilities').hide(1);
            $('#expeditionMasteryAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel6-2').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermContinuationActive = 'true';
            localStorage.setItem("longTermContinuationActive", longTermContinuationActive);

            $('#healerLevel6Abilities').hide(1);
            $('#longTermContinuationAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel6-3').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            permanentInterestActive = 'true';
            localStorage.setItem("permanentInterestActive", permanentInterestActive);

            $('#healerLevel6Abilities').hide(1);
            $('#permanentInterestAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel7-1').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            longTermEfficiencyActive = 'true';
            localStorage.setItem("longTermEfficiencyActive", longTermEfficiencyActive);

            $('#healerLevel7Abilities').hide(1);
            $('#longTermEfficiencyAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel7-2').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            generatorInsanityActive = 'true';
            localStorage.setItem("generatorInsanityActive", generatorInsanityActive);

            $('#healerLevel7Abilities').hide(1);
            $('#generatorInsanityAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel7-3').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            permanentProfiteerActive = 'true';
            localStorage.setItem("permanentProfiteerActive", permanentProfiteerActive);

            $('#healerLevel7Abilities').hide(1);
            $('#permanentProfiteerAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel8-1').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            shortTermMinMaxActive = 'true';
            localStorage.setItem("shortTermMinMaxActive", shortTermMinMaxActive);

            $('#healerLevel8Abilities').hide(1);
            $('#shortTermMinMaxAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel8-2').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            expeditionAmassingActive = 'true';
            localStorage.setItem("expeditionAmassingActive", expeditionAmassingActive);

            $('#healerLevel8Abilities').hide(1);
            $('#expeditionAmassingAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel8-3').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            permanentOverpowerActive = 'true';
            localStorage.setItem("permanentOverpowerActive", permanentOverpowerActive);

            $('#healerLevel8Abilities').hide(1);
            $('#permanentOverpowerAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel9-1').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            rapidMomentumActive = 'true';
            localStorage.setItem("rapidMomentumActive", rapidMomentumActive);

            $('#healerLevel9Abilities').hide(1);
            $('#rapidMomentumAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel9-2').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            captainLongTermActive = 'true';
            localStorage.setItem("captainLongTermActive", captainLongTermActive);

            $('#healerLevel9Abilities').hide(1);
            $('#captainLongTermAbility').show(1);
        }
        return false;
    });
    $('#btnHealerLevel9-3').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            productionLineActive = 'true';
            localStorage.setItem("productionLineActive", productionLineActive);

            $('#healerLevel9Abilities').hide(1);
            $('#productionLineAbility').show(1);

            clearInterval(generatorHealerInterval);
            clearInterval(generatorHealerTickerInterval);
            var timer = 30;
            generatorHealerTickerInterval = setInterval(function () {
                if (timer > 1) {
                    timer--;
                    $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
                }
                else {
                    timer--; // for display
                    $('#btnHealerIncrement').html("GENERATING INTEREST:<br />" + timer + " sec");
                    timer = 30;                        
                }
            }, 1000);
            generatorHealerInterval = setInterval(function () {
                var generatedAmt = totalInvestment / 600; //600 min to pay off money spent / 10h
                if (generatorInvestorActive == 'true')
                    generatedAmt += totalInvestment / 600;
                if (generatorProfessionalActive == 'true')
                    generatedAmt += totalInvestment / 300;
                if (generatorInsanityActive == 'true')
                    generatedAmt += totalInvestment / 200;


                rentalBikeProfit = investRentalBike * 15; //33.33 min
                franchiseProfit = investFranchise * 196.08; //255
                smallPropertyProfit = investSmallProperty * 1000; //250 min
                mediumPropertyProfit = investMediumProperty * 1836.73; //245 min
                boatProfit = investBoat * 4508.2; // 244 min
                beachsideProfit = investBeachside * 5967.08; // 243
                mansionProfit = investMansion * 9375; //240 min
                highEndProfit = investHighEnd * 21702.13; //235 min
                skyscraperLevelProfit = investSkyscraperLevel * 42060.09; //233
                CBDStoreProfit = investCBDStore * 95652.17; //230
                carDealerProfit = investCarDealer * 257777.70; //225
                supermarketProfit = investSupermarket * 774774.77; //222
                factoryProfit = investFactory * 1909090.90; //220
                skyscraperProfit = investSkyscraper * 4093023.26; //215
                spacePortProfit = investSpacePort * 6976744.19; //215
                spaceStationProfit = investSpaceStation * 13953488.37; //215
                satelliteProfit = investSatellite * 21028037.38; //214
                moonBaseProfit = investMoonBase * 32863849.77; //213
                offworldBaseProfit = investOffworldBase * 71090047.39; //211
                storageYardProfit = investStorageYard * 9523809.52; //210
                asteroidColonyProfit = investAsteroidColony * 153846153.85; //208
                freespaceStationProfit = investFreespaceStation * 213333333.33; //300
                universalEnergyGeneratedTick = investDysonSphere * 4166.67;

                totalProfit = generatedAmt + rentalBikeProfit + franchiseProfit + smallPropertyProfit + mediumPropertyProfit + boatProfit + beachsideProfit + mansionProfit + highEndProfit + skyscraperLevelProfit
                    + CBDStoreProfit + carDealerProfit + supermarketProfit + factoryProfit + skyscraperProfit + spacePortProfit + spaceStationProfit + satelliteProfit + moonBaseProfit + offworldBaseProfit + storageYardProfit
                    + asteroidColonyProfit + freespaceStationProfit;
                universalEnergyGenerated += universalEnergyGeneratedTick;
                if (universalEnergyGenerated > ENERGYMAX)
                    universalEnergyGenerated = ENERGYMAX;
                if (universalEnergyGenerated == ENERGYMAX) {
                    $('#healerCompletedDisplay').css("background-image", "url(Resources/Img/healerCompleted.png)");
                    healerQuadrantEarned = 'true';
                    localStorage.setItem("healerQuadrantEarned", healerQuadrantEarned);
                    $('#center_Main').hide();
                    $('#healerVictorySplash').show();
                }
                localStorage.setItem("universalEnergyGenerated", universalEnergyGenerated);
                $('#energyDisplayAmt').html((universalEnergyGenerated / ENERGYMAX * 100).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "% Completed");

                if (permanentInterestActive == 'true') {
                    abilitiesBoostProfit += totalProfit * 0.02;
                    $('#abilitiesBoostSummary').show(1);
                    $('#abilitiesBoostSummaryDisplay').show(1);
                    $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
                }
                if (permanentProfiteerActive == 'true') {
                    abilitiesBoostProfit += totalProfit * 0.03;
                    $('#abilitiesBoostSummary').show(1);
                    $('#abilitiesBoostSummaryDisplay').show(1);
                    $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
                }
                if (permanentOverpowerActive == 'true') {
                    abilitiesBoostProfit += totalProfit * 0.05;
                    $('#abilitiesBoostSummary').show(1);
                    $('#abilitiesBoostSummaryDisplay').show(1);
                    $('#abilitiesBoostSummary').html("Bonus Profit from Abilities");
                }
                totalProfit += abilitiesBoostProfit;

                money += totalProfit + abilitiesBoostProfit;
                $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                localStorage.setItem("money", money);

                $('#healerGenerateAmt').html('Auto Interest Generated: $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

                $('#generatorSummaryDisplay').html('+ $' + generatedAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#rentalBikeSummaryDisplay').html('+ $' + rentalBikeProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#franchiseSummaryDisplay').html('+ $' + franchiseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#smallPropertySummaryDisplay').html('+ $' + smallPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#threeBRPropertySummaryDisplay').html('+ $' + mediumPropertyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#boatSummaryDisplay').html('+ $' + boatProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#beachsideSummaryDisplay').html('+ $' + beachsideProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#mansionSummaryDisplay').html('+ $' + mansionProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#highEndSummaryDisplay').html('+ $' + highEndProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#skyscraperLevelSummaryDisplay').html('+ $' + skyscraperLevelProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#CBDStoreSummaryDisplay').html('+ $' + CBDStoreProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#carDealerSummaryDisplay').html('+ $' + carDealerProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#supermarketSummaryDisplay').html('+ $' + supermarketProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#factorySummaryDisplay').html('+ $' + factoryProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#skyscraperSummaryDisplay').html('+ $' + skyscraperProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#spacePortSummaryDisplay').html('+ $' + spacePortProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#spaceStationSummaryDisplay').html('+ $' + spaceStationProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#satelliteSummaryDisplay').html('+ $' + satelliteProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#moonBaseSummaryDisplay').html('+ $' + moonBaseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#offworldBaseSummaryDisplay').html('+ $' + offworldBaseProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#storageYardSummaryDisplay').html('+ $' + storageYardProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#asteroidColonySummaryDisplay').html('+ $' + asteroidColonyProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#freespaceStationSummaryDisplay').html('+ $' + freespaceStationProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
                $('#dysonSphereSummaryDisplay').html('+ ' + universalEnergyGenerated.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Energy");
                $('#abilitiesBoostSummaryDisplay').html('+ $' + abilitiesBoostProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

                $('#totalSummaryDisplay').html('+ $' + totalProfit.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            }, timer * 1000);
        }
        return false;
    });

    $('#btnResetHealerSkillPoints').click(function () {
        localStorage.setItem("shortTermEnthusiastActive", 'false');
        localStorage.setItem("longTermEnthusiastActive", 'false');
        localStorage.setItem("expeditionEnthusiastActive", 'false');
        localStorage.setItem("shortTermUnderstandingActive", 'false');
        localStorage.setItem("longTermPlanningActive", 'false');
        localStorage.setItem("expeditionGathererActive", 'false');
        localStorage.setItem("shortTermEfficiencyActive", 'false');
        localStorage.setItem("longTermStrategyActive", 'false');
        localStorage.setItem("expeditionCollectorActive", 'false');
        localStorage.setItem("shortTermEfficiency2Active", 'false');
        localStorage.setItem("longTermExponentialsActive", 'false');
        localStorage.setItem("generatorInvestorActive", 'false');
        localStorage.setItem("shortTermPlanningActive", 'false');
        localStorage.setItem("expeditionHoarderActive", 'false');
        localStorage.setItem("generatorProfessionalActive", 'false');
        localStorage.setItem("expeditionMasteryActive", 'false');
        localStorage.setItem("longTermContinuationActive", 'false');
        localStorage.setItem("permanentInterestActive", 'false');
        localStorage.setItem("longTermEfficiencyActive", 'false');
        localStorage.setItem("generatorInsanityActive", 'false');
        localStorage.setItem("permanentProfiteerActive", 'false');
        localStorage.setItem("shortTermMinMaxActive", 'false');
        localStorage.setItem("expeditionAmassingActive", 'false');
        localStorage.setItem("permanentOverpowerActive", 'false');
        localStorage.setItem("rapidMomentumActive", 'false');
        localStorage.setItem("captainLongTermActive", 'false');
        localStorage.setItem("productionLineActive", 'false');
        alert("Abilities Reset.");
        return true;
    });

    $('#btnNewClassHealer').click(function () {
        localStorage.clear();
        if (healerQuadrantEarned == 'true')
            localStorage.setItem("healerQuadrantEarned", 'true');
        if (wizardQuadrantEarned == 'true')
            localStorage.setItem("wizardQuadrantEarned", 'true');
        if (warriorQuadrantEarned == 'true')
            localStorage.setItem("warriorQuadrantEarned", 'true');
        if (rogueQuadrantEarned == 'true')
            localStorage.setItem("rogueQuadrantEarned", 'true');
        return true;
    });
});