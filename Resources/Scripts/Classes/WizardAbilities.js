$(document).ready(function () {
    $('#btnWizardHeader').click(function () {
        return false;
    });

    $('#btnWizardAbility').click(function () {
        if (money >= 1000 && userClass == "None") {
            userClass = "Wizard";
            localStorage.setItem("userClass", userClass);

            $('#abilities').fadeOut(500);
            $('#btnAbilities').fadeOut(500);
            $("#manualIncrementDisplay").fadeOut(500);

            $("#emailWizardHeading").show(1);
            if (emailWizardDisplayed == "false")
                numUnreadEmails++;
            emailWizardDisplayed = "true";
            localStorage.setItem("numUnreadEmails", numUnreadEmails);
            localStorage.setItem("emailWizardDisplayed", emailWizardDisplayed);

            $('#wizardAbilities').delay(500);
            $('#btnWizardAbilities').delay(500);
            $("#autoWizardGenerate").delay(500);

            $('#wizardAbilities').fadeIn(500);
            $('#btnWizardAbilities').fadeIn(500);
            $("#autoWizardGenerate").fadeIn(500);
            $("#btnRiskManagement").fadeIn(500);
            money -= 1000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());

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

            currentRussian6BitPrice = 35.20 + 35.20 * russianSixBitBank / 10;
            $('#btnBuyRussian6BitCrawler').html("Buy 6 Bit Russian Tech Crawler (16 Packets/sec) - $" + currentRussian6BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            currentRussian12BitPrice = 2261.6 + 2261.6 * russianTwelveBitBank / 10;
            $('#btnBuyRussian12BitCrawler').html("Buy 12 Bit Russian Tech Crawler (1,024 Packets/sec) - $" + currentRussian12BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.24 RISK/SEC");
            currentRussian16BitPrice = 36185.6 + 36185.6 * russianSixteenBitBank / 10;
            $('#btnBuyRussian16BitCrawler').html("Buy 16 Bit Russian Tech Crawler (16,384 Packets/sec) - $" + currentRussian16BitPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.48 RISK/SEC");
            currentRussian4BytePrice = 72371.2 + 72371.2 * russianFourByteBank / 10;
            $('#btnBuyRussian4ByteCrawler').html("Buy 4 Byte Russian Tech Crawler (32,768 Packets/sec) - $" + currentRussian4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.96 RISK/SEC");
            currentRussian8BytePrice = 144742.4 + 144742.4 * russianEightByteBank / 10;
            $('#btnBuyRussian8ByteCrawler').html("Buy 8 Byte Russian Tech Crawler (65,536 Packets/sec) - $" + currentRussian8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.92 RISK/SEC");
            currentRussian16BytePrice = 289484.8 + 289484.8 * russianSixteenByteBank / 10;
            $('#btnBuyRussian16ByteCrawler').html("Buy 16 Byte Russian Tech Crawler (131,072 Packets/sec) - $" + currentRussian16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3.84 RISK/SEC");
            currentRussian32BytePrice = 578969.6 + 578969.6 * russianThirtyTwoByteBank / 10;
            $('#btnBuyRussian32ByteCrawler').html("Buy 32 Byte Russian Tech Crawler (262,144 Packets/sec) - $" + currentRussian32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7.68 RISK/SEC");
            currentRussian64BytePrice = 1157939.2 + 1157939.2 * russianSixtyFourByteBank / 10;
            $('#btnBuyRussian64ByteCrawler').html("Buy 64 Byte Russian Tech Crawler (524,288 Packets/sec) - $" + currentRussian64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15.36 RISK/SEC");
            currentRussian128BytePrice = 2315878.4 + 2315878.4 * russianOneTwentyEightByteBank / 10;
            $('#btnBuyRussian128ByteCrawler').html("Buy 128 Byte Russian Tech Crawler (1,048,576 Packets/sec) - $" + currentRussian128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+30.72 RISK/SEC");
            currentRussian256BytePrice = 4631756.8 + 4631756.8 * russianTwoFiftySixByteBank / 10;
            $('#btnBuyRussian256ByteCrawler').html("Buy 256 Byte Russian Tech Crawler (~2 Million Packets/sec) - $" + currentRussian256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+61.44 RISK/SEC");
            currentRussian512BytePrice = 9263513.6 + 9263513.6 * russianFiveTwelveByteBank / 10;
            $('#btnBuyRussian512ByteCrawler').html("Buy 512 Byte Russian Tech Crawler (~4.1 Million Packets/sec) - $" + currentRussian512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+122.88 RISK/SEC");
            currentRussian1KBPrice = 18527027.2 + 18527027.2 * russianOneKBBank / 10;
            $('#btnBuyRussian1KBCrawler').html("Buy 1KB Russian Tech Crawler (~8.3 Million Packets/sec) - $" + currentRussian1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+245.76 RISK/SEC");
            currentRussian2KBPrice = 37054054.4 + 37054054.4 * russianTwoKBBank / 10;
            $('#btnBuyRussian2KBCrawler').html("Buy 2KB Russian Tech Crawler (~16.7 Million Packets/sec) - $" + currentRussian2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+491.52 RISK/SEC");
            currentRussian4KBPrice = 74108108.8 + 74108108.8 * russianFourKBBank / 10;
            $('#btnBuyRussian4KBCrawler').html("Buy 4KB Russian Tech Crawler (~33.4 Million Packets/sec) - $" + currentRussian4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+983.04 RISK/SEC");
            currentRussian8KBPrice = 148216217.6 + 148216217.6 * russianEightKBBank / 10;
            $('#btnBuyRussian8KBCrawler').html("Buy 8KB Russian Tech Crawler (~67.1 Million Packets/sec) - $" + currentRussian8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,966.08 RISK/SEC");
            currentRussian16KBPrice = 296432435.2 + 296432435.2 * russianSixteenKBBank / 10;
            $('#btnBuyRussian16KBCrawler').html("Buy 16KB Russian Tech Crawler (~134.2 Million Packets/sec) - $" + currentRussian16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+3,932.16 RISK/SEC");
            currentRussian32KBPrice = 592864870.4 + 592864870.4 * russianThirtyTwoKBBank / 10;
            $('#btnBuyRussian32KBCrawler').html("Buy 32KB Russian Tech Crawler (~268.4 Million Packets/sec) - $" + currentRussian32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+7,864.32 RISK/SEC");
            currentRussian64KBPrice = 1185729740.8 + 1185729740.8 * russianSixtyFourKBBank / 10;
            $('#btnBuyRussian64KBCrawler').html("Buy 64KB Russian Tech Crawler (~536.8 Million Packets/sec) - $" + currentRussian64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+15,728.64 RISK/SEC");
            currentRussian128KBPrice = 2371459481.6 + 2371459481.6 * russianOneTwentyEightKBBank / 10;
            $('#btnBuyRussian128KBCrawler').html("Buy 128KB Russian Tech Crawler (~1.07 Billion Packets/sec) - $" + currentRussian128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+31,457.28 RISK/SEC");
            currentRussian256KBPrice = 4742918963.2 + 4742918963.2 * russianTwoFiftySixKBBank / 10;
            $('#btnBuyRussian256KBCrawler').html("Buy 256KB Russian Tech Crawler (~2.14 Billion Packets/sec) - $" + currentRussian256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+62,914.56 RISK/SEC");
            currentRussian512KBPrice = 9485837926.4 + 9485837926.4 * russianFiveTwelveKBBank / 10;
            $('#btnBuyRussian512KBCrawler').html("Buy 512KB Russian Tech Crawler (~4.29 Billion Packets/sec) - $" + currentRussian512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+125,829.12 RISK/SEC");
            currentRussian1MBPrice = 18971675852.8 + 18971675852.8 * russianOneMBBank / 10;
            $('#btnBuyRussian1MBCrawler').html("Buy 1MB Russian Tech Crawler (~8.59 Billion Packets/sec) - $" + currentRussian1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+251,658.24 RISK/SEC");
            currentRussian2MBPrice = 37943351705.6 + 37943351705.6 * russianTwoMBBank / 10;
            $('#btnBuyRussian2MBCrawler').html("Buy 2MB Russian Tech Crawler (~17.18 Billion Packets/sec) - $" + currentRussian2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+503,316.48 RISK/SEC");
            currentRussian4MBPrice = 75886703411.2 + 75886703411.2 * russianFourMBBank / 10;
            $('#btnBuyRussian4MBCrawler').html("Buy 4MB Russian Tech Crawler (~34.36 Billion Packets/sec) - $" + currentRussian4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,006,632.96 RISK/SEC");
            currentRussian8MBPrice = 151773406822.4 + 151773406822.4 * russianEightMBBank / 10;
            $('#btnBuyRussian8MBCrawler').html("Buy 8MB Russian Tech Crawler (~68.72 Billion Packets/sec) - $" + currentRussian8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,013,265.92 RISK/SEC");
            currentRussian16MBPrice = 303546813644.8 + 303546813644.8 * russianSixteenMBBank / 10;
            $('#btnBuyRussian16MBCrawler').html("Buy 16MB Russian Tech Crawler (~137.44 Billion Packets/sec) - $" + currentRussian16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+4,026,531.84 RISK/SEC");

            currentVipersec1BytePrice = 20560 + 20560 * vipersecOneByteBank / 10;
            $('#btnBuyVipersec1ByteCrawler').html("Buy 1 Byte Vipersec Crawler (8,192 Packets/sec) - $" + currentVipersec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            currentVipersec2BytePrice = 41120 + 41120 * vipersecTwoByteBank / 10;
            $('#btnBuyVipersec2ByteCrawler').html("Buy 2 Byte Vipersec Crawler (16,384 Packets/sec) - $" + currentVipersec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            currentVipersec4BytePrice = 82240 + 82240 * vipersecFourByteBank / 10;
            $('#btnBuyVipersec4ByteCrawler').html("Buy 4 Byte Vipersec Crawler (32,768 Packets/sec) - $" + currentVipersec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            currentVipersec8BytePrice = 164480 + 164480 * vipersecEightByteBank / 10;
            $('#btnBuyVipersec8ByteCrawler').html("Buy 8 Byte Vipersec Crawler (65,536 Packets/sec) - $" + currentVipersec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            currentVipersec16BytePrice = 328960 + 328960 * vipersecSixteenByteBank / 10;
            $('#btnBuyVipersec16ByteCrawler').html("Buy 16 Byte Vipersec Crawler (131,072 Packets/sec) - $" + currentVipersec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            currentVipersec32BytePrice = 657920 + 657920 * vipersecThirtyTwoByteBank / 10;
            $('#btnBuyVipersec32ByteCrawler').html("Buy 32 Byte Vipersec Crawler (262,144 Packets/sec) - $" + currentVipersec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            currentVipersec64BytePrice = 1315840 + 1315840 * vipersecSixtyFourByteBank / 10;
            $('#btnBuyVipersec64ByteCrawler').html("Buy 64 Byte Vipersec Crawler (524,288 Packets/sec) - $" + currentVipersec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            currentVipersec128BytePrice = 2631680 + 2631680 * vipersecOneTwentyEightByteBank / 10;
            $('#btnBuyVipersec128ByteCrawler').html("Buy 128 Byte Vipersec Crawler (1,048,576 Packets/sec) - $" + currentVipersec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            currentVipersec256BytePrice = 5263360 + 5263360 * vipersecTwoFiftySixByteBank / 10;
            $('#btnBuyVipersec256ByteCrawler').html("Buy 256 Byte Vipersec Crawler (~2 Million Packets/sec) - $" + currentVipersec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            currentVipersec512BytePrice = 10526720 + 10526720 * vipersecFiveTwelveByteBank / 10;
            $('#btnBuyVipersec512ByteCrawler').html("Buy 512 Byte Vipersec Crawler (~4.1 Million Packets/sec) - $" + currentVipersec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            currentVipersec1KBPrice = 21053440 + 21053440 * vipersecOneKBBank / 10;
            $('#btnBuyVipersec1KBCrawler').html("Buy 1KB Vipersec Crawler (~8.3 Million Packets/sec) - $" + currentVipersec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            currentVipersec2KBPrice = 42106880 + 42106880 * vipersecTwoKBBank / 10;
            $('#btnBuyVipersec2KBCrawler').html("Buy 2KB Vipersec Crawler (~16.7 Million Packets/sec) - $" + currentVipersec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            currentVipersec4KBPrice = 84213760 + 84213760 * vipersecFourKBBank / 10;
            $('#btnBuyVipersec4KBCrawler').html("Buy 4KB Vipersec Crawler (~33.4 Million Packets/sec) - $" + currentVipersec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            currentVipersec8KBPrice = 168427520 + 168427520 * vipersecEightKBBank / 10;
            $('#btnBuyVipersec8KBCrawler').html("Buy 8KB Vipersec Crawler (~67.1 Million Packets/sec) - $" + currentVipersec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            currentVipersec16KBPrice = 336855040 + 336855040 * vipersecSixteenKBBank / 10;
            $('#btnBuyVipersec16KBCrawler').html("Buy 16KB Vipersec Crawler (~134.2 Million Packets/sec) - $" + currentVipersec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            currentVipersec32KBPrice = 673710080 + 673710080 * vipersecThirtyTwoKBBank / 10;
            $('#btnBuyVipersec32KBCrawler').html("Buy 32KB Vipersec Crawler (~268.4 Million Packets/sec) - $" + currentVipersec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            currentVipersec64KBPrice = 1347420160 + 1347420160 * vipersecSixtyFourKBBank / 10;
            $('#btnBuyVipersec64KBCrawler').html("Buy 64KB Vipersec Crawler (~536.8 Million Packets/sec) - $" + currentVipersec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            currentVipersec128KBPrice = 2694840320 + 2694840320 * vipersecOneTwentyEightKBBank / 10;
            $('#btnBuyVipersec128KBCrawler').html("Buy 128KB Vipersec Crawler (~1.07 Billion Packets/sec) - $" + currentVipersec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            currentVipersec256KBPrice = 5389680640 + 5389680640 * vipersecTwoFiftySixKBBank / 10;
            $('#btnBuyVipersec256KBCrawler').html("Buy 256KB Vipersec Crawler (~2.14 Billion Packets/sec) - $" + currentVipersec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            currentVipersec512KBPrice = 10779361280 + 10779361280 * vipersecFiveTwelveKBBank / 10;
            $('#btnBuyVipersec512KBCrawler').html("Buy 512KB Vipersec Crawler (~4.29 Billion Packets/sec) - $" + currentVipersec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            currentVipersec1MBPrice = 21558722560 + 21558722560 * vipersecOneMBBank / 10;
            $('#btnBuyVipersec1MBCrawler').html("Buy 1MB Vipersec Crawler (~8.59 Billion Packets/sec) - $" + currentVipersec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            currentVipersec2MBPrice = 43117445120 + 43117445120 * vipersecTwoMBBank / 10;
            $('#btnBuyVipersec2MBCrawler').html("Buy 2MB Vipersec Crawler (~17.18 Billion Packets/sec) - $" + currentVipersec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            currentVipersec4MBPrice = 86234890240 + 86234890240 * vipersecFourMBBank / 10;
            $('#btnBuyVipersec4MBCrawler').html("Buy 4MB Vipersec Crawler (~34.36 Billion Packets/sec) - $" + currentVipersec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            currentVipersec8MBPrice = 172469780480 + 172469780480 * vipersecEightMBBank / 10;
            $('#btnBuyVipersec8MBCrawler').html("Buy 8MB Vipersec Crawler (~68.72 Billion Packets/sec) - $" + currentVipersec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            currentVipersec16MBPrice = 344939560960 + 344939560960 * vipersecSixteenMBBank / 10;
            $('#btnBuyVipersec16MBCrawler').html("Buy 16MB Vipersec Crawler (~137.44 Billion Packets/sec) - $" + currentVipersec16MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");

            currentChimerasec1BytePrice = 10280 + 10280 * chimerasecOneByteBank * 0.02;
            $('#btnBuyChimerasec1ByteCrawler').html("Buy 1 Byte Chimerasec Crawler (8,192 Packets/sec) - $" + currentChimerasec1BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.16 RISK/SEC");
            currentChimerasec2BytePrice = 20560 + 20560 * chimerasecTwoByteBank * 0.02;
            $('#btnBuyChimerasec2ByteCrawler').html("Buy 2 Byte Chimerasec Crawler (16,384 Packets/sec) - $" + currentChimerasec2BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.32 RISK/SEC");
            currentChimerasec4BytePrice = 41120 + 41120 * chimerasecFourByteBank * 0.02;
            $('#btnBuyChimerasec4ByteCrawler').html("Buy 4 Byte Chimerasec Crawler (32,768 Packets/sec) - $" + currentChimerasec4BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+0.64 RISK/SEC");
            currentChimerasec8BytePrice = 82240 + 82240 * chimerasecEightByteBank * 0.02;
            $('#btnBuyChimerasec8ByteCrawler').html("Buy 8 Byte Chimerasec Crawler (65,536 Packets/sec) - $" + currentChimerasec8BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1.28 RISK/SEC");
            currentChimerasec16BytePrice = 164480 + 164480 * chimerasecSixteenByteBank * 0.02;
            $('#btnBuyChimerasec16ByteCrawler').html("Buy 16 Byte Chimerasec Crawler (131,072 Packets/sec) - $" + currentChimerasec16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2.56 RISK/SEC");
            currentChimerasec32BytePrice = 328960 + 328960 * chimerasecThirtyTwoByteBank * 0.02;
            $('#btnBuyChimerasec32ByteCrawler').html("Buy 32 Byte Chimerasec Crawler (262,144 Packets/sec) - $" + currentChimerasec32BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
            currentChimerasec64BytePrice = 657920 + 657920 * chimerasecSixtyFourByteBank * 0.02;
            $('#btnBuyChimerasec64ByteCrawler').html("Buy 64 Byte Chimerasec Crawler (524,288 Packets/sec) - $" + currentChimerasec64BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10.24 RISK/SEC");
            currentChimerasec128BytePrice = 1315840 + 1315840 * chimerasecOneTwentyEightByteBank * 0.02;
            $('#btnBuyChimerasec128ByteCrawler').html("Buy 128 Byte Chimerasec Crawler (1,048,576 Packets/sec) - $" + currentChimerasec128BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20.48 RISK/SEC");
            currentChimerasec256BytePrice = 2631680 + 2631680 * chimerasecTwoFiftySixByteBank * 0.02;
            $('#btnBuyChimerasec256ByteCrawler').html("Buy 256 Byte Chimerasec Crawler (~2 Million Packets/sec) - $" + currentChimerasec256BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+40.96 RISK/SEC");
            currentChimerasec512BytePrice = 5263360 + 5263360 * chimerasecFiveTwelveByteBank * 0.02;
            $('#btnBuyChimerasec512ByteCrawler').html("Buy 512 Byte Chimerasec Crawler (~4.1 Million Packets/sec) - $" + currentChimerasec512BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+81.92 RISK/SEC");
            currentChimerasec1KBPrice = 10526720 + 10526720 * chimerasecOneKBBank * 0.02;
            $('#btnBuyChimerasec1KBCrawler').html("Buy 1KB Chimerasec Crawler (~8.3 Million Packets/sec) - $" + currentChimerasec1KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+163.84 RISK/SEC");
            currentChimerasec2KBPrice = 21053440 + 21053440 * chimerasecTwoKBBank * 0.02;
            $('#btnBuyChimerasec2KBCrawler').html("Buy 2KB Chimerasec Crawler (~16.7 Million Packets/sec) - $" + currentChimerasec2KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+327.68 RISK/SEC");
            currentChimerasec4KBPrice = 42106880 + 42106880 * chimerasecFourKBBank * 0.02;
            $('#btnBuyChimerasec4KBCrawler').html("Buy 4KB Chimerasec Crawler (~33.4 Million Packets/sec) - $" + currentChimerasec4KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+655.36 RISK/SEC");
            currentChimerasec8KBPrice = 84213760 + 84213760 * chimerasecEightKBBank * 0.02;
            $('#btnBuyChimerasec8KBCrawler').html("Buy 8KB Chimerasec Crawler (~67.1 Million Packets/sec) - $" + currentChimerasec8KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,310.72 RISK/SEC");
            currentChimerasec16KBPrice = 168427520 + 168427520 * chimerasecSixteenKBBank * 0.02;
            $('#btnBuyChimerasec16KBCrawler').html("Buy 16KB Chimerasec Crawler (~134.2 Million Packets/sec) - $" + currentChimerasec16KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+2,621.44 RISK/SEC");
            currentChimerasec32KBPrice = 336855040 + 336855040 * chimerasecThirtyTwoKBBank * 0.02;
            $('#btnBuyChimerasec32KBCrawler').html("Buy 32KB Chimerasec Crawler (~268.4 Million Packets/sec) - $" + currentChimerasec32KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5,242.88 RISK/SEC");
            currentChimerasec64KBPrice = 673710080 + 673710080 * chimerasecSixtyFourKBBank * 0.02;
            $('#btnBuyChimerasec64KBCrawler').html("Buy 64KB Chimerasec Crawler (~536.8 Million Packets/sec) - $" + currentChimerasec64KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+10,485.76 RISK/SEC");
            currentChimerasec128KBPrice = 1347420160 + 1347420160 * chimerasecOneTwentyEightKBBank * 0.02;
            $('#btnBuyChimerasec128KBCrawler').html("Buy 128KB Chimerasec Crawler (~1.07 Billion Packets/sec) - $" + currentChimerasec128KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+20,971.52 RISK/SEC");
            currentChimerasec256KBPrice = 2694840320 + 2694840320 * chimerasecTwoFiftySixKBBank * 0.02;
            $('#btnBuyChimerasec256KBCrawler').html("Buy 256KB Chimerasec Crawler (~2.14 Billion Packets/sec) - $" + currentChimerasec256KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+41,943.04 RISK/SEC");
            currentChimerasec512KBPrice = 5389680640 + 5389680640 * chimerasecFiveTwelveKBBank * 0.02;
            $('#btnBuyChimerasec512KBCrawler').html("Buy 512KB Chimerasec Crawler (~4.29 Billion Packets/sec) - $" + currentChimerasec512KBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+83,886.08 RISK/SEC");
            currentChimerasec1MBPrice = 10779361280 + 10779361280 * chimerasecOneMBBank * 0.02;
            $('#btnBuyChimerasec1MBCrawler').html("Buy 1MB Chimerasec Crawler (~8.59 Billion Packets/sec) - $" + currentChimerasec1MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+167,772.16 RISK/SEC");
            currentChimerasec2MBPrice = 21558722560 + 21558722560 * chimerasecTwoMBBank * 0.02;
            $('#btnBuyChimerasec2MBCrawler').html("Buy 2MB Chimerasec Crawler (~17.18 Billion Packets/sec) - $" + currentChimerasec2MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+335,544.32 RISK/SEC");
            currentChimerasec4MBPrice = 43117445120 + 43117445120 * chimerasecFourMBBank * 0.02;
            $('#btnBuyChimerasec4MBCrawler').html("Buy 4MB Chimerasec Crawler (~34.36 Billion Packets/sec) - $" + currentChimerasec4MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+671,088.64 RISK/SEC");
            currentChimerasec8MBPrice = 86234890240 + 86234890240 * chimerasecEightMBBank * 0.02;
            $('#btnBuyChimerasec8MBCrawler').html("Buy 8MB Chimerasec Crawler (~68.72 Billion Packets/sec) - $" + currentChimerasec8MBPrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+1,342,177.28 RISK/SEC");
            currentChimerasec16MBPrice = 172469780480 + 172469780480 * chimerasecSixteenMBBank * 0.02;
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
            $('#btnBuyGriffonBank16ByteCrawler').html("Buy 16 Byte Griffon Bank Crawler (131,072 Packets/sec) - $" + currentGriffonBank16BytePrice.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + "<br />+5.12 RISK/SEC");
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

            $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
        }
        else {
            $('#abilityErrorHeading').html("Need at least $1,000");
            $('#abilityErrorHeading').fadeIn(1);
            $('#abilityErrorHeading').delay(500);
            $('#abilityErrorHeading').fadeOut(500);
        }
        return false;
    });

    $('#btnWizardAbilities').click(function () {
        $('.hidden_Divs').hide();
        $('#wizardAbilities').show();
        return false;
    });

    $('#btnWizardLevel1-1').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            delsecZapperActive = 'true';
            localStorage.setItem("delsecZapperActive", delsecZapperActive);

            $('#delsecZapperDisplay').show(1);
            $('#wizardLevel1Abilities').hide(1);
            $('#delsecZapperAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel1-2').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianZapperActive = 'true';
            localStorage.setItem("russianZapperActive", russianZapperActive);

            $('#russianZapperDisplay').show(1);
            $('#wizardLevel1Abilities').hide(1);
            $('#russianZapperAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel1-3').click(function () {
        if (money >= 10000) {
            money -= 10000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonZapperActive = 'true';
            localStorage.setItem("griffonZapperActive", griffonZapperActive);

            $('#griffonZapperDisplay').show(1);
            $('#wizardLevel1Abilities').hide(1);
            $('#griffonZapperAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel2-1').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chainConnectionActive = 'true';
            localStorage.setItem("chainConnectionActive", chainConnectionActive);

            $('#wizardLevel2Abilities').hide(1);
            $('#chainConnectionAbility').show(1);
        }
        
        return false;
    });
    $('#btnWizardLevel2-2').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            delsecChargerActive = 'true';
            localStorage.setItem("delsecChargerActive", delsecChargerActive);

            $('#delsecChargerDisplay').show(1);
            $('#wizardLevel2Abilities').hide(1);
            $('#delsecChargerAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel2-3').click(function () {
        if (money >= 100000) {
            money -= 100000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecGrowthBenderActive = 'true';
            localStorage.setItem("chimerasecGrowthBenderActive", chimerasecGrowthBenderActive);

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

            localStorage.setItem("chimerasecOneByteBank", chimerasecOneByteBank);
            localStorage.setItem("chimerasecTwoByteBank", chimerasecTwoByteBank);
            localStorage.setItem("chimerasecFourByteBank", chimerasecFourByteBank);
            localStorage.setItem("chimerasecEightByteBank", chimerasecEightByteBank);
            localStorage.setItem("chimerasecSixteenByteBank", chimerasecSixteenByteBank);
            localStorage.setItem("chimerasecThirtyTwoByteBank", chimerasecThirtyTwoByteBank);
            localStorage.setItem("chimerasecSixtyFourByteBank", chimerasecSixtyFourByteBank);
            localStorage.setItem("chimerasecOneTwentyEightByteBank", chimerasecOneTwentyEightByteBank);
            localStorage.setItem("chimerasecTwoFiftySixByteBank", chimerasecTwoFiftySixByteBank);
            localStorage.setItem("chimerasecFiveTwelveByteBank", chimerasecFiveTwelveByteBank);
            localStorage.setItem("chimerasecOneKBBank", chimerasecOneKBBank);
            localStorage.setItem("chimerasecTwoKBBank", chimerasecTwoKBBank);
            localStorage.setItem("chimerasecFourKBBank", chimerasecFourKBBank);
            localStorage.setItem("chimerasecEightKBBank", chimerasecEightKBBank);
            localStorage.setItem("chimerasecSixteenKBBank", chimerasecSixteenKBBank);
            localStorage.setItem("chimerasecThirtyTwoKBBank", chimerasecThirtyTwoKBBank);
            localStorage.setItem("chimerasecSixtyFourKBBank", chimerasecSixtyFourKBBank);
            localStorage.setItem("chimerasecOneTwentyEightKBBank", chimerasecOneTwentyEightKBBank);
            localStorage.setItem("chimerasecTwoFiftySixKBBank", chimerasecTwoFiftySixKBBank);
            localStorage.setItem("chimerasecFiveTwelveKBBank", chimerasecFiveTwelveKBBank);
            localStorage.setItem("chimerasecOneMBBank", chimerasecOneMBBank);
            localStorage.setItem("chimerasecTwoMBBank", chimerasecTwoMBBank);
            localStorage.setItem("chimerasecFourMBBank", chimerasecFourMBBank);
            localStorage.setItem("chimerasecEightMBBank", chimerasecEightMBBank);
            localStorage.setItem("chimerasecSixteenMBBank", chimerasecSixteenMBBank);

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

            $('#wizardLevel2Abilities').hide(1);
            $('#chimerasecGrowthBenderAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel3-1').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            thePeoplesWizardActive = 'true';
            localStorage.setItem("thePeoplesWizardActive", thePeoplesWizardActive);
            riskClearedTargetAmtIncrement += 100;

            $('#wizardLevel3Abilities').hide(1);
            $('#thePeoplesWizardAbility').show(1);
        }        
        return false;
    });
    $('#btnWizardLevel3-2').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            russianPowerAmplificationActive = 'true';
            localStorage.setItem("russianPowerAmplificationActive", russianPowerAmplificationActive);

            $('#wizardLevel3Abilities').hide(1);
            $('#russianPowerAmplificationAbility').show(1);
            $('#russianPowerAmplificationDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel3-3').click(function () {
        if (money >= 1000000) {
            money -= 1000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecReflectionFieldActive = 'true';
            localStorage.setItem("vipersecReflectionFieldActive", vipersecReflectionFieldActive);

            $('#wizardLevel3Abilities').hide(1);
            $('#vipersecReflectionFieldAbility').show(1);
            $('#vipersecReflectionFieldDisplay').show(1);
        }

        return false;
    });

    $('#btnWizardLevel4-1').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            necromancerActive = 'true';
            localStorage.setItem("necromancerActive", necromancerActive);

            $('#wizardLevel4Abilities').hide(1);
            $('#necromancerAbility').show(1);
            $('#necromancerItem').show(1);
        }
        return false;
    });
    $('#btnWizardLevel4-2').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ipOverchargeActive = 'true';
            localStorage.setItem("ipOverchargeActive", ipOverchargeActive);

            $('#wizardLevel4Abilities').hide(1);
            $('#ipOverchargeAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel4-3').click(function () {
        if (money >= 10000000) {
            money -= 10000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            griffonBloodLustActive = 'true';
            localStorage.setItem("griffonBloodLustActive", griffonBloodLustActive);

            $('#wizardLevel4Abilities').hide(1);
            $('#griffonBloodLustAbility').show(1);
            $('#griffonBloodLustDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel5-1').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            riskClearedTargetAmtIncrement += 250;
            partyBuffWizardActive = 'true';
            localStorage.setItem("partyBuffWizardActive", partyBuffWizardActive);

            $('#wizardLevel5Abilities').hide(1);
            $('#partyBuffWizardAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel5-2').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            delsecManipulationActive = 'true';
            localStorage.setItem("delsecManipulationActive", delsecManipulationActive);
            bonusDelsecPackets = totalPackets * 0.25;
            riskDetectionAmt += (totalPackets + bonusDelsecPackets) / 10 * superstormMultiplyer;
            localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
            $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            $('#wizardLevel5Abilities').hide(1);
            $('#delsecManipulationAbility').show(1);
            $('#delsecManipulationDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel5-3').click(function () {
        if (money >= 100000000) {
            money -= 100000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecFaderActive = 'true';
            localStorage.setItem("vipersecFaderActive", vipersecFaderActive);

            $('#wizardLevel5Abilities').hide(1);
            $('#vipersecFaderAbility').show(1);
            $('#vipersecFaderDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel6-1').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            packetSummonerActive = 'true';
            localStorage.setItem("packetSummonerActive", packetSummonerActive);

            $('#wizardLevel6Abilities').hide(1);
            $('#packetSummonerAbility').show(1);
            $('#packetSummonerDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel6-2').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            IPFirestormActive = 'true';
            localStorage.setItem("IPFirestormActive", IPFirestormActive);

            $('#wizardLevel6Abilities').hide(1);
            $('#IPFirestormAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel6-3').click(function () {
        if (money >= 1000000000) {
            money -= 1000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecStealthFieldActive = 'true';
            localStorage.setItem("vipersecStealthFieldActive", vipersecStealthFieldActive);

            $('#wizardLevel6Abilities').hide(1);
            $('#vipersecStealthFieldAbility').show(1);
            $('#vipersecStealthFieldDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel7-1').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chimerasecMassProductionActive = 'true';
            localStorage.setItem("chimerasecMassProductionActive", chimerasecMassProductionActive);
            chimerasecMassProductionDivider = 2;

            currentChimerasec1BytePrice = currentChimerasec1BytePrice / chimerasecMassProductionDivider;
            currentChimerasec2BytePrice = currentChimerasec2BytePrice / chimerasecMassProductionDivider;
            currentChimerasec4BytePrice = currentChimerasec4BytePrice / chimerasecMassProductionDivider;
            currentChimerasec8BytePrice = currentChimerasec8BytePrice / chimerasecMassProductionDivider;
            currentChimerasec16BytePrice = currentChimerasec16BytePrice / chimerasecMassProductionDivider;
            currentChimerasec32BytePrice = currentChimerasec32BytePrice / chimerasecMassProductionDivider;
            currentChimerasec64BytePrice = currentChimerasec64BytePrice / chimerasecMassProductionDivider;
            currentChimerasec128BytePrice = currentChimerasec128BytePrice / chimerasecMassProductionDivider;
            currentChimerasec256BytePrice = currentChimerasec256BytePrice / chimerasecMassProductionDivider;
            currentChimerasec512BytePrice = currentChimerasec512BytePrice / chimerasecMassProductionDivider;
            currentChimerasec1KBPrice = currentChimerasec1KBPrice / chimerasecMassProductionDivider;
            currentChimerasec2KBPrice = currentChimerasec2KBPrice / chimerasecMassProductionDivider;
            currentChimerasec4KBPrice = currentChimerasec4KBPrice / chimerasecMassProductionDivider;
            currentChimerasec8KBPrice = currentChimerasec8KBPrice / chimerasecMassProductionDivider;
            currentChimerasec16KBPrice = currentChimerasec16KBPrice / chimerasecMassProductionDivider;
            currentChimerasec32KBPrice = currentChimerasec32KBPrice / chimerasecMassProductionDivider;
            currentChimerasec64KBPrice = currentChimerasec64KBPrice / chimerasecMassProductionDivider;
            currentChimerasec128KBPrice = currentChimerasec128KBPrice / chimerasecMassProductionDivider;
            currentChimerasec256KBPrice = currentChimerasec256KBPrice / chimerasecMassProductionDivider;
            currentChimerasec512KBPrice = currentChimerasec512KBPrice / chimerasecMassProductionDivider;
            currentChimerasec1MBPrice = currentChimerasec1MBPrice / chimerasecMassProductionDivider;
            currentChimerasec2MBPrice = currentChimerasec2MBPrice / chimerasecMassProductionDivider;
            currentChimerasec4MBPrice = currentChimerasec4MBPrice / chimerasecMassProductionDivider;
            currentChimerasec8MBPrice = currentChimerasec8MBPrice / chimerasecMassProductionDivider;
            currentChimerasec16MBPrice = currentChimerasec16MBPrice / chimerasecMassProductionDivider;

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


            $('#wizardLevel7Abilities').hide(1);
            $('#chimerasecMassProductionAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel7-2').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            ironCurtainActive = 'true';
            localStorage.setItem("ironCurtainActive", ironCurtainActive);

            $('#wizardLevel7Abilities').hide(1);
            $('#ironCurtainAbility').show(1);
            $('#ironCurtainItem').show(1);
        }
        return false;
    });
    $('#btnWizardLevel7-3').click(function () {
        if (money >= 10000000000) {
            money -= 10000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecInvisibilityActive = 'true';
            localStorage.setItem("vipersecInvisibilityActive", vipersecInvisibilityActive);

            $('#wizardLevel7Abilities').hide(1);
            $('#vipersecInvisibilityAbility').show(1);
            $('#vipersecInvisibilityDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel8-1').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            delsecSuperstormActive = 'true';
            superstormMultiplyer = 2;
            if (delsecManipulationActive == 'true') { // apply again as superstorm bonus is 100% packets so same number.
                riskDetectionAmt += (totalPackets + bonusDelsecPackets) / 10;
                localStorage.setItem("riskDetectionAmt", riskDetectionAmt);
                $('#currentRiskAmtDisplay').html("<h2>" + riskDetectionAmt.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString() + " Risk</h2>");
            }

            localStorage.setItem("delsecSuperstormActive", delsecSuperstormActive);

            $('#wizardLevel8Abilities').hide(1);
            $('#delsecSuperstormAbility').show(1);
            $('#delsecSuperstormIncomeDisplay').show(1);
            $('#delsecSuperstormPacketDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel8-2').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            chaosWizardActive = 'true';
            localStorage.setItem("chaosWizardActive", chaosWizardActive);
            riskClearedTargetAmtIncrement += 50000;
            $('#wizardLevel8Abilities').hide(1);
            $('#chaosWizardAbility').show(1);
            $('#chaosWizardDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel8-3').click(function () {
        if (money >= 100000000000) {
            money -= 100000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            vipersecTimeReversalActive = 'true';
            localStorage.setItem("vipersecTimeReversalActive", vipersecTimeReversalActive);

            $('#wizardLevel8Abilities').hide(1);
            $('#vipersecTimeReversalAbility').show(1);
            $('#vipersecTimeReversalDisplay').show(1);
        }
        return false;
    });
    $('#btnWizardLevel9-1').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            delsecTechGodActive = 'true';
            localStorage.setItem("delsecTechGodActive", delsecTechGodActive);

            $('#wizardLevel9Abilities').hide(1);
            $('#delsecTechGodAbility').show(1);
            $('#delsecTechGodItem').show(1);
        }
        return false;
    });
    $('#btnWizardLevel9-2').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            riskFreeWorldActive = 'true';
            localStorage.setItem("riskFreeWorldActive", riskFreeWorldActive);

            $('#wizardLevel9Abilities').hide(1);
            $('#riskFreeWorldAbility').show(1);
        }
        return false;
    });
    $('#btnWizardLevel9-3').click(function () {
        if (money >= 1000000000000) {
            money -= 1000000000000;
            localStorage.setItem("money", money);
            $('#lblMoneyDisplay').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $('#lblMoneyDisplayScroll').html('$' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            $(document).prop('title', 'Delsec Account: $' + money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,").toString());
            redArmyConscriptionActive = 'true';
            localStorage.setItem("redArmyConscriptionActive", redArmyConscriptionActive);
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

            $('#wizardLevel9Abilities').hide(1);
            $('#redArmyConscriptionAbility').show(1);
            $('#redArmyConscriptionDisplay').show(1);
        }
        return false;
    });

    $('#btnResetWizardSkillPoints').click(function () {
        localStorage.setItem("delsecZapperActive", 'false');
        localStorage.setItem("russianZapperActive", 'false');
        localStorage.setItem("griffonZapperActive", 'false');
        localStorage.setItem("chainConnectionActive", 'false');
        localStorage.setItem("delsecChargerActive", 'false');
        localStorage.setItem("chimerasecGrowthBenderActive", 'false');
        localStorage.setItem("thePeoplesWizardActive", 'false');
        localStorage.setItem("russianPowerAmplificationActive", 'false');
        localStorage.setItem("vipersecReflectionFieldActive", 'false');
        localStorage.setItem("necromancerActive", 'false');
        localStorage.setItem("ipOverchargeActive", 'false');
        localStorage.setItem("griffonBloodLustActive", 'false');
        localStorage.setItem("partyBuffWizardActive", 'false');
        localStorage.setItem("delsecManipulationActive", 'false');
        localStorage.setItem("vipersecFaderActive", 'false');
        localStorage.setItem("packetSummonerActive", 'false');
        localStorage.setItem("IPFirestormActive", 'false');
        localStorage.setItem("vipersecStealthFieldActive", 'false');
        localStorage.setItem("chimerasecMassProductionActive", 'false');
        localStorage.setItem("ironCurtainActive", 'false');
        localStorage.setItem("vipersecInvisibilityActive", 'false');
        localStorage.setItem("delsecSuperstormActive", 'false');
        localStorage.setItem("chaosWizardActive", 'false');
        localStorage.setItem("vipersecTimeReversalActive", 'false');
        localStorage.setItem("delsecTechGodActive", 'false');
        localStorage.setItem("riskFreeWorldActive", 'false');
        localStorage.setItem("redArmyConscriptionActive", 'false');
        alert("Abilities Reset.");
        return true;
    });

    $('.btnNewClassWizard').click(function () {
        localStorage.clear();
        if (healerQuadrantEarned == 'true')
            localStorage.setItem("healerQuadrantEarned", 'true');
        if (wizardQuadrantEarned == 'true') 
            localStorage.setItem("wizardQuadrantEarned", 'true');
        if (warriorQuadrantEarned == 'true')
            localStorage.setItem("warriorQuadrantEarned", 'true');
        if (rogueQuadrantEarned == 'true')
            localStorage.setItem("rogueQuadrantEarned", 'true');
        
        return true;
    });

});