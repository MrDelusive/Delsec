$(document).ready(function () {

    if (localStorage.getItem("shortTermEnthusiastActive") === null)
        localStorage.setItem("shortTermEnthusiastActive", shortTermEnthusiastActive);
    if (localStorage.getItem("longTermEnthusiastActive") === null)
        localStorage.setItem("longTermEnthusiastActive", longTermEnthusiastActive);
    if (localStorage.getItem("expeditionEnthusiastActive") === null)
        localStorage.setItem("expeditionEnthusiastActive", expeditionEnthusiastActive);

    if (localStorage.getItem("shortTermUnderstandingActive") === null)
        localStorage.setItem("shortTermUnderstandingActive", shortTermUnderstandingActive);
    if (localStorage.getItem("longTermPlanningActive") === null)
        localStorage.setItem("longTermPlanningActive", longTermPlanningActive);
    if (localStorage.getItem("expeditionGathererActive") === null)
        localStorage.setItem("expeditionGathererActive", expeditionGathererActive);

    if (localStorage.getItem("shortTermEfficiencyActive") === null)
        localStorage.setItem("shortTermEfficiencyActive", shortTermEfficiencyActive);
    if (localStorage.getItem("longTermStrategyActive") === null)
        localStorage.setItem("longTermStrategyActive", longTermStrategyActive);
    if (localStorage.getItem("expeditionCollectorActive") === null)
        localStorage.setItem("expeditionCollectorActive", expeditionCollectorActive);

    if (localStorage.getItem("shortTermEfficiency2Active") === null)
        localStorage.setItem("shortTermEfficiency2Active", shortTermEfficiency2Active);
    if (localStorage.getItem("longTermExponentialsActive") === null)
        localStorage.setItem("longTermExponentialsActive", longTermExponentialsActive);
    if (localStorage.getItem("generatorInvestorActive") === null)
        localStorage.setItem("generatorInvestorActive", generatorInvestorActive);

    if (localStorage.getItem("shortTermPlanningActive") === null)
        localStorage.setItem("shortTermPlanningActive", shortTermPlanningActive);
    if (localStorage.getItem("expeditionHoarderActive") === null)
        localStorage.setItem("expeditionHoarderActive", expeditionHoarderActive);
    if (localStorage.getItem("generatorProfessionalActive") === null)
        localStorage.setItem("generatorProfessionalActive", generatorProfessionalActive);

    if (localStorage.getItem("expeditionMasteryActive") === null)
        localStorage.setItem("expeditionMasteryActive", expeditionMasteryActive);
    if (localStorage.getItem("longTermContinuationActive") === null)
        localStorage.setItem("longTermContinuationActive", longTermContinuationActive);
    if (localStorage.getItem("permanentInterestActive") === null)
        localStorage.setItem("permanentInterestActive", permanentInterestActive);

    if (localStorage.getItem("longTermEfficiencyActive") === null)
        localStorage.setItem("longTermEfficiencyActive", longTermEfficiencyActive);
    if (localStorage.getItem("generatorInsanityActive") === null)
        localStorage.setItem("generatorInsanityActive", generatorInsanityActive);
    if (localStorage.getItem("permanentProfiteerActive") === null)
        localStorage.setItem("permanentProfiteerActive", permanentProfiteerActive);

    if (localStorage.getItem("shortTermMinMaxActive") === null)
        localStorage.setItem("shortTermMinMaxActive", shortTermMinMaxActive);
    if (localStorage.getItem("expeditionAmassingActive") === null)
        localStorage.setItem("expeditionAmassingActive", expeditionAmassingActive);
    if (localStorage.getItem("permanentOverpowerActive") === null)
        localStorage.setItem("permanentOverpowerActive", permanentOverpowerActive);

    if (localStorage.getItem("rapidMomentumActive") === null)
        localStorage.setItem("rapidMomentumActive", rapidMomentumActive);
    if (localStorage.getItem("captainLongTermActive") === null)
        localStorage.setItem("captainLongTermActive", captainLongTermActive);
    if (localStorage.getItem("productionLineActive") === null)
        localStorage.setItem("productionLineActive", productionLineActive);

    if (typeof (Storage) !== "undefined") {
        $('#btnLongTermInvestments').prop('disabled', true);
        $('#btnPermanentInvestments').prop('disabled', true);
        $('#btnExpeditionInvestments').prop('disabled', true);
        $('#btnSummaryInvestments').prop('disabled', true);

        $('#btnInvestSocialMedia').prop('disabled', true);
        $('#btnInvestBlueChip').prop('disabled', true);
        $('#btnInvestSelfImprovement').prop('disabled', true);
        $('#btnInvestSelfImprovement2').prop('disabled', true);
        $('#btnInvestEnergy').prop('disabled', true);
        $('#btnInvestSuperHero').prop('disabled', true);
        $('#btnInvestMovie').prop('disabled', true);
        $('#btnInvestExperimental').prop('disabled', true);
        $('#btnInvestTimeTravel').prop('disabled', true);
        $('#btnInvestMystery').prop('disabled', true);
        $('#btnInvestMoon').prop('disabled', true);
        $('#btnInvestMars').prop('disabled', true);
        $('#btnInvestUniversalMission').prop('disabled', true);

        if (userClass == "Healer") {

            shortTermEnthusiastActive = localStorage.getItem("shortTermEnthusiastActive");
            longTermEnthusiastActive = localStorage.getItem("longTermEnthusiastActive");
            expeditionEnthusiastActive = localStorage.getItem("expeditionEnthusiastActive");

            shortTermUnderstandingActive = localStorage.getItem("shortTermUnderstandingActive");
            longTermPlanningActive = localStorage.getItem("longTermPlanningActive");
            expeditionGathererActive = localStorage.getItem("expeditionGathererActive");

            shortTermEfficiencyActive = localStorage.getItem("shortTermEfficiencyActive");
            longTermStrategyActive = localStorage.getItem("longTermStrategyActive");
            expeditionCollectorActive = localStorage.getItem("expeditionCollectorActive");

            shortTermEfficiency2Active = localStorage.getItem("shortTermEfficiency2Active");
            longTermExponentialsActive = localStorage.getItem("longTermExponentialsActive");
            generatorInvestorActive = localStorage.getItem("generatorInvestorActive");

            shortTermPlanningActive = localStorage.getItem("shortTermPlanningActive");
            expeditionHoarderActive = localStorage.getItem("expeditionHoarderActive");
            generatorProfessionalActive = localStorage.getItem("generatorProfessionalActive");

            expeditionMasteryActive = localStorage.getItem("expeditionMasteryActive");
            longTermContinuationActive = localStorage.getItem("longTermContinuationActive");
            permanentInterestActive = localStorage.getItem("permanentInterestActive");

            longTermEfficiencyActive = localStorage.getItem("longTermEfficiencyActive");
            generatorInsanityActive = localStorage.getItem("generatorInsanityActive");
            permanentProfiteerActive = localStorage.getItem("permanentProfiteerActive");

            shortTermMinMaxActive = localStorage.getItem("shortTermMinMaxActive");
            expeditionAmassingActive = localStorage.getItem("expeditionAmassingActive");
            permanentOverpowerActive = localStorage.getItem("permanentOverpowerActive");

            rapidMomentumActive = localStorage.getItem("rapidMomentumActive");
            captainLongTermActive = localStorage.getItem("captainLongTermActive");
            productionLineActive = localStorage.getItem("productionLineActive");

            //1
            if (shortTermEnthusiastActive == 'true') {
                $('#healerLevel1Abilities').hide(1);
                $('#shortTermEnthusiastAbility').show(1);
            }
            if (longTermEnthusiastActive == 'true') {
                $('#healerLevel1Abilities').hide(1);
                $('#longTermEnthusiastAbility').show(1);
            }
            if (expeditionEnthusiastActive == 'true') {
                $('#healerLevel1Abilities').hide(1);
                $('#expeditionEnthusiastAbility').show(1);
            }

            //2
            if (shortTermUnderstandingActive == 'true') {
                $('#healerLevel2Abilities').hide(1);
                $('#shortTermUnderstandingAbility').show(1);
            }
            if (longTermPlanningActive == 'true') {
                $('#healerLevel2Abilities').hide(1);
                $('#longTermPlanningAbility').show(1);
            }
            if (expeditionGathererActive == 'true') {
                $('#healerLevel2Abilities').hide(1);
                $('#expeditionGathererAbility').show(1);
            }

            //3
            if (shortTermEfficiencyActive == 'true') {
                $('#healerLevel3Abilities').hide(1);
                $('#shortTermEfficiencyAbility').show(1);
            }
            if (longTermStrategyActive == 'true') {
                $('#healerLevel3Abilities').hide(1);
                $('#longTermStrategyAbility').show(1);
            }
            if (expeditionCollectorActive == 'true') {
                $('#healerLevel3Abilities').hide(1);
                $('#expeditionCollectorAbility').show(1);
            }

            //4
            if (shortTermEfficiency2Active == 'true') {
                $('#healerLevel4Abilities').hide(1);
                $('#shortTermEfficiency2Ability').show(1);
            }
            if (longTermExponentialsActive == 'true') {
                $('#healerLevel4Abilities').hide(1);
                $('#longTermExponentialsAbility').show(1);
            }
            if (generatorInvestorActive == 'true') {
                $('#healerLevel4Abilities').hide(1);
                $('#generatorInvestorAbility').show(1);
            }

            //5
            if (shortTermPlanningActive == 'true') {
                $('#healerLevel5Abilities').hide(1);
                $('#shortTermPlanningAbility').show(1);
            }
            if (expeditionHoarderActive == 'true') {
                $('#healerLevel5Abilities').hide(1);
                $('#expeditionHoarderAbility').show(1);
            }
            if (generatorProfessionalActive == 'true') {
                $('#healerLevel5Abilities').hide(1);
                $('#generatorProfessionalAbility').show(1);
            }

            //6
            if (expeditionMasteryActive == 'true') {
                $('#healerLevel6Abilities').hide(1);
                $('#expeditionMasteryAbility').show(1);
            }
            if (longTermContinuationActive == 'true') {
                $('#healerLevel6Abilities').hide(1);
                $('#longTermContinuationAbility').show(1);
            }
            if (permanentInterestActive == 'true') {
                $('#healerLevel6Abilities').hide(1);
                $('#permanentInterestAbility').show(1);
            }

            //7
            if (longTermEfficiencyActive == 'true') {
                $('#healerLevel7Abilities').hide(1);
                $('#longTermEfficiencyAbility').show(1);
            }
            if (generatorInsanityActive == 'true') {
                $('#healerLevel7Abilities').hide(1);
                $('#generatorInsanityAbility').show(1);
            }
            if (permanentProfiteerActive == 'true') {
                $('#healerLevel7Abilities').hide(1);
                $('#permanentProfiteerAbility').show(1);
            }

            //8
            if (shortTermMinMaxActive == 'true') {
                $('#healerLevel8Abilities').hide(1);
                $('#shortTermMinMaxAbility').show(1);
            }
            if (expeditionAmassingActive == 'true') {
                $('#healerLevel8Abilities').hide(1);
                $('#expeditionAmassingAbility').show(1);
            }
            if (permanentOverpowerActive == 'true') {
                $('#healerLevel8Abilities').hide(1);
                $('#permanentOverpowerAbility').show(1);
            }


            //9
            if (rapidMomentumActive == 'true') {
                $('#healerLevel9Abilities').hide(1);
                $('#rapidMomentumAbility').show(1);
            }
            if (captainLongTermActive == 'true') {
                $('#healerLevel9Abilities').hide(1);
                $('#captainLongTermAbility').show(1);
            }
            if (productionLineActive == 'true') {
                $('#healerLevel9Abilities').hide(1);
                $('#productionLineAbility').show(1);
            }

            $("#btnAbilities").hide();
            $("#btnHealerAbilities").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#healerGenerate").show();
            $('#btnLongTermInvestments').prop('disabled', false);
            $('#btnPermanentInvestments').prop('disabled', false);
            $('#btnExpeditionInvestments').prop('disabled', false);
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
    }
    else
        alert("no support on your browser");
});