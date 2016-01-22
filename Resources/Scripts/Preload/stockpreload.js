$(document).ready(function () {
    if (localStorage.getItem("delsecCurrentStockPrice") === null)
        localStorage.setItem("delsecCurrentStockPrice", delsecCurrentStockPrice);
    if (localStorage.getItem("ownedDelsecStocks") === null)
        localStorage.setItem("ownedDelsecStocks", ownedDelsecStocks);
    if (localStorage.getItem("delsecSpentAmt") === null)
        localStorage.setItem("delsecSpentAmt", delsecSpentAmt);

    if (localStorage.getItem("entaqCurrentStockPrice") === null)
        localStorage.setItem("entaqCurrentStockPrice", entaqCurrentStockPrice);
    if (localStorage.getItem("ownedEntaqStocks") === null)
        localStorage.setItem("ownedEntaqStocks", ownedEntaqStocks);
    if (localStorage.getItem("entaqSpentAmt") === null)
        localStorage.setItem("entaqSpentAmt", entaqSpentAmt);

    if (localStorage.getItem("ventexCurrentStockPrice") === null)
        localStorage.setItem("ventexCurrentStockPrice", ventexCurrentStockPrice);
    if (localStorage.getItem("ownedVentexStocks") === null)
        localStorage.setItem("ownedVentexStocks", ownedVentexStocks);
    if (localStorage.getItem("ventexSpentAmt") === null)
        localStorage.setItem("ventexSpentAmt", ventexSpentAmt);

    if (localStorage.getItem("astorCurrentStockPrice") === null)
        localStorage.setItem("astorCurrentStockPrice", astorCurrentStockPrice);
    if (localStorage.getItem("ownedAstorStocks") === null)
        localStorage.setItem("ownedAstorStocks", ownedAstorStocks);
    if (localStorage.getItem("astorSpentAmt") === null)
        localStorage.setItem("astorSpentAmt", astorSpentAmt);

    if (localStorage.getItem("popbotCurrentStockPrice") === null)
        localStorage.setItem("popbotCurrentStockPrice", popbotCurrentStockPrice);
    if (localStorage.getItem("ownedPopbotStocks") === null)
        localStorage.setItem("ownedPopbotStocks", ownedPopbotStocks);
    if (localStorage.getItem("popbotSpentAmt") === null)
        localStorage.setItem("popbotSpentAmt", popbotSpentAmt);

    if (localStorage.getItem("pannamCurrentStockPrice") === null)
        localStorage.setItem("pannamCurrentStockPrice", pannamCurrentStockPrice);
    if (localStorage.getItem("ownedPannamStocks") === null)
        localStorage.setItem("ownedPannamStocks", ownedPannamStocks);
    if (localStorage.getItem("pannamSpentAmt") === null)
        localStorage.setItem("pannamSpentAmt", pannamSpentAmt);

    if (localStorage.getItem("TRITCurrentStockPrice") === null)
        localStorage.setItem("TRITCurrentStockPrice", TRITCurrentStockPrice);
    if (localStorage.getItem("ownedTRITStocks") === null)
        localStorage.setItem("ownedTRITStocks", ownedTRITStocks);
    if (localStorage.getItem("TRITSpentAmt") === null)
        localStorage.setItem("TRITSpentAmt", TRITSpentAmt);

    if (localStorage.getItem("CANVCurrentStockPrice") === null)
        localStorage.setItem("CANVCurrentStockPrice", CANVCurrentStockPrice);
    if (localStorage.getItem("ownedCANVStocks") === null)
        localStorage.setItem("ownedCANVStocks", ownedCANVStocks);
    if (localStorage.getItem("CANVSpentAmt") === null)
        localStorage.setItem("CANVSpentAmt", CANVSpentAmt);

    if (localStorage.getItem("OSMCurrentStockPrice") === null)
        localStorage.setItem("OSMCurrentStockPrice", OSMCurrentStockPrice);
    if (localStorage.getItem("ownedOSMStocks") === null)
        localStorage.setItem("ownedOSMStocks", ownedOSMStocks);
    if (localStorage.getItem("OSMSpentAmt") === null)
        localStorage.setItem("OSMSpentAmt", OSMSpentAmt);

    if (localStorage.getItem("PALLADCurrentStockPrice") === null)
        localStorage.setItem("PALLADCurrentStockPrice", PALLADCurrentStockPrice);
    if (localStorage.getItem("ownedPALLADStocks") === null)
        localStorage.setItem("ownedPALLADStocks", ownedPALLADStocks);
    if (localStorage.getItem("PALLADSpentAmt") === null)
        localStorage.setItem("PALLADSpentAmt", PALLADSpentAmt);

    if (localStorage.getItem("KELVCurrentStockPrice") === null)
        localStorage.setItem("KELVCurrentStockPrice", KELVCurrentStockPrice);
    if (localStorage.getItem("ownedKELVStocks") === null)
        localStorage.setItem("ownedKELVStocks", ownedKELVStocks);
    if (localStorage.getItem("KELVSpentAmt") === null)
        localStorage.setItem("KELVSpentAmt", KELVSpentAmt);

    if (localStorage.getItem("stuccorCurrentStockPrice") === null)
        localStorage.setItem("stuccorCurrentStockPrice", stuccorCurrentStockPrice);
    if (localStorage.getItem("ownedStuccorStocks") === null)
        localStorage.setItem("ownedStuccorStocks", ownedStuccorStocks);
    if (localStorage.getItem("stuccorSpentAmt") === null)
        localStorage.setItem("stuccorSpentAmt", stuccorSpentAmt);

    if (localStorage.getItem("FECurrentStockPrice") === null)
        localStorage.setItem("FECurrentStockPrice", FECurrentStockPrice);
    if (localStorage.getItem("ownedFEStocks") === null)
        localStorage.setItem("ownedFEStocks", ownedFEStocks);
    if (localStorage.getItem("FESpentAmt") === null)
        localStorage.setItem("FESpentAmt", FESpentAmt);

    if (localStorage.getItem("delcredCurrentStockPrice") === null)
        localStorage.setItem("delcredCurrentStockPrice", delcredCurrentStockPrice);
    if (localStorage.getItem("ownedDelcredStocks") === null)
        localStorage.setItem("ownedDelcredStocks", ownedDelcredStocks);
    if (localStorage.getItem("delcredSpentAmt") === null)
        localStorage.setItem("delcredSpentAmt", delcredSpentAmt);

    if (localStorage.getItem("rustecCurrentStockPrice") === null)
        localStorage.setItem("rustecCurrentStockPrice", rustecCurrentStockPrice);
    if (localStorage.getItem("ownedRustecStocks") === null)
        localStorage.setItem("ownedRustecStocks", ownedRustecStocks);
    if (localStorage.getItem("rustecSpentAmt") === null)
        localStorage.setItem("rustecSpentAmt", rustecSpentAmt);

    if (localStorage.getItem("exxocredCurrentStockPrice") === null)
        localStorage.setItem("exxocredCurrentStockPrice", exxocredCurrentStockPrice);
    if (localStorage.getItem("ownedExxocredStocks") === null)
        localStorage.setItem("ownedExxocredStocks", ownedExxocredStocks);
    if (localStorage.getItem("exxocredSpentAmt") === null)
        localStorage.setItem("exxocredSpentAmt", exxocredSpentAmt);

    if (localStorage.getItem("AUCurrentStockPrice") === null)
        localStorage.setItem("AUCurrentStockPrice", AUCurrentStockPrice);
    if (localStorage.getItem("ownedAUStocks") === null)
        localStorage.setItem("ownedAUStocks", ownedAUStocks);
    if (localStorage.getItem("AUSpentAmt") === null)
        localStorage.setItem("AUSpentAmt", AUSpentAmt);

    if (localStorage.getItem("aceholdCurrentStockPrice") === null)
        localStorage.setItem("aceholdCurrentStockPrice", aceholdCurrentStockPrice);
    if (localStorage.getItem("ownedAceholdStocks") === null)
        localStorage.setItem("ownedAceholdStocks", ownedAceholdStocks);
    if (localStorage.getItem("aceholdSpentAmt") === null)
        localStorage.setItem("aceholdSpentAmt", aceholdSpentAmt);

    if (localStorage.getItem("delholdCurrentStockPrice") === null)
        localStorage.setItem("delholdCurrentStockPrice", delholdCurrentStockPrice);
    if (localStorage.getItem("ownedDelholdStocks") === null)
        localStorage.setItem("ownedDelholdStocks", ownedDelholdStocks);
    if (localStorage.getItem("delholdSpentAmt") === null)
        localStorage.setItem("delholdSpentAmt", delholdSpentAmt);

    if (localStorage.getItem("DIAMCurrentStockPrice") === null)
        localStorage.setItem("DIAMCurrentStockPrice", DIAMCurrentStockPrice);
    if (localStorage.getItem("ownedDIAMStocks") === null)
        localStorage.setItem("ownedDIAMStocks", ownedDIAMStocks);
    if (localStorage.getItem("DIAMSpentAmt") === null)
        localStorage.setItem("DIAMSpentAmt", DIAMSpentAmt);

    if (localStorage.getItem("pentaccCurrentStockPrice") === null)
        localStorage.setItem("pentaccCurrentStockPrice", pentaccCurrentStockPrice);
    if (localStorage.getItem("ownedPentaccStocks") === null)
        localStorage.setItem("ownedPentaccStocks", ownedPentaccStocks);
    if (localStorage.getItem("pentaccSpentAmt") === null)
        localStorage.setItem("pentaccSpentAmt", pentaccSpentAmt);

    if (localStorage.getItem("noodleCurrentStockPrice") === null)
        localStorage.setItem("noodleCurrentStockPrice", noodleCurrentStockPrice);
    if (localStorage.getItem("ownedNoodleStocks") === null)
        localStorage.setItem("ownedNoodleStocks", ownedNoodleStocks);
    if (localStorage.getItem("noodleSpentAmt") === null)
        localStorage.setItem("noodleSpentAmt", noodleSpentAmt);

    if (localStorage.getItem("megahardCurrentStockPrice") === null)
        localStorage.setItem("megahardCurrentStockPrice", megahardCurrentStockPrice);
    if (localStorage.getItem("ownedMegahardStocks") === null)
        localStorage.setItem("ownedMegahardStocks", ownedMegahardStocks);
    if (localStorage.getItem("megahardSpentAmt") === null)
        localStorage.setItem("megahardSpentAmt", megahardSpentAmt);

    if (localStorage.getItem("chimerasecCurrentStockPrice") === null)
        localStorage.setItem("chimerasecCurrentStockPrice", chimerasecCurrentStockPrice);
    if (localStorage.getItem("ownedChimerasecStocks") === null)
        localStorage.setItem("ownedChimerasecStocks", ownedChimerasecStocks);
    if (localStorage.getItem("chimerasecSpentAmt") === null)
        localStorage.setItem("chimerasecSpentAmt", chimerasecSpentAmt);

    if (localStorage.getItem("chimeraholdCurrentStockPrice") === null)
        localStorage.setItem("chimeraholdCurrentStockPrice", chimeraholdCurrentStockPrice);
    if (localStorage.getItem("ownedChimeraholdStocks") === null)
        localStorage.setItem("ownedChimeraholdStocks", ownedChimeraholdStocks);
    if (localStorage.getItem("chimeraholdSpentAmt") === null)
        localStorage.setItem("chimeraholdSpentAmt", chimeraholdSpentAmt);

    if (localStorage.getItem("griffonbankCurrentStockPrice") === null)
        localStorage.setItem("griffonbankCurrentStockPrice", griffonbankCurrentStockPrice);
    if (localStorage.getItem("ownedGriffonbankStocks") === null)
        localStorage.setItem("ownedGriffonbankStocks", ownedGriffonbankStocks);
    if (localStorage.getItem("griffonbankSpentAmt") === null)
        localStorage.setItem("griffonbankSpentAmt", griffonbankSpentAmt);

    if (localStorage.getItem("turborusCurrentStockPrice") === null)
        localStorage.setItem("turborusCurrentStockPrice", turborusCurrentStockPrice);
    if (localStorage.getItem("ownedTurborusStocks") === null)
        localStorage.setItem("ownedTurborusStocks", ownedTurborusStocks);
    if (localStorage.getItem("turborusSpentAmt") === null)
        localStorage.setItem("turborusSpentAmt", turborusSpentAmt);

    if (localStorage.getItem("exodmptCurrentStockPrice") === null)
        localStorage.setItem("exodmptCurrentStockPrice", exodmptCurrentStockPrice);
    if (localStorage.getItem("ownedExodmptStocks") === null)
        localStorage.setItem("ownedExodmptStocks", ownedExodmptStocks);
    if (localStorage.getItem("exodmptSpentAmt") === null)
        localStorage.setItem("exodmptSpentAmt", exodmptSpentAmt);

    if (localStorage.getItem("ramnetCurrentStockPrice") === null)
        localStorage.setItem("ramnetCurrentStockPrice", ramnetCurrentStockPrice);
    if (localStorage.getItem("ownedRamnetStocks") === null)
        localStorage.setItem("ownedRamnetStocks", ownedRamnetStocks);
    if (localStorage.getItem("ramnetSpentAmt") === null)
        localStorage.setItem("ramnetSpentAmt", ramnetSpentAmt);

    if (localStorage.getItem("alphacenCurrentStockPrice") === null)
        localStorage.setItem("alphacenCurrentStockPrice", alphacenCurrentStockPrice);
    if (localStorage.getItem("ownedAlphacenStocks") === null)
        localStorage.setItem("ownedAlphacenStocks", ownedAlphacenStocks);
    if (localStorage.getItem("alphacenSpentAmt") === null)
        localStorage.setItem("alphacenSpentAmt", alphacenSpentAmt);

    if (localStorage.getItem("scatterCurrentStockPrice") === null)
        localStorage.setItem("scatterCurrentStockPrice", scatterCurrentStockPrice);
    if (localStorage.getItem("ownedScatterStocks") === null)
        localStorage.setItem("ownedScatterStocks", ownedScatterStocks);
    if (localStorage.getItem("scatterSpentAmt") === null)
        localStorage.setItem("scatterSpentAmt", scatterSpentAmt);

    if (localStorage.getItem("kalzexCurrentStockPrice") === null)
        localStorage.setItem("kalzexCurrentStockPrice", kalzexCurrentStockPrice);
    if (localStorage.getItem("ownedKalzexStocks") === null)
        localStorage.setItem("ownedKalzexStocks", ownedKalzexStocks);
    if (localStorage.getItem("kalzexSpentAmt") === null)
        localStorage.setItem("kalzexSpentAmt", kalzexSpentAmt);

    if (localStorage.getItem("sonicosCurrentStockPrice") === null)
        localStorage.setItem("sonicosCurrentStockPrice", sonicosCurrentStockPrice);
    if (localStorage.getItem("ownedSonicosStocks") === null)
        localStorage.setItem("ownedSonicosStocks", ownedSonicosStocks);
    if (localStorage.getItem("sonicosSpentAmt") === null)
        localStorage.setItem("sonicosSpentAmt", sonicosSpentAmt);

    if (localStorage.getItem("trancextCurrentStockPrice") === null)
        localStorage.setItem("trancextCurrentStockPrice", trancextCurrentStockPrice);
    if (localStorage.getItem("ownedTrancextStocks") === null)
        localStorage.setItem("ownedTrancextStocks", ownedTrancextStocks);
    if (localStorage.getItem("trancextSpentAmt") === null)
        localStorage.setItem("trancextSpentAmt", trancextSpentAmt);

    if (localStorage.getItem("stklrCurrentStockPrice") === null)
        localStorage.setItem("stklrCurrentStockPrice", stklrCurrentStockPrice);
    if (localStorage.getItem("ownedStklrStocks") === null)
        localStorage.setItem("ownedStklrStocks", ownedStklrStocks);
    if (localStorage.getItem("stklrSpentAmt") === null)
        localStorage.setItem("stklrSpentAmt", stklrSpentAmt);

    if (localStorage.getItem("vipersecCurrentStockPrice") === null)
        localStorage.setItem("vipersecCurrentStockPrice", vipersecCurrentStockPrice);
    if (localStorage.getItem("ownedVipersecStocks") === null)
        localStorage.setItem("ownedVipersecStocks", ownedVipersecStocks);
    if (localStorage.getItem("vipersecSpentAmt") === null)
        localStorage.setItem("vipersecSpentAmt", vipersecSpentAmt);

    if (localStorage.getItem("PLATCurrentStockPrice") === null)
        localStorage.setItem("PLATCurrentStockPrice", PLATCurrentStockPrice);
    if (localStorage.getItem("ownedPLATStocks") === null)
        localStorage.setItem("ownedPLATStocks", ownedPLATStocks);
    if (localStorage.getItem("PLATSpentAmt") === null)
        localStorage.setItem("PLATSpentAmt", PLATSpentAmt);

    if (localStorage.getItem("infoneCurrentStockPrice") === null)
        localStorage.setItem("infoneCurrentStockPrice", infoneCurrentStockPrice);
    if (localStorage.getItem("ownedInfoneStocks") === null)
        localStorage.setItem("ownedInfoneStocks", ownedInfoneStocks);
    if (localStorage.getItem("infoneSpentAmt") === null)
        localStorage.setItem("infoneSpentAmt", infoneSpentAmt);

    if (localStorage.getItem("extankCurrentStockPrice") === null)
        localStorage.setItem("extankCurrentStockPrice", extankCurrentStockPrice);
    if (localStorage.getItem("ownedExtankStocks") === null)
        localStorage.setItem("ownedExtankStocks", ownedExtankStocks);
    if (localStorage.getItem("extankSpentAmt") === null)
        localStorage.setItem("extankSpentAmt", extankSpentAmt);

    if (localStorage.getItem("reinaccCurrentStockPrice") === null)
        localStorage.setItem("reinaccCurrentStockPrice", reinaccCurrentStockPrice);
    if (localStorage.getItem("ownedReinaccStocks") === null)
        localStorage.setItem("ownedReinaccStocks", ownedReinaccStocks);
    if (localStorage.getItem("reinaccSpentAmt") === null)
        localStorage.setItem("reinaccSpentAmt", reinaccSpentAmt);

    delsecCurrentStockPrice = parseFloat(localStorage.getItem("delsecCurrentStockPrice"));
    entaqCurrentStockPrice = parseFloat(localStorage.getItem("entaqCurrentStockPrice"));
    ventexCurrentStockPrice = parseFloat(localStorage.getItem("ventexCurrentStockPrice"));
    astorCurrentStockPrice = parseFloat(localStorage.getItem("astorCurrentStockPrice"));
    popbotCurrentStockPrice = parseFloat(localStorage.getItem("popbotCurrentStockPrice"));
    pannamCurrentStockPrice = parseFloat(localStorage.getItem("pannamCurrentStockPrice"));
    TRITCurrentStockPrice = parseFloat(localStorage.getItem("TRITCurrentStockPrice"));
    CANVCurrentStockPrice = parseFloat(localStorage.getItem("CANVCurrentStockPrice"));
    OSMCurrentStockPrice = parseFloat(localStorage.getItem("OSMCurrentStockPrice"));
    PALLADCurrentStockPrice = parseFloat(localStorage.getItem("PALLADCurrentStockPrice"));
    KELVCurrentStockPrice = parseFloat(localStorage.getItem("KELVCurrentStockPrice"));
    stuccorCurrentStockPrice = parseFloat(localStorage.getItem("stuccorCurrentStockPrice"));
    FECurrentStockPrice = parseFloat(localStorage.getItem("FECurrentStockPrice"));
    delcredCurrentStockPrice = parseFloat(localStorage.getItem("delcredCurrentStockPrice"));
    rustecCurrentStockPrice = parseFloat(localStorage.getItem("rustecCurrentStockPrice"));
    exxocredCurrentStockPrice = parseFloat(localStorage.getItem("exxocredCurrentStockPrice"));
    AUCurrentStockPrice = parseFloat(localStorage.getItem("AUCurrentStockPrice"));
    aceholdCurrentStockPrice = parseFloat(localStorage.getItem("aceholdCurrentStockPrice"));
    delholdCurrentStockPrice = parseFloat(localStorage.getItem("delholdCurrentStockPrice"));
    DIAMCurrentStockPrice = parseFloat(localStorage.getItem("DIAMCurrentStockPrice"));
    pentaccCurrentStockPrice = parseFloat(localStorage.getItem("pentaccCurrentStockPrice"));
    noodleCurrentStockPrice = parseFloat(localStorage.getItem("noodleCurrentStockPrice"));
    megahardCurrentStockPrice = parseFloat(localStorage.getItem("megahardCurrentStockPrice"));
    chimerasecCurrentStockPrice = parseFloat(localStorage.getItem("chimerasecCurrentStockPrice"));
    chimeraholdCurrentStockPrice = parseFloat(localStorage.getItem("chimeraholdCurrentStockPrice"));
    griffonbankCurrentStockPrice = parseFloat(localStorage.getItem("griffonbankCurrentStockPrice"));
    turborusCurrentStockPrice = parseFloat(localStorage.getItem("turborusCurrentStockPrice"));
    exodmptCurrentStockPrice = parseFloat(localStorage.getItem("exodmptCurrentStockPrice"));
    ramnetCurrentStockPrice = parseFloat(localStorage.getItem("ramnetCurrentStockPrice"));
    alphacenCurrentStockPrice = parseFloat(localStorage.getItem("alphacenCurrentStockPrice"));
    scatterCurrentStockPrice = parseFloat(localStorage.getItem("scatterCurrentStockPrice"));
    kalzexCurrentStockPrice = parseFloat(localStorage.getItem("kalzexCurrentStockPrice"));
    sonicosCurrentStockPrice = parseFloat(localStorage.getItem("sonicosCurrentStockPrice"));
    trancextCurrentStockPrice = parseFloat(localStorage.getItem("trancextCurrentStockPrice"));
    stklrCurrentStockPrice = parseFloat(localStorage.getItem("stklrCurrentStockPrice"));
    vipersecCurrentStockPrice = parseFloat(localStorage.getItem("vipersecCurrentStockPrice"));
    PLATCurrentStockPrice = parseFloat(localStorage.getItem("PLATCurrentStockPrice"));
    infoneCurrentStockPrice = parseFloat(localStorage.getItem("infoneCurrentStockPrice"));
    extankCurrentStockPrice = parseFloat(localStorage.getItem("extankCurrentStockPrice"));
    reinaccCurrentStockPrice = parseFloat(localStorage.getItem("reinaccCurrentStockPrice"));

    ownedDelsecStocks = parseInt(localStorage.getItem("ownedDelsecStocks"));
    ownedEntaqStocks = parseInt(localStorage.getItem("ownedEntaqStocks"));
    ownedVentexStocks = parseInt(localStorage.getItem("ownedVentexStocks"));
    ownedAstorStocks = parseInt(localStorage.getItem("ownedAstorStocks"));
    ownedPopbotStocks = parseInt(localStorage.getItem("ownedPopbotStocks"));
    ownedPannamStocks = parseInt(localStorage.getItem("ownedPannamStocks"));
    ownedTRITStocks = parseInt(localStorage.getItem("ownedTRITStocks"));
    ownedCANVStocks = parseInt(localStorage.getItem("ownedCANVStocks"));
    ownedOSMStocks = parseInt(localStorage.getItem("ownedOSMStocks"));
    ownedPALLADStocks = parseInt(localStorage.getItem("ownedPALLADStocks"));
    ownedKELVStocks = parseInt(localStorage.getItem("ownedKELVStocks"));
    ownedStuccorStocks = parseInt(localStorage.getItem("ownedStuccorStocks"));
    ownedFEStocks = parseInt(localStorage.getItem("ownedFEStocks"));
    ownedDelcredStocks = parseInt(localStorage.getItem("ownedDelcredStocks"));
    ownedRustecStocks = parseInt(localStorage.getItem("ownedRustecStocks"));
    ownedExxocredStocks = parseInt(localStorage.getItem("ownedExxocredStocks"));
    ownedAUStocks = parseInt(localStorage.getItem("ownedAUStocks"));
    ownedAceholdStocks = parseInt(localStorage.getItem("ownedAceholdStocks"));
    ownedDelholdStocks = parseInt(localStorage.getItem("ownedDelholdStocks"));
    ownedDIAMStocks = parseInt(localStorage.getItem("ownedDIAMStocks"));
    ownedPentaccStocks = parseInt(localStorage.getItem("ownedPentaccStocks"));
    ownedNoodleStocks = parseInt(localStorage.getItem("ownedNoodleStocks"));
    ownedMegahardStocks = parseInt(localStorage.getItem("ownedMegahardStocks"));
    ownedChimerasecStocks = parseInt(localStorage.getItem("ownedChimerasecStocks"));
    ownedChimeraholdStocks = parseInt(localStorage.getItem("ownedChimeraholdStocks"));
    ownedGriffonbankStocks = parseInt(localStorage.getItem("ownedGriffonbankStocks"));
    ownedTurborusStocks = parseInt(localStorage.getItem("ownedTurborusStocks"));
    ownedExodmptStocks = parseInt(localStorage.getItem("ownedExodmptStocks"));
    ownedRamnetStocks = parseInt(localStorage.getItem("ownedRamnetStocks"));
    ownedAlphacenStocks = parseInt(localStorage.getItem("ownedAlphacenStocks"));
    ownedScatterStocks = parseInt(localStorage.getItem("ownedScatterStocks"));
    ownedKalzexStocks = parseInt(localStorage.getItem("ownedKalzexStocks"));
    ownedSonicosStocks = parseInt(localStorage.getItem("ownedSonicosStocks"));
    ownedTrancextStocks = parseInt(localStorage.getItem("ownedTrancextStocks"));
    ownedStklrStocks = parseInt(localStorage.getItem("ownedStklrStocks"));
    ownedVipersecStocks = parseInt(localStorage.getItem("ownedVipersecStocks"));
    ownedPLATStocks = parseInt(localStorage.getItem("ownedPLATStocks"));
    ownedInfoneStocks = parseInt(localStorage.getItem("ownedInfoneStocks"));
    ownedExtankStocks = parseInt(localStorage.getItem("ownedExtankStocks"));
    ownedReinaccStocks = parseInt(localStorage.getItem("ownedReinaccStocks"));
 
    delsecSpentAmt = parseFloat(localStorage.getItem("delsecSpentAmt"));
    entaqSpentAmt = parseFloat(localStorage.getItem("entaqSpentAmt"));
    ventexSpentAmt = parseFloat(localStorage.getItem("ventexSpentAmt"));
    astorSpentAmt = parseFloat(localStorage.getItem("astorSpentAmt"));
    popbotSpentAmt = parseFloat(localStorage.getItem("popbotSpentAmt"));
    pannamSpentAmt = parseFloat(localStorage.getItem("pannamSpentAmt"));
    TRITSpentAmt = parseFloat(localStorage.getItem("TRITSpentAmt"));
    CANVSpentAmt = parseFloat(localStorage.getItem("CANVSpentAmt"));
    OSMSpentAmt = parseFloat(localStorage.getItem("OSMSpentAmt"));
    PALLADSpentAmt = parseFloat(localStorage.getItem("PALLADSpentAmt"));
    KELVSpentAmt = parseFloat(localStorage.getItem("KELVSpentAmt"));
    stuccorSpentAmt = parseFloat(localStorage.getItem("stuccorSpentAmt"));
    FESpentAmt = parseFloat(localStorage.getItem("FESpentAmt"));
    delcredSpentAmt = parseFloat(localStorage.getItem("delcredSpentAmt"));
    rustecSpentAmt = parseFloat(localStorage.getItem("rustecSpentAmt"));
    exxocredSpentAmt = parseFloat(localStorage.getItem("exxocredSpentAmt"));
    AUSpentAmt = parseFloat(localStorage.getItem("AUSpentAmt"));
    aceholdSpentAmt = parseFloat(localStorage.getItem("aceholdSpentAmt"));
    delholdSpentAmt = parseFloat(localStorage.getItem("delholdSpentAmt"));
    DIAMSpentAmt = parseFloat(localStorage.getItem("DIAMSpentAmt"));
    pentaccSpentAmt = parseFloat(localStorage.getItem("pentaccSpentAmt"));
    noodleSpentAmt = parseFloat(localStorage.getItem("noodleSpentAmt"));
    megahardSpentAmt = parseFloat(localStorage.getItem("megahardSpentAmt"));
    chimerasecSpentAmt = parseFloat(localStorage.getItem("chimerasecSpentAmt"));
    chimeraholdSpentAmt = parseFloat(localStorage.getItem("chimeraholdSpentAmt"));
    griffonbankSpentAmt = parseFloat(localStorage.getItem("griffonbankSpentAmt"));
    turborusSpentAmt = parseFloat(localStorage.getItem("turborusSpentAmt"));
    exodmptSpentAmt = parseFloat(localStorage.getItem("exodmptSpentAmt"));
    ramnetSpentAmt = parseFloat(localStorage.getItem("ramnetSpentAmt"));
    alphacenSpentAmt = parseFloat(localStorage.getItem("alphacenSpentAmt"));
    scatterSpentAmt = parseFloat(localStorage.getItem("scatterSpentAmt"));
    kalzexSpentAmt = parseFloat(localStorage.getItem("kalzexSpentAmt"));
    sonicosSpentAmt = parseFloat(localStorage.getItem("sonicosSpentAmt"));
    trancextSpentAmt = parseFloat(localStorage.getItem("trancextSpentAmt"));
    stklrSpentAmt = parseFloat(localStorage.getItem("stklrSpentAmt"));
    vipersecSpentAmt = parseFloat(localStorage.getItem("vipersecSpentAmt"));
    PLATSpentAmt = parseFloat(localStorage.getItem("PLATSpentAmt"));
    infoneSpentAmt = parseFloat(localStorage.getItem("infoneSpentAmt"));
    extankSpentAmt = parseFloat(localStorage.getItem("extankSpentAmt"));
    reinaccSpentAmt = parseFloat(localStorage.getItem("reinaccSpentAmt"));

    if (userClass == "Rogue")
        sellDivider = 20;

});