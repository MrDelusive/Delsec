var totalRisk = 0;
var riskTick = 0;
var riskDetectionAmt = 100000;
var riskClearedTargets = 0;
var riskClearedTargetAmtIncrement = 100;
var necroTimer = 900;
var necromancerRunning = 'false';
var nlastUpdate = 0;
var ironCurtainRunning = 'false';
var ironCurtainTimer = 1800;
var ilastUpdate = 0;
var superstormMultiplyer = 1; // for interaction with delsecManipulation
var delsecTechGodTimer = 1800;
var delsecTechGodRunning = 'false';
var dlastUpdate = 0;
var delsecTechGodMultiplyer = 1;


var vipersecTotalRiskCalc = 0;
var russianTotalRiskCalc = 0;

var vipersecReflectionFieldAmt = 0;
var vipersecFaderAmt = 0;
var vipersecStealthFieldAmt = 0;
var vipersecInvisibilityAmt = 0;
var vipersecTimeReversalAmt = 0;

var xCoord = 0;
var yCoord = 0;

var wantedTarget1 = Math.floor(Math.random() * 10000000);
var wantedTarget2 = Math.floor(Math.random() * 10000000);
var wantedTarget3 = Math.floor(Math.random() * 10000000);
var wantedTarget4 = Math.floor(Math.random() * 10000000);
var wantedTarget5 = Math.floor(Math.random() * 10000000);
var wantedTarget6 = Math.floor(Math.random() * 10000000);
var wantedTarget7 = Math.floor(Math.random() * 10000000);
var wantedTarget8 = Math.floor(Math.random() * 10000000);
var wantedTarget9 = Math.floor(Math.random() * 10000000);
var wantedTarget10 = Math.floor(Math.random() * 10000000);


var firstNames = ["Radimir", "Bolby", "Camel", "Bass", "Harry", "Xoltor", "BicBoi", "Steve", "Mike", "Cheese", "Christoffel", "Coone", "JJBMAC", "T-Z", "Lera", "Camille", "Sara", "Goat", "Hunter123",
    "Smelly", "Chode", "Huug", "Yttytrtr", "Noname", "Leri", "Trixy", "Gr1L", "Hot", "Stud", "LongFong", "Ugly", "Britaniar", "Exal", "Buttery", "Biscuit", "Strong", "Ultra", "Magoot", "Virtual", "Dark"];

var lastNames = ["BicBoi", "Johnson", "TinCan", "Eater", "Frame", "MoFo", "Master", "Commander", "DongJung", "Sleasy", "Ibrate", "SumLasName", "Cheese", "Bell", "Arms", "Boogins", "Feet", "Chomper", "Grater", "Seven",
    "G4M3R", "Dong", "Macson", "the Freshmaster", "the Swollen", "the Heated", "Azzman", "Ranger", "the Handsome", "of Butter", "from Truntchy", "from Nowhere", "Inhaler", "Dunno", "PeeNuts", "is Angry",
    "the Endeared", "RedEye", "Watson", "Legs"];

var addresses = ["1 Salty Way", "69 Cool Rd", "555 Homeless Crt", "21 Lonesome Path", "1-A NoGood Ave", "10 CrimeTown Ave", "20 Avenue Crt", "29 NotARoad Rd", "572 Court Ave", "52315 X Cres", "444 Four Sq",
    "0 Dollar Rd", "7 Ax Ave", "In a Volcano", "On the Streets", "Running for their Life", "Somewhere Out There", "Secret Lair", "In Space", "The Surface of the Sun", "Another Dimension", "On a Boat", "Under the Sea",
    "With the Lions", "Far Away", "Next Door", "In the Past", "In the Future", "At their Grandmas", "SpaceShuttle", "Truntchy", "Nowhere", "50 Caliber Way", "Dunno", "In the Game", "LollyLand", "At the FDI Building",
    "1 Address Plz", "In A Dress Somewhere", "2 OutOfIdeas Rd"];

var wantedTarget1FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget1LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget1Age = Math.floor(Math.random() * 100);
var wantedTarget1AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget2FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget2LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget2Age = Math.floor(Math.random() * 100);
var wantedTarget2AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget3FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget3LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget3Age = Math.floor(Math.random() * 100);
var wantedTarget3AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget4FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget4LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget4Age = Math.floor(Math.random() * 100);
var wantedTarget4AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget5FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget5LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget5Age = Math.floor(Math.random() * 100);
var wantedTarget5AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget6FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget6LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget6Age = Math.floor(Math.random() * 100);
var wantedTarget6AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget7FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget7LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget7Age = Math.floor(Math.random() * 100);
var wantedTarget7AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget8FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget8LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget8Age = Math.floor(Math.random() * 100);
var wantedTarget8AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget9FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget9LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget9Age = Math.floor(Math.random() * 100);
var wantedTarget9AddressRoll = Math.floor(Math.random() * 40);

var wantedTarget10FirstNameRoll = Math.floor(Math.random() * 40);
var wantedTarget10LastNameRoll = Math.floor(Math.random() * 40);
var wantedTarget10Age = Math.floor(Math.random() * 100);
var wantedTarget10AddressRoll = Math.floor(Math.random() * 40);

var currentDisplayedAccount = "";
var wantedTarget1FirstName = "";
var wantedTarget1LastName = "";
var wantedTarget1Address = "";
var wantedTarget1Status = "ACCOUNT FROZEN";

var wantedTarget2FirstName = "";
var wantedTarget2LastName = "";
var wantedTarget2Address = "";
var wantedTarget2Status = "ACCOUNT FROZEN";

var wantedTarget3FirstName = "";
var wantedTarget3LastName = "";
var wantedTarget3Address = "";
var wantedTarget3Status = "ACCOUNT FROZEN";

var wantedTarget4FirstName = "";
var wantedTarget4LastName = "";
var wantedTarget4Address = "";
var wantedTarget4Status = "ACCOUNT FROZEN";

var wantedTarget5FirstName = "";
var wantedTarget5LastName = "";
var wantedTarget5Address = "";
var wantedTarget5Status = "ACCOUNT FROZEN";

var wantedTarget6FirstName = "";
var wantedTarget6LastName = "";
var wantedTarget6Address = "";
var wantedTarget6Status = "ACCOUNT FROZEN";

var wantedTarget7FirstName = "";
var wantedTarget7LastName = "";
var wantedTarget7Address = "";
var wantedTarget7Status = "ACCOUNT FROZEN";

var wantedTarget8FirstName = "";
var wantedTarget8LastName = "";
var wantedTarget8Address = "";
var wantedTarget8Status = "ACCOUNT FROZEN";

var wantedTarget9FirstName = "";
var wantedTarget9LastName = "";
var wantedTarget9Address = "";
var wantedTarget9Status = "ACCOUNT FROZEN";

var wantedTarget10FirstName = "";
var wantedTarget10LastName = "";
var wantedTarget10Address = "";
var wantedTarget10Status = "ACCOUNT FROZEN";