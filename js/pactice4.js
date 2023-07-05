// console.log("Chapter 02")
// var date = new Date();
// console.log(date)
// console.log(date.getDate())
// console.log(date.getDay())
// console.log(date.getFullYear())
// console.log(date.getHours())
// console.log(date.getMilliseconds())
// console.log(date.getMinutes())
// console.log(date.getMonth())
// console.log(date.getSeconds())
// console.log(date.getTime())
// console.log(date.getTimezoneOffset())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())


// // math Function
// console.log(Math.PI)
// console.log(Math.E)

// var a = 4.50;
// console.log(Math.floor(a))
// console.log(Math.ceil(a))
// console.log(Math.round(a))

// console.log(Math.max(20,10,100))
// console.log(Math.min(20,10,100))
// console.log(Math.pow(5,4))
// console.log(Math.sqrt(81))
// console.log(Math.round(Math.random()*10+1))

// // swich 

// var date = new Date;
// var today = date.getDay();

// console.log(today)

// switch (today){
//     case 0:
//         console.log("Today is sunday");
    
//     case 1:
//         console.log("MonDay")

//     case 2:
//         console.log("TuesDay")
//     case 3:
//         console.log("WednuesDay")
//     case 4:
//         console.log("ThurseDay")
//     case 5 :
//         console.log("FriDay")
//     case 6:
//         console.log("SatuerDay")
    
// }

// // Condition

// var subject = 33;

// if (subject >= 80){
//     console.log("A+")

// }else if (subject >= 70){
//     console.log("A")

// }else if (subject >= 60){
//     console.log("B+")

// }else if (subject >= 50){
//     console.log("B")

// }else if (subject >= 40){
//     console.log("C")

// }else if (subject >= 33){
//     console.log("D")
// }
// else{
//     console.log("You Are Fail")
// }


// // ternary operetore

// var mark = 32;

//  var result = mark >= 33 ? "You Are Pass" : "You Are Fail"


// console.log(result)


// loop

// for loop
// var sum = 0;
// for (i = 0; i<= 10; i++){
//      sum += i;
     
     
// }
// console.log(sum)


// var sumEven = 0;
// for (i = 0; i<= 10; i++){
     
//      if(i % 2 == 0){
//         console.log(i)
//         sumEven += i;
//      }
// }
// console.log(sumEven)


// // whileloop
// var isRunning = true;
// while(isRunning){
//     var rand = Math.round(Math.random()*10+1);
//     if(rand == 5){
//         console.log('Your Data Is Find')
//        break;
//     }else{console.log('Your data is Not Find')}
   
// }

//nested loop
// example output
// 1
// 12
// 123
// 1234
// 12345
// var num = 10;
// for(i= 1; i<= num; i++){
//     var result = " ";
//     for(j= 1; j <=i; j++){
//      result += j + " " ;
//     }
//     console.log(result)
// }
  

// arry 

// var arr = [2, 10, 5, 7, 9, 10]

// console.log(arr)
// arr[0] = 10;
// console.log(arr)
// arr.push(10)
// console.log(arr)
// arr.unshift(5)
// console.log(arr)

// arr.splice(2, 0, 99)
// console.log(arr)
// arr.pop(10)
// console.log(arr)
// arr.shift(5)
// console.log(arr)

// arr.splice(2, 4, 99)
// console.log(arr)


// // Search value from arry

// var arr = [10, 21, 8, 70];
// var find = 70;
// var isFound = false;
// for (i = 0; i < arr.length; i++){
//     if( find == arr[i] ){
//         console.log("Your data is Found" , i)
//       isFound = true

//         break;
//     }
    
// }if(!isFound){
//     console.log('Your Data is Not Found')
// }

// var arr = [20, 70, 85, 78, 10];

// for (i = 0; i<arr.length / 2; i++){
//     var temp = arr[i]
//     arr[i] = arr[arr.length -1 -i]
//     arr[arr.length -1 -i] = temp
// }
// console.log(arr)




// object
// var obj = {};
// console.log(obj)

// var obj = Object;
// obj.a = 10;
// obj.b = 20;
// console.log(obj)


// var obj = new Object();
// obj.a= 25;
// console.log(obj)



var obj = {a:10, b:20, c:30}
console.log(obj.a)
console.log(obj.b)

obj.a = 55;
obj.b = 5;

console.log(obj.a)
console.log(obj.b)

 //object compaire
 var obj1 = {a:20, b:30}
 var obj2 = {a:20, b:30}

//  console.log(obj1.a === obj2.a)
//  if(obj1.a === obj2.a & obj1.b === obj2.b){
//     console.log("Your Data is Match")
//  }else{
//     console.log("Your Data is not Match")
//  }


 console.log(obj1, obj2)

console.log(JSON.stringify(obj1) === JSON.stringify(obj2))


// // object traverse
// var obj2 = {a:20, b:30}

// for (i in obj2){
//     console.log(i)
//     console.log(obj2[i])
// }



// remove object 

var obj = {a:20, b:30}
console.log(obj)
delete obj.b;
console.log(obj0)
