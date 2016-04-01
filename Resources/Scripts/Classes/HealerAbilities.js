$(document).ready(function () {
    $('#btnHealerHeader').click(function () {
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
        }
        return false;
    });
});