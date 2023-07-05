//Coding challenge #1: Print numbers from 1 to 10

// for(var i = 0; i <= 10; i++){
//     console.log(i)
// }
//Coding challenge #2: Print the odd numbers less than 100

// for(var i =0; i <= 100; i++){
//     if(i % 2 == 1){
//         console.log(i)
//     }

// }

// // Coding challenge #2: Print the even numbers less than 100
// for(var i =0; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }

// }

//Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

var multiplication = 1;
for(var i = 1; i <= 10; i++){
    multiplication *= i;
    console.log(i + " ")
    
   

}
console.log(multiplication)

//Coding challenge #5: Calculate the sum of numbers from 1 to 10
var sum = 0;
for(var i =0; i <= 10; i++){
    sum += i;
    console.log(i + " ")
    console.log(sum)
}

console.log(sum)