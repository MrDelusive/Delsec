$(window).load(function () {
    //button was initially disabled for some reason.
    $('#btnInvestWiki').prop('disabled', false);


    $('#btnInvestWiki').click(function () {

        if (money >= 2) {
            money -= 2;
            var investAmt = 2;
            var increment;
            // disable button for 10s
            var btn = $(this);
            btn.prop('disabled', true);
            window.setTimeout(function () {
                btn.prop('disabled', false);
                var roll = Math.floor((Math.random() * 10) + 1);
                if (userClass == "Healer")
                    roll += 1;
                switch (roll) {
                    case 1: //lose all - 100%                      
                        alert("Wikipedia has been shut down, you lose your investment.");
                        break;
                    case 2: //investment - 50%                        
                        increment = investAmt/2;
                        money += increment; // extra steps for use in alert
                        alert("Wikipedia was hacked during your investment, you have lost half. RETURN: $" + increment.toFixed(2));
                        break;
                    case 3: //investment - 20%
                        increment = investAmt - investAmt / 5;
                        money += increment;
                        alert("Wikipedia lost track of your investment, you have lost 20% of your investment. RETURN: $" + increment.toFixed(2));
                        break;
                    case 4: //investment + 5%
                        increment = investAmt + investAmt / 20;
                        money += increment;                       
                        alert("Wikipedia has grown from your investment. RETURN $" + increment.toFixed(2));
                        break;
                    case 5: //investment + 10%
                        increment = investAmt + investAmt / 10;
                        money += increment;                       
                        alert("Wikipedia has grown from your investment. RETURN $" + increment.toFixed(2));
                        break;
                    case 6: //investment + 20%
                        increment = investAmt + investAmt / 5;
                        money += increment;                      
                        alert("Wikipedia has grown from your investment. RETURN $" + increment.toFixed(2));
                        break;
                    case 7: //investment + 50%
                        increment = investAmt + investAmt / 2;
                        money += increment;
                        alert("Wikipedia has grown from your investment. RETURN $" + increment.toFixed(2));
                        break;
                    case 8: //investment + 100%
                        increment = investAmt * 2;
                        money += increment;
                        alert("Wikipedia has Developed new features that have sold really well. RETURN $" + increment.toFixed(2));
                        break;
                    case 9: //investment + 200%
                        increment = investAmt * 3;
                        money += increment;
                        alert("Wikipedia has Developed new features that have sold really well. RETURN $" + increment.toFixed(2));
                        break;
                    case 10: //investment + 500%
                        increment = investAmt * 6;
                        money += increment;
                        alert("Wikipedia has grown far beyond anyone ever thought. RETURN $" + increment.toFixed(2));
                        break;
                    case 11: //investment + 1000% Only possible from Healer
                        increment = investAmt * 11;
                        money += increment;
                        alert("Your special Healer abilities have made your investment grow beyond any normal investment. RETURN $" + increment.toFixed(2));
                        break;
                    default:
                        break;
                }

                
            }, 10000);
                       

        }
        return false;
    });    
})(jQuery);