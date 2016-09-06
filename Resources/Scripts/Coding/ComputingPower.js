$(document).ready(function () {

    $('#btnBuy1KBComputingPower').click(function () {
        if (money >= 25) {
            money -= 25;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            currentComputingPower += 1;
            localStorage.setItem("currentComputingPower", currentComputingPower);
            if (currentComputingPower <= 1024)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            else if (currentComputingPower > 1024 && currentComputingPower <= 1048576)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + (currentComputingPowerUsage / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " MB / " + (currentComputingPower / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " MB");
        }
        return false;
    });

    $('#btnBuy8KBComputingPower').click(function () {
        if (money >= 231.53) {
            money -= 231.53;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            currentComputingPower += 8;
            localStorage.setItem("currentComputingPower", currentComputingPower);
            if (currentComputingPower <= 1024)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            else if (currentComputingPower > 1024 && currentComputingPower <= 1048576)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + (currentComputingPowerUsage / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " MB / " + (currentComputingPower / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " MB");
        }
        return false;
    });

    $('#btnBuy64KBComputingPower').click(function () {
        if (money >= 2144.15) {
            money -= 2144.15;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

            currentComputingPower += 64;
            localStorage.setItem("currentComputingPower", currentComputingPower);
            if (currentComputingPower <= 1024)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + currentComputingPowerUsage.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " KB / " + currentComputingPower.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " KB");
            else if (currentComputingPower > 1024 && currentComputingPower <= 1048576)
                $('#currentComputerPower').html('Current Computing Power Usage/Capacity: ' + (currentComputingPowerUsage / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() +
                    " MB / " + (currentComputingPower / 1024).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " MB");
        }
        return false;
    });
});