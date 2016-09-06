$(document).ready(function () {
    if (localStorage.getItem("riskDetectionAmt") === null)
        localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
    if (localStorage.getItem("riskClearedTargets") === null)
        localStorage.setItem("riskClearedTargets", riskClearedTargets);

    if (typeof (Storage) !== "undefined") {
        riskDetectionAmt = parseFloat(localStorage.getItem("riskDetectionAmt"));
        riskClearedTargets = parseInt(localStorage.getItem("riskClearedTargets"));

        $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
        if (thePeoplesWizardActive == 'true')
            riskClearedTargetAmtIncrement += 100; // to 200.
        if (partyBuffWizardActive == 'true')
            riskClearedTargetAmtIncrement += 250; // to 450.
        if (chaosWizardActive == 'true')
            riskClearedTargetAmtIncrement += 50000; // to 50450
        if (delsecSuperstormActive == 'true')
            superstormMultiplyer = 2;

        wantedTarget1FirstName = firstNames[wantedTarget1FirstNameRoll];
        wantedTarget1LastName = lastNames[wantedTarget1LastNameRoll];
        wantedTarget1Address = addresses[wantedTarget1AddressRoll];

        wantedTarget2FirstName = firstNames[wantedTarget2FirstNameRoll];
        wantedTarget2LastName = lastNames[wantedTarget2LastNameRoll];
        wantedTarget2Address = addresses[wantedTarget2AddressRoll];

        wantedTarget3FirstName = firstNames[wantedTarget3FirstNameRoll];
        wantedTarget3LastName = lastNames[wantedTarget3LastNameRoll];
        wantedTarget3Address = addresses[wantedTarget3AddressRoll];

        wantedTarget4FirstName = firstNames[wantedTarget4FirstNameRoll];
        wantedTarget4LastName = lastNames[wantedTarget4LastNameRoll];
        wantedTarget4Address = addresses[wantedTarget4AddressRoll];

        wantedTarget5FirstName = firstNames[wantedTarget5FirstNameRoll];
        wantedTarget5LastName = lastNames[wantedTarget5LastNameRoll];
        wantedTarget5Address = addresses[wantedTarget5AddressRoll];

        wantedTarget6FirstName = firstNames[wantedTarget6FirstNameRoll];
        wantedTarget6LastName = lastNames[wantedTarget6LastNameRoll];
        wantedTarget6Address = addresses[wantedTarget6AddressRoll];

        wantedTarget7FirstName = firstNames[wantedTarget7FirstNameRoll];
        wantedTarget7LastName = lastNames[wantedTarget7LastNameRoll];
        wantedTarget7Address = addresses[wantedTarget7AddressRoll];

        wantedTarget8FirstName = firstNames[wantedTarget8FirstNameRoll];
        wantedTarget8LastName = lastNames[wantedTarget8LastNameRoll];
        wantedTarget8Address = addresses[wantedTarget8AddressRoll];

        wantedTarget9FirstName = firstNames[wantedTarget9FirstNameRoll];
        wantedTarget9LastName = lastNames[wantedTarget9LastNameRoll];
        wantedTarget9Address = addresses[wantedTarget9AddressRoll];

        wantedTarget10FirstName = firstNames[wantedTarget10FirstNameRoll];
        wantedTarget10LastName = lastNames[wantedTarget10LastNameRoll];
        wantedTarget10Address = addresses[wantedTarget10AddressRoll];
    }
    else
        alert("no support on your browser");
});