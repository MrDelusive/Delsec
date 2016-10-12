// on enter pressed
$("#console").keydown(function (e) {
    if (e.which == 13) {
        $('#btnIncrement').prop('disabled', true);
        $('#btnWarriorIncrement').prop('disabled', true);
        $('#btnHealerIncrement').prop('disabled', true);
        $('#btnRogueIncrement').prop('disabled', true);
        

        $('#mainGameWindow').append(currentDirectory + $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;") + '<br />');
        var input = $('#txtSubmit').val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        var inputArray = input.split(" ");
        if (input == "test")
            $('#mainGameWindow').append('Test string accepted.<br />');
        else if (input.toLowerCase() == "help") {
            $('#mainGameWindow').append('help<br />about<br />');
            if (userClass == "Warrior") {
                $('#mainGameWindow').append('dir [DIRECTORY]<br />');
                $('#mainGameWindow').append('cd [DIRECTORY]<br />');
                $('#mainGameWindow').append('build [FILE_NAME]<br />');
                $('#mainGameWindow').append('run [PROCESS_NAME]<br />');
            }
        }
        else if (input.toLowerCase() == "about") {
            $('#mainGameWindow').append(
                "Delsec has been in development since around 2015 maybe even 2014, can't remember.<br /> It's slowly coming along. So much I want to add. The more I add, the more I want to add. <br />" +
                "I don't know exactly how many lines of code the game has now, but I'd put it maybe around 10,000 - 25,000. divided into nearly 100 JavaScript files, 1 index.html, and 16 CSS files.<br />" +
                "I hope you enjoy the game!");
        }

        // DIR
        else if (inputArray[0].toLowerCase() == "dir") {
            if (inputArray.length < 2)
                $('#mainGameWindow').append("Please specify directory (e.g. dir v:/)<br />");
            else if ((inputArray[1].toLowerCase() == "v:" || inputArray[1].toLowerCase() == "v" || inputArray[1].toLowerCase() == "v:/") && userClass == "Warrior") {
                $('#mainGameWindow').append("---------------------------------------------------------------------------------------------------------------<br />" +
                                            "18/08/2016 &nbsp; 05:45 AM &nbsp; &lt; DIR &gt; &nbsp; Delsec &nbsp; <br />" +
                                            "14/08/2016 &nbsp; 12:15 PM &nbsp; &lt; DIR &gt; &nbsp; Clientdata &nbsp; <br />"
                    );
            }
            else if (inputArray[1].toLowerCase() == "v:/clientdata" && userClass == "Warrior") {
                $('#mainGameWindow').append("---------------------------------------------------------------------------------------------------------------<br />" +
                                            "18/08/2016 &nbsp; 01:12 AM &nbsp; &lt; DIR &gt; &nbsp; 5184828 &nbsp; <br />"
                    );
            }
            else if (inputArray[1].toLowerCase() == "v:/clientdata/5184828" && userClass == "Warrior") {
                $('#mainGameWindow').append("---------------------------------------------------------------------------------------------------------------<br />" +
                                            "18/08/2016 &nbsp; 02:42 AM &nbsp; &nbsp; &nbsp; userdata.bat &nbsp; <br />"
                    );
            }
            else if (inputArray[1].toLowerCase() == "v:/delsec" && userClass == "Warrior") {
                $('#mainGameWindow').append("---------------------------------------------------------------------------------------------------------------<br />" +
                                            "18/08/2016 &nbsp; 01:12 AM &nbsp; &lt; DIR &gt; &nbsp; Masterdata &nbsp; <br />" +
                                            "16/08/2016 &nbsp; 11:42 AM &nbsp; &lt; DIR &gt; &nbsp; Accounts &nbsp; <br />" +
                                            "12/08/2016 &nbsp; 01:24 PM &nbsp; &lt; DIR &gt; &nbsp; Sourcecode &nbsp; <br />"
                    );
            }
            else
                $('#mainGameWindow').append(inputArray[1] + " cannot be catalogued.<br />");
        }

        // CD
        else if (inputArray[0].toLowerCase() == "cd" && userClass == "Warrior") {
            if (inputArray.length < 2)
                $('#mainGameWindow').append("ERROR: Enter the destination. (e.g cd v:/delsec)<br />");
            else if ( inputArray[1].toLowerCase() == "v:/delsec" )
                currentDirectory = "V:/Delsec>";      
            else
                $('#mainGameWindow').append(inputArray[1] + " is not a valid Directory.<br />");
        }
            
        // BUILD
        else if (inputArray[0].toLowerCase() == "build" && userClass == "Warrior") {
            if (inputArray.length < 2)
                $('#mainGameWindow').append("ERROR: Enter the program you would like to build in the command line (e.g: build efficiency1)<br />");
            else if (inputArray[1].toLowerCase() == "efficiency_1.js" || inputArray[1].toLowerCase() == "efficiency_1") {
                $('#mainGameWindow').append("Building Efficiency_1.js Please Wait...<br />");
                $('#currentDir').hide();
                $('#currentDirInput').hide();
                window.setTimeout(function () {
                    efficiencyCode++; // Doing this way for display purposes.
                    $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                    localStorage.setItem("efficiencyCode", efficiencyCode);
                    $('#currentDir').show();
                    $('#currentDirInput').show();
                    $('#mainGameWindow').append("Efficiency_1.js has been built and added.<br />");
                }, buildTimer * 1000);
            }
            else if ((inputArray[1].toLowerCase() == "efficiency_2.js" || inputArray[1].toLowerCase() == "efficiency_2") && currentComputingPower >= 5) {
                $('#mainGameWindow').append("Building Efficiency_2.js Please Wait...<br />");
                $('#currentDir').hide();
                $('#currentDirInput').hide();
                window.setTimeout(function () {
                    efficiency2Code++;
                    $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                    localStorage.setItem("efficiency2Code", efficiency2Code);
                    $('#currentDir').show();
                    $('#currentDirInput').show();
                    $('#mainGameWindow').append("Efficiency_2.js has been built and added.<br />");
                }, buildTimer * 1000);
            }
            else if ((inputArray[1].toLowerCase() == "scatterlogic.js" || inputArray[1].toLowerCase() == "scatterlogic") && currentComputingPower >= 10) {
                $('#mainGameWindow').append("Building Scatterlogic.js Please Wait...<br />");
                $('#currentDir').hide();
                $('#currentDirInput').hide();
                window.setTimeout(function () {
                    scatterLogicCode++;
                    $('#warriorCodeScatterLogicResult').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
                    $('#scatterLogicBombAmt').html(scatterLogicCode + " Scatter Logic Bomb(s) Available.");
                    localStorage.setItem("scatterLogicCode", scatterLogicCode);
                    $('#currentDir').show();
                    $('#currentDirInput').show();
                    $('#mainGameWindow').append("scatterlogic.js built. " + scatterLogicCode + " Scatter Logic Bomb(s) Available.<br />");
                }, buildTimer * 1000);
            }
            else if ((inputArray[1].toLowerCase() == "autogenerate_efficiency_1.js" || inputArray[1].toLowerCase() == "autogenerate_efficiency_1") && currentComputingPower >= 75 && (currentComputingPowerUsage + 10) <= currentComputingPower) {
                $('#mainGameWindow').append("Building Autogenerate_Efficiency_1.js Please Wait...<br />");
                $('#currentDir').hide();
                $('#currentDirInput').hide();
                window.setTimeout(function () {
                    autoEfficiency1Code += 1;
                    $('#warriorCodeAutoEfficiency1Result').html("Efficiency_1.js Auto Coders Running: " + autoEfficiency1Code + "<br />Using a total of " + (autoEfficiency1Code * 10) + "KB Computing Power.");
                    localStorage.setItem("autoEfficiency1Code", autoEfficiency1Code);
                    currentComputingPowerUsage += 10;
                    localStorage.setItem("currentComputingPowerUsage", currentComputingPowerUsage);
                    $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
                    autoEfficiency1CompleteCycles = Math.floor(autoEfficiency1Code / efficiencyCodeArray.length);
                    autoEfficiency1Remainder = autoEfficiency1Code % efficiencyCodeArray.length;

                    if (autoEfficiency1CompleteCycles > 0) {
                        clearInterval(autoEfficiency1CompleteInterval); // clear previous interval
                        autoEfficiency1CompleteInterval = setInterval(function () {
                            efficiencyCode += autoEfficiency1CompleteCycles;
                            $('#warriorCodeEfficiency1Result').html("Code compiled: " + efficiencyCode + " Times for $" + (efficiencyCode * 0.24).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                            localStorage.setItem("efficiencyCode", efficiencyCode);

                        }, 1000);
                    }
                    if (autoEfficiency1Remainder > 0) {
                        clearInterval(autoEfficiency1Interval); // clear previous interval
                        autoEfficiency1Interval = setInterval(function () {
                            for (var x = 0; x < autoEfficiency1Remainder; x++) {
                                $('#btnWriteEfficiencyCode').click();
                            }
                        }, 1000);
                    }
                    $('#currentDir').show();
                    $('#currentDirInput').show();
                    $('#mainGameWindow').append("Autogenerate_Efficiency_1.js has been built and added.<br />");
                }, buildTimer * 1000);
            }

            else if ((inputArray[1].toLowerCase() == "autogenerate_efficiency_2.js" || inputArray[1].toLowerCase() == "autogenerate_efficiency_2") && currentComputingPower >= 250 && (currentComputingPowerUsage + 25) <= currentComputingPower) {
                $('#mainGameWindow').append("Building Autogenerate_Efficiency_2.js Please Wait...<br />");
                $('#currentDir').hide();
                $('#currentDirInput').hide();
                window.setTimeout(function () {
                    autoEfficiency2Code += 1;
                    $('#warriorCodeAutoEfficiency2Result').html("Efficiency_2.js Auto Coders Running: " + autoEfficiency2Code + "<br />Using a total of " + (autoEfficiency2Code * 25) + "KB Computing Power.");
                    currentComputingPowerUsage += 25;
                    localStorage.setItem("currentComputingPowerUsage", currentComputingPowerUsage);
                    localStorage.setItem("autoEfficiency2Code", autoEfficiency2Code);
                    $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                            " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");

                    autoEfficiency2CompleteCycles = Math.floor(autoEfficiency2Code / efficiency2CodeArray.length);
                    autoEfficiency2Remainder = autoEfficiency2Code % efficiency2CodeArray.length;
                    
                    if (autoEfficiency2Remainder > 0) {
                        clearInterval(autoEfficiency2Interval); // clear previous interval
                        autoEfficiency2Interval = setInterval(function () {
                            for (var x = 0; x < autoEfficiency2Remainder; x++) {
                                $('#btnWriteEfficiency2Code').click();
                            }
                        }, 1000);
                    }
                    if (autoEfficiency2CompleteCycles > 0) {
                        clearInterval(autoEfficiency2CompleteInterval); // clear previous interval
                        autoEfficiency2CompleteInterval = setInterval(function () {
                            efficiency2Code += autoEfficiency2CompleteCycles;
                            $('#warriorCodeEfficiency2Result').html("Code compiled: " + efficiency2Code + " Times for $" + (efficiency2Code * 0.48).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Boost to Generate Clicks. ");
                            localStorage.setItem("efficiency2Code", efficiency2Code);

                        }, 1000);
                    }

                    $('#currentDir').show();
                    $('#currentDirInput').show();
                    $('#mainGameWindow').append("Autogenerate_Efficiency_2.js has been built and added.<br />");
                }, buildTimer * 1000);
            }

            else
                $('#mainGameWindow').append(inputArray[1] + " is not a valid program, or you do not have enough Free Computing Power to build it.<br />");
        }

        // RUN
        else if (inputArray[0].toLowerCase() == "run" && userClass == "Warrior") {
            if (inputArray.length < 2)
                $('#mainGameWindow').append("ERROR: Enter the program you would like to run in the command line (e.g: run scatterlogic)<br />");
            else if ((inputArray[1].toLowerCase() == "scatterlogic.js" || inputArray[1].toLowerCase() == "scatterlogic") && scatterLogicCode > 0)
                $('#btnScatterLogicBomb').click();
            else if ((inputArray[1].toLowerCase() == "scatterlogic.js" || inputArray[1].toLowerCase() == "scatterlogic") && scatterLogicCode == 0)
                $('#mainGameWindow').append("No Scatter Logic Bomb processes found.<br />");
            else
                $('#mainGameWindow').append(inputArray[1] + " does not exist or is not a process that can be run.<br />");
        }

            // COOKIES
        else if (input.toLowerCase() == "i love delsec")
            $('#mainGameWindow').append("Noice.<br />");
        else if (input.toLowerCase() == "fite me irl")
            $('#mainGameWindow').append("U wot m8<br />");
        else if (input.toLowerCase() == "scrub")
            $('#mainGameWindow').append("ye<br />");
        else if (input.toLowerCase() == "i can't believe you actually coded in a reply to this")
            $('#mainGameWindow').append("Yeah, I got bored.<br />");
        else if (input.toLowerCase() == "hello" || input.toLowerCase() == "hi")
            $('#mainGameWindow').append("Hi.<br />");
        else if (input.toLowerCase() == "how are you?" || input.toLowerCase() == "how are you")
            $('#mainGameWindow').append("I'm a Console Command Line, How do you think I am? <br />");
        else if (input.toLowerCase() == "tell me a joke")
            $('#mainGameWindow').append("What's red and bad for your teeth? Red Paint.<br />");
        else if (input.toLowerCase() == "nextgen")
            $('#mainGameWindow').append("Delsec Introduces revolutionary new mechanics like: replying to you (inonly1percentofthecasesdonottakeatfacevalue) and fish reaction ai!<br />");
        else if (input.toLowerCase() == "1 + 1")
            $('#mainGameWindow').append("Do I look like a damn calculator?<br />");
        else if (input.toLowerCase() == "are you real?" || input.toLowerCase() == "are you real")
            $('#mainGameWindow').append("How can I be real if our eyes aren't real?<br />");
        else if (input.toLowerCase() == "wat" || input.toLowerCase() == "what")
            $('#mainGameWindow').append("?<br />");
        else if (input.toLowerCase() == "gg mid")
            $('#mainGameWindow').append("BestPudgehookz2012 - Good Game, Well Played!<br />");
        else if (input.toLowerCase() == "pudge misses hook")
            $('#mainGameWindow').append("--Excessive Pinging.--<br />ioJungleonly - Good Game, Well Played!<br />SADBOIZ - Good Game, Well Played!<br />harambewozinocent - Good Game, Well Played!<br />");


            // DEV CHEATS (easier than right clicking to the actual console) Lazy i know. Who does that, builds an in game console just cause they CBF going to the browser console...
        else if (input == "dsfa") {
            money += 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dskfa") {
            money += 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }
        else if (input == "dsdqd") {
            money += 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        else if (input == "dspoor") {
            money = 0;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
        }

        else if (input == "dscoder") {
            efficiencyCode = 5;
            efficiency2Code = 10;
            scatterLogicCode = 20;
            localStorage.setItem("efficiencyCode", efficiencyCode);
            localStorage.setItem("efficiency2Code", efficiency2Code);
            localStorage.setItem("scatterLogicCode", scatterLogicCode);
        }

        else if (input == "dsnoclass") {
            userClass = "None";
            localStorage.setItem("userClass", userClass);
        }

            //else if (input == "dsmotherlode") {
            //    money += 1000000000000000;
            //    localStorage.setItem("money", money);
            //    $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            //    $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            //    $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            //}

            //else if (input == "dsrisk") {
            //    totalRisk += 10000000;
            //    localStorage.setItem("totalRisk", totalRisk);
            //}

            //else if (input == "dsrisk2") {
            //    riskDetectionAmt += 10000000000000000;
            //    localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
            //}

            else if (input == "dspack") 
                totalPackets += 10000000000000000;
            //}
            //else if (input == "dspack2") {
            //    totalPackets += 10000000000000000;
            //    totalPacketsRussian += 10000000000000000;
            //    totalPacketsVipersec += 10000000000000000;
            //    totalPacketsChimerasec += 10000000000000000;
            //    totalPacketsGriffonBank += 10000000000000000;
            //}
            //else if (input == "dspack3") {
            //    totalPackets += 10000000000000000;
            //    totalPacketsRussian += 10000000000000000;
            //}
            //else if (input == "dspack4") {
            //    totalPackets += 10000000000000000;
            //    totalPacketsRussian += 9000000000000000;
            //}
            //else if (input == "dspackr") {
            //    totalPacketsRussian += 10000000000000000;
            //}
            //else if (input == "dspackv") {
            //    totalPacketsVipersec += 10000000000000000;
            //}
            //else if (input == "dspackc") {
            //    totalPacketsChimerasec += 10000000000000000;
            //}
            //else if (input == "dspackg") {
            //    totalPacketsGriffonBank += 10000000000000000;
            //}

            else if (input == "dsuniversal") {
                universalEnergyGenerated = 2500000;
            }

        else
            $('#mainGameWindow').append('Entry ' + input + ' is not recognised as an internal or external command.<br />');
        $('#txtSubmit').val("");
        $('#txtSubmit').focus();
        
        $('#currentDir').html(currentDirectory);
        //keep the gameWindow always scrolled to bottom.
        $('#mainGameWindow').scrollTop($('#mainGameWindow')[0].scrollHeight);
        return false;
    }
});
// if clicked anywhere, focus the textbox
$(document).click(function () {

    $('#txtSubmit').focus();
});