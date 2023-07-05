// swich video number 25
var date = new Date();
//logic 0 - sunday 1 - monday 2- tuseday
var today = date.getDay();
console.log(today);
switch(today){
    case 0:
        console.log("Today is sunday");
        break;

    case 1:
            console.log("Today is monday");
            break;
    case 2:
            console.log("Today is Tuseday");
            break;
    case 3:
           console.log("Today is Wednuesday");
            break;
        
    case 4:
            console.log("Today is Thuseday");
             break;
    case 5:
            console.log("Today is friday");
            break;
    case 6:
         console.log("Today is satureday");
         break;

}