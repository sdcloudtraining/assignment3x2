// Countdown

let countStart = prompt("Enter Coundown Number");

for (var i=countStart; i>-1; i--){

    console.log(i);

}




//Validate Repeat Entry in Lab 5

if (again !== "y" || again !== "n") {

    again = window.prompt("Repeat entries? (y or n)", "y");
}



//Validate Numeric Entries in Lab 6


if (isNaN(investment)){
    investment = parseFloat(window.prompt("Enter investment amount as xxxx.xx"));
}

else if (isNaN(rate)){
    rate = parseFloat(window.prompt("Enter interst rate as xx.x"));
}
else if (rate < 0){
    rate = parseFloat(window.prompt("Enter interst rate as xx.x"));
}

else if (rate > 6){
    rate = parseFloat(window.prompt("Enter interst rate as xx.x"));
}

else if (years < 1){

    years = parseInt(window.prompt("Enter number of years"), 10);
    
    }
else if (years > 30){

    years = parseInt(window.prompt("Enter number of years"), 10);
    
    }