// Closure is  When a function is able to remember and access it's
//lexical scope even that function executing outside it's lexical scope


// //function is able to remember


// function test (){
//     var msg = 'I am Learning Lexical Scope and Closure'

//     function sayMsg(){
//         console.log(msg)
//     }
//     sayMsg()
// }
// test()



// //function executing outside it's lexical scope
// function test (){
//     var msg = 'I am Learning Lexical Scope and Closure'

//      return function(){
//         console.log(msg)
//     }
   
// }
// test()
// var sayMsg = test();

// sayMsg()



// closure loop
for (var i = 1; i<=5;i++){
   (function(n){
      setTimeout(function(){
        console.log(n);
    }, 1000*n)
   })(i)

    
}