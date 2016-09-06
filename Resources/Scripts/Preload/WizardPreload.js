$(document).ready(function () {

    if (localStorage.getItem("delsecZapperActive") === null)
        localStorage.setItem("delsecZapperActive", delsecZapperActive);
    if (localStorage.getItem("russianZapperActive") === null)
        localStorage.setItem("russianZapperActive", russianZapperActive);
    if (localStorage.getItem("griffonZapperActive") === null)
        localStorage.setItem("griffonZapperActive", griffonZapperActive);

    if (localStorage.getItem("chainConnectionActive") === null)
        localStorage.setItem("chainConnectionActive", chainConnectionActive);
    if (localStorage.getItem("delsecChargerActive") === null)
        localStorage.setItem("delsecChargerActive", delsecChargerActive);
    if (localStorage.getItem("chimerasecGrowthBenderActive") === null)
        localStorage.setItem("chimerasecGrowthBenderActive", chimerasecGrowthBenderActive);

    if (localStorage.getItem("thePeoplesWizardActive") === null)
        localStorage.setItem("thePeoplesWizardActive", thePeoplesWizardActive);
    if (localStorage.getItem("russianPowerAmplificationActive") === null)
        localStorage.setItem("russianPowerAmplificationActive", russianPowerAmplificationActive);
    if (localStorage.getItem("vipersecReflectionFieldActive") === null)
        localStorage.setItem("vipersecReflectionFieldActive", vipersecReflectionFieldActive);

    if (localStorage.getItem("necromancerActive") === null)
        localStorage.setItem("necromancerActive", necromancerActive);
    if (localStorage.getItem("ipOverchargeActive") === null)
        localStorage.setItem("ipOverchargeActive", ipOverchargeActive);
    if (localStorage.getItem("griffonBloodLustActive") === null)
        localStorage.setItem("griffonBloodLustActive", griffonBloodLustActive);

    if (localStorage.getItem("partyBuffWizardActive") === null)
        localStorage.setItem("partyBuffWizardActive", partyBuffWizardActive);
    if (localStorage.getItem("delsecManipulationActive") === null)
        localStorage.setItem("delsecManipulationActive", delsecManipulationActive);
    if (localStorage.getItem("vipersecFaderActive") === null)
        localStorage.setItem("vipersecFaderActive", vipersecFaderActive);

    if (localStorage.getItem("packetSummonerActive") === null)
        localStorage.setItem("packetSummonerActive", packetSummonerActive);
    if (localStorage.getItem("IPFirestormActive") === null)
        localStorage.setItem("IPFirestormActive", IPFirestormActive);
    if (localStorage.getItem("vipersecStealthFieldActive") === null)
        localStorage.setItem("vipersecStealthFieldActive", vipersecStealthFieldActive);

    if (localStorage.getItem("chimerasecMassProductionActive") === null)
        localStorage.setItem("chimerasecMassProductionActive", chimerasecMassProductionActive);
    if (localStorage.getItem("ironCurtainActive") === null)
        localStorage.setItem("ironCurtainActive", ironCurtainActive);
    if (localStorage.getItem("vipersecInvisibilityActive") === null)
        localStorage.setItem("vipersecInvisibilityActive", vipersecInvisibilityActive);

    if (localStorage.getItem("delsecSuperstormActive") === null)
        localStorage.setItem("delsecSuperstormActive", delsecSuperstormActive);
    if (localStorage.getItem("chaosWizardActive") === null)
        localStorage.setItem("chaosWizardActive", chaosWizardActive);
    if (localStorage.getItem("vipersecTimeReversalActive") === null)
        localStorage.setItem("vipersecTimeReversalActive", vipersecTimeReversalActive);

    if (localStorage.getItem("delsecTechGodActive") === null)
        localStorage.setItem("delsecTechGodActive", delsecTechGodActive);
    if (localStorage.getItem("riskFreeWorldActive") === null)
        localStorage.setItem("riskFreeWorldActive", riskFreeWorldActive);
    if (localStorage.getItem("redArmyConscriptionActive") === null)
        localStorage.setItem("redArmyConscriptionActive", redArmyConscriptionActive);

    if (typeof (Storage) !== "undefined") {     

        if (userClass == "Wizard") {         

            delsecZapperActive = localStorage.getItem("delsecZapperActive");
            russianZapperActive = localStorage.getItem("russianZapperActive");
            griffonZapperActive = localStorage.getItem("griffonZapperActive");

            chainConnectionActive = localStorage.getItem("chainConnectionActive");
            delsecChargerActive = localStorage.getItem("delsecChargerActive");
            chimerasecGrowthBenderActive = localStorage.getItem("chimerasecGrowthBenderActive");

            thePeoplesWizardActive = localStorage.getItem("thePeoplesWizardActive");
            russianPowerAmplificationActive = localStorage.getItem("russianPowerAmplificationActive");
            vipersecReflectionFieldActive = localStorage.getItem("vipersecReflectionFieldActive");

            necromancerActive = localStorage.getItem("necromancerActive");
            ipOverchargeActive = localStorage.getItem("ipOverchargeActive");
            griffonBloodLustActive = localStorage.getItem("griffonBloodLustActive");

            partyBuffWizardActive = localStorage.getItem("partyBuffWizardActive");
            delsecManipulationActive = localStorage.getItem("delsecManipulationActive");
            vipersecFaderActive = localStorage.getItem("vipersecFaderActive");

            packetSummonerActive = localStorage.getItem("packetSummonerActive");
            IPFirestormActive = localStorage.getItem("IPFirestormActive");
            vipersecStealthFieldActive = localStorage.getItem("vipersecStealthFieldActive");

            chimerasecMassProductionActive = localStorage.getItem("chimerasecMassProductionActive");
            ironCurtainActive = localStorage.getItem("ironCurtainActive");
            vipersecInvisibilityActive = localStorage.getItem("vipersecInvisibilityActive");

            delsecSuperstormActive = localStorage.getItem("delsecSuperstormActive");
            chaosWizardActive = localStorage.getItem("chaosWizardActive");
            vipersecTimeReversalActive = localStorage.getItem("vipersecTimeReversalActive");

            delsecTechGodActive = localStorage.getItem("delsecTechGodActive");
            riskFreeWorldActive = localStorage.getItem("riskFreeWorldActive");
            redArmyConscriptionActive = localStorage.getItem("redArmyConscriptionActive");

            //L1
            if (delsecZapperActive == 'true') {
                $('#wizardLevel1Abilities').hide(1);
                $('#delsecZapperAbility').show(1);
                $('#delsecZapperDisplay').show(1);
            }
            if (russianZapperActive == 'true') {
                $('#wizardLevel1Abilities').hide(1);
                $('#russianZapperAbility').show(1);
                $('#russianZapperDisplay').show(1);
            }
            if (griffonZapperActive == 'true') {
                $('#wizardLevel1Abilities').hide(1);
                $('#griffonZapperAbility').show(1);
                $('#griffonZapperDisplay').show(1);
            }

            //L2
            if (chainConnectionActive == 'true') {
                $('#wizardLevel2Abilities').hide(1);
                $('#chainConnectionAbility').show(1);
            }
            if (delsecChargerActive == 'true') {
                $('#wizardLevel2Abilities').hide(1);
                $('#delsecChargerAbility').show(1);
                $('#delsecChargerDisplay').show(1);
            }

            if (chimerasecGrowthBenderActive == 'true') {               
                $('#wizardLevel2Abilities').hide(1);
                $('#chimerasecGrowthBenderAbility').show(1);
            }

            //L3
            if (thePeoplesWizardActive == 'true') {
                $('#wizardLevel3Abilities').hide(1);
                $('#thePeoplesWizardAbility').show(1);
            }
            if (russianPowerAmplificationActive == 'true') {
                $('#wizardLevel3Abilities').hide(1);
                $('#russianPowerAmplificationAbility').show(1);
                $('#russianPowerAmplificationDisplay').show(1);
            }

            if (vipersecReflectionFieldActive == 'true') {
                $('#wizardLevel3Abilities').hide(1);
                $('#vipersecReflectionFieldAbility').show(1);
                $('#vipersecReflectionFieldDisplay').show(1);
            }

            //L4
            if (necromancerActive == 'true') {
                $('#wizardLevel4Abilities').hide(1);
                $('#necromancerAbility').show(1);
                $('#necromancerItem').show(1);
            }
            if (ipOverchargeActive == 'true') {
                $('#wizardLevel4Abilities').hide(1);
                $('#ipOverchargeAbility').show(1);
            }

            if (griffonBloodLustActive == 'true') {
                $('#wizardLevel4Abilities').hide(1);
                $('#griffonBloodLustAbility').show(1);
                $('#griffonBloodLustDisplay').show(1);
            }

            //L5
            if (partyBuffWizardActive == 'true') {
                $('#wizardLevel5Abilities').hide(1);
                $('#partyBuffWizardAbility').show(1);
            }
            if (delsecManipulationActive == 'true') {
                $('#wizardLevel5Abilities').hide(1);
                $('#delsecManipulationAbility').show(1);
                $('#delsecManipulationDisplay').show(1);
            }

            if (vipersecFaderActive == 'true') {
                $('#wizardLevel5Abilities').hide(1);
                $('#vipersecFaderAbility').show(1);
                $('#vipersecFaderDisplay').show(1);
            }

            //L6
            if (packetSummonerActive == 'true') {
                $('#wizardLevel6Abilities').hide(1);
                $('#packetSummonerAbility').show(1);
                $('#packetSummonerDisplay').show(1);
            }
            if (IPFirestormActive == 'true') {
                $('#wizardLevel6Abilities').hide(1);
                $('#IPFirestormAbility').show(1);
            }

            if (vipersecStealthFieldActive == 'true') {
                $('#wizardLevel6Abilities').hide(1);
                $('#vipersecStealthFieldAbility').show(1);
                $('#vipersecStealthFieldDisplay').show(1);
            }

            //L7
            if (chimerasecMassProductionActive == 'true') {
                $('#wizardLevel7Abilities').hide(1);
                $('#chimerasecMassProductionAbility').show(1);              
            }
            if (ironCurtainActive == 'true') {
                $('#wizardLevel7Abilities').hide(1);
                $('#ironCurtainAbility').show(1);
                $('#ironCurtainItem').show(1);
            }

            if (vipersecInvisibilityActive == 'true') {
                $('#wizardLevel7Abilities').hide(1);
                $('#vipersecInvisibilityAbility').show(1);
                $('#vipersecInvisibilityDisplay').show(1);
            }

            //L8
            if (delsecSuperstormActive == 'true') {
                $('#wizardLevel8Abilities').hide(1);
                $('#delsecSuperstormAbility').show(1);
                $('#delsecSuperstormIncomeDisplay').show(1);
                $('#delsecSuperstormPacketDisplay').show(1);
            }
            if (chaosWizardActive == 'true') {
                $('#wizardLevel8Abilities').hide(1);
                $('#chaosWizardAbility').show(1);
                $('#chaosWizardDisplay').show(1);
            }

            if (vipersecTimeReversalActive == 'true') {
                $('#wizardLevel8Abilities').hide(1);
                $('#vipersecTimeReversalAbility').show(1);
                $('#vipersecTimeReversalDisplay').show(1);
            }

            //L9
            if (delsecTechGodActive == 'true') {
                $('#wizardLevel9Abilities').hide(1);
                $('#delsecTechGodAbility').show(1);
                $('#delsecTechGodItem').show(1);
            }
            if (riskFreeWorldActive == 'true') {
                $('#wizardLevel9Abilities').hide(1);
                $('#riskFreeWorldAbility').show(1);
            }

            if (redArmyConscriptionActive == 'true') {
                $('#wizardLevel9Abilities').hide(1);
                $('#redArmyConscriptionAbility').show(1);
                $('#redArmyConscriptionDisplay').show(1);
            }


            $("#btnAbilities").hide();
            $("#btnWizardAbilities").fadeIn(500);
            $("#btnRiskManagement").fadeIn(500);
            $("#manualIncrementDisplay").hide();
            $("#autoWizardGenerate").show();
            $("#autoWizardGenerate").disableSelection();          
        }
    }
    else
        alert("no support on your browser");
});