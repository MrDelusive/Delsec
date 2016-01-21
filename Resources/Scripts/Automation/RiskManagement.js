$(document).ready(function () {
    var splashStart = false;
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

    $('#btnRiskDrive').click(function () {
        $('.riskAccessDenied').show();
        window.setTimeout(function () {
            $('.riskAccessDenied').hide();
        }, 1000);
        return false;
    });

    $('#btnRiskAccess').click(function () {
        $('#riskAccessFile').show();
        return false;
    });

    $('#btnCloseRiskAccessFile').click(function () {
        $('#riskAccessFile').hide();
        return false;
    });

    $('#btnRiskAccessID').click(function () {
        var riskInput = $('#riskAccessID').val().replace(/</g, "&lt;").replace(/>/g, "&gt;");
        $('#riskAccessID').val("");
        if (riskInput == "5184828") {
            $('#riskPlayerProfile').show();
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

    $('#btnClearPlayerRisk').click(function () {
        $('#riskTraced').html("You are not being traced.");
        $('#playerAddress').html("[UNKNOWN]");
        $('#playerStatus').html("CLEAN");
        $('#riskTraced').css("background", "#040515");
        totalRisk = 0;
        localStorage.setItem("totalRisk", totalRisk);
        return false;
    });
    

    

    setInterval(function () {
        // RISK CALCULATION //
        riskTick = twelveBitBank * 0.16
                + sixteenBitBank * 0.32
                + fourByteBank * 0.64
                + eightByteBank * 2.56
                + sixteenByteBank * 10.24
                + thirtytwoByteBank * 40.96
                + sixtyfourByteBank * 163.84
        ;
        totalRisk += riskTick;

        localStorage.setItem("totalRisk", totalRisk);
        $('#totalRiskDisplay').html("Total Risk: " + totalRisk.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " at " + riskTick.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk/Sec.");

        if (totalRisk >= 10000) {
            $('#riskTraced').html("The FDI has detected unusual activities from your crawlers, and have begun efforts to start tracking you down.");
            $('#riskTraced').css("background", "#260515");
            $('#playerStatus').html("QUESTIONABLE");
        }
        if (totalRisk >= 100000) {
            $('#riskTraced').html("The FDI has started tracing you.");
            $('#riskTraced').css("background", "#480515");
            $('#playerStatus').html("TRACING");
        }
        if (totalRisk >= 1000000) {
            $('#riskTraced').html("The FDI are close to finding your address.");
            $('#riskTraced').css("background", "#6a0515");
            $('#playerStatus').html("DANGEROUS");
        }

        if (totalRisk >= 10000000) {
            $('#riskTraced').html("The FDI have found your address and are on their way.");
            $('#riskTraced').css("background", "#8c0515");
            $('#playerAddress').html("21 Hump Street");
            $('#playerStatus').html("PENDING ARREST");
        }

        if (totalRisk >= 11000000) {
            alert("There's a knock on your door. It's the FDI. They have come to take you to Jail.");
            totalRisk = 0;
            money = 0;
            // Update local vars so they cant tick if the user waits.
            twelveBitBank = 0;
            sixteenBitBank = 0;
            fourByteBank = 0;
            eightByteBank = 0;
            sixteenByteBank = 0;
            thirtytwoByteBank = 0;
            sixtyfourByteBank = 0;

            // update localStorage
            localStorage.setItem("money", money);
            localStorage.setItem("totalRisk", totalRisk);
            localStorage.setItem("twelveBitBank", 0);
            localStorage.setItem("sixteenBitBank", 0);
            localStorage.setItem("fourByteBank", 0);
            localStorage.setItem("eightByteBank", 0);
            localStorage.setItem("sixteenByteBank", 0);
            localStorage.setItem("thirtytwoByteBank", 0);
            localStorage.setItem("sixtyfourByteBank", 0);
            alert("After spending some time in jail, you lose your money and the illegal items that got you caught.");

            $('#riskTraced').html("You are not being traced.");
            $('#playerAddress').html("[UNKNOWN]");
            $('#playerStatus').html("CLEAN");
            $('#riskTraced').css("background", "#040515");
            location.reload();
        }
    }, 1000);
});