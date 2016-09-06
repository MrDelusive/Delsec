$(document).ready(function () {

    if (localStorage.getItem("totalPackets") === null)
        localStorage.setItem("totalPackets", totalPackets);
    if (localStorage.getItem("totalPacketsRussian") === null)
        localStorage.setItem("totalPacketsRussian", totalPacketsRussian);
    if (localStorage.getItem("totalPacketsVipersec") === null)
        localStorage.setItem("totalPacketsVipersec", totalPacketsVipersec);
    if (localStorage.getItem("totalPacketsChimerasec") === null)
        localStorage.setItem("totalPacketsChimerasec", totalPacketsChimerasec);
    if (localStorage.getItem("totalPacketsGriffonBank") === null)
        localStorage.setItem("totalPacketsGriffonBank", totalPacketsGriffonBank);
    if (localStorage.getItem("totalRisk") === null)
        localStorage.setItem("totalRisk", totalRisk);
    if (localStorage.getItem("globalPackets") === null)
        localStorage.setItem("globalPackets", globalPackets);
    if (localStorage.getItem("globalDelsecPackets") === null)
        localStorage.setItem("globalDelsecPackets", globalDelsecPackets);
    if (localStorage.getItem("globalRussianPackets") === null)
        localStorage.setItem("globalRussianPackets", globalRussianPackets);
    if (localStorage.getItem("globalVipersecPackets") === null)
        localStorage.setItem("globalVipersecPackets", globalVipersecPackets);
    if (localStorage.getItem("globalChimerasecPackets") === null)
        localStorage.setItem("globalChimerasecPackets", globalChimerasecPackets);
    if (localStorage.getItem("globalGriffonBankPackets") === null)
        localStorage.setItem("globalGriffonBankPackets", globalGriffonBankPackets);

    if (localStorage.getItem("twoBitBank") === null)
        localStorage.setItem("twoBitBank", twoBitBank);
    if (localStorage.getItem("threeBitBank") === null)
        localStorage.setItem("threeBitBank", threeBitBank);
    if (localStorage.getItem("fourBitBank") === null)
        localStorage.setItem("fourBitBank", fourBitBank);
    if (localStorage.getItem("sixBitBank") === null)
        localStorage.setItem("sixBitBank", sixBitBank);
    if (localStorage.getItem("eightBitBank") === null)
        localStorage.setItem("eightBitBank", eightBitBank);
    if (localStorage.getItem("twelveBitBank") === null)
        localStorage.setItem("twelveBitBank", twelveBitBank);
    if (localStorage.getItem("sixteenBitBank") === null)
        localStorage.setItem("sixteenBitBank", sixteenBitBank);
    if (localStorage.getItem("fourByteBank") === null)
        localStorage.setItem("fourByteBank", fourByteBank);
    if (localStorage.getItem("eightByteBank") === null)
        localStorage.setItem("eightByteBank", eightByteBank);
    if (localStorage.getItem("sixteenByteBank") === null)
        localStorage.setItem("sixteenByteBank", sixteenByteBank);
    if (localStorage.getItem("thirtytwoByteBank") === null)
        localStorage.setItem("thirtytwoByteBank", thirtytwoByteBank);
    if (localStorage.getItem("sixtyfourByteBank") === null)
        localStorage.setItem("sixtyfourByteBank", sixtyfourByteBank);
    if (localStorage.getItem("oneTwentyEightByteBank") === null)
        localStorage.setItem("oneTwentyEightByteBank", oneTwentyEightByteBank);
    if (localStorage.getItem("twoFiftySixByteBank") === null)
        localStorage.setItem("twoFiftySixByteBank", twoFiftySixByteBank);
    if (localStorage.getItem("fiveTwelveByteBank") === null)
        localStorage.setItem("fiveTwelveByteBank", fiveTwelveByteBank);
    if (localStorage.getItem("oneKBBank") === null)
        localStorage.setItem("oneKBBank", oneKBBank);
    if (localStorage.getItem("twoKBBank") === null)
        localStorage.setItem("twoKBBank", twoKBBank);
    if (localStorage.getItem("fourKBBank") === null)
        localStorage.setItem("fourKBBank", fourKBBank);
    if (localStorage.getItem("eightKBBank") === null)
        localStorage.setItem("eightKBBank", eightKBBank);
    if (localStorage.getItem("sixteenKBBank") === null)
        localStorage.setItem("sixteenKBBank", sixteenKBBank);
    if (localStorage.getItem("thirtyTwoKBBank") === null)
        localStorage.setItem("thirtyTwoKBBank", thirtyTwoKBBank);
    if (localStorage.getItem("sixtyFourKBBank") === null)
        localStorage.setItem("sixtyFourKBBank", sixtyFourKBBank);
    if (localStorage.getItem("oneTwentyEightKBBank") === null)
        localStorage.setItem("oneTwentyEightKBBank", oneTwentyEightKBBank);
    if (localStorage.getItem("twoFiftySixKBBank") === null)
        localStorage.setItem("twoFiftySixKBBank", twoFiftySixKBBank);
    if (localStorage.getItem("fiveTwelveKBBank") === null)
        localStorage.setItem("fiveTwelveKBBank", fiveTwelveKBBank);
    if (localStorage.getItem("oneMBBank") === null)
        localStorage.setItem("oneMBBank", oneMBBank);
    if (localStorage.getItem("twoMBBank") === null)
        localStorage.setItem("twoMBBank", twoMBBank);
    if (localStorage.getItem("fourMBBank") === null)
        localStorage.setItem("fourMBBank", fourMBBank);
    if (localStorage.getItem("eightMBBank") === null)
        localStorage.setItem("eightMBBank", eightMBBank);
    if (localStorage.getItem("sixteenMBBank") === null)
        localStorage.setItem("sixteenMBBank", sixteenMBBank);

    if (localStorage.getItem("russianSixBitBank") === null)
        localStorage.setItem("russianSixBitBank", russianSixBitBank);
    if (localStorage.getItem("russianTwelveBitBank") === null)
        localStorage.setItem("russianTwelveBitBank", russianTwelveBitBank);
    if (localStorage.getItem("russianSixteenBitBank") === null)
        localStorage.setItem("russianSixteenBitBank", russianSixteenBitBank);
    if (localStorage.getItem("russianFourByteBank") === null)
        localStorage.setItem("russianFourByteBank", russianFourByteBank);
    if (localStorage.getItem("russianEightByteBank") === null)
        localStorage.setItem("russianEightByteBank", russianEightByteBank);
    if (localStorage.getItem("russianSixteenByteBank") === null)
        localStorage.setItem("russianSixteenByteBank", russianSixteenByteBank);
    if (localStorage.getItem("russianThirtyTwoByteBank") === null)
        localStorage.setItem("russianThirtyTwoByteBank", russianThirtyTwoByteBank);
    if (localStorage.getItem("russianSixtyFourByteBank") === null)
        localStorage.setItem("russianSixtyFourByteBank", russianSixtyFourByteBank);
    if (localStorage.getItem("russianOneTwentyEightByteBank") === null)
        localStorage.setItem("russianOneTwentyEightByteBank", russianOneTwentyEightByteBank);
    if (localStorage.getItem("russianTwoFiftySixByteBank") === null)
        localStorage.setItem("russianTwoFiftySixByteBank", russianTwoFiftySixByteBank);
    if (localStorage.getItem("russianFiveTwelveByteBank") === null)
        localStorage.setItem("russianFiveTwelveByteBank", russianFiveTwelveByteBank);
    if (localStorage.getItem("russianOneKBBank") === null)
        localStorage.setItem("russianOneKBBank", russianOneKBBank);
    if (localStorage.getItem("russianTwoKBBank") === null)
        localStorage.setItem("russianTwoKBBank", russianTwoKBBank);
    if (localStorage.getItem("russianFourKBBank") === null)
        localStorage.setItem("russianFourKBBank", russianFourKBBank);
    if (localStorage.getItem("russianEightKBBank") === null)
        localStorage.setItem("russianEightKBBank", russianEightKBBank);
    if (localStorage.getItem("russianSixteenKBBank") === null)
        localStorage.setItem("russianSixteenKBBank", russianSixteenKBBank);
    if (localStorage.getItem("russianThirtyTwoKBBank") === null)
        localStorage.setItem("russianThirtyTwoKBBank", russianThirtyTwoKBBank);
    if (localStorage.getItem("russianSixtyFourKBBank") === null)
        localStorage.setItem("russianSixtyFourKBBank", russianSixtyFourKBBank);
    if (localStorage.getItem("russianOneTwentyEightKBBank") === null)
        localStorage.setItem("russianOneTwentyEightKBBank", russianOneTwentyEightKBBank);
    if (localStorage.getItem("russianTwoFiftySixKBBank") === null)
        localStorage.setItem("russianTwoFiftySixKBBank", russianTwoFiftySixKBBank);
    if (localStorage.getItem("russianFiveTwelveKBBank") === null)
        localStorage.setItem("russianFiveTwelveKBBank", russianFiveTwelveKBBank);
    if (localStorage.getItem("russianOneMBBank") === null)
        localStorage.setItem("russianOneMBBank", russianOneMBBank);
    if (localStorage.getItem("russianTwoMBBank") === null)
        localStorage.setItem("russianTwoMBBank", russianTwoMBBank);
    if (localStorage.getItem("russianFourMBBank") === null)
        localStorage.setItem("russianFourMBBank", russianFourMBBank);
    if (localStorage.getItem("russianEightMBBank") === null)
        localStorage.setItem("russianEightMBBank", russianEightMBBank);
    if (localStorage.getItem("russianSixteenMBBank") === null)
        localStorage.setItem("russianSixteenMBBank", russianSixteenMBBank);

    if (localStorage.getItem("vipersecOneByteBank") === null)
        localStorage.setItem("vipersecOneByteBank", vipersecOneByteBank);
    if (localStorage.getItem("vipersecTwoByteBank") === null)
        localStorage.setItem("vipersecTwoByteBank", vipersecTwoByteBank);
    if (localStorage.getItem("vipersecFourByteBank") === null)
        localStorage.setItem("vipersecFourByteBank", vipersecFourByteBank);
    if (localStorage.getItem("vipersecEightByteBank") === null)
        localStorage.setItem("vipersecEightByteBank", vipersecEightByteBank);
    if (localStorage.getItem("vipersecSixteenByteBank") === null)
        localStorage.setItem("vipersecSixteenByteBank", vipersecSixteenByteBank);
    if (localStorage.getItem("vipersecThirtyTwoByteBank") === null)
        localStorage.setItem("vipersecThirtyTwoByteBank", vipersecThirtyTwoByteBank);
    if (localStorage.getItem("vipersecSixtyFourByteBank") === null)
        localStorage.setItem("vipersecSixtyFourByteBank", vipersecSixtyFourByteBank);
    if (localStorage.getItem("vipersecOneTwentyEightByteBank") === null)
        localStorage.setItem("vipersecOneTwentyEightByteBank", vipersecOneTwentyEightByteBank);
    if (localStorage.getItem("vipersecTwoFiftySixByteBank") === null)
        localStorage.setItem("vipersecTwoFiftySixByteBank", vipersecTwoFiftySixByteBank);
    if (localStorage.getItem("vipersecFiveTwelveByteBank") === null)
        localStorage.setItem("vipersecFiveTwelveByteBank", vipersecFiveTwelveByteBank);
    if (localStorage.getItem("vipersecOneKBBank") === null)
        localStorage.setItem("vipersecOneKBBank", vipersecOneKBBank);
    if (localStorage.getItem("vipersecTwoKBBank") === null)
        localStorage.setItem("vipersecTwoKBBank", vipersecTwoKBBank);
    if (localStorage.getItem("vipersecFourKBBank") === null)
        localStorage.setItem("vipersecFourKBBank", vipersecFourKBBank);
    if (localStorage.getItem("vipersecEightKBBank") === null)
        localStorage.setItem("vipersecEightKBBank", vipersecEightKBBank);
    if (localStorage.getItem("vipersecSixteenKBBank") === null)
        localStorage.setItem("vipersecSixteenKBBank", vipersecSixteenKBBank);
    if (localStorage.getItem("vipersecThirtyTwoKBBank") === null)
        localStorage.setItem("vipersecThirtyTwoKBBank", vipersecThirtyTwoKBBank);
    if (localStorage.getItem("vipersecSixtyFourKBBank") === null)
        localStorage.setItem("vipersecSixtyFourKBBank", vipersecSixtyFourKBBank);
    if (localStorage.getItem("vipersecOneTwentyEightKBBank") === null)
        localStorage.setItem("vipersecOneTwentyEightKBBank", vipersecOneTwentyEightKBBank);
    if (localStorage.getItem("vipersecTwoFiftySixKBBank") === null)
        localStorage.setItem("vipersecTwoFiftySixKBBank", vipersecTwoFiftySixKBBank);
    if (localStorage.getItem("vipersecFiveTwelveKBBank") === null)
        localStorage.setItem("vipersecFiveTwelveKBBank", vipersecFiveTwelveKBBank);
    if (localStorage.getItem("vipersecOneMBBank") === null)
        localStorage.setItem("vipersecOneMBBank", vipersecOneMBBank);
    if (localStorage.getItem("vipersecTwoMBBank") === null)
        localStorage.setItem("vipersecTwoMBBank", vipersecTwoMBBank);
    if (localStorage.getItem("vipersecFourMBBank") === null)
        localStorage.setItem("vipersecFourMBBank", vipersecFourMBBank);
    if (localStorage.getItem("vipersecEightMBBank") === null)
        localStorage.setItem("vipersecEightMBBank", vipersecEightMBBank);
    if (localStorage.getItem("vipersecSixteenMBBank") === null)
        localStorage.setItem("vipersecSixteenMBBank", vipersecSixteenMBBank);

    if (localStorage.getItem("chimerasecOneByteBank") === null)
        localStorage.setItem("chimerasecOneByteBank", chimerasecOneByteBank);
    if (localStorage.getItem("chimerasecTwoByteBank") === null)
        localStorage.setItem("chimerasecTwoByteBank", chimerasecTwoByteBank);
    if (localStorage.getItem("chimerasecFourByteBank") === null)
        localStorage.setItem("chimerasecFourByteBank", chimerasecFourByteBank);
    if (localStorage.getItem("chimerasecEightByteBank") === null)
        localStorage.setItem("chimerasecEightByteBank", chimerasecEightByteBank);
    if (localStorage.getItem("chimerasecSixteenByteBank") === null)
        localStorage.setItem("chimerasecSixteenByteBank", chimerasecSixteenByteBank);
    if (localStorage.getItem("chimerasecThirtyTwoByteBank") === null)
        localStorage.setItem("chimerasecThirtyTwoByteBank", chimerasecThirtyTwoByteBank);
    if (localStorage.getItem("chimerasecSixtyFourByteBank") === null)
        localStorage.setItem("chimerasecSixtyFourByteBank", chimerasecSixtyFourByteBank);
    if (localStorage.getItem("chimerasecOneTwentyEightByteBank") === null)
        localStorage.setItem("chimerasecOneTwentyEightByteBank", chimerasecOneTwentyEightByteBank);
    if (localStorage.getItem("chimerasecTwoFiftySixByteBank") === null)
        localStorage.setItem("chimerasecTwoFiftySixByteBank", chimerasecTwoFiftySixByteBank);
    if (localStorage.getItem("chimerasecFiveTwelveByteBank") === null)
        localStorage.setItem("chimerasecFiveTwelveByteBank", chimerasecFiveTwelveByteBank);
    if (localStorage.getItem("chimerasecOneKBBank") === null)
        localStorage.setItem("chimerasecOneKBBank", chimerasecOneKBBank);
    if (localStorage.getItem("chimerasecTwoKBBank") === null)
        localStorage.setItem("chimerasecTwoKBBank", chimerasecTwoKBBank);
    if (localStorage.getItem("chimerasecFourKBBank") === null)
        localStorage.setItem("chimerasecFourKBBank", chimerasecFourKBBank);
    if (localStorage.getItem("chimerasecEightKBBank") === null)
        localStorage.setItem("chimerasecEightKBBank", chimerasecEightKBBank);
    if (localStorage.getItem("chimerasecSixteenKBBank") === null)
        localStorage.setItem("chimerasecSixteenKBBank", chimerasecSixteenKBBank);
    if (localStorage.getItem("chimerasecThirtyTwoKBBank") === null)
        localStorage.setItem("chimerasecThirtyTwoKBBank", chimerasecThirtyTwoKBBank);
    if (localStorage.getItem("chimerasecSixtyFourKBBank") === null)
        localStorage.setItem("chimerasecSixtyFourKBBank", chimerasecSixtyFourKBBank);
    if (localStorage.getItem("chimerasecOneTwentyEightKBBank") === null)
        localStorage.setItem("chimerasecOneTwentyEightKBBank", chimerasecOneTwentyEightKBBank);
    if (localStorage.getItem("chimerasecTwoFiftySixKBBank") === null)
        localStorage.setItem("chimerasecTwoFiftySixKBBank", chimerasecTwoFiftySixKBBank);
    if (localStorage.getItem("chimerasecFiveTwelveKBBank") === null)
        localStorage.setItem("chimerasecFiveTwelveKBBank", chimerasecFiveTwelveKBBank);
    if (localStorage.getItem("chimerasecOneMBBank") === null)
        localStorage.setItem("chimerasecOneMBBank", chimerasecOneMBBank);
    if (localStorage.getItem("chimerasecTwoMBBank") === null)
        localStorage.setItem("chimerasecTwoMBBank", chimerasecTwoMBBank);
    if (localStorage.getItem("chimerasecFourMBBank") === null)
        localStorage.setItem("chimerasecFourMBBank", chimerasecFourMBBank);
    if (localStorage.getItem("chimerasecEightMBBank") === null)
        localStorage.setItem("chimerasecEightMBBank", chimerasecEightMBBank);
    if (localStorage.getItem("chimerasecSixteenMBBank") === null)
        localStorage.setItem("chimerasecSixteenMBBank", chimerasecSixteenMBBank);

    if (localStorage.getItem("griffonBankOneByteBank") === null)
        localStorage.setItem("griffonBankOneByteBank", griffonBankOneByteBank);
    if (localStorage.getItem("griffonBankTwoByteBank") === null)
        localStorage.setItem("griffonBankTwoByteBank", griffonBankTwoByteBank);
    if (localStorage.getItem("griffonBankFourByteBank") === null)
        localStorage.setItem("griffonBankFourByteBank", griffonBankFourByteBank);
    if (localStorage.getItem("griffonBankEightByteBank") === null)
        localStorage.setItem("griffonBankEightByteBank", griffonBankEightByteBank);
    if (localStorage.getItem("griffonBankSixteenByteBank") === null)
        localStorage.setItem("griffonBankSixteenByteBank", griffonBankSixteenByteBank);
    if (localStorage.getItem("griffonBankThirtyTwoByteBank") === null)
        localStorage.setItem("griffonBankThirtyTwoByteBank", griffonBankThirtyTwoByteBank);
    if (localStorage.getItem("griffonBankSixtyFourByteBank") === null)
        localStorage.setItem("griffonBankSixtyFourByteBank", griffonBankSixtyFourByteBank);
    if (localStorage.getItem("griffonBankOneTwentyEightByteBank") === null)
        localStorage.setItem("griffonBankOneTwentyEightByteBank", griffonBankOneTwentyEightByteBank);
    if (localStorage.getItem("griffonBankTwoFiftySixByteBank") === null)
        localStorage.setItem("griffonBankTwoFiftySixByteBank", griffonBankTwoFiftySixByteBank);
    if (localStorage.getItem("griffonBankFiveTwelveByteBank") === null)
        localStorage.setItem("griffonBankFiveTwelveByteBank", griffonBankFiveTwelveByteBank);
    if (localStorage.getItem("griffonBankOneKBBank") === null)
        localStorage.setItem("griffonBankOneKBBank", griffonBankOneKBBank);
    if (localStorage.getItem("griffonBankTwoKBBank") === null)
        localStorage.setItem("griffonBankTwoKBBank", griffonBankTwoKBBank);
    if (localStorage.getItem("griffonBankFourKBBank") === null)
        localStorage.setItem("griffonBankFourKBBank", griffonBankFourKBBank);
    if (localStorage.getItem("griffonBankEightKBBank") === null)
        localStorage.setItem("griffonBankEightKBBank", griffonBankEightKBBank);
    if (localStorage.getItem("griffonBankSixteenKBBank") === null)
        localStorage.setItem("griffonBankSixteenKBBank", griffonBankSixteenKBBank);
    if (localStorage.getItem("griffonBankThirtyTwoKBBank") === null)
        localStorage.setItem("griffonBankThirtyTwoKBBank", griffonBankThirtyTwoKBBank);
    if (localStorage.getItem("griffonBankSixtyFourKBBank") === null)
        localStorage.setItem("griffonBankSixtyFourKBBank", griffonBankSixtyFourKBBank);
    if (localStorage.getItem("griffonBankOneTwentyEightKBBank") === null)
        localStorage.setItem("griffonBankOneTwentyEightKBBank", griffonBankOneTwentyEightKBBank);
    if (localStorage.getItem("griffonBankTwoFiftySixKBBank") === null)
        localStorage.setItem("griffonBankTwoFiftySixKBBank", griffonBankTwoFiftySixKBBank);
    if (localStorage.getItem("griffonBankFiveTwelveKBBank") === null)
        localStorage.setItem("griffonBankFiveTwelveKBBank", griffonBankFiveTwelveKBBank);
    if (localStorage.getItem("griffonBankOneMBBank") === null)
        localStorage.setItem("griffonBankOneMBBank", griffonBankOneMBBank);
    if (localStorage.getItem("griffonBankTwoMBBank") === null)
        localStorage.setItem("griffonBankTwoMBBank", griffonBankTwoMBBank);
    if (localStorage.getItem("griffonBankFourMBBank") === null)
        localStorage.setItem("griffonBankFourMBBank", griffonBankFourMBBank);
    if (localStorage.getItem("griffonBankEightMBBank") === null)
        localStorage.setItem("griffonBankEightMBBank", griffonBankEightMBBank);
    if (localStorage.getItem("griffonBankSixteenMBBank") === null)
        localStorage.setItem("griffonBankSixteenMBBank", griffonBankSixteenMBBank);

    if (typeof (Storage) !== "undefined") {
        totalPackets = parseInt(localStorage.getItem("totalPackets"));
        totalPacketsRussian = parseInt(localStorage.getItem("totalPacketsRussian"));
        totalPacketsVipersec = parseInt(localStorage.getItem("totalPacketsVipersec"));
        totalPacketsChimerasec = parseInt(localStorage.getItem("totalPacketsChimerasec"));
        totalPacketsGriffonBank = parseInt(localStorage.getItem("totalPacketsGriffonBank"));
        totalRisk = parseInt(localStorage.getItem("totalRisk"));
        globalPackets = parseFloat(localStorage.getItem("globalPackets"));
        globalDelsecPackets = parseFloat(localStorage.getItem("globalDelsecPackets"));
        globalRussianPackets = parseFloat(localStorage.getItem("globalRussianPackets"));
        globalVipersecPackets = parseFloat(localStorage.getItem("globalVipersecPackets"));
        globalChimerasecPackets = parseFloat(localStorage.getItem("globalChimerasecPackets"));
        globalGriffonBankPackets = parseFloat(localStorage.getItem("globalGriffonBankPackets"));

        twoBitBank = parseInt(localStorage.getItem("twoBitBank"));
        threeBitBank = parseInt(localStorage.getItem("threeBitBank"));
        fourBitBank = parseInt(localStorage.getItem("fourBitBank"));
        sixBitBank = parseInt(localStorage.getItem("sixBitBank"));       
        eightBitBank = parseInt(localStorage.getItem("eightBitBank"));
        twelveBitBank = parseInt(localStorage.getItem("twelveBitBank"));
        sixteenBitBank = parseInt(localStorage.getItem("sixteenBitBank"));
        fourByteBank = parseInt(localStorage.getItem("fourByteBank"));
        eightByteBank = parseInt(localStorage.getItem("eightByteBank"));
        sixteenByteBank = parseInt(localStorage.getItem("sixteenByteBank"));
        thirtytwoByteBank = parseInt(localStorage.getItem("thirtytwoByteBank"));
        sixtyfourByteBank = parseInt(localStorage.getItem("sixtyfourByteBank"));
        oneTwentyEightByteBank = parseInt(localStorage.getItem("oneTwentyEightByteBank"));
        twoFiftySixByteBank = parseInt(localStorage.getItem("twoFiftySixByteBank"));
        fiveTwelveByteBank = parseInt(localStorage.getItem("fiveTwelveByteBank"));
        oneKBBank = parseInt(localStorage.getItem("oneKBBank"));
        twoKBBank = parseInt(localStorage.getItem("twoKBBank"));
        fourKBBank = parseInt(localStorage.getItem("fourKBBank"));
        eightKBBank = parseInt(localStorage.getItem("eightKBBank"));
        sixteenKBBank = parseInt(localStorage.getItem("sixteenKBBank"));
        thirtyTwoKBBank = parseInt(localStorage.getItem("thirtyTwoKBBank"));
        sixtyFourKBBank = parseInt(localStorage.getItem("sixtyFourKBBank"));
        oneTwentyEightKBBank = parseInt(localStorage.getItem("oneTwentyEightKBBank"));
        twoFiftySixKBBank = parseInt(localStorage.getItem("twoFiftySixKBBank"));
        fiveTwelveKBBank = parseInt(localStorage.getItem("fiveTwelveKBBank"));
        oneMBBank = parseInt(localStorage.getItem("oneMBBank"));
        twoMBBank = parseInt(localStorage.getItem("twoMBBank"));
        fourMBBank = parseInt(localStorage.getItem("fourMBBank"));
        eightMBBank = parseInt(localStorage.getItem("eightMBBank"));
        sixteenMBBank = parseInt(localStorage.getItem("sixteenMBBank"));

        russianSixBitBank = parseInt(localStorage.getItem("russianSixBitBank"));
        russianTwelveBitBank = parseInt(localStorage.getItem("russianTwelveBitBank"));
        russianSixteenBitBank = parseInt(localStorage.getItem("russianSixteenBitBank"));
        russianFourByteBank = parseInt(localStorage.getItem("russianFourByteBank"));
        russianEightByteBank = parseInt(localStorage.getItem("russianEightByteBank"));
        russianSixteenByteBank = parseInt(localStorage.getItem("russianSixteenByteBank"));
        russianThirtyTwoByteBank = parseInt(localStorage.getItem("russianThirtyTwoByteBank"));
        russianSixtyFourByteBank = parseInt(localStorage.getItem("russianSixtyFourByteBank"));
        russianOneTwentyEightByteBank = parseInt(localStorage.getItem("russianOneTwentyEightByteBank"));
        russianTwoFiftySixByteBank = parseInt(localStorage.getItem("russianTwoFiftySixByteBank"));
        russianFiveTwelveByteBank = parseInt(localStorage.getItem("russianFiveTwelveByteBank"));
        russianOneKBBank = parseInt(localStorage.getItem("russianOneKBBank"));
        russianTwoKBBank = parseInt(localStorage.getItem("russianTwoKBBank"));
        russianFourKBBank = parseInt(localStorage.getItem("russianFourKBBank"));
        russianEightKBBank = parseInt(localStorage.getItem("russianEightKBBank"));
        russianSixteenKBBank = parseInt(localStorage.getItem("russianSixteenKBBank"));
        russianThirtyTwoKBBank = parseInt(localStorage.getItem("russianThirtyTwoKBBank"));
        russianSixtyFourKBBank = parseInt(localStorage.getItem("russianSixtyFourKBBank"));
        russianOneTwentyEightKBBank = parseInt(localStorage.getItem("russianOneTwentyEightKBBank"));
        russianTwoFiftySixKBBank = parseInt(localStorage.getItem("russianTwoFiftySixKBBank"));
        russianFiveTwelveKBBank = parseInt(localStorage.getItem("russianFiveTwelveKBBank"));
        russianOneMBBank = parseInt(localStorage.getItem("russianOneMBBank"));
        russianTwoMBBank = parseInt(localStorage.getItem("russianTwoMBBank"));
        russianFourMBBank = parseInt(localStorage.getItem("russianFourMBBank"));
        russianEightMBBank = parseInt(localStorage.getItem("russianEightMBBank"));
        russianSixteenMBBank = parseInt(localStorage.getItem("russianSixteenMBBank"));

        vipersecOneByteBank = parseInt(localStorage.getItem("vipersecOneByteBank"));
        vipersecTwoByteBank = parseInt(localStorage.getItem("vipersecTwoByteBank"));
        vipersecFourByteBank = parseInt(localStorage.getItem("vipersecFourByteBank"));
        vipersecEightByteBank = parseInt(localStorage.getItem("vipersecEightByteBank"));
        vipersecSixteenByteBank = parseInt(localStorage.getItem("vipersecSixteenByteBank"));
        vipersecThirtyTwoByteBank = parseInt(localStorage.getItem("vipersecThirtyTwoByteBank"));
        vipersecSixtyFourByteBank = parseInt(localStorage.getItem("vipersecSixtyFourByteBank"));
        vipersecOneTwentyEightByteBank = parseInt(localStorage.getItem("vipersecOneTwentyEightByteBank"));
        vipersecTwoFiftySixByteBank = parseInt(localStorage.getItem("vipersecTwoFiftySixByteBank"));
        vipersecFiveTwelveByteBank = parseInt(localStorage.getItem("vipersecFiveTwelveByteBank"));
        vipersecOneKBBank = parseInt(localStorage.getItem("vipersecOneKBBank"));
        vipersecTwoKBBank = parseInt(localStorage.getItem("vipersecTwoKBBank"));
        vipersecFourKBBank = parseInt(localStorage.getItem("vipersecFourKBBank"));
        vipersecEightKBBank = parseInt(localStorage.getItem("vipersecEightKBBank"));
        vipersecSixteenKBBank = parseInt(localStorage.getItem("vipersecSixteenKBBank"));
        vipersecThirtyTwoKBBank = parseInt(localStorage.getItem("vipersecThirtyTwoKBBank"));
        vipersecSixtyFourKBBank = parseInt(localStorage.getItem("vipersecSixtyFourKBBank"));
        vipersecOneTwentyEightKBBank = parseInt(localStorage.getItem("vipersecOneTwentyEightKBBank"));
        vipersecTwoFiftySixKBBank = parseInt(localStorage.getItem("vipersecTwoFiftySixKBBank"));
        vipersecFiveTwelveKBBank = parseInt(localStorage.getItem("vipersecFiveTwelveKBBank"));
        vipersecOneMBBank = parseInt(localStorage.getItem("vipersecOneMBBank"));
        vipersecTwoMBBank = parseInt(localStorage.getItem("vipersecTwoMBBank"));
        vipersecFourMBBank = parseInt(localStorage.getItem("vipersecFourMBBank"));
        vipersecEightMBBank = parseInt(localStorage.getItem("vipersecEightMBBank"));
        vipersecSixteenMBBank = parseInt(localStorage.getItem("vipersecSixteenMBBank"));

        chimerasecOneByteBank = parseInt(localStorage.getItem("chimerasecOneByteBank"));
        chimerasecTwoByteBank = parseInt(localStorage.getItem("chimerasecTwoByteBank"));
        chimerasecFourByteBank = parseInt(localStorage.getItem("chimerasecFourByteBank"));
        chimerasecEightByteBank = parseInt(localStorage.getItem("chimerasecEightByteBank"));
        chimerasecSixteenByteBank = parseInt(localStorage.getItem("chimerasecSixteenByteBank"));
        chimerasecThirtyTwoByteBank = parseInt(localStorage.getItem("chimerasecThirtyTwoByteBank"));
        chimerasecSixtyFourByteBank = parseInt(localStorage.getItem("chimerasecSixtyFourByteBank"));
        chimerasecOneTwentyEightByteBank = parseInt(localStorage.getItem("chimerasecOneTwentyEightByteBank"));
        chimerasecTwoFiftySixByteBank = parseInt(localStorage.getItem("chimerasecTwoFiftySixByteBank"));
        chimerasecFiveTwelveByteBank = parseInt(localStorage.getItem("chimerasecFiveTwelveByteBank"));
        chimerasecOneKBBank = parseInt(localStorage.getItem("chimerasecOneKBBank"));
        chimerasecTwoKBBank = parseInt(localStorage.getItem("chimerasecTwoKBBank"));
        chimerasecFourKBBank = parseInt(localStorage.getItem("chimerasecFourKBBank"));
        chimerasecEightKBBank = parseInt(localStorage.getItem("chimerasecEightKBBank"));
        chimerasecSixteenKBBank = parseInt(localStorage.getItem("chimerasecSixteenKBBank"));
        chimerasecThirtyTwoKBBank = parseInt(localStorage.getItem("chimerasecThirtyTwoKBBank"));
        chimerasecSixtyFourKBBank = parseInt(localStorage.getItem("chimerasecSixtyFourKBBank"));
        chimerasecOneTwentyEightKBBank = parseInt(localStorage.getItem("chimerasecOneTwentyEightKBBank"));
        chimerasecTwoFiftySixKBBank = parseInt(localStorage.getItem("chimerasecTwoFiftySixKBBank"));
        chimerasecFiveTwelveKBBank = parseInt(localStorage.getItem("chimerasecFiveTwelveKBBank"));
        chimerasecOneMBBank = parseInt(localStorage.getItem("chimerasecOneMBBank"));
        chimerasecTwoMBBank = parseInt(localStorage.getItem("chimerasecTwoMBBank"));
        chimerasecFourMBBank = parseInt(localStorage.getItem("chimerasecFourMBBank"));
        chimerasecEightMBBank = parseInt(localStorage.getItem("chimerasecEightMBBank"));
        chimerasecSixteenMBBank = parseInt(localStorage.getItem("chimerasecSixteenMBBank"));

        griffonBankOneByteBank = parseInt(localStorage.getItem("griffonBankOneByteBank"));
        griffonBankTwoByteBank = parseInt(localStorage.getItem("griffonBankTwoByteBank"));
        griffonBankFourByteBank = parseInt(localStorage.getItem("griffonBankFourByteBank"));
        griffonBankEightByteBank = parseInt(localStorage.getItem("griffonBankEightByteBank"));
        griffonBankSixteenByteBank = parseInt(localStorage.getItem("griffonBankSixteenByteBank"));
        griffonBankThirtyTwoByteBank = parseInt(localStorage.getItem("griffonBankThirtyTwoByteBank"));
        griffonBankSixtyFourByteBank = parseInt(localStorage.getItem("griffonBankSixtyFourByteBank"));
        griffonBankOneTwentyEightByteBank = parseInt(localStorage.getItem("griffonBankOneTwentyEightByteBank"));
        griffonBankTwoFiftySixByteBank = parseInt(localStorage.getItem("griffonBankTwoFiftySixByteBank"));
        griffonBankFiveTwelveByteBank = parseInt(localStorage.getItem("griffonBankFiveTwelveByteBank"));
        griffonBankOneKBBank = parseInt(localStorage.getItem("griffonBankOneKBBank"));
        griffonBankTwoKBBank = parseInt(localStorage.getItem("griffonBankTwoKBBank"));
        griffonBankFourKBBank = parseInt(localStorage.getItem("griffonBankFourKBBank"));
        griffonBankEightKBBank = parseInt(localStorage.getItem("griffonBankEightKBBank"));
        griffonBankSixteenKBBank = parseInt(localStorage.getItem("griffonBankSixteenKBBank"));
        griffonBankThirtyTwoKBBank = parseInt(localStorage.getItem("griffonBankThirtyTwoKBBank"));
        griffonBankSixtyFourKBBank = parseInt(localStorage.getItem("griffonBankSixtyFourKBBank"));
        griffonBankOneTwentyEightKBBank = parseInt(localStorage.getItem("griffonBankOneTwentyEightKBBank"));
        griffonBankTwoFiftySixKBBank = parseInt(localStorage.getItem("griffonBankTwoFiftySixKBBank"));
        griffonBankFiveTwelveKBBank = parseInt(localStorage.getItem("griffonBankFiveTwelveKBBank"));
        griffonBankOneMBBank = parseInt(localStorage.getItem("griffonBankOneMBBank"));
        griffonBankTwoMBBank = parseInt(localStorage.getItem("griffonBankTwoMBBank"));
        griffonBankFourMBBank = parseInt(localStorage.getItem("griffonBankFourMBBank"));
        griffonBankEightMBBank = parseInt(localStorage.getItem("griffonBankEightMBBank"));
        griffonBankSixteenMBBank = parseInt(localStorage.getItem("griffonBankSixteenMBBank"));

    }
    else
        alert("no support on your browser");

    $('#totalPacketDisplay').html("Total Delsec Packets/Sec: " + totalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#totalPacketDisplayRussian').html("Total Russian Packets/Sec: " + totalPacketsRussian.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#totalPacketDisplayVipersec').html("Total Vipersec Packets/Sec: " + totalPacketsVipersec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#totalPacketDisplayChimerasec').html("Total Chimerasec Packets/Sec: " + totalPacketsChimerasec.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    $('#totalPacketDisplayGriffonBank').html("Total Griffon Bank Packets/Sec: " + totalPacketsGriffonBank.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    if (globalPackets > 1000000000000000000)
        $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000000000) + (" Quintillion<br />Free Packets Remain.</h2>"));
    else if (globalPackets > 1000000000000000)
        $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000000) + (" Quadrillion<br />Free Packets Remain.</h2>"));
    else if (globalPackets > 1000000000000)
        $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000000) + (" Trillion<br />Free Packets Remain.</h2>"));
    else if (globalPackets > 1000000000)
        $('#globalPacketsDisplay').html("<h2>~" + Math.round(globalPackets / 1000000000) + (" Billion<br />Free Packets Remain.</h2>"));
    else
        $('#globalPacketsDisplay').html("<h2>" + globalPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + ("<br />Free Packets Remain.</h2>"));

    $('#delsecGlobalControl').html(globalDelsecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
    $('#russianGlobalControl').html(globalRussianPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
    $('#vipersecGlobalControl').html(globalVipersecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
    $('#chimerasecGlobalControl').html(globalChimerasecPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");
    $('#griffonBankGlobalControl').html(globalGriffonBankPackets.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Packets Controlled.");


    delsecPercentage = globalDelsecPackets / GLOBALPACKETMAX * 100;
    russianPercentage = globalRussianPackets / GLOBALPACKETMAX * 100;
    vipersecPercentage = globalVipersecPackets / GLOBALPACKETMAX * 100;
    chimerasecPercentage = globalChimerasecPackets / GLOBALPACKETMAX * 100;
    griffonBankPercentage = globalGriffonBankPackets / GLOBALPACKETMAX * 100;

    $('#delsecPercentage').html(delsecPercentage.toFixed(4) + "%");
    $('#russianPercentage').html(russianPercentage.toFixed(4) + "%");
    $('#vipersecPercentage').html(vipersecPercentage.toFixed(4) + "%");
    $('#chimerasecPercentage').html(chimerasecPercentage.toFixed(4) + "%");
    $('#griffonBankPercentage').html(griffonBankPercentage.toFixed(4) + "%");

    $('#totalRiskDisplay').html("Total Risk: " + totalRisk.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " at " + riskTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec.");

    current2BitPrice = 2 + 2 * twoBitBank / 10;
    $('#btnBuy2BitCrawler').html("Buy 2 Bit Delsec Crawler (1 Packets/sec) - $" + current2BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current3BitPrice = 4 + 4 * threeBitBank / 10;
    $('#btnBuy3BitCrawler').html("Buy 3 Bit Delsec Crawler (2 Packets/sec) - $" + current3BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current4BitPrice = 8 + 8 * fourBitBank / 10;
    $('#btnBuy4BitCrawler').html("Buy 4 Bit Delsec Crawler (4 Packets/sec) - $" + current4BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current6BitPrice = 32 + 32 * sixBitBank / 10;
    $('#btnBuy6BitCrawler').html("Buy 6 Bit Delsec Crawler (16 Packets/sec) - $" + current6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
    current8BitPrice = 128 + 128 * eightBitBank / 10;
    $('#btnBuy8BitCrawler').html("Buy 8 Bit Delsec Crawler (64 Packets/sec) - $" + current8BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

    $('#btnDelsecCrawlerShop').prop('disabled', false);
    $('#btnRussianCrawlerShop').prop('disabled', true);
    $('#btnVipersecCrawlerShop').prop('disabled', true);
    $('#btnChimerasecCrawlerShop').prop('disabled', true);
    $('#btnGriffonbankCrawlerShop').prop('disabled', true);
    $('#btnBonusesCrawlerShop').prop('disabled', true);

    if (userClass == 'Wizard') {

        $('#btnRussianCrawlerShop').prop('disabled', false);
        $('#btnVipersecCrawlerShop').prop('disabled', false);
        $('#btnChimerasecCrawlerShop').prop('disabled', false);
        $('#btnGriffonbankCrawlerShop').prop('disabled', false);
        $('#btnBonusesCrawlerShop').prop('disabled', false);

        $('#btnRussianCrawlerShop').html("RussianTech Crawlers");
        $('#btnVipersecCrawlerShop').html("Vipersec Crawlers");
        $('#btnChimerasecCrawlerShop').html("Chimerasec Crawlers");
        $('#btnGriffonbankCrawlerShop').html("GriffonBank Crawlers");
        $('#btnBonusesCrawlerShop').html("Bonuses");

        current12BitPrice = 2056 + 2056 * twelveBitBank / 10;
        $('#btnBuy12BitCrawler').html("Buy 12 Bit Delsec Crawler (1,024 Packets/sec) - $" + current12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.16 RISK/SEC");
        current16BitPrice = 32896 + 32896 * sixteenBitBank / 10;
        $('#btnBuy16BitCrawler').html("Buy 16 Bit Delsec Crawler (16,384 Packets/sec) - $" + current16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
        current4BytePrice = 65792 + 65792 * fourByteBank / 10;
        $('#btnBuy4ByteCrawler').html("Buy 4 Byte Delsec Crawler (32,768 Packets/sec) - $" + current4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
        current8BytePrice = 131584 + 131584 * eightByteBank / 10;
        $('#btnBuy8ByteCrawler').html("Buy 8 Byte Delsec Crawler (65,536 Packets/sec) - $" + current8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
        current16BytePrice = 263168 + 263168 * sixteenByteBank / 10;
        $('#btnBuy16ByteCrawler').html("Buy 16 Byte Delsec Crawler (131,072 Packets/sec) - $" + current16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
        current32BytePrice = 526336 + 526336 * thirtytwoByteBank / 10;
        $('#btnBuy32ByteCrawler').html("Buy 32 Byte Delsec Crawler (262,144 Packets/sec) - $" + current32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
        current64BytePrice = 1052672 + 1052672 * sixtyfourByteBank / 10;
        $('#btnBuy64ByteCrawler').html("Buy 64 Byte Delsec Crawler (524,288 Packets/sec) - $" + current64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
        current128BytePrice = 2105344 + 2105344 * oneTwentyEightByteBank / 10;
        $('#btnBuy128ByteCrawler').html("Buy 128 Byte Delsec Crawler (1,048,576 Packets/sec) - $" + current128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
        current256BytePrice = 4210688 + 4210688 * twoFiftySixByteBank / 10;
        $('#btnBuy256ByteCrawler').html("Buy 256 Byte Delsec Crawler (~2 Million Packets/sec) - $" + current256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
        current512BytePrice = 8421376 + 8421376 * fiveTwelveByteBank / 10;
        $('#btnBuy512ByteCrawler').html("Buy 512 Byte Delsec Crawler (~4.1 Million Packets/sec) - $" + current512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
        current1KBPrice = 16842752 + 16842752 * oneKBBank / 10;
        $('#btnBuy1KBCrawler').html("Buy 1KB Delsec Crawler (~8.3 Million Packets/sec) - $" + current1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
        current2KBPrice = 33685504 + 33685504 * twoKBBank / 10;
        $('#btnBuy2KBCrawler').html("Buy 2KB Delsec Crawler (~16.7 Million Packets/sec) - $" + current2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
        current4KBPrice = 67371008 + 67371008 * fourKBBank / 10;
        $('#btnBuy4KBCrawler').html("Buy 4KB Delsec Crawler (~33.4 Million Packets/sec) - $" + current4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
        current8KBPrice = 134742016 + 134742016 * eightKBBank / 10;
        $('#btnBuy8KBCrawler').html("Buy 8KB Delsec Crawler (~67.1 Million Packets/sec) - $" + current8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
        current16KBPrice = 269484032 + 269484032 * sixteenKBBank / 10;
        $('#btnBuy16KBCrawler').html("Buy 16KB Delsec Crawler (~134.2 Million Packets/sec) - $" + current16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
        current32KBPrice = 538968064 + 538968064 * thirtyTwoKBBank / 10;
        $('#btnBuy32KBCrawler').html("Buy 32KB Delsec Crawler (~268.4 Million Packets/sec) - $" + current32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
        current64KBPrice = 1077936128 + 1077936128 * sixtyFourKBBank / 10;
        $('#btnBuy64KBCrawler').html("Buy 64KB Delsec Crawler (~536.8 Million Packets/sec) - $" + current64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
        current128KBPrice = 2155872256 + 2155872256 * oneTwentyEightKBBank / 10;
        $('#btnBuy128KBCrawler').html("Buy 128KB Delsec Crawler (~1.07 Billion Packets/sec) - $" + current128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
        current256KBPrice = 4311744512 + 4311744512 * twoFiftySixKBBank / 10;
        $('#btnBuy256KBCrawler').html("Buy 256KB Delsec Crawler (~2.14 Billion Packets/sec) - $" + current256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
        current512KBPrice = 8623489024 + 8623489024 * fiveTwelveKBBank / 10;
        $('#btnBuy512KBCrawler').html("Buy 512KB Delsec Crawler (~4.29 Billion Packets/sec) - $" + current512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
        current1MBPrice = 17246978048 + 17246978048 * oneMBBank / 10;
        $('#btnBuy1MBCrawler').html("Buy 1MB Delsec Crawler (~8.59 Billion Packets/sec) - $" + current1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
        current2MBPrice = 34493956096 + 34493956096 * twoMBBank / 10;
        $('#btnBuy2MBCrawler').html("Buy 2MB Delsec Crawler (~17.18 Billion Packets/sec) - $" + current2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
        current4MBPrice = 68987912192 + 68987912192 * fourMBBank / 10;
        $('#btnBuy4MBCrawler').html("Buy 4MB Delsec Crawler (~34.36 Billion Packets/sec) - $" + current4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
        current8MBPrice = 137975824384 + 137975824384 * eightMBBank / 10;
        $('#btnBuy8MBCrawler').html("Buy 8MB Delsec Crawler (~68.72 Billion Packets/sec) - $" + current8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
        current16MBPrice = 275951648768 + 275951648768 * sixteenMBBank / 10;
        $('#btnBuy16MBCrawler').html("Buy 16MB Delsec Crawler (~137.44 Billion Packets/sec) - $" + current16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");

        if (redArmyConscriptionActive == 'true')
            redArmyConscriptionDivider = 10;

        currentRussian6BitPrice = (35.20 + 35.20 * russianSixBitBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian6BitCrawler').html("Buy 6 Bit Russian Tech Crawler (16 Packets/sec) - $" + currentRussian6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        currentRussian12BitPrice = (2261.6 + 2261.6 * russianTwelveBitBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian12BitCrawler').html("Buy 12 Bit Russian Tech Crawler (1,024 Packets/sec) - $" + currentRussian12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.24 RISK/SEC");
        currentRussian16BitPrice = (36185.6 + 36185.6 * russianSixteenBitBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian16BitCrawler').html("Buy 16 Bit Russian Tech Crawler (16,384 Packets/sec) - $" + currentRussian16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.48 RISK/SEC");
        currentRussian4BytePrice = (72371.2 + 72371.2 * russianFourByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian4ByteCrawler').html("Buy 4 Byte Russian Tech Crawler (32,768 Packets/sec) - $" + currentRussian4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.96 RISK/SEC");
        currentRussian8BytePrice = (144742.4 + 144742.4 * russianEightByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian8ByteCrawler').html("Buy 8 Byte Russian Tech Crawler (65,536 Packets/sec) - $" + currentRussian8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.92 RISK/SEC");
        currentRussian16BytePrice = (289484.8 + 289484.8 * russianSixteenByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian16ByteCrawler').html("Buy 16 Byte Russian Tech Crawler (131,072 Packets/sec) - $" + currentRussian16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3.84 RISK/SEC");
        currentRussian32BytePrice = (578969.6 + 578969.6 * russianThirtyTwoByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian32ByteCrawler').html("Buy 32 Byte Russian Tech Crawler (262,144 Packets/sec) - $" + currentRussian32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7.68 RISK/SEC");
        currentRussian64BytePrice = (1157939.2 + 1157939.2 * russianSixtyFourByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian64ByteCrawler').html("Buy 64 Byte Russian Tech Crawler (524,288 Packets/sec) - $" + currentRussian64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15.36 RISK/SEC");
        currentRussian128BytePrice = (2315878.4 + 2315878.4 * russianOneTwentyEightByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian128ByteCrawler').html("Buy 128 Byte Russian Tech Crawler (1,048,576 Packets/sec) - $" + currentRussian128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+30.72 RISK/SEC");
        currentRussian256BytePrice = (4631756.8 + 4631756.8 * russianTwoFiftySixByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian256ByteCrawler').html("Buy 256 Byte Russian Tech Crawler (~2 Million Packets/sec) - $" + currentRussian256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+61.44 RISK/SEC");
        currentRussian512BytePrice = (9263513.6 + 9263513.6 * russianFiveTwelveByteBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian512ByteCrawler').html("Buy 512 Byte Russian Tech Crawler (~4.1 Million Packets/sec) - $" + currentRussian512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+122.88 RISK/SEC");
        currentRussian1KBPrice = (18527027.2 + 18527027.2 * russianOneKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian1KBCrawler').html("Buy 1KB Russian Tech Crawler (~8.3 Million Packets/sec) - $" + currentRussian1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+245.76 RISK/SEC");
        currentRussian2KBPrice = (37054054.4 + 37054054.4 * russianTwoKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian2KBCrawler').html("Buy 2KB Russian Tech Crawler (~16.7 Million Packets/sec) - $" + currentRussian2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+491.52 RISK/SEC");
        currentRussian4KBPrice = (74108108.8 + 74108108.8 * russianFourKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian4KBCrawler').html("Buy 4KB Russian Tech Crawler (~33.4 Million Packets/sec) - $" + currentRussian4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+983.04 RISK/SEC");
        currentRussian8KBPrice = (148216217.6 + 148216217.6 * russianEightKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian8KBCrawler').html("Buy 8KB Russian Tech Crawler (~67.1 Million Packets/sec) - $" + currentRussian8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,966.08 RISK/SEC");
        currentRussian16KBPrice = (296432435.2 + 296432435.2 * russianSixteenKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian16KBCrawler').html("Buy 16KB Russian Tech Crawler (~134.2 Million Packets/sec) - $" + currentRussian16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3,932.16 RISK/SEC");
        currentRussian32KBPrice = (592864870.4 + 592864870.4 * russianThirtyTwoKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian32KBCrawler').html("Buy 32KB Russian Tech Crawler (~268.4 Million Packets/sec) - $" + currentRussian32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7,864.32 RISK/SEC");
        currentRussian64KBPrice = (1185729740.8 + 1185729740.8 * russianSixtyFourKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian64KBCrawler').html("Buy 64KB Russian Tech Crawler (~536.8 Million Packets/sec) - $" + currentRussian64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15,728.64 RISK/SEC");
        currentRussian128KBPrice = (2371459481.6 + 2371459481.6 * russianOneTwentyEightKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian128KBCrawler').html("Buy 128KB Russian Tech Crawler (~1.07 Billion Packets/sec) - $" + currentRussian128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+31,457.28 RISK/SEC");
        currentRussian256KBPrice = (4742918963.2 + 4742918963.2 * russianTwoFiftySixKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian256KBCrawler').html("Buy 256KB Russian Tech Crawler (~2.14 Billion Packets/sec) - $" + currentRussian256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+62,914.56 RISK/SEC");
        currentRussian512KBPrice = (9485837926.4 + 9485837926.4 * russianFiveTwelveKBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian512KBCrawler').html("Buy 512KB Russian Tech Crawler (~4.29 Billion Packets/sec) - $" + currentRussian512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+125,829.12 RISK/SEC");
        currentRussian1MBPrice = (18971675852.8 + 18971675852.8 * russianOneMBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian1MBCrawler').html("Buy 1MB Russian Tech Crawler (~8.59 Billion Packets/sec) - $" + currentRussian1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+251,658.24 RISK/SEC");
        currentRussian2MBPrice = (37943351705.6 + 37943351705.6 * russianTwoMBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian2MBCrawler').html("Buy 2MB Russian Tech Crawler (~17.18 Billion Packets/sec) - $" + currentRussian2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+503,316.48 RISK/SEC");
        currentRussian4MBPrice = (75886703411.2 + 75886703411.2 * russianFourMBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian4MBCrawler').html("Buy 4MB Russian Tech Crawler (~34.36 Billion Packets/sec) - $" + currentRussian4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,006,632.96 RISK/SEC");
        currentRussian8MBPrice = (151773406822.4 + 151773406822.4 * russianEightMBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian8MBCrawler').html("Buy 8MB Russian Tech Crawler (~68.72 Billion Packets/sec) - $" + currentRussian8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,013,265.92 RISK/SEC");
        currentRussian16MBPrice = (303546813644.8 + 303546813644.8 * russianSixteenMBBank / 10) / redArmyConscriptionDivider;
        $('#btnBuyRussian16MBCrawler').html("Buy 16MB Russian Tech Crawler (~137.44 Billion Packets/sec) - $" + currentRussian16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+4,026,531.84 RISK/SEC");

        currentVipersec1BytePrice = 20560 + 20560 * vipersecOneByteBank * 0.15;
        $('#btnBuyVipersec1ByteCrawler').html("Buy 1 Byte Vipersec Crawler (8,192 Packets/sec) - $" + currentVipersec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        currentVipersec2BytePrice = 41120 + 41120 * vipersecTwoByteBank * 0.15;
        $('#btnBuyVipersec2ByteCrawler').html("Buy 2 Byte Vipersec Crawler (16,384 Packets/sec) - $" + currentVipersec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        currentVipersec4BytePrice = 82240 + 82240 * vipersecFourByteBank * 0.15;
        $('#btnBuyVipersec4ByteCrawler').html("Buy 4 Byte Vipersec Crawler (32,768 Packets/sec) - $" + currentVipersec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
        currentVipersec8BytePrice = 164480 + 164480 * vipersecEightByteBank * 0.15;
        $('#btnBuyVipersec8ByteCrawler').html("Buy 8 Byte Vipersec Crawler (65,536 Packets/sec) - $" + currentVipersec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
        currentVipersec16BytePrice = 328960 + 328960 * vipersecSixteenByteBank * 0.15;
        $('#btnBuyVipersec16ByteCrawler').html("Buy 16 Byte Vipersec Crawler (131,072 Packets/sec) - $" + currentVipersec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
        currentVipersec32BytePrice = 657920 + 657920 * vipersecThirtyTwoByteBank * 0.15;
        $('#btnBuyVipersec32ByteCrawler').html("Buy 32 Byte Vipersec Crawler (262,144 Packets/sec) - $" + currentVipersec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
        currentVipersec64BytePrice = 1315840 + 1315840 * vipersecSixtyFourByteBank * 0.15;
        $('#btnBuyVipersec64ByteCrawler').html("Buy 64 Byte Vipersec Crawler (524,288 Packets/sec) - $" + currentVipersec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
        currentVipersec128BytePrice = 2631680 + 2631680 * vipersecOneTwentyEightByteBank * 0.15;
        $('#btnBuyVipersec128ByteCrawler').html("Buy 128 Byte Vipersec Crawler (1,048,576 Packets/sec) - $" + currentVipersec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
        currentVipersec256BytePrice = 5263360 + 5263360 * vipersecTwoFiftySixByteBank * 0.15;
        $('#btnBuyVipersec256ByteCrawler').html("Buy 256 Byte Vipersec Crawler (~2 Million Packets/sec) - $" + currentVipersec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
        currentVipersec512BytePrice = 10526720 + 10526720 * vipersecFiveTwelveByteBank * 0.15;
        $('#btnBuyVipersec512ByteCrawler').html("Buy 512 Byte Vipersec Crawler (~4.1 Million Packets/sec) - $" + currentVipersec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
        currentVipersec1KBPrice = 21053440 + 21053440 * vipersecOneKBBank * 0.15;
        $('#btnBuyVipersec1KBCrawler').html("Buy 1KB Vipersec Crawler (~8.3 Million Packets/sec) - $" + currentVipersec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
        currentVipersec2KBPrice = 42106880 + 42106880 * vipersecTwoKBBank * 0.15;
        $('#btnBuyVipersec2KBCrawler').html("Buy 2KB Vipersec Crawler (~16.7 Million Packets/sec) - $" + currentVipersec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
        currentVipersec4KBPrice = 84213760 + 84213760 * vipersecFourKBBank * 0.15;
        $('#btnBuyVipersec4KBCrawler').html("Buy 4KB Vipersec Crawler (~33.4 Million Packets/sec) - $" + currentVipersec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
        currentVipersec8KBPrice = 168427520 + 168427520 * vipersecEightKBBank * 0.15;
        $('#btnBuyVipersec8KBCrawler').html("Buy 8KB Vipersec Crawler (~67.1 Million Packets/sec) - $" + currentVipersec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
        currentVipersec16KBPrice = 336855040 + 336855040 * vipersecSixteenKBBank * 0.15;
        $('#btnBuyVipersec16KBCrawler').html("Buy 16KB Vipersec Crawler (~134.2 Million Packets/sec) - $" + currentVipersec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
        currentVipersec32KBPrice = 673710080 + 673710080 * vipersecThirtyTwoKBBank * 0.15;
        $('#btnBuyVipersec32KBCrawler').html("Buy 32KB Vipersec Crawler (~268.4 Million Packets/sec) - $" + currentVipersec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
        currentVipersec64KBPrice = 1347420160 + 1347420160 * vipersecSixtyFourKBBank * 0.15;
        $('#btnBuyVipersec64KBCrawler').html("Buy 64KB Vipersec Crawler (~536.8 Million Packets/sec) - $" + currentVipersec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
        currentVipersec128KBPrice = 2694840320 + 2694840320 * vipersecOneTwentyEightKBBank * 0.15;
        $('#btnBuyVipersec128KBCrawler').html("Buy 128KB Vipersec Crawler (~1.07 Billion Packets/sec) - $" + currentVipersec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
        currentVipersec256KBPrice = 5389680640 + 5389680640 * vipersecTwoFiftySixKBBank * 0.15;
        $('#btnBuyVipersec256KBCrawler').html("Buy 256KB Vipersec Crawler (~2.14 Billion Packets/sec) - $" + currentVipersec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
        currentVipersec512KBPrice = 10779361280 + 10779361280 * vipersecFiveTwelveKBBank * 0.15;
        $('#btnBuyVipersec512KBCrawler').html("Buy 512KB Vipersec Crawler (~4.29 Billion Packets/sec) - $" + currentVipersec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
        currentVipersec1MBPrice = 21558722560 + 21558722560 * vipersecOneMBBank * 0.15;
        $('#btnBuyVipersec1MBCrawler').html("Buy 1MB Vipersec Crawler (~8.59 Billion Packets/sec) - $" + currentVipersec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
        currentVipersec2MBPrice = 43117445120 + 43117445120 * vipersecTwoMBBank * 0.15;
        $('#btnBuyVipersec2MBCrawler').html("Buy 2MB Vipersec Crawler (~17.18 Billion Packets/sec) - $" + currentVipersec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
        currentVipersec4MBPrice = 86234890240 + 86234890240 * vipersecFourMBBank * 0.15;
        $('#btnBuyVipersec4MBCrawler').html("Buy 4MB Vipersec Crawler (~34.36 Billion Packets/sec) - $" + currentVipersec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
        currentVipersec8MBPrice = 172469780480 + 172469780480 * vipersecEightMBBank * 0.15;
        $('#btnBuyVipersec8MBCrawler').html("Buy 8MB Vipersec Crawler (~68.72 Billion Packets/sec) - $" + currentVipersec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
        currentVipersec16MBPrice = 344939560960 + 344939560960 * vipersecSixteenMBBank * 0.15;
        $('#btnBuyVipersec16MBCrawler').html("Buy 16MB Vipersec Crawler (~137.44 Billion Packets/sec) - $" + currentVipersec16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");

        if (chimerasecMassProductionActive == 'true')
            chimerasecMassProductionDivider = 2;

        if (chimerasecGrowthBenderActive == "false") {
            currentChimerasec1BytePrice = 10280 / chimerasecMassProductionDivider + 10280 / chimerasecMassProductionDivider * chimerasecOneByteBank * 0.02;
            currentChimerasec2BytePrice = 20560 / chimerasecMassProductionDivider + 20560 / chimerasecMassProductionDivider * chimerasecTwoByteBank * 0.02;
            currentChimerasec4BytePrice = 41120 / chimerasecMassProductionDivider + 41120 / chimerasecMassProductionDivider * chimerasecFourByteBank * 0.02;
            currentChimerasec8BytePrice = 82240 / chimerasecMassProductionDivider + 82240 / chimerasecMassProductionDivider * chimerasecEightByteBank * 0.02;
            currentChimerasec16BytePrice = 164480 / chimerasecMassProductionDivider + 164480 / chimerasecMassProductionDivider * chimerasecSixteenByteBank * 0.02;
            currentChimerasec32BytePrice = 328960 / chimerasecMassProductionDivider + 328960 / chimerasecMassProductionDivider * chimerasecThirtyTwoByteBank * 0.02;
            currentChimerasec64BytePrice = 657920 / chimerasecMassProductionDivider + 657920 / chimerasecMassProductionDivider * chimerasecSixtyFourByteBank * 0.02;
            currentChimerasec128BytePrice = 1315840 / chimerasecMassProductionDivider + 1315840 / chimerasecMassProductionDivider * chimerasecOneTwentyEightByteBank * 0.02;
            currentChimerasec256BytePrice = 2631680 / chimerasecMassProductionDivider + 2631680 / chimerasecMassProductionDivider * chimerasecTwoFiftySixByteBank * 0.02;
            currentChimerasec512BytePrice = 5263360 / chimerasecMassProductionDivider + 5263360 / chimerasecMassProductionDivider * chimerasecFiveTwelveByteBank * 0.02;
            currentChimerasec1KBPrice = 10526720 / chimerasecMassProductionDivider + 10526720 / chimerasecMassProductionDivider * chimerasecOneKBBank * 0.02;
            currentChimerasec2KBPrice = 21053440 / chimerasecMassProductionDivider + 21053440 / chimerasecMassProductionDivider * chimerasecTwoKBBank * 0.02;
            currentChimerasec4KBPrice = 42106880 / chimerasecMassProductionDivider + 42106880 / chimerasecMassProductionDivider * chimerasecFourKBBank * 0.02;
            currentChimerasec8KBPrice = 84213760 / chimerasecMassProductionDivider + 84213760 / chimerasecMassProductionDivider * chimerasecEightKBBank * 0.02;
            currentChimerasec16KBPrice = 168427520 / chimerasecMassProductionDivider + 168427520 / chimerasecMassProductionDivider * chimerasecSixteenKBBank * 0.02;
            currentChimerasec32KBPrice = 336855040 / chimerasecMassProductionDivider + 336855040 / chimerasecMassProductionDivider * chimerasecThirtyTwoKBBank * 0.02;
            currentChimerasec64KBPrice = 673710080 / chimerasecMassProductionDivider + 673710080 / chimerasecMassProductionDivider * chimerasecSixtyFourKBBank * 0.02;
            currentChimerasec128KBPrice = 1347420160 / chimerasecMassProductionDivider + 1347420160 / chimerasecMassProductionDivider * chimerasecOneTwentyEightKBBank * 0.02;
            currentChimerasec256KBPrice = 2694840320 / chimerasecMassProductionDivider + 2694840320 / chimerasecMassProductionDivider * chimerasecTwoFiftySixKBBank * 0.02;
            currentChimerasec512KBPrice = 5389680640 / chimerasecMassProductionDivider + 5389680640 / chimerasecMassProductionDivider * chimerasecFiveTwelveKBBank * 0.02;
            currentChimerasec1MBPrice = 10779361280 / chimerasecMassProductionDivider + 10779361280 / chimerasecMassProductionDivider * chimerasecOneMBBank * 0.02;
            currentChimerasec2MBPrice = 21558722560 / chimerasecMassProductionDivider + 21558722560 / chimerasecMassProductionDivider * chimerasecTwoMBBank * 0.02;
            currentChimerasec4MBPrice = 43117445120 / chimerasecMassProductionDivider + 43117445120 / chimerasecMassProductionDivider * chimerasecFourMBBank * 0.02;
            currentChimerasec8MBPrice = 86234890240 / chimerasecMassProductionDivider + 86234890240 / chimerasecMassProductionDivider * chimerasecEightMBBank * 0.02;
            currentChimerasec16MBPrice = 172469780480 / chimerasecMassProductionDivider + 172469780480 / chimerasecMassProductionDivider * chimerasecSixteenMBBank * 0.02;
        }
        else {
            currentChimerasec1BytePrice = 10280 / chimerasecMassProductionDivider;
            currentChimerasec2BytePrice = 20560 / chimerasecMassProductionDivider;
            currentChimerasec4BytePrice = 41120 / chimerasecMassProductionDivider;
            currentChimerasec8BytePrice = 82240 / chimerasecMassProductionDivider;
            currentChimerasec16BytePrice = 164480 / chimerasecMassProductionDivider;
            currentChimerasec32BytePrice = 328960 / chimerasecMassProductionDivider;
            currentChimerasec64BytePrice = 657920 / chimerasecMassProductionDivider;
            currentChimerasec128BytePrice = 1315840 / chimerasecMassProductionDivider;
            currentChimerasec256BytePrice = 2631680 / chimerasecMassProductionDivider;
            currentChimerasec512BytePrice = 5263360 / chimerasecMassProductionDivider;
            currentChimerasec1KBPrice = 10526720 / chimerasecMassProductionDivider;
            currentChimerasec2KBPrice = 21053440 / chimerasecMassProductionDivider;
            currentChimerasec4KBPrice = 42106880 / chimerasecMassProductionDivider;
            currentChimerasec8KBPrice = 84213760 / chimerasecMassProductionDivider;
            currentChimerasec16KBPrice = 168427520 / chimerasecMassProductionDivider;
            currentChimerasec32KBPrice = 336855040 / chimerasecMassProductionDivider;
            currentChimerasec64KBPrice = 673710080 / chimerasecMassProductionDivider;
            currentChimerasec128KBPrice = 1347420160 / chimerasecMassProductionDivider;
            currentChimerasec256KBPrice = 2694840320 / chimerasecMassProductionDivider;
            currentChimerasec512KBPrice = 5389680640 / chimerasecMassProductionDivider;
            currentChimerasec1MBPrice = 10779361280 / chimerasecMassProductionDivider;
            currentChimerasec2MBPrice = 21558722560 / chimerasecMassProductionDivider;
            currentChimerasec4MBPrice = 43117445120 / chimerasecMassProductionDivider;
            currentChimerasec8MBPrice = 86234890240 / chimerasecMassProductionDivider;
            currentChimerasec16MBPrice = 172469780480 / chimerasecMassProductionDivider;
        }

        $('#btnBuyChimerasec1ByteCrawler').html("Buy 1 Byte Chimerasec Crawler (8,192 Packets/sec) - $" + currentChimerasec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.16 RISK/SEC");
        $('#btnBuyChimerasec2ByteCrawler').html("Buy 2 Byte Chimerasec Crawler (16,384 Packets/sec) - $" + currentChimerasec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");     
        $('#btnBuyChimerasec4ByteCrawler').html("Buy 4 Byte Chimerasec Crawler (32,768 Packets/sec) - $" + currentChimerasec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");       
        $('#btnBuyChimerasec8ByteCrawler').html("Buy 8 Byte Chimerasec Crawler (65,536 Packets/sec) - $" + currentChimerasec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
        $('#btnBuyChimerasec16ByteCrawler').html("Buy 16 Byte Chimerasec Crawler (131,072 Packets/sec) - $" + currentChimerasec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
        $('#btnBuyChimerasec32ByteCrawler').html("Buy 32 Byte Chimerasec Crawler (262,144 Packets/sec) - $" + currentChimerasec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
        $('#btnBuyChimerasec64ByteCrawler').html("Buy 64 Byte Chimerasec Crawler (524,288 Packets/sec) - $" + currentChimerasec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
        $('#btnBuyChimerasec128ByteCrawler').html("Buy 128 Byte Chimerasec Crawler (1,048,576 Packets/sec) - $" + currentChimerasec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
        $('#btnBuyChimerasec256ByteCrawler').html("Buy 256 Byte Chimerasec Crawler (~2 Million Packets/sec) - $" + currentChimerasec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
        $('#btnBuyChimerasec512ByteCrawler').html("Buy 512 Byte Chimerasec Crawler (~4.1 Million Packets/sec) - $" + currentChimerasec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
        $('#btnBuyChimerasec1KBCrawler').html("Buy 1KB Chimerasec Crawler (~8.3 Million Packets/sec) - $" + currentChimerasec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
        $('#btnBuyChimerasec2KBCrawler').html("Buy 2KB Chimerasec Crawler (~16.7 Million Packets/sec) - $" + currentChimerasec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
        $('#btnBuyChimerasec4KBCrawler').html("Buy 4KB Chimerasec Crawler (~33.4 Million Packets/sec) - $" + currentChimerasec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
        $('#btnBuyChimerasec8KBCrawler').html("Buy 8KB Chimerasec Crawler (~67.1 Million Packets/sec) - $" + currentChimerasec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
        $('#btnBuyChimerasec16KBCrawler').html("Buy 16KB Chimerasec Crawler (~134.2 Million Packets/sec) - $" + currentChimerasec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
        $('#btnBuyChimerasec32KBCrawler').html("Buy 32KB Chimerasec Crawler (~268.4 Million Packets/sec) - $" + currentChimerasec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
        $('#btnBuyChimerasec64KBCrawler').html("Buy 64KB Chimerasec Crawler (~536.8 Million Packets/sec) - $" + currentChimerasec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
        $('#btnBuyChimerasec128KBCrawler').html("Buy 128KB Chimerasec Crawler (~1.07 Billion Packets/sec) - $" + currentChimerasec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
        $('#btnBuyChimerasec256KBCrawler').html("Buy 256KB Chimerasec Crawler (~2.14 Billion Packets/sec) - $" + currentChimerasec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
        $('#btnBuyChimerasec512KBCrawler').html("Buy 512KB Chimerasec Crawler (~4.29 Billion Packets/sec) - $" + currentChimerasec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
        $('#btnBuyChimerasec1MBCrawler').html("Buy 1MB Chimerasec Crawler (~8.59 Billion Packets/sec) - $" + currentChimerasec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
        $('#btnBuyChimerasec2MBCrawler').html("Buy 2MB Chimerasec Crawler (~17.18 Billion Packets/sec) - $" + currentChimerasec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
        $('#btnBuyChimerasec4MBCrawler').html("Buy 4MB Chimerasec Crawler (~34.36 Billion Packets/sec) - $" + currentChimerasec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
        $('#btnBuyChimerasec8MBCrawler').html("Buy 8MB Chimerasec Crawler (~68.72 Billion Packets/sec) - $" + currentChimerasec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
        $('#btnBuyChimerasec16MBCrawler').html("Buy 16MB Chimerasec Crawler (~137.44 Billion Packets/sec) - $" + currentChimerasec16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");

        currentGriffonBank1BytePrice = 19737.6 + 19737.6 * griffonBankOneByteBank * 0.15;
        $('#btnBuyGriffonBank1ByteCrawler').html("Buy 1 Byte Griffon Bank Crawler (8,192 Packets/sec) - $" + currentGriffonBank1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
        currentGriffonBank2BytePrice = 39475.2 + 39475.2 * griffonBankTwoByteBank * 0.15;
        $('#btnBuyGriffonBank2ByteCrawler').html("Buy 2 Byte Griffon Bank Crawler (16,384 Packets/sec) - $" + currentGriffonBank2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
        currentGriffonBank4BytePrice = 78950.4 + 78950.4 * griffonBankFourByteBank * 0.15;
        $('#btnBuyGriffonBank4ByteCrawler').html("Buy 4 Byte Griffon Bank Crawler (32,768 Packets/sec) - $" + currentGriffonBank4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
        currentGriffonBank8BytePrice = 157900.8 + 157900.8 * griffonBankEightByteBank * 0.15;
        $('#btnBuyGriffonBank8ByteCrawler').html("Buy 8 Byte Griffon Bank Crawler (65,536 Packets/sec) - $" + currentGriffonBank8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
        currentGriffonBank16BytePrice = 315801.6 + 315801.6 * griffonBankSixteenByteBank * 0.15;
        $('#btnBuyGriffonBank16ByteCrawler').html("Buy 16 Byte GriffonBank Crawler (131,072 Packets/sec) - $" + currentGriffonBank16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
        currentGriffonBank32BytePrice = 631603.2 + 631603.2 * griffonBankThirtyTwoByteBank * 0.15;
        $('#btnBuyGriffonBank32ByteCrawler').html("Buy 32 Byte Griffon Bank Crawler (262,144 Packets/sec) - $" + currentGriffonBank32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
        currentGriffonBank64BytePrice = 1263206.4 + 1263206.4 * griffonBankSixtyFourByteBank * 0.15;
        $('#btnBuyGriffonBank64ByteCrawler').html("Buy 64 Byte Griffon Bank Crawler (524,288 Packets/sec) - $" + currentGriffonBank64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
        currentGriffonBank128BytePrice = 2526412.8 + 2526412.8 * griffonBankOneTwentyEightByteBank * 0.15;
        $('#btnBuyGriffonBank128ByteCrawler').html("Buy 128 Byte Griffon Bank Crawler (1,048,576 Packets/sec) - $" + currentGriffonBank128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
        currentGriffonBank256BytePrice = 5052825.6 + 5052825.6 * griffonBankTwoFiftySixByteBank * 0.15;
        $('#btnBuyGriffonBank256ByteCrawler').html("Buy 256 Byte Griffon Bank Crawler (~2 Million Packets/sec) - $" + currentGriffonBank256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
        currentGriffonBank512BytePrice = 10105651.2 + 10105651.2 * griffonBankFiveTwelveByteBank * 0.15;
        $('#btnBuyGriffonBank512ByteCrawler').html("Buy 512 Byte Griffon Bank Crawler (~4.1 Million Packets/sec) - $" + currentGriffonBank512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
        currentGriffonBank1KBPrice = 20211302.4 + 20211302.4 * griffonBankOneKBBank * 0.15;
        $('#btnBuyGriffonBank1KBCrawler').html("Buy 1KB Griffon Bank Crawler (~8.3 Million Packets/sec) - $" + currentGriffonBank1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
        currentGriffonBank2KBPrice = 40422604.8 + 40422604.8 * griffonBankTwoKBBank * 0.15;
        $('#btnBuyGriffonBank2KBCrawler').html("Buy 2KB Griffon Bank Crawler (~16.7 Million Packets/sec) - $" + currentGriffonBank2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
        currentGriffonBank4KBPrice = 80845209.6 + 80845209.6 * griffonBankFourKBBank * 0.15;
        $('#btnBuyGriffonBank4KBCrawler').html("Buy 4KB Griffon Bank Crawler (~33.4 Million Packets/sec) - $" + currentGriffonBank4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
        currentGriffonBank8KBPrice = 161690419.2 + 161690419.2 * griffonBankEightKBBank * 0.15;
        $('#btnBuyGriffonBank8KBCrawler').html("Buy 8KB Griffon Bank Crawler (~67.1 Million Packets/sec) - $" + currentGriffonBank8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
        currentGriffonBank16KBPrice = 323380838.4 + 323380838.4 * griffonBankSixteenKBBank * 0.15;
        $('#btnBuyGriffonBank16KBCrawler').html("Buy 16KB Griffon Bank Crawler (~134.2 Million Packets/sec) - $" + currentGriffonBank16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
        currentGriffonBank32KBPrice = 646761676.8 + 646761676.8 * griffonBankThirtyTwoKBBank * 0.15;
        $('#btnBuyGriffonBank32KBCrawler').html("Buy 32KB Griffon Bank Crawler (~268.4 Million Packets/sec) - $" + currentGriffonBank32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
        currentGriffonBank64KBPrice = 1293523353.6 + 1293523353.6 * griffonBankSixtyFourKBBank * 0.15;
        $('#btnBuyGriffonBank64KBCrawler').html("Buy 64KB Griffon Bank Crawler (~536.8 Million Packets/sec) - $" + currentGriffonBank64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
        currentGriffonBank128KBPrice = 2587046707.2 + 2587046707.2 * griffonBankOneTwentyEightKBBank * 0.15;
        $('#btnBuyGriffonBank128KBCrawler').html("Buy 128KB Griffon Bank Crawler (~1.07 Billion Packets/sec) - $" + currentGriffonBank128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
        currentGriffonBank256KBPrice = 5174093414.4 + 5174093414.4 * griffonBankTwoFiftySixKBBank * 0.15;
        $('#btnBuyGriffonBank256KBCrawler').html("Buy 256KB Griffon Bank Crawler (~2.14 Billion Packets/sec) - $" + currentGriffonBank256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
        currentGriffonBank512KBPrice = 10348186828.8 + 10348186828.8 * griffonBankFiveTwelveKBBank * 0.15;
        $('#btnBuyGriffonBank512KBCrawler').html("Buy 512KB Griffon Bank Crawler (~4.29 Billion Packets/sec) - $" + currentGriffonBank512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
        currentGriffonBank1MBPrice = 20696373657.6 + 20696373657.6 * griffonBankOneMBBank * 0.15;
        $('#btnBuyGriffonBank1MBCrawler').html("Buy 1MB Griffon Bank Crawler (~8.59 Billion Packets/sec) - $" + currentGriffonBank1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
        currentGriffonBank2MBPrice = 41392747315.2 + 41392747315.2 * griffonBankTwoMBBank * 0.15;
        $('#btnBuyGriffonBank2MBCrawler').html("Buy 2MB Griffon Bank Crawler (~17.18 Billion Packets/sec) - $" + currentGriffonBank2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
        currentGriffonBank4MBPrice = 82785494630.4 + 82785494630.4 * griffonBankFourMBBank * 0.15;
        $('#btnBuyGriffonBank4MBCrawler').html("Buy 4MB Griffon Bank Crawler (~34.36 Billion Packets/sec) - $" + currentGriffonBank4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
        currentGriffonBank8MBPrice = 165570989260.8 + 165570989260.8 * griffonBankEightMBBank * 0.15;
        $('#btnBuyGriffonBank8MBCrawler').html("Buy 8MB Griffon Bank Crawler (~68.72 Billion Packets/sec) - $" + currentGriffonBank8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,684,354.56 RISK/SEC");
        currentGriffonBank16MBPrice = 331141978521.6 + 331141978521.6 * griffonBankSixteenMBBank * 0.15;
        $('#btnBuyGriffonBank16MBCrawler').html("Buy 16MB Griffon Bank Crawler (~137.44 Billion Packets/sec) - $" + currentGriffonBank16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,368,709.12 RISK/SEC");

    }
    else {
        $('#btnBuy12BitCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy16BitCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy4ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy8ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy16ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy32ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy64ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy128ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy256ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy512ByteCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy1KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy2KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy4KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy8KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy16KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy32KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy64KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy128KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy256KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy512KBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy1MBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy2MBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy4MBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy8MBCrawler').html("WIZARD CLASS REQUIRED");
        $('#btnBuy16MBCrawler').html("WIZARD CLASS REQUIRED");
    }

    //DELSEC
    if (twoBitBank > 0)
        $('#twoBitItemDisplay').html(twoBitBank + " Processes Running Through " + twoBitBank + " Packets/Sec");

    if (threeBitBank > 0)
        $('#threeBitItemDisplay').html(threeBitBank + " Processes Running Through " + threeBitBank * 8 / 4 + " Packets/Sec");

    if (fourBitBank > 0)
        $('#fourBitItemDisplay').html(fourBitBank + " Processes Running Through " + fourBitBank * 4 + " Packets/Sec");

    if (fourBitBank > 3)
        $("#email4Heading").show(1);

    if (sixBitBank > 0)
        $('#sixBitItemDisplay').html(sixBitBank + " Processes Running Through " + sixBitBank * 16 + " Packets/Sec");  

    if (eightBitBank > 0)
        $('#eightBitItemDisplay').html(eightBitBank + " Processes Running Through " + eightBitBank * 64 + " Packets/Sec");

    if (twelveBitBank > 0)
        $('#twelveBitItemDisplay').html(twelveBitBank + " Processes Running Through " + twelveBitBank * 1024 + " Packets/Sec");

    if (sixteenBitBank > 0)
        $('#sixteenBitItemDisplay').html(sixteenBitBank + " Processes Running Through " + sixteenBitBank * 16384 + " Packets/Sec");

    if (fourByteBank > 0) {
        $("#email4ByteHeading").show(1);
        email4ByteDisplayed = "true";
        $('#fourByteItemDisplay').html(fourByteBank + " Processes Running Through " + fourByteBank * 32768 + " Packets/Sec");
    }

    if (eightByteBank > 0)
        $('#eightByteItemDisplay').html(eightByteBank + " Processes Running Through " + eightByteBank * 65536 + " Packets/Sec");

    if (sixteenByteBank > 0)
        $('#sixteenByteItemDisplay').html(sixteenByteBank + " Processes Running Through " + sixteenByteBank * 131072 + " Packets/Sec");

    if (thirtytwoByteBank > 0)
        $('#thirtytwoByteItemDisplay').html(thirtytwoByteBank + " Processes Running Through " + thirtytwoByteBank * 262144 + " Packets/Sec");

    if (sixtyfourByteBank > 0)
        $('#sixtyfourByteItemDisplay').html(sixtyfourByteBank + " Processes Running Through " + sixtyfourByteBank * 524288 + " Packets/Sec");

    if (oneTwentyEightByteBank > 0)
        $('#oneTwentyEightByteItemDisplay').html(oneTwentyEightByteBank + " Processes Running Through " + oneTwentyEightByteBank * 1048576 + " Packets/Sec");

    if (twoFiftySixByteBank > 0)
        $('#twoFiftySixByteItemDisplay').html(twoFiftySixByteBank + " Processes Running Through " + twoFiftySixByteBank * 2097152 + " Packets/Sec");

    if (fiveTwelveByteBank > 0)
        $('#fiveTwelveByteItemDisplay').html(fiveTwelveByteBank + " Processes Running Through " + fiveTwelveByteBank * 4194304 + " Packets/Sec");

    if (oneKBBank > 0)
        $('#oneKBItemDisplay').html(oneKBBank + " Processes Running Through " + oneKBBank * 8388608 + " Packets/Sec");

    if (twoKBBank > 0)
        $('#twoKBItemDisplay').html(twoKBBank + " Processes Running Through " + twoKBBank * 16777216 + " Packets/Sec");

    if (fourKBBank > 0)
        $('#fourKBItemDisplay').html(fourKBBank + " Processes Running Through " + fourKBBank * 33554432 + " Packets/Sec");

    if (eightKBBank > 0)
        $('#eightKBItemDisplay').html(eightKBBank + " Processes Running Through " + eightKBBank * 67108864 + " Packets/Sec");

    if (sixteenKBBank > 0)
        $('#sixteenKBItemDisplay').html(sixteenKBBank + " Processes Running Through " + sixteenKBBank * 134217728 + " Packets/Sec");

    if (thirtyTwoKBBank > 0)
        $('#thirtyTwoKBItemDisplay').html(thirtyTwoKBBank + " Processes Running Through " + thirtyTwoKBBank * 268435456 + " Packets/Sec");

    if (sixtyFourKBBank > 0)
        $('#sixtyFourKBItemDisplay').html(sixtyFourKBBank + " Processes Running Through " + sixtyFourKBBank * 536870912 + " Packets/Sec");

    if (oneTwentyEightKBBank > 0)
        $('#oneTwentyEightKBItemDisplay').html(oneTwentyEightKBBank + " Processes Running Through " + oneTwentyEightKBBank * 1073741824 + " Packets/Sec");

    if (twoFiftySixKBBank > 0)
        $('#twoFiftySixKBItemDisplay').html(twoFiftySixKBBank + " Processes Running Through " + twoFiftySixKBBank * 2147483648 + " Packets/Sec");

    if (fiveTwelveKBBank > 0)
        $('#fiveTwelveKBItemDisplay').html(fiveTwelveKBBank + " Processes Running Through " + fiveTwelveKBBank * 4294967296 + " Packets/Sec");

    if (oneMBBank > 0)
        $('#oneMBItemDisplay').html(oneMBBank + " Processes Running Through " + oneMBBank * 8589934592 + " Packets/Sec");

    if (twoMBBank > 0)
        $('#twoMBItemDisplay').html(twoMBBank + " Processes Running Through " + twoMBBank * 17179869184 + " Packets/Sec");

    if (fourMBBank > 0)
        $('#fourMBItemDisplay').html(fourMBBank + " Processes Running Through " + fourMBBank * 34359738368 + " Packets/Sec");

    if (eightMBBank > 0)
        $('#eightMBItemDisplay').html(eightMBBank + " Processes Running Through " + eightMBBank * 68719476736 + " Packets/Sec");

    if (sixteenMBBank > 0)
        $('#sixteenMBItemDisplay').html(sixteenMBBank + " Processes Running Through " + sixteenMBBank * 137438953472 + " Packets/Sec");

    //RUSSIAN
    if (russianSixBitBank > 0) {
        $("#email3Heading").show(1);
        email3Displayed = "true";
        $('#russianSixBitItemDisplay').html(russianSixBitBank + " Processes Running Through " + russianSixBitBank * 16 + " Packets/Sec");
    }

    if (russianTwelveBitBank > 0)
        $('#russianTwelveBitItemDisplay').html(russianTwelveBitBank + " Processes Running Through " + russianTwelveBitBank * 1024 + " Packets/Sec");

    if (russianSixteenBitBank > 0)
        $('#russianSixteenBitItemDisplay').html(russianSixteenBitBank + " Processes Running Through " + russianSixteenBitBank * 16384 + " Packets/Sec");

    if (russianFourByteBank > 0)
        $('#russianFourByteItemDisplay').html(russianFourByteBank + " Processes Running Through " + russianFourByteBank * 32768 + " Packets/Sec");

    if (russianEightByteBank > 0)
        $('#russianEightByteItemDisplay').html(russianEightByteBank + " Processes Running Through " + russianEightByteBank * 65536 + " Packets/Sec");

    if (russianSixteenByteBank > 0)
        $('#russianSixteenByteItemDisplay').html(russianSixteenByteBank + " Processes Running Through " + russianSixteenByteBank * 131072 + " Packets/Sec");

    if (russianThirtyTwoByteBank > 0)
        $('#russianThirtyTwoByteItemDisplay').html(russianThirtyTwoByteBank + " Processes Running Through " + russianThirtyTwoByteBank * 262144 + " Packets/Sec");

    if (russianSixtyFourByteBank > 0)
        $('#russianSixtyFourByteItemDisplay').html(russianSixtyFourByteBank + " Processes Running Through " + russianSixtyFourByteBank * 524288 + " Packets/Sec");

    if (russianOneTwentyEightByteBank > 0)
        $('#russianOneTwentyEightByteItemDisplay').html(russianOneTwentyEightByteBank + " Processes Running Through " + russianOneTwentyEightByteBank * 1048576 + " Packets/Sec");

    if (russianTwoFiftySixByteBank > 0)
        $('#russianTwoFiftySixByteItemDisplay').html(russianTwoFiftySixByteBank + " Processes Running Through " + russianTwoFiftySixByteBank * 2097152 + " Packets/Sec");

    if (russianFiveTwelveByteBank > 0)
        $('#russianFiveTwelveByteItemDisplay').html(russianFiveTwelveByteBank + " Processes Running Through " + russianFiveTwelveByteBank * 4194304 + " Packets/Sec");

    if (russianOneKBBank > 0)
        $('#russianOneKBItemDisplay').html(russianOneKBBank + " Processes Running Through " + russianOneKBBank * 8388608 + " Packets/Sec");

    if (russianTwoKBBank > 0)
        $('#russianTwoKBItemDisplay').html(russianTwoKBBank + " Processes Running Through " + russianTwoKBBank * 16777216 + " Packets/Sec");

    if (russianFourKBBank > 0)
        $('#russianFourKBItemDisplay').html(russianFourKBBank + " Processes Running Through " + russianFourKBBank * 33554432 + " Packets/Sec");

    if (russianEightKBBank > 0)
        $('#russianEightKBItemDisplay').html(russianEightKBBank + " Processes Running Through " + russianEightKBBank * 67108864 + " Packets/Sec");

    if (russianSixteenKBBank > 0)
        $('#russianSixteenKBItemDisplay').html(russianSixteenKBBank + " Processes Running Through " + russianSixteenKBBank * 134217728 + " Packets/Sec");

    if (russianThirtyTwoKBBank > 0)
        $('#russianThirtyTwoKBItemDisplay').html(russianThirtyTwoKBBank + " Processes Running Through " + russianThirtyTwoKBBank * 268435456 + " Packets/Sec");

    if (russianSixtyFourKBBank > 0)
        $('#russianSixtyFourKBItemDisplay').html(russianSixtyFourKBBank + " Processes Running Through " + russianSixtyFourKBBank * 536870912 + " Packets/Sec");

    if (russianOneTwentyEightKBBank > 0)
        $('#russianOneTwentyEightKBItemDisplay').html(russianOneTwentyEightKBBank + " Processes Running Through " + russianOneTwentyEightKBBank * 1073741824 + " Packets/Sec");

    if (russianTwoFiftySixKBBank > 0)
        $('#russianTwoFiftySixKBItemDisplay').html(russianTwoFiftySixKBBank + " Processes Running Through " + russianTwoFiftySixKBBank * 2147483648 + " Packets/Sec");

    if (russianFiveTwelveKBBank > 0)
        $('#russianFiveTwelveKBItemDisplay').html(russianFiveTwelveKBBank + " Processes Running Through " + russianFiveTwelveKBBank * 4294967296 + " Packets/Sec");

    if (russianOneMBBank > 0)
        $('#russianOneMBItemDisplay').html(russianOneMBBank + " Processes Running Through " + russianOneMBBank * 8589934592 + " Packets/Sec");

    if (russianTwoMBBank > 0)
        $('#russianTwoMBItemDisplay').html(russianTwoMBBank + " Processes Running Through " + russianTwoMBBank * 17179869184 + " Packets/Sec");

    if (russianFourMBBank > 0)
        $('#russianFourMBItemDisplay').html(russianFourMBBank + " Processes Running Through " + russianFourMBBank * 34359738368 + " Packets/Sec");

    if (russianEightMBBank > 0)
        $('#russianEightMBItemDisplay').html(russianEightMBBank + " Processes Running Through " + russianEightMBBank * 68719476736 + " Packets/Sec");

    if (russianSixteenMBBank > 0)
        $('#russianSixteenMBItemDisplay').html(russianSixteenMBBank + " Processes Running Through " + russianSixteenMBBank * 137438953472 + " Packets/Sec");

    //VIPER
    if (vipersecOneByteBank > 0)
        $('#vipersecOneByteItemDisplay').html(vipersecOneByteBank + " Processes Running Through " + vipersecOneByteBank * 8192 + " Packets/Sec");

    if (vipersecTwoByteBank > 0)
        $('#vipersecTwoByteItemDisplay').html(vipersecTwoByteBank + " Processes Running Through " + vipersecTwoByteBank * 16384 + " Packets/Sec");

    if (vipersecFourByteBank > 0)
        $('#vipersecFourByteItemDisplay').html(vipersecFourByteBank + " Processes Running Through " + vipersecFourByteBank * 32768 + " Packets/Sec");

    if (vipersecEightByteBank > 0)
        $('#vipersecEightByteItemDisplay').html(vipersecEightByteBank + " Processes Running Through " + vipersecEightByteBank * 65536 + " Packets/Sec");

    if (vipersecSixteenByteBank > 0)
        $('#vipersecSixteenByteItemDisplay').html(vipersecSixteenByteBank + " Processes Running Through " + vipersecSixteenByteBank * 131072 + " Packets/Sec");

    if (vipersecThirtyTwoByteBank > 0)
        $('#vipersecThirtyTwoByteItemDisplay').html(vipersecThirtyTwoByteBank + " Processes Running Through " + vipersecThirtyTwoByteBank * 262144 + " Packets/Sec");

    if (vipersecSixtyFourByteBank > 0)
        $('#vipersecSixtyFourByteItemDisplay').html(vipersecSixtyFourByteBank + " Processes Running Through " + vipersecSixtyFourByteBank * 524288 + " Packets/Sec");

    if (vipersecOneTwentyEightByteBank > 0)
        $('#vipersecOneTwentyEightByteItemDisplay').html(vipersecOneTwentyEightByteBank + " Processes Running Through " + vipersecOneTwentyEightByteBank * 1048576 + " Packets/Sec");

    if (vipersecTwoFiftySixByteBank > 0)
        $('#vipersecTwoFiftySixByteItemDisplay').html(vipersecTwoFiftySixByteBank + " Processes Running Through " + vipersecTwoFiftySixByteBank * 2097152 + " Packets/Sec");

    if (vipersecFiveTwelveByteBank > 0)
        $('#vipersecFiveTwelveByteItemDisplay').html(vipersecFiveTwelveByteBank + " Processes Running Through " + vipersecFiveTwelveByteBank * 4194304 + " Packets/Sec");

    if (vipersecOneKBBank > 0)
        $('#vipersecOneKBItemDisplay').html(vipersecOneKBBank + " Processes Running Through " + vipersecOneKBBank * 8388608 + " Packets/Sec");

    if (vipersecTwoKBBank > 0)
        $('#vipersecTwoKBItemDisplay').html(vipersecTwoKBBank + " Processes Running Through " + vipersecTwoKBBank * 16777216 + " Packets/Sec");

    if (vipersecFourKBBank > 0)
        $('#vipersecFourKBItemDisplay').html(vipersecFourKBBank + " Processes Running Through " + vipersecFourKBBank * 33554432 + " Packets/Sec");

    if (vipersecEightKBBank > 0)
        $('#vipersecEightKBItemDisplay').html(vipersecEightKBBank + " Processes Running Through " + vipersecEightKBBank * 67108864 + " Packets/Sec");

    if (vipersecSixteenKBBank > 0)
        $('#vipersecSixteenKBItemDisplay').html(vipersecSixteenKBBank + " Processes Running Through " + vipersecSixteenKBBank * 134217728 + " Packets/Sec");

    if (vipersecThirtyTwoKBBank > 0)
        $('#vipersecThirtyTwoKBItemDisplay').html(vipersecThirtyTwoKBBank + " Processes Running Through " + vipersecThirtyTwoKBBank * 268435456 + " Packets/Sec");

    if (vipersecSixtyFourKBBank > 0)
        $('#vipersecSixtyFourKBItemDisplay').html(vipersecSixtyFourKBBank + " Processes Running Through " + vipersecSixtyFourKBBank * 536870912 + " Packets/Sec");

    if (vipersecOneTwentyEightKBBank > 0)
        $('#vipersecOneTwentyEightKBItemDisplay').html(vipersecOneTwentyEightKBBank + " Processes Running Through " + vipersecOneTwentyEightKBBank * 1073741824 + " Packets/Sec");

    if (vipersecTwoFiftySixKBBank > 0)
        $('#vipersecTwoFiftySixKBItemDisplay').html(vipersecTwoFiftySixKBBank + " Processes Running Through " + vipersecTwoFiftySixKBBank * 2147483648 + " Packets/Sec");

    if (vipersecFiveTwelveKBBank > 0)
        $('#vipersecFiveTwelveKBItemDisplay').html(vipersecFiveTwelveKBBank + " Processes Running Through " + vipersecFiveTwelveKBBank * 4294967296 + " Packets/Sec");

    if (vipersecOneMBBank > 0)
        $('#vipersecOneMBItemDisplay').html(vipersecOneMBBank + " Processes Running Through " + vipersecOneMBBank * 8589934592 + " Packets/Sec");

    if (vipersecTwoMBBank > 0)
        $('#vipersecTwoMBItemDisplay').html(vipersecTwoMBBank + " Processes Running Through " + vipersecTwoMBBank * 17179869184 + " Packets/Sec");

    if (vipersecFourMBBank > 0)
        $('#vipersecFourMBItemDisplay').html(vipersecFourMBBank + " Processes Running Through " + vipersecFourMBBank * 34359738368 + " Packets/Sec");

    if (vipersecEightMBBank > 0)
        $('#vipersecEightMBItemDisplay').html(vipersecEightMBBank + " Processes Running Through " + vipersecEightMBBank * 68719476736 + " Packets/Sec");

    if (vipersecSixteenMBBank > 0)
        $('#vipersecSixteenMBItemDisplay').html(vipersecSixteenMBBank + " Processes Running Through " + vipersecSixteenMBBank * 137438953472 + " Packets/Sec");

    //CHIMERA
    if (chimerasecOneByteBank > 0)
        $('#chimerasecOneByteItemDisplay').html(chimerasecOneByteBank + " Processes Running Through " + chimerasecOneByteBank * 8192 + " Packets/Sec");

    if (chimerasecTwoByteBank > 0)
        $('#chimerasecTwoByteItemDisplay').html(chimerasecTwoByteBank + " Processes Running Through " + chimerasecTwoByteBank * 16384 + " Packets/Sec");

    if (chimerasecFourByteBank > 0)
        $('#chimerasecFourByteItemDisplay').html(chimerasecFourByteBank + " Processes Running Through " + chimerasecFourByteBank * 32768 + " Packets/Sec");

    if (chimerasecEightByteBank > 0)
        $('#chimerasecEightByteItemDisplay').html(chimerasecEightByteBank + " Processes Running Through " + chimerasecEightByteBank * 65536 + " Packets/Sec");

    if (chimerasecSixteenByteBank > 0)
        $('#chimerasecSixteenByteItemDisplay').html(chimerasecSixteenByteBank + " Processes Running Through " + chimerasecSixteenByteBank * 131072 + " Packets/Sec");

    if (chimerasecThirtyTwoByteBank > 0)
        $('#chimerasecThirtyTwoByteItemDisplay').html(chimerasecThirtyTwoByteBank + " Processes Running Through " + chimerasecThirtyTwoByteBank * 262144 + " Packets/Sec");

    if (chimerasecSixtyFourByteBank > 0)
        $('#chimerasecSixtyFourByteItemDisplay').html(chimerasecSixtyFourByteBank + " Processes Running Through " + chimerasecSixtyFourByteBank * 524288 + " Packets/Sec");

    if (chimerasecOneTwentyEightByteBank > 0)
        $('#chimerasecOneTwentyEightByteItemDisplay').html(chimerasecOneTwentyEightByteBank + " Processes Running Through " + chimerasecOneTwentyEightByteBank * 1048576 + " Packets/Sec");

    if (chimerasecTwoFiftySixByteBank > 0)
        $('#chimerasecTwoFiftySixByteItemDisplay').html(chimerasecTwoFiftySixByteBank + " Processes Running Through " + chimerasecTwoFiftySixByteBank * 2097152 + " Packets/Sec");

    if (chimerasecFiveTwelveByteBank > 0)
        $('#chimerasecFiveTwelveByteItemDisplay').html(chimerasecFiveTwelveByteBank + " Processes Running Through " + chimerasecFiveTwelveByteBank * 4194304 + " Packets/Sec");

    if (chimerasecOneKBBank > 0)
        $('#chimerasecOneKBItemDisplay').html(chimerasecOneKBBank + " Processes Running Through " + chimerasecOneKBBank * 8388608 + " Packets/Sec");

    if (chimerasecTwoKBBank > 0)
        $('#chimerasecTwoKBItemDisplay').html(chimerasecTwoKBBank + " Processes Running Through " + chimerasecTwoKBBank * 16777216 + " Packets/Sec");

    if (chimerasecFourKBBank > 0)
        $('#chimerasecFourKBItemDisplay').html(chimerasecFourKBBank + " Processes Running Through " + chimerasecFourKBBank * 33554432 + " Packets/Sec");

    if (chimerasecEightKBBank > 0)
        $('#chimerasecEightKBItemDisplay').html(chimerasecEightKBBank + " Processes Running Through " + chimerasecEightKBBank * 67108864 + " Packets/Sec");

    if (chimerasecSixteenKBBank > 0)
        $('#chimerasecSixteenKBItemDisplay').html(chimerasecSixteenKBBank + " Processes Running Through " + chimerasecSixteenKBBank * 134217728 + " Packets/Sec");

    if (chimerasecThirtyTwoKBBank > 0)
        $('#chimerasecThirtyTwoKBItemDisplay').html(chimerasecThirtyTwoKBBank + " Processes Running Through " + chimerasecThirtyTwoKBBank * 268435456 + " Packets/Sec");

    if (chimerasecSixtyFourKBBank > 0)
        $('#chimerasecSixtyFourKBItemDisplay').html(chimerasecSixtyFourKBBank + " Processes Running Through " + chimerasecSixtyFourKBBank * 536870912 + " Packets/Sec");

    if (chimerasecOneTwentyEightKBBank > 0)
        $('#chimerasecOneTwentyEightKBItemDisplay').html(chimerasecOneTwentyEightKBBank + " Processes Running Through " + chimerasecOneTwentyEightKBBank * 1073741824 + " Packets/Sec");

    if (chimerasecTwoFiftySixKBBank > 0)
        $('#chimerasecTwoFiftySixKBItemDisplay').html(chimerasecTwoFiftySixKBBank + " Processes Running Through " + chimerasecTwoFiftySixKBBank * 2147483648 + " Packets/Sec");

    if (chimerasecFiveTwelveKBBank > 0)
        $('#chimerasecFiveTwelveKBItemDisplay').html(chimerasecFiveTwelveKBBank + " Processes Running Through " + chimerasecFiveTwelveKBBank * 4294967296 + " Packets/Sec");

    if (chimerasecOneMBBank > 0)
        $('#chimerasecOneMBItemDisplay').html(chimerasecOneMBBank + " Processes Running Through " + chimerasecOneMBBank * 8589934592 + " Packets/Sec");

    if (chimerasecTwoMBBank > 0)
        $('#chimerasecTwoMBItemDisplay').html(chimerasecTwoMBBank + " Processes Running Through " + chimerasecTwoMBBank * 17179869184 + " Packets/Sec");

    if (chimerasecFourMBBank > 0)
        $('#chimerasecFourMBItemDisplay').html(chimerasecFourMBBank + " Processes Running Through " + chimerasecFourMBBank * 34359738368 + " Packets/Sec");

    if (chimerasecEightMBBank > 0)
        $('#chimerasecEightMBItemDisplay').html(chimerasecEightMBBank + " Processes Running Through " + chimerasecEightMBBank * 68719476736 + " Packets/Sec");

    if (chimerasecSixteenMBBank > 0)
        $('#chimerasecSixteenMBItemDisplay').html(chimerasecSixteenMBBank + " Processes Running Through " + chimerasecSixteenMBBank * 137438953472 + " Packets/Sec");

    //GRIFFON
    if (griffonBankOneByteBank > 0)
        $('#griffonBankOneByteItemDisplay').html(griffonBankOneByteBank + " Processes Running Through " + griffonBankOneByteBank * 8192 + " Packets/Sec");

    if (griffonBankTwoByteBank > 0)
        $('#griffonBankTwoByteItemDisplay').html(griffonBankTwoByteBank + " Processes Running Through " + griffonBankTwoByteBank * 16384 + " Packets/Sec");

    if (griffonBankFourByteBank > 0)
        $('#griffonBankFourByteItemDisplay').html(griffonBankFourByteBank + " Processes Running Through " + griffonBankFourByteBank * 32768 + " Packets/Sec");

    if (griffonBankEightByteBank > 0)
        $('#griffonBankEightByteItemDisplay').html(griffonBankEightByteBank + " Processes Running Through " + griffonBankEightByteBank * 65536 + " Packets/Sec");

    if (griffonBankSixteenByteBank > 0)
        $('#griffonBankSixteenByteItemDisplay').html(griffonBankSixteenByteBank + " Processes Running Through " + griffonBankSixteenByteBank * 131072 + " Packets/Sec");

    if (griffonBankThirtyTwoByteBank > 0)
        $('#griffonBankThirtyTwoByteItemDisplay').html(griffonBankThirtyTwoByteBank + " Processes Running Through " + griffonBankThirtyTwoByteBank * 262144 + " Packets/Sec");

    if (griffonBankSixtyFourByteBank > 0)
        $('#griffonBankSixtyFourByteItemDisplay').html(griffonBankSixtyFourByteBank + " Processes Running Through " + griffonBankSixtyFourByteBank * 524288 + " Packets/Sec");

    if (griffonBankOneTwentyEightByteBank > 0)
        $('#griffonBankOneTwentyEightByteItemDisplay').html(griffonBankOneTwentyEightByteBank + " Processes Running Through " + griffonBankOneTwentyEightByteBank * 1048576 + " Packets/Sec");

    if (griffonBankTwoFiftySixByteBank > 0)
        $('#griffonBankTwoFiftySixByteItemDisplay').html(griffonBankTwoFiftySixByteBank + " Processes Running Through " + griffonBankTwoFiftySixByteBank * 2097152 + " Packets/Sec");

    if (griffonBankFiveTwelveByteBank > 0)
        $('#griffonBankFiveTwelveByteItemDisplay').html(griffonBankFiveTwelveByteBank + " Processes Running Through " + griffonBankFiveTwelveByteBank * 4194304 + " Packets/Sec");

    if (griffonBankOneKBBank > 0)
        $('#griffonBankOneKBItemDisplay').html(griffonBankOneKBBank + " Processes Running Through " + griffonBankOneKBBank * 8388608 + " Packets/Sec");

    if (griffonBankTwoKBBank > 0)
        $('#griffonBankTwoKBItemDisplay').html(griffonBankTwoKBBank + " Processes Running Through " + griffonBankTwoKBBank * 16777216 + " Packets/Sec");

    if (griffonBankFourKBBank > 0)
        $('#griffonBankFourKBItemDisplay').html(griffonBankFourKBBank + " Processes Running Through " + griffonBankFourKBBank * 33554432 + " Packets/Sec");

    if (griffonBankEightKBBank > 0)
        $('#griffonBankEightKBItemDisplay').html(griffonBankEightKBBank + " Processes Running Through " + griffonBankEightKBBank * 67108864 + " Packets/Sec");

    if (griffonBankSixteenKBBank > 0)
        $('#griffonBankSixteenKBItemDisplay').html(griffonBankSixteenKBBank + " Processes Running Through " + griffonBankSixteenKBBank * 134217728 + " Packets/Sec");

    if (griffonBankThirtyTwoKBBank > 0)
        $('#griffonBankThirtyTwoKBItemDisplay').html(griffonBankThirtyTwoKBBank + " Processes Running Through " + griffonBankThirtyTwoKBBank * 268435456 + " Packets/Sec");

    if (griffonBankSixtyFourKBBank > 0)
        $('#griffonBankSixtyFourKBItemDisplay').html(griffonBankSixtyFourKBBank + " Processes Running Through " + griffonBankSixtyFourKBBank * 536870912 + " Packets/Sec");

    if (griffonBankOneTwentyEightKBBank > 0)
        $('#griffonBankOneTwentyEightKBItemDisplay').html(griffonBankOneTwentyEightKBBank + " Processes Running Through " + griffonBankOneTwentyEightKBBank * 1073741824 + " Packets/Sec");

    if (griffonBankTwoFiftySixKBBank > 0)
        $('#griffonBankTwoFiftySixKBItemDisplay').html(griffonBankTwoFiftySixKBBank + " Processes Running Through " + griffonBankTwoFiftySixKBBank * 2147483648 + " Packets/Sec");

    if (griffonBankFiveTwelveKBBank > 0)
        $('#griffonBankFiveTwelveKBItemDisplay').html(griffonBankFiveTwelveKBBank + " Processes Running Through " + griffonBankFiveTwelveKBBank * 4294967296 + " Packets/Sec");

    if (griffonBankOneMBBank > 0)
        $('#griffonBankOneMBItemDisplay').html(griffonBankOneMBBank + " Processes Running Through " + griffonBankOneMBBank * 8589934592 + " Packets/Sec");

    if (griffonBankTwoMBBank > 0)
        $('#griffonBankTwoMBItemDisplay').html(griffonBankTwoMBBank + " Processes Running Through " + griffonBankTwoMBBank * 17179869184 + " Packets/Sec");

    if (griffonBankFourMBBank > 0)
        $('#griffonBankFourMBItemDisplay').html(griffonBankFourMBBank + " Processes Running Through " + griffonBankFourMBBank * 34359738368 + " Packets/Sec");

    if (griffonBankEightMBBank > 0)
        $('#griffonBankEightMBItemDisplay').html(griffonBankEightMBBank + " Processes Running Through " + griffonBankEightMBBank * 68719476736 + " Packets/Sec");

    if (griffonBankSixteenMBBank > 0)
        $('#griffonBankSixteenMBItemDisplay').html(griffonBankSixteenMBBank + " Processes Running Through " + griffonBankSixteenMBBank * 137438953472 + " Packets/Sec");

});