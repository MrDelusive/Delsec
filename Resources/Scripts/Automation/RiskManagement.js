$(document).ready(function () {
    var splashStart = false;

    // GRID GEN
    (function ($) {
        $.fn.gridGenerate = function () {
            xCoord = Math.floor((Math.random() * 8) + 1);
            yCoord = Math.floor((Math.random() * 8) + 1);


            var gridArray = $("#gridDisplay div");
            for (var i = 0; i < gridArray.length; i++) {
                var nodeGenX = Math.floor(Math.random() * 15);
                if (nodeGenX == 10)
                    nodeGenX = 'A';
                else if (nodeGenX == 11)
                    nodeGenX = 'B';
                else if (nodeGenX == 12)
                    nodeGenX = 'C';
                else if (nodeGenX == 13)
                    nodeGenX = 'D';
                else if (nodeGenX == 14)
                    nodeGenX = 'E';
                else if (nodeGenX == 15)
                    nodeGenX = 'F';

                var nodeGenY = Math.floor(Math.random() * 15);
                if (nodeGenY == 10)
                    nodeGenY = 'A';
                else if (nodeGenY == 11)
                    nodeGenY = 'B';
                else if (nodeGenY == 12)
                    nodeGenY = 'C';
                else if (nodeGenY == 13)
                    nodeGenY = 'D';
                else if (nodeGenY == 14)
                    nodeGenY = 'E';
                else if (nodeGenY == 15)
                    nodeGenX = 'F';

                $(gridArray[i]).html(nodeGenX.toString() + nodeGenY.toString());

            }

            $("#gridInputPrompt").html("Verify Data at Co-ord: <h2>(" + xCoord + "," + yCoord + ")</h2>");
            return this;
        };
    })(jQuery);
    // END GRID GEN

    $('#btnRiskManagement').click(function () {
        $(".hidden_Divs").hide();
        $("#riskManagement").show();
        $('#riskGame').hide();
        $('#riskGameSplash').show();
        $('#riskGameSplash').html("");
        $('#riskGameContainer').show();
        if (splashStart == false) {
            splashStart = true;
            $('#riskGameSplash').append("Booting...<br /><br />");
            window.setTimeout(function () {
                $('#riskGameSplash').append("Running Delsec Override...<br />");
            }, 2000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Running Virtual CMOS OS...<br />");
            }, 3000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Injecting Visual Basic Script...<br />");
            }, 4000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Setting up 2nd keyboard...<br />");
            }, 5000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Setting up CSI-Scripts...<br />");
            }, 6000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Typing rigorously...<br />");
            }, 7000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Finding IP...127.0.0.1<br />");
            }, 8000);
            window.setTimeout(function () {
                $('#riskGameSplash').append("Hacking in...");
            }, 9000);
            window.setTimeout(function () {
                $('#riskGameSplash').hide();
                $('#riskGame').show();
                splashStart = false;
            }, 11000);
        }

        return false;
    });

    //DRIVE
    $('#btnRiskDrive').click(function () {
        $('.riskAccessDenied').show();
        window.setTimeout(function () {
            $('.riskAccessDenied').hide();
        }, 1000);
        return false;
    });

    $('#btnRiskAccess').click(function () {
        $('#riskAccessFile').show();
        $('#riskAccessID').focus();
        return false;
    });

    //ACCESS
    $('#btnCloseRiskAccessFile').click(function () {
        $('#riskAccessFile').hide();
        return false;
    });

    $('#riskAccessID').keydown(function (e) {
        if (e.which == 13) {
            $('#btnRiskAccessID').click();
            return false;
        }
    });
    $('#btnRiskAccessID').click(function () {
        var riskInput = $('#riskAccessID').val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $('#riskAccessID').val("");
        if (riskInput == "5184828") {
            $('#riskPlayerProfile').show();            
        }
        else if (riskInput == wantedTarget1) {
            $('#riskOtherProfile').show();
            $('#otherName').html(wantedTarget1FirstName + " " + wantedTarget1LastName);
            $('#otherAge').html(wantedTarget1Age);
            $('#otherAddress').html(wantedTarget1Address);
            $('#otherStatus').html(wantedTarget1Status);
            currentDisplayedAccount = wantedTarget1;
        }

        else if (riskInput == wantedTarget2) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget2FirstName + " " + wantedTarget2LastName);
            $('#otherAge').html(wantedTarget2Age);
            $('#otherAddress').html(wantedTarget2Address);
            $('#otherStatus').html(wantedTarget2Status);
            currentDisplayedAccount = wantedTarget2;
        }

        else if (riskInput == wantedTarget3) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget3FirstName + " " + wantedTarget3LastName);
            $('#otherAge').html(wantedTarget3Age);
            $('#otherAddress').html(wantedTarget3Address);
            $('#otherStatus').html(wantedTarget3Status);
            currentDisplayedAccount = wantedTarget3;
        }

        else if (riskInput == wantedTarget4) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget4FirstName + " " + wantedTarget4LastName);
            $('#otherAge').html(wantedTarget4Age);
            $('#otherAddress').html(wantedTarget4Address);
            $('#otherStatus').html(wantedTarget4Status);
            currentDisplayedAccount = wantedTarget4;
        }

        else if (riskInput == wantedTarget5) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget5FirstName + " " + wantedTarget5LastName);
            $('#otherAge').html(wantedTarget5Age);
            $('#otherAddress').html(wantedTarget5Address);
            $('#otherStatus').html(wantedTarget5Status);
            currentDisplayedAccount = wantedTarget5;
        }

        else if (riskInput == wantedTarget6) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget6FirstName + " " + wantedTarget6LastName);
            $('#otherAge').html(wantedTarget6Age);
            $('#otherAddress').html(wantedTarget6Address);
            $('#otherStatus').html(wantedTarget6Status);
            currentDisplayedAccount = wantedTarget6;
        }

        else if (riskInput == wantedTarget7) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget7FirstName + " " + wantedTarget7LastName);
            $('#otherAge').html(wantedTarget7Age);
            $('#otherAddress').html(wantedTarget7Address);
            $('#otherStatus').html(wantedTarget7Status);
            currentDisplayedAccount = wantedTarget7;
        }

        else if (riskInput == wantedTarget8) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget8FirstName + " " + wantedTarget8LastName);
            $('#otherAge').html(wantedTarget8Age);
            $('#otherAddress').html(wantedTarget8Address);
            $('#otherStatus').html(wantedTarget8Status);
            currentDisplayedAccount = wantedTarget8;
        }

        else if (riskInput == wantedTarget9) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget9FirstName + " " + wantedTarget9LastName);
            $('#otherAge').html(wantedTarget9Age);
            $('#otherAddress').html(wantedTarget9Address);
            $('#otherStatus').html(wantedTarget9Status);
            currentDisplayedAccount = wantedTarget9;
        }

        else if (riskInput == wantedTarget10) {
            $('#riskOtherProfile').show();

            $('#otherName').html(wantedTarget10FirstName + " " + wantedTarget10LastName);
            $('#otherAge').html(wantedTarget10Age);
            $('#otherAddress').html(wantedTarget10Address);
            $('#otherStatus').html(wantedTarget10Status);
            currentDisplayedAccount = wantedTarget10;
        }

        else {
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }
        return false;
    });

    $('#btnCloseRiskPlayerProfile').click(function () {
        $('#riskPlayerProfile').hide();
        return false;
    });

    $('#btnCloseRiskOtherProfile').click(function () {
        $('#riskOtherProfile').hide();
        return false;
    });

    $('#btnClearPlayerRisk').click(function () {
        $('#riskClearGrid').show();
        $('#riskClearGrid').gridGenerate();
        $('#gridInputInput').focus();
        $('#btnGridInputSubmitPlayer').show();
        $('#btnGridInputSubmit').hide();

        return false;
    });

    $('#btnClearOtherRisk').click(function () {
        if (currentDisplayedAccount == wantedTarget1 && wantedTarget1Status != "CLEAN") {
            wantedTarget1Status = "CLEAN";
            $('#riskCurrentTarget1').css('text-decoration','line-through');
            $('#otherStatus').html(wantedTarget1Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget2 && wantedTarget2Status != "CLEAN") {
            wantedTarget2Status = "CLEAN";
            $('#riskCurrentTarget2').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget2Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget3 && wantedTarget3Status != "CLEAN") {
            wantedTarget3Status = "CLEAN";
            $('#riskCurrentTarget3').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget3Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget4 && wantedTarget4Status != "CLEAN") {
            wantedTarget4Status = "CLEAN";
            $('#riskCurrentTarget4').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget4Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget5 && wantedTarget5Status != "CLEAN") {
            wantedTarget5Status = "CLEAN";
            $('#riskCurrentTarget5').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget5Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget6 && wantedTarget6Status != "CLEAN") {
            wantedTarget6Status = "CLEAN";
            $('#riskCurrentTarget6').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget6Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget7 && wantedTarget7Status != "CLEAN") {
            wantedTarget7Status = "CLEAN";
            $('#riskCurrentTarget7').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget7Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget8 && wantedTarget8Status != "CLEAN") {
            wantedTarget8Status = "CLEAN";
            $('#riskCurrentTarget8').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget8Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget9 && wantedTarget9Status != "CLEAN") {
            wantedTarget9Status = "CLEAN";
            $('#riskCurrentTarget9').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget9Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        else if (currentDisplayedAccount == wantedTarget10 && wantedTarget10Status != "CLEAN") {
            wantedTarget10Status = "CLEAN";
            $('#riskCurrentTarget10').css('text-decoration', 'line-through');
            $('#otherStatus').html(wantedTarget10Status);
            $('#riskClearGrid').show();
            $('#riskClearGrid').gridGenerate();
            $('#btnGridInputSubmit').show();
            $('#btnGridInputSubmitPlayer').hide();
            $('#gridInputInput').focus();
        }
        return false;
    });
    
    //CONROUTE
    $('#btnRiskConRoute').click(function () {
        $('#riskConRoute').show();
        var firstIP1 = Math.floor(Math.random() * 127);
        var firstIP2 = Math.floor(Math.random() * 127);
        var firstIP3 = Math.floor(Math.random() * 127);
        var firstIP4 = Math.floor(Math.random() * 127);
        var secondIP1 = Math.floor(Math.random() * 127);
        var secondIP2 = Math.floor(Math.random() * 127);
        var secondIP3 = Math.floor(Math.random() * 127);
        var secondIP4 = Math.floor(Math.random() * 127);

        $('#firstIP1').html(firstIP1);
        $('#firstIP2').html(firstIP2);
        $('#firstIP3').html(firstIP3);
        $('#firstIP4').html(firstIP4);
        $('#secondIP1').html(secondIP1);
        $('#secondIP2').html(secondIP2);
        $('#secondIP3').html(secondIP3);
        $('#secondIP4').html(secondIP4);

        $('#txtIPInput1').focus();
        $('#btnIPSubmit').prop('disabled', false);


        $('#riskConRoute').keydown(function (e) {
            if (e.which == 13) {
                $('#btnIncrement').prop('disabled', true);
                $('#btnWarriorIncrement').prop('disabled', true);
                $('#btnHealerIncrement').prop('disabled', true);
                $('#btnRogueIncrement').prop('disabled', true);
                $('#btnIPSubmit').click();
                return false;
            }
        });

        $('#btnIPSubmit').click(function () {
            if (firstIP1 + secondIP1 == $('#txtIPInput1').val() && firstIP2 + secondIP2 == $('#txtIPInput2').val() && firstIP3 + secondIP3 == $('#txtIPInput3').val() && firstIP4 + secondIP4 == $('#txtIPInput4').val()) {
                $('#riskIPValid').show();
                window.setTimeout(function () {
                    $('#riskIPValid').hide();
                }, 1000);

                firstIP1 = Math.floor(Math.random() * 127);
                firstIP2 = Math.floor(Math.random() * 127);
                firstIP3 = Math.floor(Math.random() * 127);
                firstIP4 = Math.floor(Math.random() * 127);
                secondIP1 = Math.floor(Math.random() * 127);
                secondIP2 = Math.floor(Math.random() * 127);
                secondIP3 = Math.floor(Math.random() * 127);
                secondIP4 = Math.floor(Math.random() * 127);

                $('#firstIP1').html(firstIP1);
                $('#firstIP2').html(firstIP2);
                $('#firstIP3').html(firstIP3);
                $('#firstIP4').html(firstIP4);
                $('#secondIP1').html(secondIP1);
                $('#secondIP2').html(secondIP2);
                $('#secondIP3').html(secondIP3);
                $('#secondIP4').html(secondIP4);

                $('#txtIPInput1').val("");
                $('#txtIPInput2').val("");
                $('#txtIPInput3').val("");
                $('#txtIPInput4').val("");
                $('#txtIPInput1').focus();

                
                if (chainConnectionActive == 'true')
                    riskDetectionAmt += 100000;
                if (ipOverchargeActive == 'true')
                    riskDetectionAmt += 250000;
                if (IPFirestormActive == 'true')
                    riskDetectionAmt += 1000000;
                if (chaosWizardActive == 'true')
                    riskDetectionAmt += 5000000;
                riskDetectionAmt += 100000;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");

            }
            else {
                $('#riskIPInvalid').show();
                window.setTimeout(function () {
                    $('#riskIPInvalid').hide();
                }, 1000);
            }

            return false;
        });
        return false;
    });

    $('#btnCloseRiskConRoute').click(function () {
        $('#riskConRoute').hide();
        return false;
    });


    //WANTED.TXT
    $('#btnRiskWanted').click(function () {
        $('#riskWantedTxt').show();       
        $('#riskCurrentTarget1').html(wantedTarget1);
        $('#riskCurrentTarget2').html(wantedTarget2);
        $('#riskCurrentTarget3').html(wantedTarget3);
        $('#riskCurrentTarget4').html(wantedTarget4);
        $('#riskCurrentTarget5').html(wantedTarget5);
        $('#riskCurrentTarget6').html(wantedTarget6);
        $('#riskCurrentTarget7').html(wantedTarget7);
        $('#riskCurrentTarget8').html(wantedTarget8);
        $('#riskCurrentTarget9').html(wantedTarget9);
        $('#riskCurrentTarget10').html(wantedTarget10);
        return false;
    });

    $('#btnCloseRiskWantedTxt').click(function () {
        $('#riskWantedTxt').hide();
        return false;
    });
    
    $('#btnRiskWantedRefreshTargets').click(function () {
        wantedTarget1 = Math.floor(Math.random() * 10000000);
        wantedTarget2 = Math.floor(Math.random() * 10000000);
        wantedTarget3 = Math.floor(Math.random() * 10000000);
        wantedTarget4 = Math.floor(Math.random() * 10000000);
        wantedTarget5 = Math.floor(Math.random() * 10000000);
        wantedTarget6 = Math.floor(Math.random() * 10000000);
        wantedTarget7 = Math.floor(Math.random() * 10000000);
        wantedTarget8 = Math.floor(Math.random() * 10000000);
        wantedTarget9 = Math.floor(Math.random() * 10000000);
        wantedTarget10 = Math.floor(Math.random() * 10000000);
        $('#riskCurrentTarget1').html(wantedTarget1);
        $('#riskCurrentTarget2').html(wantedTarget2);
        $('#riskCurrentTarget3').html(wantedTarget3);
        $('#riskCurrentTarget4').html(wantedTarget4);
        $('#riskCurrentTarget5').html(wantedTarget5);
        $('#riskCurrentTarget6').html(wantedTarget6);
        $('#riskCurrentTarget7').html(wantedTarget7);
        $('#riskCurrentTarget8').html(wantedTarget8);
        $('#riskCurrentTarget9').html(wantedTarget9);
        $('#riskCurrentTarget10').html(wantedTarget10);

        $('#riskCurrentTarget1').css('text-decoration', 'none');
        $('#riskCurrentTarget2').css('text-decoration', 'none');
        $('#riskCurrentTarget3').css('text-decoration', 'none');
        $('#riskCurrentTarget4').css('text-decoration', 'none');
        $('#riskCurrentTarget5').css('text-decoration', 'none');
        $('#riskCurrentTarget6').css('text-decoration', 'none');
        $('#riskCurrentTarget7').css('text-decoration', 'none');
        $('#riskCurrentTarget8').css('text-decoration', 'none');
        $('#riskCurrentTarget9').css('text-decoration', 'none');
        $('#riskCurrentTarget10').css('text-decoration', 'none');

        wantedTarget1FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget1LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget1Age = Math.floor(Math.random() * 100);
        wantedTarget1AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget2FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget2LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget2Age = Math.floor(Math.random() * 100);
        wantedTarget2AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget3FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget3LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget3Age = Math.floor(Math.random() * 100);
        wantedTarget3AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget4FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget4LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget4Age = Math.floor(Math.random() * 100);
        wantedTarget4AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget5FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget5LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget5Age = Math.floor(Math.random() * 100);
        wantedTarget5AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget6FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget6LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget6Age = Math.floor(Math.random() * 100);
        wantedTarget6AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget7FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget7LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget7Age = Math.floor(Math.random() * 100);
        wantedTarget7AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget8FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget8LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget8Age = Math.floor(Math.random() * 100);
        wantedTarget8AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget9FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget9LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget9Age = Math.floor(Math.random() * 100);
        wantedTarget9AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget10FirstNameRoll = Math.floor(Math.random() * 40);
        wantedTarget10LastNameRoll = Math.floor(Math.random() * 40);
        wantedTarget10Age = Math.floor(Math.random() * 100);
        wantedTarget10AddressRoll = Math.floor(Math.random() * 40);

        wantedTarget1FirstName = firstNames[wantedTarget1FirstNameRoll];
        wantedTarget1LastName = lastNames[wantedTarget1LastNameRoll];
        wantedTarget1Address = addresses[wantedTarget1AddressRoll];
        wantedTarget1Status = "ACCOUNT FROZEN";

        wantedTarget2FirstName = firstNames[wantedTarget2FirstNameRoll];
        wantedTarget2LastName = lastNames[wantedTarget2LastNameRoll];
        wantedTarget2Address = addresses[wantedTarget2AddressRoll];
        wantedTarget2Status = "ACCOUNT FROZEN";

        wantedTarget3FirstName = firstNames[wantedTarget3FirstNameRoll];
        wantedTarget3LastName = lastNames[wantedTarget3LastNameRoll];
        wantedTarget3Address = addresses[wantedTarget3AddressRoll];
        wantedTarget3Status = "ACCOUNT FROZEN";

        wantedTarget4FirstName = firstNames[wantedTarget4FirstNameRoll];
        wantedTarget4LastName = lastNames[wantedTarget4LastNameRoll];
        wantedTarget4Address = addresses[wantedTarget4AddressRoll];
        wantedTarget4Status = "ACCOUNT FROZEN";

        wantedTarget5FirstName = firstNames[wantedTarget5FirstNameRoll];
        wantedTarget5LastName = lastNames[wantedTarget5LastNameRoll];
        wantedTarget5Address = addresses[wantedTarget5AddressRoll];
        wantedTarget5Status = "ACCOUNT FROZEN";

        wantedTarget6FirstName = firstNames[wantedTarget6FirstNameRoll];
        wantedTarget6LastName = lastNames[wantedTarget6LastNameRoll];
        wantedTarget6Address = addresses[wantedTarget6AddressRoll];
        wantedTarget6Status = "ACCOUNT FROZEN";

        wantedTarget7FirstName = firstNames[wantedTarget7FirstNameRoll];
        wantedTarget7LastName = lastNames[wantedTarget7LastNameRoll];
        wantedTarget7Address = addresses[wantedTarget7AddressRoll];
        wantedTarget7Status = "ACCOUNT FROZEN";

        wantedTarget8FirstName = firstNames[wantedTarget8FirstNameRoll];
        wantedTarget8LastName = lastNames[wantedTarget8LastNameRoll];
        wantedTarget8Address = addresses[wantedTarget8AddressRoll];
        wantedTarget8Status = "ACCOUNT FROZEN";

        wantedTarget9FirstName = firstNames[wantedTarget9FirstNameRoll];
        wantedTarget9LastName = lastNames[wantedTarget9LastNameRoll];
        wantedTarget9Address = addresses[wantedTarget9AddressRoll];
        wantedTarget9Status = "ACCOUNT FROZEN";

        wantedTarget10FirstName = firstNames[wantedTarget10FirstNameRoll];
        wantedTarget10LastName = lastNames[wantedTarget10LastNameRoll];
        wantedTarget10Address = addresses[wantedTarget10AddressRoll];
        wantedTarget10Status = "ACCOUNT FROZEN";
        return false;
    });

    //GLOBAL
    $('#btnGlobalControl').click(function () {
        $('#riskGlobalControl').show();
        return false;
    });

    $('#btnCloseRiskGlobalControl').click(function () {
        $('#riskGlobalControl').hide();
        return false;
    });
    

    //NECRO
    $('#btnNecromancer').click(function () {
        var necroRunTimer = 900;
        if (necroTimer != 0) {
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }
        else { //RESET RISK TO 0, KILL RISK GEN FOR 15, CHANGE DISPLAY
            $('#riskTraced').html("You are not being traced.");
            $('#playerAddress').html("[UNKNOWN]");
            $('#playerStatus').html("CLEAN");
            $('#riskTraced').css("background", "#040515");
            $('#riskGame').hide();
            $('#riskGameNecroed').show();
            totalRisk = 0;
            localStorage.setItem("totalRisk", totalRisk);
            necromancerRunning = 'true';
            
            var minutes = Math.floor(necroRunTimer / 60);
            var seconds = Math.floor(necroRunTimer % 60);

            var lastUpdate = new Date().getTime();
            $('#riskNecroTimer').html(minutes + ":0" + seconds);
            var necroRunTimerInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                necroRunTimer -= Math.round(diff / 1000);
                lastUpdate = thisUpdate;
                minutes = Math.floor(necroRunTimer / 60);
                seconds = Math.floor(necroRunTimer % 60);
                if (seconds < 10)
                    $('#riskNecroTimer').html(minutes + ":0" + seconds);
                else
                    $('#riskNecroTimer').html(minutes + ":" + seconds);
            }, 1000);
            window.setTimeout(function () {
                nlastUpdate = new Date().getTime() - 1000; // To refresh the necro cooldown start point. (so its not the game preload one)
                necromancerRunning = 'false';
                necroTimer = 900;
                $('#riskGameNecroed').hide();
                $('#riskGame').show();
                clearInterval(necroRunTimerInterval);
            }, necroRunTimer * 1000 + 1000);
        }
        return false;
    });

    $('#btnIronCurtain').click(function () {
        var ironCurtainRunTimer = 600;

        if (ironCurtainTimer != 0) {
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }
        else { //RUSSIAN CRAWLER RISK = 0, 300% PROFITS
           
            ironCurtainRunning = 'true';
            $('#ironCurtainRunningTimerDisplay').show();
            $('#ironCurtainDisplay').show();
            $('#ironCurtainTimerDisplay').hide();
            var minutes = Math.floor(ironCurtainRunTimer / 60);
            var seconds = Math.floor(ironCurtainRunTimer % 60);

            var lastUpdate = new Date().getTime();
            $('#ironCurtainRunningTimerDisplay').html(minutes + ":0" + seconds);
            var ironCurtainRunTimerInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                ironCurtainRunTimer -= Math.round(diff / 1000);
                lastUpdate = thisUpdate;
                minutes = Math.floor(ironCurtainRunTimer / 60);
                seconds = Math.floor(ironCurtainRunTimer % 60);
                if (seconds < 10)
                    $('#ironCurtainRunningTimerDisplay').html(minutes + ":0" + seconds);
                else
                    $('#ironCurtainRunningTimerDisplay').html(minutes + ":" + seconds);
            }, 1000);
            window.setTimeout(function () {
                ilastUpdate = new Date().getTime() - 1000; // same thing as necro timer seed
                ironCurtainRunning = 'false';
                ironCurtainTimer = 1800;
                clearInterval(ironCurtainRunTimerInterval);
                $('#ironCurtainRunningTimerDisplay').hide();
                $('#ironCurtainDisplay').hide();
                $('#ironCurtainTimerDisplay').show();
                $('#ironCurtainTimerDisplay').html("30:00");
            }, ironCurtainRunTimer * 1000 + 1000);
        }
        return false;
    });

    //DELNUKE
    $('#btnDelsecTechGod').click(function () {
        var delsecTechGodRunTimer = 10;
        if (delsecTechGodTimer != 0) {
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }
        else { //RESET RISK TO 0, KILL RISK GEN FOR 10, CHANGE DISPLAY
            $('#riskTraced').html("You are not being traced.");
            $('#playerAddress').html("[UNKNOWN]");
            $('#playerStatus').html("CLEAN");
            $('#riskTraced').css("background", "#040515");
            $('#center_Main').hide();
            $('#delsecTechGodCenter').show();
            totalRisk = 0;
            localStorage.setItem("totalRisk", totalRisk);
            delsecTechGodRunning = 'true';

            var lastUpdate = new Date().getTime();
            var delsecTechGodRunTimerInterval = setInterval(function () {
                var thisUpdate = new Date().getTime();
                var diff = thisUpdate - lastUpdate;
                delsecTechGodRunTimer -= Math.round(diff / 1000);
                lastUpdate = thisUpdate;
                $('#delsecTechGodCountdown').html(". . . " + delsecTechGodRunTimer);
            }, 1000);
            window.setTimeout(function () {
                dlastUpdate = new Date().getTime() - 1000; // To refresh the necro cooldown start point. (so its not the game preload one)
                delsecTechGodRunning = 'false';
                delsecTechGodTimer = 1800;
                $('#center_Main').show();
                $('#delsecTechGodCenter').hide();
                clearInterval(delsecTechGodRunTimerInterval);
            }, delsecTechGodRunTimer * 1000 + 1000);
        }
        return false;
    });

    // RISK CLEAR GRID CLOSE (OPEN IS ON CLEAR CLICK)
    $('#btnCloseRiskClearGrid').click(function () {
        $('#riskClearGrid').hide();
        $('#gridInputInput').val("");
        
        return false;
    });

    $('#gridInputInput').keydown(function (e) {
        if (e.which == 13) {
            if ($('#btnGridInputSubmit').is(":visible"))
                $('#btnGridInputSubmit').click();
            else if ($('#btnGridInputSubmitPlayer').is(":visible"))
                $('#btnGridInputSubmitPlayer').click();
            return false;
        }
    });

    $('#btnGridInputSubmit').click(function () {    
        var gridVerifyCoord = $('#grid' + xCoord.toString() + yCoord.toString()).html().toString();
        var gridInput = $('#gridInputInput').val().replace(/</g, "&lt;").replace(/>/g, "&gt;").toString();
        if (gridInput.toUpperCase() == gridVerifyCoord.toString()) {
            $('#riskGridValid').show();
            window.setTimeout(function () {
                $('#riskGridValid').hide();
                $('#riskClearGrid').hide();
                $('#riskOtherProfile').hide();
            }, 1000);
            
            riskClearedTargets += 1;
            localStorage.setItem("riskClearedTargets", riskClearedTargets);
                       
        }
        else {
            $('#gridInputInput').focus();
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }

        $('#gridInputInput').val("");
        return false;
    });

    // Duplicate button as functionality changes for the players profile
    $('#btnGridInputSubmitPlayer').click(function () {
        var gridVerifyCoord = $('#grid' + xCoord.toString() + yCoord.toString()).html().toString();
        var gridInput = $('#gridInputInput').val().replace(/</g, "&lt;").replace(/>/g, "&gt;").toString();
        if (gridInput.toUpperCase() == gridVerifyCoord.toString()) {
            $('#riskGridValid').show();
            totalRisk = 0;
            localStorage.setItem("totalRisk", totalRisk);
            $('#totalRiskDisplay').html("Total Risk: " + totalRisk.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " at " + riskTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec.");
            window.setTimeout(function () {
                $('#riskGridValid').hide();
                $('#riskClearGrid').hide();

                $('#riskTraced').html("You are not being traced.");
                $('#playerAddress').html("[UNKNOWN]");
                $('#playerStatus').html("CLEAN");
                $('#riskTraced').css("background", "#040515");
            }, 1000);         
        }
        else {
            $('#gridInputInput').focus();
            $('.riskAccessDenied').show();
            window.setTimeout(function () {
                $('.riskAccessDenied').hide();
            }, 1000);
        }

        $('#gridInputInput').val("");
        return false;
    });
    
});