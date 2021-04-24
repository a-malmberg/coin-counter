
function myCalc() {
    var myCents = document.getElementById('cents').value;
    if (myCents > 0 && myCents < 100) {
        var myQuarters = Math.floor (myCents/25);
        document.getElementById('quarters').value = myQuarters;
        var qLeft = myCents % 25;
    //else if leftOver is >10 ....
        var myDimes = Math.floor (qLeft/10);
        document.getElementById('dimes').value = myDimes;
        var dLeft = qLeft % 10;
    //else if leftOver2 is >5...
        var myNickels = Math.floor (dLeft/5);
        document.getElementById('nickels').value = myNickels;
        var niLeft = dLeft % 5;
        document.getElementById('pennies').value = niLeft;
    //alert(niLeft); //same as number of pennies
    } else {
        alert("Entry must be between 0 and 99");
    }
}


/*
var $ = function (id) {
    return document.getElementById(id);
}*/
