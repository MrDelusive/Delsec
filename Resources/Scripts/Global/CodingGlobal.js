var currentComputingPower = 1;
var currentComputingPowerUsage = 0;
var buildTimer = 20;
var currentDirectory = "V:/Clientdata/5184828>";

var efficiencyCode = 0;
var efficiencyCodeArray = "var efficiencyCode = 0.24;\n\nincrement += efficiencyCode;".split("");
var efficiencyCodeArrayPosition = 0;

var efficiency2Code = 0;
var efficiency2CodeArray = "var efficiencyCode2 = 0.48;\n\nincrement += efficiencyCode2;".split("");
var efficiency2CodeArrayPosition = 0;

var scatterLogicCode = 0;
var scatterLogicCodeArray = "$('#btnScatterLogicBomb').click(function () {\n~~~~delsec.Disrupt();\n~~~~money += 400;\n}".split("");
var scatterLogicCodeArrayPosition = 0;

var autoEfficiency1Code = 0;
var autoEfficiency1Interval = 0;
var autoEfficiency1CompleteInterval = 0;
var autoEfficiency1CodeArray = "setInterval(function () {\n~~~~$('#btnWriteEfficiencyCode').click();\n}, 1000);".split("");
var autoEfficiency1CodeArrayPosition = 0;
var autoEfficiency1CompleteCycles = 0; 
var autoEfficiency1Remainder = 0;

var autoEfficiency2Code = 0;
var autoEfficiency2Interval = 0;
var autoEfficiency2CompleteInterval = 0;
var autoEfficiency2CodeArray = "setInterval(function () {\n~~~~$('#btnWriteEfficiency2Code').click();\n}, 1000);".split("");
var autoEfficiency2CodeArrayPosition = 0;
var autoEfficiency2CompleteCycles = 0;
var autoEfficiency2Remainder = 0;

var expandHTMLCodeBuilt = 0;
var expandHTMLCodeArray = "<div class='warriorRow' id='expandJQueryDiv'>\n~~~~<button id='btnWriteExpandJQueryCode' class='btn_StyleRed'>\n~~~~~~~~Requires 300.00 KB Computing Power Capacity\n~~~~</button>\n</div>".split("");
var expandHTMLCodeArrayPosition = 0;