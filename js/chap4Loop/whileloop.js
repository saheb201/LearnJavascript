// var i = 0;
// while(i < 10){
//         console.log("saheb ali")
//         i++
// }

 var isRunning = true;
 while(isRunning){
    var rand = Math.floor(Math.random() *10 + 1);
    if (rand == 9){
        console.log("winnwr winner chicken dinner");
        isRunning = false
    }else{
        console.log("you have got" + rand);
    }
 }
