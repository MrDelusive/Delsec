$(document).ready(function () {

    $('#btnSpaceInvestments').click(function () {
        $(".hidden_Divs").hide();
        $("#investments").show();
        $("#permanentSpaceInvestments").show();
        return false;
    });

    //SPACE STATION INVEST
    $('#btnInvestSpaceStation').prop('disabled', false);
    $('#btnInvestSpaceStation').click(function () {
        if (money >= 3000000000 && investSpaceStation < investSpaceStationMax) {
            money -= 3000000000;
            totalInvestment += 3000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investSpaceStation++;
            localStorage.setItem("investSpaceStation", investSpaceStation);

            $('#spaceStationSummary').show(1);
            $('#spaceStationSummary').html('x' + investSpaceStation + ' Space Station(s)');
            $('#spaceStationSummaryDisplay').show(1);
            $('#investSpaceStationPopup').html("Buy Space Station: $3,000,000,000 <br />Owned: " + investSpaceStation + "/" + investSpaceStationMax);

        }
        return false;
    });

    //SATTELITE INVEST
    $('#btnInvestSatellite').prop('disabled', false);
    $('#btnInvestSatellite').click(function () {
        if (money >= 4500000000 && investSatellite < investSatelliteMax) {
            money -= 4500000000;
            totalInvestment += 4500000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investSatellite++;
            localStorage.setItem("investSatellite", investSatellite);

            $('#satelliteSummary').show(1);
            $('#satelliteSummary').html('x' + investSatellite + ' Satellite(s)');
            $('#satelliteSummaryDisplay').show(1);
            $('#investSatellitePopup').html("Buy Satellite: $4,500,000,000 <br />Owned: " + investSatellite + "/" + investSatelliteMax);

        }
        return false;
    });

    //MOON BASE INVEST
    $('#btnInvestMoonBase').prop('disabled', false);
    $('#btnInvestMoonBase').click(function () {
        if (money >= 7000000000 && investMoonBase < investMoonBaseMax) {
            money -= 7000000000;
            totalInvestment += 7000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investMoonBase++;
            localStorage.setItem("investMoonBase", investMoonBase);

            $('#moonBaseSummary').show(1);
            $('#moonBaseSummary').html('x' + investMoonBase + ' Moon Base(s)');
            $('#moonBaseSummaryDisplay').show(1);
            $('#investMoonBasePopup').html("Buy Moon Base: $7,000,000,000 <br />Owned: " + investMoonBase + "/" + investMoonBaseMax);

        }
        return false;
    });

    //OFFWORLD BASE INVEST
    $('#btnInvestOffworldBase').prop('disabled', false);
    $('#btnInvestOffworldBase').click(function () {
        if (money >= 15000000000 && investOffworldBase < investOffworldBaseMax) {
            money -= 15000000000;
            totalInvestment += 15000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investOffworldBase++;
            localStorage.setItem("investOffworldBase", investOffworldBase);

            $('#offworldBaseSummary').show(1);
            $('#offworldBaseSummary').html('x' + investOffworldBase + ' Offworld Base(s)');
            $('#offworldBaseSummaryDisplay').show(1);
            $('#investOffworldBasePopup').html("Buy Offworld Base: $15,000,000,000 <br />Owned: " + investOffworldBase + "/" + investOffworldBaseMax);

        }
        return false;
    });

    //STORAGEYARD INVEST
    $('#btnInvestStorageYard').prop('disabled', false);
    $('#btnInvestStorageYard').click(function () {
        if (money >= 20000000000 && investStorageYard < investStorageYardMax) {
            money -= 20000000000;
            totalInvestment += 20000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investStorageYard++;
            localStorage.setItem("investStorageYard", investStorageYard);

            $('#storageYardSummary').show(1);
            $('#storageYardSummary').html('x' + investStorageYard + ' Storage Yard(s)');
            $('#storageYardSummaryDisplay').show(1);
            $('#investStorageYardPopup').html("Buy Storage Yard: $20,000,000,000 <br />Owned: " + investStorageYard + "/" + investStorageYardMax);

        }
        return false;
    });

    //ASTEROID COLONY INVEST
    $('#btnInvestAsteroidColony').prop('disabled', false);
    $('#btnInvestAsteroidColony').click(function () {
        if (money >= 32000000000 && investAsteroidColony < investAsteroidColonyMax) {
            money -= 32000000000;
            totalInvestment += 32000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investAsteroidColony++;
            localStorage.setItem("investAsteroidColony", investAsteroidColony);

            $('#asteroidColonySummary').show(1);
            $('#asteroidColonySummary').html('x' + investAsteroidColony + ' Asteroid Colony(ies)');
            $('#asteroidColonySummaryDisplay').show(1);
            $('#investAsteroidColonyPopup').html("Buy Asteroid Colony: $32,000,000,000 <br />Owned: " + investAsteroidColony + "/" + investAsteroidColonyMax);

        }
        return false;
    });

    //FREESPACE STATION INVEST
    $('#btnInvestFreespaceStation').prop('disabled', false);
    $('#btnInvestFreespaceStation').click(function () {
        if (money >= 64000000000 && investFreespaceStation < investFreespaceStationMax) {
            money -= 64000000000;
            totalInvestment += 64000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investFreespaceStation++;
            localStorage.setItem("investFreespaceStation", investFreespaceStation);

            $('#freespaceStationSummary').show(1);
            $('#freespaceStationSummary').html('x' + investFreespaceStation + ' Freespace Station(s)');
            $('#freespaceStationSummaryDisplay').show(1);
            $('#investFreespaceStationPopup').html("Buy Freespace Station: $64,000,000,000 <br />Owned: " + investFreespaceStation + "/" + investFreespaceStationMax);

        }
        return false;
    });

    //DYSON SPHERE INVEST
    $('#btnInvestDysonSphere').prop('disabled', false);
    $('#btnInvestDysonSphere').click(function () {
        if (money >= 1000000000000 && investDysonSphere < investDysonSphereMax) {
            money -= 1000000000000;
            totalInvestment += 1000000000000;
            $('#totalInvestmentSpent').html('Money Spent on Investments: $' + totalInvestment.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("totalInvestment", totalInvestment);

            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            localStorage.setItem("money", money);

            investDysonSphere++;
            localStorage.setItem("investDysonSphere", investDysonSphere);

            $('#dysonSphereSummary').show(1);
            $('#dysonSphereSummary').html('x' + investDysonSphere + ' Dyson Sphere');
            $('#dysonSphereSummaryDisplay').show(1);
            $('#investDysonSpherePopup').html("Buy Dyson Sphere: $1,000,000,000,000 <br />Owned: " + investDysonSphere + "/" + investDysonSphereMax);

        }
        return false;
    });

});